/**
 * RAAHIYOO AI — BACKEND API HANDLER (Vercel Serverless Function)
 * Route: POST /api/chat
 * 
 * Features:
 * 1. Google Gemini 1.5/2.0 API Integration with Multi-Model Fallback
 * 2. Strict Alternating Multi-turn conversation history formatting
 * 3. Secure environment variable loading (process.env.GEMINI_API_KEY)
 * 4. Request validation & input sanitization
 * 5. In-memory sliding window rate limiting
 * 6. Transparent and graceful error handling
 * 7. Full Vercel Serverless compatibility
 */

// In-memory rate limiting store (IP -> array of request timestamps)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 30; // Max 30 requests per minute per IP

// Cleanup old rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitStore.entries()) {
    const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    if (recent.length === 0) {
      rateLimitStore.delete(ip);
    } else {
      rateLimitStore.set(ip, recent);
    }
  }
}, 5 * 60 * 1000).unref?.();

// Official Raahiyoo AI System Prompt
const SYSTEM_PROMPT = `You are Raahiyoo AI, an intelligent travel assistant and general AI assistant.

You help users with:
- Travel planning
- Trek recommendations
- Budget travel
- Itinerary creation
- Packing advice
- Transportation guidance
- Travel safety

You can also answer normal questions outside travel just like a modern AI assistant.

Be conversational, intelligent, friendly, and helpful.

Do not simply repeat website content.

Understand user intent and provide detailed, useful responses.`;

// Supported active Google Gemini models (no deprecated models)
const GEMINI_MODELS = [
  'gemini-1.5-flash',
  'gemini-1.5-flash-8b',
  'gemini-1.5-pro',
  'gemini-2.0-flash'
];

/**
 * Check if the requesting IP is within rate limits
 */
function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitStore.get(ip) || [];
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  recent.push(now);
  rateLimitStore.set(ip, recent);
  return false;
}

/**
 * Helper to build valid alternating Google Gemini contents array
 */
function buildGeminiContents(history, currentMessage) {
  const rawTurns = [];

  if (Array.isArray(history) && history.length > 0) {
    for (const turn of history.slice(-16)) {
      if (turn && typeof turn.content === 'string' && turn.content.trim()) {
        rawTurns.push({
          role: turn.role === 'assistant' || turn.role === 'model' ? 'model' : 'user',
          text: turn.content.trim()
        });
      }
    }
  }

  // Add current user turn
  rawTurns.push({
    role: 'user',
    text: currentMessage.trim()
  });

  // Ensure first turn is 'user'
  while (rawTurns.length > 0 && rawTurns[0].role !== 'user') {
    rawTurns.shift();
  }

  if (rawTurns.length === 0) {
    rawTurns.push({ role: 'user', text: currentMessage.trim() });
  }

  // Prepend system prompt to the first user turn for 100% universal Gemini API compatibility
  rawTurns[0].text = `[SYSTEM INSTRUCTIONS]:\n${SYSTEM_PROMPT}\n\n[USER QUERY]:\n${rawTurns[0].text}`;

  // Merge consecutive same-role turns to satisfy Gemini strict alternating requirement
  const mergedContents = [];
  for (const turn of rawTurns) {
    const last = mergedContents[mergedContents.length - 1];
    if (last && last.role === turn.role) {
      last.parts[0].text += `\n\n${turn.text}`;
    } else {
      mergedContents.push({
        role: turn.role,
        parts: [{ text: turn.text }]
      });
    }
  }

  return mergedContents;
}

/**
 * Vercel Serverless Function Handler
 */
export default async function handler(req, res) {
  // 1. Handle CORS Preflight
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-gemini-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please send a POST request.'
    });
  }

  // 3. Apply Rate Limiting
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 
                   req.socket?.remoteAddress || 
                   '127.0.0.1';

  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a moment before sending another message.'
    });
  }

  try {
    // 4. Validate Request Body
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { message, history } = body || {};

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request: "message" is required and must be a non-empty string.'
      });
    }

    if (message.length > 4000) {
      return res.status(400).json({
        success: false,
        error: 'Message is too long. Maximum allowed length is 4,000 characters.'
      });
    }

    // 5. Verify Gemini API Key exists
    const apiKey = (process.env.GEMINI_API_KEY || req.headers['x-gemini-key'] || body.apiKey || '').trim();
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      console.error('ERROR: GEMINI_API_KEY is not configured in environment variables.');
      return res.status(500).json({
        success: false,
        error: 'AI service configuration error: GEMINI_API_KEY is not set in environment variables. Please add it to your .env file or Vercel dashboard.'
      });
    }

    // 6. Build alternating Gemini contents
    const contents = buildGeminiContents(history, message);

    // 7. Try candidate Gemini models with fallback
    let lastError = null;

    for (const model of GEMINI_MODELS) {
      try {
        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

        const geminiPayload = {
          contents: contents,
          generationConfig: {
            temperature: 0.75,
            topP: 0.95,
            maxOutputTokens: 2048
          }
        };

        const apiResponse = await fetch(geminiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(geminiPayload)
        });

        if (apiResponse.ok) {
          const data = await apiResponse.json();
          const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

          if (replyText) {
            return res.status(200).json({
              success: true,
              reply: replyText,
              model: model
            });
          }
        } else {
          const errText = await apiResponse.text();
          let parsedError = '';
          try {
            const errJson = JSON.parse(errText);
            parsedError = errJson.error?.message || errText;
          } catch(e) {
            parsedError = errText;
          }

          console.warn(`Model ${model} returned [${apiResponse.status}]: ${parsedError}`);
          lastError = {
            status: apiResponse.status,
            message: parsedError
          };

          // If unauthorized/bad key (401/403), stop trying other models as key is invalid
          if (apiResponse.status === 401 || apiResponse.status === 403) {
            return res.status(401).json({
              success: false,
              error: `Google Gemini API Error (Invalid API Key): ${parsedError}`
            });
          }
        }
      } catch (fetchErr) {
        console.warn(`Fetch failed for model ${model}:`, fetchErr.message);
        lastError = { status: 502, message: fetchErr.message };
      }
    }

    // If all models failed, return detailed last error
    return res.status(lastError?.status || 502).json({
      success: false,
      error: lastError?.message ? `Google Gemini Error: ${lastError.message}` : 'Failed to communicate with Google Gemini AI. Please try again in a moment.'
    });

  } catch (error) {
    console.error('Unhandled server error in /api/chat:', error);
    return res.status(500).json({
      success: false,
      error: `Server Error: ${error.message || 'An unexpected error occurred while processing your message.'}`
    });
  }
}

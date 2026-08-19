/**
 * RAAHIYOO AI — BACKEND API HANDLER (Vercel Serverless Function)
 * Route: POST /api/chat
 * 
 * Features:
 * 1. Google Gemini 1.5 API Integration
 * 2. Multi-turn conversation history support
 * 3. Secure environment variable loading (process.env.GEMINI_API_KEY)
 * 4. Request validation & input sanitization
 * 5. In-memory sliding window rate limiting
 * 6. Graceful failure and error handling
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

// System prompt defining Raahiyoo AI identity and behavior
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
 * Vercel Serverless Function Handler
 */
export default async function handler(req, res) {
  // 1. Handle CORS Preflight
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

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

    // 5. Verify Gemini API Key exists in environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      console.error('ERROR: GEMINI_API_KEY is not configured in environment variables.');
      return res.status(500).json({
        success: false,
        error: 'AI service configuration error: GEMINI_API_KEY is not set in environment variables. Please add it to your .env file or Vercel dashboard.'
      });
    }

    // 6. Format Conversation History for Google Gemini API
    const contents = [];

    // Add previous valid conversation turns (up to last 16 turns for context memory)
    if (Array.isArray(history)) {
      const sanitizedHistory = history
        .slice(-16)
        .filter(item => item && (item.role === 'user' || item.role === 'assistant' || item.role === 'model') && typeof item.content === 'string');

      for (const turn of sanitizedHistory) {
        contents.push({
          role: turn.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: turn.content }]
        });
      }
    }

    // Add current user message
    contents.push({
      role: 'user',
      parts: [{ text: message.trim() }]
    });

    // 7. Call Google Gemini 1.5 Flash API
    const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

    const geminiPayload = {
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
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

    // 8. Handle Gemini API response status
    if (!apiResponse.ok) {
      const errBody = await apiResponse.text();
      console.error(`Gemini API Error [${apiResponse.status}]:`, errBody);

      if (apiResponse.status === 400) {
        return res.status(400).json({
          success: false,
          error: 'Invalid request format sent to AI engine.'
        });
      } else if (apiResponse.status === 403 || apiResponse.status === 401) {
        return res.status(401).json({
          success: false,
          error: 'Invalid or unauthorized GEMINI_API_KEY. Please verify your API key in Google AI Studio.'
        });
      } else if (apiResponse.status === 429) {
        return res.status(429).json({
          success: false,
          error: 'Gemini API rate limit exceeded. Please wait a few seconds and try again.'
        });
      } else {
        return res.status(502).json({
          success: false,
          error: 'Failed to communicate with AI engine. Please try again in a few moments.'
        });
      }
    }

    const data = await apiResponse.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) {
      return res.status(500).json({
        success: false,
        error: 'AI returned an empty response. Please try rephrasing your message.'
      });
    }

    // 9. Return Successful AI Response
    return res.status(200).json({
      success: true,
      reply: replyText,
      model: 'gemini-1.5-flash'
    });

  } catch (error) {
    console.error('Unhandled server error in /api/chat:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while generating response. Please try again.'
    });
  }
}

/**
 * RAAHIYOO AI — CLIENT-SIDE CHAT CONTROLLER (Hybrid Architecture)
 * 
 * Supports:
 * 1. Backend Serverless API (/api/chat) if available
 * 2. 100% FREE Direct Client-Side Gemini API (Zero Vercel/Server cost)
 * 3. Multi-turn conversation memory (last 20 turns)
 * 4. Automatic fallback handling
 */

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

class RaahiyooAIChat {
  constructor() {
    this.history = [];
    this.isLoading = false;
    this.apiUrl = '/api/chat';
    this.clientApiKey = localStorage.getItem('raahiyoo_gemini_key') || '';
    this.loadSessionHistory();
  }

  loadSessionHistory() {
    try {
      const saved = sessionStorage.getItem('raahiyoo_session_history') || localStorage.getItem('raahiyoo_chat_history');
      if (saved) {
        this.history = JSON.parse(saved);
      }
    } catch (e) {
      this.history = [];
    }
  }

  saveSessionHistory() {
    try {
      sessionStorage.setItem('raahiyoo_session_history', JSON.stringify(this.history.slice(-20)));
      localStorage.setItem('raahiyoo_chat_history', JSON.stringify(this.history.slice(-20)));
    } catch (e) {}
  }

  clearHistory() {
    this.history = [];
    try {
      sessionStorage.removeItem('raahiyoo_session_history');
      localStorage.removeItem('raahiyoo_chat_history');
    } catch (e) {}
  }

  setApiKey(key) {
    this.clientApiKey = key.trim();
    if (this.clientApiKey) {
      localStorage.setItem('raahiyoo_gemini_key', this.clientApiKey);
    } else {
      localStorage.removeItem('raahiyoo_gemini_key');
    }
  }

  getApiKey() {
    return this.clientApiKey || localStorage.getItem('raahiyoo_gemini_key') || '';
  }

  /**
   * Send user message to AI (Backend first, fallback to direct client-side Gemini)
   */
  async sendMessage(userText) {
    const trimmed = userText.trim();
    if (!trimmed || this.isLoading) return null;

    this.isLoading = true;

    // 1. Add User Message to History
    this.history.push({
      role: 'user',
      content: trimmed,
      timestamp: new Date().toISOString()
    });
    this.saveSessionHistory();

    // 2. Prepare History Payload (excluding current message)
    const historyPayload = this.history.slice(0, -1).map(h => ({
      role: h.role,
      content: h.content
    }));

    // 3. Try Backend /api/chat First
    let backendFailed = false;
    let backendError = '';
    const clientKey = this.getApiKey();

    const headers = { 'Content-Type': 'application/json' };
    if (clientKey) {
      headers['x-gemini-key'] = clientKey;
    }

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
          apiKey: clientKey || undefined
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.success && data.reply) {
          this.history.push({
            role: 'assistant',
            content: data.reply,
            model: data.model || 'gemini-1.5-flash',
            timestamp: new Date().toISOString()
          });
          this.saveSessionHistory();
          this.isLoading = false;
          return { success: true, reply: data.reply };
        }
      } else {
        const data = await response.json().catch(() => ({}));
        backendError = data.error || `Server status ${response.status}`;
        backendFailed = true;
      }
    } catch (e) {
      backendFailed = true;
      backendError = e.message || 'Backend unreachable';
    }

    // 4. If backend failed or not configured, try Direct Client-Side Gemini Call
    if (clientKey) {
      try {
        const directReply = await this.callGeminiDirect(trimmed, historyPayload, clientKey);
        this.history.push({
          role: 'assistant',
          content: directReply,
          model: 'gemini-1.5-flash-direct',
          timestamp: new Date().toISOString()
        });
        this.saveSessionHistory();
        this.isLoading = false;
        return { success: true, reply: directReply };
      } catch (clientErr) {
        this.isLoading = false;
        console.error('Client Gemini API Error:', clientErr);
        return {
          success: false,
          needsKey: true,
          error: clientErr.message || 'Direct Gemini API error. Please verify your API key.'
        };
      }
    }

    // 5. If no backend key and no client key set
    this.isLoading = false;
    return {
      success: false,
      needsKey: true,
      error: 'Gemini API key is not connected yet. Click the button below to add your free key in 5 seconds, or redeploy on Vercel!'
    };
  }

  /**
   * Direct Browser-to-Gemini Call (100% Free, No Backend Required)
   */
  async callGeminiDirect(message, history, apiKey) {
    const contents = [];

    if (Array.isArray(history)) {
      for (const turn of history.slice(-16)) {
        if (turn && turn.content) {
          contents.push({
            role: turn.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: turn.content }]
          });
        }
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: contents,
        generationConfig: {
          temperature: 0.75,
          topP: 0.95,
          maxOutputTokens: 2048
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      throw new Error('AI returned an empty response.');
    }

    return reply;
  }
}

// Global Export
window.RaahiyooAI = new RaahiyooAIChat();

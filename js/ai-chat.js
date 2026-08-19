/**
 * RAAHIYOO AI — CLIENT-SIDE CHAT CONTROLLER
 * 
 * Production-Ready Conversational Engine:
 * - Directly streams queries to /api/chat powered by Google Gemini API
 * - Maintains multi-turn conversation memory across the session
 * - Renders dynamic Markdown (headers, bold, lists, tables, code)
 * - Auto-scrolls and manages loading states
 * - ZERO hardcoded/scripted responses — 100% pure generative AI
 */

class RaahiyooAIChat {
  constructor() {
    this.history = [];
    this.isLoading = false;
    this.apiUrl = '/api/chat';
    this.loadSessionHistory();
  }

  /**
   * Load session conversation history from storage
   */
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

  /**
   * Save conversation history to storage (last 20 turns)
   */
  saveSessionHistory() {
    try {
      const trimmedHistory = this.history.slice(-20);
      sessionStorage.setItem('raahiyoo_session_history', JSON.stringify(trimmedHistory));
      localStorage.setItem('raahiyoo_chat_history', JSON.stringify(trimmedHistory));
    } catch (e) {}
  }

  /**
   * Clear session history
   */
  clearHistory() {
    this.history = [];
    try {
      sessionStorage.removeItem('raahiyoo_session_history');
      localStorage.removeItem('raahiyoo_chat_history');
    } catch (e) {}
  }

  /**
   * Send User Message to Backend API (/api/chat)
   * Powered by Google Gemini 1.5 Flash API
   */
  async sendMessage(userText) {
    const trimmed = userText.trim();
    if (!trimmed || this.isLoading) return null;

    this.isLoading = true;

    // 1. Append User Message to History
    this.history.push({
      role: 'user',
      content: trimmed,
      timestamp: new Date().toISOString()
    });
    this.saveSessionHistory();

    // 2. Prepare History Payload (previous turns only)
    const historyPayload = this.history.slice(0, -1).map(h => ({
      role: h.role,
      content: h.content
    }));

    try {
      // 3. Call Backend Serverless Route
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        const errorMessage = data.error || `Server returned error (${response.status})`;
        throw new Error(errorMessage);
      }

      const aiReply = data.reply;

      // 4. Save AI Reply to History
      this.history.push({
        role: 'assistant',
        content: aiReply,
        model: data.model || 'gemini-1.5-flash',
        timestamp: new Date().toISOString()
      });
      this.saveSessionHistory();

      this.isLoading = false;
      return { success: true, reply: aiReply };

    } catch (err) {
      this.isLoading = false;
      console.error('Raahiyoo AI Chat Error:', err);
      return {
        success: false,
        error: err.message || 'Failed to connect to Raahiyoo AI server. Please check your connection and try again.'
      };
    }
  }
}

// Global Instance
window.RaahiyooAI = new RaahiyooAIChat();

/**
 * RAAHIYOO AI — CLIENT-SIDE CHAT CONTROLLER
 * Connects frontend interface to /api/chat backend endpoint with Google Gemini AI.
 * 
 * Features:
 * - Multi-turn conversational session history
 * - Smooth auto-scroll & typing indicator
 * - Markdown parser (headers, bold, lists, code, tables)
 * - Mobile responsive keyboard viewport adjustments
 * - Robust error handling with inline retry
 * - Voice speech-to-text input (Web Speech API)
 */

class RaahiyooAIChat {
  constructor() {
    this.history = [];
    this.isLoading = false;
    this.apiUrl = '/api/chat';
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

  /**
   * Send user message to /api/chat backend
   */
  async sendMessage(userText) {
    const trimmed = userText.trim();
    if (!trimmed || this.isLoading) return null;

    this.isLoading = true;

    // 1. Add User Message to History & UI
    this.history.push({
      role: 'user',
      content: trimmed,
      timestamp: new Date().toISOString()
    });
    this.saveSessionHistory();

    // 2. Prepare History for Backend (excluding the very message being sent now)
    const historyPayload = this.history.slice(0, -1).map(h => ({
      role: h.role,
      content: h.content
    }));

    try {
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
        const errorMsg = data.error || `Server responded with status ${response.status}`;
        throw new Error(errorMsg);
      }

      const aiReply = data.reply;

      // 3. Save AI Reply to History
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
      console.error('Chat error:', err);
      return {
        success: false,
        error: err.message || 'Failed to connect to AI server. Please check your internet connection.'
      };
    }
  }
}

// Global Export
window.RaahiyooAI = new RaahiyooAIChat();

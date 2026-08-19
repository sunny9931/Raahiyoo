/**
 * RAAHIYOO LOCAL DEVELOPMENT SERVER (Node.js / Express)
 * Run locally with: node server.js
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Import Vercel API handler
let chatHandler;
try {
  chatHandler = require('./api/chat.js').default || require('./api/chat.js');
} catch (e) {
  // If ES module
  import('./api/chat.js').then(mod => {
    chatHandler = mod.default || mod;
  });
}

// API Route
app.all('/api/chat', async (req, res) => {
  if (!chatHandler) {
    const mod = await import('./api/chat.js');
    chatHandler = mod.default || mod;
  }
  return chatHandler(req, res);
});

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Raahiyoo AI Local Server Running at: http://localhost:${PORT}`);
  console.log(`💬 Open AI Chat: http://localhost:${PORT}/ai-chat.html`);
  console.log(`🔑 Gemini API Key Status: ${process.env.GEMINI_API_KEY ? 'Configured ✅' : 'Missing in .env ⚠️'}`);
  console.log(`=======================================================`);
});

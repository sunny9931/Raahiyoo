#!/usr/bin/env python3
"""
RAAHIYOO LOCAL DEVELOPMENT SERVER (Python 3 — Zero Dependencies Required)
Runs static file server and routes POST /api/chat directly with Google Gemini 1.5 API.
Run locally with: python3 server.py
"""

import os
import json
import urllib.request
import urllib.error
from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = int(os.environ.get("PORT", 3000))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load .env file manually if present
env_file = os.path.join(BASE_DIR, ".env")
if os.path.exists(env_file):
    with open(env_file, "r") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

SYSTEM_PROMPT = """You are Raahiyoo AI, an intelligent travel assistant and general AI assistant.

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

Understand user intent and provide detailed, useful responses."""


class RaahiyooDevServer(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/chat":
            content_len = int(self.headers.get("Content-Length", 0))
            post_body = self.rfile.read(content_len)
            
            try:
                body = json.loads(post_body.decode("utf-8"))
            except Exception:
                self.send_json({"success": False, "error": "Invalid JSON format"}, 400)
                return

            message = body.get("message", "").strip()
            history = body.get("history", [])

            if not message:
                self.send_json({"success": False, "error": "'message' field is required"}, 400)
                return

            api_key = os.environ.get("GEMINI_API_KEY", "")
            if not api_key or api_key == "your_gemini_api_key_here":
                self.send_json({
                    "success": False,
                    "error": "GEMINI_API_KEY is not configured in .env file. Please add your key to .env."
                }, 500)
                return

            # Format Gemini contents
            contents = []
            if isinstance(history, list):
                for turn in history[-16:]:
                    if isinstance(turn, dict) and "content" in turn:
                        role = "model" if turn.get("role") == "assistant" else "user"
                        contents.append({"role": role, "parts": [{"text": str(turn["content"])}]})

            contents.append({"role": "user", "parts": [{"text": message}]})

            payload = {
                "systemInstruction": {"parts": [{"text": SYSTEM_PROMPT}]},
                "contents": contents,
                "generationConfig": {"temperature": 0.75, "maxOutputTokens": 2048}
            }

            endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"

            try:
                req = urllib.request.Request(
                    endpoint,
                    data=json.dumps(payload).encode("utf-8"),
                    headers={"Content-Type": "application/json"}
                )
                with urllib.request.urlopen(req, timeout=30) as resp:
                    resp_data = json.loads(resp.read().decode("utf-8"))
                    reply = resp_data.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "")
                    if reply:
                        self.send_json({"success": True, "reply": reply, "model": "gemini-1.5-flash"})
                    else:
                        self.send_json({"success": False, "error": "AI returned empty response"}, 500)

            except urllib.error.HTTPError as e:
                err_msg = e.read().decode("utf-8")
                self.send_json({"success": False, "error": f"Gemini API Error [{e.code}]: {err_msg}"}, e.code)
            except Exception as e:
                self.send_json({"success": False, "error": f"Internal Error: {str(e)}"}, 500)
        else:
            self.send_error(404, "Endpoint not found")

    def send_json(self, data, status=200):
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))


if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", PORT), RaahiyooDevServer)
    print("=" * 65)
    print(f"🚀 Raahiyoo AI Python Dev Server running at: http://localhost:{PORT}")
    print(f"💬 Open AI Chat: http://localhost:{PORT}/ai-chat.html")
    api_k = os.environ.get("GEMINI_API_KEY", "")
    has_key = api_k and api_k != "your_gemini_api_key_here"
    print(f"🔑 Gemini API Key Status: {'Configured ✅' if has_key else 'Missing in .env ⚠️'}")
    print("=" * 65)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        server.server_close()

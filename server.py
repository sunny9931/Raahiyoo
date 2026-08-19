#!/usr/bin/env python3
"""
RAAHIYOO LOCAL DEVELOPMENT SERVER (Python 3 — Zero Dependencies Required)
Runs static file server and routes POST /api/chat directly with Google Gemini API.
Run locally with: python3 server.py
"""

import os
import re
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

GEMINI_MODELS = [
    "gemini-3.6-flash",
    "gemini-2.5-flash",
    "gemini-1.5-flash",
    "gemini-1.5-flash-8b",
    "gemini-1.5-pro"
]


def build_gemini_contents(history, current_message):
    raw_turns = []
    if isinstance(history, list):
        for turn in history[-16:]:
            if isinstance(turn, dict) and "content" in turn and str(turn["content"]).strip():
                role = "model" if turn.get("role") in ["assistant", "model"] else "user"
                raw_turns.append({"role": role, "text": str(turn["content"]).strip()})

    raw_turns.append({"role": "user", "text": current_message.strip()})

    while raw_turns and raw_turns[0]["role"] != "user":
        raw_turns.pop(0)

    if not raw_turns:
        raw_turns.append({"role": "user", "text": current_message.strip()})

    raw_turns[0]["text"] = f"[SYSTEM INSTRUCTIONS]:\n{SYSTEM_PROMPT}\n\n[USER QUERY]:\n{raw_turns[0]['text']}"

    merged = []
    for turn in raw_turns:
        if merged and merged[-1]["role"] == turn["role"]:
            merged[-1]["parts"][0]["text"] += f"\n\n{turn['text']}"
        else:
            merged.append({"role": turn["role"], "parts": [{"text": turn["text"]}]})

    return merged


class RaahiyooDevServer(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, x-gemini-key")
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

            api_key = (
                os.environ.get("GEMINI_API_KEY", "")
                or self.headers.get("x-gemini-key", "")
                or body.get("apiKey", "")
            ).strip()

            if not api_key or api_key == "your_gemini_api_key_here":
                self.send_json({
                    "success": False,
                    "error": "GEMINI_API_KEY is not configured in .env file or Vercel dashboard."
                }, 500)
                return

            contents = build_gemini_contents(history, message)
            models_to_try = list(GEMINI_MODELS)
            last_err = ""

            while models_to_try:
                model = models_to_try.pop(0)
                endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
                payload = {
                    "contents": contents,
                    "generationConfig": {"temperature": 0.75, "maxOutputTokens": 2048}
                }

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
                            self.send_json({"success": True, "reply": reply, "model": model})
                            return
                except urllib.error.HTTPError as e:
                    err_body = e.read().decode("utf-8")
                    last_err = f"Model {model} [{e.code}]: {err_body}"
                    match = re.search(r"use models/([a-zA-Z0-9\.\-_]+)", err_body, re.I)
                    if match and match.group(1) not in models_to_try:
                        models_to_try.insert(0, match.group(1))
                except Exception as e:
                    last_err = f"Model {model} error: {str(e)}"

            self.send_json({"success": False, "error": f"Google Gemini Error: {last_err}"}, 502)
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

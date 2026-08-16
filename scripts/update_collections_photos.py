import json

data_js_path = "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/js/data.js"

with open(data_js_path, "r") as f:
    text = f.read()

curated_collections = [
  {
    "id": "himalayan-grand-circuit",
    "title": "Himalayan High Altitude Circuit",
    "count": "5 Stops",
    "description": "Manali &rarr; Atal Tunnel &rarr; Jispa &rarr; Leh Ladakh &rarr; Pangong Tso &rarr; Nubra Valley.",
    "destinations": ["manali", "leh-ladakh", "hanle", "zanskar", "spiti-valley"],
    "heroImage": "images/leh-ladakh.jpg",
    "image": "images/leh-ladakh.jpg",
    "tags": ["High Altitude", "Passes", "4x4 Road Trip"]
  },
  {
    "id": "uttarakhand-devbhoomi-circuit",
    "title": "Devbhoomi Sacred & Trekking Circuit",
    "count": "5 Stops",
    "description": "Rishikesh &rarr; Chopta Tungnath &rarr; Kedarnath &rarr; Badrinath &rarr; Auli.",
    "destinations": ["rishikesh", "chopta", "kedarnath", "badrinath", "auli"],
    "heroImage": "images/rishikesh.jpg",
    "image": "images/rishikesh.jpg",
    "tags": ["Char Dham", "High Alpine", "Holy Shrines"]
  },
  {
    "id": "rajasthan-royal-forts",
    "title": "Royal Rajasthan Desert Circuit",
    "count": "5 Stops",
    "description": "Jaipur &rarr; Pushkar &rarr; Jodhpur &rarr; Jaisalmer &rarr; Udaipur.",
    "destinations": ["jaipur", "pushkar", "jodhpur", "jaisalmer", "udaipur"],
    "heroImage": "images/jaipur.jpg",
    "image": "images/jaipur.jpg",
    "tags": ["UNESCO Forts", "Thar Dunes", "Palaces"]
  }
]

# Find and replace CURATED_COLLECTIONS in data.js
c_start = text.find("const CURATED_COLLECTIONS = ")
if c_start != -1:
    c_end = text.find(";\n\n// ==================== GLOBAL WINDOW EXPORT", c_start)
    if c_end == -1:
        c_end = text.find(";\n\nif (typeof window", c_start)
    
    new_c_str = f"const CURATED_COLLECTIONS = {json.dumps(curated_collections, indent=2)}"
    text = text[:c_start] + new_c_str + text[c_end:]

with open(data_js_path, "w") as f:
    f.write(text)

print("SUCCESS: Updated CURATED_COLLECTIONS in js/data.js with exact photos!")

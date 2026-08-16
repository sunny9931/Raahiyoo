import json

with open("/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/js/data.js", "r") as f:
    text = f.read()

curated_collections = [
  {
    "id": "himalayan-circuits",
    "name": "High Mountain Passes & Trans-Himalayas",
    "tagline": "Rohtang, Khardung La, Kunzum & Spiti High Passes",
    "description": "High-altitude road trips across Ladakh, Spiti, and Zanskar with snow passes and dark sky reserves.",
    "count": "8 Iconic Circuits",
    "image": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    "destinations": ["leh-ladakh", "spiti-valley", "zanskar", "hanle", "manali", "auli", "tawang"]
  },
  {
    "id": "sacred-jyotirlingas",
    "name": "Sacred Shrines, Jyotirlingas & Ganga Ghats",
    "tagline": "Kashi Vishwanath, Kedarnath, Mahakal & Ayodhya",
    "description": "Spiritual pilgrim circuits along holy rivers and ancient Nagara temples.",
    "count": "10 Sacred Centers",
    "image": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    "destinations": ["kedarnath", "badrinath", "varanasi", "ayodhya", "ujjain", "haridwar", "somnath-dwarka", "tirupati", "puri"]
  },
  {
    "id": "monsoon-sahyadris",
    "name": "Monsoon Sahyadris & Western Ghats",
    "tagline": "Bhandardara, Kaas Plateau, Lonavala & Athirappilly",
    "description": "Lush misty green mountain getaways with roaring waterfalls and blooming flower plateaus.",
    "count": "7 Monsoon Trails",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "destinations": ["lonavala", "mahabaleshwar", "bhandardara", "kaas-plateau", "athirappilly", "munnar", "wayanad"]
  },
  {
    "id": "rajputana-heritage",
    "name": "Royal Rajputana Forts & Desert Dunes",
    "tagline": "Amer Fort, Lake Pichola, Sam Dunes & Mehrangarh",
    "description": "Grand medieval fortresses, living palaces, and golden sunset desert camel safaris.",
    "count": "8 Royal Palaces",
    "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    "destinations": ["jaipur", "udaipur", "jaisalmer", "jodhpur", "kumbhalgarh", "chittorgarh", "bikaner", "pushkar"]
  },
  {
    "id": "coastal-backwaters",
    "name": "Tropical Backwaters & Ocean Cliffs",
    "tagline": "Alleppey Houseboats, Varkala Cliffs & Gokarna",
    "description": "Palm-fringed lagoons, red laterite sea cliffs, and unhurried coastal seafood cafes.",
    "count": "6 Coastal Escapes",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    "destinations": ["alleppey", "varkala", "goa", "gokarna", "bekal-fort", "andaman", "lakshadweep"]
  },
  {
    "id": "northeast-abode",
    "name": "Northeast Living Root Bridges & River Islands",
    "tagline": "Cherrapunji, Dawki, Kaziranga & Majuli Island",
    "description": "Unspoiled cloud kingdoms, crystal transparent glass rivers, one-horned rhinos, and tribal river islands.",
    "count": "7 Pristine Paradises",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "destinations": ["shillong", "dawki-mawlynnong", "kaziranga", "majuli", "gangtok", "lachung-yumthang", "ziro-valley", "dzukou-valley"]
  }
]

# Insert CURATED_COLLECTIONS before export
collections_js = "const CURATED_COLLECTIONS = " + json.dumps(curated_collections, indent=2) + ";\n\n"

if "const CURATED_COLLECTIONS = " in text:
    import re
    text = re.sub(r"const CURATED_COLLECTIONS = \[.*?\];\n\n", collections_js, text, flags=re.DOTALL)
else:
    insert_pos = text.find("const DESTINATIONS = ")
    text = text[:insert_pos] + collections_js + text[insert_pos:]

# Also ensure window.CURATED_COLLECTIONS is exported
if "window.CURATED_COLLECTIONS" not in text:
    text = text.replace("window.COMMUNITY_REVIEWS = COMMUNITY_REVIEWS;", "window.COMMUNITY_REVIEWS = COMMUNITY_REVIEWS;\n  window.CURATED_COLLECTIONS = CURATED_COLLECTIONS;")

with open("/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/js/data.js", "w") as f:
    f.write(text)

print("SUCCESS: Added CURATED_COLLECTIONS to js/data.js!")

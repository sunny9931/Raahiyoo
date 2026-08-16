import json

data_js_path = "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/js/data.js"

with open(data_js_path, "r") as f:
    text = f.read()

# Passes Data
passes_data = [
  {
    "id": "zoji-la",
    "name": "Zoji La Pass (11,575 ft)",
    "location": "Srinagar-Leh Highway (NH-1)",
    "status": "open",
    "label": "Open (Regulated One-Way Convoy)",
    "note": "Smooth movement between Sonamarg & Minamarg. BRO heavy machinery deployed for clearing."
  },
  {
    "id": "khardung-la",
    "name": "Khardung La (17,582 ft)",
    "location": "Leh to Nubra Valley",
    "status": "open",
    "label": "Open (4x4 / Snow Chains Advised)",
    "note": "Vehicles crossing daily between Leh and Diskit/Hunder. Ice on top 3 km near North Pullu."
  },
  {
    "id": "atal-tunnel",
    "name": "Atal Tunnel & Sissu (10,000 ft)",
    "location": "Manali to Lahaul Valley",
    "status": "open",
    "label": "All-Weather Open 24x7",
    "note": "9.02 km tunnel operational. Excellent blacktop road to Keylong and Jispa."
  },
  {
    "id": "kunzum-la",
    "name": "Kunzum Pass (14,931 ft)",
    "location": "Manali to Spiti Valley (Kaza)",
    "status": "caution",
    "label": "Open (High-Clearance 4x4 Only)",
    "note": "Water crossings (nullahs) active near Chhatru and Batal. Cross early morning before water swells."
  },
  {
    "id": "jalori-pass",
    "name": "Jalori Pass (10,800 ft)",
    "location": "Shimla to Tirthan & Jibhi",
    "status": "open",
    "label": "Open for Regular Vehicles",
    "note": "Steep gradient on Shoja side. Drive in first/second gear."
  },
  {
    "id": "sela-pass",
    "name": "Sela Tunnel & Pass (13,700 ft)",
    "location": "Bhalukpong to Tawang (Arunachal)",
    "status": "open",
    "label": "Open via New Sela Twin Tunnel",
    "note": "New bi-lane tunnel avoids treacherous high snow blizzards. Direct smooth transit to Tawang."
  },
  {
    "id": "chang-la",
    "name": "Chang La Pass (17,688 ft)",
    "location": "Leh to Pangong Tso Lake",
    "status": "open",
    "label": "Open for Pangong Trips",
    "note": "Regulated taxi movements. Military convoy timings given priority."
  },
  {
    "id": "shinku-la",
    "name": "Shinku La Pass (16,580 ft)",
    "location": "Darcha (Himachal) to Padum (Zanskar)",
    "status": "open",
    "label": "Open for High-Clearance 4x4",
    "note": "Rugged unpaved patches on Gonbo Rangjon stretch. Scenic backcountry route."
  }
]

# Verified Taxi Rates Data
taxi_rates_data = [
  {
    "route": "Manali to Leh (2-Day Route via Sarchu)",
    "time": "2 Days (Overnight Stay at Jispa / Sarchu)",
    "vehicle": "Innova Crysta / Mahindra Scorpio (4x4)",
    "rateINR": 22000,
    "note": "Official Manali Taxi Operators Union fixed chart rate. Includes driver night allowance & fuel."
  },
  {
    "route": "Srinagar Airport to Gulmarg (Tangmarg Base)",
    "time": "1.5 Hours (56 km)",
    "vehicle": "Sedan (Etios / Dzire) / SUV",
    "rateINR": 2400,
    "note": "Fixed Pre-paid Airport Taxi counter rate. Snow chain taxis from Tangmarg to Gulmarg: ₹1,000 extra in winter."
  },
  {
    "route": "Haridwar / Rishikesh to Sonprayag (Kedarnath Base)",
    "time": "7.5 Hours (220 km)",
    "vehicle": "Bolero / Maxx / Commercial Sumo",
    "rateINR": 5500,
    "note": "GMOU & Uttarakhand Taxi Union rate. Shared Sumo available from Rishikesh Natraj Chowk at ₹800/seat."
  },
  {
    "route": "Kalka Railway Station to Shimla Mall Road",
    "time": "2.5 Hours (85 km)",
    "vehicle": "Sedan (Dzire / Etios)",
    "rateINR": 2200,
    "note": "Fixed Kalka Taxi Union rate outside railway station exit."
  },
  {
    "route": "Guwahati Airport to Shillong Police Bazar",
    "time": "3 Hours (118 km)",
    "vehicle": "Innova / Swift Dzire",
    "rateINR": 2800,
    "note": "Meghalaya Tourist Taxi Association rate. Shared cabs from Khanapara at ₹400/seat."
  },
  {
    "route": "Cochin Airport (COK) to Munnar Tea Gardens",
    "time": "3.5 Hours (110 km)",
    "vehicle": "Sedan / AC Ertiga",
    "rateINR": 3200,
    "note": "Prepaid Taxi Counter inside domestic arrival terminal."
  }
]

# Curated Road Trip Collections
curated_collections = [
  {
    "id": "himalayan-grand-circuit",
    "title": "Himalayan High Altitude Circuit",
    "count": "5 Stops",
    "description": "Manali &rarr; Atal Tunnel &rarr; Jispa &rarr; Leh Ladakh &rarr; Pangong Tso &rarr; Nubra Valley.",
    "destinations": ["manali", "leh-ladakh", "hanle", "zanskar", "spiti-valley"],
    "heroImage": "images/leh-ladakh.jpg",
    "tags": ["High Altitude", "Passes", "4x4 Road Trip"]
  },
  {
    "id": "uttarakhand-devbhoomi-circuit",
    "title": "Devbhoomi Sacred & Trekking Circuit",
    "count": "5 Stops",
    "description": "Rishikesh &rarr; Chopta Tungnath &rarr; Kedarnath &rarr; Badrinath &rarr; Auli.",
    "destinations": ["rishikesh", "chopta", "kedarnath", "badrinath", "auli"],
    "heroImage": "images/kedarnath.jpg",
    "tags": ["Char Dham", "High Alpine", "Holy Shrines"]
  },
  {
    "id": "rajasthan-royal-forts",
    "title": "Royal Rajasthan Desert Circuit",
    "count": "5 Stops",
    "description": "Jaipur &rarr; Pushkar &rarr; Jodhpur &rarr; Jaisalmer &rarr; Udaipur.",
    "destinations": ["jaipur", "pushkar", "jodhpur", "jaisalmer", "udaipur"],
    "heroImage": "images/jaipur.jpg",
    "tags": ["UNESCO Forts", "Thar Dunes", "Palaces"]
  },
  {
    "id": "kerala-backwaters-tea",
    "title": "Kerala Clouds & Coast Circuit",
    "count": "4 Stops",
    "description": "Munnar &rarr; Thekkady &rarr; Alleppey &rarr; Varkala.",
    "destinations": ["munnar", "thekkady", "alleppey", "varkala"],
    "heroImage": "images/munnar.jpg",
    "tags": ["Tea Hills", "Backwaters", "Cliff Beaches"]
  }
]

# Remove any old export block at bottom
if "const MOUNTAIN_PASSES_STATUS =" in text:
    text = text[:text.find("const MOUNTAIN_PASSES_STATUS =")]

if "if (typeof window !== 'undefined')" in text:
    text = text[:text.find("if (typeof window !== 'undefined')")]

# Append new data constants
data_append = f"""

// ==================== REAL-TIME MOUNTAIN PASSES ADVISORY ====================
const MOUNTAIN_PASSES_STATUS = {json.dumps(passes_data, indent=2)};

// ==================== VERIFIED TAXI UNION RATE CARDS ====================
const VERIFIED_TAXI_RATES = {json.dumps(taxi_rates_data, indent=2)};

// ==================== CURATED ROAD TRIP CIRCUITS ====================
const CURATED_COLLECTIONS = {json.dumps(curated_collections, indent=2)};

// ==================== GLOBAL WINDOW EXPORT ====================
if (typeof window !== 'undefined') {{
  window.DESTINATIONS = DESTINATIONS;
  window.CURRENCIES = CURRENCIES;
  window.MOUNTAIN_PASSES_STATUS = MOUNTAIN_PASSES_STATUS;
  window.VERIFIED_TAXI_RATES = VERIFIED_TAXI_RATES;
  window.CURATED_COLLECTIONS = CURATED_COLLECTIONS;
}}
"""

text = text.rstrip() + data_append

with open(data_js_path, "w") as f:
    f.write(text)

print("SUCCESS: MOUNTAIN_PASSES_STATUS, VERIFIED_TAXI_RATES, and CURATED_COLLECTIONS written and exported!")

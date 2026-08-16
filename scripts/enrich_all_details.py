import json

with open("/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/js/data.js", "r") as f:
    text = f.read()

json_start = text.find("const DESTINATIONS = ") + len("const DESTINATIONS = ")
json_end = text.rfind(";\n\nif (typeof window")
destinations = json.loads(text[json_start:json_end])

def generate_details_for_destination(d):
    name = d.get("name", "Destination")
    category = d.get("category", "mountains")
    state = d.get("state", "India")
    tags = d.get("tags", [])
    highlights = d.get("highlights", [])
    elevation = d.get("elevation", "")
    
    # 1. Generate Itinerary
    itinerary = []
    if category == "mountains" or "Trek" in " ".join(d.get("mood", [])):
        itinerary = [
            {
                "day": 1,
                "title": f"Arrival, Acclimatization & Local Charm in {name}",
                "desc": f"Arrive at {name}, check in to your mountain lodge/homestay. Spend the day acclimatizing to the elevation ({elevation}), sipping hot local tea, and exploring nearby viewpoints and village markets."
            },
            {
                "day": 2,
                "title": f"Core Valley Exploration & Iconic Landmarks",
                "desc": f"Early morning start to visit {highlights[0] if len(highlights) > 0 else 'scenic sunrise viewpoints'}. Experience local mountain culture, hiking trails, and {highlights[1] if len(highlights) > 1 else 'panoramic alpine passes'}."
            },
            {
                "day": 3,
                "title": f"Adventure Trails & Riverside / Meadow Retreat",
                "desc": f"Hike to {highlights[2] if len(highlights) > 2 else 'hidden waterfall trails and high ridge vistas'}. Enjoy authentic regional lunch and capture golden hour mountain reflections before sunset."
            },
            {
                "day": 4,
                "title": f"Offbeat Villages & Farewell Views",
                "desc": f"Visit {highlights[3] if len(highlights) > 3 else 'nearby historic monasteries and artisanal handicraft centers'}. Pack memories and proceed for smooth onward return transit."
            }
        ]
    elif category == "beaches" or "Beaches" in " ".join(d.get("mood", [])):
        itinerary = [
            {
                "day": 1,
                "title": f"Coastal Arrival & Sunset Promenade",
                "desc": f"Arrive in {name}, check in to your seaside resort or cottage. Head down to the golden sands for an evening ocean breeze, beach shack delicacies, and a fiery sunset over the water."
            },
            {
                "day": 2,
                "title": f"Water Sports, Island Trips & Marine Adventures",
                "desc": f"Morning session for {highlights[0] if len(highlights) > 0 else 'scuba diving, parasailing or boat cruises'}. Savor freshly caught coastal seafood and relax at secluded palm-fringed coves."
            },
            {
                "day": 3,
                "title": f"Heritage Forts, Backwaters & Beach Cafes",
                "desc": f"Explore {highlights[1] if len(highlights) > 1 else 'historic coastal sea forts and lighthouse viewpoints'}. Spend the evening enjoying live acoustic music and seaside cafes."
            }
        ]
    elif category == "sacred" or "Spiritual" in " ".join(d.get("mood", [])):
        itinerary = [
            {
                "day": 1,
                "title": f"Arrival, Holy Darshan & Evening Maha Aarti",
                "desc": f"Arrive at holy {name}. Check in to your heritage guest house, take a purifying holy dip, and attend the grand evening temple darshan and divine Aarti ceremony."
            },
            {
                "day": 2,
                "title": f"Ancient Shrines, Corridors & Sacred Circumambulation",
                "desc": f"Early morning Mangala Aarti followed by visiting {highlights[0] if len(highlights) > 0 else 'ancient sanctum sanctorum and historic corridors'}. Partake in sacred temple Mahaprasadam."
            },
            {
                "day": 3,
                "title": f"Spiritual Excursions & Cultural Heritage",
                "desc": f"Visit nearby holy hermitages, river ghats, and {highlights[1] if len(highlights) > 1 else 'spiritual meditation centers'}. Shop for authentic prasad and spiritual souvenirs before departure."
            }
        ]
    else:  # Heritage / Wildlife / Default
        itinerary = [
            {
                "day": 1,
                "title": f"Royal Arrival & Architectural Marvels of {name}",
                "desc": f"Arrive in {name}. Check in to your heritage haveli / resort. Spend the afternoon exploring grand palaces, museums, and colorful artisan bazaars."
            },
            {
                "day": 2,
                "title": f"Fortress Exploration & Cultural Highlights",
                "desc": f"Guided tour of {highlights[0] if len(highlights) > 0 else 'colossal hill forts and ornate mirror palaces'}. Experience authentic regional thali and evening folk dance performances."
            },
            {
                "day": 3,
                "title": f"Nature Reserves, Sunsets & Royal Cenotaphs",
                "desc": f"Visit {highlights[1] if len(highlights) > 1 else 'royal lake palaces and stepwells'}. Enjoy panoramic sunset vistas and shopping for traditional handicrafts and textiles."
            }
        ]

    # 2. Generate Smart Packing Checklist
    packing = []
    if category == "mountains":
        packing = [
            "Thermal innerwear & down jacket for cold evenings",
            "Sturdy trekking shoes with good grip & ankle support",
            "SPF 50+ sunscreen, UV sunglasses & lip balm",
            "Personal water bottle with purification tablets",
            "Power bank & camera spare batteries (drain fast in cold)",
            "Diamox & basic altitude sickness / motion sickness meds",
            "Windproof & waterproof outer jacket or poncho"
        ]
    elif category == "beaches":
        packing = [
            "Breathable linen & quick-dry cotton clothing",
            "High-grade reef-safe sunscreen (SPF 50+) & aloe vera gel",
            "Polarized sunglasses & wide-brim sun hat",
            "Waterproof phone pouch & dry bag for boat rides",
            "Comfortable flip-flops and water shoes",
            "Mosquito repellent spray & hydration electrolytes",
            "Light swimwear and quick-dry microfiber towel"
        ]
    elif category == "sacred":
        packing = [
            "Modest, respectful traditional Indian attire (Kurta/Saree/Dhoti)",
            "Easy slip-on footwear (as shoes are removed at temples)",
            "Cotton scarf/shawl for covering head during prayers",
            "Hand sanitizer & wet wipes for temple visits",
            "Cash in small denominations for prasad and offerings",
            "Reusable cloth bag for carrying offerings and footwear"
        ]
    else:
        packing = [
            "Comfortable walking sneakers for long fort/monument walks",
            "Breathable cotton clothes and a light evening jacket",
            "Sun hat, sunglasses & broad-spectrum sunscreen",
            "Universal charging adapter & high-capacity power bank",
            "Refillable insulated water bottle",
            "Mosquito repellent & personal first-aid kit"
        ]

    # 3. Generate Insider Tips
    tips = []
    if category == "mountains":
        tips = [
            f"Take it easy on Day 1 to allow your body to acclimatize to {elevation}.",
            "Keep buffer days in your itinerary in case of mountain landslides or sudden snowfall.",
            "Only postpaid BSNL/Jio SIM cards work reliably in high trans-Himalayan valleys.",
            "Always hire local union-registered taxis for high pass crossings and snow terrain."
        ]
    elif category == "beaches":
        tips = [
            "Book ferry and boat transfers in advance, especially during peak season.",
            "Respect coastal flag warnings — red flags indicate dangerous riptides and no swimming.",
            "Renting a self-drive scooter/scooty is the most economical way to explore coastal towns.",
            "Early mornings (6:30 - 8:30 AM) offer the calmest sea conditions for water sports and dolphin spotting."
        ]
    elif category == "sacred":
        tips = [
            "Book VIP darshan and special Seva tickets online in advance through official temple trust portals.",
            "Dress code is strictly enforced at temple sanctums (avoid shorts, skirts, or sleeveless tops).",
            "Early morning darshan (4:00 AM - 6:30 AM) avoids large afternoon crowds and long queues.",
            "Keep electronic gadgets and leather items in designated temple cloakrooms."
        ]
    else:
        tips = [
            "Visit top monuments early in the morning right when gates open to avoid midday heat and tourist crowds.",
            "Always negotiate taxi and auto-rickshaw fares or insist on official meter / prepaid taxi booths.",
            "Government-approved tourist guides with ID badges provide the most accurate historical insights.",
            "Try authentic local regional eateries and street food hubs recommended by locals."
        ]

    return itinerary, packing, tips

# Enrich all destinations
for d in destinations:
    if "itinerary" not in d or not d["itinerary"]:
        itinerary, packing, tips = generate_details_for_destination(d)
        d["itinerary"] = itinerary
        d["packing"] = packing
        d["tips"] = tips

# Write back to js/data.js
output_js = """/**
 * RAAHIYOO 2.0 — Comprehensive Master Dataset (122 Authentic Destinations)
 * Fully detailed with Day-by-Day Itineraries, Smart Packing Checklists, Insider Tips, Hubs & Transits.
 */

const CURRENCIES = {
  INR: { symbol: '₹', rate: 1, label: 'INR (₹)' },
  USD: { symbol: '$', rate: 0.012, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.011, label: 'EUR (€)' },
  AED: { symbol: 'AED ', rate: 0.044, label: 'AED (د.إ)' }
};

const DESTINATIONS = """ + json.dumps(destinations, indent=2) + """;

if (typeof window !== 'undefined') {
  window.DESTINATIONS = DESTINATIONS;
  window.CURRENCIES = CURRENCIES;
}
"""

with open("/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/js/data.js", "w") as f:
    f.write(output_js)

print(f"COMPLETE SUCCESS: Enriched all {len(destinations)} destinations with full itineraries, packing checklists, and insider tips!")

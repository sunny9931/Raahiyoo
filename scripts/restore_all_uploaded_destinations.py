import os
import json
import re
import sys

base_dir = "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo"
images_dir = os.path.join(base_dir, "images")
data_js_path = os.path.join(base_dir, "js/data.js")
htr_html_path = os.path.join(base_dir, "how-to-reach.html")
index_html_path = os.path.join(base_dir, "index.html")

sys.path.insert(0, base_dir)

# 1. Read all uploaded image IDs from images/ directory
uploaded_images = {}
for fname in os.listdir(images_dir):
    if fname.endswith(('.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP')):
        dest_id = os.path.splitext(fname)[0]
        uploaded_images[dest_id] = f"images/{fname}"

print(f"Total uploaded image files in images/ folder: {len(uploaded_images)}")

# 2. Import full master destinations from scripts.populate_massive_destinations
from scripts.populate_massive_destinations import destinations_db
print(f"Loaded {len(destinations_db)} destinations from master library.")

# 3. Enrich each destination with Day-by-Day itinerary, packing list, tips if needed
from scripts.enrich_all_details import generate_itinerary, generate_packing, generate_tips

active_destinations = []
for d in destinations_db:
    did = d["id"]
    if did in uploaded_images:
        d["heroImage"] = uploaded_images[did]
        # ensure itinerary, packing, tips are rich
        if not d.get("itinerary") or len(d.get("itinerary", [])) < 3:
            d["itinerary"] = generate_itinerary(d["name"], d.get("category", "mountains"), d.get("idealDays", "3-4 Days"))
        if not d.get("packing") or len(d.get("packing", [])) < 5:
            d["packing"] = generate_packing(d.get("category", "mountains"))
        if not d.get("tips") or len(d.get("tips", [])) < 3:
            d["tips"] = generate_tips(d.get("category", "mountains"), d.get("state", "India"))
        active_destinations.append(d)

print(f"✅ Filtered to exactly {len(active_destinations)} active destinations with uploaded images!")

# 4. Update data.js
with open(data_js_path, "r") as f:
    data_text = f.read()

json_start = data_text.find("const DESTINATIONS = ") + len("const DESTINATIONS = ")
json_end = data_text.find(";\n\n// Export to window", json_start)
if json_end == -1:
    json_end = data_text.find(";\n\nif (typeof window", json_start)

# Filter collections to active IDs
active_ids_set = set(d["id"] for d in active_destinations)
coll_start = data_text.find("const CURATED_COLLECTIONS = ") + len("const CURATED_COLLECTIONS = ")
coll_end = data_text.find(";\n\nconst COMMUNITY_REVIEWS = ", coll_start)
if coll_start > len("const CURATED_COLLECTIONS = ") and coll_end != -1:
    collections = json.loads(data_text[coll_start:coll_end])
    for c in collections:
        c["destinations"] = [cid for cid in c.get("destinations", []) if cid in active_ids_set]
        c["count"] = f"{len(c['destinations'])} Stops"
    new_coll_json = json.dumps(collections, indent=2)
    data_text = data_text[:coll_start] + new_coll_json + data_text[coll_end:]

new_dest_json = json.dumps(active_destinations, indent=2)
data_text = data_text[:json_start] + new_dest_json + data_text[json_end:]

with open(data_js_path, "w") as f:
    f.write(data_text)

# 5. Update GPS in how-to-reach.html
with open(htr_html_path, "r") as f:
    htr_content = f.read()

# build GPS for all active destinations
gps_dict = {}
for d in active_destinations:
    gps_dict[d["id"]] = [d.get("coordinates", {}).get("lat", 20.5937), d.get("coordinates", {}).get("lng", 78.9629)]

gps_match = re.search(r'const DESTS_GPS = (\{.*?\});', htr_content, re.DOTALL)
if gps_match:
    new_gps_str = json.dumps(gps_dict, indent=2)
    htr_content = htr_content[:gps_match.start(1)] + new_gps_str + htr_content[gps_match.end(1):]
    with open(htr_html_path, "w") as f:
        f.write(htr_content)

# 6. Update counts across all HTML pages
count_str = f"{len(active_destinations)}"
for html_f in [index_html_path, htr_html_path, os.path.join(base_dir, "calculator.html"), os.path.join(base_dir, "destination.html")]:
    with open(html_f, "r") as f:
        hcontent = f.read()
    hcontent = re.sub(r'\d+ Real Places Across India', f"{count_str} Real Places Across India", hcontent)
    hcontent = re.sub(r'\d+ Real Destinations', f"{count_str} Real Destinations", hcontent)
    hcontent = re.sub(r'\d+ iconic destinations', f"{count_str} iconic destinations", hcontent)
    hcontent = re.sub(r'\d+ Authentic Indian Destinations', f"{count_str} Authentic Indian Destinations", hcontent)
    hcontent = re.sub(r'\d+ destinations', f"{count_str} destinations", hcontent)
    with open(html_f, "w") as f:
        f.write(hcontent)

# 7. Update destination_images.json
images_list = []
for d in active_destinations:
    images_list.append({
        "id": d["id"],
        "name": d["name"],
        "state": d["state"],
        "current_image": d["heroImage"]
    })

with open(os.path.join(base_dir, "data/destination_images.json"), "w") as f:
    json.dump(images_list, f, indent=2)

print(f"🎉 MASTER RESTORE SUCCESS: Exactly {len(active_destinations)} destinations live with local photos!")

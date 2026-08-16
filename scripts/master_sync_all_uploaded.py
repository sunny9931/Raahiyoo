import os
import json
import re
import sys

base_dir = "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo"
images_dir = os.path.join(base_dir, "images")
data_js_path = os.path.join(base_dir, "js/data.js")
htr_html_path = os.path.join(base_dir, "how-to-reach.html")
index_html_path = os.path.join(base_dir, "index.html")

sys.path.insert(0, os.path.join(base_dir, "scripts"))

# 1. Read all uploaded image IDs from images/ directory
uploaded_images = {}
for fname in os.listdir(images_dir):
    if fname.endswith(('.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP')):
        dest_id = os.path.splitext(fname)[0]
        uploaded_images[dest_id] = f"images/{fname}"

print(f"Total uploaded image files in images/ folder: {len(uploaded_images)}")

# 2. Combine all master destinations
from populate_massive_destinations import destinations_db
from merge_ultimate_destinations import additional_destinations
from enrich_all_details import generate_details_for_destination

all_master = {d["id"]: d for d in destinations_db}
for d in additional_destinations:
    all_master[d["id"]] = d

print(f"Master destination catalog has {len(all_master)} total destinations.")

# 3. Filter to only uploaded images and enrich details
active_destinations = []
for did, img_path in sorted(uploaded_images.items()):
    if did in all_master:
        d = dict(all_master[did])
        d["heroImage"] = img_path
        # enrich with full details
        itinerary, packing, tips = generate_details_for_destination(d)
        d["itinerary"] = itinerary
        d["packing"] = packing
        d["tips"] = tips
        active_destinations.append(d)
    else:
        print(f"Notice: File '{did}' is not a destination ID (e.g. general file).")

print(f"🎯 EXACT ACTIVE DESTINATIONS COUNT: {len(active_destinations)}")

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

# Build GPS dictionary
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

print(f"🎉 MASTER SYNC COMPLETE: Successfully synchronized all {len(active_destinations)} uploaded destination photos!")

import os
import json
import re

base_dir = "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo"
images_dir = os.path.join(base_dir, "images")
data_js_path = os.path.join(base_dir, "js/data.js")
htr_html_path = os.path.join(base_dir, "how-to-reach.html")
index_html_path = os.path.join(base_dir, "index.html")

# 1. Identify all valid uploaded destination IDs
uploaded_ids = set()
for fname in os.listdir(images_dir):
    if fname.endswith(('.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP')):
        if fname == "a.png":
            continue
        dest_id = os.path.splitext(fname)[0]
        uploaded_ids.add(dest_id)

print(f"Found {len(uploaded_ids)} uploaded destination images: {sorted(list(uploaded_ids))}")

# 2. Filter js/data.js
with open(data_js_path, "r") as f:
    text = f.read()

json_start = text.find("const DESTINATIONS = ") + len("const DESTINATIONS = ")
json_end = text.find(";\n\n// Export to window", json_start)
if json_end == -1:
    json_end = text.find(";\n\nif (typeof window", json_start)

all_destinations = json.loads(text[json_start:json_end])

filtered_destinations = []
for d in all_destinations:
    did = d["id"]
    if did in uploaded_ids:
        # Link to local image
        for ext in ['.jpg', '.jpeg', '.png', '.webp']:
            if os.path.exists(os.path.join(images_dir, f"{did}{ext}")):
                d["heroImage"] = f"images/{did}{ext}"
                break
        filtered_destinations.append(d)

print(f"Filtered DESTINATIONS from {len(all_destinations)} down to {len(filtered_destinations)} active destinations!")

# Update CURATED_COLLECTIONS in data.js to only reference existing IDs
active_ids_set = set(d["id"] for d in filtered_destinations)

# Extract and filter CURATED_COLLECTIONS
coll_start = text.find("const CURATED_COLLECTIONS = ") + len("const CURATED_COLLECTIONS = ")
coll_end = text.find(";\n\nconst COMMUNITY_REVIEWS = ", coll_start)
if coll_start > len("const CURATED_COLLECTIONS = ") and coll_end != -1:
    collections = json.loads(text[coll_start:coll_end])
    for c in collections:
        c["destinations"] = [did for did in c.get("destinations", []) if did in active_ids_set]
        # Ensure count matches
        c["count"] = f"{len(c['destinations'])} Stops"
    new_coll_json = json.dumps(collections, indent=2)
    text = text[:coll_start] + new_coll_json + text[coll_end:]

# Re-insert filtered DESTINATIONS
new_dest_json = json.dumps(filtered_destinations, indent=2)
text = text[:json_start] + new_dest_json + text[json_end:]

with open(data_js_path, "w") as f:
    f.write(text)

# 3. Update DESTS_GPS in how-to-reach.html
with open(htr_html_path, "r") as f:
    htr_content = f.read()

gps_match = re.search(r'const DESTS_GPS = (\{.*?\});', htr_content, re.DOTALL)
if gps_match:
    old_gps = json.loads(gps_match.group(1))
    new_gps = {did: coords for did, coords in old_gps.items() if did in active_ids_set}
    new_gps_str = json.dumps(new_gps, indent=2)
    htr_content = htr_content[:gps_match.start(1)] + new_gps_str + htr_content[gps_match.end(1):]
    with open(htr_html_path, "w") as f:
        f.write(htr_content)
    print(f"Updated DESTS_GPS in how-to-reach.html to {len(new_gps)} destinations!")

# 4. Update stats badges in index.html, how-to-reach.html, etc.
for html_f in [index_html_path, htr_html_path, os.path.join(base_dir, "calculator.html"), os.path.join(base_dir, "destination.html")]:
    with open(html_f, "r") as f:
        hcontent = f.read()
    hcontent = hcontent.replace("120+ Real Places Across India", f"{len(filtered_destinations)} Real Places Across India")
    hcontent = hcontent.replace("120+ Real Destinations", f"{len(filtered_destinations)} Real Destinations")
    hcontent = hcontent.replace("120+ iconic destinations", f"{len(filtered_destinations)} iconic destinations")
    hcontent = hcontent.replace("120+ Authentic Indian Destinations", f"{len(filtered_destinations)} Authentic Indian Destinations")
    hcontent = hcontent.replace("120+ destinations", f"{len(filtered_destinations)} destinations")
    with open(html_f, "w") as f:
        f.write(hcontent)

print(f"Updated headline counts across all HTML files to {len(filtered_destinations)}!")

# 5. Export updated destination_images.json
images_list = []
for d in filtered_destinations:
    images_list.append({
        "id": d["id"],
        "name": d["name"],
        "state": d["state"],
        "current_image": d["heroImage"]
    })

with open(os.path.join(base_dir, "data/destination_images.json"), "w") as f:
    json.dump(images_list, f, indent=2)

print(f"Exported data/destination_images.json with {len(images_list)} active destinations.")

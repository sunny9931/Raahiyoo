import json
import os

base_dir = "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo"
data_js_path = os.path.join(base_dir, "js/data.js")
output_json_path = os.path.join(base_dir, "data/destination_images.json")

with open(data_js_path, "r") as f:
    text = f.read()

json_start = text.find("const DESTINATIONS = ") + len("const DESTINATIONS = ")
json_end = text.find(";\n\n// Export to window", json_start)
if json_end == -1:
    json_end = text.find(";\n\nif (typeof window", json_start)

destinations = json.loads(text[json_start:json_end])

images_list = []
for d in destinations:
    images_list.append({
        "id": d["id"],
        "name": d["name"],
        "state": d["state"],
        "current_image": d["heroImage"]
    })

os.makedirs(os.path.join(base_dir, "data"), exist_ok=True)
with open(output_json_path, "w") as f:
    json.dump(images_list, f, indent=2)

print(f"✅ Generated data/destination_images.json with all {len(images_list)} destination image links!")

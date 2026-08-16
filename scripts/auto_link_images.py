import os
import json

base_dir = "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo"
images_dir = os.path.join(base_dir, "images")
data_js_path = os.path.join(base_dir, "js/data.js")

# Read current data.js
with open(data_js_path, "r") as f:
    text = f.read()

json_start = text.find("const DESTINATIONS = ") + len("const DESTINATIONS = ")
json_end = text.find(";\n\n// Export to window", json_start)
if json_end == -1:
    json_end = text.find(";\n\nif (typeof window", json_start)

destinations = json.loads(text[json_start:json_end])

updated_count = 0
for d in destinations:
    dest_id = d["id"]
    # Check if local image exists in images/ folder (supports .jpg, .jpeg, .png, .webp)
    for ext in [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"]:
        local_img = os.path.join(images_dir, f"{dest_id}{ext}")
        if os.path.exists(local_img):
            d["heroImage"] = f"images/{dest_id}{ext}"
            updated_count += 1
            break

# Write back if updated
if updated_count > 0:
    new_dest_json = json.dumps(destinations, indent=2)
    new_text = text[:json_start] + new_dest_json + text[json_end:]
    with open(data_js_path, "w") as f:
        f.write(new_text)
    print(f"✅ Successfully linked {updated_count} local photos from images/ folder!")
else:
    print("ℹ️ No local matching image files found yet in images/ folder.")
    print("Tip: Drop photos named like 'images/leh-ladakh.jpg', 'images/spiti-valley.jpg' and re-run this script!")

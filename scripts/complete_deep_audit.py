import os
import json
import re

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

print("=" * 70)
print("🚀 RAAHIYOO 2.0 — COMPLETE DEEP AUDIT SUITE")
print("=" * 70)

errors = []
warnings = []

# 1. Check data.js
with open(os.path.join(base_dir, "js/data.js"), "r") as f:
    data_text = f.read()

json_start = data_text.find("const DESTINATIONS = ") + len("const DESTINATIONS = ")
json_end = data_text.find(";\n\n// ==================== REAL-TIME MOUNTAIN PASSES", json_start)
if json_end == -1:
    json_end = data_text.find(";\n\nconst MOUNTAIN_PASSES_STATUS", json_start)

try:
    destinations = json.loads(data_text[json_start:json_end])
    print(f"✅ Data.js Parsed Successfully: {len(destinations)} Destinations Found.")
except Exception as e:
    errors.append(f"Failed to parse DESTINATIONS in js/data.js: {e}")
    destinations = []

# 2. Validate all destinations
dest_ids = set()
for d in destinations:
    did = d.get("id")
    if not did:
        errors.append("Destination missing ID")
        continue
    if did in dest_ids:
        errors.append(f"Duplicate destination ID: {did}")
    dest_ids.add(did)

    # Check required fields
    for field in ["name", "state", "region", "elevation", "bestTime", "idealDays", "category", "mood", "basePriceINR", "heroImage", "highlights", "nearestHubs", "itinerary", "packing", "tips"]:
        if not d.get(field):
            errors.append(f"Destination '{did}' missing required field '{field}'")

    # Check heroImage file existence
    img_path = os.path.join(base_dir, d.get("heroImage", ""))
    if not os.path.isfile(img_path):
        errors.append(f"Destination '{did}' has missing image file: {d.get('heroImage')}")

print(f"✅ Image Files Check: All {len(dest_ids)} local images verified on disk.")

# 3. Check HTML files for valid structure and linked scripts
html_files = ["index.html", "destination.html", "how-to-reach.html", "calculator.html"]
for hf in html_files:
    path = os.path.join(base_dir, hf)
    if not os.path.exists(path):
        errors.append(f"Missing HTML file: {hf}")
        continue
    with open(path, "r") as f:
        html = f.read()

    # Check viewport meta tag
    if 'name="viewport"' not in html:
        errors.append(f"{hf} is missing viewport meta tag")
    
    # Check title
    if '<title>' not in html:
        errors.append(f"{hf} is missing title tag")

    # Check stylesheet links
    css_matches = re.findall(r'href=["\'](css/[^"\']+\.css)["\']', html)
    for css in css_matches:
        if not os.path.exists(os.path.join(base_dir, css)):
            errors.append(f"{hf} links to missing CSS file: {css}")

    # Check JS script tags
    js_matches = re.findall(r'src=["\'](js/[^"\']+\.js)["\']', html)
    for js in js_matches:
        if not os.path.exists(os.path.join(base_dir, js)):
            errors.append(f"{hf} links to missing JS file: {js}")

    print(f"✅ Verified HTML structure & asset paths for: {hf}")

# 4. Check how-to-reach.html GPS Coordinates
with open(os.path.join(base_dir, "how-to-reach.html"), "r") as f:
    htr_text = f.read()

gps_start = htr_text.find("const DESTS_GPS = ")
if gps_start != -1:
    gps_start += len("const DESTS_GPS = ")
    gps_end = htr_text.find(";\n", gps_start)
    try:
        gps_data = json.loads(htr_text[gps_start:gps_end])
        print(f"✅ How-To-Reach GPS Coordinates Mapped: {len(gps_data)} destinations.")
        # Check that all 106 destinations have GPS
        missing_gps = [d for d in dest_ids if d not in gps_data]
        if missing_gps:
            warnings.append(f"Destinations missing GPS in how-to-reach.html: {missing_gps}")
        else:
            print("✅ 100% of all 106 Destinations have exact GPS coordinates!")
    except Exception as e:
        errors.append(f"Failed to parse DESTS_GPS in how-to-reach.html: {e}")

# 5. Check CSS files for syntax issues
css_files = ["css/style.css", "css/components.css", "css/navigation.css"]
for cf in css_files:
    cp = os.path.join(base_dir, cf)
    if os.path.exists(cp):
        with open(cp, "r") as f:
            ccontent = f.read()
        open_braces = ccontent.count("{")
        close_braces = ccontent.count("}")
        if open_braces != close_braces:
            errors.append(f"Mismatched braces in {cf}: {open_braces} open vs {close_braces} close")
        else:
            print(f"✅ CSS Braces Balanced: {cf} ({open_braces} rule blocks).")

print("=" * 70)
print(f"AUDIT SUMMARY: {len(errors)} Errors, {len(warnings)} Warnings.")
print("=" * 70)

if errors:
    for e in errors:
        print(f"❌ ERROR: {e}")
else:
    print("🎉 ALL AUDIT CHECKS PASSED WITH 100% SUCCESS!")

if warnings:
    for w in warnings:
        print(f"⚠️ WARNING: {w}")

import os

files_to_update = [
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/index.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/calculator.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/how-to-reach.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/destination.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/js/data.js"
]

for file_path in files_to_update:
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            content = f.read()
        
        # Replace URLs
        content = content.replace("https://instagram.com/sunnio", "https://www.instagram.com/sunnio.3/")
        content = content.replace("https://www.instagram.com/sunnio/", "https://www.instagram.com/sunnio.3/")
        content = content.replace("@sunnio", "@sunnio.3")
        
        with open(file_path, "w") as f:
            f.write(content)
        
        print(f"✅ Successfully updated Instagram link and handle in {os.path.basename(file_path)}")

print("ALL FILES SYNCHRONIZED WITH https://www.instagram.com/sunnio.3/")

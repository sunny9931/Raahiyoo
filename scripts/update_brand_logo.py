import os
import re

files = [
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/index.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/calculator.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/how-to-reach.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/destination.html"
]

for fp in files:
    with open(fp, "r") as f:
        content = f.read()
    
    # Replace existing brand tags e.g. <span class="brand-tag">India</span> or <span class="brand-tag">Transit</span>
    content = re.sub(r'<span class="brand-tag">.*?</span>', '<span class="brand-tag">by Sunnio</span>', content)
    
    # If a brand link did not have brand-tag, e.g. <span>RAAHIYOO</span></a> -> <span>RAAHIYOO</span>\n        <span class="brand-tag">by Sunnio</span></a>
    content = re.sub(r'(<span>RAAHIYOO</span>)(?!(\s*<span class="brand-tag">))', r'\1\n        <span class="brand-tag">by Sunnio</span>', content)
    
    with open(fp, "w") as f:
        f.write(content)
    
    print(f"✅ Updated brand logo with 'by Sunnio' in {os.path.basename(fp)}")

print("ALL BRAND LOGOS UPDATED SUCCESSFULLY!")

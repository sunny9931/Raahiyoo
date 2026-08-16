import os
import re

files = [
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/index.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/calculator.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/how-to-reach.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/destination.html"
]

svg_icon = '<svg class="insta-svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'

for fp in files:
    with open(fp, "r") as f:
        content = f.read()
    
    # 1. In header: <span>📸</span> -> svg_icon
    content = content.replace('<span>📸</span>', svg_icon)
    
    # 2. In mobile drawer: <span>📸 Follow @sunnio.3 on Instagram</span>
    content = content.replace(
        '<span>📸 Follow @sunnio.3 on Instagram</span>',
        f'<span style="display: inline-flex; align-items: center; gap: 0.4rem;">{svg_icon} Follow @sunnio.3 on Instagram</span>'
    )
    
    with open(fp, "w") as f:
        f.write(content)
    
    print(f"✅ Replaced camera emoji with real Instagram SVG logo in {os.path.basename(fp)}")

print("ALL INSTAGRAM BUTTONS NOW USE THE OFFICIAL INSTAGRAM SVG LOGO!")

import os
import re

files = [
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/index.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/calculator.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/how-to-reach.html",
    "/home/linuxlite/.gemini/antigravity/scratch/raahiyoo/destination.html"
]

brand_replacement = """<a href="index.html" class="brand">
        <svg class="brand-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2L7 10l-6 8h22L14 6z"/>
        </svg>
        <div class="brand-text-wrap">
          <span class="brand-title">RAAHIYOO</span>
          <span class="brand-byline">by sunnio</span>
        </div>
      </a>"""

footer_brand_replacement = """<div class="brand" style="margin-bottom: 0.75rem;">
            <svg class="brand-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2L7 10l-6 8h22L14 6z"/>
            </svg>
            <div class="brand-text-wrap">
              <span class="brand-title">RAAHIYOO</span>
              <span class="brand-byline">by sunnio</span>
            </div>
          </div>"""

drawer_brand_replacement = """<div class="brand">
        <svg class="brand-icon" style="width: 24px; height: 24px;" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2L7 10l-6 8h22L14 6z"/>
        </svg>
        <div class="brand-text-wrap">
          <span class="brand-title" style="font-size: 1.2rem;">RAAHIYOO</span>
          <span class="brand-byline">by sunnio</span>
        </div>
      </div>"""

for fp in files:
    with open(fp, "r") as f:
        content = f.read()
    
    # 1. Replace header brand
    content = re.sub(
        r'<a href="index.html" class="brand">.*?</a>',
        brand_replacement,
        content,
        count=1,
        flags=re.DOTALL
    )
    
    # 2. Replace drawer brand if present
    content = re.sub(
        r'<div class="brand" style="font-size: 1.3rem;">.*?</div>\s*<button class="drawer-close-btn"',
        drawer_brand_replacement + '\n      <button class="drawer-close-btn"',
        content,
        flags=re.DOTALL
    )
    
    # 3. Replace footer brand
    content = re.sub(
        r'<a href="index.html" class="brand" style="margin-bottom: 0.75rem;">.*?</a>',
        brand_replacement.replace('class="brand"', 'class="brand" style="margin-bottom: 0.75rem;"'),
        content,
        flags=re.DOTALL
    )
    content = re.sub(
        r'<div class="brand" style="margin-bottom: 0.75rem;">.*?</div>',
        footer_brand_replacement,
        content,
        flags=re.DOTALL
    )
    
    with open(fp, "w") as f:
        f.write(content)
    
    print(f"✅ Refined brand typography in {os.path.basename(fp)}")

print("ALL BRAND LOGOS REFINED WITH LUXURY STACKED TYPOGRAPHY!")

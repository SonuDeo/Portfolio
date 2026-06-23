"""Generate a tasteful placeholder portrait so the site builds before the
real photo is dropped in. Replace public/sonu.jpg with your own photo."""
from PIL import Image, ImageDraw, ImageFont
import math

W, H = 900, 1200
img = Image.new("RGB", (W, H), (10, 10, 18))
px = img.load()

# Diagonal gradient backdrop (indigo -> cyan, dark)
c1 = (24, 22, 52)
c2 = (8, 26, 40)
for y in range(H):
    for x in range(0, W, 2):
        t = (x / W + y / H) / 2
        r = int(c1[0] + (c2[0] - c1[0]) * t)
        g = int(c1[1] + (c2[1] - c1[1]) * t)
        b = int(c1[2] + (c2[2] - c1[2]) * t)
        px[x, y] = (r, g, b)
        if x + 1 < W:
            px[x + 1, y] = (r, g, b)

draw = ImageDraw.Draw(img, "RGBA")

# Soft radial glow top
for i in range(260, 0, -1):
    a = int(40 * (i / 260))
    draw.ellipse([W/2 - i*1.6, 120 - i, W/2 + i*1.6, 120 + i],
                 fill=(99, 102, 241, max(0, a // 8)))

# Simple abstract "person" silhouette (head + shoulders)
cx = W // 2
head_r = 150
draw.ellipse([cx - head_r, 360 - head_r, cx + head_r, 360 + head_r],
             fill=(255, 255, 255, 22))
draw.pieslice([cx - 300, 560, cx + 300, 1100], 180, 360,
              fill=(255, 255, 255, 22))

# Monogram
try:
    font = ImageFont.truetype("/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf", 130)
except Exception:
    try:
        font = ImageFont.truetype(
            "/opt/toolchains/.local/share/mise/installs/ruby/3.3.8/lib/ruby/3.3.0/rdoc/generator/template/darkfish/fonts/SourceCodePro-Bold.ttf", 130)
    except Exception:
        font = ImageFont.load_default()

txt = "SK"
bbox = draw.textbbox((0, 0), txt, font=font)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
draw.text((cx - tw / 2, 320 - th / 2), txt, font=font, fill=(255, 255, 255, 230))

# Caption
try:
    sf = ImageFont.truetype("/usr/share/fonts/dejavu/DejaVuSans.ttf", 34)
except Exception:
    sf = ImageFont.load_default()
cap = "Replace with your photo"
b2 = draw.textbbox((0, 0), cap, font=sf)
draw.text((cx - (b2[2]-b2[0]) / 2, 980), cap, font=sf, fill=(255, 255, 255, 140))

img.save("public/sonu.jpg", quality=82, optimize=True)
print("wrote public/sonu.jpg")

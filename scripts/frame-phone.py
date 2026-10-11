"""Wrap an app screenshot in the site-v3 phone body.

Matched to the treatment the marketing page already uses on every single-phone
slot (phone-new-tank-guide / phone-community / phone-reef-pulse): a 777x1557
canvas, a graphite rim lit from the top-right, a dark inner body, a 20px bezel,
a punch-hole camera, and a reef-blue glow that sits lower than the body so the
phone reads as standing on the page. Transparent outside the glow, so the page
needs no CSS border or shadow.
"""
import sys, os
from PIL import Image, ImageDraw, ImageFilter

BODY_W, BODY_H = 669, 1440      # measured off phone-new-tank-guide.png
MARGIN_X, MARGIN_T, MARGIN_B = 54, 39, 78
RIM        = 6                  # graphite edge
BEZEL      = 20                 # body edge -> screen
BODY_R     = 71
RIM_DARK   = (39, 46, 58)       # bottom-left end of the rim gradient
RIM_LIGHT  = (175, 189, 206)    # top-right end
BODY       = (6, 8, 12)
REEF       = (44, 196, 214)

W, H = MARGIN_X * 2 + BODY_W, MARGIN_T + BODY_H + MARGIN_B
L, T = MARGIN_X, MARGIN_T
SCREEN_W, SCREEN_H = BODY_W - BEZEL * 2, BODY_H - BEZEL * 2


def _rim_gradient():
    """Graphite lit from the top-right, so the left and bottom edges fall away."""
    g = Image.new("RGB", (BODY_W, BODY_H))
    px = g.load()
    for y in range(BODY_H):
        v = 1.0 - y / BODY_H
        for x in range(BODY_W):
            t = (x / BODY_W + v) / 2
            px[x, y] = tuple(round(a + (b - a) * t) for a, b in zip(RIM_DARK, RIM_LIGHT))
    return g


_GRADIENT = None


def frame(src_path, dst_path):
    global _GRADIENT
    shot = Image.open(src_path).convert("RGB").resize((SCREEN_W, SCREEN_H), Image.LANCZOS)
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))

    # Glow: one blurred silhouette, pushed down so the bottom reads heavier than
    # the top — that asymmetry is what the existing mockups have.
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(glow).rounded_rectangle(
        [L, T + 10, L + BODY_W - 1, T + BODY_H + 9], BODY_R, fill=REEF + (230,))
    canvas.alpha_composite(glow.filter(ImageFilter.GaussianBlur(32)))

    # Rim.
    if _GRADIENT is None:
        _GRADIENT = _rim_gradient()
    rim = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    rim.paste(_GRADIENT, (L, T))
    mask = Image.new("L", (W, H), 0)
    ImageDraw.Draw(mask).rounded_rectangle([L, T, L + BODY_W - 1, T + BODY_H - 1], BODY_R, fill=255)
    rim.putalpha(mask)
    canvas.alpha_composite(rim)

    # Dark body inside the rim.
    body = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(body).rounded_rectangle(
        [L + RIM, T + RIM, L + BODY_W - 1 - RIM, T + BODY_H - 1 - RIM], BODY_R - RIM,
        fill=BODY + (255,), outline=(0, 0, 0, 255), width=1)
    canvas.alpha_composite(body)

    # Screen.
    screen = Image.new("RGBA", (SCREEN_W, SCREEN_H), (0, 0, 0, 0))
    screen.paste(shot, (0, 0))
    m = Image.new("L", (SCREEN_W, SCREEN_H), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, SCREEN_W - 1, SCREEN_H - 1], BODY_R - BEZEL, fill=255)
    screen.putalpha(m)
    canvas.alpha_composite(screen, (L + BEZEL, T + BEZEL))

    # Punch-hole camera.
    cx, cy, r = L + BODY_W / 2, T + BEZEL + 26.5, 13
    ImageDraw.Draw(canvas).ellipse([cx - r, cy - r, cx + r, cy + r], fill=(11, 12, 15, 255))

    os.makedirs(os.path.dirname(dst_path), exist_ok=True)
    canvas.save(dst_path)
    return canvas.size


if __name__ == "__main__":
    print(sys.argv[2], frame(sys.argv[1], sys.argv[2]))

# Usage:
#   python3 scripts/frame-phone.py <raw-screenshot.png> public/screenshots/site-v3/<name>.png
#
# Input is a raw 9:20 phone screenshot (a 1008x2244 Android grab works as-is).
# Output is 777x1557 with transparency, the same geometry as the phones already
# on the marketing page — drop it straight into an <Image width={777} height={1557}>
# and add no border, radius or shadow in CSS.

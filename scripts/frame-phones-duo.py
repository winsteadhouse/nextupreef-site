"""Build a two-phone composite in the site-v3 mockup style.

The quads below were measured off public/screenshots/site-v3/phones-ai.png:
1227x1434, a back phone splayed up-left and a front phone down-right, each with
its own slight perspective, and a reef-blue glow behind both.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import frame as F

W, H = 1227, 1434
REEF = (44, 196, 214)

# (top-left, top-right, bottom-right, bottom-left) in canvas space
BACK_QUAD  = [(51, 136), (537, 75), (649, 1124), (163, 1185)]
FRONT_QUAD = [(553, 46), (1124, 86), (1040, 1280), (472, 1240)]


def flat_body(src_path):
    """The framed phone with no glow and no margin: just the 669x1440 body."""
    full = Image.new("RGBA", (F.W, F.H), (0, 0, 0, 0))
    shot = Image.open(src_path).convert("RGB").resize((F.SCREEN_W, F.SCREEN_H), Image.LANCZOS)
    L, T = F.L, F.T
    if F._GRADIENT is None:
        F._GRADIENT = F._rim_gradient()
    rim = Image.new("RGBA", (F.W, F.H), (0, 0, 0, 0))
    rim.paste(F._GRADIENT, (L, T))
    m = Image.new("L", (F.W, F.H), 0)
    ImageDraw.Draw(m).rounded_rectangle([L, T, L + F.BODY_W - 1, T + F.BODY_H - 1], F.BODY_R, fill=255)
    rim.putalpha(m)
    full.alpha_composite(rim)

    body = Image.new("RGBA", (F.W, F.H), (0, 0, 0, 0))
    ImageDraw.Draw(body).rounded_rectangle(
        [L + F.RIM, T + F.RIM, L + F.BODY_W - 1 - F.RIM, T + F.BODY_H - 1 - F.RIM],
        F.BODY_R - F.RIM, fill=F.BODY + (255,), outline=(0, 0, 0, 255), width=1)
    full.alpha_composite(body)

    screen = Image.new("RGBA", (F.SCREEN_W, F.SCREEN_H), (0, 0, 0, 0))
    screen.paste(shot, (0, 0))
    sm = Image.new("L", (F.SCREEN_W, F.SCREEN_H), 0)
    ImageDraw.Draw(sm).rounded_rectangle([0, 0, F.SCREEN_W - 1, F.SCREEN_H - 1], F.BODY_R - F.BEZEL, fill=255)
    screen.putalpha(sm)
    full.alpha_composite(screen, (L + F.BEZEL, T + F.BEZEL))

    cx, cy, r = L + F.BODY_W / 2, T + F.BEZEL + 26.5, 13
    ImageDraw.Draw(full).ellipse([cx - r, cy - r, cx + r, cy + r], fill=(11, 12, 15, 255))
    return full.crop((L, T, L + F.BODY_W, T + F.BODY_H))


def _coeffs(dst, src):
    """Perspective coefficients for Image.transform, which maps output -> input."""
    A, b = [], []
    for (x, y), (u, v) in zip(dst, src):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); b.append(u)
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y]); b.append(v)
    return np.linalg.solve(np.array(A, float), np.array(b, float))


def place(canvas, body, quad, blur=22, alpha=200):
    w, h = body.size
    src = [(0, 0), (w, 0), (w, h), (0, h)]
    warped = body.transform((W, H), Image.PERSPECTIVE, _coeffs(quad, src), Image.BICUBIC)
    glow = Image.new("RGBA", (W, H), REEF + (0,))
    glow.putalpha(warped.getchannel("A").point(lambda a: alpha if a > 128 else 0))
    canvas.alpha_composite(glow.filter(ImageFilter.GaussianBlur(blur)))
    canvas.alpha_composite(warped)


def duo(back_src, front_src, out):
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    place(canvas, flat_body(back_src), BACK_QUAD)
    place(canvas, flat_body(front_src), FRONT_QUAD)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    canvas.save(out)
    return canvas.size


if __name__ == "__main__":
    print(duo(sys.argv[1], sys.argv[2], sys.argv[3]))

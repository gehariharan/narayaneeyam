#!/usr/bin/env python3
"""Build a classic print-layout proof for one Narayaneeyam daskam."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image, ImageOps
from reportlab.lib.colors import Color, HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
PAGE_W = 10 * 72
PAGE_H = 12 * 72
MARGIN = 0.78 * 72

IVORY = HexColor("#F3E9D2")
IVORY_LIGHT = HexColor("#FBF5E8")
INDIGO = HexColor("#17213C")
INDIGO_DARK = HexColor("#0B1022")
MAROON = HexColor("#6D281E")
GOLD = HexColor("#A9792B")
GOLD_LIGHT = HexColor("#D5B56C")
INK = HexColor("#29231E")
MUTED = HexColor("#746A5E")


def register_fonts() -> None:
    fonts = Path("C:/Windows/Fonts")
    pdfmetrics.registerFont(TTFont("Georgia", str(fonts / "georgia.ttf")))
    pdfmetrics.registerFont(TTFont("Georgia-Bold", str(fonts / "georgiab.ttf")))
    pdfmetrics.registerFont(TTFont("Georgia-Italic", str(fonts / "georgiai.ttf")))
    # Georgia Italic omits several Latin Extended glyphs used by IAST.
    pdfmetrics.registerFont(TTFont("Cambria-Italic", str(fonts / "cambriai.ttf")))
    pdfmetrics.registerFont(TTFont("Nirmala", str(fonts / "Nirmala.ttc"), subfontIndex=0, shapable=True))


def ascii_dashes(value: str) -> str:
    return value.replace("—", "-").replace("–", "-").replace("‑", "-")


def lotus(canvas: Canvas, x: float, y: float, scale: float = 1.0, color=GOLD) -> None:
    canvas.saveState()
    canvas.setStrokeColor(color)
    canvas.setFillColor(Color(color.red, color.green, color.blue, alpha=0.08))
    canvas.setLineWidth(1.2 * scale)
    for dx, angle in [(-14, 28), (0, 0), (14, -28)]:
        canvas.saveState()
        canvas.translate(x + dx * scale, y)
        canvas.rotate(angle)
        canvas.ellipse(-7 * scale, -2 * scale, 7 * scale, 22 * scale, fill=1, stroke=1)
        canvas.restoreState()
    canvas.arc(x - 32 * scale, y - 6 * scale, x, y + 18 * scale, 205, 115)
    canvas.arc(x, y - 6 * scale, x + 32 * scale, y + 18 * scale, 220, 115)
    canvas.restoreState()


def base_page(canvas: Canvas, page_number: int, running_title: str = "DASKAM 38") -> None:
    canvas.setFillColor(IVORY_LIGHT)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setStrokeColor(GOLD_LIGHT)
    canvas.setLineWidth(0.7)
    canvas.rect(22, 22, PAGE_W - 44, PAGE_H - 44, fill=0, stroke=1)
    canvas.setLineWidth(0.25)
    canvas.rect(27, 27, PAGE_W - 54, PAGE_H - 54, fill=0, stroke=1)
    canvas.setFont("Georgia", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN, PAGE_H - 34, running_title)
    canvas.drawRightString(PAGE_W - MARGIN, 34, str(page_number))


def paragraph(canvas: Canvas, text: str, style: ParagraphStyle, x: float, y_top: float, width: float) -> float:
    body = escape(ascii_dashes(text)).replace("\n", "<br/>")
    item = Paragraph(body, style)
    _, height = item.wrap(width, PAGE_H)
    item.drawOn(canvas, x, y_top - height)
    return height


def pil_reader(path: Path) -> tuple[ImageReader, int, int]:
    image = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    return ImageReader(image), image.width, image.height


def draw_contained_image(canvas: Canvas, path: Path, x: float, y: float, width: float, height: float) -> None:
    reader, img_w, img_h = pil_reader(path)
    scale = min(width / img_w, height / img_h)
    draw_w, draw_h = img_w * scale, img_h * scale
    draw_x = x + (width - draw_w) / 2
    draw_y = y + (height - draw_h) / 2
    canvas.setFillColor(INDIGO_DARK)
    canvas.rect(x, y, width, height, fill=1, stroke=0)
    canvas.drawImage(reader, draw_x, draw_y, draw_w, draw_h, preserveAspectRatio=True, mask="auto")


def choose_art(slug: str, stanza_number: int, approval: dict) -> tuple[Path, str]:
    stanza_slug = f"s{stanza_number:03d}"
    record = next(item for item in approval["stanzas"] if item["n"] == stanza_number)
    portrait = record["portrait"]
    if portrait.get("master_path") and portrait.get("status") in {"approved", "approved-legacy"}:
        return ROOT / portrait["master_path"], "APPROVED ORIGINAL ART"
    candidate_dir = ROOT / "artifacts" / slug / stanza_slug / "candidates" / "portrait"
    candidates = sorted(candidate_dir.glob("*.png")) if candidate_dir.exists() else []
    if candidates:
        return candidates[-1], "ORIGINAL CANDIDATE - AWAITING APPROVAL"
    reference = ROOT / "artifacts" / slug / "references" / f"{stanza_slug}.jpg"
    return reference, "REFERENCE IMAGE - NOT CLEARED FOR PUBLICATION"


def half_title(canvas: Canvas, page_number: int) -> None:
    base_page(canvas, page_number, "NARAYANEEYAM")
    canvas.setFillColor(INDIGO)
    canvas.setFont("Georgia", 15)
    canvas.drawCentredString(PAGE_W / 2, PAGE_H * 0.61, "NARAYANEEYAM")
    canvas.setFillColor(GOLD)
    canvas.setFont("Georgia-Bold", 38)
    canvas.drawCentredString(PAGE_W / 2, PAGE_H * 0.52, "DASKAM 38")
    lotus(canvas, PAGE_W / 2, PAGE_H * 0.43, 1.15)
    canvas.setFillColor(MUTED)
    canvas.setFont("Georgia-Italic", 10)
    canvas.drawCentredString(PAGE_W / 2, PAGE_H * 0.34, "A print-layout study")
    canvas.showPage()


def opening_art(canvas: Canvas, page_number: int, landscape: Path) -> None:
    base_page(canvas, page_number)
    frame_x, frame_y = MARGIN, 190
    frame_w, frame_h = PAGE_W - 2 * MARGIN, 390
    canvas.setFillColor(INDIGO_DARK)
    canvas.roundRect(frame_x - 8, frame_y - 8, frame_w + 16, frame_h + 16, 4, fill=1, stroke=0)
    draw_contained_image(canvas, landscape, frame_x, frame_y, frame_w, frame_h)
    canvas.setFillColor(GOLD)
    canvas.setFont("Georgia-Italic", 11)
    canvas.drawCentredString(PAGE_W / 2, 145, "The monsoon sky gathers the radiance of the approaching incarnation.")
    canvas.setFillColor(MUTED)
    canvas.setFont("Georgia", 7.5)
    canvas.drawCentredString(PAGE_W / 2, 119, "ORIGINAL CONCEPT CANDIDATE - AWAITING APPROVAL")
    canvas.showPage()


def title_page(canvas: Canvas, page_number: int, title: str, description: str) -> None:
    base_page(canvas, page_number)
    lotus(canvas, PAGE_W / 2, PAGE_H - 165, 0.9)
    canvas.setFillColor(MAROON)
    canvas.setFont("Georgia", 11)
    canvas.drawCentredString(PAGE_W / 2, PAGE_H - 225, "THIRTY-EIGHTH DASKAM")
    canvas.setFillColor(INDIGO)
    canvas.setFont("Georgia-Bold", 31)
    canvas.drawCentredString(PAGE_W / 2, PAGE_H - 288, "THE BIRTH OF")
    canvas.drawCentredString(PAGE_W / 2, PAGE_H - 330, "SRI KRISHNA")
    canvas.setStrokeColor(GOLD)
    canvas.setLineWidth(1)
    canvas.line(PAGE_W / 2 - 95, PAGE_H - 365, PAGE_W / 2 + 95, PAGE_H - 365)
    style = ParagraphStyle("opening", fontName="Georgia", fontSize=13, leading=21, alignment=TA_CENTER, textColor=INK)
    paragraph(canvas, description, style, 130, PAGE_H - 420, PAGE_W - 260)
    canvas.setFillColor(MUTED)
    canvas.setFont("Georgia-Italic", 9.5)
    canvas.drawCentredString(PAGE_W / 2, 154, "From cosmic anticipation to the protected journey toward Gokulam")
    canvas.setFont("Georgia", 7.5)
    canvas.drawCentredString(PAGE_W / 2, 115, "EDITORIAL AND ART DIRECTION PROOF - SEPTEMBER 2026")
    canvas.showPage()


def text_page(canvas: Canvas, page_number: int, stanza: dict) -> None:
    base_page(canvas, page_number)
    content_w = PAGE_W - 2 * MARGIN
    y = PAGE_H - 78

    canvas.setFillColor(GOLD)
    canvas.setFont("Georgia", 9)
    canvas.drawString(MARGIN, y, "STANZA")
    canvas.setFillColor(MAROON)
    canvas.setFont("Georgia-Bold", 31)
    canvas.drawString(MARGIN, y - 38, f"{stanza['n']:02d}")
    canvas.setStrokeColor(GOLD_LIGHT)
    canvas.line(MARGIN + 65, y - 27, PAGE_W - MARGIN, y - 27)
    y -= 75

    sa_style = ParagraphStyle("sanskrit", fontName="Nirmala", fontSize=16.5, leading=27, textColor=INDIGO, alignment=TA_LEFT, shaping=True)
    y -= paragraph(canvas, stanza["sanskrit"], sa_style, MARGIN, y, content_w)
    y -= 19

    canvas.setFillColor(GOLD)
    canvas.setFont("Georgia-Bold", 7.5)
    canvas.drawString(MARGIN, y, "IAST TRANSLITERATION")
    y -= 14
    roman_style = ParagraphStyle("roman", fontName="Cambria-Italic", fontSize=9.5, leading=15, textColor=MUTED, alignment=TA_LEFT)
    y -= paragraph(canvas, stanza["stanza_roman"], roman_style, MARGIN, y, content_w)
    y -= 19

    canvas.setFillColor(GOLD)
    canvas.setFont("Georgia-Bold", 7.5)
    canvas.drawString(MARGIN, y, "MEANING")
    y -= 15
    meaning_style = ParagraphStyle("meaning", fontName="Georgia", fontSize=12.2, leading=19, textColor=INK, alignment=TA_LEFT)
    y -= paragraph(canvas, stanza["meaning_en"], meaning_style, MARGIN, y, content_w)
    y -= 20

    canvas.setFillColor(GOLD)
    canvas.setFont("Georgia-Bold", 7.5)
    canvas.drawString(MARGIN, y, "REFLECTION")
    y -= 15
    commentary_style = ParagraphStyle("commentary", fontName="Georgia", fontSize=10.4, leading=16.5, textColor=INK, alignment=TA_LEFT)
    paragraph(canvas, stanza["commentary_en"], commentary_style, MARGIN, y, content_w)

    canvas.setFont("Georgia-Italic", 7.2)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN, 52, "Text and commentary remain under editorial review.")
    canvas.showPage()


def art_page(canvas: Canvas, page_number: int, stanza: dict, art_path: Path, status: str) -> None:
    base_page(canvas, page_number)
    frame_x, frame_y = 42, 112
    frame_w, frame_h = PAGE_W - 84, PAGE_H - 175
    canvas.setFillColor(INDIGO_DARK)
    canvas.roundRect(frame_x - 7, frame_y - 7, frame_w + 14, frame_h + 14, 4, fill=1, stroke=0)
    draw_contained_image(canvas, art_path, frame_x, frame_y, frame_w, frame_h)

    canvas.setFillColor(Color(0.04, 0.06, 0.12, alpha=0.90))
    canvas.roundRect(58, 56, PAGE_W - 116, 42, 3, fill=1, stroke=0)
    canvas.setFillColor(GOLD_LIGHT)
    canvas.setFont("Georgia-Bold", 7)
    canvas.drawString(72, 82, status)
    canvas.setFillColor(IVORY)
    caption = ascii_dashes(stanza.get("meaning_en", ""))
    if len(caption) > 112:
        caption = caption[:109].rstrip() + "..."
    canvas.setFont("Georgia-Italic", 8.4)
    canvas.drawString(72, 67, caption)
    canvas.showPage()


def closing_page(canvas: Canvas, page_number: int) -> None:
    base_page(canvas, page_number)
    lotus(canvas, PAGE_W / 2, PAGE_H - 170, 1.0)
    canvas.setFillColor(MAROON)
    canvas.setFont("Georgia", 10)
    canvas.drawCentredString(PAGE_W / 2, PAGE_H - 235, "THE CLOSING PRAYER")
    quote_style = ParagraphStyle("quote", fontName="Georgia-Italic", fontSize=17, leading=27, alignment=TA_CENTER, textColor=INDIGO)
    paragraph(canvas, "O Lord of such glory, remove the force of my ailments.", quote_style, 125, PAGE_H - 300, PAGE_W - 250)
    canvas.setStrokeColor(GOLD_LIGHT)
    canvas.line(PAGE_W / 2 - 75, PAGE_H - 390, PAGE_W / 2 + 75, PAGE_H - 390)
    note_style = ParagraphStyle("note", fontName="Georgia", fontSize=9, leading=15, alignment=TA_CENTER, textColor=MUTED)
    paragraph(canvas, "Internal layout proof. Stanza 1 uses original generated candidates. Stanzas 2-10 use supplied reference images with unknown publication rights and must be replaced by approved original artwork before distribution or print.", note_style, 140, PAGE_H - 435, PAGE_W - 280)
    canvas.setFillColor(MUTED)
    canvas.setFont("Georgia", 7.3)
    canvas.drawCentredString(PAGE_W / 2, 130, "Sanskrit and IAST: Stotra Nidhi  |  English translation: Vaidika Vignanam")
    canvas.drawCentredString(PAGE_W / 2, 112, "Commentary: user-supplied draft, lightly copy-edited for this proof")
    canvas.showPage()


def build(daskam_id: int, output: Path) -> None:
    register_fonts()
    slug = f"d{daskam_id:03d}"
    content = json.loads((ROOT / "content" / "daskams" / f"{slug}.json").read_text(encoding="utf-8"))
    approval = json.loads((ROOT / "art" / "approved" / f"{slug}.json").read_text(encoding="utf-8"))
    output.parent.mkdir(parents=True, exist_ok=True)

    canvas = Canvas(str(output), pagesize=(PAGE_W, PAGE_H), pageCompression=1)
    canvas.setTitle(ascii_dashes(content["title"]) + " - Coffee Table Book Proof")
    canvas.setAuthor("Narayaneeyam Editorial Studio")
    canvas.setSubject("Internal print-layout proof")

    half_title(canvas, 1)
    landscape = ROOT / "artifacts" / slug / "s001" / "candidates" / "landscape" / "c001.png"
    opening_art(canvas, 2, landscape)
    title_page(canvas, 3, content["title"], content["description"])

    page = 4
    for stanza in content["stanzas"]:
        text_page(canvas, page, stanza)
        art_path, status = choose_art(slug, stanza["n"], approval)
        art_page(canvas, page + 1, stanza, art_path, status)
        page += 2
    closing_page(canvas, page)
    canvas.save()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--daskam", type=int, required=True)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    default = ROOT / "output" / "pdf" / f"narayaneeyam-daskam-{args.daskam:02d}-chapter-proof.pdf"
    build(args.daskam, args.output or default)
    print(args.output or default)


if __name__ == "__main__":
    main()

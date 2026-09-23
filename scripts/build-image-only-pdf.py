#!/usr/bin/env python3
"""Build an edge-to-edge PDF with one raster image per page."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen.canvas import Canvas


POINTS_PER_INCH = 72


def build(input_dir: Path, pattern: str, output: Path, page_width_inches: float) -> None:
    images = sorted(input_dir.glob(pattern))
    if not images:
        raise ValueError(f"No images matched {input_dir / pattern}")

    dimensions: list[tuple[Path, int, int]] = []
    for path in images:
        with Image.open(path) as image:
            dimensions.append((path, image.width, image.height))

    first_ratio = dimensions[0][1] / dimensions[0][2]
    if any(abs((width / height) - first_ratio) > 0.001 for _, width, height in dimensions):
        raise ValueError("All images must have the same aspect ratio")

    page_width = page_width_inches * POINTS_PER_INCH
    page_height = page_width / first_ratio
    output.parent.mkdir(parents=True, exist_ok=True)

    canvas = Canvas(str(output), pagesize=(page_width, page_height), pageCompression=1)
    canvas.setTitle("Narayaneeyam Daskam 38 - Temple Mural Image Proof")
    canvas.setAuthor("Narayaneeyam Editorial Studio")
    canvas.setSubject("One full-bleed mural per page")

    for path, _, _ in dimensions:
        canvas.setPageSize((page_width, page_height))
        canvas.drawImage(
            ImageReader(str(path)),
            0,
            0,
            width=page_width,
            height=page_height,
            preserveAspectRatio=False,
            mask="auto",
        )
        canvas.showPage()

    canvas.save()
    print(output.resolve())


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input-dir", type=Path, required=True)
    parser.add_argument("--pattern", default="*.png")
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--page-width-inches", type=float, default=12.0)
    args = parser.parse_args()
    build(args.input_dir, args.pattern, args.output, args.page_width_inches)


if __name__ == "__main__":
    main()

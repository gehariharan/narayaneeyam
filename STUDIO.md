# Narayaneeyam editorial and art studio

The immediate product is the content collection itself: a carefully sourced Narayaneeyam edition with a coherent temple-mural visual narrative. The Astro site is only a lightweight local proof reader. Hosting, donations, and the final storefront can be decided after the material is strong.

## The unit of work

Each stanza has one stable `concept_id` and two purpose-built compositions:

| Orientation | Ratio | Intended uses |
| --- | --- | --- |
| Landscape | 16:9 | desktop, web, presentation, book spread |
| Portrait | 4:5 | mobile, downloadable page, cover, portrait book page |

The pair explains the same idea with the same characters, moment, symbols, palette, and emotional tone. Framing and spatial arrangement may change. Cropping or extending one image to imitate the other is not acceptable.

## Chapter workflow

1. **Acquire and record sources.** Put retrieval and provenance details in `content/sources/dNNN/`.
2. **Edit the content.** Check Sanskrit, transliteration, literal meaning, translation, and commentary. Keep source text distinct from original commentary. Mark review state explicitly.
3. **Plan the whole daskam.** Define its teaching arc, recurring character(s), locations, visual rhythm, and one scene brief per stanza in `art/plans/dNNN.json`.
4. **Build prompts.** Run `prompt:build` once per orientation. It combines the series bible, character rules, verse context, scene plan, and orientation contract into a versioned prompt file.
5. **Generate with Codex ImageGen.** Generate the first orientation, review it, then generate the companion using the approved first image as a reference. Keep every candidate under its own orientation folder.
6. **Review deliberately.** Check theological/content accuracy, character continuity, visual clarity, anatomy, unwanted text, and whether the pair works without mechanical cropping.
7. **Approve explicitly.** Copy the chosen full-resolution file to the orientation's `master` path and update its approval-manifest status and SHA-256. Do not replace an approved file silently.
8. **Publish local previews.** Run `preview:sync`; then validate and build the static reader.

## Review gates

Content is ready only when source attribution is present and a human has reviewed the Sanskrit, transliteration, translation, and commentary. Art is ready only when both compositions are approved, their hashes match the manifest, and the master dimensions suit the intended print size. A 1536 x 864 image is useful for review but is not automatically a print master.

Before scaling beyond Daskam 1, approve a dedicated character sheet for every recurring figure. Daskam plans should also vary visual grammar—sanctum, narrative action, symbolic cosmology, intimate devotion—so a hundred chapters feel like a composed book rather than repeated prompts.

## Recommended next production pass

1. Editorially review Daskam 1 and replace generic scene/alt placeholders.
2. Approve a Guruvayurappan character sheet.
3. Produce the ten missing portrait companions for Daskam 1.
4. Regenerate any legacy landscape master that is too small for print.
5. Pilot the full workflow on Daskams 2 and 3 before planning the remaining chapters in batches.

## Testing a ready daskam

A supplied test package does not need to follow repository naming. It only needs a daskam number, stanza text in any readable document or data format, and images that can be matched to stanza numbers. Landscape and portrait images should be identified when both exist. During intake, normalize the text into `content/daskams/`, record provenance, copy—not move—the originals into `artifacts/`, build the visual and approval records, generate previews, validate, and inspect the result in the local reader. Keep the supplied originals unchanged for comparison.

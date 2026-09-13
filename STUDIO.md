# Narayaneeyam editorial and art studio

User-authorised public review exception (2026-09-13): publish the comparison
collection at `gehariharan.com/narayaneeyam`, using the dedicated `narayaneeyam`
R2 bucket for web derivatives and `narayaneeyam-feedback` D1 database for row
feedback. The user explicitly chose open access with no passphrase. Local files
and approval manifests remain authoritative. See `review-site/README.md`.

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
9. **Mirror durable assets.** Run `storage:sync` to copy canonical data and full-resolution artifacts to OneDrive. This is a one-way backup; local files and approval manifests remain authoritative.

## Review gates

Content is ready only when source attribution is present and a human has reviewed the Sanskrit, transliteration, translation, and commentary. Art is ready only when both compositions are approved, their hashes match the manifest, and the master dimensions suit the intended print size. A 1536 x 864 image is useful for review but is not automatically a print master.

Before scaling beyond Daskam 1, approve a dedicated character sheet for every recurring figure. Daskam plans should also vary visual grammar—sanctum, narrative action, symbolic cosmology, intimate devotion—so a hundred chapters feel like a composed book rather than repeated prompts.

## OneDrive storage contract

The OneDrive mirror contains `content/`, `art/`, `artifacts/`, raw `intake/`,
and `schemas/`. Sync verifies copies by SHA-256 and records the complete
snapshot in `studio-storage-manifest.json`. It does not delete remote extras or
pull remote changes into the studio, preventing cloud conflicts from silently
changing approved content or artwork.

The standard studio commands automatically refresh the mirror after successful
content acquisition, validation, prompt building, art approval, preview sync,
and static builds. Run `storage:sync` directly only for an explicit sync or dry
run.

Run `npm run storage:sync -- --dry-run` before the first sync. By default the
script prefers the locally synced personal OneDrive folder and creates a
`Narayaneeyam Studio` directory. Use `--target` or
`NARAYANEEYAM_ONEDRIVE_ROOT` when the default folder is not appropriate. A
gitignored `.studio-storage.json` with a `target` property can persist the
machine-specific destination without committing a personal path.

## Recommended next production pass

1. Editorially review Daskam 1 and replace generic scene/alt placeholders.
2. Approve a Guruvayurappan character sheet.
3. Produce the ten missing portrait companions for Daskam 1.
4. Regenerate any legacy landscape master that is too small for print.
5. Pilot the full workflow on Daskams 2 and 3 before planning the remaining chapters in batches.

## Testing a ready daskam

A supplied test package does not need to follow repository naming. It only needs a daskam number, stanza text in any readable document or data format, and images that can be matched to stanza numbers. Landscape and portrait images should be identified when both exist. During intake, normalize the text into `content/daskams/`, record provenance, copy—not move—the originals into `artifacts/`, build the visual and approval records, generate previews, validate, and inspect the result in the local reader. Keep the supplied originals unchanged for comparison.

Authenticated Facebook references use a browser-side capture rather than
sharing session cookies. Run `scripts/facebook-capture-snippet.js` in the
logged-in page, then immediately pass its JSON download to `facebook:intake`.
The importer keeps captions, post URLs, images, and checksums together under
raw `intake/facebook/`. Treat the result as attributed reference material only;
do not silently promote captions or images into canonical or approved paths.

For a Page owned by the operator, prefer `facebook:graph`. It uses a User
access token only from `FACEBOOK_USER_ACCESS_TOKEN`, discovers the Page and
Page access token through `/me/accounts`, and stores Page-authored posts plus
their image attachments in raw `intake/facebook-graph/`. Start with a
three-post request, then use `--all --download` only after permissions and Page
selection are confirmed. Tokens must never be written into the repository,
intake manifests, logs, or OneDrive.

When an official Facebook export is available, prefer `facebook:export` over
Graph API or browser capture. The organizer copies each multi-photo post into a
simple `intake/D001`, `intake/D002`, and similar folder, placing numerically prefixed media
directly inside it using the exported `attachments[].data[]` order. Image
captions are merged into one ordered `photo-captions.txt`. It preserves the
original JSON unchanged under `_source-metadata/`, stores repaired captions
only as derivatives, keeps non-Daskam media posts under `_other/`, and never
modifies the downloaded export.

The OneDrive comparison layout is `Pictures/Narayaneeyam Studio/intake/DNNN/`,
with no export-name folders between intake and the daskam. Keep existing `-X`
suffixes for chapters that have captions but no source photos. Versioned mural
comparison copies sit beside the numbered reference images; authoritative
generated candidates and masters stay under local `artifacts/`. The earlier
organized export is preserved under `intake/_archive-facebook-export-v1/`.
Historical retrieval manifests and submitted prompts retain their original paths;
the layout migration record under `artifacts/` maps those paths to the current ones.
The export importer requires a new output directory and refuses to overwrite
existing intake; use `--output` for subsequent exports before reviewing a merge.

## Mural output format

New mural outputs use PNG. Landscape compositions are native 16:9 and portrait
compositions are native 4:5. Request the highest available native resolution,
record the actual dimensions, and never crop or upscale to claim a print master.

Comparison copies in `intake/DNNN/` use `mural-s001-landscape-v001.png` and
`mural-s001-portrait-v001.png`, with three-digit stanza and version numbers.
Increment the version whenever an image changes. Approval is recorded in the
approval manifest; do not infer it from the comparison filename. Existing legacy
and pilot filenames remain intact as historical outputs.

Keep authoritative candidates at `artifacts/dNNN/sNNN/<orientation>/candidate-vVVV.png`
and approved masters at the corresponding versioned `master-vVVV.png` path.
Save the submitted prompt, reference paths, actual dimensions, and SHA-256 with
each candidate. Copy comparison images into the same daskam folder in the local
OneDrive mirror and upload non-destructively.

Batch inventories live under `art/batches/`. Caption numbers can identify several
references for one stanza; a numbered image filename alone does not establish a
stanza mapping. Unmapped reference images need visual review before generation.

## D002 output layout and matte style correction

The user-selected comparison layout is `intake/D002/outputs/d2001-landscape-v001.png`,
`d2002-landscape-v001.png`, and onward: daskam number followed by three-digit stanza.
Keep orientation and version suffixes to preserve independent compositions and revisions.
Existing comparison files remain historical references; authoritative candidates remain under `artifacts/`.

The D002 review found substantial drift toward glossy devotional illustration.
Preserve the generated set for comparison. Regenerate using the flat, matte D001
painting style, with D001 S004/S008 as rendering references and approved character
sheets used for identity only. Avoid glossy skin, reflective gold, silk sheen and
cinematic lighting. Findings: `artifacts/d002/style-review-v001.md`; correction
comparison record: `artifacts/d002/matte-comparison-v001.md`.

# D041 S008 v002 producer inspection

- Reviewer: producer (Codex ImageGen worker)
- Inspected at: 2026-11-15T18:45:04Z
- Outcome: pass, producer inspection only; final independent exact-checksum review is pending. This does not approve the artwork.
- Candidate: `artifacts/d041/s008/landscape/candidate-v002.png` (v002, 1671x941, SHA-256 `2d614f3d1ddc4f24eceff0c4b318cde6e24ba3c1e937a2aa3b18a686f27c3f29`)
- Mapped source: `intake/D041/008.jpg` (SHA-256 `176be0d3f9332f3481a7bbb130c2a57ea29edcace022bb183be8fa67765e18ff`), source photo 008 mapped to stanza 8 in the accepted reference map.
- Viewing: inspected the complete native image and enlarged face, torso and leg views at `artifacts/d041/review-crops/s008-v002-krishna.png` and `s008-v002-body.png`; the 15×15 px measurement patches were enlarged to verify they contain only Krishna's skin.

## Image-specific observations

Yashoda securely holds the smiling infant while the gopis reach toward him in the courtyard. The child has two arms and two legs, and the hands and feet join naturally to his body. His exposed skin now reads deep matte indigo-blue without the lavender cast noted on v001; the yellow wrap and the surrounding people, animals and courtyard details remain. Skin-only 15×15 px median RGB samples are face cheek (79, 86, 128), torso (45, 70, 121) and leg (49, 71, 122), with blue exceeding red by 49, 76 and 73 respectively.

## Checks

- Anatomy and limbs: pass — Krishna has two connected infant arms and two connected legs; no malformed or detached hand observed.
- Attachment and proportions: pass — Yashoda's hold supports the infant; no fused bodies observed.
- Faces and duplication: pass — the gopis, Yashoda and Krishna have distinct visible faces; no repeated figure observed.
- Frame edges: pass — people and visible extremities remain inside the frame.
- Text and artifacts: pass — no readable text, signature-like mark, logo or watermark observed at native size or in enlarged crops.
- Scene and style: pass — the welcome scene remains in flat matte mural style and Krishna's sampled skin meets the requested +40 blue-over-red margin.

## Context hashes

- `art/bible/series.json` — `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d041.json` — `5d1dd114825db70e6993ab393034e7b6adcbb2cf29c443a87f4647feaa7bafdd`
- `art/bible/characters/infant-krishna/character.json` — `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`
- `art/bible/characters/gopikas/character.json` — `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`
- `art/bible/characters/yashoda/character.json` — `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d`

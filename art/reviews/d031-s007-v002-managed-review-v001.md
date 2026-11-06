# D031 S007 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Brahma washes the foot
- Selected native PNG: `artifacts/d031/s007/landscape/candidate-v002.png` (v002), SHA-256 `9c096601e567c2a0679f4147bc098e8a1692dddf73d24ad20a24e8219160740b` (recomputed after a byte-exact copy from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/artifacts/d031/s007/landscape/candidate-v002.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-checks and generation provenance were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s007/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v001/s007-v002-nw.png`: region `836x471+0+0`, SHA-256 `1f4c7d8306a5e471c99dbf495e08dcc9be58a257d895edbba3a1dac3102f78bc`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s007-v002-ne.png`: region `836x471+836+0`, SHA-256 `921f959fe689d8dc4fee91a06c29c63c64bc13e7efb36c2bd69c5b7c9992510c`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s007-v002-sw.png`: region `836x470+0+471`, SHA-256 `557718efa5ecf2144cc6f06f4f11fe56cecd7c9e891a03a89af0906d21ff3499`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s007-v002-se.png`: region `836x470+836+471`, SHA-256 `3db492e1714a1e6e5635b9065e1b96c70d5a0c59965692905088dc500455e15d`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z

## References opened and hashed

- Source reference: `intake/D031/007.jpg` (SHA-256 `cc71c5fee279ca3abd03dd3c24b95ecbe5f7325e612b478654faafce64b27257`), opened full-frame immediately before the candidate; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#7` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/brahma/character.json` (SHA-256 `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`)
- Contract: `art/bible/characters/d031-vamana/character.json` (SHA-256 `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229`)
- Contract: `art/bible/characters/d031-jambavan/character.json` (SHA-256 `588f6794a03fc0a6b139c945bfda57bc249a2bd5576a2aad37ff9d3ab9c96586`)

## Anatomy basis

Trivikrama (one giant two-armed Lord), Brahma (four heads, three front faces, four arms), a kneeling crowned king resembling Bali, two devotees, Jambavan drumming and two dancers.

## Observations

- Limbs, hands, feet and fingers (needs-fix): Trivikrama's raised right palm is ochre-orange while the rest of the arm is blue. Brahma's four hands hold a book, a lotus, the kamandalu and prayer beads, each attached. Jambavan holds the drum with two hands. Dancers' hands and feet are complete.
- Attachment and proportions (pass): Trivikrama's raised leg reaches Brahma's pour, and the water falls continuously into the river. Brahma's four arms attach at two shoulders.
- Faces (pass): Brahma shows three front faces with white beards, matching the approved four-head contract. Jambavan has one bear muzzle. The kneeling crowned king has a moustache like Bali, who is not named in this stanza.
- Duplication and fusion (pass): Two distinct dancers; no cloned or fused figures.
- Text and marks (pass): None observed; Brahma's book shows no readable writing.
- Scene, identity, composition and style (needs-fix): Trivikrama wears a peacock feather on his crown, which the plan and the vamana contract explicitly forbid.

## Defects

- Peacock feather on Trivikrama's crown.
- Ochre raised palm on a blue arm.

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This version needs a new native candidate before it can be cleared; a fresh full inspection is required for any replacement.

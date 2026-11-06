# D031 S009 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Bali offers his head
- Selected native PNG: `artifacts/d031/s009/landscape/candidate-v002.png` (v002), SHA-256 `a77b27428bf13b68c199da2cc02fbe595685c923d3f572b3aafc0b01f785e37a` (recomputed after a byte-exact copy from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/artifacts/d031/s009/landscape/candidate-v002.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-checks and generation provenance were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s009/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v001/s009-v002-nw.png`: region `836x471+0+0`, SHA-256 `e4c646869fd581f12586052d2b85ce0e4326fe14bc7d4869ec0ae77dca0fcfdf`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s009-v002-ne.png`: region `836x471+836+0`, SHA-256 `d7753d4ef0170566f848bf9164f8b9030290495b4ae352c227758c63096e6c56`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s009-v002-sw.png`: region `836x470+0+471`, SHA-256 `0c59cf6c952b4c8be6ac4b2d02e148e8813731edf6616692d07f28fabaa0e717`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s009-v002-se.png`: region `836x470+836+471`, SHA-256 `49f5d851ac5d03bee204dc446424a9e3ecf3e4ef02cf11ecd3f5f8091110d73e`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z

## References opened and hashed

- Source reference: `intake/D031/009.jpg` (SHA-256 `61edd32b0f7d96242292dce75cc02d4cd4bb20e96531041d801a0beb8e8e3bcd`), opened full-frame immediately before the candidate; it remains a reference image, not a generated candidate
- Source reference: `intake/D031/010.jpg` (SHA-256 `ad063dd3070a88ed187ef31a0e8b268b4b5310e0fe5db1d2eb2da0e27203df04`), opened full-frame immediately before the candidate; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#9` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-vamana/character.json` (SHA-256 `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229`)
- Contract: `art/bible/characters/d031-garuda/character.json` (SHA-256 `1a3d92ca6ad0bf197618aa6785d5facf2079859e424519093deaf3b20d3e8b62`)
- Contract: `art/bible/characters/d031-prahlada/character.json` (SHA-256 `36d52eab32fa0cd267acef13136e96d8fbe4bd3ba9498de9ba9bca2c30b409b7`)

## Anatomy basis

The Lord (blue, two-armed, standing with one foot on Bali's head), Bali kneeling and bound, Garuda (one bird head, two arms, two wings) and Prahlada standing.

## Observations

- Limbs, hands, feet and fingers (pass): The Lord holds the umbrella shaft in his right hand and opens his left. Bali folds both hands. Garuda grips the rope with two attached hands and stands on two taloned feet. Prahlada folds his hands and stands on two feet.
- Attachment and proportions (pass): The Lord's raised foot rests on Bali's crown without crushing him. The rope wraps Bali and runs continuously into Garuda's hands.
- Faces (needs-fix): Prahlada appears as a youthful shaven brahmachari with a tuft, very close to the S001-S005 Vamana, rather than the calm elder the prahlada contract requires.
- Duplication and fusion (pass): One Lord, one Bali, one Garuda and one Prahlada; Garuda has one head and two wings.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (needs-fix): Because Prahlada reads as a second Vamana, the frame can be misread as showing the Lord twice.

## Defects

- Prahlada not an elder; resembles Vamana.

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This version needs a new native candidate before it can be cleared; a fresh full inspection is required for any replacement.

# D031 S005 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Bali confirms the gift
- Selected native PNG: `artifacts/d031/s005/landscape/candidate-v001.png` (v001), SHA-256 `f1af778cdde2340117b8ac7f0e0d31f58b969cb6ccd7d69d9807843a99ba775f` (recomputed after a byte-exact copy from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/artifacts/d031/s005/landscape/candidate-v001.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-checks and generation provenance were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s005/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v001/s005-v001-nw.png`: region `836x471+0+0`, SHA-256 `90fe8c7f4233898da3ff4190cff54954a4106fb5d95466b42bafff3d9266021c`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s005-v001-ne.png`: region `836x471+836+0`, SHA-256 `fca155a262f23de07180fb97ce4f7807ceac9e549773ccaeb44a6c6e8cbdf7b2`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s005-v001-sw.png`: region `836x470+0+471`, SHA-256 `3883e519a8cb0cbd809d57bb7276f1326a07a9adf0b8b3e28b2b7ae5856a0176`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s005-v001-se.png`: region `836x470+836+471`, SHA-256 `06b2491d6eaf55a61b1a7758c8dd062e7c9afa548b78bd97e3049310e6c06090`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z

## References opened and hashed

- Source reference: `intake/D031/005.jpg` (SHA-256 `eeefbccd81e9dec7fe266d249eb2d8a3e08473218b56a28052959f8c19c4602e`), opened full-frame immediately before the candidate; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#5` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-vamana/character.json` (SHA-256 `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229`)
- Contract: `art/bible/characters/d031-vindhyavali/character.json` (SHA-256 `cd3b5ac9f66aae42894c8d18f6bc44763bf3f1e94ddb97b62e349bfb4512848c`)
- Contract: `art/bible/characters/d031-shukracharya/character.json` (SHA-256 `c493d4cfa5d61cb35e6cf5b318819d563f98825038ba456fd5a47fb37658b3c8`)

## Anatomy basis

One adult king (Bali, kneeling), one adult queen (Vindhyavali, kneeling), one elderly ascetic (Shukracharya, seated) and one short youthful brahmachari (Vamana, standing).

## Observations

- Limbs, hands, feet and fingers (pass): Vindhyavali holds the pot with two attached hands. Bali cups two hands. Vamana holds the umbrella shaft and extends an open left palm. Shukracharya raises his right palm and rests his left hand on his knee. Visible feet show toes.
- Attachment and proportions (needs-fix): The poured stream leaves Vindhyavali's spout at about (940,490) and falls to Bali's waist sash at about (935,650), behind his left arm. Bali's cupped hands are at about (650,560), far to the left, yet drip water. The water path from vessel to hands is broken.
- Faces (pass): Bali: crown, moustache, long hair, closed eyes, consistent with S001-S003. Vindhyavali: diadem, bun, downcast gaze. Shukracharya: white beard and bun, stern expression. Vamana: shaven head, namam, serene.
- Duplication and fusion (pass): Four distinct people; no repeated figure.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (needs-fix): The brief requires a readable, connected water-pouring gesture; the stream does not reach the receiving hands. Otherwise the canopy, fire altar and the curse gesture follow the source.

## Defects

- Pour stream lands on Bali's waist sash, not in his cupped hands.

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This version needs a new native candidate before it can be cleared; a fresh full inspection is required for any replacement.

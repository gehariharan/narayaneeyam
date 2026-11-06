# D029 S009 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Mohini plays with a ball as Shiva watches from the garden path
- Selected native PNG: `artifacts/d029/s009/landscape/candidate-v002.png` (v002), SHA-256 `bae8e127c371c8ebc3d922086062be5728fa7caca256d6fe25d7266933d48dd3`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s009/landscape/candidate-v002.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **uncertain**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s009/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s009-v002-nw.png`: region `836x471+0+0`, SHA-256 `bf9032388f52ffcacf69ce8288fc22d7fe6c27b6098476556643b9ed6208b255`
  - `artifacts/d029/review-evidence/managed-v001/s009-v002-ne.png`: region `836x471+836+0`, SHA-256 `8684040394dc956b3559f62fe46420cf4d9baacc27688152a686a87898a8b661`
  - `artifacts/d029/review-evidence/managed-v001/s009-v002-sw.png`: region `836x470+0+471`, SHA-256 `23528110a7dfb0202596dcef21f3c53fa10bb4d9b0ed026bcd0ae8ea6048d207`
  - `artifacts/d029/review-evidence/managed-v001/s009-v002-se.png`: region `836x470+836+471`, SHA-256 `e5b7db1eec16a10e436fceb3a0acc1110a7eeb7057095633cf967cfaf5185b9b`
  - `artifacts/d029/review-evidence/managed-v001/s009-v002-hem-leg-2.5x.png`: region `300x220+560+640` (detail-crop-scaled-2.5x), SHA-256 `1799ee46ee593a7bbc9a6f8bc9df89a5377162fc31694de62b3a858a2a1b7ed4`
  - `artifacts/d029/review-evidence/managed-v001/s009-v002-pallu-border-2.5x.png`: region `260x200+290+560` (detail-crop-scaled-2.5x), SHA-256 `8ed32f2f6195ebff14673b5577b501203a9b50f2652d50b81253013f5d1fad56`

## References opened and hashed

- Source reference: `intake/D029/010.jpg` (SHA-256 `656d5b426120c78f52d11be14dffb6c2eaad250b10cec5a20309c7d3fb2e1b58`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#9` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/mohini/character.json` (SHA-256 `bdadc3517a760c20f6c1445446484c75c9cde074c59ac7e571a6fdaa35a3591c`)
- Contract: `art/bible/characters/shiva-d029/character.json` (SHA-256 `9e87b3de6832e1a62d6d8608635d56af0b72a08a03edcd531529c0b35a22de11`)

## Anatomy basis

Mohini (left, in a playful lunge); Shiva (right, standing at a distance).

## Observations

- Limbs, hands, feet and fingers (pass): Mohini sweeps one arm back and reaches the other toward the single ball; both hands have four fingers and thumb. Her front foot is planted and the trailing foot, with anklet, reaches toward the ball. Shiva joins his palms; two grey-blue bare feet with toes.
- Attachment and proportions (pass): Mohini's arms run continuously from blouse sleeve to bangles; her lunging legs are attached under the sari, and the extended leg is covered by a cream under-layer to the ankle.
- Faces (pass): Mohini: playful smile, eyes on the ball, same flower, ochre crown and halo as S002–S004. Shiva: crescent, tripundra, surprised wide eyes, hoop earrings, matching S008.
- Duplication and fusion (pass): One Mohini, one Shiva, one ball.
- Text and marks (uncertain): The hem border is a regular connected wave-scroll. At the 2.5x crop the pallu border near (300-540, 600-700) breaks into separate units that read like cursive letters ('σ ι α α σ ɑ'). It is unclear whether this reads as ornament or pseudo-writing.
- Scene, identity, composition and style (pass): Matches stanza 9 with the plan's modesty rules: Mohini plays with one ball in a flowering garden in a secured blouse and sari; Shiva watches from a clear distance without touching or pursuing and without the trident. Matte mural palette.

## Defects

- D029-S009-PALLU-LETTERFORM-V002 (uncertain, low severity, medium confidence): Separate pallu-border units read like cursive letterforms at magnification. Proposed repair: Human decision whether the border reads as ornament; otherwise replace it with a connected non-letter scroll.

## Limitations

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This exact version must not be published as inspected; it needs a native correction and a fresh review.

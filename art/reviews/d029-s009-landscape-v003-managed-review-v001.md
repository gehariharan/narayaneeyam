# D029 S009 v003 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Mohini plays with a ball as Shiva watches from the garden path
- Selected native PNG: `artifacts/d029/s009/landscape/candidate-v003.png` (v003), SHA-256 `74f8888b01fbdbecc8f1691a279e95f87a89109cd179c4a74addb3e908bd8361`, 1672 × 941 native (not resized); imported byte-exact from `/home/gehariharan/firstmate-images/data/d029-production/native-six-repairs/s009/landscape/candidate-v003.png` and rehashed. Generation arguments: `artifacts/d029/s009/landscape/submitted-arguments-candidate-v003.json` (SHA-256 `032d5665d2b06c3d491abe7eafb9a3b952140a3af868b42111efde8b980b09d6`)
- Replaces failed selection `artifacts/d029/s009/landscape/candidate-v002.png` (v002, outcome uncertain); that version, its report and its findings are preserved.
- Inspected: full frame and detail views between 2026-11-06T18:24:03Z and 2026-11-06T18:26:30Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-check (`/home/gehariharan/firstmate-images/data/d029-production/native-six-repairs/producer-visual-check-v001.json`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s009/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v002/s009-v003-nw.png`: region `836x470+0+0`, SHA-256 `b9a2f7a9dfc7866ae7566eba0df5c548c9c6a10bb6dd46a6c134dbf413880600`
  - `artifacts/d029/review-evidence/managed-v002/s009-v003-ne.png`: region `836x470+836+0`, SHA-256 `6a9f472f2008144018fb892e047dae574b128cac1e0ae96c9bee9209650f26b9`
  - `artifacts/d029/review-evidence/managed-v002/s009-v003-sw.png`: region `836x471+0+470`, SHA-256 `b5c054fb5178e140c59836d249cb2f8085ce958a7aacb230592043ee5a0910b3`
  - `artifacts/d029/review-evidence/managed-v002/s009-v003-se.png`: region `836x471+836+470`, SHA-256 `ef9c675f0c98bfa501aa53f16f5630a4131e1b2cfc1075cf8469bd1c458dd703`
  - `artifacts/d029/review-evidence/managed-v002/s009-v003-pallu-2.5x.png`: region `260x200+290+560` (detail-crop-scaled-2.5x), SHA-256 `cb69108df81e61bb8910a3e37bccea97b9672fe5b9656ab11dcb89e3eadc5148`
  - `artifacts/d029/review-evidence/managed-v002/s009-v003-hem-2.5x.png`: region `300x220+560+640` (detail-crop-scaled-2.5x), SHA-256 `089b0f92cc8bfbacde12df08f71670b767ad2ad5fa8b620b64bdbf63282af0de`

## References opened and hashed

- Source reference: `intake/D029/010.jpg` (SHA-256 `656d5b426120c78f52d11be14dffb6c2eaad250b10cec5a20309c7d3fb2e1b58`), opened full-frame earlier in this run
- Caption: `intake/D029/photo-captions.txt#9` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/s009/landscape/candidate-v002.png` (SHA-256 `bae8e127c371c8ebc3d922086062be5728fa7caca256d6fe25d7266933d48dd3`), failed prior selection v002 (compared against its recorded findings)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/mohini/character.json` (SHA-256 `bdadc3517a760c20f6c1445446484c75c9cde074c59ac7e571a6fdaa35a3591c`)
- Contract: `art/bible/characters/shiva-d029/character.json` (SHA-256 `9e87b3de6832e1a62d6d8608635d56af0b72a08a03edcd531529c0b35a22de11`)

## Anatomy basis

Mohini (left, lunging toward the ball); Shiva (right, standing at a distance).

## Observations

- Limbs, hands, feet and fingers (pass): Mohini sweeps one arm back and reaches the other toward the single ball, each hand with four fingers and thumb; the front foot is planted and the trailing anklet foot reaches toward the ball. Shiva joins his palms; two grey-blue bare feet with toes.
- Attachment and proportions (pass): Mohini's arms run from blouse sleeve to bangle; the extended leg is covered by a cream under-layer to the anklet.
- Faces (pass): Mohini: playful smile, eyes on the ball, same flower, crown and halo as S002–S004. Shiva: crescent, tripundra, surprised eyes, matching S008.
- Duplication and fusion (pass): One Mohini, one Shiva, one ball.
- Text and marks (pass): At 2.5x the pallu and hem borders are now plain ochre bands without scroll units; no letter-like marks anywhere.
- Scene, identity, composition and style (pass): Matches stanza 9 with the plan's modesty rules: secured blouse and sari, Shiva at a clear distance without touching or pursuing. Matte mural palette.

## Defects

- None observed.

## Limitations

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifests were changed by this review. Human editorial and art approval remain pending.

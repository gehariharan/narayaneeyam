# D029 S003 v004 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: The asuras entrust the nectar vessel to Mohini
- Selected native PNG: `artifacts/d029/s003/landscape/candidate-v004.png` (v004), SHA-256 `1957046ebdbe745de30f60f8c3ad79772006d5658e9b9b679e71c74f592838f9`, 1671 × 941 native (not resized); imported byte-exact from `/home/gehariharan/firstmate-images/data/d029-production/native-six-repairs/s003/landscape/candidate-v004.png` and rehashed. Generation arguments: `artifacts/d029/s003/landscape/submitted-arguments-candidate-v004.json` (SHA-256 `283b3b5c6369a9fa006c2d75a3e884a52102e38de3c4949fd2582d8a69c24669`)
- Replaces failed selection `artifacts/d029/s003/landscape/candidate-v003.png` (v003, outcome needs-fix); that version, its report and its findings are preserved.
- Inspected: full frame and detail views between 2026-11-06T18:24:03Z and 2026-11-06T18:26:30Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-check (`/home/gehariharan/firstmate-images/data/d029-production/native-six-repairs/producer-visual-check-v001.json`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s003/landscape/candidate-v004.png`, the entire 1671x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v002/s003-v004-nw.png`: region `835x470+0+0`, SHA-256 `a7bf27ce670cb129af05e6f2e7263a6d03b44b37cadf721a6dfb381538c1a653`
  - `artifacts/d029/review-evidence/managed-v002/s003-v004-ne.png`: region `836x470+835+0`, SHA-256 `164fc50f8bdbac211efa663a3000f2a766f77bb6d1b45e3cf9af407bf66aed59`
  - `artifacts/d029/review-evidence/managed-v002/s003-v004-sw.png`: region `835x471+0+470`, SHA-256 `c5bc824d7ffc0d92e78f9342c4cb0a48c9ac480e8dc785b82d25f7853e227fc6`
  - `artifacts/d029/review-evidence/managed-v002/s003-v004-se.png`: region `836x471+835+470`, SHA-256 `e47815979284f69186e36d213473bc75cf16ba6f84661c968aa57ad5dfb7efed`
  - `artifacts/d029/review-evidence/managed-v002/s003-v004-pallu-2.5x.png`: region `240x300+1300+400` (detail-crop-scaled-2.5x), SHA-256 `3cfb328014dc3a959503f315065a2b9938676f3bb352f971b34741805608dac6`
  - `artifacts/d029/review-evidence/managed-v002/s003-v004-waiting-asuras.png`: region `600x500+0+120`, SHA-256 `295aadcf093dba9f673e2a64afc304a3931c52389bc65a204c609214cbd3960d`

## References opened and hashed

- Source reference: `intake/D029/003.jpg` (SHA-256 `c9e00b84d74e6d6b49773647bff9e0e36ea045cf3c1a43fb106561a7ef70626c`), opened full-frame earlier in this run
- Caption: `intake/D029/photo-captions.txt#3` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/s003/landscape/candidate-v003.png` (SHA-256 `f0ea8823d0feecd223491cb67272887ab3402ccec5798a555f800db7bd9eb612`), failed prior selection v003 (compared against its recorded findings)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/mohini/character.json` (SHA-256 `bdadc3517a760c20f6c1445446484c75c9cde074c59ac7e571a6fdaa35a3591c`)
- Contract: `art/bible/characters/deva-asura-groups-d029/character.json` (SHA-256 `8190b96b1a2c419028926eaacd26c782fe53ed54a7874e242268864f0a1f6db1`)

## Anatomy basis

Mohini (right); three asuras: a standing bearded asura and a kneeling grey-haired elder waiting with open hands at left, and a standing moustached asura offering the pot.

## Observations

- Limbs, hands, feet and fingers (pass): The offering asura supports the pot from below with both hands, bangles at each wrist; Mohini receives it with two open palms under the base. The bearded asura and the kneeling elder each raise two cupped open hands with four fingers and thumb. Every foot (eight visible) is bare with toes; the elder kneels on one knee with the other foot planted.
- Attachment and proportions (pass): At the waiting-asura crop each pair of open hands runs through bangles and armlets to its own shoulders; the four hands on the pot belong two to the offering asura and two to Mohini, separated at the wrists. Proportions are natural.
- Faces (pass): Mohini: downcast composed eyes, half-smile, bindi, flower and ochre headband, same identity as S002. Bearded asura: dark full beard and topknot; elder: grey curly hair and grey beard; offering asura: thick moustache, topknot, hoop earring. All distinct.
- Duplication and fusion (pass): One Mohini, one continuous lidded vessel, three distinct asuras; no clones or fused bodies.
- Text and marks (pass): At 2.5x the pallu now ends in a plain ochre band; the cream cloth carries only dashed stripe lines, with no glyph-like units. The dhotis carry the same dashed stripes. No text, signature, watermark or border.
- Scene, identity, composition and style (pass): Matches stanza 3 and the plan: an asura carefully hands the single vessel to Mohini, who receives it with composed attention while the others wait with open hands. Humanlike asuras, modest opaque maroon/cream sari, matte ochre/maroon mural palette. The frame is 1671x941 native, which still reads as 16:9.

## Defects

- None observed.

## Limitations

- This native repair is recomposed relative to the failed v003 (the elder now kneels); it was reviewed as a new image, not as a patch.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifests were changed by this review. Human editorial and art approval remain pending.

# D029 S003 v003 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: The asuras entrust the nectar vessel to Mohini
- Selected native PNG: `artifacts/d029/s003/landscape/candidate-v003.png` (v003), SHA-256 `f0ea8823d0feecd223491cb67272887ab3402ccec5798a555f800db7bd9eb612`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s003/landscape/candidate-v003.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s003/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s003-v003-nw.png`: region `836x471+0+0`, SHA-256 `7219dcefb2a0241103c8db9ef886ad4ff661451a8ef4206918aa965f0a38d4a4`
  - `artifacts/d029/review-evidence/managed-v001/s003-v003-ne.png`: region `836x471+836+0`, SHA-256 `bf1dcb478d43a1277ec15e3286128d90f0c9988b0f764d126b780f50f737b96e`
  - `artifacts/d029/review-evidence/managed-v001/s003-v003-sw.png`: region `836x470+0+471`, SHA-256 `16c2497f7441e678b67a74ee1701c97466b633060ebd03d79f81bb3a5bacc15c`
  - `artifacts/d029/review-evidence/managed-v001/s003-v003-se.png`: region `836x470+836+471`, SHA-256 `d3fdc2589e383cac0ba697413cacae7dce663982a410b12932cd53cd5f4fa3a5`
  - `artifacts/d029/review-evidence/managed-v001/s003-v003-transfer-2x.png`: region `340x200+840+300` (detail-crop-scaled-2x), SHA-256 `e8bd907be161404f4221952db3a511526e2bc071ee644518c42ae432c92bee39`
  - `artifacts/d029/review-evidence/managed-v001/s003-v003-pallu-border-3x.png`: region `160x240+1380+580` (detail-crop-scaled-3x), SHA-256 `a57f37b17fdc049cd49ac233274ae19af2968391803e52d8d49c3c7d52e7c33c`

## References opened and hashed

- Source reference: `intake/D029/003.jpg` (SHA-256 `c9e00b84d74e6d6b49773647bff9e0e36ea045cf3c1a43fb106561a7ef70626c`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#3` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/mohini/character.json` (SHA-256 `bdadc3517a760c20f6c1445446484c75c9cde074c59ac7e571a6fdaa35a3591c`)
- Contract: `art/bible/characters/deva-asura-groups-d029/character.json` (SHA-256 `8190b96b1a2c419028926eaacd26c782fe53ed54a7874e242268864f0a1f6db1`)

## Anatomy basis

Mohini (right); three asuras: one standing offering the pot, one standing bearded with open hands, one kneeling grey-haired elder with open hands.

## Observations

- Limbs, hands, feet and fingers (pass): At the 2x transfer crop the offering asura's near hand cups the vessel with four fingers and thumb; his far hand is hidden behind the pot. Mohini's near hand supports the base palm-up with fingers visible; her far hand is behind the pot. The two waiting asuras each show open upturned palms. All seven visible feet are bare with toes.
- Attachment and proportions (pass): Each hand on the vessel connects through stacked bangles to the correct forearm; the kneeling elder's knee and foot are coherent. Proportions are natural.
- Faces (pass): Mohini: composed half-smile, bindi, flower, ochre headband. Offering asura: moustache, topknot, hoop earring. Standing asura: full dark beard, topknot. Kneeling asura: grey curly hair and grey beard. All distinct.
- Duplication and fusion (pass): One Mohini, one continuous vessel, three distinct asuras; no clones or fused bodies.
- Text and marks (needs-fix): At the 3x crop of Mohini's cream pallu border near (1400-1460, 600-700) the border cells hold isolated, irregular letter-like strokes reading roughly as 'ı(ı', 'ıSı' and 'ıTLı' rather than a repeating ornament. This is pseudo-writing, which the series 'no readable text' rule excludes.
- Scene, identity, composition and style (pass): Matches stanza 3: an asura entrusts the single vessel to Mohini who receives it with composed attention; the others wait with open hands. Humanlike, dignified asuras replace the source's grotesque features as the plan requires. Mohini's modest maroon/cream dress matches S002. Matte mural palette.

## Defects

- D029-S003-PALLU-PSEUDO-TEXT-V003 (needs-fix, medium severity, high confidence): Mohini's pallu border near the lower right carries isolated letter-like glyph strokes (pseudo-writing). Proposed repair: Native edit or regeneration that replaces the pallu border marks with a repeating non-letter ornament.

## Limitations

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This exact version must not be published as inspected; it needs a native correction and a fresh review.

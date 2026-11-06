# D029 S001 v003 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Dhanvantari appears with nectar as the groups divide
- Selected native PNG: `artifacts/d029/s001/landscape/candidate-v003.png` (v003), SHA-256 `17019a810162a92684b339cc1d062321ef90c15b82fe2ea8794be1b3692aa930`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s001/landscape/candidate-v003.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s001/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s001-v003-nw.png`: region `836x471+0+0`, SHA-256 `77c0fc604b2bccf7ecd84889d934eaeb4e1041e519521d15ea6d49e2a8cb0069`
  - `artifacts/d029/review-evidence/managed-v001/s001-v003-ne.png`: region `836x471+836+0`, SHA-256 `8890e6be35d1dc725a2bd8ce29c708cddd99bb7f29523cf4271ae0eccfc79af3`
  - `artifacts/d029/review-evidence/managed-v001/s001-v003-sw.png`: region `836x470+0+471`, SHA-256 `f48f097d36f1103564526a27fdc7a92c40d9308003a886c64d3a1b2d80ae3357`
  - `artifacts/d029/review-evidence/managed-v001/s001-v003-se.png`: region `836x470+836+471`, SHA-256 `fc3f7be6f7d787b31c4b6ab80a7e217a41a0d56cd43ff9281396ca2f0699f63c`
  - `artifacts/d029/review-evidence/managed-v001/s001-v003-asura-group.png`: region `480x420+0+230`, SHA-256 `df99b1445e8c08402747b7cfc1e9a5652e60c7bf633aad0ec2da052e38063cae`
  - `artifacts/d029/review-evidence/managed-v001/s001-v003-churn.png`: region `500x320+820+0`, SHA-256 `f750b66d902031c97c40dfbd7696a67c772c4585040d6f6de4105eca8a6cdbb6`

## References opened and hashed

- Source reference: `intake/D029/001.jpg` (SHA-256 `f34918237b288a295f8e7067a25505a3108d3bfa2d3925c7007a5373f460420e`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#1` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/dhanvantari/character.json` (SHA-256 `3557d434fe4cdf43000a3ba3605fbb23f6a977adbbfec21a5a59c428e7b7f951`)
- Contract: `art/bible/characters/deva-asura-groups-d029/character.json` (SHA-256 `8190b96b1a2c419028926eaacd26c782fe53ed54a7874e242268864f0a1f6db1`)

## Anatomy basis

Dhanvantari (centre); three asuras reaching from the left; two asuras disputing waist-deep in the background; three seated devas at right; about nine tiny distant figures pulling the Vasuki rope around Mandara.

## Observations

- Limbs, hands, feet and fingers (pass): Dhanvantari holds the single pot from below in his right hand and extends his open left hand toward the devas; five fingers each, two blue bare feet with toes. The front bearded asura reaches up with one hand onto the pot; the bald asura and the curly-haired asura behind him each show one open raised hand with fingers. The three devas join palms in namaskara; feet of the reaching asuras show toes on the sand.
- Attachment and proportions (pass): At the asura-group detail crop every visible hand runs back through a wrist bangle to a forearm and shoulder of a specific asura; the hand on the pot belongs to the front bearded asura's arm. Dhanvantari's two arms are continuous from armlet to wrist. The seated devas' arms and folded legs are proportionate.
- Faces (pass): Dhanvantari: serene blue face, closed eyes, Vaishnava namam, ochre crown, long dark hair. Asuras: bald with moustache, curly-haired with moustache, curly-bearded profile; background pair: topknot bearded man pointing a finger and a moustached man with open palms. Devas: two crowned and one with a headband, distinct profiles.
- Duplication and fusion (pass): One Dhanvantari, one pot, one disc-free scene; no repeated main figure. The tiny rope-pulling figures in the churning motif are schematic silhouettes without faces; they are a background source motif, not a cloned crowd cluster.
- Text and marks (pass): No text, pseudo-writing, signature, watermark or outer border; waves, lotuses and sand are plain ornament.
- Scene, identity, composition and style (pass): Matches stanza 1: Dhanvantari stands at the Milky Ocean's edge with one pot; the asura group reaches for it without violence; he turns an open calming hand to a separate deva group; two asuras quarrel in the background. Mandara and Vasuki echo reference #1. Two-armed, no peacock feather, blue skin, cream/maroon drapery per the dhanvantari contract. Flat matte ochre/maroon/muted-blue mural treatment as in the D001 anchors.

## Defects

- None observed.

## Limitations

- The background rope-pullers are about nine near-identical tiny silhouettes; they carry no faces at native resolution and come from the churning motif in reference #1. A stricter reading of the 'no crowd clones' rule could ask for them to be varied or removed.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

# D029 S002 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Mohini's arrival stills the asuras' quarrel
- Selected native PNG: `artifacts/d029/s002/landscape/candidate-v002.png` (v002), SHA-256 `5f0d185de8348b81979f6c76080cd832f71225baadd89a6a7230573dd06eaa80`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s002/landscape/candidate-v002.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s002/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s002-v002-nw.png`: region `836x471+0+0`, SHA-256 `e8f4323e67935586b1b5d6b2f78d6700c2ff6aef0ebc82bf18d93a84553a7766`
  - `artifacts/d029/review-evidence/managed-v001/s002-v002-ne.png`: region `836x471+836+0`, SHA-256 `a45500e8452a3d6f05273d996bece7ffec27938b6c142fba2d8266ac4cf09060`
  - `artifacts/d029/review-evidence/managed-v001/s002-v002-sw.png`: region `836x470+0+471`, SHA-256 `9abdbdd50304c34ae67e64cdfa064fce4cf1f262edda47e7e8c84dfe3bb8c6c2`
  - `artifacts/d029/review-evidence/managed-v001/s002-v002-se.png`: region `836x470+836+471`, SHA-256 `c9ebcffa2573d2655122088811d893b1726dc4cac761717e72a39f917ce60c07`
  - `artifacts/d029/review-evidence/managed-v001/s002-v002-left-group.png`: region `560x520+0+220`, SHA-256 `1251b7990b0dba92485d6f33c82851802886dc7731aa95d42d5f4fe67771f70c`
  - `artifacts/d029/review-evidence/managed-v001/s002-v002-right-group.png`: region `520x500+1152+260`, SHA-256 `f2c3b5572f628e9a2ddcba8fc1136580428d590e3415bd7d62517e2ce280141f`
  - `artifacts/d029/review-evidence/managed-v001/s002-v002-sari-borders-2x.png`: region `320x320+640+580` (detail-crop-scaled-2x), SHA-256 `3b89eb7b4e0b33cb362ebd4bb28413629c17193343562faf651093dc9aab4a09`

## References opened and hashed

- Source reference: `intake/D029/002.jpg` (SHA-256 `94ee910a12060076b833cd3561a90a644c3ccaae24a58824c7d632f9babfb674`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#2` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/mohini/character.json` (SHA-256 `bdadc3517a760c20f6c1445446484c75c9cde074c59ac7e571a6fdaa35a3591c`)
- Contract: `art/bible/characters/deva-asura-groups-d029/character.json` (SHA-256 `8190b96b1a2c419028926eaacd26c782fe53ed54a7874e242268864f0a1f6db1`)

## Anatomy basis

Mohini (centre); six seated adult asuras, three at left and three at right.

## Observations

- Limbs, hands, feet and fingers (pass): Mohini's two hands are clasped at her waist with fingers visible; two bare feet with toes beneath the hem. Left group: the two rear asuras each rest one hand on the ground; the front-left asura rests his right hand on his raised knee and his bare foot shows toes. Right group: the bearded asura's hand rests on the ground behind; the front-right asura rests one hand on his knee and the other on the ground; the rear-right asura rests a hand on the ground.
- Attachment and proportions (pass): In the group detail crops each hand traces back through bangle and armlet to one asura's shoulder; no hand floats or is shared. Seated legs fold naturally under dhotis. Mohini's figure is proportionate.
- Faces (pass): Mohini: gentle downcast eyes, small smile, bindi, flower and ochre crown, deep brown hair. Asuras look up at her with calm faces: left — three moustached topknot faces in different head turns; right — a full-bearded asura, a moustached topknot asura and a moustached asura with a bun.
- Duplication and fusion (pass): One Mohini, one vessel. The asuras share a mural face type but differ by beard, hair, sash and pose; no copied face or fused bodies.
- Text and marks (pass): At the 2x border crop Mohini's hem and pallu borders carry a regular circle-in-cell motif, not letterforms. No text, signature, watermark or border.
- Scene, identity, composition and style (pass): Matches stanza 2: the quarrel has stopped and both asura groups have lowered their gestures and turned to Mohini; the single vessel stands apart on the ground. Mohini wears an opaque maroon blouse and cream/maroon sari with no exposed torso, per the mohini contract. Asuras wear maroon/ochre garments without horns, per the group contract. Matte mural palette.

## Defects

- None observed.

## Limitations

- The six asuras share one mural face type; differentiation rests on beard, hair, sash and pose.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

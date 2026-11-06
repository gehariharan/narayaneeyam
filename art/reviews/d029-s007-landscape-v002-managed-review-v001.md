# D029 S007 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Narada's counsel brings the devas-asuras battle to a halt
- Selected native PNG: `artifacts/d029/s007/landscape/candidate-v002.png` (v002), SHA-256 `d012a2b1ab2cb6d610dd4eb56f0f820e7b36f93b6f975271dfc8d5d4a4b1183b`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s007/landscape/candidate-v002.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s007/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s007-v002-nw.png`: region `836x471+0+0`, SHA-256 `4deaddf73879fad6d952588f7ba3fe7b4e3105ad268c1f884475ef0be85081a4`
  - `artifacts/d029/review-evidence/managed-v001/s007-v002-ne.png`: region `836x471+836+0`, SHA-256 `6a5ecc9f72165875741a918c80e58605b380e1c042ec04ddc30c5228822543ed`
  - `artifacts/d029/review-evidence/managed-v001/s007-v002-sw.png`: region `836x470+0+471`, SHA-256 `b267482c3a3ed30e006431741e3c3584b283314104c0500698d01c7e1a794aa4`
  - `artifacts/d029/review-evidence/managed-v001/s007-v002-se.png`: region `836x470+836+471`, SHA-256 `ef6f627880694bb808b41a34036527da068565f085c79bd1b83f3c714ffd78c2`
  - `artifacts/d029/review-evidence/managed-v001/s007-v002-deva-faces-2x.png`: region `300x300+0+160` (detail-crop-scaled-2x), SHA-256 `fbc09239c8d66f9b77478bbc5df15bdbcad2b4af627976ad88b55134541645e3`
  - `artifacts/d029/review-evidence/managed-v001/s007-v002-asura-faces-2x.png`: region `340x320+1332+170` (detail-crop-scaled-2x), SHA-256 `51fcf435b2b82374c1e4873e30fb88792491aa78e1c34f9b065d8bcd5a29b132`

## References opened and hashed

- Source reference: `intake/D029/008.jpg` (SHA-256 `c38b1cf71264ddf70e5112405f40cf220f45552bfcddc0fc08c1fb717ec6e2c3`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#7` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/guruvayurappan-approved-identity.png` (SHA-256 `d93b3d0e53e52bd05bcc1a51b33073816592a3c83e19c14c65b50ec7cf232b4b`), Narayana identity anchor (opened full-frame in this session)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)
- Contract: `art/bible/characters/indra-d029/character.json` (SHA-256 `5dac845184a29117cc75742993e67283c3ec1c3991ba79f35ad26c84163102b9`)
- Contract: `art/bible/characters/narada/character.json` (SHA-256 `841aa373baad9230944390a5019523cea424d23fd3f96ef81b149e7aa4f98806`)
- Contract: `art/bible/characters/deva-asura-groups-d029/character.json` (SHA-256 `8190b96b1a2c419028926eaacd26c782fe53ed54a7874e242268864f0a1f6db1`)

## Anatomy basis

Indra (left centre), Narada (centre), two-armed Narayana (right centre); five crowned devas at left; six asuras at right.

## Observations

- Limbs, hands, feet and fingers (pass): Indra holds a lowered vajra in one hand, the other at his side. Narada raises one calm speaking palm and extends the other hand open; a veena hangs at his side. Narayana clasps his hands at his waist. Devas and asuras hold spears, swords and shields lowered or join palms; all feet are bare with toes.
- Attachment and proportions (pass): All arms connect through armlets and bangles to their owners; weapons are held, not floating, and do not touch other figures.
- Faces (pass): Indra: moustache, tall crown, distinct from Narada's grey beard and topknot and from Narayana's blue face with namam and peacock feather.
- Duplication and fusion (needs-fix): At the 2x crops the three crowned devas behind Indra share the same clean-shaven face, same crown, same earring and same profile angle, and the two front asuras at right share the same handlebar-moustache face, earring and turn, differing only by sash colour. These are cloned faces, which the plan's avoid list and the deva-asura-groups contract ('no clones') exclude.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches stanza 7: Narada stands between the sides with a raised speaking hand; Indra and Narayana are distinct, each fronting a group; weapons are lowered and the fight has stopped; a small pale foam motif sits on the ground with no injury shown. Narada's cream/ochre ascetic dress and veena match the narada contract; Indra's ochre crown and cream/maroon garments match indra-d029.

## Defects

- D029-S007-CLONED-FACES-V002 (needs-fix, medium severity, high confidence): Three crowned devas behind Indra and the two front asuras repeat the same face, ornament and head angle. Proposed repair: Native edit or regeneration giving each deva and asura an individual face (age, facial hair, head angle).

## Limitations

- Narayana is two-armed here while S005, S006 and S010 show four arms; both are iconographically valid but chapter continuity differs.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This exact version must not be published as inspected; it needs a native correction and a fresh review.

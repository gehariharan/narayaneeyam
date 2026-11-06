# D029 S004 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Mohini distributes nectar to the devas while the asuras watch
- Selected native PNG: `artifacts/d029/s004/landscape/candidate-v002.png` (v002), SHA-256 `08b1023f1567723b7f68f0e6f7948a793dcfbceba0d1a3758ec576606d8cfde5`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s004/landscape/candidate-v002.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s004/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s004-v002-nw.png`: region `836x471+0+0`, SHA-256 `faa53366b2147228ad9b036618b17df345ef1acc7e1f59e9308580f808e146e4`
  - `artifacts/d029/review-evidence/managed-v001/s004-v002-ne.png`: region `836x471+836+0`, SHA-256 `bc2aa259c2f261d4b3eb3f529aa1b9030fac03347d40d71184ee26c6a01573de`
  - `artifacts/d029/review-evidence/managed-v001/s004-v002-sw.png`: region `836x470+0+471`, SHA-256 `c61f241c7011b87ab8386db3c796868091cff91d77827b767b1733e7fc3207f3`
  - `artifacts/d029/review-evidence/managed-v001/s004-v002-se.png`: region `836x470+836+471`, SHA-256 `04358362a62b4301023ce5d5d78fb7c975ca480046997bad07e2ebfeab54da63`
  - `artifacts/d029/review-evidence/managed-v001/s004-v002-blue-deva-2x.png`: region `300x260+370+280` (detail-crop-scaled-2x), SHA-256 `4678c9131cf161a986352a0d95c925266c6be76450fcdef537d86d425cc75d8b`
  - `artifacts/d029/review-evidence/managed-v001/s004-v002-sari-borders-2.5x.png`: region `260x300+800+540` (detail-crop-scaled-2.5x), SHA-256 `e1738e016669de59182dcd45e8955b6e9c009cc50b476292f4a7d6b521fe234e`

## References opened and hashed

- Source reference: `intake/D029/005.jpg` (SHA-256 `533b1d8e91288eff18723026a2cb43173733dffb5d9118288b775b56f6570541`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#4` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/mohini/character.json` (SHA-256 `bdadc3517a760c20f6c1445446484c75c9cde074c59ac7e571a6fdaa35a3591c`)
- Contract: `art/bible/characters/deva-asura-groups-d029/character.json` (SHA-256 `8190b96b1a2c419028926eaacd26c782fe53ed54a7874e242268864f0a1f6db1`)

## Anatomy basis

Mohini (centre); four seated devas at left (one blue-skinned, crowned, receiving the bowl); four seated asuras at right.

## Observations

- Limbs, hands, feet and fingers (pass): Mohini holds the small bowl with both hands; the receiving deva cups it from below with an open palm. Seated devas rest hands on knees; the front asuras rest both hands on their knees and show bare feet with toes; rear asuras each show one hand.
- Attachment and proportions (pass): Every visible hand traces back through a bangle and armlet to its own figure; seated legs fold under dhotis naturally.
- Faces (pass): Mohini matches S002/S003 (flower, ochre crown, bindi, gentle smile). Devas: a white-haired moustached elder, a moustached deva, a clean-shaven deva and the blue receiving deva. Asuras: a full-bearded asura and three moustached topknot asuras in different turns.
- Duplication and fusion (pass): One Mohini, one central vessel, one bowl; no fused or repeated bodies.
- Text and marks (needs-fix): At the 2.5x border crop the cream pallu border falling at Mohini's right (about (980-1040, 560-660)) and the pallu edge at her left carry irregular, isolated letter-like squiggles rather than the regular circle motif used on her hem. This reads as pseudo-script.
- Scene, identity, composition and style (needs-fix): The deva receiving the nectar is painted with the deep blue skin the series palette reserves for the established deity skin family, plus a crown and Vaishnava-style forehead mark, so he reads as a second Narayana/Krishna beside Mohini (who is Narayana's form). The deva-asura-groups contract describes devas as ordinary adults distinguished by garments, not deity skin. Otherwise the stanza is met: separate parallel seated rows, Mohini serving one bowl from the single central vessel, the asura row watching calmly; Mohini's modest dress and the matte palette are consistent.

## Defects

- D029-S004-PALLU-PSEUDO-TEXT-V002 (needs-fix, medium severity, high confidence): Mohini's pallu borders carry irregular letter-like squiggles (pseudo-script). Proposed repair: Replace the pallu border marks with a regular non-letter ornament.
- D029-S004-BLUE-DEVA-IDENTITY-V002 (needs-fix, medium severity, medium confidence): The receiving deva has reserved deep-blue deity skin and reads as a second Narayana/Krishna. Proposed repair: Repaint the receiving deva with an ordinary warm deva skin tone consistent with the other devas.

## Limitations

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This exact version must not be published as inspected; it needs a native correction and a fresh review.

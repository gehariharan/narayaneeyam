# D029 S005 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Narayana reveals Rahu after he drinks nectar among the devas
- Selected native PNG: `artifacts/d029/s005/landscape/candidate-v002.png` (v002), SHA-256 `b6b6a74af38bfa392cc78cd33fa59fe06ead63d3d6474c9b15789a49e6773949`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s005/landscape/candidate-v002.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s005/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s005-v002-nw.png`: region `836x471+0+0`, SHA-256 `86d04dfc2ad44c0769d5bb39bb73a6dbd640c3b571a2651d5be2d297c5d342e4`
  - `artifacts/d029/review-evidence/managed-v001/s005-v002-ne.png`: region `836x471+836+0`, SHA-256 `ced5e45e37f228bd2a40cb4886a83e3fd2283218f3b5a30313c2f84918b0148e`
  - `artifacts/d029/review-evidence/managed-v001/s005-v002-sw.png`: region `836x470+0+471`, SHA-256 `4f5d9f04c1e0ca600d301b865d62251ac8be14c7b1226d6ffd65a3390ddddad9`
  - `artifacts/d029/review-evidence/managed-v001/s005-v002-se.png`: region `836x470+836+471`, SHA-256 `ad0251790b08c8275d074ea1be778e43c08d5cee0239b4b2314f095882d2fda7`
  - `artifacts/d029/review-evidence/managed-v001/s005-v002-narayana-arms.png`: region `560x460+400+200`, SHA-256 `7c1859e8483e6ed5bdadca9e6f0f43b8bc52d524a9a189cfd25f76ee94d1214e`
  - `artifacts/d029/review-evidence/managed-v001/s005-v002-left-arms-2x.png`: region `260x360+390+250` (detail-crop-scaled-2x), SHA-256 `3deaaf3faf3e1f2e58db667c397d211439899926b89b75dd0e4e7bddae8c3d7d`
  - `artifacts/d029/review-evidence/managed-v001/s005-v002-conch-arm-root-2.5x.png`: region `200x300+360+330` (detail-crop-scaled-2.5x), SHA-256 `497f310567fc21bcf7b35c0a48c231f1f6154df90a7d0b0971398ff2d22bc4ed`
  - `artifacts/d029/review-evidence/managed-v001/s005-v002-right-arms-2x.png`: region `260x300+780+360` (detail-crop-scaled-2x), SHA-256 `bb789e3e91052dd63d9d62e02daf38af1dc1483f39156bdf1a5ca3a66d1b5f6e`

## References opened and hashed

- Source reference: `intake/D029/006.jpg` (SHA-256 `efe94119387009051e05b1eb2e7bb0dd44edda52d5ff6c564131cfa6c129dc9c`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#5` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/guruvayurappan-approved-identity.png` (SHA-256 `d93b3d0e53e52bd05bcc1a51b33073816592a3c83e19c14c65b50ec7cf232b4b`), Narayana identity anchor (opened full-frame in this session)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)
- Contract: `art/bible/characters/deva-asura-groups-d029/character.json` (SHA-256 `8190b96b1a2c419028926eaacd26c782fe53ed54a7874e242268864f0a1f6db1`)

## Anatomy basis

Four-armed Narayana (centre, seated); five devas at left; Rahu (red turban, holding a cup) and one crowned deva at right.

## Observations

- Limbs, hands, feet and fingers (pass): Narayana: conch in the upper left hand, abhaya palm, Sudarshana balanced on the upper right fingertip, lower right hand open palm-up; each hand has four fingers and a thumb. The front-left deva points with his index finger and rests the other hand in his lap. Rahu holds a small cup in one hand and rests the other on his knee; the deva behind him raises an open palm.
- Attachment and proportions (needs-fix): At the 2.5x crop of Narayana's left side, the conch forearm runs down from its bangle and ends merged into the elbow of the front abhaya arm; there is no separate upper arm or shoulder root for the conch arm. One upper arm therefore forks into two forearms. The right-side pair is separately rooted.
- Faces (pass): Narayana: deep blue, serene closed eyes, Vaishnava namam, peacock-feather crown, halo, per the guruvayurappan contract. Devas: crowned, moustached and clean-shaven variants. Rahu: red turban, moustache, wary upward look, set apart from the crowned devas.
- Duplication and fusion (pass): One Narayana, one disc, one Rahu, one cup; no clones.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches stanza 5 non-graphically: Narayana's own blue form, distinct from Mohini, raises the luminous disc toward Rahu, who sits among devas with the cup; the pointing deva turns the eye to Rahu. No blood or severing. The disc is held aloft at head height rather than at Rahu's shoulder line, which still reads as the symbolic halt. Matte mural palette with halo.

## Defects

- D029-S005-NARAYANA-ARM-FORK-V002 (needs-fix, medium severity, high confidence): Narayana's rear left (conch) forearm terminates into the front abhaya arm's elbow, so one upper arm forks into two forearms. Proposed repair: Native edit that roots the conch arm at its own shoulder behind the front arm.

## Limitations

- The approved Guruvayurappan identity sheet is two-armed; four arms are iconographically valid for Narayana's own form and match S006 and S010, but S007 shows him two-armed.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This exact version must not be published as inspected; it needs a native correction and a fresh review.

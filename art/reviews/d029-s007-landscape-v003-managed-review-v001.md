# D029 S007 v003 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Narada's counsel brings the devas-asuras battle to a halt
- Selected native PNG: `artifacts/d029/s007/landscape/candidate-v003.png` (v003), SHA-256 `7e1e855db0a61d40fe40e50f0c068e0a6dbf97ec4463cb032107681f2caef338`, 1672 × 941 native (not resized); imported byte-exact from `/home/gehariharan/firstmate-images/data/d029-production/native-six-repairs/s007/landscape/candidate-v003.png` and rehashed. Generation arguments: `artifacts/d029/s007/landscape/submitted-arguments-candidate-v003.json` (SHA-256 `8f5e2e712c8badaeb191aa599d84ea8329b34fa7dbe0d5019620c7f4a092e54e`)
- Replaces failed selection `artifacts/d029/s007/landscape/candidate-v002.png` (v002, outcome needs-fix); that version, its report and its findings are preserved.
- Inspected: full frame and detail views between 2026-11-06T18:24:03Z and 2026-11-06T18:26:30Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-check (`/home/gehariharan/firstmate-images/data/d029-production/native-six-repairs/producer-visual-check-v001.json`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s007/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v002/s007-v003-nw.png`: region `836x470+0+0`, SHA-256 `13cba033c41355c89ec90cf660d39aabd72281214c438ee9ab2bd3b11cc626e4`
  - `artifacts/d029/review-evidence/managed-v002/s007-v003-ne.png`: region `836x470+836+0`, SHA-256 `4dbb344f5fbf6b72098d29feb5ff556a1b90cf58b9817668c1a9a3a977166c0f`
  - `artifacts/d029/review-evidence/managed-v002/s007-v003-sw.png`: region `836x471+0+470`, SHA-256 `108987d4474e3c6239824410d3ee394458b346a89862811f2e826b2717460cc3`
  - `artifacts/d029/review-evidence/managed-v002/s007-v003-se.png`: region `836x471+836+470`, SHA-256 `d6e2cc4ad865293db7740d5037c698e3cec99918832ef9366fcb105bc60773e2`
  - `artifacts/d029/review-evidence/managed-v002/s007-v003-deva-faces-2x.png`: region `320x320+0+150` (detail-crop-scaled-2x), SHA-256 `2c84cf67020377a3bcd16f52e793a8d995bf203112d8eecae2fe8662ee815156`
  - `artifacts/d029/review-evidence/managed-v002/s007-v003-asura-faces-2x.png`: region `360x320+1312+160` (detail-crop-scaled-2x), SHA-256 `06a4aa6ee64e395e5c326c903e81683884e088b1fa2d08d381c1e17a8d3f9636`
  - `artifacts/d029/review-evidence/managed-v002/s007-v003-asura-sash-3x.png`: region `200x260+1330+440` (detail-crop-scaled-3x), SHA-256 `99e6cbbdbcdfed6435df8f96d354a1925fd3a2b00c42474a6145a4a4ae94dab4`

## References opened and hashed

- Source reference: `intake/D029/008.jpg` (SHA-256 `c38b1cf71264ddf70e5112405f40cf220f45552bfcddc0fc08c1fb717ec6e2c3`), opened full-frame earlier in this run
- Caption: `intake/D029/photo-captions.txt#7` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/guruvayurappan-approved-identity.png` (SHA-256 `d93b3d0e53e52bd05bcc1a51b33073816592a3c83e19c14c65b50ec7cf232b4b`), Narayana identity anchor (opened full-frame earlier in this run)
- Reference image: `artifacts/d029/s007/landscape/candidate-v002.png` (SHA-256 `d012a2b1ab2cb6d610dd4eb56f0f820e7b36f93b6f975271dfc8d5d4a4b1183b`), failed prior selection v002 (compared against its recorded findings)
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

- Limbs, hands, feet and fingers (pass): Indra holds a lowered vajra; Narada raises a speaking palm and extends the other hand; Narayana clasps his hands at the waist. Devas and asuras hold lowered spears, swords and shields or join palms; feet are bare with toes.
- Attachment and proportions (pass): All arms connect through armlets and bangles to their owners; weapons are held and do not touch other figures.
- Faces (pass): At 2x the devas are now individual: a white-bearded elder, a young smiling clean-shaven deva and a moustached deva. Asuras: a long-bearded asura with joined palms, a handlebar-moustached asura, a clean-shaven youth and others behind, with different ages and hair.
- Duplication and fusion (pass): The previous cloned deva and asura faces are resolved; one Indra, one Narada, one Narayana.
- Text and marks (needs-fix): At the 3x crop of the bearded asura's green sash (about x 1330-1530, y 440-700) the ochre border carries a run of separate letter-like glyphs reading roughly 'Oewl' and blocky 'IIIIGIOIIE' units on the lower hem. This is pseudo-writing, which the series 'no readable text' rule and the plan's avoid list exclude.
- Scene, identity, composition and style (pass): Matches stanza 7: Narada between the sides with a raised speaking hand; Indra and Narayana distinct, each fronting a group; weapons lowered; a small pale foam motif on the ground, no injury.

## Defects

- D029-S007-ASURA-SASH-PSEUDO-TEXT-V003 (needs-fix, medium severity, high confidence): The bearded asura's green sash border carries letter-like pseudo-writing. Proposed repair: Native edit replacing the sash and hem border marks with plain or regular non-letter ornament, keeping the corrected individual faces.

## Limitations

- The face repair succeeded; only the new sash border defect blocks this version.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifests were changed by this review. Human editorial and art approval remain pending. This exact version must not be published as inspected; it needs a further native correction and a fresh review.

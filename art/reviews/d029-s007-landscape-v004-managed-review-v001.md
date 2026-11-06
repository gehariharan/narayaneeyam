# D029 S007 v004 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Narada's counsel brings the devas-asuras battle to a halt
- Selected native PNG: `artifacts/d029/s007/landscape/candidate-v004.png` (v004), SHA-256 `eefa23394492a52dab66e161bc792c10f06bb1c99cfb825cd7af9a4892084a63`, 1672 × 941, 2814383 bytes; imported byte-exact from `/home/gehariharan/firstmate-images/data/d029-production/native-s007-sash-repair/s007/landscape/candidate-v004.png` and rehashed. Generation arguments: `artifacts/d029/s007/landscape/submitted-arguments-candidate-v004.json` (SHA-256 `9e82c7b0f9b4ddd1fab218e25fbb6e189f6490e911f43cbee5dff51130bc3652`)
- Replaces failed selection `artifacts/d029/s007/landscape/candidate-v003.png` (v003, outcome needs-fix, finding D029-S007-ASURA-SASH-PSEUDO-TEXT-V003); that version, its report and its findings are preserved.
- Inspected: full frame and detail views between 2026-11-06T18:44:33Z and 2026-11-06T18:45:20Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer check (`/home/gehariharan/firstmate-images/data/d029-production/native-s007-sash-repair/producer-check-v001.json`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s007/landscape/candidate-v004.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v003/s007-v004-nw.png`: region `836x471+0+0`, SHA-256 `586fc6e11ccb14dc6f3f80acfc42a507d50e4f4d4872c38292e31c521fff0d7b`
  - `artifacts/d029/review-evidence/managed-v003/s007-v004-ne.png`: region `836x471+836+0`, SHA-256 `db7535e6749d9e1e433bb53bd778ae6c6bdba689d4f8b3c36a75f7d7a832b507`
  - `artifacts/d029/review-evidence/managed-v003/s007-v004-sw.png`: region `836x470+0+471`, SHA-256 `48445df7dec886c2ea6693255d63e4231abafcce47bb80617ee0ed73ce8eef41`
  - `artifacts/d029/review-evidence/managed-v003/s007-v004-se.png`: region `836x470+836+471`, SHA-256 `bb36534a4de8e9bc467b44bcd0f5522810696e6e8b032c07b4bed02142ec30ba`
  - `artifacts/d029/review-evidence/managed-v003/s007-v004-asura-sash-3x.png`: region `200x260+1330+440` (detail-crop-scaled-3x), SHA-256 `77105bdf74e2144c61a8ced3032776863d050cc93164f08784c5d52d957be4fd`
  - `artifacts/d029/review-evidence/managed-v003/s007-v004-asura-faces-2x.png`: region `360x320+1312+160` (detail-crop-scaled-2x), SHA-256 `014b703e53cdd299bd6ff7ee5c159bad187563ee19fce291634cdd798c336b30`
  - `artifacts/d029/review-evidence/managed-v003/s007-v004-deva-faces-2x.png`: region `320x320+0+150` (detail-crop-scaled-2x), SHA-256 `a92a6e174566c922bcebe45ecb2ce639803a929a841b3076e6862f1b7f2d9a7c`
  - `artifacts/d029/review-evidence/managed-v003/s007-v004-right-hems-2x.png`: region `342x260+1330+560` (detail-crop-scaled-2x), SHA-256 `2e254d4cb9a1c03f64dc626e5c6da5990f5db6b54d9b1b99b8f872ed479808db`

## References opened and hashed

- Source reference: `intake/D029/008.jpg` (SHA-256 `c38b1cf71264ddf70e5112405f40cf220f45552bfcddc0fc08c1fb717ec6e2c3`), opened full-frame earlier in this run
- Caption: `intake/D029/photo-captions.txt#7` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/guruvayurappan-approved-identity.png` (SHA-256 `d93b3d0e53e52bd05bcc1a51b33073816592a3c83e19c14c65b50ec7cf232b4b`), Narayana identity anchor (opened full-frame earlier in this run)
- Reference image: `artifacts/d029/s007/landscape/candidate-v003.png` (SHA-256 `7e1e855db0a61d40fe40e50f0c068e0a6dbf97ec4463cb032107681f2caef338`), failed prior selection v003 (compared against its recorded sash finding)
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

- Limbs, hands, feet and fingers (pass): Indra holds a lowered vajra in his right hand; Narada raises one speaking palm and extends the other open hand, a veena slung at his side; Narayana clasps both hands at his waist. Devas and asuras hold lowered spears, a sword and round shields or join palms; at the 2x hem crop every foot is bare with five toes.
- Attachment and proportions (pass): All arms connect through armlets and bangles to their owners; the sword and spears are held upright and touch no other figure; legs under the green and maroon dhotis are paired and attached.
- Faces (pass): At 2x the devas remain individual: a white-bearded elder, a young smiling clean-shaven deva and a moustached deva. Asuras: a long-bearded asura with joined palms, a handlebar-moustached asura with a green collar, a clean-shaven youth in maroon and others behind with different ages. Indra (moustache, tall crown), Narada (grey beard, topknot) and Narayana (blue, namam, peacock feather, halo) are distinct.
- Duplication and fusion (pass): No repeated faces; one Indra, one Narada, one Narayana; the v002 clone defect stays resolved.
- Text and marks (pass): At the 3x crop of x 1330-1530, y 440-700 the bearded asura's green sash and dhoti hem now carry plain ochre bands with no glyph-like units; the 2x hem crop below shows plain borders and an unlettered shield boss. No text, signature, watermark or border anywhere.
- Scene, identity, composition and style (pass): Matches stanza 7: Narada stands between the sides with a raised speaking hand; Indra and Narayana are distinct, each fronting a group; weapons are lowered and the fight has stopped; a small pale foam motif sits on the ground without injury. Composition, cast and matte ochre/maroon/olive palette carry over from v003; only the sash and hem borders changed.

## Defects

- None observed.

## Limitations

- Narayana is two-armed here while S005, S006 and S010 show four arms; both are iconographically valid.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifests were changed by this review. Human editorial and art approval remain pending.

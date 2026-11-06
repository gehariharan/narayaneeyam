# D029 S010 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Shiva praises Narayana after his realization, with Uma beside him
- Selected native PNG: `artifacts/d029/s010/landscape/candidate-v002.png` (v002), SHA-256 `c36712f09df9f6432d46edc50880048f4dd20043b4bfa5d2f97c5373bd6454df`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s010/landscape/candidate-v002.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s010/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s010-v002-nw.png`: region `836x471+0+0`, SHA-256 `b502e0cbfb4643a8fa30b52bd51e17e1076ca533a2e2ddf05a154c9016081211`
  - `artifacts/d029/review-evidence/managed-v001/s010-v002-ne.png`: region `836x471+836+0`, SHA-256 `a7560ccf7b4243e59e7e65c9845bdf273869c2709f0309e935b79fa4c6dae17b`
  - `artifacts/d029/review-evidence/managed-v001/s010-v002-sw.png`: region `836x470+0+471`, SHA-256 `5462e040ecbf2aef76029d9a2552a17b11ff03b62dfe27f093b147abfcfba6d9`
  - `artifacts/d029/review-evidence/managed-v001/s010-v002-se.png`: region `836x470+836+471`, SHA-256 `d2d9d5d87a87b8165e1420dc0675e01ab6f9d6bfa31df0b5e3943153a651f08a`
  - `artifacts/d029/review-evidence/managed-v001/s010-v002-narayana-arms.png`: region `600x420+1050+260`, SHA-256 `c299e2671ee04402beead4da486c001a0c18957f422a30a0295e32cc3dc1efe7`
  - `artifacts/d029/review-evidence/managed-v001/s010-v002-left-arms-2.5x.png`: region `300x260+1020+380` (detail-crop-scaled-2.5x), SHA-256 `fa8c35f16466492a97caa3ef820a24e6ba2ed4a07c32c2086b55cf5f522bef21`
  - `artifacts/d029/review-evidence/managed-v001/s010-v002-uma-hem-2x.png`: region `360x260+690+760` (detail-crop-scaled-2x), SHA-256 `1639b32874b8204ce2b49e5b51863222c60a709f846b678ecb4ed7f11b34c976`

## References opened and hashed

- Source reference: `intake/D029/011.jpg` (SHA-256 `d9a693f2db90f13dfc2404328daa5a247efc5a6215b5f516acc7dc36cbff9542`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#10` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/guruvayurappan-approved-identity.png` (SHA-256 `d93b3d0e53e52bd05bcc1a51b33073816592a3c83e19c14c65b50ec7cf232b4b`), Narayana identity anchor (opened full-frame in this session)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/shiva-d029/character.json` (SHA-256 `9e87b3de6832e1a62d6d8608635d56af0b72a08a03edcd531529c0b35a22de11`)
- Contract: `art/bible/characters/uma-d029/character.json` (SHA-256 `10a67fe2054d31325697e899df1f9905700e4145fed6acf4a9c8bb7ed10e8d03`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)

## Anatomy basis

Shiva and Uma seated at left; four-armed Narayana seated at right.

## Observations

- Limbs, hands, feet and fingers (pass): Shiva joins his palms in prayer; Uma rests both hands in her lap. Narayana raises an abhaya palm, holds the conch in the upper right hand, extends an open lower left hand toward Shiva and holds a lotus in the lower right hand; each hand has four fingers and a thumb.
- Attachment and proportions (needs-fix): At the 2.5x crop of Narayana's left side the raised abhaya forearm runs down and merges into the armlet-bearing upper arm at the elbow, from which the extended forearm also leaves. One upper arm forks into two forearms; the abhaya arm has no separate shoulder root. The right-side pair is separately rooted.
- Faces (pass): Shiva: ash skin, crescent, tripundra, serene smile. Uma: warm skin, flowers in hair, serene. Narayana: deep blue, namam, peacock-feather crown, halo, gentle smile.
- Duplication and fusion (pass): Three figures only; no attendants or repeated deities.
- Text and marks (pass): Uma's hem border is plain banding at 2x; the glowing lotus carries no glyphs.
- Scene, identity, composition and style (pass): Matches stanza 10: Shiva in composed prayer with Uma beside him and Narayana honouring him with a gracious gesture; an unlettered glowing lotus suggests realization. Costumes match S008/S009. Matte palette without metallic gold.

## Defects

- D029-S010-NARAYANA-ARM-FORK-V002 (needs-fix, medium severity, high confidence): Narayana's raised abhaya forearm and extended forearm share one upper arm. Proposed repair: Native edit that roots the abhaya arm at its own shoulder.

## Limitations

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This exact version must not be published as inspected; it needs a native correction and a fresh review.

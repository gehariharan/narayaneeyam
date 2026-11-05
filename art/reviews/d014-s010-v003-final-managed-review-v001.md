# D014 S010 v003 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Kapila teaches Devahuti; Bhattathiri prays
- Selected native PNG: `artifacts/d014/s010/landscape/candidate-v003.png` (v003), SHA-256 `47eadbeaa8ed295b75b1a5eb3d2f1e220ba1e9439c58dbb100653ec5bac2616d` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/d014-production/native-repairs-current-run/S010-v003/native-output.png`), 1672 × 941
- Generation provenance: `artifacts/d014/s010/landscape/generation-v003.json` (prompt `artifacts/d014/s010/prompts/landscape-v003.md`, SHA-256 `f0c097e56446f00a105b9a14b01e564899946640b1dbbffad300fa9a15af4d26`)
- Supersedes: v002. Its managed report `art/reviews/d014-s010-v002-final-managed-review-v001.md` (SHA-256 `31a97d01f4e2aa687f8876d95f1a24f18a663267265d9a7edd55164c412c095a`) and record remain unchanged as history.
- Inspected at: 2026-11-05T12:19:14Z (detail views); the full-frame open came first, between 2026-11-05T12:19:00Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Upstream self-review was not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d014/s010/landscape/candidate-v003.png`, the entire frame opened as one image.
- Native-resolution detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v002/s010-v003-detail-kardama-departing.png`: region `240x340+1380+100`, SHA-256 `9920fc68319e177b42d6a68de9d55585e401d89160e0fe4c758ab1bbbe5c880b`, opened after creation at 2026-11-05T12:19:14Z
  - `artifacts/d014/review-evidence/managed-v002/s010-v003-detail-kardama-head-x4.png`: region `120x110+1430+110 enlarged 4x (point filter)`, SHA-256 `cdc9042885eb4ae7bb26c70031e5cd01b5f0181458a4b3f2d434a5572afb17e2`, opened after creation at 2026-11-05T12:19:14Z
  - `artifacts/d014/review-evidence/managed-v002/s010-v003-detail-guruvayurappan-arms.png`: region `420x560+220+80`, SHA-256 `f8815b47068d2c8fe66d70b9e81d13c14ec6e06b635835728a1c6d2c9f623165`, opened after creation at 2026-11-05T12:19:14Z
  - `artifacts/d014/review-evidence/managed-v002/s010-v003-detail-bhattathiri.png`: region `360x540+0+380`, SHA-256 `d44a8d8744c39fdff44d5b91122eb44a5eee57be9718a29a8dcf12f047f5e9e7`, opened after creation at 2026-11-05T12:19:14Z
  - `artifacts/d014/review-evidence/managed-v002/s010-v003-detail-kapila-devahuti.png`: region `720x500+700+230`, SHA-256 `15d4aedf39d70b5904281b09966ac8f98d6c2e53d5a643430db7310382e9914a`, opened after creation at 2026-11-05T12:19:14Z
  - `artifacts/d014/review-evidence/managed-v002/s010-v003-detail-deity-feet.png`: region `340x260+230+640`, SHA-256 `b7e1e05288ca6e79385815ac7cccda667eae57ff2619af3638b8add6c6bdec1a`, opened after creation at 2026-11-05T12:19:14Z

## References opened and hashed

- Source reference: `intake/D014/010.jpg` (SHA-256 `af0614101822d409efd5c9d82710be7b2ee4909164babbeee3f93012c95396c8`), opened full-frame in this run's first managed pass and re-read for this comparison
- Caption: `intake/D014/photo-captions.txt#010` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Contract: `art/bible/characters/bhattathiri/character.json` (SHA-256 `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`)
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`)
- Character anchor (guruvayurappan/narayana): `artifacts/d014/references/characters/guruvayurappan-approved-v001.png` (SHA-256 `d93b3d0e53e52bd05bcc1a51b33073816592a3c83e19c14c65b50ec7cf232b4b`)
- Character anchor (older bhattathiri): `artifacts/d014/references/characters/bhattathiri-older-reference-candidate-v001.png` (SHA-256 `ebe4aedd0283cffa987dffb1494ec95da551ffa5ccd951e7f3730504f15ee7c3`)

## Source and story

intake/D014/010.jpg shows young Kapila teaching with a raised finger while bearded Kardama walks away behind, with a peacock and deer. v003 keeps v002's continuous mural: Kapila teaches Devahuti on a rock at right-center, a deer and peacock appear, and Bhattathiri kneels in anjali before a standing four-armed Guruvayurappan in a shrine arch with two lamps at left. Kardama still departs up the forest path at top right with his staff, white cloth and walking posture. The change from v002 is his head: he is now clean-shaven, with dark hair in a top-knot, consistent with his household appearance in S006-S008. The source's beard is not treated as an error; this is a chapter-continuity choice.

## Anatomy basis

Exactly five figures: Kapila, Devahuti and Kardama are ordinary two-armed humans, Bhattathiri is an ordinary older devotee, and Guruvayurappan has four attached arms by plan.

## Observations

- Limbs, hands, feet and fingers (pass): Guruvayurappan holds the chakra (upper viewer-left), shows abhaya (lower viewer-left), holds the conch (upper viewer-right) and a lotus (lower viewer-right), with both blue feet and anklets on the pedestal. Bhattathiri's two hands are joined. Kapila shows a raised teaching hand and an open hand, Devahuti's two hands rest on her lap, and Kardama holds the staff with two bare feet visible on the path.
- Attachment and proportions (pass): All four divine arms meet the shoulders under armlets, and every human arm is continuous shoulder-to-hand.
- Faces (pass): Five distinct faces. Bhattathiri matches the older clean-shaven reference: lined face, ash stripes, rudraksha and white beads, sacred thread, cream dhoti with maroon border. Guruvayurappan matches the approved sheet. Kapila and Devahuti are distinct. In the 4x head enlargement, Kardama is clean-shaven in profile with a top-knot.
- Duplication and fusion (pass): Exactly five figures with no repeated identity across the two registers.
- Text and marks (pass): None; there are no books or manuscripts.
- Scene, iconography, composition and style (pass): The teaching scene, departing Kardama and subordinate prayer follow the plan, with Kardama's identity now continuous with S008. The matte style matches the anchors.

## Defects

- None observed.

## Limitations

- Kardama is a small background figure (about 110 px tall at native resolution), so facial detail was confirmed only with an enlarged crop.
- Bhattathiri's small hair tuft is not clearly distinguishable, the same as in v002.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes were edited and no approval manifest was changed. Human editorial and art approval remain pending.

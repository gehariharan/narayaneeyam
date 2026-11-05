# D014 S005 v002 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Manu's family visits Kardama
- Selected native PNG: `artifacts/d014/s005/landscape/candidate-v002.png` (v002), SHA-256 `27510d90ddddcaa5eadfbb62c42ca4ae2f899b68099212474f865ddb987b5ff9` (recomputed from the D014 source checkout), 1672 × 941
- Inspected at: 2026-11-05T11:43:56Z (detail views); the full-frame open came first, between 2026-11-05T11:43:38Z and the first detail crop
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d014/s005/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence under the release worktree, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v001/s005-v002-detail-visitors-faces-hands.png`: region `760x420+40+40`, SHA-256 `d9eedd8d572d604a7bf0b354cd8f53e14090318a6d06d83af1791fb111121091`, opened after creation at 2026-11-05T11:43:56Z
  - `artifacts/d014/review-evidence/managed-v001/s005-v002-detail-visitors-feet.png`: region `760x260+40+680`, SHA-256 `c4fe2958b86c86f2c5acc202f771e0b28c005ba5ea94e3dfcd907e82316912e2`, opened after creation at 2026-11-05T11:43:56Z
  - `artifacts/d014/review-evidence/managed-v001/s005-v002-detail-kardama.png`: region `520x941+920+0`, SHA-256 `ca81dd6bd4ac3558cf311c0ace9ff1dec31be602f6299efe64d787e6a607eef6`, opened after creation at 2026-11-05T11:43:56Z

## References opened and hashed

- Source reference: `intake/D014/005.jpg` (SHA-256 `4bc89c261e960f40e2cbbe5e9f8398f65af988312e26e84a468259d4dde06626`), opened full-frame immediately before the candidate
- Caption: `intake/D014/photo-captions.txt#005` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), opened full-frame
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`), opened full-frame

## Source and story

intake/D014/005.jpg is visually ambiguous: a crowned prince and a lady before a bearded four-armed figure on a lotus in clouds. The plan therefore governs. The candidate shows a forest hermitage with the three visitors at left (crowned, grey-bearded Manu; Shatarupa in a maroon sari; Devahuti in a yellow sari with jasmine), all in anjali, and Kardama at right greeting them with open palms beside a tree and hut. No Narada or deity is added.

## Anatomy basis

Exactly four ordinary humans: Manu, Shatarupa, Devahuti and Kardama. Each has one head and two arms.

## Observations

- Limbs, hands, feet and fingers (pass): Each visitor has two forearms ending in joined palms, and Kardama has two open hands with a thumb and four fingers. All eight feet are visible, two per person, each with five toes.
- Attachment and proportions (pass): Arms meet the shoulders under armlets or cloth folds; the three visitors overlap but stay separable, and Kardama's two arms are continuous.
- Faces (pass): Four distinct faces: Manu is grey-bearded and crowned; the two women differ in hair ornaments and age; Kardama is bearded.
- Duplication and fusion (pass): Exactly four people with no merged bodies, and no fifth person or deity.
- Text and marks (pass): None observed.
- Scene, iconography, composition and style (needs-fix): Kardama appears as a mature man with a full beard and moustache and no tilak. In S002, S003, S004, S006, S007 and S008 he is a youthful clean-shaven ascetic with long dark hair in a bun. The plan's continuity rule requires Kardama to stay visually consistent, and this stanza falls between S004 and S006 with no narrative reason for a beard, so viewers will read him as a different sage. Composition and style otherwise follow the plan.

## Defects

- D014-S005-KARDAMA-IDENTITY-V002 (needs-fix, medium, high confidence): Kardama is drawn as a mature, full-bearded sage without a tilak, inconsistent with his youthful clean-shaven identity in S002-S004 and S006-S008. Repair: Generate a fresh S005 version that keeps the four-person arrival composition but gives Kardama the chapter's youthful clean-shaven identity (as in S004/S006), then re-run the managed individual review.

## Limitations

- There is no Kardama character sheet, so identity was judged by cross-checking his eight appearances in this chapter.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

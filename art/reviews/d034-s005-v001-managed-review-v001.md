# D034 S005 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Guha ferries Rama, Sita and Lakshmana across the Ganges
- Selected native PNG: `artifacts/d034/s005/landscape/candidate-v001.png` (v001), SHA-256 `1cf9a7fdc206dd74662762ac51a6b46e9b50aa1f5134da8115f1c63894eff907` (recomputed after a byte-exact copy from the producer worktree `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam/artifacts/d034/s005/landscape/candidate-v001.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer's own visual check was not relied on.

## Views actually opened

- Full frame: `artifacts/d034/s005/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence and can be regenerated from the geometry below:
  - `artifacts/d034/review-evidence/managed-v001/s005-nw.png`: region `836x470+0+0`, SHA-256 `6b23e3c380c4a4033ca2e318a7114754ce5b54263c2036a7472d338230ccc063`, opened between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z
  - `artifacts/d034/review-evidence/managed-v001/s005-ne.png`: region `836x470+836+0`, SHA-256 `54b456a11b7c2ec06f8df54da06eae289bb2a4e9e5f0ecf8709826e05824b4a6`, opened between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z
  - `artifacts/d034/review-evidence/managed-v001/s005-sw.png`: region `836x471+0+470`, SHA-256 `763540b5c704d729dec5209ca5cf235f128586de8f3f5100e3678eb00fdc03a9`, opened between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z
  - `artifacts/d034/review-evidence/managed-v001/s005-se.png`: region `836x471+836+470`, SHA-256 `f05fcbaa9d409e6c53bb05c17715aa669d420e57cf26dcae3f17b131455b6b4f`, opened between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z

## References opened and hashed

- Source reference: `intake/D034/012.jpg` (SHA-256 `4d94f7fa72d36115fa4122af37747ff9488c854a44c4c91f7f0b0a8dddbdaccc`, mapped to sloka 5 in `content/sources/d034/intake-manifest.json`), opened full-frame and in a ten-source contact sheet
- Caption: `intake/D034/photo-captions.txt#5` (file SHA-256 `2f42ba1935d490cc958d27eaaa2f69d853e4d03dacfe414eea17728a77655bbe`, as listed in the intake manifest)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d034.json` (SHA-256 `9cc7089e6b48d6b5678acef8b6ac2c5c76079aed05c820962bec3e712ec3b4bb`)
- Contract: `content/daskams/d034.json` (SHA-256 `d23ee7a909fcd223e52e3765901e22ca3b48ef0e4803e84ac08cbb777c96440e`)
- Contract: `content/sources/d034/intake-manifest.json` (SHA-256 `f9564eb914e22898bc4d2564235a592db0f58e4cac2060aa2e44dc49e5160ef5`)
- Contract: `art/bible/characters/rama/character.json` (SHA-256 `6cddaa94cec95d18971ae728ec1dce2a77e99f5b673d1e17353d4df030912063`)
- Contract: `art/bible/characters/sita/character.json` (SHA-256 `90c9f8b261e2515b3df07df1c2f08fc0e75482b60ac75d0ab006e44f72b361f6`)
- Contract: `art/bible/characters/lakshmana/character.json` (SHA-256 `51f7a4f47deb0affa85d261ab4e60fcd39d733f80dd6724a739f033a6f20ae54`)
- Contract: `art/bible/characters/guha/character.json` (SHA-256 `ee8d237a31b8dea1515c62d83fcb2480f78975fe548b9a9d8cbaad5d6df4ef49`)

## Anatomy basis

Four adults in one boat: Guha rowing at the stern (left), then Rama, Sita and Lakshmana seated.

## Observations

- Limbs, hands, feet and fingers (pass): Guha holds one oar with two hands and one bent leg is visible. Rama and Lakshmana each hold a bow in one hand with the other hand on the knee; Sita's hands rest in her lap.
- Attachment and proportions (pass): All arms are attached; seated bodies are supported by the hull.
- Faces (pass): Guha: moustache, white head-cloth, earth-tone dhoti. Rama: muted-blue skin, topknot, no feather. Sita: a distinct serene face with hair in a bun. Lakshmana: warm-brown skin, distinct from Rama.
- Duplication and fusion (pass): Four distinct people, one boat, one oar.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches the stanza and source 012.jpg: the Ganges crossing with Guha at the oar, and the far bank opens to a forest path at right. Sita sits between the brothers. Matte mural palette.

## Defects

- None observed.

## Limitations

- Legs of the seated passengers are covered by garments, which is expected for the pose.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

# D034 S010 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Rama honours the fallen Jatayu
- Selected native PNG: `artifacts/d034/s010/landscape/candidate-v002.png` (v002), SHA-256 `ed672cc46764ffaaf273446c76382257552d231ae34453a7c944d2df21b5f8c9`, 1672 × 941. Imported byte-exact from `/home/gehariharan/firstmate-images/data/d034-production/native-five-repairs/s010/candidate-v002.png` per handoff manifest `/home/gehariharan/firstmate-images/data/d034-production/native-five-repairs/handoff-manifest.json` (SHA-256 `7fbe91787f4225e180549a33f5a55ec3aca5a578aadc176ec167d77244e7fb78`), after rehashing the original, the raw return and the copy.
- Replaces: v001 (needs-fix: bald-eagle Jatayu). That version and its report stay in the ledger as history.
- Inspected: full frame and detail views between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer's provisional notes in the handoff manifest were not relied on.

## Views actually opened

- Full frame: `artifacts/d034/s010/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence and can be regenerated from the geometry below:
  - `artifacts/d034/review-evidence/managed-v002/s010-v002-lakshmana-feet.png`: region `360x320+1060+460`, SHA-256 `88ff103d6007c7341d303a4143f09dc52ac6c233935f9277324993459775320e`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s010-v002-ne.png`: region `836x470+836+0`, SHA-256 `eff94003c26eb1d8334cc7bb92a8732d273824a407c04796cac180ead7cdd0ff`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s010-v002-nw.png`: region `836x470+0+0`, SHA-256 `461d9a9194129ff77d51cc613fff6a54f7bfc21e230a0846df48486e063404b9`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s010-v002-se.png`: region `836x471+836+470`, SHA-256 `37eb57308109f4e7c7487958f83962888f922d966c3ea3b8e5a03feb32d7e49b`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s010-v002-sw.png`: region `836x471+0+470`, SHA-256 `5e59c1653b69d27373d4e72a8359bf419449fc703e9e16d6c64aaada64d5dcf8`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z

## References opened and hashed

- Source reference: `intake/D034/022.jpg` (SHA-256 `f54a90b8da04b048f9ef22ae54f1be5c75057c3dc294068f3f4829d830c706fa`, mapped to sloka 10 in `content/sources/d034/intake-manifest.json`), opened earlier in this run, full-frame and in the ten-source contact sheet
- Caption: `intake/D034/photo-captions.txt#10` (file SHA-256 `2f42ba1935d490cc958d27eaaa2f69d853e4d03dacfe414eea17728a77655bbe`, as listed in the intake manifest)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d034.json` (SHA-256 `9cc7089e6b48d6b5678acef8b6ac2c5c76079aed05c820962bec3e712ec3b4bb`)
- Contract: `content/daskams/d034.json` (SHA-256 `d23ee7a909fcd223e52e3765901e22ca3b48ef0e4803e84ac08cbb777c96440e`)
- Contract: `content/sources/d034/intake-manifest.json` (SHA-256 `f9564eb914e22898bc4d2564235a592db0f58e4cac2060aa2e44dc49e5160ef5`)
- Contract: `art/bible/characters/rama/character.json` (SHA-256 `6cddaa94cec95d18971ae728ec1dce2a77e99f5b673d1e17353d4df030912063`)
- Contract: `art/bible/characters/lakshmana/character.json` (SHA-256 `51f7a4f47deb0affa85d261ab4e60fcd39d733f80dd6724a739f033a6f20ae54`)
- Contract: `art/bible/characters/jatayu/character.json` (SHA-256 `fb057c458e76bce59fba78af8255a69342b4f87fe19fbf7da314582546fdef19`)

## Anatomy basis

Rama kneeling (left), Jatayu resting on the ground (centre), Lakshmana standing (right).

## Observations

- Limbs, hands, feet and fingers (pass): Rama holds the water bowl in one hand and offers flowers on his other palm; his kneeling foot shows toes. Lakshmana joins two hands; one bare foot is visible, and the native close crop shows his second foot hidden behind Jatayu's nearer wing tip. Jatayu shows two taloned feet.
- Attachment and proportions (pass): Jatayu's wings attach at the shoulders and fold along the body; the bare neck joins the ruff naturally. Rama's arms are attached.
- Faces (pass): Jatayu has the bare, wrinkled grey-brown head and neck of a vulture, a hooked beak and closed eyes. Rama: blue skin and tilak. Lakshmana: a distinct downcast face.
- Duplication and fusion (pass): One Rama, one Lakshmana and one bird.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches the stanza and source 022.jpg: Rama honours the intact, dark-feathered vulture Jatayu with water and flowers, with no gore, and a path beyond. Jatayu now matches his contract. Matte mural rendering.

## Defects

- None observed.

## Limitations

- Lakshmana's second foot is occluded by the nearer wing, which is plausible depth ordering; it is not a missing limb.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

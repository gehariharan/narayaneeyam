# D034 S003 v003 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Rama drives Maricha away from the sacrifice
- Selected native PNG: `artifacts/d034/s003/landscape/candidate-v003.png` (v003), SHA-256 `792d3ca5e41e32a38efbc5fc46a735db2dadfc29fce6a7f00d27cf26c5eee566`, 1672 × 941. Imported byte-exact from `/home/gehariharan/firstmate-images/data/d034-production/native-five-repairs/s003/candidate-v003.png` per handoff manifest `/home/gehariharan/firstmate-images/data/d034-production/native-five-repairs/handoff-manifest.json` (SHA-256 `7fbe91787f4225e180549a33f5a55ec3aca5a578aadc176ec167d77244e7fb78`), after rehashing the original, the raw return and the copy.
- Replaces: v002 (needs-fix: nocked and released arrows at once; standing sage not Vishvamitra). That version and its report stay in the ledger as history.
- Inspected: full frame and detail views between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer's provisional notes in the handoff manifest were not relied on.

## Views actually opened

- Full frame: `artifacts/d034/s003/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence and can be regenerated from the geometry below:
  - `artifacts/d034/review-evidence/managed-v002/s003-v003-ne.png`: region `836x470+836+0`, SHA-256 `41cb8f2f3e1b2c2fb14812b3945bccb0f3a82a0cb7205dcde46fbab77d71f0c5`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s003-v003-nw.png`: region `836x470+0+0`, SHA-256 `c3ba15bae1e9506226b3839b84d2e0afabbf7bb148330d845d9537f98d566670`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s003-v003-se.png`: region `836x471+836+470`, SHA-256 `9cba4156cc0faeac5938aa1b60de53f0fa50b3857b659ce968c6984969f90be0`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s003-v003-sw.png`: region `836x471+0+470`, SHA-256 `25d0b3f41e17fc48df388c918840644155b86e0849810d3aa2e748ae001aebc5`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z

## References opened and hashed

- Source reference: `intake/D034/005.jpg` (SHA-256 `9a96419685fb0f3c27f4f2cd2ee5ebad1fc72e5f47c5ada86b988aa79cd4c66b`, mapped to sloka 3 in `content/sources/d034/intake-manifest.json`), opened earlier in this run, full-frame and in the ten-source contact sheet
- Caption: `intake/D034/photo-captions.txt#3` (file SHA-256 `2f42ba1935d490cc958d27eaaa2f69d853e4d03dacfe414eea17728a77655bbe`, as listed in the intake manifest)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d034.json` (SHA-256 `9cc7089e6b48d6b5678acef8b6ac2c5c76079aed05c820962bec3e712ec3b4bb`)
- Contract: `content/daskams/d034.json` (SHA-256 `d23ee7a909fcd223e52e3765901e22ca3b48ef0e4803e84ac08cbb777c96440e`)
- Contract: `content/sources/d034/intake-manifest.json` (SHA-256 `f9564eb914e22898bc4d2564235a592db0f58e4cac2060aa2e44dc49e5160ef5`)
- Contract: `art/bible/characters/rama/character.json` (SHA-256 `6cddaa94cec95d18971ae728ec1dce2a77e99f5b673d1e17353d4df030912063`)
- Contract: `art/bible/characters/lakshmana/character.json` (SHA-256 `51f7a4f47deb0affa85d261ab4e60fcd39d733f80dd6724a739f033a6f20ae54`)
- Contract: `art/bible/characters/vishvamitra/character.json` (SHA-256 `9328c762a55bc9a70a4b47b21d8888ff98f8af9649587f7aa69398b90900f21f`)
- Contract: `art/bible/characters/maricha/character.json` (SHA-256 `1c578d52fbc6cc50f346fb76021cc6ec1780135a47dbe9f84c297c5d25c023a5`)

## Anatomy basis

Rama (archer, foreground), Lakshmana (left), the standing Vishvamitra and three seated sages around the altar, and one airborne Maricha.

## Observations

- Limbs, hands, feet and fingers (pass): Rama grips the bow with his extended left hand; his right hand rests open at his shoulder in follow-through. Lakshmana holds his bow in his left hand with his right hand at his side. Seated sages have folded legs; Maricha has two arms and two legs. Feet show toes.
- Attachment and proportions (pass): Limbs are attached; Rama's wide archer stance is balanced.
- Faces (pass): Rama: muted-blue skin, topknot, no feather. Lakshmana: warm-brown skin and a distinct face. The standing officiating sage has white hair and a long white beard, matching the vishvamitra contract. The three seated sages are dark-bearded and distinct. Maricha has a moustached, curly-haired face.
- Duplication and fusion (pass): One arrow only: Rama's bowstring hangs straight and empty, and a single arrow at the end of one flight trail strikes Maricha. One Rama, one Lakshmana, one bow each.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches the stanza and source 005.jpg: Maricha is driven far into the sky while the altar and the sages stay intact, with no gore. Matte mural rendering.

## Defects

- None observed.

## Limitations

- Lakshmana stands behind Rama rather than guarding the opposite edge as the plan suggests; the plan's guard placement is compositional, not an identity or anatomy rule.
- The flight trail begins in open sky rather than at the bow, a common pictorial convention.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

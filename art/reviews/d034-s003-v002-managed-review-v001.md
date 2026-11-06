# D034 S003 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Rama drives Maricha away from the sacrifice
- Selected native PNG: `artifacts/d034/s003/landscape/candidate-v002.png` (v002), SHA-256 `d876299565d290e548950ca6518555a915659cfe14b88bfba30a83d29c06a85d` (recomputed after a byte-exact copy from the producer worktree `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam/artifacts/d034/s003/landscape/candidate-v002.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer's own visual check was not relied on.

## Views actually opened

- Full frame: `artifacts/d034/s003/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence and can be regenerated from the geometry below:
  - `artifacts/d034/review-evidence/managed-v001/s003-nw.png`: region `836x470+0+0`, SHA-256 `5fbedf775590970dc2ee584cf87ca3218826fcfecba30b64e103e94bb20a5dbc`, opened between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z
  - `artifacts/d034/review-evidence/managed-v001/s003-ne.png`: region `836x470+836+0`, SHA-256 `9402523ebf095612f18927209de325ba4a0e8e7d0adc074d0e5e67a5583b9471`, opened between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z
  - `artifacts/d034/review-evidence/managed-v001/s003-sw.png`: region `836x471+0+470`, SHA-256 `4fec6ae10a9028d72ceec9060aa8b4fb1367a6db340d74247dd827c24eeb6858`, opened between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z
  - `artifacts/d034/review-evidence/managed-v001/s003-se.png`: region `836x471+836+470`, SHA-256 `9133e8ab9ccfa5531cb8be5d2a8781a72adbe3543159d029f408bf0589631084`, opened between 2026-11-06T10:53:57Z and 2026-11-06T10:56:38Z

## References opened and hashed

- Source reference: `intake/D034/005.jpg` (SHA-256 `9a96419685fb0f3c27f4f2cd2ee5ebad1fc72e5f47c5ada86b988aa79cd4c66b`, mapped to sloka 3 in `content/sources/d034/intake-manifest.json`), opened full-frame and in a ten-source contact sheet
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

Rama (archer, foreground), Lakshmana (left), a standing sage and three seated sages around the altar, and one airborne Maricha.

## Observations

- Limbs, hands, feet and fingers (pass): Rama grips the bow with his left hand and draws with his right; Lakshmana holds his bow in his left hand. Seated sages have folded legs; Maricha has two arms and two legs.
- Attachment and proportions (pass): Limbs are attached and proportions are natural.
- Faces (uncertain): The standing sage who gestures toward the fire, presumably Vishvamitra, has dark hair and beard; the vishvamitra contract requires white or graying hair. The only white-haired sage is a seated background figure.
- Duplication and fusion (needs-fix): Two arrows are present at once: one still nocked on Rama's fully drawn bow and one already in flight striking Maricha, contrary to the plan's one-arrow, continuous direction requirement.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (needs-fix): Story beat matches the stanza and source 005.jpg (Maricha driven into the sky, altar protected), but the arrow continuity is broken and Vishvamitra's identity is unclear. Lakshmana stands behind Rama, not at the opposite edge as planned. Matte mural rendering is consistent.

## Defects

- D034-S003-DOUBLE-ARROW-V002 (high): A nocked arrow on the drawn bow and a released arrow hitting Maricha appear simultaneously. Suggested repair: Show either the drawn bow with no arrow in flight, or the released arrow with an empty bowstring.
- D034-S003-VISHVAMITRA-IDENTITY-V002 (medium): The standing sage at the altar is dark-haired, so the image does not show Vishvamitra per his contract. Suggested repair: Make the standing officiating sage white-haired, per the vishvamitra contract.

## Limitations

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

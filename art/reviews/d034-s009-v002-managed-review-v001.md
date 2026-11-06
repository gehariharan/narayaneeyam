# D034 S009 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: The disguised Ravana at the hermitage while Rama chases the deer
- Selected native PNG: `artifacts/d034/s009/landscape/candidate-v002.png` (v002), SHA-256 `3bbc526dc63d900abe2228729e159e974bc86e97b9acf8b139ffcba7ceda5bcd`, 1672 × 941. Imported byte-exact from `/home/gehariharan/firstmate-images/data/d034-production/native-five-repairs/s009/candidate-v002.png` per handoff manifest `/home/gehariharan/firstmate-images/data/d034-production/native-five-repairs/handoff-manifest.json` (SHA-256 `7fbe91787f4225e180549a33f5a55ec3aca5a578aadc176ec167d77244e7fb78`), after rehashing the original, the raw return and the copy.
- Replaces: v001 (uncertain: mendicant not clearly elder). That version and its report stay in the ledger as history.
- Inspected: full frame and detail views between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer's provisional notes in the handoff manifest were not relied on.

## Views actually opened

- Full frame: `artifacts/d034/s009/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence and can be regenerated from the geometry below:
  - `artifacts/d034/review-evidence/managed-v002/s009-v002-ne.png`: region `836x470+836+0`, SHA-256 `aa114c4bfdf8f2cb08b6284d9b35f2d8016d02ac59bd0de0edee780d7e2783fe`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s009-v002-nw.png`: region `836x470+0+0`, SHA-256 `ae27b3771d895260c67fb15c5c98259a0371f3a49036c31d8cbefd03f530ceeb`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s009-v002-se.png`: region `836x471+836+470`, SHA-256 `a1912d921ddd12f0f388b88dacd08b29da90733e7dc04f3208fefeb979b67432`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z
  - `artifacts/d034/review-evidence/managed-v002/s009-v002-sw.png`: region `836x471+0+470`, SHA-256 `9a0458cc09895e76237c74e9e9d2df18869a293629d7c31cb0a98e62a46daf9a`, opened between 2026-11-06T11:32:12Z and 2026-11-06T11:33:30Z

## References opened and hashed

- Source reference: `intake/D034/021.jpg` (SHA-256 `6a21eca30e931520f4fd55baa057984fc991a86d3a41cf26c6b6c16b9cd4c866`, mapped to sloka 9 in `content/sources/d034/intake-manifest.json`), opened earlier in this run, full-frame and in the ten-source contact sheet
- Caption: `intake/D034/photo-captions.txt#9` (file SHA-256 `2f42ba1935d490cc958d27eaaa2f69d853e4d03dacfe414eea17728a77655bbe`, as listed in the intake manifest)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d034.json` (SHA-256 `9cc7089e6b48d6b5678acef8b6ac2c5c76079aed05c820962bec3e712ec3b4bb`)
- Contract: `content/daskams/d034.json` (SHA-256 `d23ee7a909fcd223e52e3765901e22ca3b48ef0e4803e84ac08cbb777c96440e`)
- Contract: `content/sources/d034/intake-manifest.json` (SHA-256 `f9564eb914e22898bc4d2564235a592db0f58e4cac2060aa2e44dc49e5160ef5`)
- Contract: `art/bible/characters/sita/character.json` (SHA-256 `90c9f8b261e2515b3df07df1c2f08fc0e75482b60ac75d0ab006e44f72b361f6`)
- Contract: `art/bible/characters/ravana/character.json` (SHA-256 `cc6e5170aa01a28591383a7d8b2212a6b8585b589b1d62361dead9d554ac6fed`)
- Contract: `art/bible/characters/rama/character.json` (SHA-256 `6cddaa94cec95d18971ae728ec1dce2a77e99f5b673d1e17353d4df030912063`)
- Contract: `art/bible/characters/maricha/character.json` (SHA-256 `1c578d52fbc6cc50f346fb76021cc6ec1780135a47dbe9f84c297c5d25c023a5`)

## Anatomy basis

Foreground: the mendicant (Ravana) and Sita. Background: a small Rama running with a bow, and one deer.

## Observations

- Limbs, hands, feet and fingers (pass): The mendicant grips a staff in his left hand and extends his open right palm; Sita holds the bowl with both hands. Rama holds a bow; the deer has four legs. Visible feet show toes.
- Attachment and proportions (pass): Limbs are attached; the water pot hangs from a shoulder cord; the stooped posture is natural.
- Faces (pass): The mendicant is clearly elderly, with long grey hair in a topknot, a grey beard, lined features and ash tilak, matching the ravana disguise contract. Sita has a distinct, composed face. Rama has blue skin and no feather.
- Duplication and fusion (pass): One mendicant with a single head and no crown, one Sita, one Rama and one deer.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches the stanza and source 021.jpg: alms at the hut threshold, with the deer lure seen through one continuous forest vista. The deer has subdued golden spots, not metallic. Matte mural rendering.

## Defects

- None observed.

## Limitations

- Sita, not the mendicant, holds the alms bowl, as the plan describes; the mendicant carries a water pot.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

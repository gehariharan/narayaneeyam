# D040 S008 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Putana falls in her giant form
- Selected native PNG: `artifacts/d040/s008/landscape/v002/candidate.png` (v002), SHA-256 `60d35c2c7e1f3e3d9999e461733c8a98ff1256b12241aaf4a871361e2cad32eb` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d014-production/artifacts/d040/s008/landscape/v002/candidate.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T07:33:08Z and 2026-11-06T07:33:31Z; re-inspected against the final putana contract between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d040/s008/landscape/v002/review.md`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d040/s008/landscape/v002/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d040/review-evidence/managed-v001/s008-v002-se.png`: region `836x470+836+471`, SHA-256 `6bec64e0bfd403a2e114ca7848c20d579bc18abfd62c3277951fe130339c71a6`, opened between 2026-11-06T07:33:08Z and 2026-11-06T07:33:31Z
  - `artifacts/d040/review-evidence/managed-v001/s008-v002-torso-arm.png`: region `700x380+260+170`, SHA-256 `5ef3a72544b0ce298fd9bdcfa649d4fc48db219dccb46c85d32eb6173cb08408`, opened 2026-11-06T07:33:31Z
  - `artifacts/d040/review-evidence/managed-v001/s008-v002-face-x2.png`: region `420x260+100+260 then 200% Lanczos`, SHA-256 `35d7e7f38e6cd5c14deece7df37d5b1777e2736c23ba23df90820507400f577b`, opened 2026-11-06T07:33:31Z
  - `artifacts/d040/review-evidence/managed-v001/s008-v002-villagers-x2.png`: region `560x240+1110+70 then 200% Lanczos`, SHA-256 `88f3e80897628f12623e37759da87394a496846d1b542a12d46da0c32520737f`, opened 2026-11-06T07:33:31Z
  - `artifacts/d040/review-evidence/managed-v001/s008-v002-far-shoulder-x3.png`: region `300x200+560+220 then 300% Lanczos`, SHA-256 `0fbe141015080ac23ef34a57f858baf1e0252b325e287c1909b69eddc19ea27e`, opened 2026-11-06T07:33:55Z
  - `artifacts/d040/review-evidence/managed-v001/s008-v002-near-arm.png`: region `420x330+20+520`, SHA-256 `fcd49c82ee423d3228539f213ba5013b54934d75333c67c8236bf0884bcca63c`, opened 2026-11-06T07:33:55Z

## References opened and hashed

- Source reference: `intake/D040/008.jpg` (SHA-256 `90cdf2d15c067c5dd0a9800021015570801568475a322ae9497d65edbf949729`), opened full-frame immediately before the candidate
- Caption: `intake/D040/photo-captions.txt#008` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `1535781f2295007c95583ba8765e446b7556f3c49823190f1c7ecc205eef42ac`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/putana/character.json` (SHA-256 `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- Contract: `art/bible/characters/gopas/character.json` (SHA-256 `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`)
- Comparison image: `artifacts/d040/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), infant identity anchor (opened full-frame 2026-11-06T07:35:05Z-07:35:19Z)
- Comparison image: `artifacts/d040/s004/landscape/v001/candidate.png` (SHA-256 `b9f9abe41106e04f44d1baabb86cdbf1431ee03cde49683781a5e8640fec533d`), Putana disguise continuity (selected S004 v001)

## Source and story

intake/D040/008.jpg shows a giant green-skinned demoness lying on her back across a meadow, arms outstretched, with small villagers running toward her. The candidate shows the same fallen giant across ochre Vraja ground, with the infant crawling safely on her upper chest and a group of villagers watching from under a tree at upper right.

## Anatomy basis

One immense adult demoness (Putana's true form), one two-armed infant Krishna, and eleven distant villagers: three adult men, two adult women and six children.

## Observations

- Limbs, hands, feet and fingers (pass): Putana's near arm lies outstretched to the lower left with an open palm, four fingers and thumb, and gold bangles. Her far arm stretches to the upper right with an open hand. Both feet show five toes and gold anklets. The infant is on all fours with two hands and two feet visible. The villagers' hands are joined, pointing or at their sides.
- Attachment and proportions (pass): Both of Putana's arms emerge from maroon gold-bordered sleeves, and both legs are continuous from the torn lower cloth to the anklets. Her limbs are proportionate to her immense scale. The infant has infant proportions.
- Faces (pass): Putana: grey-green face with closed eyes and a peaceful expression, long dark hair spread on the ground, a white flower and round gold earring, and a pale maang-tikka mark on her forehead. Infant: namam, feather, calm smile. Villagers: distinct small faces, including a bearded turbaned man and a clean-shaven man with joined palms.
- Duplication and fusion (pass): One giant, one infant; the eleven villagers are each different in age, dress or pose.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows her fall with both hands stretched out, as caption 8 describes. Her flower, earring, long hair and maroon-and-gold upper drape carry over from the disguise, matching the putana contract's giant-true-form mode; there are no horns, gore or wounds. The infant is unharmed and small by scale. The villagers bind to the gopas (men and boys) and gopikas (women) contracts. The bearded turbaned man has a full beard, so he is an unnamed gopa, not Nanda. Matte mural palette.

## Defects

- None observed.

## Limitations

- The far (upper-right) arm emerges from its sleeve further along the torso than the near shoulder, just beyond the infant, so its root sits nearer the upper chest than a strict anatomical shoulder. It is connected and proportionate, and reads as an outstretched arm. This is recorded for human art review, not as a defect.
- S008 v001 (preserved with its clothing-coverage finding) was not opened in this review and is not published.
- Re-opened against the final putana contract and the plan's added gopas binding between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

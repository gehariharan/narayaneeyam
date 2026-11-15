# D041 S005 v003 producer inspection

- Reviewer: producer (Codex ImageGen worker)
- Inspected at: 2026-11-15T18:13:13Z
- Outcome: needs-fix, producer inspection only; the better v003 is retained under the authorized one-round limit. This does not approve the artwork.
- Candidate: `artifacts/d041/s005/landscape/candidate-v003.png` (v003, 1672x941, SHA-256 `fff5eeef7ef6b0521a39200a9bdcbea17e824bb403cdab9fc8c17e7173943b5e`)
- Mapped source: `intake/D041/005.jpg` (SHA-256 `c83f4b998d25aa01fa1ff48c7978c2c761861ebd9db535e7bc0ef220dbdf8b77`), source photo 005 mapped to stanza 5 in the accepted reference map.
- Viewing: inspected the complete native landscape image and the enlarged crop `artifacts/d041/review-crops/s005-v003-detail.png`; checked against the plan and infant Krishna, Yashoda, Nandagopan, gopa and gopika contracts.

## Image-specific observations

Yashoda holds the infant at the center while the cowherds gather around them; two cows remain at the left and the courtyard vessels and house remain visible. Krishna's exposed skin is now visibly deep indigo-blue rather than the lavender cast recorded for v002. His yellow wrap and the people, cows and courtyard retain the prior composition. The 15×15 px median samples are face cheek RGB (70, 71, 104), torso (61, 67, 108) and legs (53, 60, 94). Blue exceeds red by 34, 47 and 41 respectively. The face sample remains six points below the required 40-channel margin, although it improves on the captain's v002 face sample (113, 95, 124; blue-red +11). The authorized final repair round is exhausted, so v003 remains the better candidate with this measured deviation disclosed.

## Checks

- Anatomy and limbs: pass — Krishna has two infant arms and two legs; the visible hands and legs join his body without an extra limb.
- Attachment and proportions: pass — the infant is supported by Yashoda's lap and hands; no fused bodies observed.
- Faces and duplication: pass — the faces in the foreground group remain distinct; no accidental duplicate figure observed.
- Frame edges: pass — the gathered people, cows and visible extremities remain inside the frame.
- Text and artifacts: pass — no readable text, signature-like mark, logo or watermark observed at native size or in the enlarged crop.
- Scene and style: needs-fix — Krishna's torso and legs meet the requested channel margin, but the measured face cheek has blue-red +34, below the explicit +40 requirement.

## Context hashes

- `art/bible/series.json` — `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d041.json` — `6eaba8a5f6ed259e7ac84661bb162517907fc830ecc93caccbdbcb52ff451061`
- `art/bible/characters/infant-krishna/character.json` — `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`
- `art/bible/characters/nandagopan/character.json` — `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`
- `art/bible/characters/yashoda/character.json` — `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d`
- `art/bible/characters/gopas/character.json` — `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`
- `art/bible/characters/gopikas/character.json` — `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`

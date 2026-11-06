# D040 S005 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Putana takes Krishna as the gopis wonder
- Selected native PNG: `artifacts/d040/s005/landscape/v001/candidate.png` (v001), SHA-256 `b7ba31c30edef2b32bf625cdd2d6d09d1052be9347ed513df1507faeac2c6f7d` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d014-production/artifacts/d040/s005/landscape/v001/candidate.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T07:32:11Z and 2026-11-06T07:32:28Z; re-inspected against the final putana contract between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d040/s005/landscape/v001/review.md`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d040/s005/landscape/v001/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d040/review-evidence/managed-v001/s005-v001-nw.png`: region `836x471+0+0`, SHA-256 `e22581b7c28e68b5913b542908fd76aa1db3e22ea2ba0bedcc52153a6bc741e3`, opened between 2026-11-06T07:32:11Z and 2026-11-06T07:32:28Z
  - `artifacts/d040/review-evidence/managed-v001/s005-v001-ne.png`: region `836x471+836+0`, SHA-256 `a09b4ce1e046ee7572f56a0721bc9159327c3e3427d21a2081d9e9469b13718a`, opened between 2026-11-06T07:32:11Z and 2026-11-06T07:32:28Z
  - `artifacts/d040/review-evidence/managed-v001/s005-v001-sw.png`: region `836x470+0+471`, SHA-256 `7ae74efd655517d42b56b429461057febb443ff12613ff0f708ea2aee6d394d8`, opened between 2026-11-06T07:32:11Z and 2026-11-06T07:32:28Z
  - `artifacts/d040/review-evidence/managed-v001/s005-v001-se.png`: region `836x470+836+471`, SHA-256 `c6640e82bf12e979d725dd85f50c48e84911fc7e45fdba629d2055ac5a7bedff`, opened between 2026-11-06T07:32:11Z and 2026-11-06T07:32:28Z
  - `artifacts/d040/review-evidence/managed-v001/s005-v001-hold-x2.5.png`: region `320x300+480+180 then 250% Lanczos`, SHA-256 `ad8b7e2ca739b82f9810a956bf38ee9691c47762148fa001e352ee8fc806d18d`, opened 2026-11-06T07:32:28Z

## References opened and hashed

- Source reference: `intake/D040/005.jpg` (SHA-256 `38486827f4c5e9360763e73b0e226d211df8113f6a8d83695497b473a1824de3`), opened full-frame immediately before the candidate
- Caption: `intake/D040/photo-captions.txt#005` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `1535781f2295007c95583ba8765e446b7556f3c49823190f1c7ecc205eef42ac`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/putana/character.json` (SHA-256 `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- Comparison image: `artifacts/d040/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), infant identity anchor (opened full-frame 2026-11-06T07:35:05Z-07:35:19Z)
- Comparison image: `artifacts/d040/s004/landscape/v001/candidate.png` (SHA-256 `b9f9abe41106e04f44d1baabb86cdbf1431ee03cde49683781a5e8640fec533d`), Putana disguise continuity (selected S004 v001)

## Source and story

intake/D040/005.jpg shows the veiled woman sitting beside a cradle reaching toward the blue infant. The candidate shows the disguised Putana kneeling on a mat and lifting the infant high in both hands, while two seated gopis at right exchange puzzled looks.

## Anatomy basis

Two adult gopikas, one adult woman (Putana in disguise) and one two-armed infant Krishna. One cow in the background.

## Observations

- Limbs, hands, feet and fingers (pass): Putana lifts the infant with both hands: one hand's fingers wrap his right side at the back, and the other is tucked under his left arm, partly hidden by his torso. The infant reaches forward with two open hands, each with four fingers and a thumb; both feet show toes. The green-sari gopika touches her chin with one finger and rests her other hand on her knee; the right gopika gestures with an open hand and rests the other on her lap.
- Attachment and proportions (pass): Both of Putana's forearms run continuously from bangles to hands. The infant has exactly two arms and two legs with soft infant proportions. The gopis' arms are continuous.
- Faces (pass): Putana: same oval face, maang-tikka, bindi, white flowers and round gold earring as S004, with a soft smile up at the child. Infant: namam, almond eyes, short curls and peacock feather, matching the v004 anchor. Gopis: one with flowers in a bun and a red bindi, one with a large bun and a wondering gaze.
- Duplication and fusion (pass): One Putana, one infant and two distinct gopis; no Yashoda clone.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows Putana taking Krishna while the gopis wonder who she is. Putana's maroon gold-dotted sari, cream veil and long loose hair match S004 and the putana contract. The infant's deep indigo skin, muted yellow cloth and feather follow infant-krishna and the anchor. The gopis wear simple village saris, per the gopikas contract. The right gopika's maroon sari has small gold dots like Putana's, but she has no veil, wears her hair in a bun and an orange blouse, and keeps a separate face, so the two do not merge.

## Defects

- None observed.

## Limitations

- Putana's second lifting hand is mostly hidden under the infant's arm; the visible part is continuous with its forearm.
- Re-opened against the final putana contract between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

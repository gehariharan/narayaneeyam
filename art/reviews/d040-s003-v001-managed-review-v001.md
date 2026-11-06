# D040 S003 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Vasudeva warns Nanda to return quickly
- Selected native PNG: `artifacts/d040/s003/landscape/v001/candidate.png` (v001), SHA-256 `a183bbae25a1a65ea713fc8d9887604c847524d53e51e6f0c3f3eb40421e551a` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d014-production/artifacts/d040/s003/landscape/v001/candidate.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T07:31:49Z and 2026-11-06T07:32:00Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d040/s003/landscape/v001/review.md`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d040/s003/landscape/v001/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d040/review-evidence/managed-v001/s003-v001-nw.png`: region `836x471+0+0`, SHA-256 `cee3bdac0be7e615fbab5298d23e21c75e51448ee8ea72d332e38217cda34598`, opened between 2026-11-06T07:31:49Z and 2026-11-06T07:32:00Z
  - `artifacts/d040/review-evidence/managed-v001/s003-v001-ne.png`: region `836x471+836+0`, SHA-256 `36511c579ac714c54dcebdba3c1b59cb932020692d6cbfe214ddd0856fa5a8da`, opened between 2026-11-06T07:31:49Z and 2026-11-06T07:32:00Z
  - `artifacts/d040/review-evidence/managed-v001/s003-v001-sw.png`: region `836x470+0+471`, SHA-256 `66f8019385c4ebf1667d646e97481e4df951daa5860a68b3a7f579748038c02e`, opened between 2026-11-06T07:31:49Z and 2026-11-06T07:32:00Z
  - `artifacts/d040/review-evidence/managed-v001/s003-v001-se.png`: region `836x470+836+471`, SHA-256 `0623db251a350bb43baa6d51e792554512ef2a6d902d6ea720be1b0d5a8ef294`, opened between 2026-11-06T07:31:49Z and 2026-11-06T07:32:00Z

## References opened and hashed

- Source reference: `intake/D040/003.jpg` (SHA-256 `5352394a78bdbeabe0b976f712e130678a0eae0c1b75f501bab6489f9e8c5dd4`), opened full-frame immediately before the candidate
- Caption: `intake/D040/photo-captions.txt#003` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `1535781f2295007c95583ba8765e446b7556f3c49823190f1c7ecc205eef42ac`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/nandagopan/character.json` (SHA-256 `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`)
- Contract: `art/bible/characters/vasudeva/character.json` (SHA-256 `b48f743c0d11b884adecf7f61e0d33d26f5f58a5b58dbb21197c1469c54d0ec8`)
- Comparison image: `artifacts/d040/s001/landscape/v001/candidate.png` (SHA-256 `de2a53ef94bbe24f812535506d2672b4623e67a618d54249340bda29321b4df1`), Nanda/Vasudeva continuity (selected S001 v001)

## Source and story

intake/D040/003.jpg shows Vasudeva raising a hand toward the turbaned Nanda in a palace hall. The candidate places Vasudeva at a temple doorway raising a cautioning palm, while Nanda, carrying a travel bundle, glances back as he hurries down a road toward distant Gokula huts under dark clouds.

## Anatomy basis

Two adult men: Vasudeva (left) and Nanda (right, walking away).

## Observations

- Limbs, hands, feet and fingers (pass): Vasudeva raises his right palm with four fingers and a thumb, and holds his left hand open at his waist. Nanda grips the bundle strap at his shoulder with one hand; his other arm swings back with an open hand. Vasudeva stands on two feet; Nanda strides with one heel lifted, and both feet show toes.
- Attachment and proportions (pass): Nanda's striding legs are continuous under the dhoti, and the bundle strap crosses his chest without cutting his arm. Vasudeva's raised arm is proportionate.
- Faces (pass): Vasudeva: tilak, beard, long dark hair, earnest open-mouthed warning. Nanda: moustache, cream turban, raised worried brows as he looks back.
- Duplication and fusion (pass): One Vasudeva and one Nanda; the distant huts are empty.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows the warning and Nanda's hasty departure. Grey clouds over the road give a restrained sense of unease, with no invented supernatural event. Both men keep their S001/S002 identities and contract clothing; no Kamsa appears.

## Defects

- None observed.

## Limitations

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

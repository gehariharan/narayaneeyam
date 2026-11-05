# D014 S003 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Narayana appears to Kardama on Garuda
- Selected native PNG: `artifacts/d014/s003/landscape/candidate-v001.png` (v001), SHA-256 `997a2c1226d00261c7a4f325dd6aab5e15566fc28a5ae676a3e60c0c92457bed` (recomputed from the D014 source checkout), 1672 × 941
- Inspected at: 2026-11-05T11:43:17Z (detail views); the full-frame open came first, between 2026-11-05T11:43:02Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d014/s003/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence under the release worktree, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v001/s003-v001-detail-narayana-arms.png`: region `480x420+960+0`, SHA-256 `c075fad8ae2d10114eff551c125d67d7d9ca95e064386fae42b209fce6ccfe9e`, opened after creation at 2026-11-05T11:43:17Z
  - `artifacts/d014/review-evidence/managed-v001/s003-v001-detail-legs-garuda-talons.png`: region `600x380+960+300`, SHA-256 `917efe7e6a4c1614c3e6afbdcd3367852132c31b32994762760c9ebee69c4482`, opened after creation at 2026-11-05T11:43:17Z
  - `artifacts/d014/review-evidence/managed-v001/s003-v001-detail-kardama.png`: region `480x540+120+400`, SHA-256 `85dbc8532566272b533bdc7ce25351616c39ac98eb36d4c97001f2e96ab0324f`, opened after creation at 2026-11-05T11:43:17Z

## References opened and hashed

- Source reference: `intake/D014/003.jpg` (SHA-256 `dbe7e238a3331eec6d0fca31df6381b1f497681b397bae13ddc7cf3b56e24f8b`), opened full-frame immediately before the candidate
- Caption: `intake/D014/photo-captions.txt#003` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), opened full-frame
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`), opened full-frame
- Character anchor (guruvayurappan/narayana): `artifacts/d014/references/characters/guruvayurappan-approved-v001.png` (SHA-256 `d93b3d0e53e52bd05bcc1a51b33073816592a3c83e19c14c65b50ec7cf232b4b`), opened full-frame

## Source and story

intake/D014/003.jpg shows a four-armed Vishnu on a golden eagle-Garuda flying upper right, with the young ascetic meditating under a tree at lower left beside a hut, river and mountains. The candidate preserves this layout as a matte mural: Kardama under the tree at lower left looks upward in anjali, the hut is mid-left, and Garuda carries Narayana upper right above the river and hills. Narayana holds a pink lotus as the caption and plan require.

## Anatomy basis

Kardama has ordinary two-armed anatomy. Narayana has exactly four arms by plan, each attached at the shoulders. Garuda is one eagle-form bird with two wings and two taloned legs.

## Observations

- Limbs, hands, feet and fingers (pass): Narayana's upper viewer-left hand balances the chakra on a raised finger, his lower viewer-left hand is in abhaya, his lower viewer-right hand holds the lotus stem and his upper viewer-right hand holds the conch. Each hand has a thumb and fingers. One blue foot with an anklet and five toes hangs below; the other leg folds across Garuda's back. Kardama's two hands are joined; his feet are under the robe. Garuda shows two sets of talons.
- Attachment and proportions (pass): All four divine arms meet the shoulders under gold armlets with no floating limb. Kardama's visible arm runs shoulder-to-hands, and Garuda's wings join its back.
- Faces (pass): Narayana's smiling blue face, peacock-feather crown, earrings and tilak follow the approved Guruvayurappan identity without copying the sheet's framing. Kardama's youthful clean-shaven face matches S002, and Garuda has one eagle head.
- Duplication and fusion (pass): One Narayana, one Garuda and one Kardama; no extra or merged figures.
- Text and marks (pass): None observed in the full frame or crops.
- Scene, iconography, composition and style (pass): The lower-left to upper-right diagonal follows the plan. The halo is a modest disc, not oversized, and the flat matte surface has no reflective gold or beams.

## Defects

- None observed.

## Limitations

- The plan calls Kardama "kneeling", but he sits cross-legged with upturned gaze. The reverent posture is preserved.
- Narayana's blue reads mid-deep slate rather than very dark rain-cloud blue. This is consistent with the character sheet's "deep blue".
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

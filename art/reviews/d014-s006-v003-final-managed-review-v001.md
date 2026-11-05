# D014 S006 v003 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Devahuti's devoted service after marriage
- Selected native PNG: `artifacts/d014/s006/landscape/candidate-v003.png` (v003), SHA-256 `d3c0376a82c5a4218a620bc3b8ae7e1df0bdaf19201bf032c173cd5fe626baa0` (recomputed from the D014 source checkout), 1672 × 941
- Inspected at: 2026-11-05T11:44:12Z (detail views); the full-frame open came first, between 2026-11-05T11:43:56Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d014/s006/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence under the release worktree, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v001/s006-v003-detail-kardama-face-hands.png`: region `560x500+240+100`, SHA-256 `9998244cda9093a6e57618bac1d019b9377bd3cd757744e10feb0fede682c72a`, opened after creation at 2026-11-05T11:44:12Z
  - `artifacts/d014/review-evidence/managed-v001/s006-v003-detail-kardama-legs.png`: region `700x300+160+620`, SHA-256 `8a7136a7171431dd71b4d7f51897c62b0a327175b31f9a73b5bba3fd072e7d37`, opened after creation at 2026-11-05T11:44:12Z
  - `artifacts/d014/review-evidence/managed-v001/s006-v003-detail-devahuti-vessel.png`: region `700x700+940+220`, SHA-256 `abdd3b3e014e9f982704a6b4c79dff3f4cf469d02ad6936910674dd29e575c22`, opened after creation at 2026-11-05T11:44:12Z

## References opened and hashed

- Source reference: `intake/D014/006.jpg` (SHA-256 `2ef2126c520f22477c1bd9da6197d1c4bd54a59362ce81ed639a05ea515896be`), opened full-frame immediately before the candidate
- Caption: `intake/D014/photo-captions.txt#006` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), opened full-frame
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`), opened full-frame

## Source and story

intake/D014/006.jpg is a diptych: the left panel is a fire-wedding with a bearded groom and priests, the right a young ascetic receiving a cup from a woman. Following the reference-map note, the candidate is one continuous scene from the right-panel service idea. Kardama sits on a woven mat in anjali before a small shrine holding a lotus, and Devahuti kneels opposite offering a small clay pot. There is no panel split.

## Anatomy basis

Exactly two ordinary humans, Kardama and Devahuti, each with one head and two arms; no deity appears.

## Observations

- Limbs, hands, feet and fingers (pass): Kardama's two hands press together in anjali; his near arm carries a bead armlet and the far forearm meets at the palms. Devahuti cradles the pot in two hands with bangles and distinct fingers. Both sit with legs folded under cloth, so their feet are covered.
- Attachment and proportions (pass): Shoulder-to-hand continuity is clear for both. Kardama's cross-legged lap is one mass, and Devahuti's kneeling sari drapes one body.
- Faces (pass): Two distinct profiles: Kardama clean-shaven with eyes closed, Devahuti smiling with eyes open.
- Duplication and fusion (pass): One couple with no duplicate and no fusion.
- Text and marks (pass): None; the shrine holds only a lotus.
- Scene, iconography, composition and style (pass): Worship and service in one hermitage moment with warm mutual regard and no wedding spectacle. Matte ochre and maroon treatment with firm contours matches the anchors.

## Defects

- None observed.

## Limitations

- Both people's feet are covered by cloth, so foot anatomy could not be assessed.
- Kardama has no tilak here, unlike S002-S004, but his clean-shaven face and bun match S007/S008. Devahuti's maroon sari differs from her S005 yellow sari; costume changes across years are plausible.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

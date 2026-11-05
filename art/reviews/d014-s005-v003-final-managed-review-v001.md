# D014 S005 v003 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Manu's family visits Kardama
- Selected native PNG: `artifacts/d014/s005/landscape/candidate-v003.png` (v003), SHA-256 `68854f782c4728c1bdee59fc5928332bd1454542bb21860049d61d764861cc39` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/d014-production/native-repairs-current-run/S005-v003/native-output.png`), 1672 × 941
- Generation provenance: `artifacts/d014/s005/landscape/generation-v003.json` (prompt `artifacts/d014/s005/prompts/landscape-v003.md`, SHA-256 `f80af35db26b865927ad1135ff86728dc7ca8b935ca245df7f5e696f5da270fc`)
- Supersedes: v002. Its managed report `art/reviews/d014-s005-v002-final-managed-review-v001.md` (SHA-256 `145f8e94d48edb22ee2acc90a4e327520e37efa46db46340f39fc472de1ca9d3`) and record remain unchanged as history.
- Inspected at: 2026-11-05T12:18:35Z (detail views); the full-frame open came first, between 2026-11-05T12:18:29Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Upstream self-review was not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d014/s005/landscape/candidate-v003.png`, the entire frame opened as one image.
- Native-resolution detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v002/s005-v003-detail-kardama.png`: region `520x941+920+0`, SHA-256 `308d58a8b7bb4975d791c40d7b07e053120fc67c7457e994d072e5468d88aa09`, opened after creation at 2026-11-05T12:18:35Z
  - `artifacts/d014/review-evidence/managed-v002/s005-v003-detail-visitors-faces-hands.png`: region `760x420+40+40`, SHA-256 `f303c1d8e0d701e4fd1a86346565ac1020f4dd1a19022ed9dd9ed621d9b324c1`, opened after creation at 2026-11-05T12:18:35Z
  - `artifacts/d014/review-evidence/managed-v002/s005-v003-detail-visitors-feet.png`: region `760x260+40+680`, SHA-256 `9967905e0f6f253d03d067f866dccc9b63d902afa57d61ec4be3723b5eca3b7e`, opened after creation at 2026-11-05T12:18:35Z

## References opened and hashed

- Source reference: `intake/D014/005.jpg` (SHA-256 `4bc89c261e960f40e2cbbe5e9f8398f65af988312e26e84a468259d4dde06626`), opened full-frame in this run's first managed pass and re-read for this comparison
- Caption: `intake/D014/photo-captions.txt#005` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`)
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`)

## Source and story

intake/D014/005.jpg is visually ambiguous: a crowned prince and a lady before a bearded four-armed figure. The plan governs, and it calls for a four-person arrival at Kardama's hermitage. v003 keeps v002's composition: crowned, grey-bearded Manu, Shatarupa in a maroon sari and Devahuti in a yellow sari with jasmine stand in anjali at left, and Kardama greets them with open palms at right beside the tree and thatched hut. The change from v002 is Kardama himself: he is now youthful and clean-shaven, with long dark hair in a bead-bound top-knot, matching his appearance in S004, S006, S007 and S008. Manu keeps his own distinct beard.

## Anatomy basis

Exactly four ordinary humans: Manu, Shatarupa, Devahuti and Kardama, each with one head and two arms.

## Observations

- Limbs, hands, feet and fingers (pass): Each visitor has two forearms ending in joined palms. Kardama shows two open hands, each with a thumb and four fingers and a bead bracelet. All eight feet are visible, two per person, each with five toes.
- Attachment and proportions (pass): Arms meet the shoulders under armlets or cloth folds. The three overlapping visitors remain separable bodies, and Kardama's arms run continuously from the shoulders.
- Faces (pass): Four distinct faces. Manu is crowned and grey-bearded; Shatarupa and Devahuti differ in age, hair ornament and jewelry. Kardama is a clean-shaven youthful profile, consistent with his other D014 appearances.
- Duplication and fusion (pass): Exactly four people with no fused bodies, and no Narada, deity or fifth figure.
- Text and marks (pass): No lettering, signature or text-like marks in the full frame or crops.
- Scene, iconography, composition and style (pass): A modest forest hermitage meeting as planned. The flat ochre, olive and maroon fields and firm contours match the D001 S004/S008 anchors, and there is no gloss or cinematic glow. Kardama's chapter identity is now continuous.

## Defects

- None observed.

## Limitations

- There is no Kardama character sheet, so continuity was judged against his appearances in S002-S004 and S006-S008.
- Kardama has no tilak here, the same as in S006-S008.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes were edited and no approval manifest was changed. Human editorial and art approval remain pending.

# D014 S008 v005 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Kardama stays for Kapila's birth
- Selected native PNG: `artifacts/d014/s008/landscape/candidate-v005.png` (v005), SHA-256 `e9edc1e054b94f2ce56419bce85bd7ce6f29e32d9c7ba8d60ada0836241a31e0` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/d014-production/native-helper-t6-s008/v005/candidate.png`), 1672 × 941
- Generation provenance: `artifacts/d014/s008/landscape/generation-v005.json` (prompt `artifacts/d014/s008/prompts/landscape-v005.md`, SHA-256 `d19250f0443b9ee5aba367a1bbc4dcb1c143ef9ce25a4cf13ad5cce13e54d1c5`)
- Supersedes: v002. Its managed report `art/reviews/d014-s008-v002-final-managed-review-v001.md` (SHA-256 `3e1bf9b9b6196d1b3bced9dfa82251aa05083150263d794a30ad0a64cbe983f8`) and record remain unchanged as history.
- Inspected at: 2026-11-05T12:18:47Z (detail views); the full-frame open came first, between 2026-11-05T12:18:35Z and the first detail crop
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Upstream self-review was not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d014/s008/landscape/candidate-v005.png`, the entire frame opened as one image.
- Native-resolution detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v002/s008-v005-detail-back-row-faces.png`: region `820x260+240+170`, SHA-256 `36273d24875c4231060ba571189e6bb9321ebf8b55a177f38e7e4df41e9fd905`, opened after creation at 2026-11-05T12:18:47Z
  - `artifacts/d014/review-evidence/managed-v002/s008-v005-detail-front-row-faces.png`: region `820x260+300+410`, SHA-256 `1d7c993cf41b74051aca7c20c4e11e729e068da40decc709d0619201bf2d613f`, opened after creation at 2026-11-05T12:18:47Z
  - `artifacts/d014/review-evidence/managed-v002/s008-v005-detail-front-row-hands.png`: region `860x340+300+600`, SHA-256 `f83398813a3d2a70d43badde01a9adbf90a1daa023999ea1ae0712c7b71fe4cd`, opened after creation at 2026-11-05T12:18:47Z
  - `artifacts/d014/review-evidence/managed-v002/s008-v005-detail-kardama.png`: region `420x800+1080+40`, SHA-256 `3769cd771b6052a35c0697e534498363a84a332b09bb786b2a58e2dc58a812b4`, opened after creation at 2026-11-05T12:18:47Z
  - `artifacts/d014/review-evidence/managed-v002/s008-v005-detail-devahuti.png`: region `360x560+0+260`, SHA-256 `87793e9d6c405f877fa0fc23ebd494e5da87c9915f715a6af710a80458777a5e`, opened after creation at 2026-11-05T12:18:47Z
  - `artifacts/d014/review-evidence/managed-v002/s008-v005-detail-back4-face-native.png`: region `160x150+720+195`, SHA-256 `68a275d7c63c6eba0d8f7297a543d33f6edc8d196f12a1c90a4975a13550786a`, opened after creation at 2026-11-05T12:18:57Z
  - `artifacts/d014/review-evidence/managed-v002/s008-v005-detail-back4-face-x4.png`: region `160x150+720+195 enlarged 4x (point filter)`, SHA-256 `a3534bfd236267cfe53628cc6168b791beb704af90070754ddbd3e3374528939`, opened after creation at 2026-11-05T12:18:57Z

## References opened and hashed

- Source reference: `intake/D014/008.jpg` (SHA-256 `59e63f58878e15bed79c9c60258c9a4a72648aa3eedd264d2cacfb64faa8f305`), opened full-frame in this run's first managed pass and re-read for this comparison
- Caption: `intake/D014/photo-captions.txt#008` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`)
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`)

## Source and story

intake/D014/008.jpg shows a group of women around a seated central lady in a garden, used only as the group-of-daughters cue. v005 keeps v002's threshold composition: Devahuti sits in anjali at the house steps at left, nine daughters sit in two rows, and Kardama stands at right with staff and bedroll, turning back from the forest path. The intended repair, varying the daughters' faces, is largely achieved: face outlines, eyes, brows and mouths now vary.

## Anatomy basis

Eleven ordinary humans: Devahuti, nine daughters (five back, four front) and Kardama, each with one head and two arms where visible.

## Observations

- Limbs, hands, feet and fingers (pass): The four front-row daughters each rest two hands on their laps with visible fingers and bangles. Back-row arms are visible to the elbow, with hands behind the front row. Devahuti's two hands are joined. Kardama has one open hand and one hand on the staff, and two feet with toes.
- Attachment and proportions (pass): Shoulders carry armlets and forearms continue to the hands, with no detached or extra limbs.
- Faces (needs-fix): The faces now vary individually, unlike v002's repeated template. However, the fourth back-row daughter (maroon sari, crop region 160x150+720+195) has a drawn moustache line above the lip and a stubble beard along the chin and jaw. In the 4x enlargement this is unambiguous, and she reads as a young man. The plan requires nine distinct young women.
- Duplication and fusion (pass): I counted nine separate daughter bodies (five back, four front), Devahuti separate at left and Kardama at right, for eleven people with no fusion.
- Text and marks (pass): None observed.
- Scene, iconography, composition and style (pass): Kardama is the youthful clean-shaven figure from v002 with only line-level redraw, and the threshold, poses, clothing and matte mural style are intact.

## Defects

- D014-S008-DAUGHTER-FACIAL-HAIR-V005 (needs-fix, medium, high confidence): The fourth back-row daughter (maroon sari) is drawn with a moustache and chin/jaw stubble, so she reads as male rather than one of nine young women. Repair: Produce a fresh S008 version (or targeted native edit) that removes the facial hair from this daughter while keeping the nine individually varied faces, the counts and the composition, then re-run the managed individual review.

## Limitations

- The upstream helper review (native-helper-t6-s008/v005/review.md) recorded a pass. It did not note this facial hair and was treated only as a handoff.
- Back-row hands are hidden behind the front row.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes were edited and no approval manifest was changed. Human editorial and art approval remain pending.

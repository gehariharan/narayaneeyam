# D014 S008 v002 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Kardama stays for Kapila's birth
- Selected native PNG: `artifacts/d014/s008/landscape/candidate-v002.png` (v002), SHA-256 `6b11fea7c82592a46077f194c437a4fab555473fa1537a9b1531fae9ec54d138` (recomputed from the D014 source checkout), 1672 × 941
- Inspected at: 2026-11-05T11:44:43Z (detail views); the full-frame open came first, between 2026-11-05T11:44:28Z and the first detail crop
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d014/s008/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence under the release worktree, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v001/s008-v002-detail-daughters-faces.png`: region `800x420+250+180`, SHA-256 `37542c9183cbddeee4fab3b901efc97e8735779e9c85f85d256a02584ef2f0cf`, opened after creation at 2026-11-05T11:44:43Z
  - `artifacts/d014/review-evidence/managed-v001/s008-v002-detail-front-row-hands.png`: region `860x340+300+600`, SHA-256 `3670516a7fabd5c0486a42bf20d17508d3f2a15f82fd5c3aa8aa5e270523753d`, opened after creation at 2026-11-05T11:44:43Z
  - `artifacts/d014/review-evidence/managed-v001/s008-v002-detail-kardama.png`: region `420x800+1080+40`, SHA-256 `ce2e5beb6157d5ad243edf5b97202cdae77403a4070869514ba739754982c481`, opened after creation at 2026-11-05T11:44:43Z

## References opened and hashed

- Source reference: `intake/D014/008.jpg` (SHA-256 `59e63f58878e15bed79c9c60258c9a4a72648aa3eedd264d2cacfb64faa8f305`), opened full-frame immediately before the candidate
- Caption: `intake/D014/photo-captions.txt#008` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), opened full-frame
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`), opened full-frame

## Source and story

intake/D014/008.jpg shows a group of richly dressed women around a seated central lady in a garden, used as the group-of-daughters cue only. The candidate shows a home-and-forest threshold. Devahuti sits at the house steps at left in anjali; nine daughters sit in two rows; Kardama stands at right with a staff and bedroll, gesturing back toward the family, with a forest path behind him.

## Anatomy basis

Eleven ordinary humans: Devahuti, nine daughters (five in the back row, four in front) and Kardama, each with one head and two arms where visible.

## Observations

- Limbs, hands, feet and fingers (pass): The four front-row daughters each rest two hands on their laps; back-row arms are visible to the elbow, with hands behind the front row. Devahuti's two hands are joined. Kardama has one open hand and one hand gripping the staff, and two feet with toes. The women's feet are under their saris.
- Attachment and proportions (pass): Shoulders carry armlets and forearms continue to the hands; no detached or extra limbs.
- Faces (needs-fix): All nine daughters share one repeated drawn face: the same three-quarter profile, eye shape, smile, center-parted hairline, jasmine cluster on the same side and round earring. They differ only in sari colour and slight head tilt. The plan requires "nine distinct young women" and forbids "merged or repeated faces".
- Duplication and fusion (pass): I counted exactly nine separate daughter bodies with no fused bodies; the repeated-face concern is recorded under faces.
- Text and marks (pass): None observed.
- Scene, iconography, composition and style (pass): Kardama turns back from the path, as planned; he is youthful and clean-shaven, consistent with S006/S007. The matte style matches the anchors.

## Defects

- D014-S008-REPEATED-DAUGHTER-FACES-V002 (needs-fix, medium, high confidence): The nine daughters are rendered with one repeated face template, differing only by sari colour and head tilt. Repair: Generate a fresh S008 version with nine individually differentiated adult faces (features, hair ornaments, expressions and head angles), keeping the exact count, two-row grouping and threshold composition, then re-run the managed individual review.

## Limitations

- Back-row daughters' hands are hidden behind the front row.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

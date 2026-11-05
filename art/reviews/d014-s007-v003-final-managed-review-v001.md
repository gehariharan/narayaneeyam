# D014 S007 v003 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Kardama and Devahuti in the aerial palace
- Selected native PNG: `artifacts/d014/s007/landscape/candidate-v003.png` (v003), SHA-256 `59407aafa8165ee874a98513553009a5ae0f03438819efd4e94da31bcc94427e` (recomputed from the D014 source checkout), 1672 × 941
- Inspected at: 2026-11-05T11:44:28Z (detail views); the full-frame open came first, between 2026-11-05T11:44:12Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d014/s007/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence under the release worktree, reproducible from the geometry):
  - `artifacts/d014/review-evidence/managed-v001/s007-v003-detail-attendants.png`: region `500x240+120+270`, SHA-256 `449ead551d88a32804d6f8a1475667e569feb28da874636e69434d0ae864f90e`, opened after creation at 2026-11-05T11:44:28Z
  - `artifacts/d014/review-evidence/managed-v001/s007-v003-detail-couple.png`: region `640x360+680+190`, SHA-256 `b45949e13ef599c176fde2fa4d886aeef2619f93cd3fd324c4f3cd96cead70a4`, opened after creation at 2026-11-05T11:44:28Z

## References opened and hashed

- Source reference: `intake/D014/007.jpg` (SHA-256 `df7eb744eebff23cfd17679b988a22a1b2835f1db8222fb72f1e1d265ef41151`), opened full-frame immediately before the candidate
- Caption: `intake/D014/photo-captions.txt#007` (file SHA-256 `086ba3dfb871f547d3a0828e8aa12886e019f047531699cf2bcdbeb2f96731f3`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d014.json` (SHA-256 `4f74ee8e7c195548fc56ae795cd20b6fe1252a0bdeb611d599978c268257f286`)
- Contract: `content/daskams/d014.json` (SHA-256 `fdcde27e7506f0a8bb8b34db2c31609d6380ff17d1ffaa2d4fb5a3fa4d00ebc8`)
- Contract: `content/sources/d014/reference-map.json` (SHA-256 `7669971a6a38a8d279e89c36854d7758c1478fa87e636f95824fe972225895aa`)
- Contract: `content/sources/d014/intake-manifest.json` (SHA-256 `b9fa6dd1bfbbef7e180447aca72297a54df29b41bd9f5353d22b22bff9ca2c36`)
- Style anchor: `artifacts/d014/references/style/d001-s004-matte-master.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), opened full-frame
- Style anchor: `artifacts/d014/references/style/d001-s008-matte-master.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`), opened full-frame

## Source and story

intake/D014/007.jpg shows a couple in a tropical garden beneath a domed palace floating in a golden sky. The candidate moves the couple into the sky palace: an ornate boat-hulled vimana with a bird prow and canopied pavilions flies above a forest. Kardama and Devahuti converse in the central open pavilion, and four attendants stand in a separate rear balcony.

## Anatomy basis

Six ordinary humans: the couple plus exactly four women attendants, each with one head; no deity attributes on Kardama.

## Observations

- Limbs, hands, feet and fingers (pass): Kardama gestures with one hand and rests the other on his knee; Devahuti rests her chin on one hand with the other on her lap. Attendant 1 joins both hands, attendant 2 holds a lotus with two hands, attendant 3 raises one open hand, and attendant 4 holds a palm fan in one hand. The balcony rails hide all feet.
- Attachment and proportions (pass): All visible arms meet shoulders; the couple's seated bodies read clearly against the cushions.
- Faces (pass): Six distinct faces, each with one head. Kardama is warm brown and clean-shaven, without crown, blue skin or peacock feather, as the plan requires.
- Duplication and fusion (pass): Exactly 2 + 4 people with no extra Kardama or Devahuti, and no tiny figures hidden in niches.
- Text and marks (pass): None observed.
- Scene, iconography, composition and style (pass): The vimana is mythic carved architecture, not an aircraft. The clouds are stylised and the palette matte without metallic shine.

## Defects

- None observed.

## Limitations

- Attendants 3 and 4 each show only one hand; their other arms are plausibly hidden behind neighbouring bodies and the rail but cannot be confirmed.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

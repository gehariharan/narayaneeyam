# D031 S008 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Bali halts the battle
- Selected native PNG: `artifacts/d031/s008/landscape/candidate-v001.png` (v001), SHA-256 `d743c38fa9d51532165c92f43968fdbfb4804d2f79de52824524386855c2debf` (recomputed after a byte-exact copy from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/artifacts/d031/s008/landscape/candidate-v001.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-checks and generation provenance were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s008/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v001/s008-v001-nw.png`: region `836x471+0+0`, SHA-256 `9954c9ed09870141aa362e2315612d9c8a47be40789762532d6207a6ff60b6a0`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s008-v001-ne.png`: region `836x471+836+0`, SHA-256 `a1024300db196b3d029cebbdd5f232fda04e96418b10baa2031acde6aac2b8da`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s008-v001-sw.png`: region `836x470+0+471`, SHA-256 `c635011024f3a2a1f90b538225e0207aa8e3cf8403ae938829a6a34630fca8af`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s008-v001-se.png`: region `836x470+836+471`, SHA-256 `413cb5f94421578b1c9811e2e694a5f2d4c61d2860bdccf13dc94d280759922c`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z

## References opened and hashed

- Source reference: `intake/D031/008.jpg` (SHA-256 `e8c1faaec301762933853da69e60ad264a674b688c011c1aefcdb5f7a8428e17`), opened full-frame immediately before the candidate; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#8` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-asura-host/character.json` (SHA-256 `e9bbba0eb93760a011c87f45acb3d8ab25d7c48fc7389d1cce16ebf622b90faa`)
- Contract: `art/bible/characters/d031-deva-host/character.json` (SHA-256 `17ddf8811072553394809fd699280aa6c3fcfc925a10f3d2789c75fafc1b2a5a`)

## Anatomy basis

Bali standing, two Asura followers, about ten Deva soldiers, four kneeling devotees and a small two-armed Trivikrama on a globe.

## Observations

- Limbs, hands, feet and fingers (pass): Bali raises his right palm to halt the Asuras and extends his left toward Trivikrama. The Asuras crouch with attached hands and feet. The devotees fold hands. Trivikrama has two arms and a raised kicking leg.
- Attachment and proportions (pass): Limbs and spears connect; no graphic injury.
- Faces (pass): Bali: crown and moustache consistent with earlier frames. The two foreground Asuras are distinct.
- Duplication and fusion (needs-fix): The background Deva soldiers repeat the same face, tall crown, shield and pose in rows of six or more; the deva-host contract forbids cloned figures.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Bali turns the Asuras from combat and points to Trivikrama, matching the stanza.

## Defects

- Cloned Deva soldiers in the background rows.

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending. This version needs a new native candidate before it can be cleared; a fresh full inspection is required for any replacement.

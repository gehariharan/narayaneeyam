# D031 S003 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Bali offers the whole earth
- Selected native PNG: `artifacts/d031/s003/landscape/candidate-v001.png` (v001), SHA-256 `ab0fb08919f4e5e6191921a43febb5be17f9ab4f7380bdecfa2f839819198ae5` (recomputed after a byte-exact copy from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/artifacts/d031/s003/landscape/candidate-v001.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-checks and generation provenance were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s003/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v001/s003-v001-nw.png`: region `836x471+0+0`, SHA-256 `79a5cc12cc11a0ed63b1d6e45e0d01ef076683d94bd050aba0b4d8de2d7b91a1`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s003-v001-ne.png`: region `836x471+836+0`, SHA-256 `93c1fa1fa9fd929be4fb4c6bbc65f7bfb96b743328dfe6d261ab8c001459e93f`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s003-v001-sw.png`: region `836x470+0+471`, SHA-256 `04188d16dbed86c67d927fca7e1f3ccd9890c5ff6bc05aabef60821d5558a44c`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s003-v001-se.png`: region `836x470+836+471`, SHA-256 `462c2ad95a99d0aaf3f3749ac6ec5fdf10fc697056c47d9f9db791e82c9c51b4`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z

## References opened and hashed

- Source reference: `intake/D031/003.jpg` (SHA-256 `5514f5e736105c75bbaa9be2cd588a006962c34a17b08a5855799cf5a4d6aaa9`), opened full-frame immediately before the candidate; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#3` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-vamana/character.json` (SHA-256 `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229`)

## Anatomy basis

One adult king (Bali, half-kneeling) and one short youthful brahmachari (Vamana, standing).

## Observations

- Limbs, hands, feet and fingers (pass): Bali sweeps his right arm toward the horizon with an open hand and holds his left palm up at his knee. His raised knee ends in a foot with toes; the other leg folds under the dhoti. Vamana holds an open left palm forward and grips the umbrella shaft with his right; a kamandalu hangs by cords from the shaft. Two bare feet with toes.
- Attachment and proportions (pass): Bali's long gesturing arm is proportionate and attached at the shoulder. Vamana's umbrella shaft, cords and pot connect without floating.
- Faces (pass): Bali: crown, moustache, long hair, earring, confident expression matching S001/S002. Vamana: shaven head, Vaishnava namam, earring, calm attentive face.
- Duplication and fusion (pass): One Bali, one Vamana; the distant temples and trees are unpopulated.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Bali's broad gesture over a continuous landscape horizon contrasts with Vamana's quiet composure, as the brief asks. Vamana remains two-armed with sacred thread and no Krishna-only marks. Matte mural style, full bleed.

## Defects

- None observed.

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

# D031 S001 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Bali receives Vamana
- Selected native PNG: `artifacts/d031/s001/landscape/candidate-v001.png` (v001), SHA-256 `a4fb2f44f70df4da688a6e2743c7a2ab70a63a81dda1e8a950b1138565173d7f` (recomputed after a byte-exact copy from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/artifacts/d031/s001/landscape/candidate-v001.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-checks and generation provenance were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s001/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v001/s001-v001-nw.png`: region `836x471+0+0`, SHA-256 `1cddc46c243d59d1a32b2732ad9e1d59cfa0177f0d7d2c338785d83bec9fb237`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s001-v001-ne.png`: region `836x471+836+0`, SHA-256 `379e5bb725978aa0cb357c5e02b921821d6add0ee30f2eccb35ba92c333ef2e6`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s001-v001-sw.png`: region `836x470+0+471`, SHA-256 `fd2c836051e5748228051a4d42de51e205745176489254e5fe08653c1ebd5df4`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s001-v001-se.png`: region `836x470+836+471`, SHA-256 `244d39aa616f51a8ffb7a6cab964c617a8b89ceff124dcfcf1195f07eb0cf931`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z

## References opened and hashed

- Source reference: `intake/D031/001.jpg` (SHA-256 `ebd3abab9b9e2de443d2b791aca0b8e75b1da36c7dc3ca38c9213cf9ab9e6bec`), opened full-frame immediately before the candidate; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#1` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-vamana/character.json` (SHA-256 `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229`)

## Anatomy basis

One adult king (Bali, kneeling) and one short youthful brahmachari (Vamana, standing).

## Observations

- Limbs, hands, feet and fingers (pass): Bali presses both palms together with ten fingers visible and kneels with his right foot's toes on the floor; his other foot is tucked under the dhoti. Vamana's right hand is open toward the seat with a thumb and four fingers; his left hand grips the umbrella shaft. Vamana stands on two bare feet with toes.
- Attachment and proportions (pass): Both of Bali's arms join his shoulders under the armlets. Vamana's arms, legs and the floor-length umbrella shaft are continuous; his short youthful proportions are natural.
- Faces (pass): Bali: tall ochre crown, moustache, long dark hair, round earring, attentive upward gaze. Vamana: shaven head with small tuft, earring, rudraksha mala, gentle smile.
- Duplication and fusion (pass): One Bali, one Vamana and one empty seat; no repeated or fused figure.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows Bali's folded-hand welcome and the offered seat in a calm court without a retinue. Vamana is two-armed with sacred thread and umbrella and no peacock feather or flute. The single tall umbrella shaft reaching the floor doubles as his staff; there is no separate danda. Flat matte mural treatment without a separate border.

## Defects

- None observed.

## Limitations

- Vamana carries one floor-length umbrella shaft rather than a separate umbrella and staff; I read that as the combined umbrella-staff, and the human art review may prefer a distinct danda.

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

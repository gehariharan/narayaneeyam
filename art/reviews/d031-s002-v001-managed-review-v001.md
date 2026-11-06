# D031 S002 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Vamana asks for three steps
- Selected native PNG: `artifacts/d031/s002/landscape/candidate-v001.png` (v001), SHA-256 `ef2058d3b8a72b9a157f0c9d72c7af5819d5fed7fde397792ecafd9740410cb4` (recomputed after a byte-exact copy from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/artifacts/d031/s002/landscape/candidate-v001.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-checks and generation provenance were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s002/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v001/s002-v001-nw.png`: region `836x471+0+0`, SHA-256 `e3a35ce78774877e85765642002cdaee7cc5a0925b5cb1ff78f4066a39aeac2e`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s002-v001-ne.png`: region `836x471+836+0`, SHA-256 `e33f65798014e0a46d0c370951ec517037e7878151ac5a49153e357f99fe9f72`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s002-v001-sw.png`: region `836x470+0+471`, SHA-256 `8a1b1ba85b9e8dc075c85bf389f067421e74873ab7a99837ba81f7f10197af38`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z
  - `artifacts/d031/review-evidence/managed-v001/s002-v001-se.png`: region `836x470+836+471`, SHA-256 `1760718a47ff2b66640477370dae2193562cdf06315cc58c52c5addc2a75a58f`, opened between 2026-11-06T11:05:58Z and 2026-11-06T11:08:53Z

## References opened and hashed

- Source reference: `intake/D031/002.jpg` (SHA-256 `d096a9cab242fe54781230caaaf87fb04f0d622c86d8116330cc8c26eaed362d`), opened full-frame immediately before the candidate; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#2` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-vamana/character.json` (SHA-256 `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229`)

## Anatomy basis

One adult king (Bali, seated) and one short youthful brahmachari (Vamana, standing).

## Observations

- Limbs, hands, feet and fingers (pass): Vamana's right hand grips the umbrella shaft and his left is open upward with a thumb and four fingers. Bali extends his right hand open toward Vamana and rests his left hand on the throne arm, fingers visible. Both of Bali's feet and both of Vamana's feet show toes on the ground.
- Attachment and proportions (pass): Bali's seated legs are continuous under the drapery and his arms join at the shoulders. Vamana's body and umbrella contact are coherent.
- Faces (pass): Bali: crown, curled moustache, long hair, round earring, open confident smile, consistent with S001 and S003. Vamana: shaven head, earring, mala, calm profile.
- Duplication and fusion (pass): One Bali and one Vamana; three separate footprint motifs on the ground.
- Text and marks (pass): None observed; the footprints carry no numerals.
- Scene, identity, composition and style (pass): Shows the conversation, Vamana's modest request suggested by three footprints on a strip of earth, and Bali's open confident expression. Vamana stays small, two-armed, without Krishna iconography. Matte mural treatment, full bleed.

## Defects

- None observed.

- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

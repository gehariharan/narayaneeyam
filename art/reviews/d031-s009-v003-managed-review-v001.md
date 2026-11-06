# D031 S009 v003 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Bali offers his head
- Selected native PNG: `artifacts/d031/s009/landscape/candidate-v003.png` (v003), SHA-256 `6f21eb651b5bccee788a268ed29c411e62119c2c6afa52ffbc602d67315aa4f6`, 1672 × 941. Imported byte-for-byte from `/home/gehariharan/firstmate-images/data/d031-production/native-seven-repairs/d031-s009-repair-v003.png` per handoff `/home/gehariharan/firstmate-images/data/d031-production/native-seven-repairs/handoff-v001.json` (SHA-256 `01f34f26447664435ad028ff822eabd28c77c149056937b1c35a428dd4b171d0`); prompt SHA-256 `05270f2f21c3e8a5fa53c385848f1e7a31f0214ddfc56748980549a17b81f55f`, arguments SHA-256 `01320193c9145291ccd9769aab12df298649e5193da4249329d152168196cadb`.
- Supersedes: `artifacts/d031/s009/landscape/candidate-v002.png` (v002, SHA-256 `a77b27428bf13b68c199da2cc02fbe595685c923d3f572b3aafc0b01f785e37a`), recorded as needs-fix in `art/reviews/d031-s009-v002-managed-review-v001.md`, which is preserved unchanged.
- Inspected: full frame and detail views between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer's provisional handoff notes were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s009/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v002/s009-v003-nw.png`: region `836x471+0+0`, SHA-256 `9424646afd288dcb990cd0f6b0c1c20be243f46e2dafad8fef8a9b42dca2a386`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s009-v003-ne.png`: region `836x471+836+0`, SHA-256 `6f3af225d1107ddc6920199376dec44a9c345949913bcb64921a2ac31ec7ae7f`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s009-v003-sw.png`: region `836x470+0+471`, SHA-256 `de17262b1ebde426e08e4e4eeb082bba6ffb1537b1f73b5db331f7de5766f6fe`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s009-v003-se.png`: region `836x470+836+471`, SHA-256 `293d20760a118319987786497eaa001370913bf906d611dd9dc2305fb91ffc25`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z

## References and contracts

- Source reference: `intake/D031/009.jpg` (SHA-256 `61edd32b0f7d96242292dce75cc02d4cd4bb20e96531041d801a0beb8e8e3bcd`), opened full-frame in the round-2 review of this stanza and compared from that viewing; it remains a reference image, not a generated candidate
- Source reference: `intake/D031/010.jpg` (SHA-256 `ad063dd3070a88ed187ef31a0e8b268b4b5310e0fe5db1d2eb2da0e27203df04`), opened full-frame in the round-2 review of this stanza and compared from that viewing; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#9` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-vamana/character.json` (SHA-256 `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229`)
- Contract: `art/bible/characters/d031-garuda/character.json` (SHA-256 `1a3d92ca6ad0bf197618aa6785d5facf2079859e424519093deaf3b20d3e8b62`)
- Contract: `art/bible/characters/d031-prahlada/character.json` (SHA-256 `36d52eab32fa0cd267acef13136e96d8fbe4bd3ba9498de9ba9bca2c30b409b7`)

## Anatomy basis

The Lord (blue, two-armed, one foot on Bali's crown), Bali kneeling and bound, Garuda (one bird head, two arms, two wings) and Prahlada (elder) standing.

## Observations

- Limbs, hands, feet and fingers (pass): The Lord grips the umbrella shaft and opens his left hand. Bali folds both hands. Garuda holds the rope in two attached hands and stands on two taloned feet. Prahlada opens both hands in praise and stands on two bare feet.
- Attachment and proportions (pass): The Lord's raised foot rests lightly on Bali's crown without crushing him. The rope wraps Bali's shoulders and runs continuously to Garuda's right hand, then on to his left hand, with its loose end hanging below.
- Faces (pass): Prahlada is a calm white-haired, white-bearded elder with namam and a gentle expression, clearly distinct from the youthful Vamana. Bali: crown and moustache. Garuda: one hooked beak and one crown.
- Duplication and fusion (pass): One Lord, one Bali, one Garuda, one Prahlada.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows Garuda's binding, Bali offering his head for the third step, and Prahlada approaching in praise, as the brief requires.

## Defects

- None observed.

## Limitations

- Prahlada and the S004/S005 Shukracharya are both white-bearded elders with hair buns; they differ in shawl colour, expression and gesture, and Shukracharya is absent here, but the human art review may want them further distinguished.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifest was changed by this review. Human editorial and art approval remain pending.

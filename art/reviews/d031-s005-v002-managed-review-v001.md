# D031 S005 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Bali confirms the gift
- Selected native PNG: `artifacts/d031/s005/landscape/candidate-v002.png` (v002), SHA-256 `864575777b8f5286af9494c0dd500e25aee3bd2a9dfefe0572c1430ceb7146ce`, 1672 × 941. Imported byte-for-byte from `/home/gehariharan/firstmate-images/data/d031-production/native-seven-repairs/d031-s005-repair-v002.png` per handoff `/home/gehariharan/firstmate-images/data/d031-production/native-seven-repairs/handoff-v001.json` (SHA-256 `01f34f26447664435ad028ff822eabd28c77c149056937b1c35a428dd4b171d0`); prompt SHA-256 `de9e90c5e46bf7d7f3a56d64e4ed0fe4325b94a2471989b7a7dc04c48b864edd`, arguments SHA-256 `6d14cfe8c73be2ca0e6220e7c242a1f0ec4f147c00996d5e27ba4dbe186b236b`.
- Supersedes: `artifacts/d031/s005/landscape/candidate-v001.png` (v001, SHA-256 `f1af778cdde2340117b8ac7f0e0d31f58b969cb6ccd7d69d9807843a99ba775f`), recorded as needs-fix in `art/reviews/d031-s005-v001-managed-review-v001.md`, which is preserved unchanged.
- Inspected: full frame and detail views between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer's provisional handoff notes were not relied on.

## Views actually opened

- Full frame: `artifacts/d031/s005/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d031/review-evidence/managed-v002/s005-v002-nw.png`: region `836x471+0+0`, SHA-256 `d152ca081093b20175b5df1da1800dc25cff67de86ee4067def1e035c997a878`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s005-v002-ne.png`: region `836x471+836+0`, SHA-256 `ddb38625e716a1efc2871656e6a2a7b220cad184e35352b7d5583f49053798a3`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s005-v002-sw.png`: region `836x470+0+471`, SHA-256 `321bc134dcddbf9de57588b7f07b65383c7c1792f65b1b25ab757cf3094dec03`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s005-v002-se.png`: region `836x470+836+471`, SHA-256 `17268f3a3d5fdd9b0f7aca0ff9946d35896dd0ef90240563ed3bdaa44fd06a10`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z
  - `artifacts/d031/review-evidence/managed-v002/s005-v002-pour.png`: region `360x300+660+380`, SHA-256 `e70ccfe14662fa32791e560f80c2f36327b8780b73d710eb71037890ab77e599`, opened between 2026-11-06T11:49:07Z and 2026-11-06T11:51:34Z

## References and contracts

- Source reference: `intake/D031/005.jpg` (SHA-256 `eeefbccd81e9dec7fe266d249eb2d8a3e08473218b56a28052959f8c19c4602e`), opened full-frame in the round-2 review of this stanza and compared from that viewing; it remains a reference image, not a generated candidate
- Caption: `content/sources/d031/photo-captions.txt#5` (file SHA-256 `1b808aa7e2ed7bfcc4de5cb2f37106332314d8738ed42d61d9fc446c4355d825`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d031.json` (SHA-256 `a845cc1b3c6b8b9ca68d8bcafc7c722ed2afb339ee0ad31d3bbcaf335f86f727`)
- Contract: `content/daskams/d031.json` (SHA-256 `f36eee16544e61d3ca44bf9b15a2f183aae3539d715bbbf761d2159af25a8dc8`)
- Contract: `content/sources/d031/reference-map.json` (SHA-256 `dd239b7dc128cc45fced4037049980d38bff562e37464e314613294ff68a9641`)
- Contract: `art/bible/characters/d031-mahabali/character.json` (SHA-256 `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9`)
- Contract: `art/bible/characters/d031-vamana/character.json` (SHA-256 `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229`)
- Contract: `art/bible/characters/d031-vindhyavali/character.json` (SHA-256 `cd3b5ac9f66aae42894c8d18f6bc44763bf3f1e94ddb97b62e349bfb4512848c`)
- Contract: `art/bible/characters/d031-shukracharya/character.json` (SHA-256 `c493d4cfa5d61cb35e6cf5b318819d563f98825038ba456fd5a47fb37658b3c8`)

## Anatomy basis

One adult king (Bali, kneeling), one adult queen (Vindhyavali, kneeling), one elderly ascetic (Shukracharya, standing) and one short youthful brahmachari (Vamana, standing).

## Observations

- Limbs, hands, feet and fingers (pass): Vindhyavali tilts the pot with her right hand on its shoulder and her left beneath it. Bali cups both hands together. Vamana grips the umbrella shaft and opens his left palm. Shukracharya crosses both forearms. Every visible foot shows toes.
- Attachment and proportions (pass): The stream leaves Vindhyavali's spout and falls in one unbroken arc into Bali's cupped hands; close crop `s005-v002-pour.png` confirms it. Arms and kneeling legs are continuous.
- Faces (pass): Bali: crown, moustache, long hair, eyes lowered, consistent with S001-S004. Vindhyavali: diadem, bun, downcast gentle face. Shukracharya: white hair bun, white beard, namam, stern frown. Vamana: shaven head, tuft, namam, soft smile.
- Duplication and fusion (pass): Four distinct people; no repeated or fused figure.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows Bali keeping his promise while Vindhyavali pours, Shukracharya standing apart in disapproval by the fire, and Vamana receiving calmly without triumph. Matte mural, full bleed.

## Defects

- None observed.

## Limitations

- Close crop `s005-v002-pour.png` (region `360x300+660+380`) inspected for the pour path.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifest was changed by this review. Human editorial and art approval remain pending.

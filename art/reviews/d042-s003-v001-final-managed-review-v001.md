# D042 S003 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5; independent of the native Codex ImageGen generators)
- Scene: Gopikas arrive at the wreckage
- Selected native PNG: `artifacts/d042/s003/candidates/landscape-v001.png` (v001), SHA-256 `64ba030f506b7fb9e6413398f226c6e9ebab11958dc04d504384b1e1e91dbc58` (recomputed after a byte-exact regular-file copy from the producer worktree `artifacts/` path), 1672 × 941
- Prompt: `artifacts/d042/s003/prompts/landscape-v001.prompt.txt` (SHA-256 `dcfc7ba971958c733ce11af3f5207c850372b92e16cd8a692a00e4a7a51d01ba`, verified `dcfc7ba971958c733ce11af3f5207c850372b92e16cd8a692a00e4a7a51d01ba`)
- Native output provenance: `/home/gehariharan/.codex/generated_images/01a1aaa0-8dfa-7702-b8e3-622fd6f23427/exec-270f8f7e-f9b9-4250-b20b-5e88168d4dcd.png`
- Inspected at: 2026-11-05T23:05:16Z (detail views); the full-frame open came first
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-reports and the infant anchor review were not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d042/s003/candidates/landscape-v001.png`, the entire frame opened as one image.
- Native-resolution detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence, reproducible from the geometry):
  - `artifacts/d042/review-evidence/managed-v001/s003-infant-x1_6.png`: region `520x340+560+380 enlarged 1.6x (point filter)`, SHA-256 `6de18a979722778cd00d97549d56b768848da130590b92eff35b71152254737e`, opened after creation at 2026-11-05T23:05:16Z
  - `artifacts/d042/review-evidence/managed-v001/s003-left-gopikas.png`: region `600x620+0+40`, SHA-256 `a10b1482a6d760d0539be7461cd04df7c3fb8d43f26243ee8e2a638ad481cee7`, opened after creation at 2026-11-05T23:05:16Z
  - `artifacts/d042/review-evidence/managed-v001/s003-right-gopikas.png`: region `600x780+1060+60`, SHA-256 `79db4d3376ac79077db3671c47d65505a14e99409e8b45dd39e11d89028e39c8`, opened after creation at 2026-11-05T23:05:16Z
  - `artifacts/d042/review-evidence/managed-v001/s003-teal-gopika-feet.png`: region `600x300+0+620`, SHA-256 `11352314c366ad8ab2cc46f3a9cb1412ab5890106a8f9e45ab3e9048db8daf0f`, opened after creation at 2026-11-05T23:05:16Z

## References opened and hashed

- Source reference: `intake/D042/003.jpg` (SHA-256 `2494789105e4ff174a3e8aa02e409153eba9e298606f68c27faf61a4e69399bf`), opened full-frame
- Caption: `intake/D042/photo-captions.txt#003` (file SHA-256 `02a446d6d59fa6328c4f46921a067c120c3f8e18cc044f68ce8368710fefedd6`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d042.json` (SHA-256 `f66f9a303d73f13bc8275821978ced521ada3646b620683561f91cff16b15cf5`)
- Contract: `content/daskams/d042.json` (SHA-256 `a8ea388f8a092a0b09373625f01ef4bf1427045ad7b750bfceba032b446a7308`)
- Contract: `content/sources/d042/reference-map.json` (SHA-256 `923bd765d908e799ce12719b68125c0f2572ab6e62630c864ade63d9d333634f`)
- Contract: `content/sources/d042/provenance.json` (SHA-256 `ba0bb7e9ffd1711b3414f73cdddc4ff3e5bcfff3d6800fae1e97d64f58127f0b`)
- Contract: `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Reference (character anchor): `artifacts/d042/references/shared/infant-krishna-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`)
- Reference (style anchor): `artifacts/d042/references/shared/style-d001-s004.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`)
- Reference (style anchor): `artifacts/d042/references/shared/style-d001-s008.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`)

## Source and story

intake/D042/003.jpg shows women hurrying to the broken cart. v001 places the calm infant on his cloth cradle inside a clear ring of large broken cart pieces at center, with gopikas arriving from both sides; their faces move from fear to relief.

## Anatomy basis

Exactly six figures: five gopikas are ordinary two-armed women, and Krishna is an ordinary two-armed infant.

## Observations

- Limbs, hands, feet and fingers (pass): The left gopikas raise or extend their hands toward the infant with natural five-finger hands. The teal-sari gopika's two bare feet are visible mid-stride. The right gopikas hold a hand to the chest or reach forward. The infant's two hands and two feet are formed naturally in the 1.6x crop.
- Attachment and proportions (pass): All arms attach at the shoulders and no limb is lost behind the wreckage. The infant keeps newborn scale.
- Faces (pass): Five distinct women's faces showing fear easing to relief. None is styled with Yashoda's veil-and-sari identity. The infant matches the v004 anchor.
- Duplication and fusion (pass): No duplicate infant and no repeated or fused women.
- Text and marks (pass): None.
- Scene, iconography, composition and style (pass): The infant is the focal point within a readable ring of debris that does not obscure him, as the plan requires. The matte palette is consistent with the anchors.

## Defects

- None observed.

## Limitations

- The back-row gopika at right is partly occluded; her visible hand and face are natural.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes were edited and no approval manifest was changed. Human editorial and art approval remain pending.

## Source description correction

- Re-opened at 2026-11-06T00:15:40Z (`artifacts/d042/review-evidence/managed-v005/sources-008-009-006-003.png`, SHA-256 `ce7f2a1393881dcf0d2015048e9db7235711b9f0511a9f370a0722125cb1831b`). The source shows the toppled cart with the infant in a red-lined cradle box and pots spilling milk, one woman at left and a crowd of women and men at right; 'women hurrying to the broken cart' understated the men in the crowd. v001's gopikas-only cast follows the stanza 3 plan, so the image observations, checks and outcome are unchanged.

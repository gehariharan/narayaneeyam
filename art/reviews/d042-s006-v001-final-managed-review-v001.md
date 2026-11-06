# D042 S006 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5; independent of the native Codex ImageGen generators)
- Scene: Boys explain the infant's kick
- Selected native PNG: `artifacts/d042/s006/candidates/landscape-v001.png` (v001), SHA-256 `3773febb7f9f32edb411156f21af063e53dbb3b99866c3ab2bf5bb9139673ca7` (recomputed after a byte-exact regular-file copy from the producer worktree `artifacts/` path), 1672 × 941
- Prompt: `artifacts/d042/s006/prompts/landscape-v001.prompt.txt` (SHA-256 `769d34120282b2e8de976dd8130d65e968efd6629426ceca0ae78ac73a2540f0`, verified `769d34120282b2e8de976dd8130d65e968efd6629426ceca0ae78ac73a2540f0`)
- Native output provenance: `/home/gehariharan/.codex/generated_images/01a1aaa0-8dfa-7702-b8e3-622fd6f23427/exec-b413e7a1-1662-48fb-abb8-cdc02e9b2cc8.png`
- Inspected at: 2026-11-05T23:06:42Z (detail views); the full-frame open came first
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer self-reports and the infant anchor review were not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d042/s006/candidates/landscape-v001.png`, the entire frame opened as one image.
- Native-resolution detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence, reproducible from the geometry):
  - `artifacts/d042/review-evidence/managed-v001/s006-boys-arms-spears.png`: region `720x480+120+260`, SHA-256 `511dc531df326973bc3d6be9a288681f3dad3a75ab84073688e1714cac74cf1f`, opened after creation at 2026-11-05T23:06:42Z
  - `artifacts/d042/review-evidence/managed-v001/s006-boys-feet.png`: region `520x380+0+560`, SHA-256 `ba38d562f92e394d4f5206cd8d0b8b08b70f34550dee1a73d57f2130c6f11315`, opened after creation at 2026-11-05T23:06:42Z
  - `artifacts/d042/review-evidence/managed-v001/s006-infant.png`: region `600x380+900+520`, SHA-256 `6bd45706f639f1e2afacce2c397d55cf769426f231e3849b08ccba7c7dbf874f`, opened after creation at 2026-11-05T23:06:42Z

## References opened and hashed

- Source reference: `intake/D042/006.jpg` (SHA-256 `d1754a0591a961350dc8788b9fe4cf33def0527ba74bb260261ab9a145d3fa8e`), opened full-frame
- Caption: `intake/D042/photo-captions.txt#006` (file SHA-256 `02a446d6d59fa6328c4f46921a067c120c3f8e18cc044f68ce8368710fefedd6`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d042.json` (SHA-256 `f66f9a303d73f13bc8275821978ced521ada3646b620683561f91cff16b15cf5`)
- Contract: `content/daskams/d042.json` (SHA-256 `a8ea388f8a092a0b09373625f01ef4bf1427045ad7b750bfceba032b446a7308`)
- Contract: `content/sources/d042/reference-map.json` (SHA-256 `923bd765d908e799ce12719b68125c0f2572ab6e62630c864ade63d9d333634f`)
- Contract: `content/sources/d042/provenance.json` (SHA-256 `ba0bb7e9ffd1711b3414f73cdddc4ff3e5bcfff3d6800fae1e97d64f58127f0b`)
- Contract: `art/bible/characters/guard-boys/character.json` (SHA-256 `be2d98bbad6b370d2734bd62bbf636d379ee45f3a73c778e8fcc028de195595b`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Reference (character anchor): `artifacts/d042/references/shared/infant-krishna-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`)
- Reference (style anchor): `artifacts/d042/references/shared/style-d001-s004.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`)
- Reference (style anchor): `artifacts/d042/references/shared/style-d001-s008.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`)

## Source and story

intake/D042/006.jpg shows the cart overturning with a demon figure behind it. v001 follows the plan's testimony framing instead: two kneeling guard boys with spears point from the overturned cart to the single infant, who lies on a red cloth and lifts one foot.

## Anatomy basis

Exactly three figures: two guard boys are ordinary two-armed children, and Krishna is an ordinary two-armed infant.

## Observations

- Limbs, hands, feet and fingers (pass): The left boy places one hand on his chest and extends the other toward the cart. The right boy covers his mouth with one hand and points with the other. Both boys' tucked feet are complete. The infant raises one foot, which has five toes, rests the other foot, and has one fist raised and one hand on his belly.
- Attachment and proportions (pass): All four boy arms attach correctly. The infant's raised leg joins at the hip with an anklet and keeps believable newborn proportions.
- Faces (pass): Two distinct boy faces with surprise expressions and no facial hair. The infant matches v004: blue skin, curls, peacock feather, tilak.
- Duplication and fusion (pass): Single infant with no ghosted second baby; two separate boys.
- Text and marks (pass): None.
- Scene, iconography, composition and style (pass): The boys' gestures connect the cart and the infant's foot, as planned, with no adult demon or injury. The matte style matches the anchors.

## Defects

- None observed.

## Limitations

- Each spear leans against a boy's shoulder without a visible grip, which is plausible for kneeling boys.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes were edited and no approval manifest was changed. Human editorial and art approval remain pending.

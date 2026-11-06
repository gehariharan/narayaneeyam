# D040 S010 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Gopis protect the child with sacred names
- Selected native PNG: `artifacts/d040/s010/landscape/v001/candidate.png` (v001), SHA-256 `20f4aef085c650982bf37c1cbabc87fa2ce3a9e5c0e809244a172d03437cbd9f` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d014-production/artifacts/d040/s010/landscape/v001/candidate.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T07:34:47Z and 2026-11-06T07:35:05Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d040/s010/landscape/v001/review.md`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d040/s010/landscape/v001/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d040/review-evidence/managed-v001/s010-v001-nw.png`: region `836x471+0+0`, SHA-256 `82e1c3b18dd88050b0c60f8812550fd9d8a13cea540332fedca2c6ec6afa2280`, opened between 2026-11-06T07:34:47Z and 2026-11-06T07:35:05Z
  - `artifacts/d040/review-evidence/managed-v001/s010-v001-holding-x1.7.png`: region `520x360+460+460 then 170% Lanczos`, SHA-256 `b987fbb45bea20dcaf725e917ad904ff56d32bd55abbce3ee3bd8915dd9b0100`, opened 2026-11-06T07:35:05Z
  - `artifacts/d040/review-evidence/managed-v001/s010-v001-right-hands-x1.7.png`: region `420x320+1080+520 then 170% Lanczos`, SHA-256 `f0a6ccdd9794230286d6e2c83176826d59c54ff28f37eaf37f32f19a7d526d2f`, opened 2026-11-06T07:35:05Z

## References opened and hashed

- Source reference: `intake/D040/010.jpg` (SHA-256 `0e16b495cc52a0eec49cb8749cddb147f1d000bbedaafa95486a7189e1ef895f`), opened full-frame immediately before the candidate
- Caption: `intake/D040/photo-captions.txt#010` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `1535781f2295007c95583ba8765e446b7556f3c49823190f1c7ecc205eef42ac`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- Comparison image: `artifacts/d040/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), infant identity anchor (opened full-frame 2026-11-06T07:35:05Z-07:35:19Z)

## Source and story

intake/D040/010.jpg is a devotional painting of women bathing the infant in a vessel among villagers and a cow. The candidate shows four gopis in a Gokula home: one in a saffron veil holds the seated infant on her lap, and the others join their palms or cup their hands in a protective prayer.

## Anatomy basis

Four adult gopikas and one two-armed infant Krishna.

## Observations

- Limbs, hands, feet and fingers (pass): The holder supports the infant's legs with one visible hand (four fingers and thumb, stacked bangles); her other arm is behind him. The left and upper-right gopis join their palms in namaskara. The lower-right gopika cups two open hands toward the child. The infant spreads two open hands, each with a thumb and four fingers, and shows both feet with toes.
- Attachment and proportions (pass): All visible arms are continuous from sleeve or shoulder to bangles and hands. The infant has natural infant proportions with exactly two arms and two legs.
- Faces (pass): Four distinct gopis: cream sari with flowers in a bun, saffron veil over a maroon sari, green veil, and purple sari with flowers in a bun. Infant: namam, peacock feather, round face, calm smile, matching the v004 anchor.
- Duplication and fusion (pass): Four different women and one infant.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows the gopis praying for the child's protection with gentle devotional gestures, and no sign that they recognise his divinity. No Bhattathiri, no palace and no four-armed form. The gopis keep the gopikas contract's simple dress; the holder's saffron-and-maroon dress is not Yashoda's cream/rose family. Matte mural palette.

## Defects

- None observed.

## Limitations

- The holder's second hand is hidden behind the infant.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

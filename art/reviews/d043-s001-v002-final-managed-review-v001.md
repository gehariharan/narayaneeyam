# D043 S001 v002 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Yashoda sets the unusually heavy infant on a bed
- Selected native PNG: `artifacts/d043/s001/landscape/v002/candidate.png` (v002), SHA-256 `d5629a8395e578a8581fee18b298340b3dc27cb8ae4731418bf2c79d1ec84ecd` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d043-production/artifacts/d043/s001/landscape/v002/candidate.png`), 1672 × 941
- Inspected at: 2026-11-05T23:09:37Z (detail views); the full-frame open came first, between 2026-11-05T23:09:24Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d043/s001/landscape/v002/review.md`) was not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d043/s001/landscape/v002/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence in the managed checkout, reproducible from the geometry):
  - `artifacts/d043/review-evidence/managed-v001/s001-v002-detail-infant.png`: region `640x400+150+250`, SHA-256 `b2931ee7927a7c7384aabd18ef2d6f1323a1ee12b024534e087946d3e6e8e8c2`, opened after creation at 2026-11-05T23:09:31Z
  - `artifacts/d043/review-evidence/managed-v001/s001-v002-detail-yashoda.png`: region `560x560+1000+40`, SHA-256 `dc5b806d1838e1abf5c834dd1a066ad1fce6d1991df7027c29b1e6258adde175`, opened after creation at 2026-11-05T23:09:31Z
  - `artifacts/d043/review-evidence/managed-v001/s001-v002-detail-churning-hands.png`: region `420x380+1200+400`, SHA-256 `5f05ff0e9041bc3e6c35f54ac439da7a4cd2df7a795bf8e8e10d93d7b20f07c5`, opened after creation at 2026-11-05T23:09:37Z

## References opened and hashed

- Source reference: `intake/D043/001.jpg` (SHA-256 `78a934c179011a962e5d5a13a80d0700bd7a8bb2aeda04824a6e4cabf193c375`), opened full-frame immediately before the candidate
- Caption: `intake/D043/photo-captions.txt#001` (file SHA-256 `bb68f6390a576e47aee6cef134a277407369510fca3076ac1ffc7cd1a0ee24b1`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d043.json` (SHA-256 `f86515f6420d37a991d823c801f00454d89a602a17c4ae625e99c4a0d2d3a456`)
- Contract: `content/daskams/d043.json` (SHA-256 `8fa8b37a3317d9b56a1bf4383df1552a92fdd0be6e27f1a66d9a75eda62ae6ef`)
- Contract: `content/sources/d043/reference-map.json` (SHA-256 `a4c477c49a09ed96a8c3baaeaa9889d7717c7abb2091a9982a8c4cc4cbebbcb2`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Infant identity anchor: `artifacts/d043/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), opened full-frame after all ten candidates had been viewed, then compared against this candidate
- Shared adult identity cue: `artifacts/d043/references/shared/nandagopan-yashoda-adult-cues-from-d043-s009.jpg` (SHA-256 `1e912a34dff878f7b60adcb2c81f13a508b989eddc0448910a7e084f4cfe795f`), opened full-frame after all ten candidates had been viewed, then compared against this candidate

## Source and story

intake/D043/001.jpg is a framed glossy portrait of a smiling Yashoda crouching beside a standing toddler Krishna who wears a peacock feather, bead necklaces and a yellow dhoti with a maroon sash. The candidate follows the stanza rather than the photo: the infant lies on a cushioned low bed under a lotus-patterned arch, while Yashoda sits at right churning in a clay pot and glances back at him with a worried face.

## Anatomy basis

One adult woman, Yashoda, and one two-armed, two-legged infant Krishna; no other figures.

## Observations

- Limbs, hands, feet and fingers (pass): The infant shows two hands: the near one lies palm-up on the bed with a thumb and four fingers, and the far one is raised with curled fingers. Both feet show toes, crossed at the ankles. Yashoda grips the churning staff with one hand, and her other hand rests on the pot rim with a thumb and four fingers. Each wrist has bangles.
- Attachment and proportions (pass): The infant has short, plump infant limbs attached at shoulder and hip, with a head-to-body ratio suited to an infant. Yashoda’s two arms run shoulder to wrist without breaks, and she sits cross-legged under the sari.
- Faces (pass): Two faces. The infant has dark eyes, a white U-namam and a small smile, matching the v004 anchor. Yashoda has a worried sidelong glance, a red bindi, a maang-tikka and flower earrings.
- Duplication and fusion (pass): One infant and one woman. The pots in the niche and at right are separate objects, and nothing fuses with the bed or the cushion.
- Text and marks (pass): No lettering, signatures or stray marks.
- Scene, iconography, composition and style (pass): The stanza action of a heavy child set down while the mother keeps working and worrying is clear. The matte ochre and maroon mural palette has firm dark contours and shallow interior space. The infant matches the v004 anchor: deep indigo skin, dark curls, compact peacock feather, orange bead necklace and yellow cloth.

## Defects

- None observed.

## Limitations

- Yashoda wears a green blouse and a cream veil here, which differs from her rose blouse in S003, S004 and S009; her identity is read from context.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

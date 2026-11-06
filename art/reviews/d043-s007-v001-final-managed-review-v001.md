# D043 S007 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: The gopas lift Krishna like a blue jewel from a mountain
- Selected native PNG: `artifacts/d043/s007/landscape/v001/candidate.png` (v001), SHA-256 `9ad547964554ead10dfac60d04a40c4cd6831e5b41344ef0404ac2e7ecd16a46` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d043-production/artifacts/d043/s007/landscape/v001/candidate.png`), 1672 × 941
- Inspected at: 2026-11-05T23:11:55Z (detail views); the full-frame open came first, between 2026-11-05T23:11:16Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d043/s007/landscape/v001/review.md`) was not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d043/s007/landscape/v001/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence in the managed checkout, reproducible from the geometry):
  - `artifacts/d043/review-evidence/managed-v001/s007-v001-detail-demon-arm.png`: region `1672x420+0+521`, SHA-256 `f2bb55768e610e56c48998235776c9e45f2dc98c37ed717b8d0b666e08fc5e47`, opened after creation at 2026-11-05T23:11:55Z
  - `artifacts/d043/review-evidence/managed-v001/s007-v001-detail-hands-infant.png`: region `700x420+440+360`, SHA-256 `a0a34b0072175432a1dd86af8d5ebf0bc714223028df39f7f13a813acc197eeb`, opened after creation at 2026-11-05T23:11:55Z

## References opened and hashed

- Source reference: `intake/D043/007.jpg` (SHA-256 `9771ca8f8840c77c66869dcf007c31a0c16640cf91f2a1fd5ab45f8ae8468dc4`), opened full-frame immediately before the candidate
- Caption: `intake/D043/photo-captions.txt#007` (file SHA-256 `bb68f6390a576e47aee6cef134a277407369510fca3076ac1ffc7cd1a0ee24b1`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d043.json` (SHA-256 `f86515f6420d37a991d823c801f00454d89a602a17c4ae625e99c4a0d2d3a456`)
- Contract: `content/daskams/d043.json` (SHA-256 `8fa8b37a3317d9b56a1bf4383df1552a92fdd0be6e27f1a66d9a75eda62ae6ef`)
- Contract: `content/sources/d043/reference-map.json` (SHA-256 `a4c477c49a09ed96a8c3baaeaa9889d7717c7abb2091a9982a8c4cc4cbebbcb2`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Infant identity anchor: `artifacts/d043/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), opened full-frame after all ten candidates had been viewed, then compared against this candidate

## Source and story

intake/D043/007.jpg shows a woman lifting the infant from the chest of a fallen demon on a hillside, with women watching. Following the stanza, the candidate shows gopas instead: three cowherds, two turbaned, gather around the dead Trinavarta and lift the smiling infant from his chest.

## Anatomy basis

Three adult cowherds, one dead adult demon and one two-armed infant Krishna.

## Observations

- Limbs, hands, feet and fingers (pass): The bearded gopa holds the infant’s side with his wrist cuff and fingers visible, and an open hand supports the infant’s back. The right gopa cups the infant’s legs with one hand, its thumb and fingers visible. The infant rests one open hand on the demon’s chest and holds the other at his own chest, and his two feet are crossed with toes visible. The demon’s palm-up hand at lower right shows a thumb and four fingers.
- Attachment and proportions (pass): Measured on the native frame, the demon’s arm runs from the armlet at his shoulder past his white waist cloth to his hand, about twice his shoulder-to-waist distance. That is a normal adult reach to the thigh. The gopas’ arms attach at the shoulders, and the infant’s proportions match the anchor.
- Faces (pass): Five faces: the bearded, turbaned gopa, the red-headband figure, the moustached gopa in a cream turban, the smiling infant and the closed-eyed demon. All are distinct, and the infant has a namam.
- Duplication and fusion (pass): No duplicated people. The overlapping hands around the infant can each be traced to an owner.
- Text and marks (pass): None observed.
- Scene, iconography, composition and style (pass): Lifting the unhurt, smiling child from the huge body, like a gem from a mountain, is clear. Leafy trees, rocks and the matte palette match the series.

## Defects

- None observed.

## Limitations

- The demon’s legs are outside the frame, so his full-body proportions were judged from the shoulder-to-waist and arm spans only.
- The middle figure’s gender is ambiguous (gopa or gopika).
- The open hand behind the infant’s back is attributed to the bearded gopa’s far arm, which is occluded.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

# D043 S009 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Nanda and Yashoda pray for their child’s protection
- Selected native PNG: `artifacts/d043/s009/landscape/v001/candidate.png` (v001), SHA-256 `9885b0be646cbf776ddce5a5f3e06cc4a21b1696ef7269788196deb9cbd3907f` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d043-production/artifacts/d043/s009/landscape/v001/candidate.png`), 1672 × 941
- Inspected at: 2026-11-05T23:12:41Z (detail views); the full-frame open came first, between 2026-11-05T23:12:26Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d043/s009/landscape/v001/review.md`) was not relied on for clearance.

## Views actually opened

- Full frame: `artifacts/d043/s009/landscape/v001/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale for display).
- Native-resolution detail crops (1:1 pixels cut from the exact selected bytes with `magick -crop`; gitignored local evidence in the managed checkout, reproducible from the geometry):
  - `artifacts/d043/review-evidence/managed-v001/s009-v001-detail-infant.png`: region `460x500+590+220`, SHA-256 `426538757300b7cc416cb33e3af73a315f296debefa12f81b81d4a532be90af6`, opened after creation at 2026-11-05T23:12:41Z
  - `artifacts/d043/review-evidence/managed-v001/s009-v001-detail-yashoda-hands.png`: region `360x300+330+300`, SHA-256 `982a67bf9265a85530e33f24735a52ecd25e91516b482309da8ad95d3b0a1250`, opened after creation at 2026-11-05T23:12:41Z
  - `artifacts/d043/review-evidence/managed-v001/s009-v001-detail-nanda-hands.png`: region `360x300+1060+280`, SHA-256 `ecb27e0d135abbf4cd4d1ca850f778d5d3e4e0e222af9eab9bbd71caea4e8bd1`, opened after creation at 2026-11-05T23:12:41Z

## References opened and hashed

- Source reference: `intake/D043/009.jpg` (SHA-256 `1e912a34dff878f7b60adcb2c81f13a508b989eddc0448910a7e084f4cfe795f`), opened full-frame immediately before the candidate
- Caption: `intake/D043/photo-captions.txt#009` (file SHA-256 `bb68f6390a576e47aee6cef134a277407369510fca3076ac1ffc7cd1a0ee24b1`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d043.json` (SHA-256 `f86515f6420d37a991d823c801f00454d89a602a17c4ae625e99c4a0d2d3a456`)
- Contract: `content/daskams/d043.json` (SHA-256 `8fa8b37a3317d9b56a1bf4383df1552a92fdd0be6e27f1a66d9a75eda62ae6ef`)
- Contract: `content/sources/d043/reference-map.json` (SHA-256 `a4c477c49a09ed96a8c3baaeaa9889d7717c7abb2091a9982a8c4cc4cbebbcb2`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Infant identity anchor: `artifacts/d043/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), opened full-frame after all ten candidates had been viewed, then compared against this candidate
- Shared adult identity cue: `artifacts/d043/references/shared/nandagopan-yashoda-adult-cues-from-d043-s009.jpg` (SHA-256 `1e912a34dff878f7b60adcb2c81f13a508b989eddc0448910a7e084f4cfe795f`), opened full-frame after all ten candidates had been viewed, then compared against this candidate

## Source and story

intake/D043/009.jpg shows Yashoda with joined hands and a turbaned Nanda kneeling to steady a toddler. The candidate shows Yashoda and Nanda kneeling on either side of a cushioned seat, their palms joined in prayer toward the seated infant, with a hanging lamp at right.

## Anatomy basis

One adult woman (Yashoda), one adult man (Nanda) and one two-armed infant Krishna.

## Observations

- Limbs, hands, feet and fingers (pass): The infant holds both hands palm-up, each with a thumb and four fingers, and both feet show toes. Yashoda and Nanda each join two hands in namaskara, with their fingers visible and cuffs or bangles at the wrists.
- Attachment and proportions (pass): The seated infant’s proportions closely match the v004 anchor, and the parents’ kneeling bodies are proportionate.
- Faces (pass): Three faces. Yashoda looks down gently with a bindi and a maang-tikka. Nanda is moustached in a cream turban. The infant has a namam and a calm smile.
- Duplication and fusion (pass): One of each, with no duplicates.
- Text and marks (pass): None observed.
- Scene, iconography, composition and style (pass): The parents’ protective prayer fits the stanza. The interior arch, scrollwork and matte palette match S001. Nanda’s olive tunic and cream turban and Yashoda’s veil follow the shared cues from this source photo.

## Defects

- None observed.

## Limitations

- The parents’ lower legs are hidden under their clothing.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

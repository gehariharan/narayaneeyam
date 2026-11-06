# D044 S009 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Garga counsels Vasudeva
- Selected native PNG: `artifacts/d044/s009/landscape/candidate-v001.png` (v001), SHA-256 `4046319695e0aee0fb88867556eec2c541637988a858d0f6ab9aa0e44439c4bc` (recomputed from the hydrated managed-checkout copy before viewing; matches the verification plan), 1672x941
- Inspected at: 2026-11-05T23:15:13Z (detail views); the full-frame open came first, between 2026-11-05T23:15:01Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d044/s009/landscape/candidate-v001.png`, the entire frame opened as one image (the viewer may scale for display).
- Detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence in the managed checkout, reproducible from the geometry):
  - `artifacts/d044/review-evidence/managed-v001/s009-v001-detail-vasudeva.png`: region `560x560+1000+100`, SHA-256 `1d2909afbd17ebfc8a644faabfb406f6186958472a61e86abb59a541404a3967`, opened after creation at 2026-11-05T23:15:13Z
  - `artifacts/d044/review-evidence/managed-v001/s009-v001-detail-garga-hands.png`: region `600x560+420+300`, SHA-256 `4c86daf07cccb92a9f21704f4aa3535a8d28382cfaf1014b8a701a32487ee852`, opened after creation at 2026-11-05T23:15:13Z

## References opened and hashed

- Source reference: `intake/D044/009.jpg` (SHA-256 `8dd33ce8deb6392a6216caad9b4938223ea269c91ce8e5c5eea1d8e721391a01`), opened full-frame immediately before the candidate
- Caption: `intake/D044/photo-captions.txt#009` (file SHA-256 `4d89a5ae9fe3ee2c83b0c3faed39cc9f3592530d444e79f14846d9233cb8c9af`, byte-identical to the tracked `content/sources/d044/photo-captions.txt`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d044.json` (SHA-256 `3ef9fc966d2389109e2fb46a5af0d264135e7d3d7af05ad4450757e8a6032fbe`)
- Contract: `content/daskams/d044.json` (SHA-256 `d71a7390df0b5ab9d1ec87b4c24f44a2e309cc4a31fa3012b6a18d9b334fe5b9`)
- Contract: `content/sources/d044/reference-map.json` (SHA-256 `9674525e92d4f5731de8a9cd61147773eda8b66b86ad9ae82e6e02f19c99de76`)
- Contract: `content/sources/d044/intake-manifest.json` (SHA-256 `9c61df5d31006e1297a779854d46be42845d0be320d2498670362874c9d87033`)
- Contract: `art/bible/characters/garga-muni/character.json` (SHA-256 `439a3bf600f5a1199e77830899520b48e8510ec95cc654b58f6ddf0f372282ba`)
- Contract: `art/bible/characters/vasudeva/character.json` (SHA-256 `b48f743c0d11b884adecf7f61e0d33d26f5f58a5b58dbb21197c1469c54d0ec8`)
- Style anchor: `artifacts/d044/references/series-style-anchor-D001-S004.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), opened full-frame
- Style anchor: `artifacts/d044/references/series-style-anchor-D001-S008.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`), opened full-frame
- Vasudeva Bible text (no image bytes): `art/bible/characters/vasudeva/character.json` (SHA-256 `b48f743c0d11b884adecf7f61e0d33d26f5f58a5b58dbb21197c1469c54d0ec8`), opened as text

## Source and story

intake/D044/009.jpg shows a shaven sage speaking with a raised hand to a seated group of mothers and a turbaned man, with two infants on a low table. Per the plan’s reference guidance it is used only as the source-specific cue for Vasudeva. The candidate shows an intimate two-person counsel in a shaded interior: Garga speaks with an open palm, and Vasudeva sits facing him in anjali. There is no third speaker and no prison.

## Anatomy basis

Two ordinary seated adult men with two arms each.

## Observations

- Limbs, hands, feet and fingers (pass): Garga’s speaking hand is open with a thumb and four fingers, and his other hand rests on his knee with fingers visible. Vasudeva’s two palms are joined in anjali with both thumbs visible. Their crossed legs are wrapped in cloth.
- Attachment and proportions (pass): Garga’s speaking arm is continuous from the shoulder; his knee arm emerges from the orange shawl. Vasudeva’s two forearms rise from the cream shawl to his joined hands. Proportions are adult.
- Faces and identity (pass): Garga has a white beard, a white topknot and a tilak, and is clearly elderly. Vasudeva matches his Bible: a mature man with a trimmed dark beard and moustache, long dark wavy hair partly tied up, a vertical tilak and a long dignified face. He is clearly distinct from both Garga and Nandagopan.
- Duplication and fusion (pass): Exactly two people.
- Text and marks (pass): None in the frame or the crops.
- Scene, composition and style (pass): Restrained ochre and brown with olive leaves, firm contours and a flat matte finish. There are no chains, consistent with the non-prison counsel.

## Defects

- None observed.

## Limitations

- The legacy Vasudeva image reference is unavailable (per plan); identity is judged against the Bible text only.
- Vasudeva’s small gold ear studs from the Bible are hidden by his hair.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

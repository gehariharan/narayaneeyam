# D044 S001 v001 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Garga Muni arrives at Nandagopan’s home
- Selected native PNG: `artifacts/d044/s001/landscape/candidate-v001.png` (v001), SHA-256 `0a08b898014390c36ad13d0ff6a0ecb810c121b2fe2dbe8bcf9cac9d7084f909` (recomputed from the hydrated managed-checkout copy before viewing; matches the verification plan), 1672x941
- Inspected at: 2026-11-05T23:13:08Z (detail views); the full-frame open came first, between 2026-11-05T23:12:51Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d044/s001/landscape/candidate-v001.png`, the entire frame opened as one image (the viewer may scale for display).
- Detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence in the managed checkout, reproducible from the geometry):
  - `artifacts/d044/review-evidence/managed-v001/s001-v001-detail-garga.png`: region `720x560+180+100`, SHA-256 `7c47d85f90f56898af2308da571d4c12f3444d0bc7e492943948cdd077442db7`, opened after creation at 2026-11-05T23:13:08Z
  - `artifacts/d044/review-evidence/managed-v001/s001-v001-detail-nanda.png`: region `520x560+1120+90`, SHA-256 `69085ee2c84f80e3d4a21bf21aded40fd7ecad9f2cf6fd313c15567296a473ae`, opened after creation at 2026-11-05T23:13:08Z

## References opened and hashed

- Source reference: `intake/D044/001.jpg` (SHA-256 `92721cf1df62507d2fb37c75b17af19c652f7559466f6c07c3c69fb70aa200e9`), opened full-frame immediately before the candidate
- Caption: `intake/D044/photo-captions.txt#001` (file SHA-256 `4d89a5ae9fe3ee2c83b0c3faed39cc9f3592530d444e79f14846d9233cb8c9af`, byte-identical to the tracked `content/sources/d044/photo-captions.txt`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d044.json` (SHA-256 `3ef9fc966d2389109e2fb46a5af0d264135e7d3d7af05ad4450757e8a6032fbe`)
- Contract: `content/daskams/d044.json` (SHA-256 `d71a7390df0b5ab9d1ec87b4c24f44a2e309cc4a31fa3012b6a18d9b334fe5b9`)
- Contract: `content/sources/d044/reference-map.json` (SHA-256 `9674525e92d4f5731de8a9cd61147773eda8b66b86ad9ae82e6e02f19c99de76`)
- Contract: `content/sources/d044/intake-manifest.json` (SHA-256 `9c61df5d31006e1297a779854d46be42845d0be320d2498670362874c9d87033`)
- Contract: `art/bible/characters/garga-muni/character.json` (SHA-256 `439a3bf600f5a1199e77830899520b48e8510ec95cc654b58f6ddf0f372282ba`)
- Contract: `art/bible/characters/nandagopan/character.json` (SHA-256 `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`)
- Style anchor: `artifacts/d044/references/series-style-anchor-D001-S004.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), opened full-frame
- Style anchor: `artifacts/d044/references/series-style-anchor-D001-S008.png` (SHA-256 `9ec5a6aee85086fbb4ea45c555b1a8c33fbb1624306cc6e77a2b48969043e995`), opened full-frame

## Source and story

intake/D044/001.jpg is a close half-length of a shaven-headed sage in a salmon shawl with a cow behind him; it gives no arrival setting. The candidate turns this cue into the planned arrival: Garga stands at viewer-left under a tree with a staff and a shoulder bag, gesturing with an open palm toward a tiled village house, and Nandagopan greets him in anjali from the doorway. There is no crowd and no court.

## Anatomy basis

Two ordinary standing adult men, each with two arms. Their feet are below the bottom frame edge.

## Observations

- Limbs, hands, feet and fingers (pass): Garga’s right hand wraps the wooden staff with four curled fingers and a thumb. His left hand is extended palm-up with five separated digits. Nanda’s palms are pressed together in anjali with both thumbs and finger sets visible. No feet are in frame for either figure.
- Attachment and proportions (pass): Garga’s gesturing arm runs from the shoulder under the ochre shawl to the open palm. His staff arm emerges from the cream cloth at the elbow. Nanda’s two forearms rise from inside the olive upper cloth to the joined hands. Head-to-torso ratios are adult and matched.
- Faces and identity (pass): Garga has an elderly profile with a full white beard, moustache, white hair in a topknot and a vertical tilak. Nanda has a three-quarter profile with a dark curled moustache, dark hair gathered at the nape and a tilak, consistent with the shared mature warm-brown Nandagopan cues.
- Duplication and fusion (pass): Exactly two people. The doorway interior holds only a pot and a stand; the staff and the door jamb stay separate from both bodies.
- Text and marks (pass): No letters, numerals or signatures in the full frame or the two crops. The wall band is a wave-and-dot pattern, not script.
- Scene, composition and style (pass): Flat matte ochre, cream and terracotta fields with firm brown contours and a shallow threshold space, close to the D001 anchors. There are no metallic highlights or rays.

## Defects

- None observed.

## Limitations

- Feet are cropped by the bottom frame edge for both figures, so foot anatomy cannot be judged.
- Nanda wears his hair uncovered in a nape bun here but a cream turban in S002–S008. The shared cue allows gathered or covered hair, so this is recorded as a continuity variation, not a defect.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

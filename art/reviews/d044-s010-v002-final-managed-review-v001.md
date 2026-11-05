# D044 S010 v002 final managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: After Garga departs, the household cares for Krishna; Bhattathiri prays to Guruvayurappan
- Selected native PNG: `artifacts/d044/s010/landscape/candidate-v002.png` (v002), SHA-256 `973f52831cd4eea0a032815ed04f53bec6bb390d9a781f70cd83287ab34934b1` (recomputed from the hydrated managed-checkout copy before viewing; matches the verification plan), 1671x941
- Inspected at: 2026-11-05T23:15:31Z (detail views); the full-frame open came first, between 2026-11-05T23:15:13Z and the first detail crop
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused.

## Views actually opened

- Full frame: `artifacts/d044/s010/landscape/candidate-v002.png`, the entire frame opened as one image (the viewer may scale for display).
- Detail crops (cut from the exact selected bytes with `magick -crop`; gitignored local evidence in the managed checkout, reproducible from the geometry):
  - `artifacts/d044/review-evidence/managed-v001/s010-v002-detail-bhattathiri.png`: region `520x520+460+290`, SHA-256 `2e98c952c803f44ff3aa2c7f2ce8c0316f3b505a88eaed4c20d96c27ee8aae1d`, opened after creation at 2026-11-05T23:15:31Z
  - `artifacts/d044/review-evidence/managed-v001/s010-v002-detail-guruvayurappan.png`: region `420x900+60+0`, SHA-256 `e35de68496b3083df9c9bfe1c65f662fee71ab0d3917b97d54f777255448134a`, opened after creation at 2026-11-05T23:15:31Z
  - `artifacts/d044/review-evidence/managed-v001/s010-v002-detail-nanda-infant.png`: region `640x560+1020+300`, SHA-256 `a89009e5411add301725c6fac6abc080278d8498afd17a10722f54b15a0394f6`, opened after creation at 2026-11-05T23:15:31Z
  - `artifacts/d044/review-evidence/managed-v001/s010-v002-detail-gopa-bowl.png`: region `640x500+820+300`, SHA-256 `6ffc2aeee8f69b1a6dfcc663c301f82e0bdf70d0aad4b2878af491adfc0f8f09`, opened after creation at 2026-11-05T23:15:31Z
  - `artifacts/d044/review-evidence/managed-v001/s010-v002-detail-gopa-cloth.png`: region `360x460+1310+340`, SHA-256 `2f5ddb08cfb2acedf7755429d248e42aa934a748f80dbcc26b67b0176ae81d38`, opened after creation at 2026-11-05T23:15:31Z

## References opened and hashed

- Source reference: `intake/D044/010.jpg` (SHA-256 `29498e8d6c414d75fd093dc12e09c933220ddfbfb8234c09b0c79ec438345bb4`), opened full-frame immediately before the candidate
- Caption: `intake/D044/photo-captions.txt#010` (file SHA-256 `4d89a5ae9fe3ee2c83b0c3faed39cc9f3592530d444e79f14846d9233cb8c9af`, byte-identical to the tracked `content/sources/d044/photo-captions.txt`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d044.json` (SHA-256 `3ef9fc966d2389109e2fb46a5af0d264135e7d3d7af05ad4450757e8a6032fbe`)
- Contract: `content/daskams/d044.json` (SHA-256 `d71a7390df0b5ab9d1ec87b4c24f44a2e309cc4a31fa3012b6a18d9b334fe5b9`)
- Contract: `content/sources/d044/reference-map.json` (SHA-256 `9674525e92d4f5731de8a9cd61147773eda8b66b86ad9ae82e6e02f19c99de76`)
- Contract: `content/sources/d044/intake-manifest.json` (SHA-256 `9c61df5d31006e1297a779854d46be42845d0be320d2498670362874c9d87033`)
- Contract: `art/bible/characters/nandagopan/character.json` (SHA-256 `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`)
- Contract: `art/bible/characters/gopas/character.json` (SHA-256 `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/bhattathiri/character.json` (SHA-256 `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)
- Superseded D044 S010 v001 split-composition history (context only): `artifacts/d044/s010/landscape/candidate-v001.png` (SHA-256 `1c6671f0272a424d131b9bf6406c60daf80336fdcf71b683cd25ecbca5c826ad`), opened full-frame
- Selected older Bhattathiri reference: `artifacts/d044/references/bhattathiri-older-selected-reference.png` (SHA-256 `ebe4aedd0283cffa987dffb1494ec95da551ffa5ccd951e7f3730504f15ee7c3`), opened full-frame
- Character anchor (Guruvayurappan): `artifacts/d044/references/guruvayurappan-approved-character-reference.png` (SHA-256 `d93b3d0e53e52bd05bcc1a51b33073816592a3c83e19c14c65b50ec7cf232b4b`), opened full-frame
- Shared provisional infant Krishna anchor v004: `artifacts/d044/references/infant-krishna-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), opened full-frame
- Shared Nandagopan identity cue: `artifacts/d044/references/nandagopan-yashoda-shared-source-D043-S009.jpg` (SHA-256 `1e912a34dff878f7b60adcb2c81f13a508b989eddc0448910a7e084f4cfe795f`), opened full-frame

## Source and story

intake/D044/010.jpg is a crowded palace bathing scene: women bathe infant Krishna in a golden basin, a toddler and several men watch, and the image carries a copyright watermark. The candidate keeps the tender care of the infant in a continuous outdoor field under a large tree. Nanda holds Krishna in his lap while one gopa offers a small bowl and another readies a cloth beside a water basin. In the foreground left, the older Bhattathiri kneels in anjali before a standing Guruvayurappan. There is no panel border, Garga is absent, and the source watermark is not reproduced. Superseded v001, which split the deity and household into a temple panel and a courtyard panel, was opened for context only; it remains unselected.

## Anatomy basis

Four ordinary adult men (Bhattathiri, Nanda and two gopas, two arms each) and one ordinary infant (two arms and two legs). Guruvayurappan is the two-armed standing form shown in the approved reference sheet. He and the infant are intentional distinct forms for the prayer and household planes, not an accidental duplicate.

## Observations

- Limbs, hands, feet and fingers (pass): Bhattathiri’s joined palms show finger outlines on both hands, and one bare foot with toes shows behind his kneeling legs. Guruvayurappan has a raised abhaya right hand with five digits, an open lowered left hand with five digits, and two blue feet with anklets and toes. Krishna has an open palm and a bent arm with white stripes, plus two feet with toes. Nanda’s hand at Krishna’s waist shows four fingers. The bowl gopa grips the bowl with fingers visible and shows one bare foot. The cloth gopa holds the towel with both hands.
- Attachment and proportions (pass): Bhattathiri’s two forearms rise from his shoulders to his joined hands. Guruvayurappan’s two arms meet the shoulders at gold armlets. Nanda’s arm wraps around the infant from his left shoulder, and his other upper arm hangs at his side. Each gopa’s arms connect to the shoulders, with the far arm occluded by the body. All adults have consistent seated or kneeling proportions.
- Faces and identity (pass): Bhattathiri matches the selected older reference: a clean-shaven, lined older face, a shaved head with a small kudumi tuft, three white ash bands with a red dot, and rudraksha and pearl strands. He is not young, not bearded, and not Garga. Guruvayurappan matches the approved sheet: a blue face, a tall gold crown with peacock feather, makara earrings, a white namam, and a flower garland. Infant Krishna follows v004. Nanda has a cream turban, a moustache and an olive shawl, and the two gopas have distinct turbaned faces with moustaches.
- Duplication and fusion (pass): The cast is one Bhattathiri, one Guruvayurappan, one infant, one Nanda and two gopas, a small group as the plan asks. The cow and calf in the background are separate animals, and no figures fuse.
- Text and marks (pass): No text in the frame or the crops. The source’s watermark and copyright line are absent.
- Scene, composition and style (pass): The household and prayer share one continuous ground plane and tree canopy, with no panel division, as required. The palette is ochre, olive, cream and indigo with firm contours and shallow space.

## Defects

- None observed.

## Limitations

- Guruvayurappan’s crown and the water basin carry richer gold detailing and some highlight than the flat-ochre D001 anchors. There are no rays or halo, so this is recorded as mild finish drift, not a defect.
- Krishna has white ash stripes on his upper arm that are not on the v004 anchor; this is a small ornamental variation.
- The candidate is 1671 px wide (one pixel narrower than the 1672 px batch norm); this is native output and was not resized.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes, contracts or approval manifests were changed by this review. Human editorial and art approval remain pending.

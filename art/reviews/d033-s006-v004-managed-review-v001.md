# D033 S006 v004 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Sudarshana protects the steadfast king and pursues Durvasa
- Selected native PNG: `artifacts/d033/s006/landscape/candidate-v004.png` (v004), SHA-256 `9f1ee37cb9eba2eadc662197fff149c729031258baa4f76bd27fe9a0d651ef2c` (recomputed after a byte-exact copy of the image file from the D033 production checkout), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:19:30Z and 2026-11-06T11:19:55Z
- Outcome: **needs-fix**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer notes and records were not relied on.

## Views actually opened

- Full frame: `artifacts/d033/s006/landscape/candidate-v004.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Detail crops cut from the exact selected bytes with `magick -crop` (enlarged where noted). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d033/review-evidence/managed-v001/s006-v004-zoom-king-hands.png`: region `300x300+60+140 at 150%`, SHA-256 `2f48c3ec3af84fa47b1a4005df14242d08dd4a12406c1de5c7c2602f1b98b94e`, opened between 2026-11-06T11:19:30Z and 2026-11-06T11:19:55Z
  - `artifacts/d033/review-evidence/managed-v001/s006-v004-zoom-krtya.png`: region `560x660+330+240`, SHA-256 `1bc806f9ebc56406fd0d2ef19b854386d21ad297eb16249c7345a2c7011182ba`, opened between 2026-11-06T11:19:30Z and 2026-11-06T11:19:55Z
  - `artifacts/d033/review-evidence/managed-v001/s006-v004-zoom-durvasa.png`: region `560x580+1110+280`, SHA-256 `1677360a44e5bc73bdc4ab05fa2cc31be0b287bc28dae428bef145f00f04a309`, opened between 2026-11-06T11:19:30Z and 2026-11-06T11:19:55Z

## References opened and hashed

- Source reference: `intake/D033/006.jpg` (SHA-256 `325e03768edcc161f40b993ea073f9528f5b49c345d5b7053b23d771a05f373b`), opened full-frame next to the candidate
- Caption: `intake/D033/photo-captions.txt#006` (file SHA-256 `4dba7dd67c0f962a75b4213e5b1ca3971bcae0d8ecadddf5bd246c814a5fb2b0`, matching `content/sources/d033/intake-copy-manifest.json`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d033.json` (SHA-256 `57e4a64aa4f2b3395fc45109e30ff4301a6814a4f877d843c9905bbd96a137c1`)
- Contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Contract: `art/bible/characters/durvasa/character.json` (SHA-256 `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab`)
- Contract: `art/bible/characters/krtya/character.json` (SHA-256 `93f4eb9ff20c8ae9eb98b222f6306be6d9c9e28c8028a99f518b729513fb3305`)

## Source and story

intake/D033/006.jpg shows a huge fiery many-petalled disc filling a pillared hall above a small figure, with seated onlookers. The candidate places the king at the left, a recoiling Kṛtyā at the centre, a flat sunburst chakra and a fleeing Durvasa at the right.

## Anatomy basis

Ambarisha and Durvasa (ordinary two-armed humans) and the single Kṛtyā apparition (two arms, two legs).

## Observations

- Limbs, hands, feet and fingers (pass): The king joins two hands with bangles and stands on two feet. The Kṛtyā raises one open five-fingered hand and holds the curved sword hilt in the other fist, on two feet. The running Durvasa has two arms with five-fingered hands and two bare feet.
- Attachment and proportions (pass): All limbs are continuous from shoulder or hip, and the sword stays attached to the Kṛtyā’s hand.
- Faces (needs-fix): Ambarisha is clean-shaven apart from a moustache and has a younger face. In stanzas 1–5 he has a dark beard and moustache, and his contract requires the moustache or beard to stay consistent across D033. Durvasa and the Kṛtyā are consistent with stanza 5.
- Duplication and fusion (pass): One king, one Kṛtyā, one chakra and one Durvasa.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (needs-fix): The plan says Sudarshana destroys the Kṛtyā and she “breaks into muted painted forms”, but here she is intact and only recoiling while the chakra passes toward Durvasa, so the destruction is not shown. The king’s changed face also breaks D033 identity continuity.

## Defects

- `D033-S006-AMBARISHA-BEARD-CONTINUITY-V004` (medium, high confidence): Ambarisha has a moustache but no beard, unlike his bearded face in stanzas 1–5. Repair: Regenerate natively with the same bearded Ambarisha face and crown used in stanzas 1–5.
- `D033-S006-KRTYA-NOT-DISPERSED-V004` (medium, medium confidence): The Kṛtyā is shown whole and recoiling; she is not dispersed by the chakra as the plan requires. Repair: Show the single Kṛtyā breaking into muted painted fragments at the chakra’s touch, without gore, while the chakra turns toward Durvasa.

## Limitations

- The chakra is a flat sunburst disc with petal rays; this is acceptable for a single many-rayed chakra.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

This version remains blocked from inspected status until a new native version is generated and independently re-inspected. No image bytes or approval manifests were changed by this review.

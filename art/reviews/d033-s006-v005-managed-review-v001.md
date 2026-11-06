# D033 S006 v005 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Sudarshana protects the steadfast king and pursues Durvasa
- Selected native PNG: `artifacts/d033/s006/landscape/candidate-v005.png` (v005), SHA-256 `5bd9af8cde534498c751b64909676d2fa831caf964f1e557888d265e671e8f24`, 1672 × 941. Byte-exact no-overwrite copy of the native ImageGen return listed in `/home/gehariharan/firstmate-images/data/d033-production/native-five-repairs/handoff.json`; `cmp` matched both the private copy and the native return path.
- Replaces the needs-fix v004 review, which is preserved unchanged.
- Inspected: full frame and detail views between 2026-11-06T18:06:35Z and 2026-11-06T18:06:48Z, against the final plan with S006 v005, S009 v003 and S010 v002 bound
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer notes and detail crops in the handoff were not relied on.

## Views actually opened

- Full frame: `artifacts/d033/s006/landscape/candidate-v005.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Detail crops cut from the exact selected bytes with `magick -crop` (enlarged where noted). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d033/review-evidence/managed-v002/s006-v005-zoom-king-face-hands.png`: region `320x320+70+120 at 150%`, SHA-256 `b33798c418a66ac4deb9b4904c45652c455f013409c35a16085dc8bbafaf5197`, opened between 2026-11-06T18:06:35Z and 2026-11-06T18:06:48Z
  - `artifacts/d033/review-evidence/managed-v002/s006-v005-zoom-krtya-chakra.png`: region `700x640+400+240`, SHA-256 `27607aec220f7955f78fbb4aaaf1aef48b2371546942fbd6e08aa102692d57d6`, opened between 2026-11-06T18:06:35Z and 2026-11-06T18:06:48Z
  - `artifacts/d033/review-evidence/managed-v002/s006-v005-zoom-durvasa.png`: region `580x600+1080+250`, SHA-256 `6ad4e584f303384b0d122b0ecbd4fbd6bd6bf03286bd5c44e5f4b9e8648ee8ff`, opened between 2026-11-06T18:06:35Z and 2026-11-06T18:06:48Z

## References opened and hashed

- Source reference: `intake/D033/006.jpg` (SHA-256 `325e03768edcc161f40b993ea073f9528f5b49c345d5b7053b23d771a05f373b`), opened full-frame in the earlier D033 review round and compared again from that viewing
- Caption: `intake/D033/photo-captions.txt#006` (file SHA-256 `4dba7dd67c0f962a75b4213e5b1ca3971bcae0d8ecadddf5bd246c814a5fb2b0`, matching `content/sources/d033/intake-copy-manifest.json`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d033.json` (SHA-256 `f147f2397170bb1527a2e5fa275142b0943d8924918fcc23aec4fddab2601216`)
- Contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Contract: `art/bible/characters/durvasa/character.json` (SHA-256 `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab`)
- Contract: `art/bible/characters/krtya/character.json` (SHA-256 `93f4eb9ff20c8ae9eb98b222f6306be6d9c9e28c8028a99f518b729513fb3305`)

## Source and story

intake/D033/006.jpg shows a huge fiery many-petalled disc in a pillared hall above a small figure. v005 shows a palace courtyard: the bearded king stands steady at the left, the Kṛtyā at centre breaks apart against a single round petalled chakra, and Durvasa runs off to the right.

## Anatomy basis

Ambarisha and Durvasa (ordinary two-armed humans) and the single Kṛtyā apparition (one head, two arms, two legs).

## Observations

- Limbs, hands, feet and fingers (pass): The king joins two hands in namaskara with bangles and stands on two bare feet. The Kṛtyā raises one open five-fingered hand and grips a curved sword hilt in the other fist, on two anklet-bound feet. The running Durvasa spreads two five-fingered hands and runs on two bare feet.
- Attachment and proportions (pass): The Kṛtyā’s sword arm runs from an armlet at the shoulder to the fist, and her raised arm joins at the shoulder strap. Her torso and skirt break into matte flame-like fragments where the chakra touches, but her limbs stay continuous. Durvasa’s arms and legs are continuous.
- Faces (pass): Ambarisha has a dark full beard, moustache, tall ochre crown and earring, matching S001–S005. The Kṛtyā has one startled face with no duplicated features, and Durvasa keeps his white beard, matted topknot and lined face.
- Duplication and fusion (pass): One king, one Kṛtyā, one chakra and one Durvasa.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches stanza 6: the king does not move, the single chakra breaks up the Kṛtyā into muted painted fragments without gore, and Durvasa flees as the pursuit begins. The flames are matte with no neon or cinematic light.

## Defects

- None observed.

## Limitations

- The chakra is shown at the moment of contact rather than already turning after Durvasa; the pursuit is carried by Durvasa’s flight.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

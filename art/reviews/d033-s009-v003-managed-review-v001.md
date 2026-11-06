# D033 S009 v003 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Ambarisha’s compassion releases Durvasa from the chakra
- Selected native PNG: `artifacts/d033/s009/landscape/candidate-v003.png` (v003), SHA-256 `6704a975958d8265e4c8e67081533f2cef03dfa6468c100093d3cf5d18144e5d`, 1672 × 941. Byte-exact no-overwrite copy of the native ImageGen return listed in `/home/gehariharan/firstmate-images/data/d033-production/native-five-repairs/handoff.json`; `cmp` matched both the private copy and the native return path.
- Replaces the needs-fix v001 review, which is preserved unchanged.
- Inspected: full frame and detail views between 2026-11-06T18:07:37Z and 2026-11-06T18:07:58Z, against the final plan with S006 v005, S009 v003 and S010 v002 bound
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer notes and detail crops in the handoff were not relied on.

## Views actually opened

- Full frame: `artifacts/d033/s009/landscape/candidate-v003.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Detail crops cut from the exact selected bytes with `magick -crop` (enlarged where noted). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d033/review-evidence/managed-v002/s009-v003-zoom-king-face-hands.png`: region `440x340+460+100 at 130%`, SHA-256 `354a4af7fbfe2e58a95cd7057fb30e509b57788772896a98de2373e2478d8ab9`, opened between 2026-11-06T18:07:37Z and 2026-11-06T18:07:58Z
  - `artifacts/d033/review-evidence/managed-v002/s009-v003-zoom-hand-foot-contact.png`: region `420x200+380+740 at 200%`, SHA-256 `b2e5f4922047ae4552303813c6fec6390ec51d977675e22cc8ed5b4c1fe3200e`, opened between 2026-11-06T18:07:37Z and 2026-11-06T18:07:58Z
  - `artifacts/d033/review-evidence/managed-v002/s009-v003-zoom-chakra-shrine.png`: region `420x400+1230+60`, SHA-256 `bd2d7202b87ded5ab782243631cbdda97fa1dc9324bc25ad725144c1b8f56850`, opened between 2026-11-06T18:07:37Z and 2026-11-06T18:07:58Z

## References opened and hashed

- Source reference: `intake/D033/009.jpg` (SHA-256 `e6dece3050f5da0bc232463da33f430586285d1861fd5fa2112c11a02e058f93`), opened full-frame in the earlier D033 review round and compared again from that viewing
- Caption: `intake/D033/photo-captions.txt#009` (file SHA-256 `4dba7dd67c0f962a75b4213e5b1ca3971bcae0d8ecadddf5bd246c814a5fb2b0`, matching `content/sources/d033/intake-copy-manifest.json`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d033.json` (SHA-256 `f147f2397170bb1527a2e5fa275142b0943d8924918fcc23aec4fddab2601216`)
- Contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Contract: `art/bible/characters/durvasa/character.json` (SHA-256 `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab`)
- Contract: `art/bible/characters/guruvayurappan/character.json` (SHA-256 `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`)

## Source and story

intake/D033/009.jpg shows a crowned, short-bearded king in namaskara on a throne beside a white-bearded sage in saffron, with courtiers. v003 shows a courtyard under a tree: the bearded king bends in namaskara while Durvasa kneels and holds his feet, and one round chakra sits still beside a small shrine Vishnu. The rejected private v002 (SHA-256 f8119c9051d754a373905cff7c315c5a55f95bf139862b79a50b5e3a756d4104) is preserved at artifacts/d033/s009/landscape/candidate-v002.png and is not selected.

## Anatomy basis

Ambarisha and Durvasa (ordinary two-armed humans) and one small two-armed shrine image of Bhagwan.

## Observations

- Limbs, hands, feet and fingers (pass): Durvasa’s two hands, each with a bangle stack, rest on the top of the king’s foot and hold it, with five fingers on each hand. The king stands on two bare feet and joins two hands in namaskara. The shrine Vishnu raises one abhaya hand and lowers the other.
- Attachment and proportions (pass): Durvasa’s two arms reach continuously from the shoulders to his hands on the foot. The king’s bend runs from the hips with both arms attached.
- Faces (pass): Ambarisha has a dark full beard, moustache, plain ochre diadem and earring, with no peacock feather, matching S001–S005. Durvasa has a white beard, topknot and three ash lines. The shrine figure has the blue Guruvayurappan face.
- Duplication and fusion (pass): One king, one sage, one chakra and one shrine image.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches stanza 9: the sage clasps the king’s feet, the king bends with compassion and prays, and the single chakra is shown round and static beside Bhagwan’s shrine, with no motion trail. The image clearly separates the king from the deity.

## Defects

- None observed.

## Limitations

- The chakra’s return to Bhagwan is shown by its position beside the shrine, not by a trail.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

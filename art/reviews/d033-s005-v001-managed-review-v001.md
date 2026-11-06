# D033 S005 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Durvasa conjures the Kṛtyā after Ambarisha sips water
- Selected native PNG: `artifacts/d033/s005/landscape/candidate-v001.png` (v001), SHA-256 `593e8d8c86a4a4ba7b9cea64896ef88461143e6990388ec87ada693feb523d37` (recomputed after a byte-exact copy of the image file from the D033 production checkout), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T11:19:05Z and 2026-11-06T11:19:30Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer notes and records were not relied on.

## Views actually opened

- Full frame: `artifacts/d033/s005/landscape/candidate-v001.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Detail crops cut from the exact selected bytes with `magick -crop` (enlarged where noted). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d033/review-evidence/managed-v001/s005-v001-zoom-king.png`: region `520x700+0+220`, SHA-256 `8c56759d7e993a5eb7c0afafa1dbe1af407e51a090404b226f76ffeb49c2687f`, opened between 2026-11-06T11:19:05Z and 2026-11-06T11:19:30Z
  - `artifacts/d033/review-evidence/managed-v001/s005-v001-zoom-durvasa-arms.png`: region `600x260+600+60 at 130%`, SHA-256 `a4b91c017f520201e6a613bf27ac0635422c633fb80e9fca1bcc8745e3bfb324`, opened between 2026-11-06T11:19:05Z and 2026-11-06T11:19:30Z
  - `artifacts/d033/review-evidence/managed-v001/s005-v001-zoom-krtya.png`: region `480x700+1190+180`, SHA-256 `409470186f9c13a5f939e78b454e4ae97a48eaef1d106eab558760456b43b1c8`, opened between 2026-11-06T11:19:05Z and 2026-11-06T11:19:30Z

## References opened and hashed

- Source reference: `intake/D033/005.jpg` (SHA-256 `3b40132d5df23f79d04ce804b02373a524448c151e12863cfb053dcae4c6c856`), opened full-frame next to the candidate
- Caption: `intake/D033/photo-captions.txt#005` (file SHA-256 `4dba7dd67c0f962a75b4213e5b1ca3971bcae0d8ecadddf5bd246c814a5fb2b0`, matching `content/sources/d033/intake-copy-manifest.json`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d033.json` (SHA-256 `57e4a64aa4f2b3395fc45109e30ff4301a6814a4f877d843c9905bbd96a137c1`)
- Contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Contract: `art/bible/characters/durvasa/character.json` (SHA-256 `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab`)
- Contract: `art/bible/characters/krtya/character.json` (SHA-256 `93f4eb9ff20c8ae9eb98b222f6306be6d9c9e28c8028a99f518b729513fb3305`)

## Source and story

intake/D033/005.jpg is a collage: an enthroned king among courtiers, a king sipping from a leaf, and a sage with a glowing disc beside a deity in a mandala. The candidate merges these into one hall: the king sips from a cup on his throne, Durvasa points and raises a fistful of matted hair, and a single sword-bearing Kṛtyā stands in smoke.

## Anatomy basis

Two ordinary two-armed humans (Ambarisha and Durvasa) and one Kṛtyā apparition with one head, two arms and two legs.

## Observations

- Limbs, hands, feet and fingers (pass): Ambarisha raises a small cup in his right hand and rests his left hand on the throne arm; both bare feet show. Durvasa points with one hand and grips a lifted hank of matted hair with the other, standing on two feet. The Kṛtyā holds one sword in a closed right fist and spreads a clawed left hand; she stands on two bare feet.
- Attachment and proportions (pass): All arms attach at the shoulders with continuous elbows. The Kṛtyā’s sword hilt sits fully inside her fist.
- Faces (pass): Ambarisha: bearded, crowned and calm, consistent with stanzas 1–4. Durvasa: furious, white-bearded, with matted hair. Kṛtyā: one fierce face with no duplicated features.
- Duplication and fusion (pass): One king, one sage, one Kṛtyā and one sword; no extra spirits.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches stanza 5: the king concludes his fast with a sip, unafraid, while the angry sage conjures the Kṛtyā from his matted hair. The flames are matte and painted, with no gore or cinematic rays.

## Defects

- None observed.

## Limitations

- The Kṛtyā is already fully formed in the smoke rather than visibly emerging from the hair; the lifted hair still links her to Durvasa.
- The Kṛtyā wears a Vaishnava-style forehead mark. Her contract does not forbid it, but it is an odd identity cue for the apparition.
- Ambarisha sits at the left rather than at the focal centre the composition brief suggests.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

## Re-inspection after final selection change

The full frame `artifacts/d033/s005/landscape/candidate-v001.png` (SHA-256 `593e8d8c86a4a4ba7b9cea64896ef88461143e6990388ec87ada693feb523d37`) was reopened between 2026-11-06T18:08:44Z and 2026-11-06T18:09:00Z, after `art/plans/d033.json` was updated to bind S006 v005, S009 v003 and S010 v002 and after the origin/main D034 merge. The bearded king sips from the cup, Durvasa raises his matted hair, and the single sword-bearing Kṛtyā stands in smoke, leading into the S006 v005 dispersal; unchanged.

- Final contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Final contract: `art/plans/d033.json` (SHA-256 `f147f2397170bb1527a2e5fa275142b0943d8924918fcc23aec4fddab2601216`)
- Final contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Final contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Final contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Final contract: `art/bible/characters/durvasa/character.json` (SHA-256 `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab`)
- Final contract: `art/bible/characters/krtya/character.json` (SHA-256 `93f4eb9ff20c8ae9eb98b222f6306be6d9c9e28c8028a99f518b729513fb3305`)

## Re-inspection after S002 v003 and S008 v003 selection

The full frame `artifacts/d033/s005/landscape/candidate-v001.png` (SHA-256 `593e8d8c86a4a4ba7b9cea64896ef88461143e6990388ec87ada693feb523d37`) was reopened between 2026-11-06T19:06:49Z and 2026-11-06T19:07:10Z, after `art/plans/d033.json` was updated to bind S002 v003 and S008 v003 and after the origin/main D031 merge (which adds no D033 contract). The bearded king sips from the cup, Durvasa raises his matted hair, and the single sword-bearing Kṛtyā stands in smoke; unchanged.

- Final contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Final contract: `art/plans/d033.json` (SHA-256 `328493583e4d47a527d1d527062dbf04e4af7f3f68878f74086ce17aeefefc79`)
- Final contract: `content/daskams/d033.json` (SHA-256 `a9dd3e35bd441d0012c176f67cd3ef1f02c4a6d382a0c84b366f4df6ddd24475`)
- Final contract: `content/sources/d033/reference-map.json` (SHA-256 `7da63e0427a88636ec40e1ec96e009378ccb7422930215c30a35ba6a17ee4427`)
- Final contract: `art/bible/characters/ambarisha/character.json` (SHA-256 `d32339eeae010981f30a20c1bc5c0c4c691627e371f0e385a47a34459b8e4001`)
- Final contract: `art/bible/characters/durvasa/character.json` (SHA-256 `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab`)
- Final contract: `art/bible/characters/krtya/character.json` (SHA-256 `93f4eb9ff20c8ae9eb98b222f6306be6d9c9e28c8028a99f518b729513fb3305`)

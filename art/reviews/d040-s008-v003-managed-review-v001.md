# D040 S008 v003 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Putana falls in her giant form
- Selected native PNG: `artifacts/d040/s008/landscape/v003/candidate.png` (v003), SHA-256 `1d453c303725a165c51a0075efac329547987e0b3f6f14de15be9de6a440fdc8`, 1672 × 941. It is a byte-identical copy of the helper raw `/home/gehariharan/firstmate-images/data/d040-s008-v003-native-repair/v003/candidate.png`, verified by hash after the copy.
- Inspected: full frame and detail views between 2026-11-06T08:04:03Z and 2026-11-06T08:04:32Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. The helper's provisional self-check (`artifacts/d040/s008/landscape/v003/self-check.json`, plus `helper-report.md`) was read for custody only and was not relied on for clearance. Portraits remain paused.

## Why this version exists

S008 v002's pass is invalidated (`art/reviews/d040-s008-v002-invalidation-addendum-v001.md`): its far arm rooted at mid-chest instead of at a shoulder. v003 is a native edit of v002 that targets that defect only.

## Views actually opened

- Full frame: `artifacts/d040/s008/landscape/v003/candidate.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (gitignored local evidence, reproducible from the geometry):
  - `artifacts/d040/review-evidence/managed-v002/s008-v003-far-shoulder-root-x2.5.png`: region `420x280+300+220 then 250% Lanczos`, SHA-256 `7a4c54ca392cb9648076bc6f39394b53aab8a1784b1155e4cc2d8ad58239c0f6`, opened between 2026-11-06T08:04:13Z and 2026-11-06T08:04:32Z
  - `artifacts/d040/review-evidence/managed-v002/s008-v003-far-elbow-wrist-hand-x2.png`: region `440x220+520+160 then 200% Lanczos`, SHA-256 `2a5c89891e8afc377e3b43141b3c16ec63f4c6f4ee7ce6f1b4597ce9e8124e71`, opened between 2026-11-06T08:04:13Z and 2026-11-06T08:04:32Z
  - `artifacts/d040/review-evidence/managed-v002/s008-v003-infant-x3.png`: region `260x200+470+190 then 300% Lanczos`, SHA-256 `31d5344332eca0c9dc5c13aac27b900b775851bf2861917bc61ed3fc072d9645`, opened between 2026-11-06T08:04:13Z and 2026-11-06T08:04:32Z
  - `artifacts/d040/review-evidence/managed-v002/s008-v003-near-arm-hand.png`: region `440x330+20+520`, SHA-256 `b96a5a34980fc028b9f79c67df204255a320cb08c4296f6d6716d2c737e4c405`, opened between 2026-11-06T08:04:13Z and 2026-11-06T08:04:32Z
  - `artifacts/d040/review-evidence/managed-v002/s008-v003-face-x2.png`: region `420x280+80+260 then 200% Lanczos`, SHA-256 `7b25a0a5c0ab4860d78869ab08f1f3e383881198e13f54aec9caa95862be59b7`, opened between 2026-11-06T08:04:13Z and 2026-11-06T08:04:32Z
  - `artifacts/d040/review-evidence/managed-v002/s008-v003-villagers-x2.png`: region `560x240+1110+70 then 200% Lanczos`, SHA-256 `7570824079fb7fe708cbea9cb8c2fc347b86c11b9660c53e911280f88f32cbbc`, opened between 2026-11-06T08:04:13Z and 2026-11-06T08:04:32Z
  - `artifacts/d040/review-evidence/managed-v002/s008-v003-se.png`: region `836x470+836+471`, SHA-256 `40355b20d2f1b883591040c099e1fb71cdb233a43ea43d95e1eb1ad8c581f323`, opened between 2026-11-06T08:04:13Z and 2026-11-06T08:04:32Z

## References and contracts read

- Source reference: `intake/D040/008.jpg` (SHA-256 `90cdf2d15c067c5dd0a9800021015570801568475a322ae9497d65edbf949729`), opened full-frame in this run's first inspection pass
- Caption: `intake/D040/photo-captions.txt#008` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `f9d2ae2b5fcbcfadbef1d552ceb100fd774486443823ec306afd901f1108b6f5`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/putana/character.json` (SHA-256 `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- Contract: `art/bible/characters/gopas/character.json` (SHA-256 `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`)
- Rejected predecessor: `artifacts/d040/s008/landscape/v002/candidate.png` (SHA-256 `60d35c2c7e1f3e3d9999e461733c8a98ff1256b12241aaf4a871361e2cad32eb`) and its full managed report `art/reviews/d040-s008-v002-managed-review-v001.md`, compared for the arm root and unchanged regions
- Putana disguise continuity: `artifacts/d040/s004/landscape/v001/candidate.png` (SHA-256 `b9f9abe41106e04f44d1baabb86cdbf1431ee03cde49683781a5e8640fec533d`)
- Infant identity anchor: `artifacts/d040/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`)

## Anatomy basis

One immense adult demoness (Putana's true form), one two-armed infant Krishna, and eleven distant villagers: three adult men, two adult women and six children.

## Observations

- Limbs, hands, feet and fingers (pass): Putana's far arm stretches to the upper right and ends in an open hand with a thumb and four fingers below stacked gold bangles. Her near arm lies to the lower left with an open palm, four fingers and a thumb, and gold bangles. Both feet show five toes and beaded gold anklets. The infant is on all fours with two hands flat on the drape and two bent legs with toes. The villagers' hands are joined, pointing or at their sides.
- Attachment and proportions (pass): Resolves D040-S008-FAR-ARM-ROOT-V002. The far arm now rises from a maroon, gold-bordered shoulder cap beside the base of the neck at about (410,320), roughly across the body from the near shoulder at about (330,520). Its olive-grey upper arm runs behind the infant's back to a nearly straight elbow, then on to the wrist bangles and hand, tapering naturally with no stump, second sleeve or mid-chest root. Both arms are similar in length and thickness and proportionate to the giant's head and legs. The infant has infant proportions.
- Faces (pass): Putana: grey-green face with closed eyes and a calm expression, pale forehead mark, long dark hair spread on the ground, a white flower and a round gold drop earring, unchanged from v002 and matching the putana contract's giant-form markers. Infant: namam, almond eyes, short curls, peacock feather, calm smile. Villagers: distinct small faces, including a bearded turbaned man and a clean-shaven man with joined palms.
- Duplication and fusion (pass): One giant, one infant and eleven distinct distant villagers (three men, two women, six children). The two overlapping children right of the tree are separate figures. The infant overlaps the far upper arm without merging with it.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Matches the stanza and caption 8: she falls with both arms stretched out, and the infant is safe and small on her upper chest. The putana giant-true-form mode holds: grey-green skin, the flower and earring carried over from the disguise, the maroon gold-bordered upper drape and the torn ochre patterned lower cloth, with no horns, gore or wounds. The infant matches the v004 anchor. The villagers bind to the gopas and gopikas contracts. The matte mural palette and firm contours are unchanged from v002; no glossy or metallic drift.

## Defects

- None observed.

## Limitations

- The infant overlaps the middle of the far upper arm. The shoulder root and the forearm on either side are both exposed and continuous.
- The far elbow is nearly straight and is read from the arm's contour and taper rather than a strong bend.
- Small distant villager hands and feet are a few pixels across; no fusion or extra limb is visible at that scale.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifests or masters were changed. Human editorial and art approval remain pending.

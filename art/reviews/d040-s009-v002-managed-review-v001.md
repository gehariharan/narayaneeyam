# D040 S009 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: The gopis rescue Krishna
- Selected native PNG: `artifacts/d040/s009/landscape/v002/candidate.png` (v002), SHA-256 `8b5cf233fe19c00dccf0e4d0e71662380b5b0fa298f638d6487c4ef0283a8296`, 1672 × 941. It is a byte-identical copy of the helper raw `/home/gehariharan/firstmate-images/data/d040-production/native-s009-repair/v002/candidate.png`, verified by hash after the copy.
- Inspected: full frame and detail views between 2026-11-06T08:31:46Z and 2026-11-06T08:32:37Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. The helper's provisional self-check (`artifacts/d040/s009/landscape/v002/self-check.json`, plus `helper-report.md`) was read for custody only and was not relied on for clearance. Portraits remain paused.

## Why this version exists

S009 v001 (`artifacts/d040/s009/landscape/v001/candidate.png`, SHA-256 `0929f26e01ad015adb04230d8ce7f2f276b21731d0cfd107da680d706b589c8e`) is needs-fix under finding `D040-S009-FAR-ARM-ROOT-V001`: its far arm rooted mid-torso. Its first-pass report (`art/reviews/d040-s009-v001-managed-review-v001.md`) and the needs-fix record in `art/reviews/d040-s008-repair-context-recheck-managed-review-v001.md` stay unchanged as history. v002 is a native edit of v001 that targets that defect only.

## Views actually opened

- Full frame: `artifacts/d040/s009/landscape/v002/candidate.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (gitignored local evidence, reproducible from the geometry):
  - `artifacts/d040/review-evidence/managed-v003/s009-v002-far-shoulder-x2.png`: region `560x260+300+140 then 200% Lanczos`, SHA-256 `52ee46658bc2f7aa7d4f2808aee2a501fec9b0febd026d7986d6ad0b9ad5d2fe`, opened between 2026-11-06T08:31:55Z and 2026-11-06T08:32:37Z
  - `artifacts/d040/review-evidence/managed-v003/s009-v002-far-elbow-wrist-hand-x2.5.png`: region `360x140+560+140 then 250% Lanczos`, SHA-256 `a634098c98487bd1960344fb782dd25d928eb9b6cf1f1a83cdc83ae51326517c`, opened between 2026-11-06T08:31:55Z and 2026-11-06T08:32:37Z
  - `artifacts/d040/review-evidence/managed-v003/s009-v002-near-arm-hand-x2.png`: region `360x220+120+330 then 200% Lanczos`, SHA-256 `c779643ab8ab2c244b54bb53433899c0f729f4711b047f78908ae1dea3c6927c`, opened between 2026-11-06T08:31:55Z and 2026-11-06T08:32:37Z
  - `artifacts/d040/review-evidence/managed-v003/s009-v002-infant-transfer-x1.6.png`: region `560x440+560+480 then 160% Lanczos`, SHA-256 `250dea5bbc1ee7d80ec485379ab22848d037a1d1d52d7f36b634ce0ca3a0ffe6`, opened between 2026-11-06T08:31:55Z and 2026-11-06T08:32:37Z
  - `artifacts/d040/review-evidence/managed-v003/s009-v002-sw.png`: region `836x470+0+471`, SHA-256 `342a610879b31590971599d9661f27a21d12ba440de320c15d555ec942f40663`, opened between 2026-11-06T08:31:55Z and 2026-11-06T08:32:37Z
  - `artifacts/d040/review-evidence/managed-v003/s009-v002-se.png`: region `836x470+836+471`, SHA-256 `b0c0d2fd46532abebc3533dec1d171dd39e47375c59e8a685a927b0508a77dec`, opened between 2026-11-06T08:31:55Z and 2026-11-06T08:32:37Z
  - `artifacts/d040/review-evidence/managed-v003/s009-v002-legs-feet.png`: region `560x280+1000+220`, SHA-256 `ddcd58ad0fc7e0c296f341bdab0b82a665ea84d3872af9431a46e52d364b3b3e`, opened between 2026-11-06T08:31:55Z and 2026-11-06T08:32:37Z

## References and contracts read

- Source reference: `intake/D040/009.jpg` (SHA-256 `48c3c63dcdf518d08aa822b781319159e5592ae1d2578432086d3dfa9d2974f0`), opened full-frame in this run's first inspection pass
- Caption: `intake/D040/photo-captions.txt#009` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `801bb4b03eb904f149c14733ee1fc3b27b1850425f51fdab7c7762cea3342047`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/putana/character.json` (SHA-256 `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- Rejected predecessor: `artifacts/d040/s009/landscape/v001/candidate.png` (SHA-256 `0929f26e01ad015adb04230d8ce7f2f276b21731d0cfd107da680d706b589c8e`), compared for the arm root and unchanged regions
- Putana giant-form continuity: `artifacts/d040/s008/landscape/v003/candidate.png` (SHA-256 `1d453c303725a165c51a0075efac329547987e0b3f6f14de15be9de6a440fdc8`), opened full-frame at 2026-11-06T08:32:37Z
- Infant identity anchor: `artifacts/d040/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`)

## Anatomy basis

Six adult gopikas, one fallen giant demoness (Putana) and one two-armed infant Krishna.

## Observations

- Limbs, hands, feet and fingers (pass): Putana's far arm ends in an open hand at upper centre (about 880,175), with a thumb and four fingers below stacked gold bangles. Her near arm lies to the lower left, ending in an open palm with four fingers and a thumb. Both feet show five toes and beaded anklets. The saffron-veiled gopika supports the infant with one hand under his back and one under his legs; the cream-sari gopika reaches in with two four-fingered hands; the green-sari gopika's two hands meet below. The outer gopis raise open hands with thumbs and four fingers. The infant raises two open hands and shows both feet with toes.
- Attachment and proportions (pass): Resolves D040-S009-FAR-ARM-ROOT-V001. The far arm now rises from a maroon, gold-bordered shoulder cap beside the base of the neck at about (450,215). Its upper arm, nearly straight elbow and forearm run continuously to the wrist bangles and hand, with no mid-torso sleeve or stump. The near arm rises from the opposite shoulder at about (420,340). Both arms are similar in length and thickness and proportionate to the giant's head and legs. The gopis' arms run from shoulder to bangle to hand, and the transfer hands are clearly separate. The infant has exactly two arms and two legs with infant proportions.
- Faces (pass): Six distinct gopika faces: purple veil, cream sari with flowers in a bun, green veil, saffron veil, rose veil, and green sari with flowers in a bun, all as in v001. Infant: namam, almond eyes, short curls, peacock feather, calm smile. Putana: grey-green face with closed eyes, pale forehead mark, white flower and round gold earring, matching S008 v003.
- Duplication and fusion (pass): Six different gopis, one infant and one giant. No repeated or fused figure; the rescuers' overlapping hands stay separate.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows the gopis hurrying to lift Krishna from Putana's fallen body. Her giant-true-form markers (grey-green skin, flower, earring, maroon gold-bordered upper drape, torn ochre patterned lower cloth, long dark hair) follow the putana contract and match S008 v003, and her far shoulder now matches S008 v003's corrected attachment. The infant matches the v004 anchor. The gopis follow the gopikas contract, and the holder's saffron-and-maroon dress is not Yashoda's cream/rose family. The matte mural palette and firm contours are unchanged from v001.

## Defects

- None observed.

## Limitations

- Putana's far elbow is nearly straight and is read from the arm's contour rather than a strong bend.
- The holder's far forearm and the green-sari gopika's lower arms are partly overlapped by other figures; every visible segment is continuous.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No approval manifests or masters were changed. Human editorial and art approval remain pending.

# D040 S009 v001 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: The gopis rescue Krishna
- Selected native PNG: `artifacts/d040/s009/landscape/v001/candidate.png` (v001), SHA-256 `0929f26e01ad015adb04230d8ce7f2f276b21731d0cfd107da680d706b589c8e` (recomputed after a byte-exact copy from `/home/gehariharan/firstmate-images/data/core-worktrees/d014-production/artifacts/d040/s009/landscape/v001/candidate.png`), 1672 × 941
- Inspected: full frame and detail views between 2026-11-06T07:34:24Z and 2026-11-06T07:34:33Z; re-inspected against the final putana contract between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. The producer self-review (`artifacts/d040/s009/landscape/v001/review.md`) was not relied on.

## Views actually opened

- Full frame: `artifacts/d040/s009/landscape/v001/candidate.png`, the entire 1672x941 frame opened as one image (the viewer may scale it for display).
- Native-resolution detail crops cut from the exact selected bytes with `magick -crop`. These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d040/review-evidence/managed-v001/s009-v001-sw.png`: region `836x470+0+471`, SHA-256 `dea71743282fd8cc349f6d637f685f5dda37f2de1788b4adb31962d32eeae4d4`, opened between 2026-11-06T07:34:24Z and 2026-11-06T07:34:33Z
  - `artifacts/d040/review-evidence/managed-v001/s009-v001-se.png`: region `836x470+836+471`, SHA-256 `673693d4fc8af36deee29bbd4f803f08475c6859271eea4ce7883ed731172082`, opened between 2026-11-06T07:34:24Z and 2026-11-06T07:34:33Z
  - `artifacts/d040/review-evidence/managed-v001/s009-v001-transfer-hands-x1.6.png`: region `560x440+560+480 then 160% Lanczos`, SHA-256 `46e9b333578282b62ea505ceb6179ac643ea591834233ed30d720fd42f4b8dac`, opened 2026-11-06T07:34:33Z
  - `artifacts/d040/review-evidence/managed-v001/s009-v001-cupped-hands-x3.png`: region `260x200+700+700 then 300% Lanczos`, SHA-256 `c9c21f0475bf35ca62339d0b1e44f3565f805be47edd006e15df34be0e164065`, opened 2026-11-06T07:34:47Z

## References opened and hashed

- Source reference: `intake/D040/009.jpg` (SHA-256 `48c3c63dcdf518d08aa822b781319159e5592ae1d2578432086d3dfa9d2974f0`), opened full-frame immediately before the candidate
- Caption: `intake/D040/photo-captions.txt#009` (file SHA-256 `96507445d1b088e44a98066a0b43a91ea1f907d3d6228b511d6724d040ee5a76`)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d040.json` (SHA-256 `1535781f2295007c95583ba8765e446b7556f3c49823190f1c7ecc205eef42ac`)
- Contract: `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- Contract: `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- Contract: `art/bible/characters/putana/character.json` (SHA-256 `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`)
- Contract: `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- Contract: `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- Comparison image: `artifacts/d040/references/shared/infant-krishna-working-anchor-v004.png` (SHA-256 `02dc00fb91d08b0ace6141e184834a52c0143058001cc778f1d5dd79d38cd13d`), infant identity anchor (opened full-frame 2026-11-06T07:35:05Z-07:35:19Z)
- Comparison image: `artifacts/d040/s004/landscape/v001/candidate.png` (SHA-256 `b9f9abe41106e04f44d1baabb86cdbf1431ee03cde49683781a5e8640fec533d`), Putana disguise continuity (selected S004 v001)

## Source and story

intake/D040/009.jpg shows villagers clustered around the fallen giant, with the small blue infant on her body and a boy climbing up. The candidate shows the fallen giant across the background, while six gopis in the foreground gather round as one, in a saffron veil, cradles the infant and another reaches to steady him.

## Anatomy basis

Six adult gopikas, one fallen giant demoness (Putana) and one two-armed infant Krishna.

## Observations

- Limbs, hands, feet and fingers (pass): The saffron-veiled gopika holds the infant with two hands, one under his back and one under his legs. The cream-sari gopika reaches in with two hands, one under his arm and one under his back, each with four fingers. The green-sari gopika's two hands are clasped together below. The outer gopis raise open hands, each with a thumb and four fingers. The infant raises two open hands and shows both feet with toes. Putana's two outstretched hands and two anklet-bound feet are visible.
- Attachment and proportions (pass): Each gopika's arms run continuously from shoulder to bangle to hand; the transfer hands are clearly separate. The infant has exactly two arms and two legs. Putana's limbs connect through her sleeves and lower cloth.
- Faces (pass): Six distinct gopika faces: purple veil, cream sari with flowers in a bun, green veil, saffron veil, rose veil, and green sari with flowers in a bun. Infant: namam, feather, calm smile. Putana: closed eyes, pale forehead mark, white flower, round gold earring.
- Duplication and fusion (pass): Six different gopis, one infant and one giant; no repeated figure.
- Text and marks (pass): None observed.
- Scene, identity, composition and style (pass): Shows the gopis hurrying to lift Krishna from Putana's body. Her giant form matches S008 and the putana contract. The infant matches the anchor. The gopis follow the gopikas contract's simple village saris, and the holder's saffron-and-maroon dress is not styled as Yashoda's cream/rose family.

## Defects

- None observed.

## Limitations

- As in S008, Putana's far arm emerges from its sleeve somewhat along the torso; it is connected and reads as outstretched.
- Re-opened against the final putana contract between 2026-11-06T07:37:06Z and 2026-11-06T07:37:21Z.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

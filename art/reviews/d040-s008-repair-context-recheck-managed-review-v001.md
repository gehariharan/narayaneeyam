# D040 S008 repair context recheck managed review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Re-inspected: between 2026-11-06T08:04:52Z and 2026-11-06T08:05:15Z; S009 far-shoulder detail at 2026-11-06T08:05:15Z
- Reason: selecting S008 v003 changed `art/plans/d040.json`, which every D040 review binds. Each other selected frame was re-opened at full frame against the final plan and contracts. Replacing only the context hash is not a review.

## Final contracts

- `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- `art/plans/d040.json` (SHA-256 `f9d2ae2b5fcbcfadbef1d552ceb100fd774486443823ec306afd901f1108b6f5`)
- `content/daskams/d040.json` (SHA-256 `2d3cfd5110112e6e447ad149fea28c749f29fab2f40e4aaff6726546c76b1419`)
- `content/sources/d040/reference-map.json` (SHA-256 `47a1f4b7578d8a2633e63f4ed3ad2960f9ba36f794cf1f7549744535b6529c51`)
- `art/bible/characters/putana/character.json` (SHA-256 `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`)
- `art/bible/characters/infant-krishna/character.json` (SHA-256 `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`)
- `art/bible/characters/gopikas/character.json` (SHA-256 `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`)
- `art/bible/characters/vasudeva/character.json` (SHA-256 `b48f743c0d11b884adecf7f61e0d33d26f5f58a5b58dbb21197c1469c54d0ec8`)
- `art/bible/characters/nandagopan/character.json` (SHA-256 `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`)

## Frames re-opened

- S001 v001 `artifacts/d040/s001/landscape/v001/candidate.png` (SHA-256 `de2a53ef94bbe24f812535506d2672b4623e67a618d54249340bda29321b4df1`): Nanda and Vasudeva meet in the courtyard; two men, connected arms, contract clothing. Unchanged: pass.
- S002 v002 `artifacts/d040/s002/landscape/v002/candidate.png` (SHA-256 `810d675b891550b867b36eb65651ceb0d64311e1d87729fdd99c9cdcc8295532`): Vasudeva's hand on Nanda's shoulder, no infant; identities match S001. Unchanged: pass.
- S003 v001 `artifacts/d040/s003/landscape/v001/candidate.png` (SHA-256 `a183bbae25a1a65ea713fc8d9887604c847524d53e51e6f0c3f3eb40421e551a`): Vasudeva's raised warning palm; Nanda walking off with his bundle toward Gokula. Unchanged: pass.
- S004 v001 `artifacts/d040/s004/landscape/v001/candidate.png` (SHA-256 `b9f9abe41106e04f44d1baabb86cdbf1431ee03cde49683781a5e8640fec533d`): Putana's disguise: maroon gold-dotted sari, cream veil, white flower, maang-tikka; two arms, mid-stride feet. Unchanged: pass.
- S005 v001 `artifacts/d040/s005/landscape/v001/candidate.png` (SHA-256 `b7ba31c30edef2b32bf625cdd2d6d09d1052be9347ed513df1507faeac2c6f7d`): Putana lifts the two-armed infant; two distinct gopis wonder. Unchanged: pass.
- S006 v001 `artifacts/d040/s006/landscape/v001/candidate.png` (SHA-256 `0282f55b97a11d50f71e2672bbdfe3d4a3280452306ee16c63a58ff3bee8568e`): Covered nursing embrace, infant's face visible, gopis watching. Unchanged: pass.
- S007 v001 `artifacts/d040/s007/landscape/v001/candidate.png` (SHA-256 `6616b1f484f140cdf55e4e1b674e8423854d89e8caa175922369323e99944aee`): Startled Putana with a raised palm, poison wisp into the infant's glow, chest covered. Unchanged: pass.
- S009 v001 `artifacts/d040/s009/landscape/v001/candidate.png` (SHA-256 `0929f26e01ad015adb04230d8ce7f2f276b21731d0cfd107da680d706b589c8e`): **needs-fix.** The full frame and a far-shoulder detail (`artifacts/d040/review-evidence/managed-v002/s009-v001-far-shoulder-x2.png`, region `560x260+300+140 then 200% Lanczos`, SHA-256 `16e63d1fa382ea63e6123a85b34ee96faaaab82e4e90af32b64c4a79a14b6a1e`) show the same malformation invalidated in S008 v002, in milder form. The giant's near shoulder sleeve is at about (420,340) and her neck at about (470,235), so the far shoulder should sit near (470,175). Instead the far arm emerges from a maroon gold-bordered sleeve at about (760,200), roughly halfway along the torso toward the waist. The first-pass report filed this under Limitations; under the final putana contract it is a defect. Finding `D040-S009-FAR-ARM-ROOT-V001`. The foreground gopis and infant are unchanged and acceptable.
- S010 v001 `artifacts/d040/s010/landscape/v001/candidate.png` (SHA-256 `20f4aef085c650982bf37c1cbabc87fa2ce3a9e5c0e809244a172d03437cbd9f`): Four distinct gopis pray around the infant held on a lap. Unchanged: pass.

## Outcome

Eight frames (S001-S007, S010) keep their pass, rebound to the final plan hash. S009 v001 is now needs-fix pending a native repair; its first-pass report stays unchanged as history. No approval manifests, masters or image bytes were changed.

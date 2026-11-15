# D041 S004 v003 producer inspection

- Reviewer: producer (Codex ImageGen worker)
- Inspected at: 2026-11-15T18:13:13Z
- Outcome: needs-fix, producer inspection only; the better v003 is retained under the authorized one-round limit. This does not approve the artwork.
- Candidate: `artifacts/d041/s004/landscape/candidate-v003.png` (v003, 1671x941, SHA-256 `0d5003d417a7aa15941aab68eba2afa71c3cf68a46fbcdf9e695adc5a06a02f7`)
- Mapped source: `intake/D041/004.jpg` (SHA-256 `df7a711e65c452d5a70f7170f64b1be796922df7abbfa4cb903b570111ff4439`), source photo 004 mapped to stanza 4 in the accepted reference map.
- Viewing: inspected the full native image and enlarged face, arm and foot crops at `artifacts/d041/review-crops/s004-v003-face.png`, `s004-v003-arm.png` and `s004-v003-feet.png`; checked against the plan and infant Krishna, Putana and gopika contracts.

## Image-specific observations

Krishna's hand rests on Putana's maroon-covered torso, and the pale fragrance curls remain above her face. The five gopikas sit to the right with distinct faces and separate silhouettes. Putana's skin now reads olive-grey instead of the previous v002 tan/ochre, and it is visibly closer to muted grey-green; however, small-patch median channel samples do not meet the explicit green-over-red requirement. The 15×15 px medians are face RGB (165, 144, 88), exposed arm (145, 126, 73), upper foot (168, 147, 90), and lower foot (160, 141, 84). Green is 19–21 below red in these samples. The authorized final repair round is exhausted, so v003 remains the better candidate with this measured deviation disclosed.

## Checks

- Anatomy and limbs: pass — Putana's extended arm connects to her shoulder and the two visible feet retain toes; Krishna's two arms and legs connect naturally to his body.
- Attachment and proportions: pass — Krishna's palm rests on the covered body; no fused bodies observed.
- Faces and duplication: pass — the seated women have distinct visible faces; no duplicated figure observed.
- Frame edges: pass — Putana's hand and both feet are inside the frame; the gopikas are not cut by the right edge.
- Text and artifacts: pass — no readable text, signature-like mark, logo or watermark observed at native size or in the crops.
- Scene and style: needs-fix — the subdued olive-grey appearance is improved over v002, but measured green remains below red in the sampled Putana skin patches, contrary to the explicit channel condition.

## Context hashes

- `art/bible/series.json` — `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d041.json` — `6eaba8a5f6ed259e7ac84661bb162517907fc830ecc93caccbdbcb52ff451061`
- `art/bible/characters/infant-krishna/character.json` — `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`
- `art/bible/characters/putana/character.json` — `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`
- `art/bible/characters/gopikas/character.json` — `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`

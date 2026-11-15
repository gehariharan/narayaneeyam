# D041 S001 v004 producer inspection

- Reviewer: producer (Codex ImageGen worker)
- Inspected at: 2026-11-15T18:45:04Z
- Outcome: needs-fix, producer inspection only; v004 is retained as the better of v003 and v004 under the final-round limit. This does not approve the artwork.
- Candidate: `artifacts/d041/s001/landscape/candidate-v004.png` (v004, 1670x941, SHA-256 `a0fe8160015c87d1141fbc3d3af7e76ca09d91052a29f6d917f94ae411b80f6b`)
- Mapped source: `intake/D041/001.jpg` (SHA-256 `a3f1bbe1edd58a02b1eee3d19878e4b55848f6b3f31f4e9eabf14f7ed6400782`), source photo 001 mapped to stanza 1 in the accepted reference map.
- Viewing: inspected the full native image and enlarged face, arm and foot crops at `artifacts/d041/review-crops/s001-v004-face.png`, `s001-v004-arm.png`, `s001-v004-feet.png` and `s001-v004-lower-foot.png`; the skin-only measurement patches were also enlarged to verify they exclude adjacent details.

## Image-specific observations

Nanda and one companion stand beside the cow and look toward the immense fallen Putana under the broken tree; the infant remains safely seated beside her. Putana's hair, white flower and maroon drape remain intact. v004 reads as subdued grey-olive and is closer to target RGB (125, 135, 110) than v003 at the same sites, but its sampled skin remains khaki/olive rather than meeting green-at-or-above-red. The skin-only 15×15 px median samples are face RGB (153, 138, 87), visible arm (151, 136, 86), upper foot (153, 137, 86) and lower foot (153, 138, 87); green is 15–16 below red. The comparable v003 samples had green 15–16 below red as well. This was the final authorized generation, so v004 is retained and its remaining deviation is disclosed.

## Checks

- Anatomy and limbs: pass — Nanda and his companion have connected ordinary limbs; Putana's visible arm and both feet connect to her body; Krishna has two infant arms and legs.
- Attachment and proportions: pass — no fused people or detached parts observed; the infant is seated safely beside Putana.
- Faces and duplication: pass — Nanda and his companion remain distinct; no duplicate person observed.
- Frame edges: pass — visible hands and feet remain inside the frame.
- Text and artifacts: pass — no readable text, signature-like mark, logo or watermark observed at native size or in enlarged crops.
- Scene and style: needs-fix — the new skin is closer to the target than v003 but red remains 15–16 above green in face, arm and foot samples, so the stated color condition is not met.

## Context hashes

- `art/bible/series.json` — `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d041.json` — `5d1dd114825db70e6993ab393034e7b6adcbb2cf29c443a87f4647feaa7bafdd`
- `art/bible/characters/infant-krishna/character.json` — `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb`
- `art/bible/characters/nandagopan/character.json` — `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`
- `art/bible/characters/putana/character.json` — `cf57d8fb8c2fadda10d54c5f4ff4ca21968d966381a37ae0536047655b54b535`
- `art/bible/characters/gopas/character.json` — `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`

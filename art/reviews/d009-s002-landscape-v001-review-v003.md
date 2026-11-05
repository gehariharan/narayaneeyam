# D009 S002 candidate v001 visual review revision

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Inspected at: 2026-11-02T10:24:35Z
- Method: Rubric revision only; no new image viewing. The observations come from the full-resolution inspection recorded in the superseded report.
- Candidate: `artifacts/d009/s002/landscape/candidate-v001.png`
- SHA-256: `d96243c60f31a9c350f1faffadeba997c237ac39fd4193104794f668125ecdbf`
- Supersedes: `art/reviews/d009-s002-landscape-v001-review-v002.md`. The gaze requirement is in must_show, so the deviation is a scene defect, not a pass; v002 replaces this lead.
- Contracts read for this inspection:
  - `art/bible/series.json` `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
  - `art/plans/d009.json` `576efd5f106e78d1f7f24cdf379912a3620034ecb825891c9f6384231f564e3e`
  - `content/daskams/d009.json` `1f2b4c6111792635c5fde1df453d68d0f13122212cc49f233682c2f243e3c6f3`
  - `art/bible/characters/brahma/character.json` `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`
- Outcome: **needs-fix**

## Observations

- Limbs, hands and feet (Pass): Brahma has four arms: upper viewer-left holds an open book, lower viewer-left a water pot, upper viewer-right a lotus, lower viewer-right prayer beads. At a 1.6x crop, the shape in his lap is his crossed foot with an anklet and five toes, not an extra hand.
- Attachments and proportions (Pass): Two arms attach on each side; the upper pair emerge just behind the lower pair's shoulders, each with an armlet, and no forearm floats or forks. Seated proportions are natural; the single stem is continuous from the flower base into the water at lower left.
- Faces and identity (Pass): Three distinct frontal bearded faces with clean eyes and features; the fourth head is not visible, as the character contract allows.
- Duplication and fusion (Pass): One Brahma alone on one lotus with one stem; no Narayana, other beings or fused forms.
- Text and artifacts (Pass): At a 4x crop, the open book pages carry faint horizontal ruled strokes but no glyphs or letterforms. There is no caption, signature, logo, watermark or outer border.
- Scene, framing and style (Needs fix): The plan's must_show requires Brahma looking over the ocean and down the single supporting stem. Brahma faces the viewer and does not gaze down the stem. The rest of the scene (solitary lotus, unseen source, matte style) matches the plan.

## Findings

- Brahma faces the viewer instead of looking down the supporting stem, as the stanza 2 must_show requires.

This finding applies only to the exact checksum above. It does not approve art or authorize an update to `art/approved/d009.json`.

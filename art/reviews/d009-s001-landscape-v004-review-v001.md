# D009 S001 candidate v004 visual inspection (Firstmate gate repair, rejected)

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Inspected at: 2026-11-02T11:05:45Z
- Method: Full-resolution frame opened individually, plus native-pixel crops (some enlarged).
- Close views: full frame; Brahma heads and arms (2x); Narayana's torso, four arms, navel and stem (native and 1.5x).
- Candidate version slot: `artifacts/d009/s001/landscape/candidate-v004.png`. Not hydrated into artifacts and not selected; the reviewed bytes are the Firstmate repair output below.
- Reviewed file: `/home/gehariharan/firstmate-images/data/d009-production/gate-image-repairs/outputs/d009-s001-repair-v012.png` (S001 repair attempt 12; raw output `/home/gehariharan/.codex/generated_images/01a19b4c-1501-7ec2-90b7-f60aaf0f4ba5/exec-4d7fd4b5-e9fd-42ac-b8cc-df12c0cad8d6.png`)
- SHA-256: `54a16af4a099b583df11d875a71051ff42cd3e9a0577edd85782ad8f36a22b84`
- Native dimensions: 1672×941
- Repair manifest: `/home/gehariharan/firstmate-images/data/d009-production/gate-image-repairs/manifest-v006.json` `3c0859909a1498a467a524a529351a62cceddbf86b7332a58cc0144b7f6c8641`
- Submitted prompt: `/home/gehariharan/firstmate-images/data/d009-production/gate-image-repairs/prompts/d009-s001-repair-generation-v012.prompt.txt` `cdc57c1e00dcb135f840de68e8ff0a678e757ba3bd4ded1e8a8ef25856cea05f`
- The manifest's provisional pass is not adopted; these observations are independent.
- Contracts read for this inspection:
  - `art/bible/series.json` `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
  - `art/plans/d009.json` `576efd5f106e78d1f7f24cdf379912a3620034ecb825891c9f6384231f564e3e`
  - `content/daskams/d009.json` `1f2b4c6111792635c5fde1df453d68d0f13122212cc49f233682c2f243e3c6f3`
  - `art/bible/characters/brahma/character.json` `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`
  - `art/bible/characters/guruvayurappan/character.json` `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
  - `art/bible/characters/adishesha/character.json` `d5c14279a218432cf99035e86436523e156167af06563c7890a3ae5954f5790c`
- Outcome: **needs-fix**

## Observations

- Limbs, hands and feet (Pass): Narayana has four hands: upper viewer-left balances the discus, lower viewer-left holds the lotus, upper viewer-right holds the conch, and lower viewer-right grips the mace. Brahma has four hands holding a book, water pot, lotus and beads.
- Attachments and proportions (Needs fix): Narayana's mace arm is grossly elongated. From the armlet at the viewer-right shoulder, the forearm runs horizontally across the whole abdomen to the mace hand, about 380 px, roughly three times the length of his other forearms. His abdomen is also stretched: the navel and stem root sit to the right of the gold waist ornament, where the hips and dhoti should begin.
- Faces and identity (Pass): Brahma shows three frontal bearded faces (viewer-left profile, centre, viewer-right profile), with no fourth face visible from the front. Narayana has one face.
- Duplication and fusion (Pass): One Brahma, one Narayana, one serpent; no ordinary people or duplicates.
- Text and artifacts (Not assessed): Not assessed; the candidate is rejected for the defects recorded under findings.
- Scene, framing and style (Needs fix): The stem rises from a drawn navel ring on exposed skin as the plan requires, but it does so on an anatomically stretched abdomen. Broad matte fields and scroll clouds match the series style.

## Findings

- Narayana's lower viewer-right (mace) arm is elongated to roughly three times the length of his other forearms, stretching across the whole abdomen.
- Narayana's abdomen is stretched so that the navel and stem root lie beyond the waist ornament, where the hips should be.

This finding applies only to the exact checksum above. It does not approve art or authorize an update to `art/approved/d009.json`.

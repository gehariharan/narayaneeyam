# D035 S007 v002 producer review

- Reviewer: Codex producer
- Inspected at: 2026-11-14T00:31:35.591Z
- Outcome: **needs-fix**
- Candidate: `artifacts/d035/s007/landscape/candidate-v002.png` (v002, SHA-256 `1c8d6448ffb815ea58de696177796c09cbd9811b85551231c0f0a85f50888f33`, 1672x941)
- Mapped reference: `intake/D035/019.jpg` (SHA-256 `454a0af9b01a60d021c2937f290a93fc22a207bd8644930e2eab38742a174a9d`)
- Reference caption: `intake/D035/photo-captions.txt#019`
- Viewing method: opened the selected image individually at native resolution, then inspected enlarged focal and extremity crops.
- Enlarged crops: `artifacts/d035/inspection-crops-v001/s007-bow.png`, `artifacts/d035/inspection-crops-v001/s007-heads.png`, `artifacts/d035/inspection-crops-v001/s007-army.png`
- Exact contract hashes:
  - `art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
  - `art/plans/d035.json`: `379c8c6e088aee85711f1e4b07c456f3e387b454c520f484498d5fefcb1e49cd`
  - `art/bible/characters/rama/character.json`: `6cddaa94cec95d18971ae728ec1dce2a77e99f5b673d1e17353d4df030912063`
  - `art/bible/characters/ravana/character.json`: `ceaa16294638cc27a87055292ca04cab6ced934ff03b2e1f486452321019ca5c`

## Findings

- **D035-S007-LOWER-BOWSTRING-UNCLEAR-V002** (high, high): The enlarged bow crop shows a string segment from the upper bow tip to the arrow area, but no clear lower segment meeting the nocked arrow. Repair direction: Regenerate natively with both bowstring segments visibly meeting the single nocked arrow.
- **D035-S007-REPEATED-BACKGROUND-SOLDIERS-V002** (medium, high): The lower battlefield is filled with many similarly posed, similarly dressed soldiers with repeated face and helmet designs, reading as cloned crowd figures. Repair direction: Regenerate with no army crowd or a few clearly distinct background figures.

## Image-specific observations

- **limbs_hands_feet**: Rama has two arms and two legs; Ravana has two attached arms. Ravana’s hands are open and separate.
- **attachment_proportions**: Ravana’s ten heads form one horizontal row attached to one torso; Rama’s bow and arrow are otherwise held by connected arms.
- **faces**: Ravana has exactly ten distinguishable faces; Rama has a distinct single face and no peacock feather.
- **duplication_fusion**: Ravana’s intentional ten-headed form is one coherent body. The repeated lower-background army figures are visually cloned.
- **text_artifacts**: No readable text, signature, logo or watermark is visible.
- **scene_style_continuity**: The final battle is a single scene, but the bowstring correction remains incomplete and the crowd conflicts with the no-cloned-figures contract.

This is a producer inspection only. It is not independent review or art approval.

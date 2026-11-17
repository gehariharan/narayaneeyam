# Dasakam 94 (D094) S008 v006 producer visual inspection v001

- Reviewer: D094 production worker (producer review; not independent)
- Inspected: 2026-11-16T09:22:20Z
- Method: native-resolution full-frame comparison (1672x941) with mapped photo 008 and enlarged Bhattathiri face/hands/feet and Guruvayurappan face/hands/feet crops; exact candidate bytes remain unaltered
- Candidate: `artifacts/d094/s008/landscape/candidate-v006.png`
- SHA-256: `6aecde1b08d3c73413ae89e1de93e1e933dd5aa76456cd1994ea5992f2a56135`
- Dimensions: 1672x941
- Outcome: needs-fix
- Status: not selected; no artwork approval

## Image-specific findings

The composition shows one kneeling Bhattathiri before one two-armed Guruvayurappan, the resting veena, simple offering, and three separate pairs of footprints. Bhattathiri's two separated open hands each show a thumb and four fingers; one visible foot shows five toe tips and the other is tucked. Guruvayurappan's two open hands each show a thumb plus four fingers; both feet show five toes. The mapped photo's glossy branded scene is not copied. Bhattathiri skin remains distinctly too orange despite the corrective prompt: face skin-only 10x10 patch R-B medians are 128, 135, and 133; torso patch medians are 134 and 134. These exceed the warm-brown target of under 120. Guruvayurappan face/torso patches have B-R medians 60/53 and remain deep indigo. No duplicate figures, fused bodies, cropped limbs, readable text, or obvious artifacts were seen. This second consecutive corrective ImageGen version still fails the same Bhattathiri skin-color requirement; it is not selected.

This is a producer inspection only; it is not independent review and does not approve artwork.

## Reviewed contracts

- `art/bible/series.json` SHA-256: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d094.json` SHA-256: `1fb43cd0f9c49f7b9c8c30185e5b7174979d05438245f7f2e8c7f1a7bd451b53`
- `art/bible/characters/bhattathiri/character.json` SHA-256: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- `art/bible/characters/brahma/character.json` SHA-256: `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`
- `art/bible/characters/guruvayurappan/character.json` SHA-256: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- `art/bible/characters/krishna-vrindavan-youth/character.json` SHA-256: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`
- `art/bible/characters/gopikas/character.json` SHA-256: `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`

# Dasakam 94 (D094) S003 v013 producer review v001

- Reviewer: D094 production worker (producer review; not independent)
- Inspected: 2026-11-18T04:21:28Z
- Method: native-resolution comparison with the mapped source photo, frozen v012 and the two warm-brown color anchors; enlarged views of Bhattathiri's face, nape, torso/arms, joined hands and feet, plus Bhagwan's face, blessing hand and feet. Skin-only 11x11 RGB medians were measured from the unchanged candidate bytes.
- Candidate: `artifacts/d094/s003/landscape/candidate-v013.png`
- SHA-256: `d41c21c910f8f0e148ddfd8b88f46fa30c5117b39325d765d805536e89f1eab5`
- Dimensions: 1672x941
- Outcome: needs-fix
- Status: repair attempt 1 of 3; not selected

## Image-specific findings

The image retains one older Bhattathiri kneeling with folded hands before one blue, seated Bhagwan; the quiet grove, plants, flowers, plain bowl, vessel and discarded crown remain. Bhattathiri's nape hair is now a compact small tuft close to the shaved scalp; the longer trailing curl is gone. His exposed skin reads brown, but the principal cheek patches remain just above the requested R-B 100–110 aim. Skin-only 11x11 medians (upper-left origins in the 1672x941 image, RGB, R-B) are cheek `(350,310)` `(162,87,47)`, 115; second cheek `(360,320)` `(158,83,43)`, 115; torso `(280,480)` `(163,89,50)`, 113; arm `(250,490)` `(135,69,36)`, 99; lower cheek/neck edge `(315,410)` `(134,70,38)`, 96; torso `(300,450)` `(159,87,50)`, 109; and arm `(320,500)` `(149,81,47)`, 102. The cheek and torso samples at 115 and 113 exceed the target band, so I do not select this version.

Bhattathiri's joined hands remain a single namaste silhouette with five visible fingertip ends; the overlapping thumbs cannot be separated reliably. His exposed foot has five toes and the other leg/foot remains tucked. Bhagwan's visible raised open hand has a thumb and four fingers; the visible feet remain attached and show five toes each. Faces, limbs, clothing and the disclosed kneeling pose remain consistent. I saw no added person, detached limb, readable text, logo, watermark, ray or beam. The mapped photo is context only; its embrace and glow are not copied.

## Reviewed contracts and sources

- `art/bible/series.json` SHA-256: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d094.json` SHA-256: `a4c2f48db21eaaabfeecf178539bbdfbe251b3bd4fa6bbf96548d8dbf9f9f5f1`
- `art/bible/characters/bhattathiri/character.json` SHA-256: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- `art/bible/characters/guruvayurappan/character.json` SHA-256: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Mapped source `intake/D094/003.jpg` SHA-256: `6d76512ff40040a64751dbff73ddffa37853e7f81b429e4e6babf8883bfa0ea4`
- Native return `artifacts/d094/s003/landscape/native-return-v013.json` SHA-256: `492d44348e31c46fb5fa668ddd65ab9b387ba50e9723c5ea22c5dddc353cd14f`
- Submitted prompt SHA-256: `b765b0586b0e65d77b1986e04237bcb2de5e3154f1115970c9d758245fe3b071`
- Native call arguments SHA-256: `8fd91d1e9cd24db02429a18ef9acbca4fb2bd732f28c27ad699f603d025427da`
- Reference arguments SHA-256: `ddec8ff7097929506dd2501ae77f894b5c3d08bdb1608759463e0d56b28fb0f7`

This is a producer review, not an independent review and not artwork approval.

# Dasakam 94 (D094) S003 v014 producer review v001

- Reviewer: D094 production worker (producer review; not independent)
- Inspected: 2026-11-18T04:25:55Z
- Method: inspected the full 1672x941 frame and enlarged crops of Bhattathiri's face/nape, torso/arms/joined hands, and exposed foot, plus Bhagwan's face, raised hand and seated legs/feet. Compared with the mapped source photo and prior selected v012; measured skin-only 11x11 RGB patch medians on the unchanged candidate bytes.
- Candidate: `artifacts/d094/s003/landscape/candidate-v014.png`
- SHA-256: `475482c9c53f51f95eb225aee2ef76d89de8a4bea0a3d24fd8d3903bcbafb7e3`
- Dimensions: 1672x941
- Outcome: pass for producer review; submit for independent review
- Status: repair attempt 2 of 3; selected provisional replacement pending independent review

## Image-specific findings

The frame preserves the kneeling Bhattathiri before one seated blue Bhagwan, with the grove, flowering plants, vessel, bowl, discarded crown and composition intact. Bhattathiri's nape hair is a compact tuft close to his shaved scalp. His skin reads warm brown rather than orange. Skin-only 11x11 medians (upper-left origins in the 1672x941 image, RGB, R-B) are cheek `(350,310)` `(145,80,42)`, 103; second cheek `(360,320)` `(141,77,40)`, 101; torso `(280,480)` `(146,81,44)`, 102; upper arm `(250,490)` `(121,65,33)`, 88; lower cheek/neck `(315,410)` `(121,64,34)`, 87; torso `(300,450)` `(143,80,44)`, 99; and arm `(320,500)` `(136,75,41)`, 95. The darkest patches are shadowed areas; the main cheek and torso samples sit within the requested R-B 100–110 range.

Bhattathiri has two arms meeting in namaste; the joined silhouette shows five fingertip ends, while the overlapping thumbs are not individually separable at this pose. His visible exposed foot shows five toes; the other leg and foot remain tucked. Bhagwan has the expected two arms: the raised open hand shows a thumb and four fingers, and the resting hand is attached to the other arm on his thigh. His visible feet show five toes each. I saw no duplicated person, detached limb, readable text, logo, watermark, light ray or beam. The faces and dress remain consistent with the reviewed character contracts. The kneeling pose remains the disclosed deviation from the source photo's embrace.

## Reviewed contracts and sources

- `art/bible/series.json` SHA-256: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d094.json` SHA-256: `a4c2f48db21eaaabfeecf178539bbdfbe251b3bd4fa6bbf96548d8dbf9f9f5f1`
- `art/bible/characters/bhattathiri/character.json` SHA-256: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- `art/bible/characters/guruvayurappan/character.json` SHA-256: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Mapped source `intake/D094/003.jpg` SHA-256: `6d76512ff40040a64751dbff73ddffa37853e7f81b429e4e6babf8883bfa0ea4`
- Native return `artifacts/d094/s003/landscape/native-return-v014.json` SHA-256: `9a43d323ccd530b53ea6c7eb05516d0220431ce2e069bd1b4cb75bfda7926951`
- Submitted prompt SHA-256: `1c9fbc519f54d8f32818294a69500f549e44f77a9d9ca170973926fe21fad1cb`
- Native call arguments SHA-256: `bea009231ca3d20ea283865e22fb6ca39eb3f3a5fd78b93386d6a8d0adaa029f`
- Reference arguments SHA-256: `6d29a49a3b4d80d8c04cac6043d318a6a3345b25c5aca8aacd91ff9fb09baeae`

This is a producer review, not an independent review and not artwork approval.

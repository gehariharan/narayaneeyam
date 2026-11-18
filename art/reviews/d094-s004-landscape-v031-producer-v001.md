# D094 S004 landscape v031 producer review v001

- Review time: 2026-11-18T06:40:46.096702177Z
- Reviewer: producer review (not independent or managed)
- Verdict: needs-fix; skin remains above guide, superseded by v029
- Candidate: `artifacts/d094/s004/landscape/candidate-v031.png`
- Candidate SHA-256: `ef045fe2d69876fd6d9629d3c990d983276506e78844bd5ad0209e6962c97adb`
- Dimensions: 1670x942 px
- Final plan SHA-256: `c1045808956b74cb7329b282d1cb10a6ecfccf4e199359ccf888d7048cbc44bb`
- Bhattathiri contract SHA-256: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- Brahma contract SHA-256: `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`
- Guruvayurappan contract SHA-256: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Series contract SHA-256: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`

## Inspection

Opened the exact 1670x942 variant at native size and enlarged Bhattathiri's face and arm. The exact scene arrangement and three-person cast remain, but the skin shift is not consistently successful: face patch at (690,470) is RGB (148,75,41), R-B 107, while nearby cheek origins (700,485), (710,480), (680,500) read 123, 124 and 123. The neck point (655,520) is 104. Torso samples at (650,555), (670,560) and (655,580) read 119, 119 and 122; upper-arm samples at (625,660) and (610,675) read 123 and 124. The maximum is R-B 124, so face and upper-arm highlights still miss the under-120 guide and the overall image retains an orange/copper cast. Nothing in the faces, limb count, composition or props changed materially; no text artifact appears. Firstmate selected v029 as the best of the three S004 attempts. Art remains unapproved.

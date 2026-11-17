# Dasakam 94 (D094) S009 v005 producer reinspection v003

- Reviewer: D094 production worker (producer review; not independent)
- Inspected: 2026-11-17T02:47:40Z
- Method: native-resolution full-frame inspection against mapped numbered reference and final plan; focused 2x face/body and deity crops; ImageMagick skin-only 11x11 median patches; exact bytes unchanged
- Candidate: `artifacts/d094/s009/landscape/candidate-v005.png`
- Candidate SHA-256: `0819104ff28151e82c7af260792a2e655c4608ce2b9ac05c4cba8f0089b76a43`
- Candidate dimensions: 1672x941
- Mapped reference: `intake/D094/009.jpg` SHA-256 `d7acddd47035fdecc39904ce757cb0d1d920dbc879d19ddaab6110eb2af41401`
- Final plan SHA-256: `7335d66fc5454a6a83841ccefdbffe8b33a9e17270b671fcc8508253ed6100c8`
- Shared character contracts: Bhattathiri `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`; Guruvayurappan `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Outcome: needs-fix; repair rounds exhausted, measured deviation disclosed for renewed independent review; no artwork approval
- Status: selected image retained unchanged for decision; producer review is not independent clearance

## Image-specific findings

The native frame shows one older clean-shaven Bhattathiri sweeping the shrine threshold and one blue four-armed Guruvayurappan. The focused deity crop shows four distinct attached arms holding the discus, conch, lotus and mace; the deity has one intact face. Bhattathiri’s broom hand and hanging hand each show five digits, and both visible feet show five toes. No duplicate person, fused body, readable writing, signature, logo or watermark is visible.

**DISCLOSED DEVIATION — skin:** The plan requests warm-brown skin with R-B below 120. I measured 11x11 skin-only medians using ImageMagick; coordinates below are the upper-left crop origin. Reproducing the independent reviewer’s values at cheek `(420,170)` gives RGB `(172,88,49)`, R-B 123; chest `(390,260)` gives `(178,90,52)`, R-B 126; forearm `(470,360)` gives `(180,94,56)`, R-B 124. My additional origins were cheek `(430,180)` RGB `(177,94,55)`, R-B 122; chest `(400,270)` RGB `(182,98,59)`, R-B 123; forearm `(460,350)` RGB `(151,77,45)`, R-B 106.

The earlier producer review described samples by their center coordinates `(420,185)`, `(345,300)`, `(470,360)`. Converting those to crop origins `(415,180)`, `(340,295)`, `(465,355)` reproduces RGB `(171,88,50)`, R-B 121; `(182,95,56)`, R-B 126; `(154,82,49)`, R-B 105. The earlier forearm value 105 and reviewer forearm value 124 are not the same patch: the crop origins differ by five pixels in each axis. Both sets are recorded; the plan now states the larger sampled range. No regeneration is authorized because repair rounds are exhausted. The image remains unresolved pending independent exact-checksum review.

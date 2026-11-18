# Dasakam 94 (D094) S005 v016 producer review v001

- Reviewer: D094 production worker (producer review; not independent)
- Inspected: 2026-11-18T04:34:18Z
- Method: inspected the full native frame and enlarged crops of the face/head-supporting hand, chest/shoulder cloth, thigh hand and both feet; measured skin-only 11x11 RGB patch medians on unchanged candidate bytes.
- Candidate: `artifacts/d094/s005/landscape/candidate-v016.png`
- SHA-256: `97840823b45cc382bd33c646093d3e9e88122a3a8066ee828a98657dfa6cd778`
- Dimensions: 1672x941
- Outcome: needs-fix
- Status: repair attempt 2 of 3; not selected

## Image-specific findings

The single connected tree, fruit, resting figure, clear waking side and lotus remain. The plain warm-cream uttariya fully covers the chest, with an opaque edge separate from the arms. The plain forehead and absence of devotional jewelry are preserved. The figure retains one head, two attached arms and two legs in the reclining composition.

The skin hue improved at a few locations but remains too orange at the principal cheek and upper-arm windows. Skin-only 11x11 medians (upper-left origins, RGB, R-B): cheek `(215,385)` `(176,100,54)`, 122; cheek `(225,395)` `(166,93,50)`, 116; cheek `(235,410)` `(151,80,40)`, 111; upper arm/shoulder `(480,430)` `(170,94,49)`, 121; arm `(520,435)` `(174,98,52)`, 122. The skin still reads copper-orange rather than the requested warm-brown; the patches at R-B 121–122 exceed the plan threshold.

At the head-supporting hand, the enlarged view shows four distinct fingertip ends; a thumb is not clearly visible. I cannot verify the required thumb plus four fingers. The thigh hand appears attached and has a distinct thumb with four fingers visible. Each exposed foot shows five toes. No extra figure, detached limb, text, logo, watermark, ray or beam is visible. Because the cheek/arm color remains above the limit and the head-supporting hand does not expose a clearly countable thumb, this version is not selected.

## Reviewed sources

- `art/bible/series.json` SHA-256: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d094.json` SHA-256: `a4c2f48db21eaaabfeecf178539bbdfbe251b3bd4fa6bbf96548d8dbf9f9f5f1`
- Mapped source `intake/D094/005.jpg` SHA-256: `32720af189874958820a308efaa8a34677825830742422e5192d1845240e8864`
- Native return `artifacts/d094/s005/landscape/native-return-v016.json` SHA-256: `dee94fec27c5f5edc15a9b30a87764c05d5607b3fe9a8607e6972680bbad38e3`
- Submitted prompt SHA-256: `ea262d5c4824878548458b6d89b2202f3775eac3040245fea06aae79241e108f`
- Native call arguments SHA-256: `9a461aafd1e60b7eaa1e32800fb2023f247d4eb701a1ebf3c20fdf87ecd7fd32`
- Reference arguments SHA-256: `37619db37cb8f8570a4fbcdb061942eee7293eeb8e95459c5f75149d113f6c04`

This is a producer review, not an independent review and not artwork approval.

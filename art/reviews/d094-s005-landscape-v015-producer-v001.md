# Dasakam 94 (D094) S005 v015 producer review v001

- Reviewer: D094 production worker (producer review; not independent)
- Inspected: 2026-11-18T04:31:56Z
- Method: inspected the full native frame, enlarged face/head-supporting hand and chest/shoulder cloth, lower resting hand, and both feet. Compared with mapped photo 005 and the preceding candidate v013; measured skin-only 11x11 RGB patch medians on unchanged candidate bytes.
- Candidate: `artifacts/d094/s005/landscape/candidate-v015.png`
- SHA-256: `e77a43aa137a7138e87b3c2b34fd5d46791d2693414ab8c3d028a39050b1a147`
- Dimensions: 1672x941
- Outcome: needs-fix
- Status: repair attempt 1 of 3; not selected

## Image-specific findings

The image retains the single connected tree, shaded dream side with the resting figure and fruit, and open waking side with lotus. The requested plain warm-cream cloth now fully covers the figure's chest, lies separately from the supporting arm, and has no ornament. The figure still has a plain forehead, no devotional jewelry, and the same overall reclining pose.

The exposed skin is visibly too orange and multiple skin-only windows exceed the plan's R-B <120 threshold. 11x11 median RGB samples (upper-left origins, R-B): cheek `(208,380)` `(188,88,43)`, 145; cheek `(220,390)` `(184,87,42)`, 142; cheek `(240,400)` `(169,80,38)`, 131; upper arm/shoulder `(480,420)` `(157,64,29)`, 128. A shaded forearm sample `(260,440)` `(105,40,15)`, R-B 90, does not offset the orange primary cheek and shoulder values.

The figure has one head and two attached arms. The head-supporting hand has four clearly visible fingertip ends, but a thumb is not clearly distinguishable from this pose; I cannot verify the required thumb-plus-four count. The hand resting on the thigh is attached and has aligned digits, but its thumb is partly obscured at this framing. The two visible feet each show five toes. I saw no added figure, detached limb, text, logo, watermark, ray or beam. Because the skin color exceeds the contract and the supporting-hand digit count is unclear, this version is not selected.

## Reviewed sources

- `art/bible/series.json` SHA-256: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d094.json` SHA-256: `a4c2f48db21eaaabfeecf178539bbdfbe251b3bd4fa6bbf96548d8dbf9f9f5f1`
- Mapped source `intake/D094/005.jpg` SHA-256: `32720af189874958820a308efaa8a34677825830742422e5192d1845240e8864`
- Native return `artifacts/d094/s005/landscape/native-return-v015.json` SHA-256: `adaf54c8546740fa94cfcc65cf0c15a20071a9901b2a6b95e270752118c65831`
- Submitted prompt SHA-256: `c3125ee18ec84531cdb491b631e428fd0e7173638b1d636bcdcf80fca5db3969`
- Native call arguments SHA-256: `fff16069e160cb521e2dc9c280265f91467e7af84f98159aeaa7c3659b468382`
- Reference arguments SHA-256: `88c7095d1d7cfc43617231f45b7804b436b7c7f610222c09d977a5fc1ece11c7`

This is a producer review, not an independent review and not artwork approval.

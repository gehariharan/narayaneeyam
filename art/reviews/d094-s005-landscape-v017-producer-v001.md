# Dasakam 94 (D094) S005 v017 producer review v001

- Reviewer: D094 production worker (producer review; not independent)
- Inspected: 2026-11-18T04:37:03Z
- Method: inspected the full native frame and enlarged views of the face/head-supporting hand, chest cloth, thigh hand and both feet; measured skin-only 11x11 median RGB patches on the unchanged candidate bytes.
- Candidate: `artifacts/d094/s005/landscape/candidate-v017.png`
- SHA-256: `889cedf92b0bb17a54b66abf8178dc69e120486559e2e5b95e3c2b2e783dc268`
- Dimensions: 1672x941
- Outcome: needs-fix
- Status: repair attempt 3 of 3; not selected

## Image-specific findings

The connected tree and its two joined branches, dream figure and fruit, open waking side, and lotus remain. The plain opaque warm-cream shoulder cloth fully covers the chest and remains separate from both arms. The forehead is plain, with no devotional ornaments. The figure has one head, two attached arms and two legs in the same reclining scene.

The exposed face and arm still read orange rather than the requested warm brown. Skin-only 11x11 medians (upper-left origins, RGB, R-B): cheek `(215,385)` `(173,88,37)`, 136; cheek `(225,395)` `(176,92,40)`, 136; cheek `(235,410)` `(132,61,22)`, 110; upper arm `(480,430)` `(152,70,27)`, 125; forearm `(520,435)` `(172,85,34)`, 138. The main cheek and arm samples exceed the R-B 120 requirement.

The enlarged head-supporting hand clearly shows four extended fingers; a distinct thumb is not visible, so it does not satisfy the required countable thumb plus four fingers. The hand resting on the thigh is attached and shows a thumb and four fingers. Both exposed feet show five toes. No extra person, detached limb, text, logo, watermark, light ray or beam is visible. Because skin color and head-hand anatomy remain unresolved after the three allowed repair attempts, this version is not selected.

## Reviewed sources

- `art/bible/series.json` SHA-256: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `art/plans/d094.json` SHA-256: `a4c2f48db21eaaabfeecf178539bbdfbe251b3bd4fa6bbf96548d8dbf9f9f5f1`
- Mapped source `intake/D094/005.jpg` SHA-256: `32720af189874958820a308efaa8a34677825830742422e5192d1845240e8864`
- Native return `artifacts/d094/s005/landscape/native-return-v017.json` SHA-256: `1f25d6b70f3150b0075c5a2a7be63729e3b40a72a768be622bb3b357c43a13b0`
- Submitted prompt SHA-256: `93a582c8118e7842d5c8ed283e13d4b868e41099e79d8797d422ace095227e9b`
- Native call arguments SHA-256: `56cf87f035d9fa5960ca72f92332d194b8a52d39cd5a04f1db1357094e08dfc9`
- Reference arguments SHA-256: `8678e44c4e73fa3f2f5d9fe8195e7a49eee27240ee3aad3acfe5e8aa696f171e`

This is a producer review, not an independent review and not artwork approval.

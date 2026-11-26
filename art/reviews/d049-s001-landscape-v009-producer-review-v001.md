# D049 S001 v009 producer visual review

- Inspected at: 2026-11-26T02:48:24Z
- Candidate: `artifacts/d049/s001/landscape/candidate-v009.png`
- Candidate SHA-256: `93de8297a20e50d0007a1d27e1f0ef24d7bf0d5d0ec46d33677946108a1612e7`
- Metadata SHA-256: `de1d0ffa475c76886922da4e0091bf91a99aada7a7eb0919deb911e8c961b53b`
- Native dimensions: 1672x941
- Final plan SHA-256: `80e758a8d2e7aaf870848319fea3c3e461a48667b9b176f320380ed94695b1a7`
- Reference input: `artifacts/d049/s001/landscape/candidate-v006.png` SHA-256 `d46cc87eae46a936ed70ad37be8f09473a9d7e44aa77ff97e64460e7375a0abf`.

## Inspected detail views

- `artifacts/d049/s001/landscape/review-crops-v009-foot-reference-5x.png`
- `artifacts/d049/s001/landscape/review-crops-v009-foot-5x.png`
- `artifacts/d049/s001/landscape/review-crops-v009-right-gesture-4x.png`
- `artifacts/d049/s001/landscape/review-crops-v009-left-gesture-4x.png`
- `artifacts/d049/s001/landscape/review-crops-v009-prayer-hands-4x.png`

## Observations

The native frame still shows five distinct elders, two separate fallen trunks, village huts and two cattle; faces and connected limbs remain individually legible. The right-side open gesture crop shows a connected hand with thumb and four fingers; the folded hands and central chin-resting hand remain distinct. The targeted foot crop still shows five clear toe forms plus a separate small toe-like nub between the big toe and next toe, so the anatomy target was not met.

The edit also failed its preserve-input constraint. Byte-decoded pixel comparison against v006 found 1,572,396 changed pixel coordinates total (1,551,709 outside the targeted foot box and 20,687 inside it; 1,573,352 image pixels total). Nine sampled skin-region patch medians (R-B), v006→v009, were: left elder face 91→105; left-center gopa face 127→132; Nandagopan face 128→133; rear gopa face 87→94; white-haired elder face 98→103; left-center gopa arm 122→128; Nandagopan arm 124→127; rear gopa arm 116→118; right elder arm 123→129. Several samples moved farther above the approximate <120 warm-brown guide. The framing and figures look similar at full-view scale, but most sampled pixel coordinates changed outside the foot.

## Result

Outcome: **producer self-review needs-fix**. This candidate is unselected. It retains the ambiguous nub and fails the explicit colour/figure/composition preservation instruction through widespread changed pixels and warmer samples. It is not independent clearance or art approval.

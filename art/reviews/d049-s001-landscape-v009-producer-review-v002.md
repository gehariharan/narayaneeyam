# D049 S001 v009 producer visual review v002

- Inspected at: 2026-11-26T02:49:29Z
- Candidate SHA-256: `93de8297a20e50d0007a1d27e1f0ef24d7bf0d5d0ec46d33677946108a1612e7`
- Metadata SHA-256: `de1d0ffa475c76886922da4e0091bf91a99aada7a7eb0919deb911e8c961b53b`
- Dimensions: 1672x941
- Final plan SHA-256: `80e758a8d2e7aaf870848319fea3c3e461a48667b9b176f320380ed94695b1a7`
- Input v006 SHA-256: `d46cc87eae46a936ed70ad37be8f09473a9d7e44aa77ff97e64460e7375a0abf`
- Focused views: `artifacts/d049/s001/landscape/review-crops-v009-foot-5x.png`, `review-crops-v009-right-gesture-4x.png`, `review-crops-v009-left-gesture-4x.png`, `review-crops-v009-prayer-hands-4x.png`.

The native frame has five distinct elders and two separate cows; faces and attached limbs read as distinct. The right-side open hand shows a thumb and four fingers. The targeted foot still shows five clear toe forms plus a separate toe-like nub between the big toe and the next toe. Pixel comparison to input v006 found 1,572,396 changed coordinates overall, including 1,551,709 outside the target-foot box and 20,687 inside; the exact instruction to preserve colour and composition was therefore not met. Sampled figure skin-region medians shifted warmer: nine site R-B values v006→v009 were 91→105, 127→132, 128→133, 87→94, 98→103, 122→128, 124→127, 116→118 and 123→129.

Outcome: **producer self-review needs-fix**. The foot issue remains and the output changed across almost all pixels outside the edit region. This version is unselected, not independently cleared, and not approved.

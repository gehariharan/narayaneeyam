# Producer visual review — D030 S006 landscape v019

- Candidate: `artifacts/d030/s006/landscape/candidate-v019.png`
- SHA-256: `48e11f8dc0fa68fd4a4d1991a615ae80581e42c0e23c3e38f28d7c771c9ac044`; native dimensions: 1672×941.
- Source: exact S006 v015 image SHA-256 `9f3e440d7869d3f001a0b1e3305890f7c245b76177e5adc5e2733b2d2bf83038`.
- Submitted prompt: `artifacts/d030/s006/landscape/prompt-submitted-v019.txt` (SHA-256 `576077de17e6c083e6d13010e31ef2bb1545572dc9764e45c8f3998e9549d759`).
- Actual ImageGen call arguments: `artifacts/d030/s006/landscape/call-arguments-actual-v019.json` (SHA-256 `f695669d1a0ec9a5c1f807961006e675e1c08402e0889cf903f83edbeb544b73`).
- Inspection time: 2026-11-27T20:47:42Z. I opened the full native image and the enlarged crown, Brahma arms, both elders, rug border, and Vamana face crops individually.

## Observations

The central crown's outlined plaque and circular inset are absent. A tiny ochre fleck remains at the crown centre; the separate forehead tilak is intact. Brahma has three distinct visible faces and four attached arms ending in separate hands: book, kamandalu, lotus, and sacred thread. The two kneeling elders look distinct. The left elder's hand holds the coiled girdle; the right elder holds the deer skin. Their exposed skin reads warm brown. Skin-only 24×24 median samples are RGB (189,124,89), R−B 100 at the left elder torso (115,525), and RGB (193,125,89), R−B 104 at the right elder torso (1500,500); these exceed the plan's strict below-100 target. These are image measurements, not a colour adjustment.

The rug's front border contains an irregular row of small letter-like shapes from approximately x=350–850, y=703–722. They do not form readable words to me, but resemble pseudo-script rather than a clearly regular motif; I cannot clear this against the no-text requirement. Vamana's blue reads saturated cobalt/royal blue to me rather than muted deep indigo. Skin-only samples on this exact v019 image are RGB (51,115,197), B−R 146 on the chest (1012,400; 30×40), and RGB (49,113,194), B−R 145 on the shin (1065,700; 20×40). Brahma's central face and Vamana both have visible white forehead marks; they were present in v015 and were left untouched as instructed. The fire, implements, hut, path and Ashvamedha pavilion remain in place.

## Outcome: uncertain

The crown emblem correction is visible, and the inspected anatomy/cast remain coherent. The rug's irregular letter-like border and Vamana's bright blue raise plan-conformance concerns, while the forehead marks are visible but unchanged under the targeted-edit instruction. Since independent reviews of v015/v017 differed on these image features, I request the authorized targeted exact-checksum review of v019. This candidate remains unapproved and is not cleared for release. No source, plan or approval manifest was changed.

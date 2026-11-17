# D100 S001 candidate v003 producer review

- Reviewer: Codex producer self-review
- Inspected at: 2026-11-17T05:06:50Z
- Candidate: `artifacts/d100/s001/landscape/candidate-v003.png`
- SHA-256: `48c9f8bb08c038b4b6d2f0de2d9ebbe7d2811a603e29e3a49cdcd05a2e8d5f3e`
- Native dimensions: 1672x941
- Method: Opened the complete native PNG individually and enlarged Krishna’s face, raised palm and lap hand, Bhattathiri’s face, the veena-bearer and the Upanishad attendant group. Compared with the mapped source photo and the current plan/character contracts.

## Findings

The composition is a wide matte lotus darshan with one Krishna, Bhattathiri, a veena-bearer, sages and three separate women attendants. Krishna’s face patch median is `(71, 86, 129)`, blue-minus-red `58`, meeting the blue threshold. The raised palm shows one thumb and four fingers, but its skin patch `(194, 107, 75)` has red-minus-blue `119`, so the palm is peach rather than Krishna’s indigo. Bhattathiri’s sampled face patch `(117, 72, 42)` has red-minus-blue `75`, within the brown target. A second Upanishad woman face patch `(171, 95, 45)` has red-minus-blue `126`, above the 120 ceiling.

The veena-bearer reads as an adult woman and blends visually with the personified Upanishad attendants; Narada’s contract calls for a mature ascetic sage. I cannot confidently identify the named Narada in this image. The lap hand has four clearly visible downward fingers, but the thumb root is obscured and cannot be counted confidently. No duplicate or fused person, malformed face, detached limb, readable text, signature, logo or watermark is visible.

## Outcome

Needs-fix. Recolor all visible Krishna skin, including the raised palm, deep indigo; correct the veena-bearer as a mature male Narada; lower warm human face medians; clarify the lap hand’s visible digits. Preserve this v003 as history.

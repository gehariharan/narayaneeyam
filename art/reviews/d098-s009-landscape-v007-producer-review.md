# D098 S009 landscape v007 producer review

- Result: **needs-fix** (producer review; not independent or managed).
- Candidate: `artifacts/d098/s009/landscape/candidate-v007.png`
- Candidate SHA-256: `e09bcafc9c3576679cbf06185e1545d3dfebe34646447441356ffe3a31e26faa`
- Dimensions: 1672x941 (native 16:9).
- Plan SHA-256: `a50fa341b19858f48911822b1f71a43332ec94d1a50e0172fb949ab0d40ad80e`
- Prompt SHA-256: `9a0f801dcf17c63622c865f92b37eee5ca59898c746927103d984819fd591004`
- Reference arguments SHA-256: `28d05d8b1014e9392247f65a8c391e069db1affc9a630d9e9c30d5d54587de1f`
- Bhattathiri contract SHA-256: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- Guruvayurappan contract SHA-256: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Inspected at: 2026-11-17T00:19:56Z
- Inspection: native image and focused Krishna face, both hand, both foot and Bhattathiri crops in `artifacts/d098/inspection/s009-v007/`.

## Findings

The single Krishna is centered above the lotus dais; Bhattathiri kneels separately at left. Both arms appear connected. Each Krishna hand crop shows a thumb plus four fingers at a natural scale. Both feet show five toes, and the lotus petal between the ankles matches the form and color of the surrounding dais petals. Krishna face median is sRGB (32,56,112), B−R 80; forearm median (38,70,144), B−R 106.

Bhattathiri's exposed skin fails the brown-color threshold: face patch median (194,127,72), R−B 122; upper-arm patch median (204,134,74), R−B 130. His skin reads orange-gold. This is a color-contract failure despite normal body proportions, correct clothes, and fully draped legs.

## Decision

Needs-fix. Preserve the candidate; a selected version needs Bhattathiri's skin clearly brown with R−B below 120.

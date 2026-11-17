# D098 S011 landscape v001 producer review

- Result: **needs-fix** (producer review; not independent or managed).
- Candidate: `artifacts/d098/s011/landscape/candidate-v001.png`
- Candidate SHA-256: `1b4d8cc5470c42322c426882899fb849cb7d975c7bce504c43220e8107a6f2f8`
- Dimensions: 1672x941 (native 16:9).
- Plan SHA-256: `a50fa341b19858f48911822b1f71a43332ec94d1a50e0172fb949ab0d40ad80e`
- Prompt SHA-256: `014ac3aae2e851254f74af8357c9aa988c0968e237602b71cf8e21ba8a98f90a`
- Reference arguments SHA-256: `3ed15bd6cf2b9736e7c0fcb4ff02b3df57768ee253fdc078686b46d1df0beefe`
- Bhattathiri contract SHA-256: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- Guruvayurappan contract SHA-256: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Inspected at: 2026-11-17T01:16:49Z
- Inspection: native full image and focused Krishna face, both hands, feet, Bhattathiri face/body/prayer hands, and wheel crops in `artifacts/d098/inspection/s011-v001/`; compared with mapped photo and shared character contracts.

## Findings

The image has one two-armed Krishna, one older clean-shaven Bhattathiri, and a large separate circular wheel. The wheel crop contains twelve discernible radial spokes, and evenly repeated short teeth all around its rim; no numbers, text, or extra deity are visible. Bhattathiri leans toward the dais with his face legible and hands joined. Krishna's hands at his sides each show a thumb and four fingers; both blue feet show five toes. The peacock feather, yellow dhoti, red shawl, and Bhattathiri's ash marks, scalp tuft and cream dhoti are visible.

The skin colors fail. Krishna face median is sRGB (73,93,119), blue-minus-red 46, but exposed arm median (76,95,126), blue-minus-red 50 is only marginally above the requirement and reads slate-blue in the broad orange light. Bhattathiri's face patch median is (219,132,49), red-minus-blue 170; exposed arm/torso patch median is (234,132,31), red-minus-blue 203. His human skin reads saturated orange. The background and halo are also saturated amber-orange rather than the plan's restrained palette. The candidate therefore cannot be selected.

## Decision

Needs-fix. Preserve the exact twelve-spoke wheel layout, devotional pose and clothing, and create a new version with deep indigo Krishna skin, clearly brown Bhattathiri skin and a predominantly neutral cream/indigo background with no broad orange cast or halo.

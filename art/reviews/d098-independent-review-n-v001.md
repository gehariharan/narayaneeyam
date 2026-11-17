# D098 landscape independent visual review: stanzas 7–11

## Scope and method

I independently reviewed the five selected landscape candidates against the byte-frozen final plan, the frozen character contracts, the D098 stanza content, and each plan-mapped intake reference photo. Each candidate was opened individually at its native resolution and checked again in enlarged crops of faces, hands, feet, torsos, and crowded figures. I also inspected the image edges, corners, ground and decorative areas for text or signature artifacts. Enlarged crops were made locally with ImageMagick `magick -crop ... -resize ...`; full images and crops were viewed directly. Reference-to-stanza mapping is explicit in the plan's `reference_paths` (plan lines 330–560), corroborated by D098 content stanzas 7–11 (content lines 118–190) and captions 007.jpg–011.jpg (caption lines 31–55).

No candidate file was changed. No approval manifest or project review record was touched. Verdicts below bind only to the listed candidate checksum and the contract hashes in this report.

## Frozen contract hashes verified

Each actual SHA-256 matched the expected value supplied for this review:

| Contract file | SHA-256 |
| --- | --- |
| `review-contract-n/art/plans/d098.json` | `d6ac1f414224bc45ccec1f2879f4bb4bac90af27339e3acdef1315fdf806ec77` |
| `review-contract-n/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `review-contract-n/art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `review-contract-n/art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `review-contract-n/art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `review-contract-n/art/bible/characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `review-contract-n/art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |

## Candidate findings

Review time recorded for each image: **2026-11-17 13:22:24 UTC**. All listed candidate hashes matched the task's expected checksums before inspection. Dimensions were read with `identify`.

### Stanza 7 — `d098-s007`, v007

Candidate: `artifacts/d098/s007/landscape/candidate-v007.png`  
SHA-256: `08cce73921fc0aeddcbe1e7419c75de0e5ddd206a0cc23ccb1fda937add41e47`  
Native dimensions: 1672×941. Plan entry: lines 330–375; mapped photo and caption: `intake/D098/007.jpg`, `photo-captions.txt` lines 31–34; stanza content: line 118.

- **Anatomy:** One older scholar, with connected and plausible limbs and proportions. His bare torso is ordinary traditional Kerala devotional dress with the cream dhoti, sacred thread and beads; no sexualized framing.
- **Face:** Enlarged face is coherent, clean-shaven, lined, with the small dark tuft and forehead ash/central mark. No malformed or duplicated face.
- **Hands and feet:** Both ground-facing hands are inside the frame; enlarged crops show one thumb and four separated fingers on each. Both feet are inside the frame with five toes each.
- **Clothing and cast:** The single human figure is modestly dressed in the specified dhoti and devotional markers. No other people are present.
- **Text/signature artifacts:** No readable lettering, caption, signature or watermark observed, including corners, mat and ground.
- **Scene and caption fidelity:** The gold ornament/gold piece and clay pot/clay lump are distinct pairs. Bhattathiri is visibly roused beside the plainly coiled rope, conveying the waking/clear-seeing analogy. The scene is full bleed without a separate arch-and-pilaster frame, consistent with the disclosed repaired scene.
- **Character/deity contract:** Bhattathiri matches the shared older clean-shaven scholar identity. The disclosed skin-color shift is present. In my enlarged 11×11 median RGB patches at face (900,210), upper arm (755,355) and forearm (770,580), I measured (175,87,29), (225,170,125) and (182,95,33), respectively. The high red-to-blue differences are visible as warm reddish/orange skin and are comparable to the plan's disclosed upper-arm and forearm range (R−B 112–152); I found no clearly worse, separate defect.
- **Verdict: pass — disclosed deviation present.**

### Stanza 8 — `d098-s008`, v012

Candidate: `artifacts/d098/s008/landscape/candidate-v012.png`  
SHA-256: `0b0e74fb18424b315ec7a51a9e14c1689d5acbffc067d5e9cc0263693eed85c0`  
Native dimensions: 1672×941. Plan entry: lines 377–427; mapped photo and caption: `intake/D098/008.jpg`, `photo-captions.txt` lines 36–39; stanza content: line 135.

- **Anatomy:** Krishna stands centrally; Bhattathiri lies fully prostrate in the foreground; Brahma sits separately at right; two separate deva witnesses stand at left. No fused bodies or extra limbs observed. All figures remain within the image; Bhattathiri's whole body, including both feet, is inside the frame. The devas' feet and Brahma's seated lower body are also inside the frame.
- **Face:** Krishna's face is serene and coherent. The two left witnesses are visibly distinct in face, height, hair/head ornament and pose. Brahma has three distinct front-facing faces with the fourth head turned behind; no merged/duplicated facial features observed.
- **Hands and feet:** Krishna's two open hands each show one thumb and four separated fingers; both feet show five toes. Bhattathiri's two ground-facing hands show five digits each and each visible foot shows five toes. Brahma has four visibly attached arms and four hands; hands holding the book, lotus, pot and beads are partly occluded by those attributes, with no extra or detached digits apparent. The devas' hands are joined in prayer, so individual digits are naturally occluded by the gesture; both have two attached arms.
- **Clothing and cast:** Traditional dhotis/robes and painted ornaments cover the figures modestly. Krishna's tiered crown and layered jewelry and Brahma's crown and ornaments are ordinary temple-mural iconography. No additional person is merged into the group.
- **Text/signature artifacts:** No readable writing, caption, signature or watermark observed. The marks on Brahma's open book are faint non-readable strokes, not legible text.
- **Scene and caption fidelity:** The sun disc, small fire altar flame and wind-signifying leaves are present. Brahma's four-head/four-arm form and two clearly distinct two-armed deva witnesses are visible; Bhattathiri prostrates at a respectful distance from Krishna. The central deity, celestial figures and worshipper are visually separated.
- **Character/deity contract:** Krishna is one calm deep-blue figure. Brahma follows the exact four-head/four-arm contract. The disclosed skin deviations are present; my enlarged 11×11 skin-only cheek samples measured RGB (169,107,59) for Bhattathiri, (196,127,74) and (194,121,65) for the two devas, and (193,111,66) for Brahma. The deva readings are close to the plan's disclosed values; Brahma reads warmer than the disclosed sample but remains visibly in the contract's muted rose-ochre family. The face differences are not a clearly worse color defect.
- **Verdict: pass — disclosed deviation present.**

### Stanza 9 — `d098-s009`, v008

Candidate: `artifacts/d098/s009/landscape/candidate-v008.png`  
SHA-256: `ae479cf92057a7ee6016701e4602e51a0db4beb12bf4c5e72170056e96049966`  
Native dimensions: 1672×941. Plan entry: lines 429–477; mapped photo and caption: `intake/D098/009.jpg`, `photo-captions.txt` lines 41–46; stanza content: line 152.

- **Anatomy:** One central Krishna and one separate, kneeling Bhattathiri. Bodies and limbs are connected and naturally proportioned; no duplication or fusion observed. The scholar's folded pose naturally conceals one foot; the visible foot is fully inside frame. Krishna's two feet are inside frame.
- **Face:** Krishna and Bhattathiri have coherent, distinct faces. Bhattathiri retains the older clean-shaven identity and forehead marks.
- **Hands and feet:** Krishna's two open hands each show one thumb and four separated fingers; both feet show five toes. Bhattathiri's prayer hands are joined, with five fingers discernible; his visible foot shows five toes. No malformed or extra digits observed.
- **Clothing and cast:** Krishna wears traditional yellow dhoti and red shawl with painted ochre ornaments. Bhattathiri wears a cream dhoti, sacred thread and beads; bare upper body is ordinary traditional dress. No other people are present.
- **Text/signature artifacts:** No Om glyph, text, signature or watermark observed in the sky, ground or corners.
- **Scene and caption fidelity:** One central deity is framed by broad arcs of sky, sea and land. The sunrise, central daylight landscape and sunset give three nonverbal stages; the center reads as daylight, though less explicitly than the two marked ends, as disclosed in the plan. Bhattathiri prays separately to Krishna.
- **Character/deity contract:** Krishna is deep blue with the expected crown and feather. The disclosed Bhattathiri skin-color shift is present. My enlarged 11×11 skin-only samples at his cheek and upper arm (310,495) and (330,620) measured RGB (192,120,59) and (196,120,63), R−B 133 and 133, consistent with the stated face deviation and not clearly worse. Krishna skin reads blue in the torso and open hands.
- **Verdict: pass — disclosed deviation present.**

### Stanza 10 — `d098-s010`, v005

Candidate: `artifacts/d098/s010/landscape/candidate-v005.png`  
SHA-256: `b6d9cb99875ce8e9a6f543985b482847cfafa33d3954bc20b0a6b2e8588e06e9`  
Native dimensions: 1672×941. Plan entry: lines 479–525; mapped photo and caption: `intake/D098/010.jpg`, `photo-captions.txt` lines 48–51; stanza content: line 169.

- **Anatomy:** One seated Krishna and three separate seated sages. Their torsos and limbs appear connected with natural seated proportions. Feet and lower legs remain inside frame; some are covered or tucked by seated poses rather than clipped. No duplicate or fused figures observed.
- **Face:** Krishna has a calm, coherent face. Each sage has one coherent face; the three faces and hairstyles are distinct. No malformed facial features observed.
- **Hands and feet:** Krishna's two hands rest naturally together in his lap; the overlapping fingers are partly occluded by the meditative pose, with no extra digits apparent. The sages' hands are similarly resting or supporting seated poses; visible fingers show no malformed/extra digits. Visible feet and toes remain within the frame; other feet are covered by robes or folded poses.
- **Clothing and cast:** Three sages wear modest cream/saffron ascetic cloth; exposed upper torsos are ordinary traditional ascetic dress. Krishna wears yellow dhoti and red/orange shawl. Krishna's elaborate painted crown, necklaces and armlets and the sages' beads are ordinary iconography.
- **Text/signature artifacts:** No text, lettering, signature or watermark observed.
- **Scene and caption fidelity:** One serene Krishna is seated in a simple temple-like alcove, with three separate sages contemplating him. The architectural alcove is part of the planned setting, not an outer picture frame. Warm cream/ochre fields suggest inward stillness; no drawn rays or beams are present.
- **Character/deity contract:** Krishna has one head and two visible arms and retains blue skin. The plan-disclosed color deviation is present in the sages. My enlarged 11×11 median RGB skin-only samples were Krishna cheek/torso (1035,230)/(1030,400): (69,76,108)/(61,67,97), corresponding B−R 39/36; sage cheek samples (170,350)/(485,465)/(1480,405): (139,85,43)/(204,100,18)/(145,64,16), corresponding R−B 96/186/129. The observed range falls within the disclosed v005 range (87–217); the warmer middle sage is apparent, but is not worse than the disclosure.
- **Verdict: pass — disclosed deviation present.**

### Stanza 11 — `d098-s011`, v007

Candidate: `artifacts/d098/s011/landscape/candidate-v007.png`  
SHA-256: `6c06848d8136c23c29f01977fb531c4fd213a2f85718afaa6d7cad953cb71ede`  
Native dimensions: 1671×941. Plan entry: lines 527–575; mapped photo and caption: `intake/D098/011.jpg`, `photo-captions.txt` lines 53–55; stanza content: line 186.

- **Anatomy:** One Krishna and one kneeling Bhattathiri, clearly distinct and naturally attached. No extra limbs. Krishna's feet are fully inside frame with five toes on each. Bhattathiri's lower legs are covered by the dhoti and are not clipped.
- **Face:** Both faces are coherent and uncut. Bhattathiri retains the sacred marks and small hair tuft.
- **Hands and feet:** Krishna's two open hands each show one thumb and four separated fingers. Bhattathiri's joined prayer hands remain legible with five fingers visible. No digit defects observed.
- **Clothing and cast:** Both figures wear modest traditional dress. Krishna's crown, feather and painted necklaces are ordinary temple-mural iconography.
- **Text/signature artifacts:** No text, numerals, signature or watermark observed on the wheel, sky, ground or corners.
- **Scene and caption fidelity:** A large wheel is held apart from the figures; I count twelve distinct spokes and repeated rim ticks. Bhattathiri kneels at Krishna's lotus feet. The complete peacock feather, including tip, is inside the top edge with a visible margin (approximately 14 px, as also directly checked against the 1671×941 image). The composition is full bleed with no separate frame.
- **Character/deity contract:** Krishna is one deep-blue figure; Bhattathiri matches the older scholar contract. No explicit structural prohibition is violated.
- **Verdict: pass.**

## Review record and recommendation

All five selected landscapes pass this independent visual review for their exact candidate checksums. Stanzas 7–10 pass with the disclosed skin-color deviations present; stanza 11 passes with the complete feather and full-bleed frame. These are visual-review findings only and confer no art approval. The pending captain art approval remains the standing state; this review raises no captain call. Captain-call inventory for this review: **empty**.

Evidence commands used included:

- `sha256sum` over all seven frozen contract files and five candidate files before review; all actual hashes matched the expected values.
- `identify -format '%f %wx%h\\n'` for native candidate dimensions.
- `magick <candidate> -crop <region> +repage -resize 200% <scratch-crop>` to inspect focused regions, and `view_image` to inspect each full native candidate, each enlarged crop and its mapped intake photo.
- `magick <candidate> -crop 11x11+X+Y +repage -statistic median 11x11 -format '%[pixel:p{5,5}]' info:` for the listed skin-only patch readings. Coordinates are in original-image pixels; each crop is 11×11.

No Lavish board was created: the task-specific review contract says a text report is sufficient and requires this report path.

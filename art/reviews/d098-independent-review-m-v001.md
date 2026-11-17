# D098 landscape candidate review: stanzas 1–6

## Scope and method

I independently reviewed the six selected landscape candidates against the frozen final plan, series bible, character contracts, stanza commentary/captions, and mapped intake photos. Each candidate was opened at its native 1672×941 resolution, then inspected in enlarged subject-specific crops for faces, torsos, hands, feet, limbs, crowded figures, corners, ground and water. I used native visual inspection and crop inspection; I did not modify candidate images or project approval records. The reference photos were used for subject/context as directed by the plan, not as composition templates. The candidates remain unapproved.

Review findings were recorded at **2026-11-17T13:23:58Z**. The exact-checksum review applies only to the hashes below.

### Frozen contract hashes read

| Contract file | SHA-256 |
|---|---|
| `art/plans/d098.json` (final plan) | `d6ac1f414224bc45ccec1f2879f4bb4bac90af27339e3acdef1315fdf806ec77` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |

All seven values match the expected contract hashes. All six candidate hashes also matched the expected values before visual inspection. Hash evidence was produced with `sha256sum` on the exact frozen paths and selected candidate paths; the six stanzas map to `001.jpg`–`006.jpg` through the plan and `content/daskams/d098.json` (stanza records at lines 16–106; captions at `intake/D098/photo-captions.txt#1`–`#6`). Relevant plan entries are at `art/plans/d098.json:44-91`, `93-140`, `142-183`, `185-232`, `234-281`, and `283-328`. Character rules read include Bhattathiri's face/clothing/never rules (`characters/bhattathiri/character.json:15-34`), Guruvayurappan's identity and anatomy rules (`characters/guruvayurappan/character.json:16-39`), and Brahma's four-head/four-arm contract (`characters/brahma/character.json:15-47`). The series style and no-text/no-watermark rules are in `art/bible/series.json:5-76`.

Commands and inspection evidence: `sha256sum <the six selected candidate paths> <the seven frozen contract paths>`; `magick <candidate> -crop <region> +repage <scratch crop>` for enlarged detail crops; `view_image` on every full candidate, the mapped reference photos, and detail crops. I also used `magick <candidate> -crop 11x11+<x>+<y> +repage -statistic Median 11x11 -format '%[pixel:p{5,5}]' info:` for the stanza 4 skin-only patch medians listed below. Scratch crops were temporary review aids and are not deliverables.

## Candidate findings

### Stanza 1 — v010

- **Candidate and checksum:** `artifacts/d098/s001/landscape/candidate-v010.png`; `d4b2ae83896ffc273b5a868fc0395439045c913a4df61d1138b50046b3099c59` (verified).
- **Anatomy:** The full scene shows one Bhattathiri and one Guruvayurappan; body connections and proportions read naturally. The small birds, deer, cow/calf, fish and heron have distinct bodies; no fused or duplicated figure is visible.
- **Faces:** Both main faces are intact and legible. Bhattathiri is older, clean-shaven, marked with ash stripes and a central forehead mark, with a small dark tuft. Krishna's face is calm and deep blue.
- **Hands and feet:** Krishna has two attached arms; each open hand visibly has one thumb and four fingers. His two feet are fully visible on the pedestal; each shows five toes. Bhattathiri's hands are joined in prayer, so individual digits overlap in the gesture; no extra or detached digit is visible. His kneeling feet remain inside the frame; one is substantially tucked beneath the dhoti, while the exposed toes are visible without an apparent count anomaly.
- **Clothing and cast:** Cream dhoti, sacred thread, prayer beads and modest maroon edge on Bhattathiri; Krishna wears yellow dhoti and red-orange shawl. Krishna's crown, earrings, layered necklaces and armlets are ornate in the ordinary temple-mural style; no contract prohibition is contradicted. No other deity or copied child-Krishna scene appears.
- **Text/signature artifacts:** No readable text, signature, watermark or logo in the sky, ground, water or corners.
- **Scene and caption fidelity:** Matches the plan's kneeling salutation before a serene blue murti, with a restrained ring of landscape, stars and living forms suggesting the cosmic ground. The contextual reference is not copied literally.
- **Character/deity contract:** Bhattathiri's older clean-shaven identity and Guruvayurappan's deep-blue murti identity are consistent with their contracts. No head, arm or frame-cropping conflict.
- **Verdict: pass.**

### Stanza 2 — v007

- **Candidate and checksum:** `artifacts/d098/s002/landscape/candidate-v007.png`; `635640807fe768f66b894c8256540bc46281a9bde42d2ad088130bceff801cb7` (verified).
- **Anatomy:** One Vishnu form and one prostrate Bhattathiri are present. Limbs remain attached; the bent legs and back-facing pose do not show an extra limb. The purple shape between Krishna's ankles is a lotus petal behind the feet, not a body part.
- **Faces:** Krishna's youthful face and Bhattathiri's older, clean-shaven, ash-marked face are intact. Neither is duplicated.
- **Hands and feet:** Krishna's two open hands each show one thumb plus four fingers; both feet are fully inside frame and show five toes each. Bhattathiri's two arms reach forward; his ground-facing hands overlap in prostration, with digits partly obscured but no malformed or detached finger visible. The exposed rear foot is within frame and shows the expected toe separations; the other foot is folded under and partly concealed by the pose.
- **Clothing and cast:** Traditional cream dhoti, sacred thread, beads and maroon border on Bhattathiri; Krishna's yellow dhoti, red-orange shawl and painted ochre ornaments are consistent. Ornament density on Krishna's crown and necklaces is ordinary iconography. No additional deity body appears.
- **Text/signature artifacts:** No readable text, signature, watermark or logo in the sky, land, water or corners.
- **Scene and caption fidelity:** The central Vishnu is singular; land, water and sky are arranged as differentiated worlds, and Bhattathiri prostrates at a respectful distance. The composition follows the plan's quiet-field direction while using the mapped reference only as context.
- **Character/deity contract:** Krishna remains deep blue, youthful, feather-crowned and in his established clothing. Bhattathiri's age, marks and clothing remain consistent. No explicit prohibition is violated.
- **Verdict: pass.**

### Stanza 3 — v007

- **Candidate and checksum:** `artifacts/d098/s003/landscape/candidate-v007.png`; `383f4be6080a478ebf3db6bec8cd43d597df8d4e0a8329c7e1acf90a14306547` (verified).
- **Anatomy:** There is no central person or deity. Edge categories are deliberately small silhouettes/natural forms. Enlarged crops show a horned asura with one attached bent arm and a stylized three-pronged hand, a seated human silhouette with limbs tucked into the seated outline, a small cloud-borne deva with joined hands, and natural animal/bird forms. Their small silhouette rendering does not resolve every finger or toe at native size; I see no unmistakable fused body, extra limb, malformed face or duplicate person. The left asura silhouette runs off the mural edge naturally, as an allowed peripheral figure.
- **Faces:** Only simplified silhouette profiles are used; no malformed or duplicated face is visible. The center remains unoccupied.
- **Hands and feet:** The asura's visible hand is stylized and pronged rather than anatomically detailed; exact digits on the small seated/deva silhouettes and their feet are not legible at native size. No key extremity is cut off; the edge silhouettes are intentionally peripheral and no obvious limb defect is apparent in the complete image.
- **Clothing and cast:** Figures read as small categories at the edge; no exposed or sexualized framing. The scene contains no deity body.
- **Text/signature artifacts:** No readable text, signature, watermark or logo in the cream center, ground or corners.
- **Scene and caption fidelity:** The warm-cream and indigo center stays abstract and unoccupied; earthy forms and small silhouettes recede along the frame edges. No rays, pictograms, scale or rope symbol is present. This responds to the caption's negation of categories without reproducing the busy reference collage.
- **Character/deity contract:** No recurring character is introduced; no deity or character contract is contradicted.
- **Verdict: pass.** The intentionally small edge silhouettes limit digit-level visibility, but the full image has no visible defect meeting the needs-fix threshold.

### Stanza 4 — v008

- **Candidate and checksum:** `artifacts/d098/s004/landscape/candidate-v008.png`; `529dacdd927e854d819e7ba6d99b914268b21b480c532f8af760b2cbec87c2d8` (verified).
- **Anatomy:** Vishnu is one connected two-armed figure. Brahma is seated at the right with four attached arms and hands; no extra arm or detached digit is visible. His lower-right bead-holding forearm, hand and loop are inside frame with clear right margin. The small tortoise is a separate animal silhouette with shell and limbs, not a second deity. Bhattathiri is seated at left with a connected torso and folded legs; his feet remain inside frame, though mostly covered. Birds, fish and resting deer remain distinct.
- **Faces:** Vishnu's calm face is intact. Brahma shows three distinct front-facing faces; the fourth head is turned behind and hidden as contracted. The beard and head arrangement do not read as merged or duplicated faces. Bhattathiri's visible face is intact and clean-shaven.
- **Hands and feet:** Vishnu's raised and extended hands each show a thumb and four fingers; both feet show five toes and remain inside frame. Brahma's four hands are attached, holding scripture, water pot, lotus and prayer beads; the held objects partly occlude digits, but no extra/detached digit is visible. Bhattathiri's prayer hands are joined and partly occluded; his visible partial foot is inside the frame, with toes partly hidden by the seated pose and not reliably countable. This is not a frame cut-off.
- **Clothing and cast:** Vishnu wears yellow and red-orange; Brahma wears cream/saffron and painted ochre ornaments; Bhattathiri wears traditional cream cloth with sacred thread and beads. Brahma's crown and necklaces are visible and consistent with the permitted sacred adornment. Bhattathiri is an additional devotional figure in the image, but the stanza plan has no explicit prohibition against him; his presence does not duplicate a deity or disrupt the scene.
- **Text/signature artifacts:** No readable text, signature, watermark or logo in the sky, water, ground or corners. The small open book has no readable writing.
- **Scene and caption fidelity:** One calm Vishnu anchors an inward circular arrangement of water, land and living forms; the tortoise simile is present as a small withdrawing tortoise. A small Brahma appears as creator at the edge. Dark blue rather than a purple storm/void palette keeps the scene contemplative. The contextual intake reference's cosmic imagery is not copied literally.
- **Character/deity contract:** Guruvayurappan is deep blue and two-armed in this scene. Brahma's count is three visible faces/four heads total and four attached arms/hands, matching `characters/brahma/character.json:17-47`. The disclosure's Bhattathiri/Brahma skin readings are present. I independently measured 11×11 skin-only median patches (coordinates are x,y in the 1672×941 image): Bhattathiri face `(350,375)` RGB `(209,114,61)`, R−B=148; Bhattathiri upper arm `(300,450)` RGB `(205,108,55)`, R−B=150; Brahma face `(1410,220)` RGB `(202,127,80)`, R−B=122; Brahma shoulder `(1320,390)` RGB `(200,100,48)`, R−B=152. As a blue-skin check, Krishna face `(860,220)` measured `(44,77,117)`, B−R=73. Bhattathiri's warm reddish skin is a disclosed deviation and no worse than the plan disclosure; Brahma's rose-ochre skin is consistent with his separate contract. No other structural violation is visible.
- **Verdict: pass — disclosed deviation present.**

### Stanza 5 — v005

- **Candidate and checksum:** `artifacts/d098/s005/landscape/candidate-v005.png`; `e379c2f8af83f1f860e042633b72205e875dcb7c7d1b129f5e0db710c5a74977` (verified).
- **Anatomy:** One Krishna and one seated Bhattathiri are present. Both bodies are connected and proportionate; no duplicated figure or extra limb is visible.
- **Faces:** Krishna's youthful face is serene and intact; Bhattathiri's lined, clean-shaven, ash-marked face is intact.
- **Hands and feet:** Krishna has two attached arms; his open palms each show one thumb and four fingers. Both feet are visible and show five toes each. Bhattathiri's folded hands overlap in his lap; they are partly occluded, with no extra or malformed digit visible. His feet are covered by his seated dhoti rather than cut by the frame.
- **Clothing and cast:** Krishna's yellow dhoti, red-orange shawl, feather crown and painted ochre temple ornaments are present. Bhattathiri's cream dhoti, sacred thread, beads and simple maroon edge are consistent; his bare upper torso is ordinary traditional dress, not exposed or sexualized framing. No other figure or deity is repeated.
- **Text/signature artifacts:** No written syllables, labels, signature, watermark or logo in the symbolic forms, forest, ground or corners.
- **Scene and caption fidelity:** Krishna is shown with Bhattathiri saluting. The small conch-like sound spiral, seed-sized earth and sun/crescent cycle are all present as quiet symbols. The composition is compact and reverent; no modern diagram or beam appears.
- **Character/deity contract:** Deep-blue Krishna, traditional clothing and identity markers align with contract. Bhattathiri remains the older clean-shaven scholar. Krishna's crown and jewelry are richly decorated but not prohibited.
- **Verdict: pass.**

### Stanza 6 — v005

- **Candidate and checksum:** `artifacts/d098/s006/landscape/candidate-v005.png`; `66ac93d808d3e0f7318564defac199d7a7c7b12fe7cdc4548c3bc871f6fc9071` (verified).
- **Anatomy:** Bhattathiri is the only person; seated torso and limbs connect naturally. No duplicated person, extra limb or malformed figure is visible. The rope is a separate coiled object, not an animal body.
- **Faces:** The older scholar's face is intact and clean-shaven, with the prescribed ash marks and small dark tuft.
- **Hands and feet:** His hands are folded together in his lap and partly overlap; no extra or detached digit is visible, but individual fingers cannot all be counted through the overlap. His feet are covered by the cream dhoti, not clipped by the frame.
- **Clothing and cast:** Cream dhoti, sacred thread and restrained prayer beads match the character contract. His bare upper torso is ordinary traditional dress. No deity or extra figure appears.
- **Text/signature artifacts:** No readable text, signature, watermark or logo in the foliage, ground, rope, or corners.
- **Scene and caption fidelity:** An older scholar sits in the dim forest beside a plainly coiled, frayed rope. The rope's strands and frayed end remain visible as rope; no attacking snake appears. A warm cream opening in the grove is present without shafts or rays, keeping the image contemplative.
- **Character/deity contract:** The older clean-shaven identity, sacred marks and clothing are consistent with Bhattathiri's contract. No deity was invented.
- **Verdict: pass.**

## Recommendation and captain-call inventory

The six selected landscape candidates pass the requested independent visual gate for their exact listed checksums; stanza 4 passes with its disclosed skin-tone deviation present. No needs-fix defect or unresolved captain choice was found in this review. Keep the chapter artwork unapproved until the separate human art approval is recorded. The captain-call inventory for this review is empty; the standing pending art approval is not a new decision raised by this report.

# D094 landscape candidate review: stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates at native resolution and in enlarged figure/object and frame-corner crops. Each image was reviewed separately against its stanza in the frozen final plan, the mapped intake photo and caption, the chapter content, and the applicable frozen series/character contracts. The plan maps stanzas 1–5 to `intake/D094/001.jpg` through `005.jpg` respectively (plan `d094.json`: 51–57, 99–105, 152–160, 207–215, 265–273; content `d094.json`: stanza entries at lines 17, 27, 37, 47, 57; captions `intake/D094/photo-captions.txt`: #1–#5). The photos were used for story context; the captions and final scene briefs control scene interpretation.

I verified all candidate and contract checksums with `sha256sum` before review. `file`/`identify` reported RGB PNGs at 1672 × 941 for S001–S003 and 1670 × 941 for S004–S005. I displayed each full image at original detail, then used ImageMagick `magick <candidate> -crop <WxH+X+Y> +repage -resize ...` for enlarged figure/object crops and four-corner crops. I inspected the resulting crops individually. For the skin deviations, I extracted 11 × 11 pixel patches from the original candidate PNGs, parsed the 121 RGB pixels in each patch, and calculated per-channel medians and R−B from those medians. Coordinates below are upper-left patch origins in the original candidate image.

Plan references below use the frozen copy at `/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-l/art/plans/d094.json`. Character and style checks use the frozen files listed in the checksum table.

## Frozen contract checksums

All actual SHA-256 values matched the expected values in the brief.

| Frozen contract file | SHA-256 |
|---|---|
| `art/plans/d094.json` | `83694a45b6bd6b467b8b284d783a803343a6f6f5f854ce86b9feeaafa0f0a1cf` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |

## Per-image findings

### S001 — v001 landscape

- **Candidate:** `artifacts/d094/s001/landscape/candidate-v001.png`
- **SHA-256:** `30295f3021ad8ab1a0ae0824eddae8fa013b2c6e99863ce9e3144a4fda2b0260` (verified)
- **Review time:** 2026-11-17 05:09:23 UTC
- **Anatomy:** No people or creatures are depicted; no anatomy concern applies.
- **Faces:** None.
- **Hands/feet:** None.
- **Clothing and cast:** No cast or clothing; matches the plan’s no-human symbolic scene (plan lines 30–40, 51–57).
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full frame or enlarged corners.
- **Scene and caption fidelity:** The mapped cosmic reference and caption describe all-pervading realization and varied flames. A continuous spiral-like cosmic field fills the background, while three distinct log groups at the right carry visibly different small, medium, and large flames. The logs and fire remain separate from the cosmic field. All required symbols are inside the frame. The image uses a strong dark indigo/purple field and bright ochre against the series earth-tone palette; this is an observable color choice, not an anatomy, text, or missing-element defect under this review gate.
- **Character/deity contract:** No figures are required; none are added.
- **Verdict: pass.**

### S002 — v001 landscape

- **Candidate:** `artifacts/d094/s002/landscape/candidate-v001.png`
- **SHA-256:** `deb3dd33f7cd07077217f89b20716d970de404a99b179a116d0c697dd5e1f930` (verified)
- **Review time:** 2026-11-17 05:09:23 UTC
- **Anatomy:** No people or creatures are depicted; no anatomy concern applies.
- **Faces:** None.
- **Hands/feet:** None.
- **Clothing and cast:** No cast or clothing; follows the object-only arani metaphor (plan lines 78–89, 99–105).
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full frame or enlarged corners/ground.
- **Scene and caption fidelity:** Two wooden logs cross beneath one controlled central flame. A separate sparse tangle of dry branches burns in front/right of them, with open clearing and calm space beyond. The source photo’s teacher and student are not copied as figures, consistent with the plan; the caption’s teaching metaphor is carried by the crossed aranis and fire. No required element is missing.
- **Character/deity contract:** No figures are required; none are added.
- **Verdict: pass.**

### S003 — v009 landscape

- **Candidate:** `artifacts/d094/s003/landscape/candidate-v009.png`
- **SHA-256:** `e3384fbb51ee9fbff519f9921206a08de74cd4f85328f006bb4d03785abc85a8` (verified)
- **Review time:** 2026-11-17 05:09:23 UTC
- **Anatomy:** Exactly two human figures appear: one older devotee and one blue Bhagwan. Their heads, torsos, arms, and legs are connected and proportionate in the enlarged crops; no duplicate or fused person is visible. Bhattathiri is kneeling with his lower legs folded under him rather than seated as the scene brief requests. This disclosed pose difference is plainly visible and is recorded here; it does not introduce an anatomy defect.
- **Faces:** Bhattathiri has one lined, clean-shaven face with the shaved scalp/small tuft and ash stripes; Bhagwan has one calm face. Neither face is malformed or cut off.
- **Hands/feet:** Bhattathiri’s joined prayer hands have overlapping digits but no visible extra or malformed finger; his one exposed foot shows five toes and his other foot is tucked from view. Bhagwan’s raised blessing hand shows five digits; his resting hand is intact, and each of his two visible feet shows five toes. No hand, foot, or face is cut by the frame.
- **Clothing and cast:** Bhattathiri wears a warm-cream dhoti, visible sacred thread, and prayer beads; his bare upper torso is traditional devotional dress and not sexualized. Bhagwan wears a yellow garment and red/orange shawl with elaborate jewelry and a peacock-feather crown; the ornamentation is ordinary temple-mural iconography. No third person appears.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full frame or enlarged ground/corner crops.
- **Scene and caption fidelity:** The composition shows the devotee turning toward Bhagwan, with one plain bowl, one small ritual vessel, and one discarded crown at the far edge; there are no doctors, kings, extra sages, inset scenes, or miraculous beams. This is consistent with the mapped surrender caption and final plan (plan lines 126–160, 162–171). The kneeling-for-seated difference is disclosed in the plan’s candidate status at line 171.
- **Character/deity contract:** Bhattathiri’s age, clean-shaven face, ash markings, tuft, cream dhoti, sacred thread, and beads are consistent with his contract (character file lines 16–30). Bhagwan is deep blue, serene, crowned with a peacock feather, and dressed in yellow/red-orange as contracted; jewelry is ornate but within the review’s ordinary-iconography allowance (Guruvayurappan file lines 18–37).
- **Disclosed skin deviation remeasurement:** My skin-only 11 × 11 medians reproduce the plan’s four samples exactly: origin (350,310) RGB (184,104,58), R−B 126; (280,480) RGB (187,111,66), R−B 121; (360,320) RGB (180,101,54), R−B 126; and (250,490) RGB (155,80,42), R−B 113. The two over-120 readings are no greater than the disclosed 126 maximum, and the 121 reading matches the disclosed torso patch. The image clearly shows warm-brown skin; no worse or undisclosed skin deviation was found.
- **Verdict: pass — disclosed deviation present.** The kneeling pose and measured skin-tone departure are present as disclosed; no other review-gate defect was found.

### S004 — v017 landscape

- **Candidate:** `artifacts/d094/s004/landscape/candidate-v017.png`
- **SHA-256:** `f2d27cfef6dc2efd58b4c9af56db75cc61b69ee839944b81bf64bc6c7f41eb1e` (verified)
- **Review time:** 2026-11-17 05:09:23 UTC
- **Anatomy:** Brahma has exactly four distinct heads: three visible faces (one frontal and two side-facing) and the fourth rear-facing head shown from behind. His four arms are distinct, attached, and terminate in four hands holding the lotus, beads, book, and vessel. Bhattathiri and Bhagwan each have one head and ordinary connected bodies; no duplicated or fused figures appear.
- **Faces:** Brahma’s three visible faces are distinct and not merged; the fourth head faces away. Bhattathiri’s single face is clean-shaven, lined, and intact. Bhagwan has one calm blue face. No face is cut off.
- **Hands/feet:** Brahma’s four hands are visible and separate. Bhagwan’s two open hands each show a thumb plus four fingers; both visible feet show five toes. Bhattathiri’s prayer hands are joined normally, with no obvious extra or malformed digit. His legs and feet are naturally tucked beneath the dhoti and not visible, as the plan states; no extremity is cut off.
- **Clothing and cast:** Bhattathiri’s cream dhoti, diagonal sacred thread, and beads are visible; the uncovered torso is traditional dress and not sexualized. Brahma wears cream/saffron clothing and a sacred thread; his crowns and layered ornaments are ornate, which I record as ordinary mural iconography. Bhagwan wears yellow with a red/orange shawl, a peacock feather ornament, and sacred jewelry. No additional figures appear.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full frame or enlarged sky/ground/corner crops.
- **Scene and caption fidelity:** Brahma is elevated in the exposed celestial setting; below him Bhattathiri prays toward a single sheltered blue Bhagwan presence. The visual separation between cosmic heights and the calm shrine/refuge is clear. No hell or punishment scene is added, matching the mapped caption and plan (plan lines 181–229; required elements at 190–201).
- **Character/deity contract:** Brahma’s four-head/four-arm structure and iconographic attributes match the explicit anatomy contract (Brahma file lines 20–47). Bhattathiri’s older clean-shaven face, ash markings, tuft, modest beads, sacred thread, and cream dhoti are consistent (Bhattathiri file lines 16–30). Bhagwan’s deep-blue skin, peacock feather, yellow garment, red/orange shawl, and correctly visible limbs match the contract (Guruvayurappan file lines 18–37).
- **Disclosed skin deviation remeasurement:** I measured six skin-only 11 × 11 patches. Face origins (680,430) and (690,450) had median RGB (188,115,83), R−B 105 and (218,156,124), R−B 94. Torso/arm origins (680,480), (690,500), (720,480), and (680,535) had medians (182,100,64), R−B 118; (160,83,48), R−B 112; (201,118,76), R−B 125; and (186,105,68), R−B 118. The disclosed face/torso over-target samples reach R−B 128; my largest patch is 125, so the deviation is no worse than disclosed. The sampled skin reads warm-brown, not saturated orange.
- **Verdict: pass — disclosed deviation present.** The sampled skin-tone departure is disclosed; no other review-gate defect was found.

### S005 — v005 landscape

- **Candidate:** `artifacts/d094/s005/landscape/candidate-v005.png`
- **SHA-256:** `424583c0ad2b33536d7aa3192150a64c1687d2a035f62b965b78c637f3b035a3` (verified)
- **Review time:** 2026-11-17 05:09:23 UTC
- **Anatomy:** One resting figure appears on the shadowed branch. The head and torso are intact; both arms and legs connect naturally. Each visible hand has a thumb and four fingers. Both visible feet are fully within frame and show five toes apiece. No duplicate person or malformed face is visible in the enlarged crops.
- **Faces:** One intact resting face with closed eyes; no distortion or crop.
- **Hands/feet:** The hand beside the forehead and the hand resting on the branch each show five digits. Both feet show five toes; neither is cut off.
- **Clothing and cast:** One traditionally dressed resting figure in an orange wrap and cream lower garment with ordinary devotional ornaments. The bare upper torso is nonsexualized traditional iconography. No other cast is present.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full frame or enlarged corners/ground.
- **Scene and caption fidelity:** A single central trunk visibly joins the shaded dream branch, resting figure and fruit to the bright open branch and lotus-like stillness. The waking side is not depicted as a separate place or independent tree/reality. This follows the caption’s body-tree/dream-and-waking metaphor and final plan (plan lines 239–277).
- **Character/deity contract:** The plan requires no named deity or character; the solitary resting figure is consistent with the brief. No prohibited character trait is implicated.
- **Verdict: pass.**

## Overall recommendation and captain-call inventory

All five exact-checksum candidates pass this independent visual review; S003 and S004 pass with their disclosed deviations present. These findings clear only the reviewed image bytes against the stated contracts. They do not approve artwork, change `art/approved/`, or substitute for the pending human art approval.

Captain-call inventory for this review: **empty**. The standing pending art approval is not a new decision raised by this review. I found no unresolved choice that requires a captain-held task.

## Evidence commands and provenance

Commands used included:

- `sha256sum <five selected candidate paths> <seven frozen contract paths>` — all 12 actual values matched the expected checksums in the task brief.
- `file <five selected candidate paths>` and `identify -format '%w %h' <candidate>` — RGB PNG dimensions recorded above.
- `magick <candidate> -crop <WxH+X+Y> +repage -resize ... <scratch crop>` — enlarged figure, hand/foot, object, and corner inspections; scratch crops were kept under the assigned worktree and are not review evidence by themselves.
- For disclosed color checks, `magick <candidate> -crop 11x11+X+Y +repage txt:-` — parsed all 121 pixel RGB values and calculated channel medians and R−B as reported above.
- `view_image` at original detail — full-frame inspection of each selected candidate, plus individual inspection of the enlarged detail/corner crops.

Relevant frozen source locations: final plan entries and their `candidate_status` fields at lines 30–68 (S001), 78–116 (S002), 126–171 (S003), 181–229 (S004), and 239–277 (S005); series palette/rendering and global avoids at `art/bible/series.json` lines 4–64; Bhattathiri contract at `art/bible/characters/bhattathiri/character.json` lines 16–30; Brahma anatomy at `art/bible/characters/brahma/character.json` lines 20–47; and Guruvayurappan depiction at `art/bible/characters/guruvayurappan/character.json` lines 18–37.

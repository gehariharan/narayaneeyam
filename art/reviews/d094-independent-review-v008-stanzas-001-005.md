# D094 landscape candidate visual review, stanzas 1–5

Reviewed each selected landscape candidate independently at its native resolution, then inspected enlarged crops of relevant figures, extremities and 11×11 skin patches. I compared the images with the frozen final plan, its character contracts, the mapped intake photos and their supplied captions, and the chapter content. No project source, candidate, master, approval manifest or prior review record was changed. This is an independent visual review, not art approval.

**Review time:** 2026-11-17 04:18:09 UTC. The candidate SHA-256 is the scope of each verdict.

## Frozen contract checksums

`sha256sum` matched all expected byte hashes before inspection:

| Contract file | SHA-256 |
|---|---|
| `art/plans/d094.json` | `a1c4ed1418addeac6675f373a24f57b3a2a0563539c70472096eb91a608d82d4` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |

## Inspection method and source mapping

I ran `sha256sum` on the seven frozen contracts and five selected candidates, then `identify` on the candidates. Full images were opened with `view_image(..., detail="original")`. I made local enlarged crops with ImageMagick `magick -crop ... +repage -resize ...` and viewed them separately. For disclosed skin-tone deviations, I extracted 11×11 windows with `magick -crop 11x11+X+Y +repage txt:-` and calculated per-channel medians from their 121 pixels; coordinates below are upper-left crop origins in the original candidate. The inspected crop views were stored only in the disposable worktree’s `.review-scratch/` directory.

The plan maps stanzas 1–5 to `intake/D094/001.jpg` through `005.jpg` respectively (`d094.json` plan lines 30–50, 78–98, 126–151, 181–209, 239–259; frozen plan path above). Chapter content lines 17, 27, 37, 47 and 57 map those stanzas to `intake/D094/photo-captions.txt#1` through `#5`; the caption text appears at `photo-captions.txt` lines 1–3, 5–7, 9–11, 13–15 and 17–19. I viewed each mapped photo as story/context and judged the compositions against the plan and caption rather than copying their framing or unsupported details.

Character checks used Bhattathiri’s older clean-shaven, warm-brown identity and modest clothing (`bhattathiri/character.json` lines 14–27 and 40–47), Brahma’s four-head/four-arm anatomy (`brahma/character.json` lines 22–47), and Guruvayurappan’s youthful blue identity, dress and uncropped extremities (`guruvayurappan/character.json` lines 18–37). Series-level continuity and style came from the frozen `series.json` hash above.

## Candidate findings

### Stanza 1 — `d094-s001`, landscape `v001`

- **Candidate:** `artifacts/d094/s001/landscape/candidate-v001.png`
- **Verified SHA-256:** `30295f3021ad8ab1a0ae0824eddae8fa013b2c6e99863ce9e3144a4fda2b0260`
- **Native size:** 1672×941.
- **Anatomy:** No people or creatures are present; no body anatomy to assess.
- **Faces:** None required or depicted.
- **Hands/feet:** None required or depicted.
- **Clothing and cast:** No cast or clothing, as planned.
- **Text/signature artifacts:** No readable writing, signature, logo or watermark seen at full size or while inspecting the lower log/ground area and corners.
- **Scene and caption fidelity:** The image shows one continuous spiral-like cosmic field and three distinct log groups of increasing size with small, medium and large flames. The logs and flames remain separate from the cosmic field. This follows the stanza 1 caption’s all-pervading nature and varied flames metaphor (plan lines 35–46; content line 22; caption #1). The galaxy is visually prominent, but remains one continuous symbolic field; no required element is missing.
- **Character/deity contract:** None apply; the plan requires no human or deity figure.
- **Verdict: `pass`.**

### Stanza 2 — `d094-s002`, landscape `v001`

- **Candidate:** `artifacts/d094/s002/landscape/candidate-v001.png`
- **Verified SHA-256:** `deb3dd33f7cd07077217f89b20716d970de404a99b179a116d0c697dd5e1f930`
- **Native size:** 1672×941.
- **Anatomy:** No people or creatures are present.
- **Faces:** None required or depicted.
- **Hands/feet:** None required or depicted.
- **Clothing and cast:** No cast or clothing, as planned.
- **Text/signature artifacts:** No writing, signature, logo or watermark seen, including the soil, branch tangle and corners.
- **Scene and caption fidelity:** Two crossed wooden aranis meet beneath one ordinary controlled flame; a separate small tangle of burning branches sits in the foreground, with open clearing behind it. The caption’s teacher/student wood metaphor and purification-by-knowledge are conveyed through objects, without adding people or written teaching (plan lines 83–94; content line 32; caption #2). The flame is ordinary stylized fire, not a beam or shaft.
- **Character/deity contract:** None apply; no figures are required.
- **Verdict: `pass`.**

### Stanza 3 — `d094-s003`, landscape `v009`

- **Candidate:** `artifacts/d094/s003/landscape/candidate-v009.png`
- **Verified SHA-256:** `e3384fbb51ee9fbff519f9921206a08de74cd4f85328f006bb4d03785abc85a8`
- **Native size:** 1672×941.
- **Anatomy:** Exactly two human figures are visible: one older devotee and one blue deity. Both bodies remain connected and proportionate in the enlarged views. No duplicated person or fused body is apparent. **Disclosed pose deviation present:** Bhattathiri kneels with folded lower legs rather than sitting; this is visible in the full image and enlarged lower-body crop and matches the plan’s disclosure at line 171.
- **Faces:** Bhattathiri is older, clean-shaven, with a shaved scalp/small dark tuft, ash stripes and a central mark; his face is intact and turned toward Bhagwan. Bhagwan’s face is serene and intact. Neither face is cut off.
- **Hands/feet:** Bhattathiri’s hands form a folded namaste. Five fingertip ends are visible along the front hand; the second hand is pressed behind it, so its individual digits cannot be separated in this pose. No malformed or extra digit is visible. One exposed Bhattathiri foot shows five toes; the other is tucked under the folded legs. Bhagwan’s raised open hand shows a thumb and four fingers; both visible deity feet show five toes each. No key extremity is cut off.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, beads and visible sacred thread; his upper torso is bare in ordinary traditional male devotional dress. Bhagwan wears a yellow dhoti and red/orange shawl. The crown, earrings, layered necklaces, armlets and floral garlands are elaborate temple-mural ornamentation, visible on Bhagwan’s head and torso; they are ordinary iconography and do not contradict the contract. Cast is limited to the required pair.
- **Text/signature artifacts:** No readable text, signature, logo or watermark seen in the full frame or close inspection of lower ground and corners.
- **Scene and caption fidelity:** The two figures face each other in a grove; Bhattathiri turns toward Bhagwan with folded hands. A plain medicine bowl, small ritual vessel and discarded crown sit separately at the far lower-right edge. No doctor, king, sage, group, inset vignette, beam or miraculous light effect is present. The mapped photo’s devotional surrender context is retained without copying its embrace or framing (plan lines 134–148; content line 42; caption #3).
- **Character/deity contract:** Bhattathiri matches the older clean-shaven identity and sacred marks; Bhagwan is blue with a peacock-feather crown and yellow/red-orange clothing. The deity’s crown and extremities remain inside frame. No structural contract violation seen.
- **Disclosed skin-tone measurement:** My skin-only 11×11 medians were cheek origin `(380,350)` RGB `(184,105,59)`, R−B `125`, and upper arm origin `(230,550)` RGB `(169,94,51)`, R−B `118`. The cheek is within the disclosed R−B maximum of 126; the arm patch is below 120. The plan also disclosed two kneeling-pose and skin patches above the 120 target; both disclosed deviations are present and no worse than those ranges.
- **Verdict: `pass — disclosed deviation present`.**

### Stanza 4 — `d094-s004`, landscape `v017`

- **Candidate:** `artifacts/d094/s004/landscape/candidate-v017.png`
- **Verified SHA-256:** `f2d27cfef6dc2efd58b4c9af56db75cc61b69ee839944b81bf64bc6c7f41eb1e`
- **Native size:** 1670×941.
- **Anatomy:** Three human figures are present: Brahma, Bhattathiri and one Bhagwan. Brahma has exactly four distinct attached arms and four heads total. Three faces are visible in profile/front; the fourth head faces away, with its rear visible and its face hidden. No merged face or extra limb is apparent. Bhattathiri’s folded legs are under his dhoti and not visible, as disclosed. Bhagwan’s visible limbs remain attached and in frame.
- **Faces:** Brahma’s three visible faces and Bhagwan’s face are intact. Bhattathiri’s older clean-shaven face, tuft and sacred ash marks are intact, facing toward Bhagwan. No face is clipped.
- **Hands/feet:** Brahma’s four distinct hands each hold one attribute (lotus, palm-leaf book, beads and water pot). Enlarged crops show the expected hand outlines; the grips partly obscure individual digits, with no visible extra or fused digit or hand. Bhagwan’s two open hands each show a thumb plus four fingers, and both visible feet show five toes. Bhattathiri’s hands are joined in prayer. Five fingertip ends are visible along the front hand; the second hand is pressed behind it, so its digits cannot be counted separately. No malformed or extra digit is visible. His feet are covered and not visible.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread, beads and traditional bare upper torso. Brahma wears cream/saffron robes and a tiered crown with garlands and jewelry; Bhagwan wears yellow and red/orange with a peacock feather and sacred ornaments. The ornaments are visible and elaborate but ordinary mural iconography, with no relevant prohibition. The three figures are distinct and modestly dressed.
- **Text/signature artifacts:** No readable text, signature, logo or watermark seen. The palm-leaf attribute is blank at the inspected scale; it does not read as writing. No marks in ground or corners.
- **Scene and caption fidelity:** Brahma occupies the exposed cosmic height at upper left; below, Bhattathiri prays toward a calm blue Bhagwan in an open, roofed sanctuary at right. The composition shows spatial contrast and no hell or invented punishment. It follows the caption’s fear in Satyaloka and prayer for release from attachment (plan lines 190–204; content line 52; caption #4). The planet and galaxy motifs add celestial context but do not obscure the required scene.
- **Character/deity contract:** Brahma’s four heads/four arms meet the frozen anatomy contract; the rear-facing head’s face is hidden. Bhagwan’s blue skin, youthful serene face, peacock-feather crown, yellow dhoti and red/orange shawl match the contract. Bhattathiri retains his older clean-shaven identity and sacred thread.
- **Disclosed skin-tone measurement:** My skin-only 11×11 cheek median at origin `(705,500)` was RGB `(178,97,60)`, R−B `118`. Torso medians at `(665,640)` and `(680,650)` were RGB `(196,108,69)`, R−B `127`, and `(207,121,79)`, R−B `128`. These values fall within the plan’s disclosed cheek range (R−B 114–123) and torso range (110–128); the face/torso deviation is present and no worse than disclosed.
- **Verdict: `pass — disclosed deviation present`.**

### Stanza 5 — `d094-s005`, landscape `v005`

- **Candidate:** `artifacts/d094/s005/landscape/candidate-v005.png`
- **Verified SHA-256:** `424583c0ad2b33536d7aa3192150a64c1687d2a035f62b965b78c637f3b035a3`
- **Native size:** 1670×941.
- **Anatomy:** One resting figure lies naturally along a branch. The torso and both arms connect naturally; the legs are parallel and continuous to the feet. No duplicate figure, malformed body or cut-off face/extremity is visible.
- **Faces:** The sleeper’s face is peaceful and intact in the enlarged crop; eyes are closed, without facial distortion.
- **Hands/feet:** Both visible hands show thumb plus four fingers. Both feet show five toes. Extremities remain within the image.
- **Clothing and cast:** One resting figure wears a cream dhoti and orange drape; the bare upper torso and modest devotional jewelry are ordinary traditional male iconography. No other person or deity is present.
- **Text/signature artifacts:** No text, labels, signatures, logos or watermarks seen, including the ground, tree bark, leaves and frame corners.
- **Scene and caption fidelity:** A single central tree trunk visibly joins the dark dream branch and clear waking branch. The left branch carries one resting figure and fruit; the right branch leaves open space around a quiet lotus. The tree is one connected body rather than two independent places, matching the nondual dream/waking metaphor in the caption (plan lines 244–255; content line 62; caption #5).
- **Character/deity contract:** No named character or deity is required; no continuity contract applies.
- **Verdict: `pass`.**

## Overall result and captain-call inventory

All five exact-checksum landscape candidates pass the specified visual gate. Stanzas 3 and 4 pass with their plan-disclosed pose and skin-tone deviations present; the independently measured skin patches are within the disclosed ranges. No undisclosed defect requiring a captain choice was found. The pending human art approval remains the standing approval state and is not a new decision raised by this review. My captain-call inventory is empty. These findings do not update `art/approved/` or authorize publication by themselves.

## Evidence and recommendation

Evidence commands included `sha256sum` on the listed contracts and candidates, `identify` on all candidates, full-resolution `view_image` inspection of each candidate and mapped reference, enlarged ImageMagick crop generation, and 11×11 pixel extraction/median calculation for the two disclosed skin-tone deviations. Candidate hashes, native dimensions, source mappings and relevant plan/contract/content line references are recorded above. Recommendation: retain these five exact checksums as independently visually reviewed; proceed through the project’s separate approval and publication gates when authorized.

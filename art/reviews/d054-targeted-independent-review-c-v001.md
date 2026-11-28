# D054 independent visual review (review-c): 7 selected landscape candidates

Reviewer: crewmate task `d054-review-c` (independent; no producer review, review record, status or evidence file was read).
Scope: read-only visual review. No project file, approval manifest, candidate or reference was changed. **All artwork stays unapproved**; this review does not approve artwork.

## Summary

| Stanza | Candidate | SHA-256 (verified) | Verdict |
|---|---|---|---|
| 2 | `artifacts/d054/s002/landscape/candidate-v006.png` | `7341b7911dac0636dbf93d16478502cccd92db9bc5fb4b2a298d67b7c7d935be` | **needs-fix** (Garuda wears jewellery his contract does not list) |
| 4 | `artifacts/d054/s004/landscape/candidate-v010.png` | `483e4010aaeec768efd1d14848b06e0520eb72c6db479e5ecbb2f90c28daff7c` | **pass** |
| 6 | `artifacts/d054/s006/landscape/candidate-v005.png` | `441a4d8c1094809a03bf3492949eeb34e2ebb2df2a81656f9da86ae3ce08b26e` | **needs-fix** (cowherd skin reads orange: R−B 149–157) |
| 7 | `artifacts/d054/s007/landscape/candidate-v004.png` | `6edb7f4c3f07521390f68e691333f46f1b8d50eb417f225998b157fda57db300` | **needs-fix** (Krishna's jewellery is palace-like; one hand has no fingers and merges into another man's forearm; skin reads orange) |
| 8 | `artifacts/d054/s008/landscape/candidate-v003.png` | `a3eea67455f55b4c1e6d42f1598072c294a77d3083b9ccd6230390d1a6ce8875` | **needs-fix** (mark on Krishna's forehead; heavy jewellery; Krishna B−R 36) |
| 9 | `artifacts/d054/s009/landscape/candidate-v004.png` | `556f6c49fc91586cd2a22b2804c3dfcd2a3524a128858aecf6d57008b46319ef` | **needs-fix** (Krishna wears an earring and bangles his contract does not list) |
| 10 | `artifacts/d054/s010/landscape/candidate-v004.png` | `4e225726c29c3f094e0a21da58798a11d41abd7568a010cb086dcac78c45a865` | **needs-fix** (Bhattathiri's skin reads orange, R−B 164–171; cowherds R−B 145–151; Krishna's jewellery not in his contract) |

Result: 1 pass, 6 needs-fix, 0 uncertain. A verdict holds only for the exact checksum listed above.

**Stanza 4 toe tiebreak (v010):** the far foot has **1 clear toe tip**: the big toe, with a drawn toenail at about x404–416, y819–829. Two lesser toes, possibly three, are shown only by separation strokes (about x395–425, y805–826). Those strokes run into one shared outer contour, so their tips cannot be told apart at the image's own pixel size; the whole toe cluster is about 35×30 px. I am unsure whether the strokes imply 2 or 3 lesser toes. What I am sure of: no tip besides the big toe is drawn as a separate shape. Nothing extra or malformed is visible, and at full-image size the foot reads as a normal foot seen from the side. The near foot clearly shows 5 toes. I judge this an observation, not a defect.

## Contract and input hashes actually read (all matched the brief)

Checked with `sha256sum -c` against lists built from the brief text by `grep -oE … | awk` (not retyped). All 25 entries returned `OK`, and a recheck at 2026-11-27T20:19:15Z also returned all OK.

| File | SHA-256 |
|---|---|
| review-contract-b/art/plans/d054.json (final plan) | `2ca7d710b06874c0fc8558b6d4dd92f4f027b5d9a4d06ae5746be15906cb79e4` |
| review-contract-b/art/bible/series.json | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| …/characters/bhattathiri/character.json | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| …/characters/d054-cattle/character.json | `deca33ca2cad0cfe51fd1ed7edd87ac7a960e5a89cf108465875b731fe43acc5` |
| …/characters/d054-kaliya/character.json | `825f0dfc8758c79f6f1bb4a71e51bd78a6a2987cea15899f276c997442896d9f` |
| …/characters/d054-saubhari/character.json | `be064191b42755329932b785aca466b18479b53a0c0646ac01c64faa68b5bb8e` |
| …/characters/garuda/character.json | `574f6ce4c4488129b475bf6967dd8e0219e16bb213a27212f4fd35d446755035` |
| …/characters/gopas/character.json | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| …/characters/krishna-vrindavan-youth/character.json | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| slot-7 content/sources/d054/reference-map.json | `cc4fb8ce78c9a188736655f66a244a8235b75e54b31b1872fefa218daad86bec` |
| slot-7 intake/D054/photo-captions.txt | `53db276f41ef496705bd0b5b1de133ee52481dac797dbb45b0c23f4bebe29490` |

(The contract files live under `/home/gehariharan/firstmate-narayaneeyam-mate/data/d054-production/`; "slot 7" means `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam/`.)

All seven reference photos also matched the brief: 002 `b5bd5cd1…`, 004 `cedf5cc2…`, 006 `29814b71…`, 007 `42cd7b17…`, 008 `8e770fae…`, 009 `7b0d7096…`, 010 `98de092e…`. The copies in `/home/gehariharan/OneDrive/Pictures/Narayaneeyam Studio/intake/D054/` have identical SHA-256 values.

**How each stanza maps to its reference photo.** In the plan, stanza N has `reference_paths` set to `intake/D054/00N.jpg` and `caption_anchor` set to `photo-captions.txt#N`. In the chapter content (`content/daskams/d054.json`), stanza N's `commentary_source` is `intake/D054/photo-captions.txt#N`. The plan's `mismatches` list discloses that photos 2, 7, 9 and 10 do not show the canonical scene. For those stanzas, the canonical scene in the plan entry controls.

## Method

- I viewed every candidate at its native 1672×941 (s006: 1671×941) and every mapped reference photo in full.
- I cut focused crops with ImageMagick (`magick <in> -crop WxH+X+Y +repage -filter point -resize N% <out>`), using a helper that refuses any output path containing `/artifacts/` or `/intake/`. Every output went to `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/.review-scratch/` (inside my own worktree). I made 4-corner sheets for every candidate to check for text or signature artifacts.
- Skin was measured by piping a crop through `magick … rgb:-` and taking per-channel medians in Python:
  - Human skin: hand-placed skin-only patches, reporting the median of R−B. For s006 I drew the patch locations onto a copy to confirm they sit on skin.
  - Krishna: a blue-pixel mask (B > R+5, B ≥ 60) over boxes on his body, plus spot patches.
- I counted digits on every visible open hand and foot of the main figures in enlarged crops.
- Pixel coordinates below are (x, y) in the full candidate image.

**How I applied the ornament rule.** The brief fails "a mark or ornament on a character that the plan or contract does not disclose", but treats "ordinary iconography and ordinary traditional dress" as observations. I drew the line as follows:

- **Named characters with their own contract** (Krishna, Garuda, Bhattathiri, Saubhari): any undisclosed mark or ornament is a needs-fix. Krishna's contract allows only "one simple low gold band with a single upright peacock feather" and a plain forehead.
- **Generic groups** (gopas, which the contract calls a "generic supporting community", and cattle, a "small-supporting-herd"): simple ear hoops, plain bangles or armlets, a forehead dot and bead collars count as ordinary traditional dress, so I report them as observations.

Applying the rule literally to the generic groups would also fail s006 and s009–s010 for the cowherds' earrings. That would not change any verdict: those images already fail on other grounds.

## Per-candidate findings

### Stanza 2: candidate-v006. Verdict: **needs-fix**
Inspected 2026-11-27 20:09–20:10 UTC (crop timestamps 20:09:42–20:10:29).

- **Anatomy:**
  - Saubhari is a normal human, waist-deep in the river, with two arms. One arm is raised; the other is under the water.
  - Garuda: one eagle head, two wings attached continuously at the shoulders, two human-like arms ending in taloned hands, and two bird legs. Nothing is fused or detached.
- **Faces:**
  - Saubhari: an angry, distinct profile with a natural beard and hair gathered in a bun.
  - Garuda: a hooked beak holding one fish.
  - A small gold-looking spot under the beard at about (335,667) proved, at 600%, to be a beard curl or Adam's apple, not an ornament.
- **Hands and feet:**
  - Saubhari's raised hand has 5 digits: index finger pointing, 3 fingers curled, thumb folded.
  - Garuda's hands each show 4 talons (3 forward plus a thumb talon on the near hand). Each foot shows 4 talons (3 forward plus 1 hind). This is coherent bird anatomy.
- **Clothing and cast:**
  - Saubhari wears a cream wrap over one shoulder. His bare upper torso in ordinary ascetic dress is an observation.
  - Cast: Saubhari, Garuda, 1 fish in the beak, 2 fish in the water, lotuses. Nobody is duplicated.
- **Text or signature artifacts:** none. I checked all corners, the water and the lily pads. The sky has faint decorative vine scrolls, which are not text.
- **Scene and reference fidelity:** the plan's required elements are all present: Garuda takes a fish, Saubhari watches from the water and raises a restrained hand in a spoken curse, and fish remain in the water. There is no graphic injury. Photo 002 shows only Saubhari meditating underwater; the plan discloses that it omits Garuda and the curse, and that deviation is present as disclosed. Saubhari's identity (beard, gathered hair, ascetic) is consistent with the photo.
- **Character contracts:**
  - Saubhari's skin is warm brown. R−B medians: forehead 106, cheek 108, chest 111, left shoulder 115, right upper arm 107. A viewer sees natural warm brown, not orange.
  - Garuda's feathers are warm brown and ochre, he has two attached wings, and he wears a yellow-ochre loincloth. All of that matches his contract.
  - **Defect:** Garuda wears a set of gold jewellery that his contract does not list. His contract gives only "simple ochre cloth if a humanlike torso is used" and lists no ornaments:
    - a jewelled headband (diadem) with circular insets, at about (992–1156, 154–234)
    - a round ear ornament at about (1132–1168, 250–286)
    - an upper-arm band at about (1068–1140, 338–366), with a second band on the far upper arm at about (1255–1310, 280–320)
    - wrist bangles at about (1033–1090, 477–517) and (1220–1270, 485–525)

  The diadem sits on the head of the image's largest figure, so any viewer will notice it.
- **Observation:** Garuda's contract says to "use the D035 stanza-5 source cue for the chosen form". There is no `intake/D035` folder in slot 7. The OneDrive `intake/D035/005.jpg` shows a Rama and Hanuman scene, not Garuda, so I could not check the four-limbed human-torso form against that cue. The contract does allow a human-like torso.
- **Fix path:** regenerate with Garuda unadorned, or have the contract owner add these ornaments to Garuda's contract. Everything else in this image would pass.

### Stanza 4: candidate-v010. Verdict: **pass**
Inspected 2026-11-27 20:10–20:11 UTC (crop timestamps 20:10:47–20:11:55, including the toe analysis).

- **Anatomy:** one youthful Krishna standing, with one face, two arms and two legs, all connected and in normal proportion. There are 3 birds, each with one head and two wings.
- **Face:** serene and downcast with a compassionate look; youthful, not infant-like. The forehead is plain and smooth, with no mark.
- **Hands and feet:**
  - The hand on his chest has 5 digits (thumb plus 4 fingers).
  - The outstretched open hand has 5 digits (thumb plus 4 fingers).
  - The near foot has 5 toes, each with a nail.
  - Far foot (tiebreak): see the Summary. In short: 1 clear tip, plus 2–3 implied toes I could not tell apart, and nothing malformed.
- **Clothing and cast:** yellow dhoti and red-orange shawl; bare youthful chest in ordinary dress. Krishna is the only figure.
- **Text or signature artifacts:** none in the corners, ground, water or sky.
- **Scene and reference fidelity:** the plan's requirements are all present:
  - a poisoned riverbank
  - two clearly separate dried trees
  - three birds falling with closed eyes
  - one compassionate Krishna on the bank

  There is no Kaliya, no poison cloud, and no halo or rays (I checked the area around his head at 150%). Photo 004's dead riverbank with fallen trees is followed thematically; the cartoon style is correctly not copied.
- **Character contract:**
  - The headwear is one simple low gold band with one upright peacock feather. There are no other ornaments.
  - Krishna's skin B−R medians (blue-pixel mask): face 43, torso 41, extended hand 43, feet 38, whole figure 41 (median RGB about 54,68,95). That meets the plan's ≥ 40, though feet alone are just under. A viewer sees a matte slate-blue Krishna, slightly lighter than deep indigo, which is within contract.
- **Observations:**
  - The whole background is a saturated bright orange: sky median about (224–236, 105–122, 3–9), ground about (210, 90, 4). That is brighter and more saturated than the series' "earth ochre #b46c0c". The palette leans toward drift, but palette is not one of the brief's failure grounds.
  - The river is painted dark maroon, about (110, 20, 4), to show it is poisoned. It is not graphic.

### Stanza 6: candidate-v005. Verdict: **needs-fix**
Inspected 2026-11-27 20:11–20:15 UTC (full view about 20:11; crops 20:12:29–20:14:57).

- **Anatomy:**
  - Krishna kneels or crouches with connected limbs.
  - There are 3 cowherds: a young one reclining on one elbow, a mustached one in a turban seated, and a bearded one lying down with eyes closed. All are distinct.
  - There are 3 cows (cream, brown and cream, all lying down). Each has one head, two horns where visible, and folded legs. No animal is fused or duplicated.
- **Faces:** distinct and natural. Krishna has a gentle sidelong smile and a plain forehead.
- **Hands and feet:**
  - Krishna:
    - Open hand: 5 digits.
    - Hand on knee: 4 fingers; the thumb is hidden, which is plausible for that resting pose.
    - Near foot: 5 toes; far foot seen from the side.
  - Cowherd 1:
    - Hand on chest: 5 digits.
    - Hand on the ground: 4 fingers with the thumb hidden.
    - Both feet: 5 toes each.
  - Cowherd 2:
    - Hand on the ground: thumb plus 4 fingers.
    - Foot: 5 toes.
  - Cowherd 3:
    - Hand on chest: thumb plus 4 fingers.
    - Low hand: 4 fingers with the thumb hidden.
    - Foot: 5 toes (it reaches near the bottom edge but is not cut off).
- **Clothing and cast:**
  - Cream, olive and maroon dhotis and shawls, as the contract asks. Bare male upper torsos in ordinary dress are observations.
  - Cowherd 2 wears a gold ear hoop at about (1105–1125, 400–420). I treat that as ordinary traditional dress, an observation.
- **Text or signature artifacts:** none.
- **Scene and reference fidelity:** Krishna is close to the fallen cowherds and cows, two cowherds are rising and looking up, one is still lying down, and the cows are lifting their heads. Mercy is shown by gesture and expression only, with no rays. This follows photo 006 (fallen devotees and Krishna approaching) without copying its halo.
- **Character contracts:**
  - Krishna has the band and feather only and a plain forehead. B−R: face 63, torso 67, feet 56 — a deep blue that passes.
  - **Defect:** the cowherds' skin reads orange. R−B medians:
    - cowherd 1: cheek 151, chest 156, upper arm 154
    - cowherd 2: cheek 152, chest 130, arm 154
    - cowherd 3: forehead 157, cheek 151, chest 149, arm 153

    Typical skin is RGB about (180, 82, 27): hue about 22°, saturation about 85%. The plan requires a median below 120 for human skin. The patches I sampled were at (700,400), (640,470), (840,520), (1050,370), (1000,470), (1240,520), (1490,640), (1530,660), (1300,740) and (1180,905). Next to Saubhari in s002 (R−B 106–115) and the cowherds in s009 (R−B 123–135), these three bodies read as copper-orange rather than natural warm brown. That covers the whole central group, which a viewer sees at first glance.

### Stanza 7: candidate-v004. Verdict: **needs-fix**
Inspected 2026-11-27 20:15 UTC (crops 20:15:20–20:15:46, with the full view just before).

- **Anatomy and hands (defect):** where the embracing arms meet at Krishna's waist, I could not trace the limbs clearly.
  - The central cowherd (red shawl) reaches around Krishna. His hand ends in a rounded, mitten-like lump with no fingers drawn, at about (990–1030, 645–715).
  - The right cowherd's forearm (gold armband at about (1100–1150, 575–610)) comes down and ends in a rounded stump at about (1020–1090, 700–780). It has no visible hand and merges into the central cowherd's arm.

  The plan asks for "natural, connected limbs" with hands "visible only where they can be clearly drawn". Here a hand is visible but has no fingers, and two men's arms merge in the focal centre of the embrace. A viewer looking at the hug will see a lump of brown arms with no hands.
- **Hands, counted:**
  - Krishna's left hand on the left cowherd's shoulder: thumb plus 4 fingers.
  - Krishna's right hand on the right cowherd's shoulder: thumb plus 4 fingers.
  - Feet are not visible: the figures are cut off at the knee or thigh by the bottom of the frame, which is ordinary mural framing.
- **Faces:** 3 distinct cowherds (one with a mustache, one young, one in a turban) and a serene Krishna with his eyes closed. There are no duplicates.
- **Clothing and cast:**
  - Cream, maroon and olive dhotis and shawls. The cowherds wear gold ear hoops and armbands, which I treat as ordinary dress (observation). Bare torsos are observations.
  - Cast: Krishna plus 3 cowherds, matching the plan's "three distinct adult cowherds".
- **Text or signature artifacts:** none.
- **Scene and reference fidelity:** the cowherds are embracing Krishna under a banyan tree, with no flute scene, as required. Photo 007 shows a flute scene; the plan discloses that mismatch, and it is present as disclosed. Only the general setting (a tree and boys around Krishna) carries over.
- **Character contracts:**
  - **Defect:** Krishna wears palace-like jewellery that his contract does not list. His contract allows only "one simple low gold band with a single upright peacock feather". Here he wears:
    - a beaded headband with a central medallion and pendant at about (700–890, 120–215), not a simple band
    - large disc earrings at about (750–790, 295–345) and (900–930, 250–300)
    - two heavy multi-strand necklaces with pendants at about (770–950, 345–580)
    - armlets and bracelets at about (340–420, 450–520) and (1240–1320, 365–420)
    - a jewelled belt with a medallion at about (830–990, 640–720)
  - The forehead is plain.
  - Krishna's B−R is about 55 (deep indigo), which passes.
  - **Defect:** the cowherds' skin reads orange. R−B medians: left cowherd cheek 152 and arm 158; central cowherd cheek 152 and back 139; right cowherd cheek 157 and arms 162 and 153. Typical RGB is about (185, 95, 27). That is above 120, and a viewer sees tan-orange.

### Stanza 8: candidate-v003. Verdict: **needs-fix**
Inspected 2026-11-27 20:16 UTC (crops 20:16:20–20:16:27, plus a forehead zoom and measurement just after).

- **Anatomy:**
  - Krishna stands with connected limbs.
  - There are 4 cows: olive-grey at top left, cream at bottom left, brown on the right, cream at bottom right.
  - Each cow has one head, two horns, two ears and one tail. Tails were traced at about (15, 580–680), (0–33, 834–914), (1630–1660, 690–790) and (1530–1560, 860–930).
  - Lower legs run off the bottom of the frame at the edges, which is natural framing.
  - Krishna's lower legs and feet are below the frame, so this is a three-quarter-length figure. That is an observation.
- **Faces:** Krishna is serene with his eyes closed. The cows have distinct faces, open mouths and tears, as the plan requires.
- **Hands:**
  - Hand on the cream cow's head: 4 fingers plus a thumb lying along the hand.
  - Hand on the brown cow's head: 4 fingers plus a thumb.
  - Nothing malformed.
- **Clothing and cast:** yellow dhoti and red-orange shawl. Krishna is the only human, as required.
- **Text or signature artifacts:** none. The reference photo's "ISKCON ARTS" watermark was not carried over.
- **Scene and reference fidelity:** the revived cows surround Krishna with tears and open mouths. Photo 008 is followed thematically. Its unrelated wildlife, glossy rendering and halo were correctly left out.
- **Character contracts:**
  - **Defect (forehead):** there is a thin cream vertical stroke on Krishna's forehead between the brows, about 2×16 px at (807–815, 176–193). Measured at 900%, it is clearly lighter than the surrounding skin. It reads as a tilak, which the contract forbids: "no forehead tilak or mark; keep the forehead plain and smooth".
  - **Defect (jewellery):** Krishna wears jewellery his contract does not list:
    - a beaded headband rather than a simple band
    - two disc earrings at about (900–930, 205–250) and (785–805, 255–290)
    - a two-strand necklace with pendants at about (780–940, 280–500)
    - medallion armlets at about (640–700, 375–420) and (1015–1050, 365–400)
    - bracelets at about (510–560, 455–505) and (1135–1185, 305–360)
    - a jewelled belt at about (720–910, 525–590)
  - **Blue below threshold:** Krishna's B−R is 32 on the face, 36–38 on the torso and arms, and 36 for the whole figure. Median RGB is about (62, 69, 99), a greyish slate blue. That is below the plan's ≥ 40. On its own it is not a clearly different colour, but it adds to the defects above.
  - **Observation:** all 4 cows wear gold bead necklaces with medallions, which the cattle contract does not list. I treat that as ordinary decoration on a generic herd.

### Stanza 9: candidate-v004. Verdict: **needs-fix**
Inspected 2026-11-27 20:17 UTC (crops 20:17:10–20:17:38, plus zooms and measurements just after).

- **Anatomy:** Krishna sits on a rock. There are 3 distinct cowherds: one in a tied headband kneeling with palms joined, one bearded kneeling with palms joined, and one fully prostrate at Krishna's feet. Limbs are connected and nobody is duplicated.
- **Faces:** distinct and joyful; the prostrate cowherd's eyes are closed. Krishna has a gentle sidelong smile and a plain, smooth forehead, as the plan requires.
- **Hands and feet:**
  - Krishna:
    - Raised open (blessing) hand: thumb plus 4 fingers, 5 digits.
    - Hand on knee: 4 fingers with the thumb hidden.
    - Left foot: 5 toes (the smallest is a thin band without a nail; checked at 900%).
    - Right foot: 5 toes.
  - The two kneeling cowherds' joined palms each show 4 fingertips plus a thumb.
  - The prostrate cowherd's near hand shows 4 fingers. His far hand shows 3 fingers, with the 4th hidden under the near hand — natural overlap.
  - The kneeling cowherds' soles show a full set of toes.
- **Clothing and cast:** olive, maroon and cream dhotis and shawls. Gold ear hoops and bangles on the cowherds are treated as ordinary dress (observation).
- **Text or signature artifacts:** none.
- **Scene and reference fidelity:** the plan's required scene is all present: gooseflesh is shown as stippled marks on the arms, the faces show joy, the kneeling men praise him with joined palms, and one man lies prostrate at Krishna's feet. Photo 009 is a cow-and-calf pastoral; the plan discloses that mismatch, and it is present as disclosed.
- **Character contracts:**
  - **Defect:** Krishna wears an earring and bangles that his contract does not list:
    - a gold crescent hoop earring at about (1307–1333, 207–237), prominent beside his face
    - a wrist bangle on the raised hand at about (1072–1125, 342–375)
    - a wrist bangle on the knee hand at about (1308–1360, 496–541)

    His contract allows only the band and feather. Krishna in s004 and s006 has no such ornaments, so this also breaks continuity across the chapter.
  - Krishna's B−R is about 62 (cheek 62, forehead 64, arm 61, foot 58), RGB about (77, 106, 141). That is a medium steel blue, lighter than the deep indigo in s006 and s007, but it passes ≥ 40. Observation.
  - Cowherd skin R−B: 133 and 123 (cowherd 1), 135 and 127 (cowherd 2), 129 and 128 (cowherd 3). That is slightly above the guide of about 120. RGB is about (175, 93, 44). A viewer sees a natural warm reddish-brown, not orange, so this is an observation, not a defect.

### Stanza 10: candidate-v004. Verdict: **needs-fix**
Inspected 2026-11-27 20:18 UTC (crops 20:18:34–20:18:58, plus zooms and measurements just after).

- **Anatomy:** Krishna sits on a rock. Bhattathiri kneels with palms joined. Two cowherds stand: one in a turban with palms joined and a shoulder bag, one with a mustache holding a staff. All are connected; nobody is duplicated.
- **Faces:**
  - Bhattathiri matches his contract: older, lined face, clean-shaven, a largely shaved scalp with a small dark tuft, three horizontal ash stripes and a central red forehead mark.
  - The cowherds are distinct.
  - Krishna has a sidelong gentle gaze and a plain forehead.
- **Hands and feet:**
  - Krishna:
    - Raised blessing hand: thumb plus 4 fingers.
    - Hand on knee: 4 fingers with the thumb hidden.
    - Visible foot: 5 toes.
  - Bhattathiri's joined palms: fingertips plus thumb, nothing malformed.
  - Cowherd 2's hand on the staff: a closed fist around the staff.
  - Cowherd 1:
    - Left foot: 5 toes.
    - Right foot: seen from the side (big toe plus about 3 toe bands).
  - Cowherd 2:
    - Left foot: 5 toes, checked at 900%.
    - Right foot: hidden behind Bhattathiri.
- **Clothing and cast:**
  - Bhattathiri wears a cream dhoti with a maroon edge, a sacred thread, and two modest bead strands (cream beads and dark rudraksha). That is within "restrained prayer beads".
  - The cowherds wear cream and olive dress.
  - Cowherd 1 has a small red forehead dot at about (140, 128), and the cowherds wear ear hoops. I treat these as ordinary dress (observation).
- **Text or signature artifacts:** none.
- **Scene and reference fidelity:** the plan's composition is all present: Bhattathiri kneeling in prayer before Krishna, two recovered cowherds standing nearby, Krishna's open blessing hand, and no beams. Photo 010 shows a cattle procession; the plan discloses that mismatch, and it is present as disclosed.
- **Character contracts:**
  - **Defect:** Bhattathiri's skin reads orange. R−B medians: cheek 170, scalp 171, chest 169, arm 167, neck 164. RGB is about (220, 125, 52), a light orange-peach. His contract asks for a "warm medium-brown mineral-pigment tone", and the plan requires R−B below 120. He is the focal devotee, so a viewer sees an orange man.
  - **Defect:** the cowherds' skin also reads orange-tan. R−B is 148 and 145 (cowherd 1) and 151, 148 and 148 (cowherd 2). RGB is about (203, 117, 55).
  - **Defect:** Krishna wears jewellery that his contract does not list:
    - a gold disc earring at about (1253–1280, 238–270)
    - a gold bead necklace at about (1200–1300, 293–357)
    - wrist bangles at about (1020–1068, 415–440) and (1273–1316, 533–579)
  - Krishna's B−R is about 94, RGB (53, 80, 147), a vivid royal blue that is more saturated than "deep matte". It passes the numeric rule; observation.

## Recommendations

1. Regenerate s006, s007, s008, s009 and s010, and either regenerate s002 or have the contract owner amend Garuda's contract. Each new prompt should state:
   - Krishna wears only the low gold band and one feather: no earrings, necklaces, bangles or belt, and no forehead mark at all.
   - Human skin is natural warm medium-brown, not copper or orange. For Bhattathiri especially, state it explicitly.
   - For s007: two clearly drawn hands, or hands fully hidden behind Krishna, with no merged forearms.
2. Add an automated skin-gate (median R−B below 120 for humans) before submitting for review. s006, s007 and s010 would all have been caught by it.
3. s004 v010 has no defect under this standard. The saturated orange palette is a matter of taste for the producer or captain, not a review failure.

## Process notes (honesty)

- I did not read any review record, report, producer status or evidence file. I did once run `git -C <slot-7> status --porcelain`. It printed modified-file names, including `art/reviews/visual-reviews.json`. I read only the names, never the contents.
- One helper command began with `cd` inside my own scratch directory, which breaks brief rule 8. It only combined crop images; no input was touched.
- No image was generated or edited. Inputs were only read; the candidate and contract hashes were rechecked after the review and still match.

## Captain-call inventory

Empty. This review raises no decision for the captain. Pending captain art approval is the standing state, and every artwork remains unapproved. The fix routes above (regenerate, or amend the Garuda contract) belong to the producer or contract owner under existing process.

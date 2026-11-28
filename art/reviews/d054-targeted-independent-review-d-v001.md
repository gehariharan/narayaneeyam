# D054 landscape candidates: independent visual review (review-d)

Reviewer: crewmate task `d054-review-d`. This is an independent read-only visual review of six repaired landscape candidates for Narayaneeyam dasakam 54. It is **not** artwork approval. All artwork stays unapproved, and only the captain can approve it.

I read no existing review record, producer review, status or evidence file for this chapter. That covers `artifacts/d054/reviews`, `art/reviews`, `visual-reviews.json` and other reports under `data/`. I formed every judgement below from the images, the frozen contracts and the reference photos only.

## Summary

| Stanza | Candidate | SHA-256 (verified) | Verdict |
|---|---|---|---|
| 2 | `artifacts/d054/s002/landscape/candidate-v008.png` | `400981db4f123eded58b92a35f490f65dabcdfbd78bfccd25297c438bc45555c` | **needs-fix** |
| 6 | `artifacts/d054/s006/landscape/candidate-v012.png` | `7136f9aae0c31f68880d323af6736856d86e0f8a1724de116ae7a265abb31617` | **pass** |
| 7 | `artifacts/d054/s007/landscape/candidate-v009.png` | `8e6cbbb6b5aa511a080a1bdb1bebe51980513d8386a88ca533ec67b2b1dae388` | **needs-fix** |
| 8 | `artifacts/d054/s008/landscape/candidate-v006.png` | `aaf40348f43cceb9fa90be5c536c1116761d7519c1152ea04479debc3f538eb3` | **needs-fix** |
| 9 | `artifacts/d054/s009/landscape/candidate-v008.png` | `254e2673209fb2844798b2ee43bdc4a27d3afe88b6ff3a052a946cfffdf09fce` | **pass** (two contract deviations recorded, see below) |
| 10 | `artifacts/d054/s010/landscape/candidate-v007.png` | `27451de9a46cd8e881c6a80ea418a4b04548c78279c8d9c6df1f7c97f82a0aa9` | **needs-fix** |

Each verdict applies only to the exact checksum listed. The reasons for each needs-fix, in short:

- **S2 v008:** Garuda stands on four bird-taloned legs, with no hands, and wears a loincloth on a body that is not humanlike. This contradicts the Garuda contract ("broad bird body with two wings"; cloth only "if a humanlike torso is used") and the chapter's Garuda source cue.
- **S7 v009:** Both of Krishna's feet, at the centre of the foreground, show four toes each.
- **S8 v006:** Krishna's hand on the cream calf's head shows three fingers and a thumb.
- **S10 v007:** The turbaned cowherd has a round dark forehead dot. The gopas contract does not disclose it.

## Contract files actually read (SHA-256)

All values were checked with `sha256sum -c` on a list generated programmatically from the launch brief, never retyped (method below). All 23 entries returned `OK`, both before and after the review. Each file's actual hash equals its expected value.

| File | SHA-256 |
|---|---|
| `/home/gehariharan/firstmate-narayaneeyam-mate/data/d054-production/review-contract-b/art/plans/d054.json` (FINAL plan) | `2ca7d710b06874c0fc8558b6d4dd92f4f027b5d9a4d06ae5746be15906cb79e4` |
| `…/review-contract-b/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `…/review-contract-b/art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `…/review-contract-b/art/bible/characters/d054-cattle/character.json` | `deca33ca2cad0cfe51fd1ed7edd87ac7a960e5a89cf108465875b731fe43acc5` |
| `…/review-contract-b/art/bible/characters/d054-kaliya/character.json` | `825f0dfc8758c79f6f1bb4a71e51bd78a6a2987cea15899f276c997442896d9f` |
| `…/review-contract-b/art/bible/characters/d054-saubhari/character.json` | `be064191b42755329932b785aca466b18479b53a0c0646ac01c64faa68b5bb8e` |
| `…/review-contract-b/art/bible/characters/garuda/character.json` | `574f6ce4c4488129b475bf6967dd8e0219e16bb213a27212f4fd35d446755035` |
| `…/review-contract-b/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `…/review-contract-b/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `<slot7>/content/sources/d054/reference-map.json` | `cc4fb8ce78c9a188736655f66a244a8235b75e54b31b1872fefa218daad86bec` |
| `<slot7>/intake/D054/photo-captions.txt` | `53db276f41ef496705bd0b5b1de133ee52481dac797dbb45b0c23f4bebe29490` |

`<slot7>` = `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam`

I also read the following, which the brief did not pin to a hash:

- **Chapter content `<slot7>/content/daskams/d054.json`.** Actual SHA-256: `f4bdeb00bdc24a1b3b441b9121af33dbb2dfb736c96ab62928237431a14a3611`. I used it for the stanza ↔ caption mapping and the commentary.
- **`<slot7>/intake/D054/001.jpg`.** It is listed in the plan's reference inventory, and the plan says its right half shows Garuda taking a fish, which is stanza 2's action. I viewed it as Garuda-form context for S2. I verified its SHA-256 against the plan's inventory value `2f81060237df11c5e5853ac1efed8717de07cc0156e90e8616878de5faaf5e90` by reading it from the plan.
- **Pixel statistics of `<slot7>/artifacts/d001/s004/landscape/master.png` and `…/d001/s008/landscape/master.png`.** These are the plan's rendering anchors. I took only mean colour, saturation and blue fraction, for palette comparison.

## Reference photos and mapping

Every numbered caption #N maps to canonical stanza N (`continuity.reference_inventory.caption_number_mapping`, and the chapter content `commentary_source: intake/D054/photo-captions.txt#N`). I verified the reference hashes in the same `sha256sum -c` run:

| Stanza | Reference | SHA-256 | Plan-disclosed mismatch |
|---|---|---|---|
| 2 | `intake/D054/002.jpg` | `b5bd5cd1c798b704418d59addda2215e8328b3d0067673b895591cc4261fa4e7` OK | yes: shows the sage underwater, omits Garuda and the curse |
| 6 | `intake/D054/006.jpg` | `29814b71efd79e6a0a466083cd39482644c7775fe646a0e8b62e43afefa75802` OK | none (aligned) |
| 7 | `intake/D054/007.jpg` | `42cd7b1737b1aa23b80a9fb0efc5f20b09d5fd8617bd88efb873de891f7026f6` OK | yes: a flute scene, not the embrace |
| 8 | `intake/D054/008.jpg` | `8e770fae4ede88e10e74653db6daf774e59cc0a431880e8b1aa41006080f8a04` OK | none (aligned); plan says remove watermark, wildlife, halo |
| 9 | `intake/D054/009.jpg` | `7b0d7096c4d44344d56e6b7a921cbd295c4b935acce3089d2c066561187206a3` OK | yes: a cow-and-calf scene without prostration or praise |
| 10 | `intake/D054/010.jpg` | `98de092eba904fe7a09498786a641ae337dcf054b51e2cf54325ff745a039844` OK | yes: a cattle procession, not Bhattathiri's prayer |

The OneDrive copies at `/home/gehariharan/OneDrive/Pictures/Narayaneeyam Studio/intake/D054/{002,006,007,008,009,010}.jpg` exist and are byte-identical to the slot-7 intake copies (I compared their SHA-256 values directly).

## Method

- **Hash list.** I generated it with `grep`/`sed` straight from the launch-brief file `/home/gehariharan/firstmate-narayaneeyam-mate/state/operational-inbox/1795819638-faa3d740eec48b46.msg` into `.review-scratch/hashes.txt`. That gave 23 entries: six candidates, six references, nine contract files, the reference map and the captions. I then ran `sha256sum -c .review-scratch/hashes.txt`, which reported 23/23 OK before inspection and 23/23 OK again after inspection.
- **Crops.** Every crop and enlargement was written only to `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/.review-scratch/`. That is my own worktree, not `artifacts/` or `intake/`. The helper script `crop.sh` refuses any output path containing `/artifacts/` or `/intake/` and calls `magick <input> -crop … +repage -resize … <scratch-out>`. I made no in-place edits, did not use mogrify, and wrote nothing to any input.
- **Coverage per candidate.** I viewed the full image at native size (1670–1672 × 941). I then made focused crops at 150–700% of every face, every visible hand and foot of the main figures, the torsos, the creature bodies and legs, Krishna's head (forehead, band, feather), and the four corners plus the top and bottom edge strips. I checked the corners and edges for text, signatures and watermarks.
- **Skin measurement.** `.review-scratch/skin.py` is pure Python fed by ImageMagick raw RGB. It computes the median R, G, B and the median (R−B) over rectangular skin-only patches. I checked each patch visually or by its colour, and I list and exclude any patch that accidentally caught cloth or water.
- **Image dimensions.** S2 is 1672×941, S6 1671×941, S7 1670×941, and S8, S9 and S10 are 1672×941. All are 16:9 landscape.
- **Coordinates.** All coordinates below are in the candidate's native pixel space, given as (x, y) from the top left.

---

## Stanza 2: candidate-v008

- **File:** `artifacts/d054/s002/landscape/candidate-v008.png`
- **Verified SHA-256:** `400981db4f123eded58b92a35f490f65dabcdfbd78bfccd25297c438bc45555c`
- **Review time (UTC):** first crop 2026-11-27T22:47:58Z, last crop 22:48:41Z; corner sweep 22:55:50Z.
- **Plan characters:** d054-saubhari, garuda.

**Anatomy.**
- Saubhari is shown waist-deep in the river at the left, x≈130–660, y≈420–941. He has one head and two arms: the right arm is raised, and the left arm runs down into the water at the bottom-left edge. Both connect at the shoulders. His proportions are normal.
- Garuda, on the bank at upper right (x≈640–1610, y≈0–560), has an eagle head, two attached wings and **four legs, all ending in bird talons**:
  - Two front limbs come from the chest and are feathered like arms (feet at ≈(960–1080, 470–540) and ≈(1100–1230, 470–550)).
  - Two hind legs are scaled bird legs (feet at ≈(1300–1420, 480–560) and ≈(1420–1610, 480–560)).
  - Every limb is connected and none is fused.
  - Toe counts are normal for bird feet: front-left 3 forward + 1 rear, front-right 3 forward (rear hidden), hind-left 3 + 1, hind-right 3 + 1.
  - The body therefore reads as a four-legged griffin-like eagle, not as a bird body with two wings.

**Faces.** Saubhari's face is in profile, looking up at Garuda with an angry, open-mouthed expression. Brows, eye, nose, ear and beard are all clean, and nothing is malformed. Garuda's eagle face (≈(960–1110, 150–360)) has a hooked beak with one fish held in it, and a furrowed brow. It is clean.

**Hands and feet.**
- Saubhari's raised right hand (≈(560–660, 470–600)) makes a pointing curse gesture: index finger extended, the middle, ring and little fingers curled, and the thumb folded across. That is 5 digits, and it is correct.
- His left hand is underwater and not visible.
- Saubhari has no visible feet; he is waist-deep.
- Garuda's talons are counted under Anatomy.

**Clothing and cast.**
- Saubhari wears a cream/ochre wrap over his left shoulder. His bare male upper torso is ordinary ascetic dress (an observation).
- Garuda wears a yellow-ochre loincloth over the hindquarters of a bird body (≈(1340–1480, 260–420)).
- The cast is exactly Saubhari and Garuda, plus fish (one in the beak, two in the water at ≈(770–960, 700–760) and ≈(1040–1240, 780–830)).
- There are no duplicated figures.

**Text, signature or watermark.** None. I checked the leafy top-left, the ornamental orange background, the water, the lily pads and all four corners.

**Scene and reference fidelity.**
- The plan's disclosed mismatch is present: reference 002.jpg shows Saubhari meditating underwater with fish and omits Garuda and the curse. The candidate follows the canonical scene instead.
- Must-show items present: a hungry Garuda taking a fish, Saubhari's anger, and a raised hand in a spoken curse.
- One deviation from the composition note: the plan says "Garuda takes one fish from the water". Here Garuda stands on the bank with the fish already in his beak, not at the river surface. That is a minor staging difference and not a defect.
- No graphic injury is shown.
- No beams, rays or border; the image is full-bleed.
- Saubhari's identity matches the 002 reference in kind: dark hair in a top-knot, a full beard, a mature ascetic.

**Character contracts.**
- **Saubhari:** fits the contract. Dark hair gathered in a bun, a natural beard, a cream/saffron wrap, ordinary proportions, shown in the water. Skin-only patches, median R−B:

  | Patch | Box | Median RGB | R−B |
  |---|---|---|---|
  | chest | 200,700–300,760 | (157,89,39) | 118 |
  | forehead | 330,505–370,535 | (151,88,40) | 111 |
  | forearm | 575,600–615,640 | (152,86,37) | 115 |
  | left arm | 150,760–200,830 | (156,87,39) | 118 |
  | hand | 600,560–640,600 | (139,79,33) | 104 |

  I excluded three patches that caught water or the wrap (420,590–470,640; 150,700–190,780; 380,700–420,760). All valid medians are **104–118, below 120**. A viewer sees natural warm brown, not orange.
- **Garuda** does not fit the contract:
  - The contract reads: build "broad bird body with two wings; humanlike torso only as shown in the scene reference"; clothing "simple ochre cloth if a humanlike torso is used".
  - The candidate has no humanlike torso and no hands, yet stands on four taloned legs and wears a cloth.
  - The chapter's own Garuda source (right half of 001.jpg, which the plan identifies as stanza 2's action) shows the traditional upright Garuda: two arms with human hands, two bird legs and two wings.
  - All limbs here are connected and the talon counts are normal, so this is not malformation in the "fused or detached" sense. But a viewer of the full image clearly sees an eagle walking on four legs in a loincloth. That is a creature-anatomy and contract error.
  - Garuda's colour (warm brown and ochre feathers) matches the contract.

**Verdict: needs-fix.**
- **Region:** Garuda's front limbs and four feet, x≈880–1640, y≈300–560 (front limbs x≈960–1280), plus the loincloth at ≈(1340–1480, 260–420).
- **Why a viewer would notice:** Garuda is the second protagonist and fills the upper right. His four-legged griffin stance and the loincloth on a bird body are obvious at normal viewing size. They depart from the contract's "bird body with two wings", where cloth is allowed only with a humanlike torso, and from the Garuda form in the chapter's source.
- **Fix:** a two-legged bird Garuda, or the traditional humanlike-torso Garuda with two hands, with the cloth only in the latter case.

---

## Stanza 6: candidate-v012

- **File:** `artifacts/d054/s006/landscape/candidate-v012.png`
- **Verified SHA-256:** `7136f9aae0c31f68880d323af6736856d86e0f8a1724de116ae7a265abb31617`
- **Review time (UTC):** first crop 2026-11-27T22:49:17Z, last crop 22:53:29Z (a re-zoom of the hands); corner sweep 22:55:51Z.
- **Plan characters:** krishna-vrindavan-youth, gopas, d054-cattle.

**Anatomy.**
- Krishna stands at the riverbank on the left (x≈210–640, y≈90–830). He has one head, two arms (the right hand on his chest, the left extended openly toward the gopa) and two legs. Everything is connected and his proportions are those of a youth.
- Three gopas:
  - g1 is sitting up, looking at Krishna, with a hand on his chest (x≈460–850, y≈380–810).
  - g2 sits cross-legged with eyes closed, breathing, with a hand on his chest (x≈910–1200, y≈310–680).
  - g3 reclines on his side, propped on his elbow, with his hand behind his head (x≈760–1570, y≈600–880).
  - All have normal limb counts. g3's two legs are both traced: the near leg ends in a foot at ≈(765–830, 820–880), and the far leg is behind it.
- Three cows:
  - A white standing cow at the centre (≈(680–1050, 170–460)) has 4 legs (2 front at x≈790–870, 2 hind at x≈990–1040), 1 tail, 1 head, 2 horns and an udder.
  - A brown-and-white spotted cow, grazing at the top right (≈(1160–1460, 170–390)), has 4 legs, 1 tail, 1 head and 2 horns.
  - A cream cow lying at the right (≈(1270–1650, 400–610)) has its legs folded with 2 hooves visible, 1 tail, 1 head and 2 horns.
  - None is duplicated or fused.

**Faces.**
- Krishna's face (≈(410–520, 180–300)) is serene with a downward sidelong glance at g1.
- g1 smiles upward. g2 has closed eyes and an open mouth (breath returning). g3 smiles.
- All four faces are distinct and none is malformed.

**Hands and feet** (counted at 250–700%).
- Krishna's chest hand (≈(360–480, 300–390)): thumb + 4 fingers = 5.
- Krishna's extended open hand (≈(530–640, 420–500)): thumb + 4 fingers = 5.
- Krishna's left foot (≈(240–330, 770–830)): 5 toes. His right foot (≈(340–450, 760–820)) is in side view with the big toe plus small toes visible, which is a natural occlusion.
- g1's chest hand (≈(700–790, 520–600)): thumb + 4 = 5. g1's visible foot (≈(455–560, 760–810)): 5 toes.
- g2's chest hand (≈(1030–1110, 430–490)): thumb + 4 = 5.
- g3's hand resting on the grass (≈(1350–1450, 830–870)): 4 fingers visible, with the thumb under the palm, which is natural. g3's hand behind his head is mostly hidden in his hair (natural). g3's near foot: 5 toes.

**Clothing and cast.**
- Krishna wears a yellow dhoti and a red-orange shawl.
- g1 wears a cream dhoti with a maroon sash and an orange headband. g2 wears a yellow dhoti with a cream shawl. g3 wears a red-maroon cloth with a cream sash and a yellow headband.
- The gopas' bare upper torsos are ordinary cowherd dress (an observation). The framing is modest.
- The cast is Krishna, 3 gopas and 3 cows, and matches the plan.

**Text, signature or watermark.** None. I checked the corners, the river, the rocks, the grass and the foliage.

**Scene and reference fidelity.**
- The 006.jpg reference aligns with this stanza and no mismatch is disclosed.
- The candidate keeps its core: Krishna approaching fallen and rising cowherds with a compassionate glance and an open hand.
- No halo, beams or rays (the reference's halo is correctly dropped).
- "Several figures beginning to rise and breathe" is conveyed by g1 sitting up, g2 breathing with closed eyes, and g3 lifting himself from the ground.
- **Observation:** the cows read as already recovered (standing, grazing, lying calmly) rather than visibly fallen and reviving, and g3's propped pose reads somewhat relaxed. The must-show "fallen group … restoring them" is still legible through the gopas.
- No graphic death.

**Character contracts.**
- **Krishna:** a plain, smooth forehead with no mark; one low gold band and one upright peacock feather; long dark curly hair; youthful, not infant-like; yellow dhoti and red-orange shawl. Skin B−R medians:

  | Patch | Box | B−R |
  |---|---|---|
  | chest | 330,340–380,400 | 78 |
  | face | 430,210–470,250 | 77 |
  | arm | 470,360–520,400 | 73 |
  | shin | 260,700–300,760 | 76 |

  All are **≥ 40**, and the skin reads as deep matte blue.
- **Gopas:** distinct faces, simple hair, no cloned individual, no royal costume. Skin R−B medians:

  | Patch | Box | R−B |
  |---|---|---|
  | g1 chest | 720,560–790,620 | 111 |
  | g1 cheek | 730,420–770,450 | 107 |
  | g1 shin | 500,740–560,780 | 107 |
  | g2 chest | 990,470–1040,520 | 110 |
  | g3 chest | 1360,690–1430,740 | 110 |
  | g3 upper arm | 1490,700–1530,760 | 106 |

  I excluded the g2 forearm patch because it caught grass (G=119). All valid values are **106–111, below 120**, and a viewer sees natural warm brown.
- **Cattle:** within the contract. Cream, white and brown-spotted coats, a modest herd, calm faces, no aggressive pose.

**Verdict: pass.** I found no anatomy, digit, face, clothing, text or contract defect at this checksum. The only observation is that the cows read as recovered rather than reviving.

---

## Stanza 7: candidate-v009

- **File:** `artifacts/d054/s007/landscape/candidate-v009.png`
- **Verified SHA-256:** `8e6cbbb6b5aa511a080a1bdb1bebe51980513d8386a88ca533ec67b2b1dae388`
- **Review time (UTC):** first crop 2026-11-27T22:50:36Z, last crop 22:51:57Z; corner sweep 22:55:52Z.
- **Plan characters:** krishna-vrindavan-youth, gopas.

**Anatomy.** Krishna sits cross-legged at the centre (x≈330–1000, y≈60–900), embraced by three gopas. I traced every arm:

| Figure | Limb | Where it goes |
|---|---|---|
| Krishna | right arm | around g1's back; blue hand on g1's shoulder at ≈(330–420, 400–560) |
| Krishna | left arm | behind g2's head to g3's far shoulder; blue hand at ≈(1200–1290, 420–520) |
| g1 (left, curly bun) | near arm | across to Krishna's belly; hand at ≈(640–740, 510–600) |
| g2 (centre, shaved head) | far (left) arm | crosses in front of his own body, elbow at ≈(900–930, 600–630); forearm rises to Krishna's chest, hand at ≈(680–780, 420–520) |
| g2 | other arm | hidden behind Krishna (natural for an embrace) |
| g3 (right, bearded, bun) | near arm | across to g2's shoulder; hand at ≈(910–1010, 490–580) |
| g3 | other arm | under the red shawl |

- Every arm reaches its owner's shoulder.
- Nothing is fused, detached or left over.
- Krishna's left arm is long but within normal human reach (about 3 head-heights from shoulder to fingertips).
- Background: two cows grazing at the left (≈(0–260, 310–510)) and one cow at the right (≈(1430–1650, 350–490)). The front-left cow has 4 legs and the right cow has 4 legs. The rear-left cow shows 3 legs, with its fourth hidden behind the front cow (natural occlusion). Each has 1 tail and 1 head.

**Faces.** Krishna (≈(650–840, 170–360)) is serene, smiling, with his eyes lowered toward g2. g1 smiles upward; g2 smiles broadly up at Krishna; g3 has a full beard and a joyful smile. All are distinct and none is malformed.

**Hands** (counted at 400–500%). All five visible open hands are correct:

| Hand | Digits |
|---|---|
| Krishna's hand on g1's back | thumb + 4 = 5 |
| Krishna's hand on g3's shoulder | thumb + 4 = 5 |
| g1's hand on Krishna's belly | thumb + 4 = 5 |
| g2's hand on Krishna's chest | 4 fingers + thumb at the side = 5 (verified at 500%) |
| g3's hand on g2's shoulder | thumb + 4 = 5 |

**Feet.**
- **Krishna's left foot (the viewer-left blue foot, ≈(500–590, 840–920)): 4 toes.** I see the big toe at the top and three smaller toes below. The little-toe side rests on the ground line with no fifth toe drawn, and the foot is seen front-on, where all five toes would normally show.
- **Krishna's right foot (the viewer-right blue foot, ≈(840–950, 840–930)): 4 toes.** I see the big toe plus three smaller toes, all clearly outlined with nails at 500%.
- At native size, both blue feet sit in the centre foreground against the ochre ground, and each shows four toe bulbs (crop `.review-scratch/s7-kfeet-native.png`).
- The gopas' feet: g1's left foot (≈(30–150, 840–910)) is in side view, with the big toe plus three toes visible. g3's foot (≈(1480–1610, 840–910)) is in side view, big toe plus three toes. g2's tucked foot (≈(1080–1140, 850–900)) is mostly hidden. These side-view occlusions are natural.

**Clothing and cast.**
- Krishna wears a yellow dhoti and a red-orange shawl. g1 wears a cream dhoti and wrap. g2 wears a yellow-ochre wrap. g3 wears a cream dhoti and a red shawl.
- Bare upper torsos are ordinary dress (an observation).
- The cast is Krishna, three adult cowherds and three background cows. The cows are not in the plan's character list for this stanza, but they are harmless pastoral context (an observation).
- No duplicates.

**Text, signature or watermark.** None, in the corners, the foliage, the trunk or the grass. The reference's "Braj Ras / brajrasik.org" watermark is not carried over.

**Scene and reference fidelity.**
- The disclosed mismatch is present: reference 007.jpg is a flute scene among seated boys. The candidate correctly follows the canonical scene, and no flute is shown.
- Must-show items present: the gopas have risen and are embracing Krishna. There are three distinct adult cowherds with natural, connected limbs. Their wonder and joy read clearly.
- No beams or border.

**Character contracts.**
- **Krishna:** a plain forehead, a low gold band, a single feather, curly hair, youthful, yellow dhoti and red-orange shawl. Skin B−R:

  | Patch | Box | B−R |
  |---|---|---|
  | chest | 620,450–690,520 | 85 |
  | face | 700,260–750,300 | 85 |
  | foot | 860,860–900,890 | 87 |

  All are ≥ 40.
- **Gopas:** distinct faces and natural hairstyles (a curly bun, a shaved head, a bearded bun), with no royal costume. Skin R−B:

  | Patch | Box | Median RGB | R−B |
  |---|---|---|---|
  | g1 back | 420,560–500,620 | (171,97,45) | 124 |
  | g1 face | 520,370–560,400 | (170,95,44) | 126 |
  | g2 face | 880,340–920,370 | (170,96,45) | 124 |
  | g2 arm | 780,520–840,560 | (168,93,43) | 123 |
  | g3 face | 1110,320–1150,350 | (163,94,45) | 114 |
  | g3 chest | 1180,520–1240,580 | (172,97,46) | 126 |

  **Five of the six patches exceed the plan's "below 120" metric, by 3–6.** Visually the skin reads as a warm medium sienna-brown, not orange. Under the brief's standard (a fail only if the skin visibly reads orange), this is a recorded metric deviation and not by itself a fail.

**Verdict: needs-fix.**
- **Region:** Krishna's two feet, x≈500–590 × y≈840–920 and x≈840–950 × y≈840–930.
- **Why a viewer would notice:** each foot shows four toes. They are the deity's feet in the central foreground, drawn front-on with crisp outlines and nails, and big enough to count at native size (toes are about 15 px). The plan explicitly requires no missing digits.
- **Also to correct in the same repair:** the gopa skin metric (R−B 123–126 against the plan's < 120).

---

## Stanza 8: candidate-v006

- **File:** `artifacts/d054/s008/landscape/candidate-v006.png`
- **Verified SHA-256:** `aaf40348f43cceb9fa90be5c536c1116761d7519c1152ea04479debc3f538eb3`
- **Review time (UTC):** first crop 2026-11-27T22:52:19Z, last crop 22:56:14Z; corner sweep 22:55:53Z.
- **Plan characters:** krishna-vrindavan-youth, d054-cattle.

**Anatomy.**
- Krishna stands at the centre (x≈420–1320, y≈0–941). He has one head and two arms, both extended to rest on cows' heads. Everything is connected and his proportions are those of a youth.
- His legs are below the dhoti, which runs off the bottom edge.
- Four animals, all in profile:
  - Olive-brown cow, back left (≈(0–610, 200–700)): 2 horns, 1 visible ear (the far ear is occluded in profile), 1 tail at ≈(10–60, 590–680).
  - Cream calf, front left (≈(0–680, 500–941)): 1 visible horn (the far horn is occluded by Krishna's hand), 1 ear, 1 tail at ≈(0–60, 840–941).
  - Brown cow, back right (≈(1090–1672, 300–930)): 1 visible horn (the far horn is behind the head), 1 ear, 1 tail at ≈(1630–1672, 680–790), 1 hind leg and hoof visible at ≈(1570–1620, 880–930).
  - Cream calf, front right (≈(1040–1560, 530–941)): no horns (a calf), 1 ear, 1 tail at ≈(1530–1570, 850–941).
  - Each animal has a single head and a single body. None is fused or duplicated.
  - Most legs run off the bottom edge. Every leg stub that is visible is attached.

**Faces.** Krishna's face (≈(740–900, 140–290)) is serene, with downcast, nearly closed eyes and a slight smile. Each animal's face has a single tear and an open, gentle mouth (the "tears of joy, soft lowing" of the plan). All are distinct, with no malformation.

**Hands.**
- **Krishna's right hand, the viewer-left one resting on the front-left calf's head (≈(410–560, 470–560)), shows three fingers and a thumb.**
  - At 400–600% I see three dividing strokes between finger outlines, three fingertip nails (at ≈(425,542), (445,550), (468,548) in native coordinates) and a separated thumb at ≈(510,530).
  - Nothing shows that a fourth finger is tucked under the others: the hand is fanned and every fingertip is drawn along the front edge.
- Krishna's left hand, the viewer-right one on the brown cow's head (≈(1140–1310, 280–345)): thumb + 4 fingers = 5. Correct.

**Feet.** Krishna's feet are not in frame; the yellow dhoti reaches the bottom edge (y=941). This is a full-height figure cropped at the shins. **Observation:** I considered whether this counts as "key extremity cut off by the frame". I judge it an ordinary three-quarter framing choice, since no partial foot is clipped, and not a defect.

**Clothing and cast.** Krishna wears a yellow dhoti and a red-orange shawl. His bare upper torso is ordinary dress. The cast is Krishna and four cattle, and Krishna is the single clear youthful figure, as the plan asks. No duplicates.

**Text, signature or watermark.** None. I checked every corner, the leafy top edge and the bottom edge. The reference's "ISKCON ARTS" watermarks are correctly absent.

**Scene and reference fidelity.**
- Reference 008.jpg aligns with this stanza and no mismatch is disclosed.
- The candidate follows the plan's instruction to remove the watermark, the unrelated wildlife (monkeys, peacock, swan, doves, squirrels) and the halo.
- The revived cows surround Krishna with joyful, tearful eyes and open mouths.
- No halo, beams or border.

**Character contracts.**
- **Krishna:** a plain forehead, a low gold band, a single upright feather, curly hair, youthful. Skin B−R:

  | Patch | Box | B−R |
  |---|---|---|
  | chest | 800,350–880,430 | 52 |
  | face | 800,200–860,250 | 52 |
  | arm | 560,450–620,480 | 54 |

  All are ≥ 40, and the skin reads as deep blue.
- **Cattle:** varied coats (olive, cream ×2, brown), distinct faces, no aggressive pose. Measured body colours:

  | Animal | Box | Median RGB |
  |---|---|---|
  | olive cow | 150,380–300,480 | (195,121,26) |
  | cream calf | 100,700–250,800 | (253,182,73) |
  | brown cow | 1400,500–1520,620 | (202,92,10) |

  **Observation:** these values, and the background (probe (1000,100) = (253,159,24)), are notably brighter and more saturated than the D001 anchors. Whole-image mean RGB is (185,117,31), against (139,71,15) and (140,82,18) for the D001 S004 and S008 masters. The brown cow reads as a vivid orange-brown rather than "muted brown". This is a palette observation and not a fail under the brief's standard.

**Verdict: needs-fix.**
- **Region:** Krishna's hand on the front-left calf's head, x≈410–560, y≈470–560.
- **Why a viewer would notice:** it is the deity's open hand at mid-left, drawn large (about 150 × 90 px) and fanned. It shows three fingers and a thumb, while the other hand correctly shows five digits, so the difference is visible side by side. The plan requires no missing digits.

---

## Stanza 9: candidate-v008

- **File:** `artifacts/d054/s009/landscape/candidate-v008.png`
- **Verified SHA-256:** `254e2673209fb2844798b2ee43bdc4a27d3afe88b6ff3a052a946cfffdf09fce`
- **Review time (UTC):** first crop 2026-11-27T22:53:43Z, last crop 22:54:51Z; corner sweep 22:55:54Z.
- **Plan characters:** krishna-vrindavan-youth, gopas.

**Anatomy.**
- Krishna sits on a rock at the right (x≈1000–1650, y≈10–870). He has one head and two arms: the right hand is raised in blessing, and the left hand rests on his knee. He has two legs and two feet. Everything is connected.
- Three gopas:
  - g1 kneels at the left with anjali hands, wearing a cream headcloth and an olive dhoti (x≈20–420, y≈150–810).
  - g2 kneels at the centre-left with anjali hands; he is bearded with a top-knot and wears a maroon wrap (x≈440–840, y≈160–650).
  - g3 is prostrate at Krishna's feet, wearing a cream dhoti, with his head down and both hands flat on the ground (x≈160–970, y≈600–890).
- Limb counts are normal and nothing is fused.

**Faces.**
- Krishna's face (≈(1190–1340, 140–270)) is serene with a sidelong downward glance.
- **Forehead:** the area between the band and the brows is plain blue with no mark (checked at 500%). Two 1–2 px specks at native size are not forehead marks and are invisible at normal viewing: a tiny white catch-light on his left upper eyelid, and a tiny ochre speck on top of his left eyebrow.
- g1 is joyful, looking up. g2 is joyful, bearded. g3 has his eyes closed, face down toward the ground.
- All distinct, with no malformation.

**Hands.**
- Krishna's raised blessing hand (≈(1040–1150, 220–360)): thumb + 4 fingers = 5. This meets the plan's "thumb plus four fingers".
- Krishna's hand on his knee (≈(1210–1300, 590–660)): 4 fingers visible, thumb on the far side. This is natural for a hand draped over a knee.
- g1's and g2's anjali hands (≈(310–390, 280–390) and ≈(670–760, 280–390)): pressed palms, 4 fingertips each plus the thumbs along the inner edge. Correct.
- g3's two hands flat on the ground (≈(830–970, 800–860)):
  - The lower (front) hand shows 4 fingers with the thumb under the palm.
  - The upper (rear) hand shows 3 fingertips, with the rest overlapped by the front hand.
  - These are consistent palm-down occlusions, and nothing visible is wrong.

**Feet.**
- Krishna's right foot (≈(1060–1150, 820–870)): 5 toes.
- Krishna's left foot (≈(975–1065, 800–860)): 5 toes. It is foreshortened, and at 700% I see the big toe plus four smaller toes, the outermost faint.
- g1's foot (≈(10–110, 740–810)): 5 toes in a three-quarter view.
- g3's tucked foot (≈(150–280, 800–890)): 4 toes visible in a tucked side view, consistent with occlusion. Nothing visible is wrong.

**Clothing and cast.**
- Krishna wears a yellow dhoti and a red-orange shawl. g1 wears an olive dhoti, a cream shawl and a cream headcloth. g2 wears a maroon wrap and a cream shawl. g3 wears a cream dhoti with a maroon edge.
- Bare upper torsos are ordinary dress.
- Horripilation (gooseflesh) is rendered as small light speckles on the gopas' shoulders and arms (e.g. g2's upper arm ≈(540–620, 380–480)). It reads as intended and is not a texture artifact.
- The cast is Krishna and 3 gopas, as planned. No duplicates.

**Text, signature or watermark.** None, in any corner, the foliage, the grass or the rock. The reference's lower-left signature is not carried over.

**Scene and reference fidelity.**
- The disclosed mismatch is present: reference 009.jpg is a pastoral cow-and-calf scene without the gopas' prostration or praise. The candidate correctly follows the canonical scene.
- Must-show items are all present: wonder (upturned joyful faces), bodily horripilation (speckles), bliss, prostration at Krishna's feet (g3), and praise (anjali, open mouths).

**Character contracts.**
- **Krishna:** a plain forehead (as the plan requires), a single upright feather, curly hair, youthful, a yellow dhoti and a red-orange shawl. Skin B−R:

  | Patch | Box | B−R |
  |---|---|---|
  | face | 1230,200–1290,240 | 100 |
  | forearm | 1240,560–1270,600 | 96 |
  | shin | 1100,780–1140,820 | 76 |

  All are ≥ 40. Two attempted chest patches landed on the shawl and are excluded.
- **Observation, band colour:** Krishna's headband is pale cream, not the "simple low gold band" (painted ochre) of the contract. It is a minor ornament-colour drift and not a disclosed-mark issue.
- **Gopas, metric deviation:**

  | Patch | Box | Median RGB | R−B |
  |---|---|---|---|
  | g1 face | 270,240–310,280 | (191,118,59) | 131 |
  | g1 upper arm | 180,420–230,480 | (192,123,67) | 125 |
  | g2 face | 600,240–640,270 | (187,117,59) | 127 |
  | g2 upper arm | 540,400–600,460 | (191,123,66) | 125 |
  | g3 back | 600,700–680,760 | (188,118,61) | 126 |
  | g3 face | 760,760–800,800 | (186,112,55) | 129 |

  **All six patches exceed the plan's "below 120" metric, by 5–11.** In a native-scale crop (`.review-scratch/s9-skin-native.png`) the skin reads as a warm tan or caramel brown, not orange. Under the brief's standard (a fail only if it visibly reads orange), this is a recorded metric deviation, not a fail.
- **Palette deviation:** the whole background behind the foliage is a saturated cobalt blue (probes (700,150) = (31,107,163) and (400,120) = (42,101,147)). Blue-dominant pixels (B−R ≥ 40) make up 19.0% of the image and 14.5% of the area left of Krishna, against 0.0% in the D001 S004 anchor.
  - The series palette says "deep indigo-blue is reserved for the established deity skin family" and asks reviewers to reject a dominant palette outside the core mineral family.
  - The plan's palette_arc lists earth ochre, maroon, cream, olive, contour brown and indigo-blue Krishna.
  - The blue ground competes with Krishna's skin. Palette drift is not among the brief's fail categories, so I record it as a contract deviation for the producer and do not give a fail on it alone.

**Verdict: pass.** I found no anatomy, digit, face, clothing, text, mark or cast defect at this checksum. Two measured contract deviations remain: the gopa skin R−B is 125–131, though it still reads brown, and the background uses the blue reserved for the deity. I recommend that the producer correct both in any further revision.

---

## Stanza 10: candidate-v007

- **File:** `artifacts/d054/s010/landscape/candidate-v007.png`
- **Verified SHA-256:** `27451de9a46cd8e881c6a80ea418a4b04548c78279c8d9c6df1f7c97f82a0aa9`
- **Review time (UTC):** first crop 2026-11-27T22:55:07Z, last crop 22:55:28Z (further zooms of the hands and dot); corner sweep 22:55:55Z.
- **Plan characters:** krishna-vrindavan-youth, bhattathiri, gopas.

**Anatomy.**
- Bhattathiri kneels at the centre (x≈370–850, y≈260–930). He has one head, two arms in anjali, and kneeling legs under the dhoti. Everything is connected.
- Krishna sits on a rock at the right (x≈950–1560, y≈50–910). He has one head, a raised right blessing hand, a left hand on his knee, one visible foot (the other leg is folded under the dhoti on the rock), and connected limbs.
- Two standing gopas at the left:
  - g1 wears a turban, a green wrap and a shoulder bag, with hands in anjali (x≈30–290, y≈60–830).
  - g2 has a top-knot and a moustache, a cream dhoti and a staff (x≈270–520, y≈30–820).
  - Normal limb counts. g2's staff is continuous from his hand to the ground and is held, not detached.

**Faces.**
- Bhattathiri (≈(550–730, 260–430)) is an older, lined, clean-shaven face in calm devotion.
- Krishna (≈(1140–1290, 160–290)) smiles with a gentle sidelong gaze toward Bhattathiri.
- g1 is serene. g2 is smiling, with a moustache.
- All distinct, with no malformation.

**Hands.**
- Krishna's raised blessing hand (≈(990–1080, 290–400)): thumb + 4 fingers = 5. "Fingers clear", as the plan asks.
- Krishna's hand on his knee (≈(1190–1300, 580–680)): 4 fingers visible, thumb on the far side (natural).
- Bhattathiri's anjali hands (≈(680–760, 420–540)): pressed palms, 4 fingertips plus the thumb edge. Correct.
- g1's anjali hands (≈(170–240, 190–290)): correct.
- g2's hand gripping the staff (≈(340–410, 260–320)): 4 curled fingers + thumb. Correct.
- g2's hanging left hand (≈(455–520, 470–550)) is partly behind his dhoti. The thumb and fingers that are visible are correct.

**Feet.**
- Krishna's visible foot (≈(930–1080, 800–910)): 5 toes.
- g1's two feet (≈(70–260, 730–850)): about 5 toes each in a three-quarter view.
- g2's feet (≈(290–420, 740–820)): toes visible, correct.

**Clothing and cast.**
- Bhattathiri wears a cream Kerala dhoti with a maroon border stripe, a sacred thread over his left shoulder (≈(600–640, 410–520)) and rudraksha-style prayer beads. His bare upper torso is ordinary dress for him.
- Krishna wears a yellow dhoti and a red-orange shawl.
- The gopas wear simple cowherd dress. g1's shoulder bag is a plain cowherd prop.
- The cast is Bhattathiri, Krishna and two gopas, exactly as the plan's composition says. No duplicates.

**Text, signature or watermark.** None, in the corners, sky, river, foliage or grass.

**Scene and reference fidelity.**
- The disclosed mismatch is present: reference 010.jpg is a broad cattle procession, not Bhattathiri's prayer. The candidate follows the canonical closing scene.
- Present as the plan asks:
  - Bhattathiri kneels before youthful Krishna in prayer.
  - Two recovered cowherds stand nearby.
  - Krishna gives a gentle sidelong gaze with an open blessing hand.
  - No halo or beams.

**Character contracts.**
- **Bhattathiri:** matches the contract. An older, clean-shaven, lined face; horizontal sacred-ash stripes with a central forehead mark (both disclosed by the contract); a shaved scalp with a small dark tuft (≈(600–640, 260–280)); sacred thread, modest beads, a cream dhoti with a narrow maroon edge; slender build. No crown, beard or ornate jewellery. Skin R−B:

  | Patch | Box | R−B |
  |---|---|---|
  | chest | 560,500–620,560 | 121 |
  | cheek | 680,330–710,360 | 116 |
  | scalp | 580,280–620,310 | 120 |

  The values sit at the threshold, and the skin reads as natural warm brown.
- **Krishna:** a plain forehead, a low gold band, a single upright feather, curly hair, youthful. Skin B−R:

  | Patch | Box | B−R |
  |---|---|---|
  | face | 1150,200–1200,250 | 126 |
  | chest | 1180,330–1230,380 | 127 |
  | foot | 980,840–1030,870 | 126 |

  All are ≥ 40. **Observation:** the skin (median RGB about (53,94,180)) reads as a bright royal blue rather than the darker indigo seen in the other candidates.
- **Gopas:** distinct faces, no royal costume. Skin R−B:

  | Patch | Box | R−B |
  |---|---|---|
  | g1 cheek | 190,150–215,175 | 116 |
  | g1 shin | 110,720–150,780 | 109 |
  | g2 chest | 330,230–380,280 | 118 |
  | g2 shin | 330,700–370,760 | 118 |

  All are below 120, and the skin reads as warm brown.
- **Undisclosed mark:** g1, the turbaned cowherd, has a **round dark-brown dot in the middle of his forehead** at ≈(182–194, 97–109), about 10–12 px across, below the turban and above the brows. It is clearly visible at native size (corner strip `.review-scratch/s010-corners.png`, top-left tile) and at 600% (`.review-scratch/s10-gopadot.png`). The gopas contract describes face, skin, hair, build and clothing, and discloses no forehead mark or tilak. The plan discloses none for gopas.
- **Palette deviation, same kind as S9:** the sky is a flat saturated blue, and 23.8% of the image is blue-dominant, using the blue the series reserves for deity skin. I record this as a contract deviation for the producer.

**Verdict: needs-fix.**
- **Region:** g1's forehead, x≈182–194, y≈97–109.
- **Why a viewer would notice:** it is a distinct dark round mark on the face of one of the two standing cowherds in the upper left, and it reads immediately as a tilak or bindi. The brief lists a mark on a character that the plan or contract does not disclose as a needs-fix.
- **Also to correct in the same repair:** the blue sky palette.

---

## Recommendations

1. **S2:** regenerate Garuda as the contract's two-legged bird body with two wings, or as the traditional Garuda with a humanlike torso, two hands, two bird legs and two wings, as in the chapter's 001.jpg Garuda cue. Keep the cloth only in the humanlike-torso form. Saubhari can stay as he is.
2. **S7:** repair Krishna's feet to five toes each. If the gopas are regenerated, bring their skin R−B back under 120.
3. **S8:** repair Krishna's right hand (on the calf) to a thumb and four fingers. Consider muting the overall saturation, especially the brown cow, toward the D001 anchors.
4. **S9:** it passes as it stands. If it is revised for any reason, bring the gopa skin R−B under 120, replace the cobalt background with the mineral palette, and use an ochre-gold band.
5. **S10:** remove the forehead dot from the turbaned cowherd, or disclose it in the gopas contract if the captain wants it. Replace the deep-blue sky with the mineral palette.
6. **S6:** it passes as it stands.

The palette and skin-metric deviations in S7, S9 and S10 are measured departures from the plan's palette_arc and the R−B < 120 rule. I did not fail any image on them alone, because the brief's fail list requires skin that visibly reads orange and does not include palette drift. The producer should still treat them as plan non-conformances.

These verdicts are independent review evidence bound to the exact checksums above. They confer no artwork approval: all D054 artwork stays unapproved pending the captain.

## Safety and scope attestation

- **Read-only inputs.** I wrote nothing under slot 7, `artifacts/`, `intake/`, any approval manifest or any project file. All scratch output is under `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/.review-scratch/` (my disposable worktree). `git status` in my worktree shows only `?? .review-scratch/`.
- **No image generation or editing.**
- **Not read**, as the brief requires: anything under `artifacts/d054/reviews`, `art/reviews`, `visual-reviews.json`, producer review files or notes, other review reports under `data/`, or the producing task's status and evidence files.
- **Captain-call inventory: empty.** No finding raises a question that belongs to the captain. Every item above is a producer fix against an existing contract. The pending captain art approval is the standing state, not a decision this review raises.

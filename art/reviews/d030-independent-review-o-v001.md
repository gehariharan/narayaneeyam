# D030 S006 landscape v017: independent visual review (task d030-review-o)

Reviewer: crewmate worker for task `d030-review-o`. This is an independent, read-only visual review. It is not a producer observation, and it confers **no artwork approval**: all D030 artwork stays unapproved.

- Review performed (UTC): 2026-11-27T19:58Z to 2026-11-27T20:01Z (hash verification at 2026-11-27T19:58:07Z; the inspection below followed it).
- Scope: one candidate, `artifacts/d030/s006/landscape/candidate-v017.png` (dasakam 30, stanza 6, landscape, version v017).
- **Verdict: NEEDS-FIX.** The main reason is that Brahma shows five hands where the contract allows exactly four. Details below.
- This verdict holds only for SHA-256 `8d08c99a3b206d772c3c84d08a89cb811b6b69caf6a9bbac2dcce0d8489968dd`.

## 1. Hash verification (mechanical)

I generated a `sha256sum -c` list programmatically from the brief's path/hash pairs: `awk '{print $2"  "$1}' brief.txt > check.sha256; sha256sum -c check.sha256`. The scratch copy is in the disposable worktree at `.review-scratch/`. Every line returned `OK`. No mismatch was found, so the review proceeded.

### Contract files actually read (verified SHA-256)

| File | SHA-256 (verified, matches expected) |
|---|---|
| `…/review-contract-n/art/plans/d030.json` (FINAL plan, frozen) | `a09c8cfeea11a0e75df67ee527b8d5c08fa7da5e9600c57e73708e94a58f6041` |
| `…/review-contract-n/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `…/characters/d031-vamana/character.json` | `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229` |
| `…/characters/d031-mahabali/character.json` | `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9` |
| `…/characters/d031-shukracharya/character.json` | `c493d4cfa5d61cb35e6cf5b318819d563f98825038ba456fd5a47fb37658b3c8` |
| `…/characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |
| `…/characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `…/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `…/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `…/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `…/characters/d030-aditi/character.json` | `94c8ed8be0a948ad2b58b754f06fe0f48ed06c9b39c8a75908b676cdb2cdc92a` |
| `…/characters/d030-kashyapa/character.json` | `3a4bfe53bece23fc17b2a86fde28ce6e0923c61940b657f240fad89b556d281f` |
| `content/sources/d030/reference-map.json` (slot 1 checkout) | `623008011dbe4abf33efdfbbbe7772a5ce1b6a12fecbcf536a0aa66b8f66b79f` |
| `intake/D030/photo-captions.txt` (slot 1 checkout) | `613b928883790a1b301cb7a72d8ed810ea4dea11e6357e81d67eeb08632eb21f` |

`…/review-contract-n/` means `/home/gehariharan/firstmate-narayaneeyam-mate/data/d030-s009-revision/review-contract-n/`, and `…/characters/` is `art/bible/characters/` under it.

### Images

| Image | Verified SHA-256 | Size |
|---|---|---|
| `artifacts/d030/s006/landscape/candidate-v017.png` | `8d08c99a3b206d772c3c84d08a89cb811b6b69caf6a9bbac2dcce0d8489968dd` | 1672×941 PNG |
| `intake/D030/007.jpg` (reference) | `8dd284dad7b70fe36b04e69d20890e86c2debbc3c25b9a47747f0290eb27e820` | 602×745 JPEG |

## 2. Stanza mapping and the contract applied

- Mapping: plan stanza `n: 6` lists `reference_paths: ["intake/D030/007.jpg"]` and `caption_anchor: photo-captions.txt#6`. In `reference-map.json`, stanza 6 also maps to 007.jpg. Chapter content `content/daskams/d030.json` stanza 6 is *tāvat prajāpatimukhair upanīya mauñjī-daṇḍājinākṣavalayādibhir arcyamānaḥ … kṛtāgnikāryas tvaṁ prāsthithā baligṛhaṁ prakṛtāśvamedham*. In plain terms: upanayana by the Prajāpatis, with the muñja girdle, staff, deer skin and rosary; fire rite; then departure for Bali's Aśvamedha.
- Plan cast: `d030-kashyapa`, `d031-vamana`, `brahma`, `sages`.
- Key plan requirements:
  - Brahma has exactly 4 attached arms and hands.
  - Brahma has 4 heads, with 3 front-visible faces.
  - Brahma's three crowns are identical, modest, low and matte ochre, with no tiers or gems.
  - Brahma wears one bead strand beside the sacred thread.
  - The scene shows Kashyapa plus one or two **distinct** elders at a small fire.
  - Vamana turns toward the road, with each implement connected.
  - Ordinary human skin has a skin-only R−B median **below 100** (must_show); the avoid list caps it at below 120.
  - Divine blue is "deep indigo-blue", with no text, gloss or border.
- Disclosed deviation: the plan's `reference_guidance` and the map record that photo 007 does not depict the stanza 6 upanayana or departure, and tell the producer not to reproduce it. **That disclosed deviation is present**: the candidate does not follow photo 007's composition. I judged the image on every other area.
  - Reviewer note for the editorial lane, not a verdict input: looking at 007.jpg myself, I read it as the investiture of a child Vamana rather than Bali's foot-washing. The child stands on a mat in a spotted deer-skin garment and rudraksha strand. A seated woman, presumably Aditi, holds a water vessel. A bearded man with a staff, presumably Kashyapa, touches the child. An umbrella is held overhead, with devas and sages around. The map's `observed_reference` ("Bali seated while Vamana's feet are washed") may therefore misdescribe this photo. This is a factual question for the producing or editorial lane. It does not change the verdict below.

## 3. Inspection method

I viewed the full image at native 1672×941. I cropped focused views with `magick <candidate> -crop WxH+X+Y +repage -filter point -resize N% <scratch>/<name>.png`, writing only into `…/narayaneeyam-9a4f64/11/narayaneeyam/.review-scratch/` (checked not under `artifacts/` or `intake/`; inputs were never modified). The crops covered:

- Brahma: heads, torso and arms, the right-side arm junction at 400–600%, and the book.
- Each sage: face, hands and feet.
- Vamana: head, staff hand, rosary hand, body and feet.
- Brahma's foot, the umbrella, the pavilion and horse, the rug border, the fire altar, the pots, all four corners and the bottom ground strip.

I sampled skin with a small script that parses `magick … txt:-` and takes medians. Patch positions were confirmed on an overlay (`.review-scratch/patch-map.png`).

## 4. Findings: D030 S006 landscape v017 (`8d08c99a…68dd`)

### Anatomy (deity contract): DEFECT

- **Brahma has five hands; the contract requires exactly four.**
  - Viewer-left side, two hands: a book hand at about (290–330, 280–330) and a kamandalu hand at about (480–520, 480–520). These read as the conventional raised and lower pair.
  - Viewer-right side, **three** hands:
    1. a raised lotus hand at about (690–730, 280–330);
    2. a lower hand gripping the white thread at about (640–700, 410–470);
    3. a separate outstretched arm whose hand holds the same thread at about (770–850, 335–390).
  - At 600% (`lower-hand-wrist.png`, region 600–740 × 380–510), the descending right upper arm flows straight into the lower thread hand. The lotus forearm and the outstretched forearm converge on one vertex at about (680, 417), directly above that hand, with no separate upper arm or shoulder shown for the outstretched limb.
  - Why a viewer would notice: counting Brahma's hands in the full image gives 2 + 3. Two right hands visibly hold the same thread strand, side by side.
  - This breaks `brahma.anatomy_contract` (`arms: 4, hands: 4`, "No duplicated features or extra limbs"), the plan's must_show ("exactly four visibly attached arms and hands"), and the plan's avoid list ("No extra/missing limbs").
- Brahma's heads: correct. There are three front-visible faces (centre frontal, two profiles) with no fourth face shown, consistent with a hidden rear head. The faces are distinct, with no merged or duplicated features.
- Vamana: one face, two attached arms, two legs; natural youthful proportions; no anatomy errors seen.
- Sages: each has one face, two attached arms and natural proportions.
  - Left sage, near arm: holds the coiled girdle from below.
  - Left sage, far arm: passes through the coil, with its hand hidden behind it. This reads as plausible occlusion, not a missing hand.
- No creature anatomy problems. The horse in the background pavilion is anatomically ordinary, with its legs partly behind the fence.

### Faces: DEFECT (duplicated people)

- **The two kneeling elders are near-identical mirror images.**
  - Left elder: about (90–260, 250–420).
  - Right elder: about (1470–1640, 280–450).
  - They share the same face shape, the same black wavy hair with a bead-wrapped topknot, the same black beard and moustache, the same yellow disc earring, the same cream upper cloth and maroon sash, and the same kneeling pose, mirrored.
  - A viewer sees a cloned pair flanking the scene, not "Kashyapa and one or two **distinct** elders" (plan composition).
  - The `sages` contract asks for distinct sages with "varied grey beards or topknots". Neither elder is grey-haired or mature-elderly in appearance.
  - Nothing distinguishes either one as Kashyapa. `d030-kashyapa` calls for a "mature ascetic with restrained grey hair or topknot". The topknot is present, but Kashyapa as father and officiant is not identifiable.
- Brahma's three faces and Vamana's face are well formed, with no malformation.

### Hands and feet (digit counts)

- Vamana:
  - Staff hand (900–1060 × 350–500) is a closed fist with four finger segments and a curled thumb: correct.
  - Rosary hand (1120–1260 × 400–570) is a fist with four fingers and the thumb over the beads: correct.
  - Feet (960–1180 × 800–910): **5 toes on each foot**, correct.
- Brahma:
  - Visible foot on the mat (500–730 × 610–740) shows its toes partly under the dhoti; the visible toes are correctly formed.
  - Book hand: four fingers plus thumb.
  - Kamandalu hand: fingers curled over the handle, correct.
  - Lotus hand: fist around the stem, correct.
  - Both thread hands are individually well formed. The defect is their number, above.
- Right elder's hands on the deer skin (1240–1470 × 440–640): left hand has four fingers plus a hidden thumb, right hand has thumb plus fingers. Correct.
- Left elder's hand under the coil: curled fingers, correct.
- Both elders' feet: one bare foot each is visible behind the cloth at bottom left (20–80, 800–860) and bottom right (1620–1672, 800–860). Both are small, correctly shaped, with toes resolvable as a row and no error. Nothing is cut by the frame in a way that matters.

### Clothing and cast

- Clothing is modest throughout: dhotis, Brahma's saffron uttarīya, and cream upper cloths on the elders. Bare male torsos in ordinary traditional dress are an observation only.
- Vamana wears a cream dhoti with a rope (muñja) girdle and the sacred thread. The `d031-vamana` contract asks for "simple ochre or saffron brahmachari dress", so cream rather than ochre or saffron is a minor contract-colour departure.
- Cast present: Brahma, Vamana, and two elders. Brahma's ornament against the plan:
  - Crowns: three plain, low, matte ochre caps, identical, with no tiers, gems or medallions. Conforms.
  - Necklaces: one thin brown bead strand beside a white sacred thread, with no layered necklaces. Conforms.
  - Arms and wrists: no armlets or stacked wrist ornaments. Conforms.
  - Ears: disc earrings, within "restrained sacred ornaments".
- **Undisclosed marks:**
  - All three of Brahma's faces carry a Vaishnava ūrdhva-puṇḍra forehead mark: a white U, with a red dot on the centre face.
  - Vamana carries a white U ūrdhva-puṇḍra with a red-orange centre line.
  - Neither the plan nor the `brahma` or `d031-vamana` contracts mention a forehead mark. A Vaishnava namam on Brahma is not standard Brahma iconography, so under the brief's rule this is an undisclosed mark on a character. For Vamana it is common Vaishnava iconography, but still not disclosed.
  - Fix direction: either disclose the mark in the plan or remove it.
- Vamana's thin ochre wrist ring on the rosary hand is minor painted ochre ornament, within the contract's style line.

### Text, signature and watermark artifacts: DEFECT (minor)

- The front border of the ritual rug carries a band of **letter-like glyphs**. Under 500% zoom (`rug-glyphs-left.png`, `rug-glyphs-right.png`) they read as pseudo-script: shapes like "ɣ ∪ ∞ ☥ b ∪ ± o o o", then "b o b o" to the right of the fire. They are not a regular repeating ornament.
  - Location: about x 350–850, y 703–722, partly hidden by the fire.
  - The band is small at native size, but the irregular letter-like run is visible on the brightest foreground textile. The plan and series ban readable text, captions and similar artifacts. I count this as a text-like artifact to remove; it is secondary to the anatomy defect.
- The fire-altar bands use a regular wave-and-dot motif: ornament, not text.
- No text, signature or watermark in the four corners, the ground strip, grass tufts, foliage, the hut thatch, the pavilion flags, the book pages (blank) or the sky.

### Skin measurement (skin-only patches, median R−B)

Patches were confirmed on the overlay `patch-map.png`.

| Patch (x,y,w,h) | Median RGB | Median R−B |
|---|---|---|
| Left elder shoulder (110,470,50,40) | (185,118,81) | 104 |
| Left elder cheek (200,340,14,14) | (190,119,81) | 108 |
| Right elder chest (1480,480,30,40) | (184,117,80) | 104 |
| Right elder cheek (1495,358,14,14) | (190,121,83) | 107 |
| Brahma chest (440,395,50,35) | (222,135,99) | 123 |
| Brahma cheek (497,222,14,12) | (217,131,95) | 122 |
| Brahma forearm (375,400,14,30) | (220,133,97) | 121 |
| Vamana chest (1012,400,30,40) | (47,105,181) | −134 |
| Vamana shin (1065,700,20,40) | (45,104,180) | −135 |

- **Elders (104–108):** below the brief's guide of about 120 and the plan's avoid cap of 120, and visually a natural warm brown, not orange. They **exceed** the plan's stricter must_show figure ("below 100") by 4–8 points. That is a measured non-conformance with the plan's number, not a visible colour defect.
- **Brahma (121–123):** a light rose-peach, consistent with the contract's "warm muted rose-ochre" deity skin. It does not read as orange. As a deity with his own skin contract, he is not held to the human brown figure.
- **Vamana's blue (47,105,181):** HLS hue about 214°, saturation 0.59, lightness 0.45. That is a bright, saturated cobalt or royal blue, not the "deep indigo-blue" or "matte indigo-blue divinity" named in the plan's avoid list and `palette_arc`.
  - For comparison, the plan's style anchor `artifacts/d030/references/style-d001-s004.png` has deity cheek median RGB (57,72,71): a dark, muted slate blue.
  - The candidate's blue is matte, not glossy or neon. A viewer would still see a vivid bright blue that is clearly lighter and more saturated than the series' deity blue.
  - I record this as a visible colour departure from the plan, to be corrected in the next revision. It is secondary.

### Scene and reference fidelity

- Present:
  - The sacred fire on a stepped altar, with a ghee pot and a bowl of rice or grain beside it.
  - The upanayana implements, each held and connected:
    - the muñja girdle, coiled with an ochre clasp and tassel, held by the left elder, plus Vamana's worn rope girdle;
    - the sacred thread, worn by Vamana and offered as a white strand by Brahma;
    - the staff, held by Vamana;
    - the spotted deer skin, offered by the right elder;
    - the rudraksha rosary, held by Vamana.
  - A hermitage hut and tree.
  - A winding road leading to a flagged pavilion with a caparisoned white horse, a legible cue for Bali's Aśvamedha.
- Departure is only implied. Vamana stands frontally, with his head turned left toward Brahma, not "turned toward the road" as the plan composition asks. The road behind him carries the departure cue. This is an observation.
- An umbrella lies on the ground beside the fire, connected to its handle. It is not among stanza 6's listed implements (the umbrella belongs to stanza 7). It is an extra, harmless prop: observation.
- Brahma's scripture is a bound codex-style book, not the contract's palm-leaf scripture. The pages are blank. This is a minor iconographic departure: observation.
- Against photo 007: the disclosed mismatch is present, and the candidate correctly does not copy 007's composition. The staff, deer skin and umbrella overlap with 007 only as story context.

### Style and series contract

- Full-bleed, with no outer border.
- Flat matte colour fields with dark contours, and no cinematic rays.
- Palette in the ochre, cream, olive and maroon family, apart from Vamana's bright blue noted above.
- The brass pots (left foreground and Brahma's kamandalu) show small white specular highlights: a slight gloss tendency, an observation only.

## 5. Verdict

**D030 S006 landscape candidate v017, SHA-256 `8d08c99a3b206d772c3c84d08a89cb811b6b69caf6a9bbac2dcce0d8489968dd`: NEEDS-FIX.**

Required fixes, in priority order:

1. **Brahma's hands:** five hands, three on the viewer-right side, at about (640–850, 280–470). Brahma must have exactly four attached arms and hands. The two thread-holding right hands, and the forearm vertex at about (680, 417) with no upper arm, are the error. A viewer counting Brahma's hands notices it.
2. **Duplicated elders:** the left elder at (90–260, 250–420) and the right elder at (1470–1640, 280–450) are mirrored clones. Make them distinct, and make Kashyapa identifiable as the mature officiating father; the contracts call for grey or varied beards on mature or elderly sages.
3. **Pseudo-text glyph band** on the rug's front border at about (350–850, 703–722). Replace it with a non-letter ornament or a plain border.
4. **Undisclosed forehead marks** on Brahma's three faces and on Vamana: disclose them in the plan or remove them.

Secondary corrections for the same revision:

- Bring Vamana's blue toward the plan's deep indigo, from a measured (47,105,181).
- Bring the elders' skin R−B from 104–108 under the plan's must_show figure of 100. They already read as brown.
- Optionally:
  - dress Vamana in ochre or saffron per his contract;
  - turn Vamana toward the road;
  - use palm-leaf scripture for Brahma.

No artwork approval is inferred or conferred. The candidate stays unapproved.

## 6. Captain-call inventory

Empty. This review raises no decision that belongs to the captain. The pending captain art approval is the standing state, not a decision raised here. The photo 007 description question in section 2 is a factual editorial check for the producing lane, not a captain call. Attested with `fm-captain-hold.sh complete d030-review-o --none`; the result is recorded in section 7.

## 7. Completion attestation

`FM_HOME=/home/gehariharan/firstmate-narayaneeyam-mate bash bin/fm-captain-hold.sh complete d030-review-o --none` was run at about 2026-11-27T20:03Z. Output: `complete: d030-review-o captain-call inventory reviewed`, exit 0.

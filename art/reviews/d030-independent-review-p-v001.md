# Independent visual review: Dasakam 30, stanza 6, landscape candidate v019

Reviewer: independent crewmate task `d030-review-p` (read-only). This review does not approve the artwork. All artwork stays unapproved, and this report does not reuse producer observations.

**Verdict: NEEDS-FIX.** It applies only to `candidate-v019.png`, SHA-256 `48e11f8dc0fa68fd4a4d1991a615ae80581e42c0e23c3e38f28d7c771c9ac044`.

The main defect is that **Brahma has five arms and five hands, but his contract requires exactly four.**

## 1. Integrity checks (done first)

I did not retype any hash. I extracted the path and hash pairs from the launch brief with `grep` and `sed` into two lists, then checked them with `sha256sum -c`. All 16 matched (`OK`), and nothing failed.

### Contract files I read, with their actual SHA-256

Every file below matched its expected value.

| File | SHA-256 |
|---|---|
| `…/review-contract-n/art/plans/d030.json` (final plan) | `a09c8cfeea11a0e75df67ee527b8d5c08fa7da5e9600c57e73708e94a58f6041` |
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

The `…` prefix stands for `/home/gehariharan/firstmate-narayaneeyam-mate/data/d030-s009-revision/review-contract-n/art/bible`; the plan sits under `…/review-contract-n/art/plans/`.

The stanza 6 plan entry casts `d030-kashyapa`, `d031-vamana`, `brahma` and `sages`. I read those four contracts in full. For the other contracts I only checked the hash, because none of their characters appears in this stanza.

### Source files in slot 1 (read only)

| File | SHA-256 |
|---|---|
| `content/sources/d030/reference-map.json` | `623008011dbe4abf33efdfbbbe7772a5ce1b6a12fecbcf536a0aa66b8f66b79f` (matches) |
| `intake/D030/photo-captions.txt` | `613b928883790a1b301cb7a72d8ed810ea4dea11e6357e81d67eeb08632eb21f` (matches) |
| `intake/D030/007.jpg` (reference photo) | `8dd284dad7b70fe36b04e69d20890e86c2debbc3c25b9a47747f0290eb27e820` (matches; the OneDrive copy has the identical hash) |
| `content/daskams/d030.json` (chapter content; no expected value given) | `d6d9bcf80f295c259e706d18d984fc42fb5c2130c4648f7e22453a387b015671` (recorded) |

## 2. Candidate

- **Stanza:** 6 (concept `d030-s006`)
- **Version:** v019, landscape
- **File:** `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/1/narayaneeyam/artifacts/d030/s006/landscape/candidate-v019.png`
- **Verified SHA-256:** `48e11f8dc0fa68fd4a4d1991a615ae80581e42c0e23c3e38f28d7c771c9ac044`
- **Format:** PNG, 1672 × 941 pixels, RGB. That is a 1.777 ratio, which is 16:9.
- **Review time (real UTC):** 2026-11-27T20:51:14Z to 2026-11-27T20:53:46Z, taken from `date -u` before and after the visual inspection.
- **Method:** I viewed the full image at native resolution. I cut 25+ crops into my own scratch space (`<worktree slot 9>/.review-scratch/`, never under `artifacts/` or `intake/`), enlarged at 200–800% with ImageMagick. I measured skin with per-pixel medians of red minus blue (R−B) on skin-only patches and checked each patch on a drawn overlay. No input file was modified.

### Mapping to the stanza and reference photo

- **Stanza text:** the canonical Sanskrit 30-6 says the Prajapatis led the upanayana and honoured him with the muñja girdle, staff, deer skin and rosary. After the fire rite, the Lord departed for Bali's house, where the Ashvamedha was under way. Caption #6 says the same, naming Father Kashyapa.
- **Reference photo:** the plan maps `intake/D030/007.jpg` to this stanza. The reference map and the plan both disclose a photo/caption mismatch: the plan says photo 007 shows "Bali's later foot-washing welcome, not upanayana or departure. Do not reproduce the mismatch."
- **Is the disclosed deviation present? Yes.** The candidate shows the canonical initiation scene and does not copy photo 007. Following the plan, I judged it against the canonical text and the plan entry, not the photo.

## 3. Findings for this image

Coordinates are pixel coordinates (x, y) in the 1672 × 941 candidate.

### 3.1 Character contract: Brahma has five arms (DEFECT, main reason for the verdict)

The Brahma contract requires exactly four arms and four hands ("no more or fewer than four heads or arms"; "no extra hands"). The plan repeats it: "Brahma has exactly four visibly attached arms and hands."

I followed each arm to its hand in crops of the region about (320–880, 200–530) and found **five distinct hands**:

1. **Book:** upper arm on the viewer's left, hand at about (300–410, 220–330), holding an open book.
2. **Water pot:** lower arm on the viewer's left. The forearm runs across the belly to a hand at about (460–580, 430–550) gripping the handle of the brass pot.
3. **Lotus:** upper arm on the viewer's right, hand at about (665–775, 250–370) holding a lotus by the stem.
4. **Extended thread hand:** a second arm on the viewer's right, reaching out level, hand at about (760–890, 310–420), holding the sacred thread from above.
5. **Close thread hand:** a third arm on the viewer's right, bent at the side, hand at about (640–760, 400–510), holding the lower strands of the same thread.

So the viewer's left side has two arms and the viewer's right side has three. Each hand has fingers and its own wrist, so none of them is a fold of cloth or a doubled outline.

Brahma is the central figure, so a viewer counting his arms will see five. Under the brief's standard this is an anatomy and contract defect, and it alone makes the image needs-fix.

Brahma's other contract points:

- **Heads:** three faces are visible from the front, with ears and beards drawn separately, and no fourth face is visible, as required. The faces are not merged.
- **Crowns:** all three are the same low plain ochre band, with no tiers or medallions. The centre crown has a tiny yellow stud of about 4 pixels at about (526, 173) that the side crowns lack. It cannot be seen at full size, so I record it as an observation only.
- **Ornaments:** he wears one fine gold chain beside the white sacred thread and round ear studs. He has no layered necklaces, armlets or wrist ornaments, which matches the plan.

### 3.2 Undisclosed forehead marks (DEFECT under the brief's standard)

Brahma's three faces each carry a white vertical U-shaped Vaishnava mark (urdhva pundra). The centre face also has a red dot, at about (526, 202). The left and right faces have the mark at about (420, 200) and (625, 200).

Neither the Brahma contract nor the plan mentions any forehead mark, and this Vaishnava sign is not standard Brahma iconography. The marks are white on rose-ochre skin, so they are easy to see at full size.

Vamana also carries a white U-shaped mark with an orange centre line at about (1018–1036, 230–250). His contract forbids "Krishna-only marks" but does not mention this mark either. On a brahmachari it is ordinary Vaishnava iconography, so for Vamana I record it as an observation. For Brahma, I count it as an undisclosed mark that a viewer would notice.

### 3.3 Cast: the two side sages look like duplicates, and Kashyapa is not identifiable (DEFECT)

The plan's composition calls for "Kashyapa and one or two distinct elders". The Kashyapa contract describes "a mature ascetic with restrained grey hair or topknot". The sages contract asks for "distinct mature/elderly sages … varied grey beards or topknots".

The two kneeling figures, left at about (20–360, 250–900) and right at about (1290–1672, 280–870), are near mirror copies of each other:

- the same profile face;
- the same full **black** beard and dark brown hair;
- the same topknot wrapped with a row of brown beads;
- the same round gold ear stud;
- the same cream cloth with a maroon sash;
- the same kneeling pose, mirrored.

Neither has grey hair and neither reads as an elder, so neither can be identified as the grey-haired Kashyapa. Side by side, a viewer sees "twins" facing each other across the scene. That is the duplicated-person pattern the brief asks reviewers to catch, and it also breaks the "distinct, varied grey" sage contract.

### 3.4 Anatomy and digits (other figures)

- **Vamana:** one face, two arms and two legs, all attached. The right hand grips the staff at about (920–965, 370–420) with four fingers wrapped and the thumb over them. The left hand holds the rosary at about (1150–1200, 430–480) with four fingers and the thumb partly hidden, which is correct. Each foot at about (980–1125, 800–860) has **5 toes**, counted on both feet.
- **Left sage:** two hands under and over the muñja coil at about (250–400, 470–560). The near hand shows four fingers and a thumb; the far hand is partly hidden behind the coil. One foot is visible at about (10–60, 830–870), its sole turned with small toes; nothing is wrong at that scale.
- **Right sage:** two hands holding the deer skin. The upper hand is at about (1265–1300, 455–520) with four fingers over the edge. The lower hand is at about (1355–1420, 515–575) with four fingers and a thumb. The foot is at about (1620–1670, 830–870), its sole turned; nothing is wrong at that scale.
- **Brahma's visible foot:** about (575–660, 640–690), with the sole up and toes curled. I counted 5 toe tips, and the foot looks correct. Apart from the extra arm (3.1), I saw no fused limbs and no merged faces.
- **Horse (Ashvamedha horse, background):** at about (1330–1460, 150–265). It has four legs with hooves, one head and one tail, and is correct.

### 3.5 Faces

- **Brahma:** three distinct faces, calm, not merged.
- **Vamana:** a youthful, calm, legible face.
- **Sages:** clean profiles, but duplicates of each other (see 3.3).

No face is malformed or cut off by the frame.

### 3.6 Clothing

Clothing is modest and traditional throughout:

- Brahma: bare upper torso with an orange uttariya (upper cloth) and a cream dhoti.
- Sages: cream cloth over one shoulder.
- Vamana: bare chest with the sacred thread and a cream dhoti tied with a rope girdle.

These are observations, not defects. There is no sexualised framing.

### 3.7 Text, signature and watermark

I checked all four corners, the ground, the grass clumps, the hut, the pavilion and the props. There is no readable text, signature or watermark.

The border of Brahma's mat, at about (340–600, 705–725) and onward, carries a ~10-pixel-high band of small, irregular white glyph-like marks (shapes like ψ, ∞, o, b). At 400% they look a little like pseudo-script. At full size they read as a decorative dotted band and are not legible, so I record them as an observation, not a defect. By contrast, the fire altar's border at about (580–840, 790–860) is a regular wave-and-dot motif.

### 3.8 Scene and plan fidelity

- **Initiation:** present. There is a small sacred fire on a stepped altar at about (570–870, 640–860), with Brahma and two sages around it.
- **The four listed implements:**
  - muñja girdle: the coil held by the left sage;
  - staff: held by Vamana and connected to his hand;
  - deer skin: offered by the right sage;
  - rosary: held by Vamana.

  The sacred thread is on Vamana, over his left shoulder to his waist, and a second length is offered by Brahma. Every implement is connected to a hand or worn. A closed umbrella lies loose on the ground at about (745–965, 520–720). The umbrella is not a stanza 6 implement, so this is an observation.
- **Departure:** shown through a winding path leading to a flagged pavilion with the sacrificial horse, upper right. The plan asks that "Vamana turns toward the road". In the image he stands facing the viewer and only his gaze is slightly to the side. This is a weaker reading of departure, which I record as an observation.
- **Rendering:** flat line-and-fill matte rendering with no gloss, metallic shine, beams, rays or outer border. It is full-bleed. The palette is mostly cream, ochre, olive and terracotta, consistent with the series.

### 3.9 Skin colour (measured)

Skin-only patches, median R−B per patch:

| Figure / patch (x, y, w × h) | median RGB | median R−B |
|---|---|---|
| Left sage, back (95,480 40×50) | (191,126,90) | **101** |
| Left sage, cheek (192,340 22×18) | (197,128,91) | **106** |
| Left sage, forearm (250,560 30×14) | (190,124,90) | **100** |
| Right sage, cheek (1508,362 25×20) | (199,128,94) | **105** |
| Right sage, shoulder (1545,430 25×30) | (195,126,90) | **105** |
| Right sage, forearm (1440,565 30×18) | (193,124,89) | **103** |
| Brahma, chest (430,340 40×40) | (227,138,105) | **121** |
| Brahma, belly (470,420 40×30) | (225,138,105) | **120** |
| Brahma, upper arm (385,380 20×40) | (222,135,103) | **119** |
| Vamana, chest (985,330 40×40) | (53,116,196) | −143 |
| Vamana, shin (1010,700 20×40) | (52,112,191) | −141 |

I discarded three patches after checking the overlay because they caught a tilak, cloth or a lotus stem.

- **Ordinary human figures (the two sages):** medians of 100–106. That is below the general guide of 120 and natural warm brown to the eye, not orange. However, the plan entry's `must_show` sets a stricter limit for ordinary humans: "median red-minus-blue below 100". Every sage patch is at or slightly above 100. I record this as a measured miss of the plan's own stricter limit. It is not a visible orange cast, so I did not make it a reason for the verdict.
- **Brahma:** 119–121, a peach/rose-ochre tone. His contract asks for "warm muted rose-ochre", so he is not held to the human brown rule. He reads warm salmon-rose rather than orange, at the edge of the 120 guide. Observation.
- **Vamana:** RGB about (53,116,196), a medium, fairly saturated cobalt/royal blue. The plan says "divine blue remains deep indigo-blue". This blue is noticeably lighter and brighter than deep indigo, though not neon and not teal or purple. I record it as a **palette deviation from the plan's wording**. It is secondary, and I did not make it a reason for the verdict, but the regeneration should also correct it.

### 3.10 Other ornament observations

- Vamana wears round gold ear studs and thin toe rings on both big toes, at about (1020, 850) and (1078, 850). These are ordinary and small.
- The muñja coil has small gold clasps and a tassel.

None of these is palace-like regalia.

## 4. Verdict

**NEEDS-FIX**, for `candidate-v019.png` SHA-256 `48e11f8dc0fa68fd4a4d1991a615ae80581e42c0e23c3e38f28d7c771c9ac044` only.

Defects a viewer of the full image would notice:

1. **Brahma has five arms and hands** (3.1). The contract and plan require exactly four. The extra arms are on the viewer's right, at about (640–890, 250–510), where there are three hands: lotus, extended thread hand and close thread hand.
2. **Brahma carries undisclosed Vaishnava forehead marks** on all three faces (3.2), at about (415–630, 185–215).
3. **The two side sages are near mirror duplicates**, with black hair and beards, not distinct grey-haired elders. So the required grey-haired Kashyapa cannot be identified (3.3). Regions: about (20–360, 250–900) and (1290–1672, 280–870).

Secondary items, to correct in the same regeneration but not reasons for the verdict on their own:

- sage skin R−B of 100–106, against the plan's stricter limit of under 100;
- Vamana's blue is lighter than deep indigo;
- Vamana faces the viewer rather than turning toward the road.

## 5. Recommendation

Regenerate stanza 6 as a new version, without cropping or overwriting v019. The new version needs:

- exactly two arms on each side of Brahma, with four hands holding distinct attributes;
- no forehead marks on Brahma, unless the plan is amended to disclose them;
- one clearly grey-haired mature Kashyapa and one or two **visibly different** elders;
- sage skin brought slightly deeper or less red so it measures below 100;
- Vamana's blue deepened toward indigo;
- Vamana's body turned toward the path.

After that, re-run an independent exact-checksum review of the new version.

## 6. Captain-call inventory

**Empty.** This review raises no decision for the captain. The pending captain art approval is the existing standing state, not a decision raised here.

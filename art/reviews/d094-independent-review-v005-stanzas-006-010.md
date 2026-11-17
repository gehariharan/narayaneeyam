# D094 landscape candidate review: stanzas 6–10

## Scope and method

I independently reviewed the five selected landscape candidates against the frozen final plan, series and character contracts, mapped intake photos, and stanza captions. `content/daskams/d094.json` maps stanzas to captions #6–#10 at lines 67–112; the supplied caption text is in `OneDrive/Pictures/Narayaneeyam Studio/intake/D094/photo-captions.txt`, sections `#6`–`#10`. The plan maps stanzas to `intake/D094/006.jpg` through `010.jpg` in `reference_guidance` at lines 313–314, 363–364, 416–417, 472–473, and 524–525.

I viewed each complete candidate at native resolution and enlarged crops of faces, bodies, hands, feet, and the cow/manuscript where present. Dimensions were 1672×941 for S006–S009 and 1671×941 for S010 (`identify -format '%f %wx%h\\n' <candidate>`). I made crops with ImageMagick `magick <candidate> -crop <geometry> +repage`; close digit crops were enlarged with `-resize 200%`. I checked corners, ground, foliage, water, and other quiet regions for text/signature artifacts. For skin-color requirements, I measured 11×11 patches with `magick <candidate> -crop 11x11+X+Y +repage -format '%[fx:round(median.r*255)],%[fx:round(median.g*255)],%[fx:round(median.b*255)]\\n' info:`.

## Frozen contract SHA-256 values

All actual hashes match the expected values. Candidate hashes were verified before inspection with `sha256sum` and remained unchanged after review.

| Contract file | SHA-256 |
|---|---|
| `review-contract-e/f/art/plans/d094.json` | `4a6d141118ffc2af93dbd90882c32ee9ddcdf83382b6687b6b4fb04027e7f7a6` |
| `review-contract-e/f/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `review-contract-e/f/art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `review-contract-e/f/art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `review-contract-e/f/art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `review-contract-e/f/art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `review-contract-e/f/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |

## Image findings

Review time for all five images: **2026-11-17T02:27:01Z**. Each verdict applies only to its listed exact SHA-256.

### S006 — v010

- **Candidate:** `artifacts/d094/s006/landscape/candidate-v010.png`
- **Verified SHA-256:** `6ad0147414bb9c53b06ea07a473b2330e6112ee723eb76b217c1d261b1277a3f`
- **Anatomy:** One Bhattathiri and one two-armed Bhagwan; proportions and limb connections look coherent. Bhattathiri’s folded arms join naturally. No extra or missing limbs.
- **Faces:** Both faces are distinct and intact. Bhattathiri is older and clean-shaven with ash marks and a small rear tuft; Bhagwan has one serene face. Neither is cut off.
- **Hands/feet:** Bhattathiri’s joined palms show five aligned fingertips; the pressed thumbs overlap naturally. Bhagwan’s raised and lowered hands each show a thumb and four fingers. Bhattathiri’s one visible bare foot has five toes; both of Bhagwan’s visible feet show five toes. The tucked leg is not exposed as a malformed limb.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread, and modest beads; the bare upper torso is ordinary traditional devotee dress. Face patch (420,280) measured RGB 166,92,57 (R−B 109), below the plan’s 120 ceiling. Bhagwan wears yellow and red-orange cloth with blue skin. The crown, layered jewelry, and garlands are ornate temple-mural iconography and do not violate a prohibition.
- **Text/signature artifacts:** None seen on the palm-leaf bundle, vessel, ground, foliage, corners, or sky. The manuscript is unmarked; no signature, watermark, logo, or frame.
- **Scene and caption fidelity:** The prayer scene follows caption #6, with clean water in an uncluttered vessel, an unmarked palm-leaf teaching between the figures, and one Bhagwan. The mapped photo is used for context; the candidate follows the stanza and plan.
- **Character/deity contract:** The older clean-shaven Bhattathiri and deep-blue single-form Guruvayurappan are consistent with their contracts. The feather crown, face, hands, and feet remain in-frame.
- **Verdict: pass.**

Plan evidence: `d094.json` lines 287–340, including required scene at 295–302 and selected candidate/status at 328–332. Content/caption mapping: `d094.json` lines 67–73; reference caption #6.

### S007 — v002

- **Candidate:** `artifacts/d094/s007/landscape/candidate-v002.png`
- **Verified SHA-256:** `4c89681e485a924d33c07c321d7174c3d97a3f50e18580255f8a3ba5997c370a`
- **Anatomy:** No people or deity appear, as required. The cow has one head, a coherent body, four attached legs, and four hooves; the enlarged lower-body crop shows separated, naturally jointed legs. No duplicate creature.
- **Faces:** The cow has one intact, calm face with both ears and horns visible; no distortion or cut-off.
- **Hands/feet:** No human hands or feet. All four hooves are attached; the two forelegs and two hind legs are individually discernible in the enlarged crop.
- **Clothing and cast:** No human cast. The cow appears healthy and cared for, with a simple garland. The unmilked comparison is carried by the open book and empty bowl; there is no visible udder/milk action, and nothing suggests injury or neglect.
- **Text/signature artifacts:** The open two-leaf palm-leaf text is entirely blank. No signature, watermark, logo, or stray text is visible on the bowl, ground, leaves, or corners.
- **Scene and caption fidelity:** The healthy cow is beside a clear open manuscript; a separate empty bowl and silent flower provide the gentle speech symbol. No people or deity are added. This follows caption #7 while leaving the source photo’s legible writing behind.
- **Character/deity contract:** No contracted character is present; the plan explicitly requires a still life and no deity.
- **Verdict: pass.**

Plan evidence: `d094.json` lines 342–388, required elements at 347–353 and candidate status at 376–380. Content/caption mapping: `d094.json` lines 77–83; reference caption #7.

### S008 — v007

- **Candidate:** `artifacts/d094/s008/landscape/candidate-v007.png`
- **Verified SHA-256:** `19d4c9e010ca706017c96b6c1015158c08ec04c5e3cdf48c2895d08bd923ca05`
- **Anatomy:** One Bhattathiri and one two-armed Bhagwan, both with coherent attached limbs. Bhattathiri kneels in a humble offering posture. Six footprint symbols form three distinct pairs and do not merge into faces or bodies.
- **Faces:** Bhattathiri’s older clean-shaven face and Bhagwan’s single serene face are intact and distinct. Neither is cropped.
- **Hands/feet:** Bhattathiri’s two open hands each show a thumb and four fingers. Bhagwan’s two hands each show five digits. Bhattathiri’s visible bare foot has five toes; the other is tucked. Bhagwan’s two visible feet each show five toes. Each footprint symbol has a separate toe cluster.
- **Clothing and cast:** Bhattathiri wears a simple cream dhoti, sacred thread, and modest beads; his bare upper torso is ordinary traditional dress. The disclosed skin-color deviation is present. My 11×11 skin patches measured face (380,345) RGB 197,115,63 (R−B 134), torso (300,500) RGB 166,90,45 (R−B 121), and arm (475,540) RGB 201,118,67 (R−B 134). These are no worse than the disclosed face/torso/arm deviation. The deity’s crown, necklaces, and garlands are ordinary temple-mural ornamentation.
- **Text/signature artifacts:** No writing or marks on props, sound notation, signature, watermark, logo, or stray text in the ground, foliage, or corners.
- **Scene and caption fidelity:** Bhattathiri worships one Bhagwan. Three pairs of footprints lead toward the shrine. Offerings and a small cymbal plus resting veena provide the song gesture. The scene follows the prayer and devotee reverence described in caption #8.
- **Character/deity contract:** Bhattathiri follows the older clean-shaven identity; Bhagwan is one deep-blue figure. The required footprints are present, with no added character faces. No prohibited frame remains.
- **Verdict: pass — disclosed deviation present.**

Plan evidence: `d094.json` lines 390–444, required scene at 398–405 and disclosed deviation at 436. Content/caption mapping: `d094.json` lines 87–93; reference caption #8.

### S009 — v005

- **Candidate:** `artifacts/d094/s009/landscape/candidate-v005.png`
- **Verified SHA-256:** `0819104ff28151e82c7af260792a2e655c4608ce2b9ac05c4cba8f0089b76a43`
- **Anatomy:** Bhattathiri has two attached arms and legs. The deity has exactly four arms, each visibly attached to the single torso, with four hands. No duplicated deity or body.
- **Faces:** Bhattathiri’s older clean-shaven face and the deity’s single face are intact. The deity’s crown and feather remain in-frame; no face or key extremity is cut off.
- **Hands/feet:** Bhattathiri’s hanging hand shows five digits; the other grips the broom with a thumb and four fingers. Both visible feet show five toes. The deity’s four separate hands each show five digits on close inspection; both visible feet show five toes.
- **Clothing and cast:** Bhattathiri wears the cream dhoti, sacred thread, and modest beads; the bare upper torso is ordinary traditional dress. The plan discloses a skin-color deviation. My 11×11 patches measured cheek (420,170) RGB 172,88,49 (R−B 123), chest (390,260) RGB 178,90,52 (R−B 126), and forearm (470,360) RGB 180,94,56 (R−B 124). At the same forearm coordinates, this exceeds the disclosed R−B 105 by 19, so the observed deviation is worse than disclosed. Deity crown, necklaces, armlets, and garlands are ordinary temple-mural iconography.
- **Text/signature artifacts:** No writing on the shrine or sun/lamp; no signature, watermark, logo, or stray marks on the floor, vegetation, or corners.
- **Scene and caption fidelity:** Bhattathiri sweeps the threshold before one four-armed Bhagwan. The shrine medallion contains the only deity; the sun, oil lamp, and modest offering are visible. The candidate follows caption #9 and does not copy the reference photo’s glow or finish.
- **Character/deity contract:** Bhattathiri’s age, clean-shaven face, sacred ash, tuft, and clothing are consistent with the contract. The deity has the required four arms and hands. The ornate shrine surround is the planned medallion, not an added outer frame.
- **Verdict: needs-fix.** The plan explicitly sets the under-120 skin patch target at lines 458–460; the measured forearm patch at native pixels (470,360) is R−B 124, beyond the disclosed deviation. This is the exposed forearm holding the broom, and the warm-orange cast is visible in the full image.

Plan evidence: `d094.json` lines 446–498, required scene at 454–461 and disclosed sample at 490. Content/caption mapping: `d094.json` lines 97–103; reference caption #9.

### S010 — v006

- **Candidate:** `artifacts/d094/s010/landscape/candidate-v006.png`
- **Verified SHA-256:** `6d82f5fed8b3b8b6b5cbedfbd32dcd15d8df79a2caff495ab990a7eeb1aa9bda`
- **Anatomy:** One youthful Krishna with two attached arms and legs, and four distinct adult gopikas with natural proportions. Faces and bodies stay separate; no duplicated or fused person. Peripheral garments and limbs approaching the mural edge remain naturally composed, with faces intact.
- **Faces:** Five distinct, intact faces with calm expressions; none is cropped. Krishna reads as youthful, not infant-like.
- **Hands/feet:** Krishna’s two hands and the eight visible gopika hands each show a thumb plus four fingers in enlarged crops. Each of the eight visible gopika feet and Krishna’s visible foot shows five toes. Krishna’s other foot is covered by his dhoti and is not malformed.
- **Clothing and cast:** All gopikas wear modest, fully covered village saris with restrained jewelry. Krishna has deep matte blue skin, yellow dhoti, muted red-orange shawl, a low band, and one upright peacock feather. His forehead is plain, with no mark.
- **Text/signature artifacts:** No readable or decorative text, signature, watermark, or logo is visible in sky, water, foliage, ground, or corners.
- **Scene and caption fidelity:** Krishna sits with four gopikas in a reverent circular arrangement around a central lotus, matching the loving devotion in caption #10. The mapped photo’s mirrored water composition is not copied.
- **Character/deity contract:** Krishna is one-faced, two-armed, deep matte blue, youthful, with a plain forehead, low gold band, and single feather as required. The gopikas are distinct adult women in modest village dress, without heavy jewelry.
- **Verdict: pass.**

Plan evidence: `d094.json` lines 500–545, required scene at 508–514 and candidate status at 541. Content/caption mapping: `d094.json` lines 107–113; reference caption #10.

Relevant contract line references: series style and full-bleed/palette rules are in `series.json` lines 3–27 and 42–59; Bhattathiri identity/clothing and prohibitions are in `characters/bhattathiri/character.json` lines 20–54; Guruvayurappan identity and crop/anatomy rules are in `characters/guruvayurappan/character.json` lines 12–37; the gopika group rules are in `characters/gopikas/character.json` lines 14–39; Krishna’s youth, anatomy, costume and forehead rules are in `characters/krishna-vrindavan-youth/character.json` lines 6–14 and 54–64.

## Review recommendation and call inventory

Four candidates pass, including S008 with its disclosed deviation; S009 v005 needs a new candidate because its observed forearm patch is beyond the disclosed deviation and the explicit plan target. These findings are independent visual-review evidence only; they do not approve artwork or update an approval manifest. I found no unresolved question for the captain to decide in this review. The pending art approval remains the standing state, not a new call raised here. Empty captain-call inventory attested separately through the required completion command.

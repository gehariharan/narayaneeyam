# D047 selected landscape candidate review

## Scope and method

I independently reviewed the seven listed landscape candidates against their numbered intake photos, `content/daskams/d047.json`, `content/sources/d047/reference-map.json`, the frozen final plan, and the frozen character and series contracts. I opened every full candidate and its mapped reference at native size (candidates are 1672×941), then inspected focused crops for faces, hands, feet, bodies, monkey anatomy, rope and mortar details, and the prayer group. Scratch crops were written only under `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/.review-scratch/d047-review-e/`.

The candidates and numbered references were hash-checked before inspection; all fourteen hashes matched the task’s expected values. The frozen plan and all six listed bible files also matched their expected hashes. The local captions file and the OneDrive mirror both hash to the expected value and compare byte-for-byte equal. I did not inspect any existing D047 review records or producer review files. I changed no project file, candidate, master, or approval manifest. These are visual review verdicts only; all artwork remains unapproved.

Commands used included `sha256sum`, read-only Python SHA-256 checks, `identify`, `magick <input> -crop ... <scratch-output>`, `view_image` on each full candidate/reference and focused crop, and `diff -u` on the local and OneDrive caption files. All crop outputs named below are in the scratch directory above. The exact candidate hashes below bind each verdict to those bytes.

## Contract and source hashes

| File read | Actual SHA-256 | Expected | Result |
|---|---|---|---|
| Frozen `art/plans/d047.json` | `a369da723f9cc09166855574af00e0059123151ef1cfd820e6703ec53444dedf` | same | match |
| Frozen `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` | same | match |
| Frozen Krishna character contract | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` | same | match |
| Frozen Yashoda character contract | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` | same | match |
| Frozen gopikas character contract | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` | same | match |
| Frozen monkeys character contract | `902a357279ad316974426d4de863014fd037a750135b9385f654fdf771ea4481` | same | match |
| Frozen devas character contract | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` | same | match |
| `content/sources/d047/reference-map.json` | `e2b351145c7e03746da82b00c73f3bfa6131345df49edc6a76092e7fd69bf5e2` | same | match |
| Local `intake/D047/photo-captions.txt` | `b5c8bc79d2642672ad20fd7d1fedbffe3f2852480105e29bdddb1def1801a4ba` | same | match |
| OneDrive mirrored `intake/D047/photo-captions.txt` | `b5c8bc79d2642672ad20fd7d1fedbffe3f2852480105e29bdddb1def1801a4ba` | same | match; byte-identical to local |

Relevant source pointers: frozen plan stanza entries are `art/plans/d047.json:39,141,241,344,395,447,497`; mapping entries are `content/sources/d047/reference-map.json:13,33,53,73,83,93,103`; source stanza entries are `content/daskams/d047.json:17,37,57,77,87,97,107`; corresponding captions begin at `intake/D047/photo-captions.txt:1,12,22,32,37,42,47`. Character rules reviewed include series style/palette in `art/bible/series.json:3-45`, Krishna blue skin/anatomy in `characters/krishna-vrindavan-youth/character.json:8-15,54-65`, Yashoda skin/clothing in `characters/yashoda/character.json:16-29`, gopika skin/clothing/group distinctness in `characters/gopikas/character.json:14-29`, monkey anatomy in `characters/monkeys/character.json:10-20`, and deva cast/clothing/anatomy in `characters/devas/character.json:10-20`.

## Image findings

### Stanza 1 — `candidate-v006.png`

- **Candidate and binding:** `artifacts/d047/s001/landscape/candidate-v006.png`; SHA-256 `57373ec3f3deb10812ea340ed5292422a8e2a770ad98c9ab33db343a7e5729fe` (verified). **Review time:** 2026-11-18 04:37 UTC.
- **Anatomy / face / hands and feet:** Yashoda and child Krishna each have one readable face and connected limbs. Yashoda’s two hands hold the single churning rod. Krishna’s visible hand rests naturally on her upper arm; the visible bent foot and floor foot each show five toes. Yashoda’s visible foot shows five toes. The native image and `s001-focus-1.png`, `s001-feet.png` show no malformed or duplicated figure.
- **Clothing and cast:** Yashoda wears a cream sari with muted olive blouse and restrained jewelry; Krishna wears yellow cloth and has ordinary child proportions. The interaction is maternal and modest.
- **Text/signature artifacts:** None seen in the image, floor, vessels, or corners.
- **Scene/caption fidelity:** Shows Yashoda churning curd while Krishna climbs into her lap to drink, matching photo 001 and the caption. One coherent rod and pot are visible.
- **Character contract / skin:** Krishna reads deep matte indigo-blue, not orange. A 25×25 skin-only sample on Yashoda’s upper arm at (600,300) measured median R−B **106**; her skin reads natural warm brown. Her plain veil, face, and sari family fit the Yashoda contract.
- **Verdict: pass.**

### Stanza 3 — `candidate-v009.png`

- **Candidate and binding:** `artifacts/d047/s003/landscape/candidate-v009.png`; SHA-256 `210c12541a2856995a6100d67758f45cc928b749c98e0e57deb42f5cadf315f6` (verified). **Review time:** 2026-11-18 04:37 UTC.
- **Anatomy / face / hands and feet:** Krishna has one distinct face and two connected arms. His open hand and lap hand are coherent; the fully visible foot shows five toes. The other foot is folded beneath the dhoti and cannot be counted, with no visible defect. Focus views `s003-face-hands.png` and `s003-broken-pot-rod.png` show no extra or fused limbs.
- **Clothing and cast:** One child Krishna in yellow dhoti, bare upper torso, and ordinary child proportions; the bare torso is ordinary traditional dress.
- **Text/signature artifacts:** None seen, including across the floor and lower corners.
- **Scene/caption fidelity:** The angry seated child is beside a broken pot, distinct shards, spilled curd, and the rod lying on the floor, as required by the current aftermath plan and photo 003.
- **Character contract:** Krishna’s skin reads deep matte indigo-blue, not orange; his forehead is plain with the low band and single feather. No other cast requires warm-brown skin in this scene.
- **Verdict: pass.**

### Stanza 5 — `candidate-v004.png`

- **Candidate and binding:** `artifacts/d047/s005/landscape/candidate-v004.png`; SHA-256 `b51505a5dcb20ea44d0dcd78db24fbd49bcd9bf269783a34d9cf38e18b46a83b` (verified). **Review time:** 2026-11-18 04:37 UTC.
- **Anatomy / faces / hands and feet:** Krishna has one face, two attached arms, and two hands with thumb plus four fingers visible on each. His feet are concealed by the dhoti and mortar. Three monkeys have distinct faces and connected four-limb bodies and tails; the enlarged `s005-monkeys.png` crop shows no fused or duplicate bodies. Small monkey digits are not resolvable at native scale and are not treated as defects.
- **Clothing and cast:** Krishna wears yellow cloth with the plain forehead, low band, and feather. Three small monkeys are subordinate to him in scale. No humans require warm-brown skin sampling in this stanza.
- **Text/signature artifacts:** None seen in the wall, floor, vessel surfaces, or corners.
- **Scene/caption fidelity:** Krishna shares butter at the mortar with monkeys. This correctly follows the canonical monkey scene and the current plan even though caption/photo 005’s English caption says “cat”; the reference image itself shows monkeys. The known caption discrepancy is present and handled correctly.
- **Character contract:** Krishna reads deep matte indigo-blue, not orange. The monkeys have natural animal silhouettes, connected limbs, and matte mural rendering, consistent with their contract.
- **Verdict: pass.**

### Stanza 7 — `candidate-v004.png`

- **Candidate and binding:** `artifacts/d047/s007/landscape/candidate-v004.png`; SHA-256 `349351a51e41d67af354e3bd25c4cb01a2f237152b94ea9f63dc81461c1d9dd2` (verified). **Review time:** 2026-11-18 04:37 UTC.
- **Anatomy / faces / hands and feet:** Yashoda, Krishna, and the three witnessing gopikas have distinct faces and connected bodies. Yashoda’s pointing hand has two extended fingers and a naturally curled remaining grip; her other hand holds a rope piece. Krishna’s hanging hands and both feet look connected; both feet show five toes in `s007-feet.png`. No duplicated person or malformed limb is visible.
- **Clothing and cast:** Yashoda’s cream/rose sari and modest jewelry fit her contract. The three gopikas are distinct women in muted village saris, with no palace finery.
- **Text/signature artifacts:** None seen.
- **Scene/caption fidelity:** Yashoda joins rope lengths around Krishna and the mortar; the free ends remain visibly separated by about two finger widths. This matches the two-finger shortfall and photo 007.
- **Character contract / skin:** Krishna reads matte indigo-blue, not orange. Skin-only 25×25 samples measured median R−B **113** on Yashoda’s cheek (700,310) and **111** on each of three gopika cheek patches (130,135; 235,185; 165,265). They read natural warm brown. The gopikas remain visually distinct from Yashoda.
- **Verdict: pass.**

### Stanza 8 — `candidate-v002.png`

- **Candidate and binding:** `artifacts/d047/s008/landscape/candidate-v002.png`; SHA-256 `3616034695850f7ffbb1f5c9e78fe6c0980430d428f2c310420764c798a14cfc` (verified). **Review time:** 2026-11-18 04:37 UTC.
- **Anatomy / faces / hands and feet:** Yashoda, Krishna, and three gopikas have distinct faces and connected limbs. Yashoda’s lowered hands are relaxed and attached; the gopikas’ joined prayer hands are coherent. Krishna’s hands and both feet remain visible and connected; each foot shows five toes in `s008-hands-feet.png`. No fused or duplicated people are visible.
- **Clothing and cast:** Yashoda’s cream and muted rose clothing and the gopikas’ simple olive, ochre, and rose saris are modest and contract-fitting. The three witnesses are individually distinguishable.
- **Text/signature artifacts:** None seen in the floor, wall, rope, mortar, or corners.
- **Scene/caption fidelity:** Krishna is gently tied to the mortar, while visibly tired Yashoda watches and the gopikas witness the moment. This follows the plan and photo 008.
- **Character contract / skin:** Krishna reads deep matte indigo-blue, not orange. Skin-only 25×25 samples measured median R−B **107** on Yashoda’s forearm (580,640) and **112** on a gopika’s forearm (120,340); both read natural warm brown. Clothing and group portrayal fit the Yashoda and gopika contracts.
- **Verdict: pass.**

### Stanza 9 — `candidate-v003.png`

- **Candidate and binding:** `artifacts/d047/s009/landscape/candidate-v003.png`; SHA-256 `45aead569a5cb9234985e90b166094fbe32d1fc012cfffab68bbeec82119705e` (verified). **Review time:** 2026-11-18 04:37 UTC.
- **Anatomy / face / hands and feet:** Krishna has one face and attached arms and legs. The butter hand at his mouth and the mortar-bracing hand are coherent. Both visible feet show five distinct toes in `s009-feet.png`. No second Krishna, malformed limb, or duplicate body is visible.
- **Clothing and cast:** Krishna is alone in yellow dhoti; no other character is depicted. His bare upper torso is ordinary traditional dress.
- **Text/signature artifacts:** None seen in the wall, floor, mortar, or corners.
- **Scene/caption fidelity:** Krishna eats butter beside the mortar with Yashoda absent, following the canonical stanza and caption. Photo 009 instead shows Yashoda present; this known reference conflict is disclosed in the plan and the candidate handles it correctly. The mortar is shown open at the top with butter; no separate side aperture is drawn, but the intended mortar cavity and butter-eating action are readable.
- **Character contract:** Krishna reads deep matte indigo-blue, not orange, with plain forehead, low band, and one feather. No warm-brown human skin is required in this scene.
- **Verdict: pass.**

### Stanza 10 — `candidate-v005.png`

- **Candidate and binding:** `artifacts/d047/s010/landscape/candidate-v005.png`; SHA-256 `8219d59873ca6fe3a97a20ea5c04d8de5c673cc1fa475f63cdc4eb69c006c138` (verified). **Review time:** 2026-11-18 04:37 UTC.
- **Anatomy / faces / hands and feet:** Krishna has one face, attached arms and legs, and ordinary child proportions. His hands are visible at his sides with the cord crossing his wrists; his feet are inside the frame. The three upper figures have distinct faces and naturally joined prayer hands. Their small digits are not resolvable at native scale, with no visible defect.
- **Clothing and cast:** Krishna’s yellow cloth and restrained head detail fit his contract. The required devas are absent: the upper-left/upper-middle area (approximately x=0–980, y=0–420) contains three ordinary sari-clad women, with no distinct deva witnesses or modest crowns. Their skin is not orange; one 25×25 visible-face patch at (755,165) measured median R−B **90** and reads natural warm brown. There is no deva skin patch to sample because no devas appear.
- **Text/signature artifacts:** None seen. The supplied title poster’s lettering and layout are not copied.
- **Scene/caption fidelity:** Krishna is bound beside the mortar, but the image does not show the planned small group of devas praising him in the celestial register. Photo 010 is a title poster, so the plan correctly excludes its poster layout; this candidate nevertheless substitutes ordinary women for the required deva cast.
- **Character/deity contract:** This is a visible required-cast and contract mismatch. The devas contract requires distinct adult celestial witnesses with modest crowns and cream/ochre/maroon dress. Three women in ordinary saris do not satisfy it.
- **Verdict: needs-fix.** The missing deva witnesses are a viewer-visible omission in the upper register, not an uncertainty.

## Recommendation and captain-call inventory

Keep the six passing candidates as visually reviewed for these exact checksums and request a new stanza 10 candidate that shows distinct contract-fitting devas praising the bound Krishna. Do not approve any artwork from this review. There is no unresolved captain decision raised by these findings; the standing pending art approval is unchanged. Captain-call inventory for this review: **empty**.

# D054 landscape candidate review

## Scope and method

Independent read-only visual review of four candidates against the byte-frozen final plan and character contracts identified below. I reviewed each full image at native dimensions, then examined enlarged crops saved under this worker worktree at `.review-scratch/`. Inputs were not edited. No project file or approval manifest was changed; all artwork remains unapproved. The three disclosed reference mismatches below are present and were assessed against the controlling plan and canonical stanza. No review report, producer note, approval file, or other review evidence was consulted.

Review completed and recorded at **2026-11-28 06:37 UTC**. The individual verdicts bind only to the candidate checksums recorded below and to the frozen plan and character-file hashes.

Integrity commands and results:

- A Python script generated `.review-scratch/candidates.sha256` from the four candidate/hash pairs in the assignment; `sha256sum -c .review-scratch/candidates.sha256` returned `OK` for all four candidates.
- A Python script generated `.review-scratch/contracts.sha256` from the nine frozen contract files and the two source files/hash pairs in the assignment; `sha256sum -c .review-scratch/contracts.sha256` returned `OK` for all eleven files.
- `identify` reported candidate dimensions: s002 1672×941; s007 1672×941; s008 1671×941; s010 1671×941.
- Native full-frame views were followed by focused, enlarged crops made with ImageMagick `magick input -crop ... +repage -resize ... <absolute .review-scratch output>`. Crop outputs include `s2-sage-detail.png`, `s2-garuda-detail.png`, `s7-embrace-detail.png`, `s7-lower-limbs-detail.png`, `s8-krishna-hands-detail.png`, `s8-cattle-left-detail.png`, `s8-cattle-right-detail.png`, `s8-bottom-frame.png`, `s10-krishna-detail.png`, `s10-bhattathiri-detail.png`, `s10-gopas-detail.png`, `s10-feet-and-frame.png`, and `s10-gopas-feet.png`. Additional full-width ground/water crops were saved for s002 and s007. All crop outputs are in this worktree's `.review-scratch/`, outside `artifacts/` and `intake/`.

## Exact plan and character contract bytes

The actual SHA-256 values below were checked with `sha256sum -c` and match the expected values.

| Contract file | Actual SHA-256 |
|---|---|
| `data/d054-production/review-contract-c/art/plans/d054.json` | `2ca7d710b06874c0fc8558b6d4dd92f4f027b5d9a4d06ae5746be15906cb79e4` |
| `data/d054-production/review-contract-c/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d054-production/review-contract-c/art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `data/d054-production/review-contract-c/art/bible/characters/d054-cattle/character.json` | `deca33ca2cad0cfe51fd1ed7edd87ac7a960e5a89cf108465875b731fe43acc5` |
| `data/d054-production/review-contract-c/art/bible/characters/d054-kaliya/character.json` | `825f0dfc8758c79f6f1bb4a71e51bd78a6a2987cea15899f276c997442896d9f` |
| `data/d054-production/review-contract-c/art/bible/characters/d054-saubhari/character.json` | `be064191b42755329932b785aca466b18479b53a0c0646ac01c64faa68b5bb8e` |
| `data/d054-production/review-contract-c/art/bible/characters/garuda/character.json` | `574f6ce4c4488129b475bf6967dd8e0219e16bb213a27212f4fd35d446755035` |
| `data/d054-production/review-contract-c/art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `data/d054-production/review-contract-c/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |

Related source hashes, also checked against the expected bytes:

| Source file | Actual SHA-256 |
|---|---|
| `content/sources/d054/reference-map.json` | `cc4fb8ce78c9a188736655f66a244a8235b75e54b31b1872fefa218daad86bec` |
| `intake/D054/photo-captions.txt` | `53db276f41ef496705bd0b5b1de133ee52481dac797dbb45b0c23f4bebe29490` |

Evidence locations in the chapter checkout: plan entries at `art/plans/d054.json:193,394,434,514`; stanza text and captions at `content/daskams/d054.json:27-34,77-94,107-114`; mapped photo paths and deviation notes at `content/sources/d054/reference-map.json:25-29,76-79,85-89,105-109`; corresponding captions at `intake/D054/photo-captions.txt:12-18,47-53,54-60,68-74`. Contract details reviewed include the series treatment at `series.json:6,34`; Saubhari's brown skin and simple ascetic dress at `d054-saubhari/character.json:13-17`; Garuda's hooked beak, two attached wings, warm-brown/ochre fields and simple cloth at `garuda/character.json:7`; Krishna's deep matte blue skin, plain forehead, simple band/feather, and two-arm/two-leg anatomy at `krishna-vrindavan-youth/character.json:8-13`; cow anatomy at `d054-cattle/character.json:13-14`; gopa skin and modest dress at `gopas/character.json:18-22`; Bhattathiri's medium-brown skin, cream dhoti and continuity markers at `bhattathiri/character.json:19,22-23`.

## Stanza 2 — candidate v010

- **Candidate and verified SHA-256:** `artifacts/d054/s002/landscape/candidate-v010.png` — `da82c75775c356e83806b92138931e9db4586d471fec2b6659bafeb053b02d2f` (1672×941). Exact-checksum review time: **2026-11-28 06:37 UTC**.
- **Anatomy:** Saubhari's visible torso and raised arm connect naturally. Garuda has one eagle head, two attached wings, a broad bird body, two humanlike arms and two scaled legs ending in coherent talons; this matches the allowed scene-specific bird/humanlike form. No duplicate or fused figure, malformed face, or missing visible limb. Each Garuda foot shows three forward talons and a rear talon. No separate human feet are visible for the submerged sage.
- **Faces:** Saubhari's bearded, tied-hair ascetic face is readable and angry as the curse requires. Garuda's hooked beak and eyes are distinct; no malformed face.
- **Hands/feet:** Saubhari's raised hand is a pointing gesture with one extended index, three curled fingers and a visible thumb; it is not an extra or fused digit. Garuda's two relaxed hands have separated fingers and attach at the wrists. Talons are clearly separated as noted above.
- **Clothing and cast:** Saubhari's bare upper torso and simple cream wrap are ordinary traditional ascetic dress. Garuda's ochre sash and short wrap are simple scene clothing, not palace regalia. Cast is limited to the intended sage and Garuda, with fish.
- **Text/signature artifacts:** No readable text, caption, logo, signature or watermark is visible. Checked river, bank/foliage, and corners; no concealed mark found.
- **Scene and reference fidelity:** Plan s002 requires hungry Garuda taking one fish and Saubhari cursing him. Both are clearly depicted: a fish is in Garuda's beak, and Saubhari raises his hand toward him from the water. Other fish remain in the river; no graphic injury. The mapped reference `intake/D054/002.jpg` shows only a meditating underwater sage, with no Garuda, fish-taking or curse; this disclosed deviation is present. The candidate follows the final scene plan rather than copying that incomplete reference.
- **Character/deity contract:** Saubhari reads as natural warm brown, not orange. Skin-only 50×50 px chest patch at candidate coordinates x=280, y=760 has measured median RGB (152,85,38), median R−B **114**. Garuda's hooked beak, warm-brown body, ochre cloth and two attached wings are consistent with its contract. No Krishna is in this scene.
- **Verdict: PASS.** No viewer-noticeable defect from the stated review gate was found.

## Stanza 7 — candidate v014

- **Candidate and verified SHA-256:** `artifacts/d054/s007/landscape/candidate-v014.png` — `dd879a23bcf91f35220e10f6d38d1ed2e5aa1039640f800fa8fb03e7130fb314` (1672×941). Exact-checksum review time: **2026-11-28 06:37 UTC**.
- **Anatomy:** Krishna and three distinct adult cowherds have connected shoulders, arms and legs in the embrace. Overlapping forearms at the waist remain visually attributable; no fused bodies or duplicate people are visible. The visible feet are coherent; Krishna's two blue feet each show five toes. The gopas' visible feet have natural toes where not overlapped; no malformed or extra digits are visible. Small background cattle are too small for toe-level inspection and are not treated as a defect.
- **Faces:** Krishna has a serene youthful face. The three gopas have distinct, naturally varied faces and expressions; none is malformed or duplicated.
- **Hands/feet:** Krishna's two hands rest on separate cowherd shoulders; each exposed hand shows a thumb and four fingers. The exposed embracing hand in front shows a thumb and four fingers. Other hands at the waist are partly occluded by the embrace, with no visible wrong digit or attachment. Feet are as counted above.
- **Clothing and cast:** The gopas wear simple cream, olive and maroon wraps. Bare upper torsos are ordinary traditional dress. No sexualized framing or royal costume.
- **Text/signature artifacts:** No readable text, caption, signature, logo or watermark; checked the lower ground and corners.
- **Scene and reference fidelity:** Plan s007 calls for three distinct gopas rising in wonder and embracing Krishna, without flute-playing. The image depicts exactly that readable embrace. Mapped reference `intake/D054/007.jpg` shows Krishna playing flute beneath a tree with grazing cows, not the stanza's embrace; this disclosed deviation is present. The candidate correctly follows the final plan.
- **Character/deity contract:** Krishna is youthful, deep matte blue, with long dark curls, yellow dhoti, muted red-orange shawl, one low band and upright peacock feather, and a plain forehead without tilak. A skin-only 50×50 px gopa arm patch at x=620, y=425 has median RGB (147,77,28), median R−B **120**; despite being at the plan's approximate 120 guide, it visibly reads as warm brown rather than orange. Gopa clothing and varied warm mural skin are within contract.
- **Verdict: PASS.** No viewer-noticeable defect from the stated review gate was found.

## Stanza 8 — candidate v008

- **Candidate and verified SHA-256:** `artifacts/d054/s008/landscape/candidate-v008.png` — `92b2a053d3d119ae46d422439245f04b18596b88a2633f4a499f36063533ce55` (1671×941). Exact-checksum review time: **2026-11-28 06:37 UTC**.
- **Anatomy:** The visible bovine heads and torsos are distinct, with coherent single heads and no duplicated or fused bodies. Their lower legs run out through the lower frame and are not fully visible. Krishna's torso and arms are coherent, but the lower body is cut off at the canvas boundary: in the exact region **x=650–1020, y=900–940** the yellow dhoti exits through the bottom edge and neither leg nor foot is shown. This is a clear framing defect under the requirement that a key extremity not be cut off; it is visible in the full frame and in `s8-bottom-frame.png`.
- **Faces:** Krishna's peaceful youthful face is well formed. The cows have distinct, readable bovine faces with eyes, tears and gentle open mouths; no malformed or duplicated face.
- **Hands/feet:** Krishna's two visible contact hands each show four fingers and a thumb, placed on separate cow heads. No malformed hand is visible. **Neither Krishna leg nor foot is visible because the figure is cut off at the bottom frame**; this is the needs-fix reason. Cow feet are also below the frame, so their toes cannot be resolved.
- **Clothing and cast:** Krishna wears the contracted yellow dhoti and red-orange shawl. The herd is small and varied, with four visible cows/calves. No exposed skin beyond ordinary dress or sexualized framing.
- **Text/signature artifacts:** No readable text, signature or watermark is visible in the candidate, including the ground and corners. The reference itself contains a watermark and unrelated wildlife, but those are not reproduced.
- **Scene and reference fidelity:** The candidate shows the small recovered herd surrounding Krishna, with joyful tears and gentle lowing, as plan s008 requires. Mapped photo #8 broadly shows Krishna among animals; the plan discloses removal of its unrelated wildlife, glossy treatment, watermark and unsupported halo. Those removals are present. The missing lower body/feet are not a disclosed deviation.
- **Character/deity contract:** Krishna's skin is deep matte blue, face youthful, forehead plain, and low gold band with single peacock feather is correct. A skin-only torso patch (50×50 px at x=790, y=430) has median RGB (58,76,123), blue−red median **65**, consistent with the plan's deep blue guide. The cows have coherent visible heads and bodies; their leg anatomy is not fully shown because of framing.
- **Verdict: NEEDS-FIX.** Krishna's lower body and feet are visibly cut off by the bottom frame (region x=650–1020, y=900–940). Recompose the image so the main figure's legs and feet fit in the landscape frame.

## Stanza 10 — candidate v009

- **Candidate and verified SHA-256:** `artifacts/d054/s010/landscape/candidate-v009.png` — `dafe7c1d0f7f7bd57867d56c846cdb722185f92da75085dd5ee2fb6630ba0c7c` (1671×941). Exact-checksum review time: **2026-11-28 06:37 UTC**.
- **Anatomy:** Bhattathiri kneels with a coherent torso, two connected arms and joined hands; Krishna sits with two connected arms and legs. The two standing gopas remain separate, with naturally connected limbs. No malformed or duplicate person is visible. Krishna's visible foot shows five toes; the other foot is concealed by the dhoti. Standing gopa feet that are visible show naturally separated toes, without extra or fused digits; the rear foot partly behind the staff is occluded. No other main-figure foot has malformed anatomy.
- **Faces:** Bhattathiri has a lined older face, clean-shaven chin, ash stripes and small dark tuft. Krishna's youthful face is calm and distinct. The gopas' faces are distinct; none is malformed.
- **Hands/feet:** Krishna's blessing hand shows four fingers and a thumb; his hand resting on his lap shows four fingers and a thumb. Bhattathiri's joined hands are properly formed, with overlapping fingers appropriate to prayer. One Krishna foot is visible with five toes. Gopa hands are either joined in prayer, holding a staff, or relaxed; no exposed open hand has an apparent digit defect.
- **Clothing and cast:** Bhattathiri wears the simple cream dhoti, sacred thread and restrained beads; his bare upper torso is ordinary traditional dress. Two recovered gopas stand nearby in modest cream/olive wraps. Krishna has a yellow dhoti and red-orange shawl. No royal regalia or sexualized framing.
- **Text/signature artifacts:** No readable text, signature or watermark is visible in sky, foliage, ground, water or corners.
- **Scene and reference fidelity:** The scene shows Bhattathiri kneeling before Krishna with joined hands, Krishna's sidelong gaze and open blessing hand, and two recovered gopas nearby, as plan s010 requires. Mapped photo #10 is a crowded pastoral procession and does not show Bhattathiri's prayer or healing request; this disclosed deviation is present. The candidate follows the final scene plan.
- **Character/deity contract:** Krishna has deep matte blue skin, youthful features, plain forehead, low band and one peacock feather. Bhattathiri is older, clean-shaven, has the small hair tuft and forehead ash, and wears modest clothing. Skin-only patch measurements: Bhattathiri torso 50×50 px at x=590, y=540, median RGB (181,105,47), R−B **133**; left gopa upper arm 40×50 px at x=85, y=300, median RGB (183,108,50), R−B **132**; staff-carrying gopa forearm 40×50 px at x=385, y=365, median RGB (170,103,51), R−B **99**. These run from near to above the plan's approximate 120 guide, but all three patches visibly read as natural warm brown/earth-brown, not orange. Krishna matches the blue-skin contract.
- **Verdict: PASS.** No viewer-noticeable defect from the stated review gate was found.

## Recommendation and approval state

Treat s002 v010, s007 v014 and s010 v009 as independent visual-review passes for their recorded checksums. Revise s008 v008 to keep Krishna's full lower body and feet within the frame, then obtain a new exact-checksum review. This report does not approve any artwork or update `art/approved/`.

Captain-call inventory for this review: **empty**. The pending captain art approval is the standing state; this visual review raises no new captain decision.

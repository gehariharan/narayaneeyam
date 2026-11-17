# D099 landscape candidate review: stanzas 1–5

**Review completed:** 2026-11-17T08:10:51Z (UTC)
**Scope:** Independent exact-checksum visual review of five selected landscape candidates, compared with the frozen final plan, frozen series and character contracts, the chapter content, and mapped intake/reference images. I reviewed each full image at native resolution and enlarged crops covering the faces, hands, feet, torsos, figures, and frame corners/ground. This is visual review evidence only; all candidates remain unapproved.

## Contract bytes reviewed

The following actual SHA-256 values match the expected hashes in the task brief:

| File | Actual SHA-256 |
|---|---|
| `data/d099-production/review-contract-q/art/plans/d099.json` | `e7623dea804845c086fa49aa16e995a473205a83a880a6cc9b9ca5e0d202e255` |
| `data/d099-production/review-contract-q/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d099-production/review-contract-q/art/bible/characters/adishesha/character.json` | `d5c14279a218432cf99035e86436523e156167af06563c7890a3ae5954f5790c` |
| `data/d099-production/review-contract-q/art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `data/d099-production/review-contract-q/art/bible/characters/d031-vamana/character.json` | `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229` |
| `data/d099-production/review-contract-q/art/bible/characters/d099-poets-devotees/character.json` | `8b21f06911ed9a7b40171c93d5d3c3b6c3ca998b0a0134e59c7d17b5d6eac4ad` |
| `data/d099-production/review-contract-q/art/bible/characters/d099-vishvarupa/character.json` | `29741fba4d439b84e0a0231addd62c6dc42f42e83383789c63f5a4bcd06b2dcd` |
| `data/d099-production/review-contract-q/art/bible/characters/d099-worldly-people/character.json` | `180f80af38a6c1dec1769d396e65359094112ded6f107428537d77ccf53e1179` |
| `data/d099-production/review-contract-q/art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `data/d099-production/review-contract-q/art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |

## Method and source references

I verified candidate and contract checksums with `sha256sum`, checked native dimensions with ImageMagick `identify`, and read the plan, content, series bible, and character files. I used `magick -crop` to produce temporary enlarged views inside the worktree, then visually examined those views and the complete selected images with the image viewer. The temporary crops were removed after review. The crops were selected separately for each candidate; no generated image was edited.

The plan maps stanzas 1–5 to `intake/D099/001.jpg` through `005.jpg`, respectively; this is explicit at `art/plans/d099.json:20–23` and repeated in each stanza’s `reference_paths` and `reference_guidance` (`:57–59`, `:110–112`, `:166–168`, `:222–224`, `:276–278`). Chapter content maps each stanza’s commentary to the corresponding caption number (`content/daskams/d099.json:16–21`, `33–38`, `50–55`, `67–72`, `84–89`). I viewed each of those five raw intake photos and read the matching captions in `OneDrive/Pictures/Narayaneeyam Studio/intake/D099/photo-captions.txt` under `## 001.jpg` through `## 005.jpg`.

Contract points used include the matte, no-text, no-watermark, full-bleed series rules (`series.json:5–6`, `20–24`, `44–48`); Vamana/Trivikrama’s one face, two arms and two legs and its iconography (`d031-vamana/character.json:5–10`); Bhattathiri’s older clean-shaven face, ash marks, tuft, cream dhoti and no ornate jewelry (`bhattathiri/character.json:16–32`); ordinary two-arm/two-leg group figures (`d099-poets-devotees/character.json:6–18`); Guruvayurappan’s blue-skin requirement and uncropped crown/hands/feet (`guruvayurappan/character.json:18–37`); and the sages’ distinct two-arm forms (`sages/character.json:5–20`). The complete frozen plan and its selected candidate disclosures are bound by the plan hash above; stanza plan entries are at `d099.json:37–87`, `90–140`, `143–195`, `199–251`, and `255–307`.

## Candidate findings

### Stanza 1 — `v007`

- **Image/checksum:** `artifacts/d099/s001/landscape/candidate-v007.png`; 1671×941 px; SHA-256 `dab817eae014a2f8ed0108983f4b94b6b1a7b153812344837f5b64aba5fb2fb6` (verified twice).
- **Review time:** 2026-11-17T08:10:51Z.
- **Anatomy:** Trivikrama is one coherent figure, one face, two connected arms and two legs. The forward stride reaches the three world bands; the rear leg plants at lower left. No disconnected or fused limb or duplicated person is visible.
- **Faces:** Trivikrama’s face at roughly x=290–500, y=25–210 and Bhattathiri’s face at x=475–590, y=565–660 are coherent and distinct. Bhattathiri appears older, clean-shaven, ash-marked and tufted.
- **Hands/feet:** The deity’s two staff/umbrella hands and Bhattathiri’s joined prayer hands are attached and coherent; the joined pose partly occludes individual digits, with no extra or fused digit visible. In the crop around x=980–1500, y=390–650, the giant foot shows five toes. The planted foot around x=175–330, y=775–930 shows five toes. Bhattathiri’s two folded feet are concealed under the cream dhoti, as disclosed in the plan at `d099.json:78`; there is no visible foot/toe for him.
- **Clothing and cast:** Vamana’s saffron clothing, sacred thread, umbrella and staff fit the Vamana contract; no Krishna-only feather or flute is present. Bhattathiri’s cream dhoti, thread and prayer beads are modest traditional dress. Only the two required figures appear.
- **Text/signature artifacts:** No readable text, signature, logo or watermark appeared in the full image or enlarged top/bottom corner and ground crops.
- **Scene/caption fidelity:** Shows an immense stride spanning three symbolic world bands, with a small kneeling devotee at the base. This retains the three-stride devotional cue from caption #1 while avoiding the reference painting’s unsupported multi-arm anatomy and extra crowd. The composition is legible and full-bleed.
- **Character/deity contract:** Trivikrama has the required single face and two arms. Bhattathiri’s identity markers are present. The saturated blue deity skin and painted ochre ornaments fit the series; no prohibited structural detail is visible.
- **Verdict: pass — disclosed deviation present.** The disclosed concealed Bhattathiri feet are present; no separate defect observed.

### Stanza 2 — `v003`

- **Image/checksum:** `artifacts/d099/s002/landscape/candidate-v003.png`; 1672×941 px; SHA-256 `7c5fc8ccaceba2a61fbfb129bef1a9d3c09864f64a26e33169ee29508a5d9548` (verified twice).
- **Review time:** 2026-11-17T08:10:51Z.
- **Anatomy:** Three distinct seated worshippers are at left of the altar; one standing Vishnu murti is at right. Each person has a coherent head and connected limbs; there is no duplicate or fused body. The worshipper with the offering has two arms, one holding the ladle and one supporting the bowl.
- **Faces:** The three worshippers’ faces are individually distinguishable and coherent in the group crop (x=0–780, y=410–930). The murti’s face is intact and serene in the crop x=1030–1570, y=0–850.
- **Hands/feet:** In enlarged hand crops the two prayer pairs remain recognizable, and the offering hands are distinct. The murti’s open hands each show five digits; both visible feet show five toes each. All three worshippers’ legs are folded and their feet are concealed beneath dhoti folds, as disclosed at `d099.json:131`.
- **Clothing and cast:** All three worshippers wear opaque traditional dhotis; the murti wears a yellow dhoti and red-orange drape, peacock-feather crown and painted-ochre ornaments. The crown/necklace layering is visible on the head and torso (around x=1170–1450, y=15–500), ordinary temple-mural iconography and not a defect. Exactly three worshippers and one murti appear; there are no extra avatar tableaux.
- **Text/signature artifacts:** No readable marks, signature, logo or watermark are visible, including floor and corner crops.
- **Scene/caption fidelity:** The small yajna altar and flame, ladle of ghee, offering bowl, seated worshippers and single murti are visibly present. This keeps the yajna cue from caption #2 without reproducing the reference’s many-headed Vishnu tableaux.
- **Character/deity contract:** The murti is structurally one youthful figure with one face, two arms and two legs; its crown, clothing and pose fit the plan. Its face and upper torso visibly read muted slate-gray rather than the character contract’s deep blue (`guruvayurappan/character.json:20`). The plan’s selected-candidate status reports this skin-tone departure and gives measured face/torso patches below its blue threshold at `d099.json:131`; I confirm the muted-gray appearance in the enlarged murti crop. This is the disclosed tone deviation; no extra structural or anatomy defect is apparent.
- **Verdict: pass — disclosed deviation present.** Both the concealed worshipper feet and muted-gray murti tone are disclosed in the selected-candidate status; no separate defect observed.

### Stanza 3 — `v005`

- **Image/checksum:** `artifacts/d099/s003/landscape/candidate-v005.png`; 1672×941 px; SHA-256 `de66ddc041b0ef4e55b5fa75c2aaae823fc0ce8aa482442b33761fa9cec5f289` (verified twice).
- **Review time:** 2026-11-17T08:10:51Z.
- **Anatomy:** The three adults form a clear semicircle: singer at left, Bhattathiri in the center, veena player at right. Each has one intact face, two attached arms and two legs. The right figure’s veena is held by the two hands without fusing with the forearms or torso; no duplicate people are visible.
- **Faces:** All three faces are coherent and individually distinct in crops centered on the left poet (x=0–540, y=230–870), Bhattathiri (x=400–900, y=250–910), and veena player (x=1110–1650, y=250–890). Bhattathiri has a clean-shaven older face, ash stripes and small tuft.
- **Hands/feet:** The left poet’s two expressive hands remain attached; the veena player’s two hands are placed on the neck and strings. Finger segments are partly overlapped by the instrument, but the enlarged hands show no malformed or extra digit. Bhattathiri’s lap hands overlap naturally. In the enlarged bottom strip (x=0–1672, y=700–941), the visible feet of all three figures remain inside the frame; the exposed toes are separated, with five toe forms discernible on the visible feet. Other folded foot portions are naturally under the dhoti; no extremity is cut off.
- **Clothing and cast:** Simple cream, ochre and muted-olive traditional dhotis; upper bodies are bare in ordinary male devotional/poet dress, with sacred threads and beads. No exposed skin beyond this traditional dress. Exactly two poets and Bhattathiri are present.
- **Text/signature artifacts:** No scroll writing, musical notation, captions, signatures, logos or watermarks appear. The lower carpet and corner crops contain decorative mural texture and flowers only.
- **Scene/caption fidelity:** The left poet sings/gestures, the right poet plays a veena, Bhattathiri listens between them, and one serene Vishnu image is a quiet focal point behind them. It keeps the praise-and-singing cue of caption #3 while removing the reference’s oversized hand and crowd.
- **Character/deity contract:** Guruvayurappan is one blue, two-armed murti with intact head, hands and feet. Bhattathiri’s older clean-shaven markers are present. The checked face colors read warm brown for the poets and Bhattathiri; no explicit prohibition is violated.
- **Verdict: pass.** No visible defect found.

### Stanza 4 — `v007`

- **Image/checksum:** `artifacts/d099/s004/landscape/candidate-v007.png`; 1672×941 px; SHA-256 `aa75f88fcb82907f914462c7c4df268e8499ed8b99143b32fe6e080955e863f6` (verified twice).
- **Review time:** 2026-11-17T08:10:51Z.
- **Anatomy:** Bhattathiri, one saffron-clad sage and one white-bearded sage are three separate seated figures. Vishnu has one face and two connected arms. No duplicate or fused person is present.
- **Faces:** All four faces are intact and distinct (figures crop x=0–1120, y=150–850; murti crop x=570–1070, y=0–340). The two sages differ in beard, hair and clothing; Bhattathiri is clean-shaven.
- **Hands/feet:** Bhattathiri’s chin-resting and lap hands, the saffron sage’s lap hands, and the white-bearded sage’s joined prayer hands are attached and natural; the joined and overlapped poses conceal some individual digits, with no extra/fused digit visible. Vishnu’s joined lap hands overlap naturally. The sages’ visible feet are inside the frame; the right sage’s foot crop (x=1000–1650, y=570–930) shows separated toes. Vishnu’s cross-legged pose and lower ochre folds conceal both feet, as disclosed at `d099.json:243`.
- **Clothing and cast:** All wear modest traditional dhotis or ascetic cloth. Deity crown, necklaces and armlets are visibly ornate but are ordinary temple-mural iconography, and no contract forbids them. The empty jewel seat at right is present. No person representing Indra or any extra figure appears.
- **Text/signature artifacts:** No readable text, signature, logo or watermark in the full image or enlarged floor/corner crops.
- **Scene/caption fidelity:** Three contemplative figures face one Vishnu murti; the small empty jewel seat supplies the plan’s restrained friendship hint. The image follows caption #4’s contemplation of Vishnu’s deeds rather than copying the reference’s cow, elephant and crowded scene.
- **Character/deity contract:** Vishnu has one intact face and two attached arms; sages have distinct ordinary two-arm bodies. Bhattathiri’s face and markings fit his contract. No prohibited extra figure, limb or scene element is visible.
- **Verdict: pass — disclosed deviation present.** Vishnu’s feet are concealed by the seated pose and robe as disclosed; no separate defect observed.

### Stanza 5 — `v009`

- **Image/checksum:** `artifacts/d099/s005/landscape/candidate-v009.png`; 1671×941 px; SHA-256 `43b86cfa47cfba9d345fb88a353e4397a27206f0bbdade54629b1b8c31f922ad` (verified twice).
- **Review time:** 2026-11-17T08:10:51Z.
- **Anatomy:** Bhattathiri is seated at lower left, looking toward one seated Vishnu murti in Vaikuntha at upper right. Each is one coherent, single-headed figure with two arms and two legs; no extra or duplicated person is present.
- **Faces:** Both faces are intact and distinct in crops x=10–470, y=290–920 and x=1080–1650, y=0–680. Bhattathiri appears older and clean-shaven with ash stripes and a small tuft.
- **Hands/feet:** Bhattathiri’s joined prayer hands are attached and coherent; overlapping fingers do not show an extra digit. Vishnu’s lap hands overlap naturally, without a detached or fused digit. Both visible Vishnu feet show five toes each in the enlarged crop. Bhattathiri’s folded feet are concealed beneath the cream dhoti, as disclosed at `d099.json:296`.
- **Clothing and cast:** Bhattathiri’s bare torso, sacred thread, beads and cream dhoti are modest traditional dress; the murti wears yellow and orange traditional cloth and painted-ochre jewelry. The murti has a peacock-feather crown fully in frame. Layered necklaces and armlets are visible on the torso and arms, ordinary iconography with no explicit prohibition. Only the two required people appear.
- **Text/signature artifacts:** No text, signature, logo or watermark appears; enlarged lower ground/wave and all four corner crops show only mural patterns and landscape.
- **Scene/caption fidelity:** Bhattathiri chants below three restrained world bands, gazing toward quiet Vaikuntha and a single seated Vishnu. This follows caption #5 and avoids reproducing the reference’s veena-playing figure and forest pose. No beams or rays are present.
- **Character/deity contract:** Bhattathiri’s older identity markers are present. Vishnu has one face and two arms, an intact crown and feet. The cheek and torso appear slate-blue/gray rather than deep blue; the selected-candidate status at `d099.json:296` discloses the measured Murti tone deviation and Bhattathiri’s warmer-than-target skin reading. I confirm the muted slate-blue/gray appearance in the enlarged murti crop. Neither observation masks a structural defect.
- **Verdict: pass — disclosed deviation present.** Bhattathiri’s concealed feet and both skin-tone deviations are disclosed; no separate defect observed.

## Recommendation and inventory

All five exact candidate versions pass this visual review, with the disclosed deviations stated above. Keep them **unapproved**; this report does not grant art approval or update `art/approved/d099.json`. The full image review found no undisclosed anatomy, face, digit, clothing, text/signature, scene-element, or contract defect that meets the needs-fix threshold. Recommendation: retain these selected exact bytes for the chapter review gate, with the disclosed foot visibility and muted murti skin-tone observations visible to the human approver.

I independently inventoried the review for captain calls. **The inventory is empty.** The pending captain art approval is the standing state and is not a decision raised by this review.

## Commands and observed output

Commands used (absolute paths abbreviated here only for readability):

- `sha256sum` on all five candidate files and all ten frozen contract files. Every actual SHA-256 matched the expected value in the task brief; the selected candidates were hashed again after visual review and remained identical.
- `identify <selected candidate>` returned the native dimensions listed above (all approximately 16:9, 1671–1672×941 px).
- `magick <selected candidate> -crop ... +repage <scratch crop>` produced the focused review crops; the crops were opened at original detail. Four-corner mosaics were also produced and inspected for marks; scratch files were removed.
- `cat`/Python JSON reads of the frozen plan, chapter content and required contracts; `cat` of the supplied captions file; visual opening of `intake/D099/001.jpg`–`005.jpg`.
- The initial and final steering-inbox checks found no pending `.msg` files.

No approval manifest or project file was edited. The sole persistent deliverable is this report, outside the disposable worktree.

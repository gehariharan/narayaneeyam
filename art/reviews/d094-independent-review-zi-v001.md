# D094 independent visual review

## Scope and method

I independently inspected the seven selected landscape candidates at native resolution and in focused enlargements, compared each with its mapped raw reference photo and the matching final plan stanza, and checked the relevant character contracts. The review is bound to the exact image, plan, and contract bytes listed below. Review time for each candidate: **2026-11-18 05:10:04 UTC**. This report does not approve any artwork; all candidates remain unapproved.

The frozen plan stanza numbers and requirements are at `art/plans/d094.json:30,78,302,358,406,462,516`; the content stanza sequence is `content/daskams/d094.json:17,27,67,77,87,97,107`; the photo mappings are `content/sources/d094/reference-map.json:12,21,57,66,75,84,93`; caption entries are `intake/D094/photo-captions.txt:3,8,28,33,38,43,48`. These map stanza N to `intake/D094/00N.jpg` for the selected stanzas. I read `STUDIO.md` and the frozen series bible and relevant character contracts before inspection.

I generated the checksum lists programmatically in `.review-scratch/checksums.sha256` and `.review-scratch/contracts.sha256`, then ran `sha256sum -c` on both. Every listed candidate, reference, contract, map, and caption file returned `OK`. I opened the seven original candidates and seven mapped photos with `view_image`. Focused crops/enlargements were produced with `magick <input> -crop ... +repage` into the absolute path `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/.review-scratch/crops/`; no input was modified. `magick identify` reported candidate dimensions of 1672x941 for S001, S002, S006, S007, S008, S009 and 1671x941 for S010. Skin patches below are 11x11 pixel medians from the candidate itself, measured with ImageMagick; coordinates are the patch centers.

### Verified frozen contract hashes

| File | SHA-256 |
|---|---|
| `art/plans/d094.json` | `17012e1dc633937610b524cd1c5f5e9f88142fcfb89d3ceb52fd114ae573f535` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `content/sources/d094/reference-map.json` | `8642034f80398172e7e1a25c1c4d91606f7fe540d998c3f6665d6fcd7ffbefdb` |
| `intake/D094/photo-captions.txt` | `8b040f7e5f008a9d3b3d826c93b05c5810f25cadf043ea0930de8a4cc970aacb` |

## Image findings

### Stanza 1 — v001

- Candidate SHA-256: `30295f3021ad8ab1a0ae0824eddae8fa013b2c6e99863ce9e3144a4fda2b0260`
- Reference: `intake/D094/001.jpg`, SHA-256 `10f05f5150d6abcc4766091f1cd1be881a78fd2f5cdeda2c8317b5f4d25fd190`
- **Anatomy:** No people or creatures are present; there are no limbs, hands, or feet to assess.
- **Faces:** None.
- **Hands/feet:** None.
- **Clothing and cast:** No human cast or clothing. No unplanned figure appears.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including in the lower ground/log area and corners.
- **Scene and caption fidelity:** The reference is a galaxy spiral. The candidate uses a broad quiet cosmic spiral and stars as context, with three distinct log groups carrying different-sized flames at the lower right. It conveys the caption’s variable flames and all-pervading presence without copying the source’s digital glow or adding unsupported text/figures. The fire remains visibly separate from the cosmic field.
- **Character/deity contract:** No named character or deity is required or depicted.
- **Verdict: pass.**

### Stanza 2 — v004

- Candidate SHA-256: `bcae22a4383d09b83fd628d773225a09bff35a9a6c39a640f0a5e62f34f44498`
- Reference: `intake/D094/002.jpg`, SHA-256 `e5fd4c71ad556c15d4f8e5d4a8f6418c1298d2452e7da35467e2d0805018b39c`
- **Anatomy:** Exactly two separate seated people, each with one head, two connected arms and two legs. Enlarged views show four distinct feet, each with five toes. The crossed aranis, small contact fire, and separate burning branch tangle are distinguishable.
- **Faces:** Both faces are coherent and directed toward the teaching interaction; neither is duplicated or malformed.
- **Hands/feet:** Both hands on each person are visible and distinct, with five digits per hand. All four visible bare feet show five toes.
- **Clothing and cast:** Guru and disciple wear modest traditional wraps. Their exposed upper torsos are ordinary traditional dress. No additional person or sexualized framing. Independent skin medians: guru cheek center (550,210) RGB (160,86,45), R−B 115; guru torso (410,320) (152,75,38), R−B 114; disciple cheek (1290,220) (153,80,43), R−B 110; disciple torso (1260,340) (147,76,39), R−B 108. These read as natural muted warm-brown, not orange, and are below the plan’s approximate 120 target.
- **Text/signature artifacts:** No readable marks, text, signature, logo, or watermark.
- **Scene and caption fidelity:** The mapped reference’s teacher/student action is retained, while the plan’s foreground crossed sticks, contact fire, separate brushwood, and quiet clearing are present. No unsupported story element is apparent.
- **Character/deity contract:** These are two generic people, not recurring identities; their count and dress follow the stanza plan. No deity appears.
- **Verdict: pass.**

### Stanza 6 — v013

- Candidate SHA-256: `2963a6822bb223a8fc00b99a1745817a8fde02a817ac6636b451bd41d04c1de1`
- Reference: `intake/D094/006.jpg`, SHA-256 `5364ee0c217509f0d0d8abd0c504cba22b86dfde92e64c3642f4df42e2ed0770`
- **Anatomy:** One Bhattathiri and one blue Bhagwan. Bhattathiri’s namaste hands join naturally; one foot is exposed and the other leg/foot is tucked. Bhagwan has exactly two attached arms and two visible feet.
- **Faces:** Bhattathiri’s older clean-shaven face and the deity’s serene face are coherent. Bhattathiri retains the shaved scalp, small rear tuft, and forehead ash markings. No duplicated or malformed face.
- **Hands/feet:** Bhattathiri’s joined hands have no visible extra digits; his exposed foot shows five toes. Bhagwan’s two open hands each show thumb plus four fingers; each visible foot shows five toes.
- **Clothing and cast:** Bhattathiri wears the simple cream dhoti, sacred thread, and restrained beads; the bare upper torso is ordinary traditional dress. His skin reads warm-brown. Independent 11x11 skin medians: cheek center (410,270) RGB (167,93,53), R−B 114; torso (370,420) (166,94,56), R−B 110. Bhagwan’s blue skin and yellow/red-orange clothing fit the Guruvayurappan contract. Its crown and jewelry are ornate temple iconography consistent with the character contract and the other selected deity scenes.
- **Text/signature artifacts:** No readable text or signature. The closed palm-leaf teaching has a few tiny short marks/lines visible on its surface, but none resolves as writing at enlargement; no watermark or logo is visible.
- **Scene and caption fidelity:** The prayer before the deity, palm-leaf teaching between them, and clean water vessel are visible. The reference’s woman-at-shrine pose and glossy lighting are not copied. The deity remains single and the scene is calm.
- **Character/deity contract:** Bhattathiri’s older clean-shaven continuity is maintained. Bhagwan is one blue, two-armed figure with both arms attached; no scripture-specific multi-arm form is requested here.
- **Verdict: pass.**

### Stanza 7 — v004

- Candidate SHA-256: `b8b76fe0985c5a89aa381e61496c42c443b300969dc539ca31d733901a15486e`
- Reference: `intake/D094/007.jpg`, SHA-256 `3944b0be1b775dfea9612938fe0e66e5ca6ef4e50aaa419a098ab4f455572c50`
- **Anatomy:** No human figures. The single cow has a coherent head, body, tail, and four connected legs with four distinct hooves in the enlarged lower-body view; no extra or fused legs are apparent.
- **Faces:** The cow’s single face is calm and anatomically legible.
- **Hands/feet:** No human hands or feet. Four cow hooves are visible and distinct.
- **Clothing and cast:** No people or clothing. The cow appears healthy and cared for, not mocked.
- **Text/signature artifacts:** The open two-leaf manuscript is blank and uniformly pale tan at enlargement; no letters, ruled lines, or repeated marks are visible. No signature, logo, or watermark.
- **Scene and caption fidelity:** The reference’s study motif is adapted into an unmarked manuscript beside a healthy, unmilked cow. The empty red bowl and flower provide the plan’s quiet speech symbol; no deity is added.
- **Character/deity contract:** No named character or deity appears; none is required.
- **Verdict: pass.**

### Stanza 8 — v009

- Candidate SHA-256: `4c3b23a1add1254999584e0ad8b00f9c23aee9473af3e07052e24859e51514de`
- Reference: `intake/D094/008.jpg`, SHA-256 `640d12c6e29e3b9d273c725216576a36db3a84b86a55e43622e3145ecbe3dd30`
- **Anatomy:** One Bhattathiri and one Bhagwan; both have coherent connected bodies. Each has two arms. The three distinct footprint pairs at the lower edge are symbolic marks, not extra people or limbs.
- **Faces:** Bhattathiri’s older clean-shaven face and the deity’s serene face are legible and nonduplicated.
- **Hands/feet:** Bhattathiri’s two open hands each show thumb plus four fingers; one exposed foot shows five toes and his other leg/foot is tucked. Bhagwan’s two open hands each show thumb plus four fingers, and both visible feet show five toes.
- **Clothing and cast:** Bhattathiri wears modest cream Kerala clothing, sacred thread, and modest beads. His bare upper torso is ordinary traditional dress. Independent 11x11 medians: cheek center (362,320) RGB (153,107,78), R−B 75; torso (310,460) (166,91,57), R−B 109. The observed skin reads natural warm-brown, not orange. The deity’s blue skin and yellow/red-orange clothing fit the contract; ornate temple jewelry is consistent with the contract and the other deity scenes.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark. Veena strings and detailing are not writing or notation.
- **Scene and caption fidelity:** Bhattathiri worships before Bhagwan; the small offerings, at-rest veena, and separate footprint pairs leading toward the shrine are present. The source’s large gathering and watermarked floating deity are not copied.
- **Character/deity contract:** The older clean-shaven Bhattathiri identity is maintained. One Guruvayurappan is shown; no extra arms or figures.
- **Verdict: pass.**

### Stanza 9 — v005

- Candidate SHA-256: `0819104ff28151e82c7af260792a2e655c4608ce2b9ac05c4cba8f0089b76a43`
- Reference: `intake/D094/009.jpg`, SHA-256 `d7acddd47035fdecc39904ce757cb0d1d920dbc879d19ddaab6110eb2af41401`
- **Anatomy:** Bhattathiri has one coherent body with two arms and two visible feet. The deity has exactly four attached arms and four distinct hands; the four-arm form is intentional and matches the plan.
- **Faces:** Bhattathiri’s older clean-shaven face is coherent. The deity has one coherent face; no duplicated or malformed features.
- **Hands/feet:** Bhattathiri’s lowered hand and broom-gripping hand are attached and distinct; both visible feet show five toes. The deity’s four hands hold distinct attributes (chakra, conch, lotus, gada); no extra hand is apparent.
- **Clothing and cast:** Bhattathiri wears a modest cream dhoti, sacred thread, and beads. His bare upper torso is ordinary traditional dress. The plan discloses a warm-brown skin deviation. My independent skin-only 11x11 medians are cheek center (430,155) RGB (169,87,49), R−B 120; chest (390,260) (180,93,55), R−B 125; and adjacent chest patch (410,260) (180,93,54), R−B 126. Thus the disclosed numeric deviation is present in the chest patches. At full image size, the skin reads as warm, somewhat ruddy brown rather than saturated orange. The deity’s crown and ornaments are detailed but remain within the same traditional temple-murti vocabulary visible in S006 and S008; I do not see clearly palace-like regalia beyond those other scenes.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark.
- **Scene and caption fidelity:** The foreground sweeping service, small offering, sun and oil lamp motifs, and single four-armed blue deity are present. The mapped reference’s four-armed iconography is used as context; this is a distinct scene with no second deity. The shrine surround is ornate, but it does not obscure the service action or introduce an unsupported figure.
- **Character/deity contract:** Bhattathiri remains the older clean-shaven devotee. Bhagwan’s four visibly attached arms match the explicit stanza-specific form; the other deity scenes’ two-arm forms are not a conflict.
- **Verdict: pass.** The skin-color measurement deviation is reported above; I find no separate viewer-noticeable defect under the review standard.

### Stanza 10 — v006

- Candidate SHA-256: `6d82f5fed8b3b8b6b5cbedfbd32dcd15d8df79a2caff495ab990a7eeb1aa9bda`
- Reference: `intake/D094/010.jpg`, SHA-256 `536b8d31cb933bfada7d62ca9478f0e24937953cc016a0e1b94d57a1cb16435f`
- **Anatomy:** One youthful Krishna and four distinct adult gopikas. Each has one coherent face, two attached arms, and two legs; bodies remain separate. No duplicated person or fused body.
- **Faces:** All five faces are legible and individually distinct. Krishna is clearly youthful, not infant-like; the gopikas have distinct expressions.
- **Hands/feet:** All ten visible hands show thumb plus four fingers. Eight visible gopika feet and Krishna’s one visible foot each show five toes; no face or key extremity is cut off. (The remaining Krishna foot is naturally concealed by his seated pose.)
- **Clothing and cast:** The gopikas wear modest, fully covered village saris with simple jewelry; no palace finery or sexualized framing. Krishna wears a yellow dhoti and muted red-orange shawl. His forehead is plain; the single low gold band and one upright feather are present. Independent 11x11 cheek medians for the four gopikas: green sari center (410,210) RGB (167,100,56), R−B 111; pink sari (210,435) (183,109,63), R−B 120; red sari (1290,220) (162,97,55), R−B 107; yellow sari (1455,420) (180,107,63), R−B 117. These read as natural brown tones; none appears orange. Krishna’s deep matte blue skin is distinct from the women’s skin.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the water, grass, corners, or clothing.
- **Scene and caption fidelity:** The reference’s love-and-union motif is recast as Krishna among a small group of gopikas, with a central lotus and separate bodies. The reflection staging, branding, and text from the source are absent.
- **Character/deity contract:** Krishna has one face, two arms, and two legs; his plain forehead and low band/one feather satisfy the Vrindavan-youth contract. Gopikas are distinct adult women in ordinary village dress.
- **Verdict: pass.**

## Recommendation and captain-call inventory

All seven exact-checksum candidates pass this independent visual review. The measured S009 chest skin deviation is disclosed above; the figure reads as warm ruddy brown rather than orange, and the rest of the image has no viewer-noticeable defect under the stated gate. Keep every image unapproved; this review changes no approval manifest. I found no unresolved captain decision raised by this review. The pending captain art approval remains the standing state and is not part of this review’s inventory, so my captain-call inventory is empty.

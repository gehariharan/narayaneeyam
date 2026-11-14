# D035 landscape candidate visual review — stanzas 1–5

## Scope and method

I independently reviewed the five selected landscape candidates against the frozen final plan, applicable character contracts, series bible, chapter content, mapped intake reference photos, and the captions in `intake/D035/photo-captions.txt`. I did not read prior review records or producer notes. The frozen plan maps these reference sets: s001 → 001–003 (plan lines 61–64); s002 → 004–005 (118–120); s003 → 006–010 (172–177); s004 → 011–012 (230–232); s005 → 013–015 (287–290). I opened every mapped photo individually and used the captions at headings 001 (line 1), 004 (14), 006–010 (23–40), 011–012 (44, 49), and 013–015 (53, 58, 62). The related chapter-content stanza records are lines 15–55.

For each candidate I verified SHA-256 before opening it, inspected its complete 1672×941 image at native resolution, then inspected focused native-pixel crops made from the read-only original into `/tmp/d035-review-l-crops/`. The crops covered faces, hands, feet, limb connections, the main action, and image edges/corners. The crops were made with ImageMagick `magick <candidate> -crop <width>x<height>+<x>+<y> +repage <scratch-file>`; no candidate or intake file was written or converted. I used `sha256sum` for integrity checks and `view_image` for full-frame and crop inspection. The candidate SHA-256 values were checked again after review and matched the values below. Plan stanza ranges are 34–86 (s001), 90–142 (s002), 146–199 (s003), 203–254 (s004), and 258–312 (s005). Applicable character rules are in the frozen character files identified below. None of the five selected plan entries discloses a remaining deviation.

## Frozen contract SHA-256 values

All actual values below matched the expected values in the task brief.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d035.json` (final frozen plan) | `6fdf123b81911ce026f204d233bf93d29476b904d37c78726d4f87ec79905942` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/d035-bhudevi-earth-presence/character.json` | `3da96070c892943c6e61b40f9cb6568f0a5421a39ffc88af62468c5f38d863d6` |
| `art/bible/characters/d035-ravana-final-battle/character.json` | `3e943e2c79006bf5805879f3a397209511e7cf7769a7a426ef8f3d92e41210c0` |
| `art/bible/characters/garuda/character.json` | `574f6ce4c4488129b475bf6967dd8e0219e16bb213a27212f4fd35d446755035` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/hanuman/character.json` | `f9293002bf7389ea3bee583a5cd2c4f4d5b20642ae44a6590ce0c614e244b8a9` |
| `art/bible/characters/kusha/character.json` | `3a1f6781869fa91d1efb597bb78a5108562b3228b5a4cf7eda65fa7b4b62740d` |
| `art/bible/characters/lakshmana/character.json` | `51f7a4f47deb0affa85d261ab4e60fcd39d733f80dd6724a739f033a6f20ae54` |
| `art/bible/characters/lava/character.json` | `80b3be7571d3e3944183e7826701a81ce3c7fb2bb19c2a364d8d957689ba4411` |
| `art/bible/characters/rama/character.json` | `6cddaa94cec95d18971ae728ec1dce2a77e99f5b673d1e17353d4df030912063` |
| `art/bible/characters/samudra-raja/character.json` | `7a98b2c763af44f43f2fe4be3b590f41b5df8cc91048137bec6685890d862d0b` |
| `art/bible/characters/sita/character.json` | `90c9f8b261e2515b3df07df1c2f08fc0e75482b60ac75d0ab006e44f72b361f6` |
| `art/bible/characters/sugriva/character.json` | `5e907c9dc2ed7624f792bb70918ae02bb0d9a54ba381268c6d09e9397ee51a23` |
| `art/bible/characters/valmiki/character.json` | `5b77ee80de484ac50a883da4e83605c266214cfb6c4c6cb2fc4deaece69fb4ae` |
| `art/bible/characters/vibhishana/character.json` | `f6843ce13ff7e3c3c15b88a59c332a1a972462e1932a7959921e4bfe8cc517ff` |

## Candidate findings

### Stanza 1 — `d035-s001`, landscape v002

- **Candidate:** `artifacts/d035/s001/landscape/candidate-v002.png` — 1672×941; SHA-256 `45d49fa251270e61b293c911e64894bb8629d0c474815d962cfb4079caa7a7ee`.
- **Inspected:** 2026-11-14 23:12:36 UTC.
- **Anatomy:** Rama, Sugriva, and Hanuman each show two connected arms and two legs. Sugriva and Hanuman each have one tail attached at the lower back; no fused figures, duplicate people, or malformed bodies are visible.
- **Faces:** Rama has a composed face; Sugriva and Hanuman have distinct simian faces. No facial distortion is apparent.
- **Hands/feet:** The bow draw, bow grip, and the witnesses’ joined hands remain connected. Focused views of the hands and feet show no extra, fused, or visibly missing digits; the visible feet are inside the frame.
- **Clothing and cast:** Ochre/cream dhoti and sash on Rama; restrained vanara cloth and ornaments on the two witnesses. Bare vanara torsos are ordinary traditional dress. No sexualized framing.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the image, including the corners, ground, and foliage.
- **Scene and caption fidelity:** One continuous forest scene, seven distinct shala trunks in a row, and one continuous arrow visibly passing through them. Sugriva and Hanuman witness the demonstration. The image isolates the strength demonstration from the broader episodes in caption 001 as required by the plan (lines 34–86).
- **Character/deity contract:** Rama has muted blue skin, a practical topknot, and no peacock feather. The vanaras have attached tails and the expected two-arm/two-leg anatomy. No contract prohibition is violated.
- **Verdict: pass.**

### Stanza 2 — `d035-s002`, landscape v002

- **Candidate:** `artifacts/d035/s002/landscape/candidate-v002.png` — 1672×941; SHA-256 `ead2bcc293016e961d99a1ce6fb95775dc4cb7da17a4384133f6305d479c4368`.
- **Inspected:** 2026-11-14 23:12:36 UTC.
- **Anatomy:** Rama, Lakshmana, Sugriva, and Hanuman each show two connected arms and two legs. Hanuman and the background vanaras have attached tails. The small search party remains distinct and orderly; no fused or duplicated figures are visible.
- **Faces:** The principal faces are clear and distinct; Hanuman and Sugriva are simian, while Rama and Lakshmana are human. No malformed face is visible.
- **Hands/feet:** Rama’s hand places one ring directly onto Hanuman’s open palm; the fingers remain connected and the ring is readable as a single object. The other hands, feet, and the search party’s visible extremities show no noticeable digit or attachment defect.
- **Clothing and cast:** The figures wear traditional dhotis, sashes, and modest ornaments. Rama wears a tiered crown and layered jewelry; this is ordinary temple-mural ornamentation and is recorded as an observation. No exposed skin beyond traditional dress or sexualized framing.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark, including the image edges and ground.
- **Scene and caption fidelity:** The foreground ring handoff is clear, with Lakshmana and Sugriva beside Rama and a small vanara search party departing along the forest path. This matches plan lines 90–142 and the handoff/search details in caption 004; the direct reference photo 005 also depicts the ring exchange.
- **Character/deity contract:** Rama is muted blue without a peacock feather; Hanuman has a simian face, two arms, two legs, and one continuous tail. The visible crown ornament does not violate an explicit prohibition.
- **Verdict: pass.**

### Stanza 3 — `d035-s003`, landscape v001

- **Candidate:** `artifacts/d035/s003/landscape/candidate-v001.png` — 1672×941; SHA-256 `889a2ff831e2ed5243ba35b4e4f53ade30be6f1addf8f53bde94b4ec7abb5468`.
- **Inspected:** 2026-11-14 23:12:37 UTC.
- **Anatomy:** Sita and Hanuman each show two connected arms and two legs. Hanuman’s single tail is attached and continuous. Neither figure is duplicated or fused; no other person intrudes into the exchange.
- **Faces:** Sita’s face is serene and Hanuman’s is recognizably simian; neither is malformed.
- **Hands/feet:** The upper exchange shows Hanuman placing Rama’s ring on Sita’s open palm; the lower exchange shows Sita returning her hair jewel to Hanuman’s open hand. Both object-to-hand contacts are clear. The focused hand crop shows distinct fingers without extra or fused digits. Hanuman’s feet and Sita’s visible foot remain inside the frame; no visible foot/digit defect.
- **Clothing and cast:** Sita wears a modest cream sari with an ochre veil; Hanuman wears a dhoti and traditional ornaments. Hanuman’s tiered crown and layered ornaments are ordinary temple-mural iconography, recorded as an observation. No sexualized framing.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the image or its corners.
- **Scene and caption fidelity:** Two figures exchange ring and hair jewel beneath a flowering garden tree. The image does not combine the crossing, court, or burning-Lanka episodes listed in caption 006; this correctly follows plan lines 146–199 and the direct exchange reference 010.
- **Character/deity contract:** Sita is an adult woman in traditional dress; Hanuman has the required simian face, two arms, two legs, and one attached tail. No extra arm or prohibited depiction is visible.
- **Verdict: pass.**

### Stanza 4 — `d035-s004`, landscape v004

- **Candidate:** `artifacts/d035/s004/landscape/candidate-v004.png` — 1672×941; SHA-256 `2dc85305ca5f0b777c3f1cddf59ae1f880241ae0871caeb6c6462354aa2320e1`.
- **Inspected:** 2026-11-14 23:12:37 UTC.
- **Anatomy:** Rama and Vibhishana each show two connected arms and two legs. Samudra Raja has two joined hands and a naturally emerging torso; his lower body is hidden by water. No disconnected limbs, fused bodies, or duplicated figures are visible.
- **Faces:** Rama, Vibhishana, and Samudra Raja have distinct, clear faces; Vibhishana is clean-shaven and Samudra Raja is a separate mature figure.
- **Hands/feet:** Rama’s hands remain connected to the bow and arrow; the arrow is continuous and the flame sits at its tip. Vibhishana’s joined hands and Samudra Raja’s joined hands are visibly connected. Rama’s and Vibhishana’s feet are within the frame, without a visible digit defect.
- **Clothing and cast:** Rama and Vibhishana wear traditional dhotis and sashes; Samudra Raja wears a crown and ornaments above the waterline. The crowns and necklaces are ordinary mural ornamentation. No sexualized framing.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark, including waves, ground, and corners.
- **Scene and caption fidelity:** The continuous shoreline composition shows Vibhishana beside Rama, Rama holding a lowered bow and a restrained fire-tipped arrow, and Samudra Raja rising from the sea in a respectful gesture. It combines the planned cues from reference photos 011 and 012 without destructive fire or a separate panel, matching plan lines 203–254 and caption 011.
- **Character/deity contract:** Rama retains muted blue skin and no peacock feather; Vibhishana has a human face and no demonic extra heads/arms; Samudra Raja’s visible arms are connected and correctly count to two. No explicit prohibition is violated.
- **Verdict: pass.**

### Stanza 5 — `d035-s005`, landscape v004

- **Candidate:** `artifacts/d035/s005/landscape/candidate-v004.png` — 1672×941; SHA-256 `1f2fd236dc066eb5afe9a2abf2b13cec646698c7443694cfa9576d4184137abd`.
- **Inspected:** 2026-11-14 23:12:37 UTC.
- **Anatomy:** Rama and Lakshmana each show two connected arms and two legs; naga coils cross and wrap their torsos and legs. Garuda has a connected bird body with two attached wings and two taloned feet. Both wing tips are fully inside the frame with clear margin. No fused people, duplicate figures, or serpent heads fused to faces are visible.
- **Faces:** Rama and Lakshmana are distinct, with muted blue and warm-brown skin respectively. Garuda has one clear eagle face with a hooked beak. No malformed or duplicated face is visible.
- **Hands/feet:** Both brothers’ arms, hands, legs, and feet can be followed in the focused crop; no extra limb or visibly fused/missing digit is apparent. The brothers’ visible toes are separately drawn. Garuda’s talons connect to the bird legs and contact the coils; no disconnected hand/limb is visible.
- **Clothing and cast:** Both brothers wear traditional dhotis and mural-style crowns/ornaments; their bare torsos are ordinary traditional depiction, with no sexualized framing. A small group of vanara allies watches at the left without obscuring the main action.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark in the full image, corners, ground, or background.
- **Scene and caption fidelity:** The image isolates Garuda’s arrival and the loosening of the naga bonds from the larger bridge-and-battle caption. Coils visibly bind both brothers; Garuda’s full wingspan is shown. This follows plan lines 258–312 and reference photo 015; photos 013–014 provide the broader bridge/binding context.
- **Character/deity contract:** Garuda follows the selected bird form from the stanza-5 reference: hooked beak and exactly two attached, continuous wings. Rama and Lakshmana have two arms and two legs each. No extra wing, arm, or forbidden depiction is visible.
- **Verdict: pass.**

## Review conclusion

All five verdicts apply only to the exact candidate SHA-256 values listed above. This independent review found no defect meeting the stated needs-fix threshold. The review does not approve any art or change `art/approved/dNNN.json`. The pending captain art approval remains the standing state; this review raises no captain decision, so my captain-call inventory is empty.

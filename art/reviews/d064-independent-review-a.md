# D064 landscape candidate visual review

**Reviewer:** independent review worker `d064-review-a`  
**Review time:** 2026-11-16 03:28:39 UTC (final inspection/checksum verification)  
**Scope:** landscape candidates for stanzas 1–5 only. Each verdict applies only to the candidate SHA-256 listed below. This review is not art approval.

## Review method and evidence

I verified each selected candidate hash before opening it, read the frozen plan and all listed frozen character/series contracts, and mapped each stanza to `001.jpg`–`005.jpg` using the stanza `reference_paths` in the plan and `commentary_source` in `content/daskams/d064.json`. I opened each reference and each complete candidate at native resolution, then made enlargements of faces, hands, feet, cow anatomy, the elephant's head/tusks, the udder/milk stream, and frame edges from read-only copies under `.d064-review-scratch/`. I inspected corners, grass, ground and water for lettering, signatures or watermark-like marks. The scratch copies and crops were deleted after inspection.

Commands/evidence: `sha256sum` on all five candidates and the nine frozen contracts; `identify` reported PNG dimensions 1672×941 for S001, S002, S003 and S005, and 1671×941 for S004; `magick` copied each candidate into task-local scratch and generated detail crops; `view_image` opened every native candidate, the five mapped reference photos and the detail crops. The observed image checks include S001 raised hand (native region approximately x=1020–1140, y=225–275) and lower frame (x=1450–1671, y=875–940); S002 people/hands/feet; S003 bow, joined hands, Krishna's feet and all Surabhi legs; S004 both animal heads, all visible tusks, Krishna/Indra hands and the udder stream; S005 people, cattle, hands and the bottom edge.

Relevant frozen plan locations: continuity and palette contract, lines 20–43; stanza 1, lines 55–95; stanza 2, lines 104–150; stanza 3, lines 152–198; stanza 4, lines 200–248; stanza 5, lines 250–end. The relevant character rules are Krishna `character.json` lines 27–63, Nandagopan lines 16–34, gopas lines 15–29, Indra lines 12–20, Surabhi lines 10–20, and Airavata lines 10–20. The plan's S001–S005 `candidate_status` entries disclose the remaining visual/provenance deviations (S001 line 92; S002 line 140; S003 line 188; S004 line 237; S005 entry in the final stanza block). Those notes are reported below. No producer note or existing review record was read.

### Frozen contract file hashes

All actual hashes below matched the expected values in the review brief.

| Frozen contract | SHA-256 |
|---|---|
| `art/plans/d064.json` | `bec3dc1102f9ae03e03171857ad4e59823ec0da711610f438021debf627022f9` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `characters/d064-varuna/character.json` | `86d8c71fa5d46c86863d527f756c53fa998512ce1ec15ef82ee73b5e720f7e3e` |
| `characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |

### Skin-patch check

For human skin I sampled multiple 15×15-pixel patches from the scratch copies, checked the enlarged crops for skin-only content, and took channel medians. The plan's series rule says ordinary human skin should read warm brown and gives red-minus-blue under 120 as a sampling target; its Krishna rule calls for deep indigo-blue and blue-minus-red at least 40 (plan lines 41–42). The following orange-brown readings are disclosed in the corresponding plan status. They visibly read copper/orange in the full candidates; they are recorded as disclosed findings and do not independently fail a candidate under the stated review rule.

| Image | Figure and sample locations (native x,y) | 15×15 median RGB samples |
|---|---|---|
| S001 | Krishna cheek (1280,400), (1285,410); Nandagopan face (665,420), (680,430) | Krishna (31,36,82), (30,38,88); Nanda (179,90,25), (176,89,26) |
| S002 | Krishna blue skin (555,340), (545,370); Nandagopan (1220,280), (1220,300); gopa (720,270), (740,285) | Krishna (37,39,87), (32,47,105); Nanda (199,108,34), (195,105,33); gopa (195,107,36), (197,108,36) |
| S003 | Krishna face (1200,170), (1200,180); Indra (950,720), (980,760) | Krishna (29,47,110), (33,46,104); Indra (192,99,31), (168,85,25) |
| S004 | Krishna blue skin (840,465), (840,470); Indra face (1180,405), (1180,415) | Krishna (39,46,76), (38,41,74); Indra (196,110,45), (195,110,45) |
| S005 | Krishna blue skin (515,315), (520,320); Nandagopan (880,300), (870,305); gopa (1150,300), (1155,310) | Krishna (41,58,95), (39,57,96); Nanda (192,106,33), (205,115,38); gopa (198,112,35), (202,113,37) |

The samples support the visual reading: Krishna remains blue; Nandagopan/Indra and the cited S002/S005 gopas read copper-orange. S001's disclosed Nanda median is RGB(181,91,26), S002's disclosed Nanda/gopa medians are RGB(198,108,35) and RGB(192,105,35), S003's disclosed Indra sample is RGB(204,100,5), S004's disclosed Indra sample is RGB(193,108,43), and S005's disclosed Nanda/gopa samples are RGB(200,110,35) and RGB(93,56,31). Some independent patch medians vary with the sampled location, but the visible warm orange cast is clear and is disclosed. The S001 left gopa is lighter, while the visible group remains within varied warm mural pigments.

## Candidate findings

### Stanza 1 — `d064-s001`, landscape v003

- **Exact candidate:** `artifacts/d064/s001/landscape/candidate-v003.png`  
  **SHA-256:** `b80c9e1e7b0168006b2cd4d39b57ce26ea72b87e7ecaf294aa7782fefa957899`  
  **Review time:** 2026-11-16 03:28:39 UTC
- **Anatomy:** One Krishna, one moustached Nandagopan and two distinct gopas appear beneath one coherent hill. No duplicated person, fused bodies or extra human limbs seen. Cattle anatomy is coherent in the visible foreground.
- **Faces:** The faces are individually distinct and readable at the checked crops. Krishna reads youthful; his forehead is plain. His headwear is a low band with one upright peacock feather. Nandagopan has the expected moustache and cream head cloth.
- **Hands/feet:** The raised hand at approximately x=1020–1140, y=225–275 is visibly malformed: the palm ends in a flat, two-pronged silhouette with no readable five-finger structure while it presses the hill underside. This is a prominent contact point in the full image, not a hidden limb or garment-edge convention. Krishna's lower feet are also partly cut by the bottom frame edge (approximately x=1585–1671, y=920–940); that crop is disclosed in the plan. The gopas' visible gesturing and joined hands are attached and legible; no additional digit defect found.
- **Clothing and cast:** Cream dhoti and muted olive/green or maroon cowherd garments are present; Krishna wears the contracted yellow dhoti and muted red-orange shawl. Ordinary mural jewelry is visible. No exposure or sexualized framing.
- **Text/signature artifacts:** None seen, including corners, grass, ground and water.
- **Scene and caption fidelity:** The broad hill, one raised Krishna, sheltered villagers and a gopa turning toward Nanda match the plan and caption. The palm touches from below. Photo `001.jpg` is a much denser devotional crowd; the candidate follows the plan's reduced distinct cast rather than copying that crowd.
- **Character/deity contract:** Krishna's one face, two arms, youthful blue form, plain forehead, low band and feather comply. Nanda matches the householder cues. The plan-disclosed orange-brown Nanda skin and partly cropped Krishna feet are present. The candidate status also discloses that the original v002 prompt/reference-argument bytes were overwritten; the candidate image is still inspected against the frozen final plan and contracts here.
- **Verdict: needs-fix.** The malformed raised hand is an undisclosed visible anatomy defect. The separately disclosed foot crop does not change this verdict.

### Stanza 2 — `d064-s002`, landscape v003

- **Exact candidate:** `artifacts/d064/s002/landscape/candidate-v003.png`  
  **SHA-256:** `59b01c0ff2057165552f0ae820adab9aac3e75987560a1f8fe7377b4ff04ff26`  
  **Review time:** 2026-11-16 03:28:39 UTC
- **Anatomy:** One Krishna, one Nandagopan and three visually distinct gopas; no duplicated Krishna, ghostly Garga, cloned faces, fused bodies or extra limbs seen. Cattle sit in the background without interfering with the human figures.
- **Faces:** Faces and expressions are coherent in the enlarged views. Krishna reads as the youthful cowherd; forehead plain, single low band and feather. Nandagopan's face is moustached and distinct from the listeners.
- **Hands/feet:** Nanda's speaking hand has a visible thumb and separated finger contours; his other hand rests naturally. Krishna's two hands rest across his raised knee and the second forearm/hand is connected. Krishna's visible feet show five toes each where exposed; no cut face or extremity found. The gopas' joined and resting hands show no obvious extra, fused or missing digits.
- **Clothing and cast:** Krishna's yellow dhoti and red-orange shawl, Nanda's cream/olive clothes, and muted gopa garments are present. No exposed skin beyond ordinary traditional dress or sexualized framing.
- **Text/signature artifacts:** No readable text, signature or watermark seen in corners or the scene.
- **Scene and caption fidelity:** Nandagopan speaks to a small attentive group, with Krishna nearby; no written prophecy, infant Krishna or extra sage appears. The village gathering corresponds to `002.jpg`'s communal devotional scene while keeping the plan's named cast and simpler composition.
- **Character/deity contract:** Human anatomy and Krishna's plain forehead, low band, single feather, age, two-arm count and matte blue skin comply. Nanda/gopa skin reads copper-orange, with sampled medians recorded above; this is disclosed. The plan also discloses overwritten original v002 prompt/reference-argument bytes and preserved v002 return/generation record; I reviewed the exact selected v003 bytes against the frozen contract.
- **Verdict: pass — disclosed deviation present.** Disclosed orange-brown skin and prompt-provenance note are the only deviations found.

### Stanza 3 — `d064-s003`, landscape v004

- **Exact candidate:** `artifacts/d064/s003/landscape/candidate-v004.png`  
  **SHA-256:** `8fef60deb7b7f3c908606ba16ae0f5c741b2619e3f3e84a907bd0473eab28cba`  
  **Review time:** 2026-11-16 03:28:39 UTC
- **Anatomy:** Krishna stands with one face and two attached arms. Indra has one head and two arms in the bow. Surabhi has one bovine head, two horns, four naturally attached legs/hooves and one tail. No duplicate or fused figure found.
- **Faces:** Krishna is youthful, serene and plain-foreheaded. Indra's face is legible in the bow; the crown touching Krishna's foot is an ordinary ornate devotional crown, with no unsupported peacock feather.
- **Hands/feet:** The enlarged bow crop shows Indra's hands connected at Krishna's foot and the full foot/toe shapes; Krishna's two feet remain inside the frame. No extra or missing digit, detached hand or malformed extremity found.
- **Clothing and cast:** Krishna's yellow dhoti/red-orange shawl and Indra's cream/saffron clothing are consistent with the plan. Surabhi is beside the bow. Indra's ornaments are matte painted ochre. No inappropriate exposure.
- **Text/signature artifacts:** None seen in the image or its edges.
- **Scene and caption fidelity:** Humbled Indra bows so his crowned head reaches Krishna's feet; Surabhi accompanies him. This follows the scene and `003.jpg` caption without a thunderbolt or spectacle.
- **Character/deity contract:** Head and arm counts, Surabhi anatomy, and Krishna's forehead/headwear comply. Indra's visibly copper-orange skin is the disclosed deviation (producer median RGB(204,100,5)); ordinary crown ornamentation is observation only.
- **Verdict: pass — disclosed deviation present.** The disclosed skin deviation is the only defect found.

### Stanza 4 — `d064-s004`, landscape v004

- **Exact candidate:** `artifacts/d064/s004/landscape/candidate-v004.png`  
  **SHA-256:** `d51975bd4e0c7929d13607a56568457663a8a7a22fa81197e8e7bf51df4fb086`  
  **Review time:** 2026-11-16 03:28:39 UTC
- **Anatomy:** Krishna has one head and two arms. Indra has one head and two arms. Surabhi is one four-legged cow with a visible udder and tail. Airavata has one elephant head and one connected trunk; the close crop shows four distinct tusks in two pairs rooted at the mouth, plus naturally attached legs. I do not observe the plan-status claim that only two tusks are visible; I count four in the actual candidate.
- **Faces:** Krishna's youthful face and plain forehead are visible under the low band/feather. Indra's face is composed and distinct. Both animals have coherent faces; Airavata's head is near the right edge but is not cut off.
- **Hands/feet:** Krishna's hands are joined/resting together in the seated ritual pose, with connected forearms. Indra's two hands hold the separate offering vessel. No obvious extra/missing digits or detached limb found. Airavata's peripheral body extends to the right frame edge; its face, trunk and tusks are intact.
- **Clothing and cast:** Krishna and Indra wear traditional garments; their crowns and layered jewelry are richly ornamented but matte painted. This is ordinary iconography and not a failure. No sexualized framing.
- **Text/signature artifacts:** No text, signature or watermark found in ground, flowers, water or corners.
- **Scene and caption fidelity:** Both offerings are legible: the elephant's Ganga water pours from its trunk over Krishna; Surabhi's milk clearly issues from the udder but flows down to the ground and does not join Krishna's abhisheka. Indra offers water separately. The disconnected udder stream is explicitly disclosed in the plan status. The scene maps to `004.jpg` and the caption.
- **Character/deity contract:** Head/arm counts, four tusks, cow anatomy and Krishna's plain forehead/headwear comply. Indra's copper-orange skin and the udder stream missing the recipient are disclosed deviations. Four visible Airavata tusks contradict the plan status's stated two-tusk concern; the actual image meets the four-tusk character contract.
- **Verdict: pass — disclosed deviation present.** The orange skin and udder stream ending on the ground are disclosed deviations. No additional visible defect found.

### Stanza 5 — `d064-s005`, landscape v003

- **Exact candidate:** `artifacts/d064/s005/landscape/candidate-v003.png`  
  **SHA-256:** `99ce80ac763736678343ecfff8b838c8e6308e89b650a8feac90843780ac9445`  
  **Review time:** 2026-11-16 03:28:39 UTC
- **Anatomy:** One Krishna, one Nandagopan, three distinct foreground cowherds and varied cattle are visible. No duplicate/cloned person or cattle, fused bodies or extra limbs seen. The distant field worker is a small, coherent village figure and does not replace or duplicate the foreground cast.
- **Faces:** The foreground faces are individually distinct and coherent. Krishna is youthful with plain forehead and one upright peacock feather. Nandagopan retains the moustache and cream head cloth.
- **Hands/feet:** Krishna's open gesture and hand resting on the cow are connected; the hand-to-cow contact is clear. Gopas' joined or chest-resting hands show no obvious extra or missing digits. Visible human feet are complete and remain just inside the bottom edge; cattle feet at edges are peripheral and naturally framed.
- **Clothing and cast:** The village group wears muted cream, olive and maroon garments; Krishna wears the contracted yellow and red-orange. Traditional clothing is modest. Crowns/jewelry are limited to Krishna's customary band and ornament; no sexualized framing.
- **Text/signature artifacts:** No readable text, signature or watermark seen, including top corners and field/ground.
- **Scene and caption fidelity:** Prosperous Gokula is shown through cultivated pasture, healthy cattle and well-kept homes rather than a palace or treasure. Krishna is among a small grateful group. This matches `005.jpg`'s devotional pastoral subject and the stanza plan.
- **Character/deity contract:** Krishna's form, headwear, plain forehead and two-arm count comply. Nanda matches his householder cues. Nanda's and one gopa's orange-brown skin is disclosed; their sampled medians are listed above. The cowherd clothing and group distinctness comply.
- **Verdict: pass — disclosed deviation present.** The disclosed warm orange-brown skin readings are the only deviations found.

## Recommendation and captain-call inventory

Keep S001 out of a cleared/published selection until its raised hand is revised and independently reviewed by exact checksum. S002–S005 pass this review only for the listed exact hashes; the pass verdicts do not approve art. The plan's S004 two-tusk note is not borne out by the crop inspection; four distinct tusks are visible. The standing captain art approval remains pending and is not a decision raised by this review. **Captain-call inventory for this review: empty.**

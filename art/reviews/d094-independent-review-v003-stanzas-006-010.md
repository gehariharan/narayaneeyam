# D094 landscape independent visual review

## Scope and method

I independently reviewed the five selected landscape candidates from their exact files at native resolution and in enlarged, locally cropped face, hand, foot, body, creature, prop, and scene regions. I compared the images against the frozen final plan, frozen series and character contracts, and each stanza’s mapped intake photo and caption. I did not inspect any prior D094 review record or producer note. This is visual review only; it does not approve artwork or update an approval manifest.

The plan maps stanzas 6–10 to `intake/D094/006.jpg` through `010.jpg` respectively (final plan stanza entries at `/home/gehariharan/firstmate-narayaneeyam-mate/data/d094-production/review-contract-d/art/plans/d094.json:287,342,390,446,500`; content stanza entries at `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/15/narayaneeyam/content/daskams/d094.json:67,77,87,97,107`; captions at `/home/gehariharan/OneDrive/Pictures/Narayaneeyam Studio/intake/D094/photo-captions.txt:26-48`). The photo captions were treated as context, not translations.

Evidence: I used a Python SHA-256 check against all supplied expected values before opening the candidates; all 12 files matched. `identify -format '%f %wx%h'` reported 1672×941 for s006–s009 and 1671×941 for s010. I opened each whole candidate with `view_image` at original detail and made focused crops with ImageMagick `magick <candidate> -crop <WxH+X+Y> +repage <scratch crop>`; the crops were also opened at original detail. Scratch crops are in the disposable review worktree under `.review-scratch/` and are not part of this report. For the D094 skin threshold checks, I read 11×11 RGB pixel patches and calculated per-channel medians from ImageMagick raw RGB output.

## Frozen contract SHA-256 values

All values below are the actual hashes of the exact frozen files read; each matched its expected hash.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d094.json` | `8d28c96f8725b2f367f55a1147d8735125d25b2d96780e56e7321cc3642f6d5b` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |

## Candidate findings

### Stanza 6 — v010

- **Candidate:** `artifacts/d094/s006/landscape/candidate-v010.png`
- **Verified SHA-256:** `6ad0147414bb9c53b06ea07a473b2330e6112ee723eb76b217c1d261b1277a3f`
- **Review time:** 2026-11-17T01:47:27Z
- **Anatomy:** One older devotee and one blue deity, each with one head. Both figures have connected, proportionate limbs; no fused or duplicated figure is visible.
- **Faces:** Bhattathiri is visibly older, clean-shaven, with the ash stripes and small rear hair tuft. The deity has one intact serene face. No malformed facial features seen.
- **Hands/feet:** The joined prayer hands overlap; five fingertip outlines are visible on the forward hand and the opposite hand is substantially occluded by the pose, with no visible extra or detached digit. The deity’s two open hands each show five digits. Bhattathiri’s exposed foot and both deity feet each show five toes; his other foot is tucked beneath the seated pose, not cut off.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread and restrained beads, with warm-brown skin. My 11×11 skin-only median patches at face (x=360,y=300) and torso (x=380,y=480) were RGB (126,74,46), R−B 80, and RGB (172,102,64), R−B 108. The deity wears yellow and red-orange garments, an ornate tiered crown and layered necklaces; these are ordinary devotional iconography and not prohibited by the plan or deity contract.
- **Text/signature artifacts:** The palm-leaf stack is unmarked; no readable text, signature, logo or watermark is visible, including on ground and corners.
- **Scene and caption fidelity:** The humble folded-hands request, one deity, unmarked palm leaves, clean water in an uncluttered vessel, and calm shrine-grove setting are visible. The mapped 006 photo’s devotional context is carried without copying its portrait framing or finish.
- **Character/deity contract:** Bhattathiri’s older clean-shaven identity and warm medium-brown tone are consistent. Guruvayurappan is blue, youthful and two-armed; the feather and feet remain inside frame.
- **Verdict: pass.**

### Stanza 7 — v001

- **Candidate:** `artifacts/d094/s007/landscape/candidate-v001.png`
- **Verified SHA-256:** `11bb5a512d5b5c71721aa29f05aedc47f6cbbfcd9c0d7abe1d6b80d6bbd62d85`
- **Review time:** 2026-11-17T01:47:27Z
- **Anatomy:** One cow with one intact head and four separate, connected legs ending in paired cloven hooves. The body and legs look natural; no duplicated creature.
- **Faces:** The cow’s eye, muzzle, ears and horns are intact; no person or deity appears, as required.
- **Hands/feet:** No human hands or feet are present. The cow’s four legs and hooves were inspected in the enlarged lower-body crop; no extra or missing leg is visible.
- **Clothing and cast:** No people. The cow looks healthy and cared for.
- **Text/signature artifacts:** No readable marks, writing, signature, logo or watermark are visible. The book leaves are blank.
- **Scene and caption fidelity:** The healthy cow, empty bowl and silent flower convey the plan’s gentle comparison without ridicule. **Required scene element missing:** the plan requires an *open, completely unmarked palm-leaf text*. At native pixels approximately x=730–1220, y=575–900, the object is a closed, stacked book; no open leaves are shown. This is apparent in the full image and the enlarged book crop. The empty bowl and flower do not replace the required open palm-leaf text. The mapped caption’s cow-without-milk comparison is otherwise reflected.
- **Character/deity contract:** The plan calls for no characters or deity; none are added.
- **Verdict: needs-fix.** The required open palm-leaf text is absent.

### Stanza 8 — v007

- **Candidate:** `artifacts/d094/s008/landscape/candidate-v007.png`
- **Verified SHA-256:** `19d4c9e010ca706017c96b6c1015158c08ec04c5e3cdf48c2895d08bd923ca05`
- **Review time:** 2026-11-17T01:47:27Z
- **Anatomy:** One Bhattathiri and one blue deity, each with one head. Both have connected limbs and natural seated/standing proportions; no fused or duplicated people.
- **Faces:** Bhattathiri’s older clean-shaven face and the deity’s calm face are intact. Four distinct footprint pairs at the lower edge are symbols, not extra people.
- **Hands/feet:** Bhattathiri’s two open hands and the deity’s two hands each show thumb plus four fingers. Bhattathiri’s visible foot and both deity feet show five toes; his other foot is tucked by his seated pose, not frame-cut.
- **Clothing and cast:** Bhattathiri wears cream Kerala clothing, sacred thread and modest beads. The plan’s disclosed skin-color deviation is present. My 11×11 skin-only median patches were: cheek (x=375,y=310) RGB (194,110,60), R−B 134; chest (x=315,y=530) RGB (148,76,37), R−B 111; upper arm (x=330,y=425) RGB (203,122,71), R−B 132. Thus the face/arm exceed the plan’s approximate R−B-under-120 target, matching the disclosed warm orange-brown departure; it is no worse than the disclosed deviation. The deity has a tiered crown and layered necklaces, ordinary mural iconography permitted by the deity contract.
- **Text/signature artifacts:** No readable text, decorative notation, signature, logo or watermark is visible in the full image or the ground/corner areas.
- **Scene and caption fidelity:** The worshipper faces one deity; offerings, cymbals and a veena at rest are present, as is the required small footprint cluster. The full-bleed frame-removal deviation stated in the plan is present. The devotional worship and reverence for the community carry the mapped 008 caption without copying its crowd or framing.
- **Character/deity contract:** Bhattathiri’s identity remains older and clean-shaven; Guruvayurappan is blue, two-armed, and fully inside frame. No unidentified faces are added.
- **Verdict: pass — disclosed deviation present.** The frame removal and measured skin-color departure are explicitly disclosed by the plan and are no worse than that disclosure.

### Stanza 9 — v005

- **Candidate:** `artifacts/d094/s009/landscape/candidate-v005.png`
- **Verified SHA-256:** `0819104ff28151e82c7af260792a2e655c4608ce2b9ac05c4cba8f0089b76a43`
- **Review time:** 2026-11-17T01:47:27Z
- **Anatomy:** One Bhattathiri and one four-armed deity, each with one head. The deity’s four arms are distinct and attached; the worshipper’s arms and legs are connected. No duplicate figure or fused body is visible.
- **Faces:** Both faces are intact. Bhattathiri is older and clean-shaven; the deity has a single serene face.
- **Hands/feet:** Bhattathiri’s broom-gripping hand and hanging open hand each show five digits. The deity’s four attribute-bearing hands are separately visible, with no extra or fused hand. Both of Bhattathiri’s feet show five toes. The deity’s feet are small and partly obscured by the shrine base; no foot is cut by the frame.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread and modest beads, and sweeps with a broom at the threshold. **Undisclosed skin-color breach:** skin-only 11×11 median at cheek (x=420,y=185) was RGB (171,88,50), R−B 121; torso (x=345,y=300) was RGB (182,95,56), R−B 126; forearm (x=470,y=360) was RGB (154,82,49), R−B 105. The plan requires face and torso patches below 120. The face and torso exceed that limit, and the face/torso read noticeably copper-orange in the full image against the requested warm-brown mineral tone. This stanza has no disclosed deviation.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible. The shrine, ground, lamp and corners were checked closely.
- **Scene and caption fidelity:** The threshold sweeping, single four-armed shrine deity, modest offering, sun and oil lamp are visible. The deity holds distinct discus, conch, lotus and mace attributes; the sun and lamp do not duplicate the deity. The shrine medallion is the required setting, not an added outer border. This follows the mapped 009 service caption.
- **Character/deity contract:** Bhattathiri’s face, tuft, ash markings and clothing are consistent, except for the measured skin-color breach above. The deity is blue with exactly four attached arms and hands as required. Its elaborate crown and layered ornaments are ordinary temple-mural iconography, not prohibited by the plan.
- **Verdict: needs-fix.** The undisclosed skin-color breach exceeds the plan’s face/torso threshold.

### Stanza 10 — v006

- **Candidate:** `artifacts/d094/s010/landscape/candidate-v006.png`
- **Verified SHA-256:** `6d82f5fed8b3b8b6b5cbedfbd32dcd15d8df79a2caff495ab990a7eeb1aa9bda`
- **Review time:** 2026-11-17T01:47:27Z
- **Anatomy:** One youthful Krishna and four distinct gopikas, each with one intact head. Krishna has two attached arms and legs; each gopika has natural connected two-arm anatomy. The circular group is separate, with no fused or duplicate bodies.
- **Faces:** Krishna’s youthful face and all four distinct adult gopika faces are intact. Krishna’s forehead is plain, with no mark.
- **Hands/feet:** All ten visible hands (two per figure) show thumb plus four fingers in the enlarged crops. Eight visible gopika feet and Krishna’s one visible foot each show five toes; Krishna’s other foot is tucked under his seated pose, not cut off.
- **Clothing and cast:** The four women wear modest, fully covering village saris in muted colors and modest jewelry. Krishna has deep matte indigo-blue skin, yellow dhoti, muted red-orange shawl, one simple low gold band and one upright peacock feather. No sexualized contact or framing.
- **Text/signature artifacts:** No readable text, signature, logo or watermark is visible, including in the foliage, ground, water or corners.
- **Scene and caption fidelity:** The gopikas are gathered reverently around Krishna in a shared circular arrangement; the lotus is centered between them. Their devotional closeness is conveyed without merging or romanticized contact, consistent with the mapped 010 caption.
- **Character/deity contract:** Krishna matches the youthful cowherd contract: one face, two arms, plain forehead, low band and single feather, with no tall crown. The gopikas are distinct ordinary women, not duplicated or fused.
- **Verdict: pass.**

## Captain-call inventory and recommendation

The review raises no unresolved choice for the captain. The pending captain art approval is the standing state, not a decision created by this review. Captain-call inventory is empty. The authorized gate command returned exit 0 with `complete: d094-review-d captain-call inventory reviewed` (`FM_HOME=/home/gehariharan/firstmate-narayaneeyam-mate bash /home/gehariharan/firstmate-narayaneeyam-mate/bin/fm-captain-hold.sh complete d094-review-d --none`). Recommend that the production worker correct stanza 7’s closed book to the required open unmarked palm-leaf text and revise stanza 9’s Bhattathiri face/torso skin patches to satisfy the plan threshold, then submit new versioned candidates for independent checksum-bound review. The other three exact candidates pass this visual review, with stanza 8’s explicitly disclosed deviation recorded above.

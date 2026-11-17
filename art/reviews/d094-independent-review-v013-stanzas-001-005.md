# D094 landscape candidate review: stanzas 1–5

## Scope and method

I independently reviewed the exact selected landscape candidate for each stanza against the final frozen plan, frozen series and character contracts, chapter content, and the mapped intake photo/caption. I opened every candidate at native resolution (1672×941, except s004 1670×941 and s005 1671×941), then made and inspected separate focused crops of each scene and its visible faces, hands, feet, bodies, and important props. The review used `intake/D094/001.jpg` through `005.jpg`, mapped in the plan entries (plan lines 30–68, 78–120, 130–175, 185–233, 243–284) and described by captions at `photo-captions.txt:1–24`; the associated chapter commentary is `content/daskams/d094.json:17–62`.

For skin checks I used ImageMagick 11×11 median patches at the stated full-image upper-left coordinates. The command form was:

```sh
magick CANDIDATE.png -crop 11x11+X+Y +repage -statistic Median 11x11 -format '%[pixel:p{5,5}]' info:
```

Focused crops were made with `magick CANDIDATE.png -crop WxH+X+Y +repage ...` and saved only under `/tmp/firstmate-d094-review/`. They were scratch inspection views; no candidate or project file was altered. I checked image corners, ground, branch/leaf areas, and other textured regions for accidental text or marks.

## Contract-file SHA-256 values

All actual hashes match the expected frozen-copy hashes in the assignment.

| Contract file read | SHA-256 |
|---|---|
| `data/d094-production/review-contract-u/art/plans/d094.json` | `ecfd51df4088192a88c153d9983f379b210d197c64e791190673af3e7ad9e645` |
| `data/d094-production/review-contract-u/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `data/d094-production/review-contract-u/art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `data/d094-production/review-contract-u/art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `data/d094-production/review-contract-u/art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `data/d094-production/review-contract-u/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `data/d094-production/review-contract-u/art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |

## Candidate findings

### Stanza 1 — v001

- **Candidate:** `artifacts/d094/s001/landscape/candidate-v001.png`
- **SHA-256:** `30295f3021ad8ab1a0ae0824eddae8fa013b2c6e99863ce9e3144a4fda2b0260`
- **UTC review time:** 2026-11-17T08:57:01Z
- **Anatomy:** No people or creatures are present, consistent with the plan; no anatomy applies.
- **Faces:** None.
- **Hands/feet:** None.
- **Clothing and cast:** No human cast or clothing; consistent with the no-people brief.
- **Text/signature artifacts:** None seen in full-frame or focused checks, including the dark sky and lower ground/log edges. No signature, watermark, logo, or border.
- **Scene and caption fidelity:** The broad cosmic spiral provides one continuous field, with three distinct groups of logs and flames at visibly different sizes/brightnesses. This follows the mapped caption’s pervasive nature and variable flames (`photo-captions.txt:4`; plan `art/plans/d094.json:35–49, 68`). The field and flames remain separate symbols. No missing required element.
- **Character/deity contract:** No characters or deities are required or depicted.
- **Verdict: pass.**

### Stanza 2 — v004

- **Candidate:** `artifacts/d094/s002/landscape/candidate-v004.png`
- **SHA-256:** `bcae22a4383d09b83fd628d773225a09bff35a9a6c39a640f0a5e62f34f44498`
- **UTC review time:** 2026-11-17T08:57:01Z
- **Anatomy:** Exactly two separate seated generic humans. Each has one head, two attached arms, two legs and two feet; their proportions and joints read clearly at full view and crops. No fused or duplicated body or limb.
- **Faces:** Guru and disciple each have one legible, normally formed face and distinct identity. Guru’s beard and older appearance distinguish him from the young adult disciple.
- **Hands/feet:** Both figures show two hands with five digits per hand; the guru’s teaching hand is open and the disciple’s hands rest on his knees. All four bare feet show five toes each in the enlarged lower-body crop. No malformed or extra digits detected.
- **Clothing and cast:** Exactly two people. Their modest cream/orange traditional wraps leave torsos bare in ordinary traditional dress; no sexualized framing. Skin-only 11×11 medians independently sampled: guru cheek at (400,390), RGB (152,76,36), R−B 116; guru torso at (380,490), (153,78,39), R−B 114; disciple cheek at (1280,270), (156,81,42), R−B 114; disciple torso at (1260,340), (149,76,38), R−B 111. These are brown and below the plan’s approximate 120 limit.
- **Text/signature artifacts:** None seen, including in the earth, branch tangle, or corners.
- **Scene and caption fidelity:** The foreground has exactly two distinguishable crossed wooden aranis and the small fire at their contact, plus a separate sparse burning branch tangle. Behind them, the seated guru faces and gestures toward the attentive disciple; their eye-line and posture make the teaching relationship visible. A quiet clearing remains beyond the fire. This matches `photo-captions.txt:9`, chapter commentary `content/daskams/d094.json:27–32`, and plan `art/plans/d094.json:83–101, 120`.
- **Character/deity contract:** The plan requires generic people and no recurring identity; the scene contains no deity or named recurring character. The guru and disciple are not rendered as Bhattathiri or Guruvayurappan.
- **Verdict: pass.**

### Stanza 3 — v009

- **Candidate:** `artifacts/d094/s003/landscape/candidate-v009.png`
- **SHA-256:** `e3384fbb51ee9fbff519f9921206a08de74cd4f85328f006bb4d03785abc85a8`
- **UTC review time:** 2026-11-17T08:57:01Z
- **Anatomy:** Exactly two figures: one older devotee and one blue Bhagwan. Both have one head and two attached arms. No duplicated person, fused limb, or malformed face. The devotee is kneeling with folded lower legs rather than seated: the plan explicitly discloses this pose deviation at line 175. His feet remain inside the frame; no key extremity is cut off.
- **Faces:** Bhattathiri has an older, clean-shaven face, ash marks and a small tuft; the Bhagwan has one calm face. Both faces remain intact and recognizable in enlarged crops.
- **Hands/feet:** The devotee’s hands meet in namaste; five fingertip ends are visible while the overlapping thumbs cannot be counted separately. Bhagwan’s raised blessing hand shows a thumb and four fingers; his other hand rests on the knee. One devotee foot is exposed and shows five toes; the other is overlapped beneath the folded legs, with no malformed toe visible. Both visible Bhagwan feet show five toes each. No extremity is cut by the image border.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread and prayer beads; no crown or ornate royal jewelry. The Bhagwan wears a yellow dhoti, red/orange shawl and elaborate ochre crown/jewelry/garlands, ordinary temple-mural iconography consistent with the character file (`art/bible/characters/guruvayurappan/character.json:18–37`). For the disclosed skin deviation I independently measured three skin-only 11×11 patches: cheek (350,350) RGB (160,85,45), R−B 115; upper arm/torso (305,510) (179,102,58), R−B 121; adjacent arm/torso (325,530) (174,100,57), R−B 117. The readings range R−B 115–121, no worse than the disclosed readings up to 126 in plan line 175. The kneeling pose and warm-brown skin deviation are both present and disclosed.
- **Text/signature artifacts:** None seen on the dark background, shrine band, clothing, bowl, vessel, crown, or frame corners.
- **Scene and caption fidelity:** The older devotee faces Bhagwan in surrender. At the far edge, the plain bowl, small vessel, and discarded crown are separate object-only symbols; no extra people, inset scene, light beam, or punishment appears. This fits the mapped surrender caption (`photo-captions.txt:14`) and the plan’s two-figure/object-only constraint (`art/plans/d094.json:138–156, 175`).
- **Character/deity contract:** Bhattathiri’s age, clean-shaven face, forehead ash and modest cream clothing align with his contract (`bhattathiri/character.json:17–32`). Bhagwan’s blue skin, yellow dhoti and red/orange shawl align with his contract. The Bhagwan’s visible ornate crown and layered garlands are factual observations and are ordinary temple-mural iconography, not prohibited by the contract.
- **Verdict: pass — disclosed deviation present.**

### Stanza 4 — v017

- **Candidate:** `artifacts/d094/s004/landscape/candidate-v017.png`
- **SHA-256:** `f2d27cfef6dc2efd58b4c9af56db75cc61b69ee839944b81bf64bc6c7f41eb1e`
- **UTC review time:** 2026-11-17T08:57:01Z
- **Anatomy:** Brahma has exactly four heads total: three distinct faces (front and two profiles) and the rear-facing head shown from behind. He has exactly four distinct arms attached to one torso, each ending in one hand. Bhattathiri and Bhagwan each have one head and two arms. No fused or duplicated body parts.
- **Faces:** All visible faces are formed clearly. Brahma’s multiple faces are intentional and contract-compliant, not malformed duplication. Bhattathiri is older and clean-shaven with sacred-ash markings. Bhagwan has one calm face.
- **Hands/feet:** Brahma’s four hands hold one lotus, palm-leaf book, beads and water pot, one object per hand; five digits are discernible where not wrapped/occluded by the held attribute, with no extra or fused finger visible. Bhattathiri’s joined prayer hands show aligned fingers; overlap prevents separate counting of every digit at the namaste contact, but no defect is visible. Bhagwan’s two open hands each show thumb plus four fingers. Bhattathiri’s legs/feet are tucked under his dhoti and not visible; Bhagwan’s two feet are fully inside frame and each shows five toes.
- **Clothing and cast:** Bhattathiri’s cream dhoti, sacred thread and restrained beads are modest. Brahma’s cream/saffron robe, sacred thread, four crowns and layered ornaments are visible; this is the four-headed creator’s ordinary iconography and does not violate the modest crown/jewelry contract (`brahma/character.json:20–47`). Bhagwan’s yellow dhoti, red/orange shawl, crown and layered ornaments are consistent with his contract. Independent skin-only 11×11 patches on Bhattathiri: cheek (680,490) RGB (182,100,63), R−B 119; upper arm/torso (630,590) (199,111,70), R−B 129; torso (700,600) (179,97,63), R−B 116; adjacent arm (660,590) (203,118,75), R−B 128. These measure R−B 116–129, within the plan’s disclosed range 110–134 at line 233. The disclosed warm-brown skin deviation is present.
- **Text/signature artifacts:** No readable or decorative writing, logo, signature, or watermark. The palm-leaf book has pale, unmarked faces in the enlarged crop.
- **Scene and caption fidelity:** Brahma is at exposed cosmic height at left; below, Bhattathiri prays toward one calm blue Bhagwan in a sheltered shrine. The distinct height/refuge planes follow the caption (`photo-captions.txt:19`) and plan (`art/plans/d094.json:194–214, 233`). No hell or invented punishment is depicted. The cosmic ornaments and planets remain setting elements, not extra figures.
- **Character/deity contract:** Brahma’s four heads and four arms exactly meet the explicit plan and contract (`art/plans/d094.json:194–198`; `art/bible/characters/brahma/character.json:22, 29, 33–47`). Bhattathiri and Guruvayurappan fit their continuity contracts (`art/bible/characters/bhattathiri/character.json:17–32`; `art/bible/characters/guruvayurappan/character.json:18–37`).
- **Verdict: pass — disclosed deviation present.**

### Stanza 5 — v008

- **Candidate:** `artifacts/d094/s005/landscape/candidate-v008.png`
- **SHA-256:** `00ac83990703f628694c2a580837c54ea1b2f2b4bccbe142c8950b775ae85044`
- **UTC review time:** 2026-11-17T08:57:01Z
- **Anatomy:** One generic reclining figure only: one head, exactly two attached arms, two legs and two feet. The temple-side arm bends to the head; the other extends along the lower torso/tree branch. Enlarged shoulder-to-hand views show no extra, duplicated, fused, or detached arm. Both legs and feet remain inside frame.
- **Faces:** One intact, calm face; no duplication or malformed features.
- **Hands/feet:** The branch-side hand shows one thumb and four separate fingers. On the temple-side hand four fingers are visible; the thumb is partly occluded where the hand meets the head, not visibly missing. Each foot shows five separate toes in the enlarged crop. No anomalous digit seen.
- **Clothing and cast:** One generic adult figure, with a modest saffron drape over the lower body and torso; no sexualized framing. 11×11 medians: face at (240,370) RGB (156,84,46), R−B 110; exposed arm/torso at (330,450) (151,80,42), R−B 109, within the plan’s approximate under-120 target. No Bhattathiri or deity is present.
- **Text/signature artifacts:** None seen on the leaves, branch, ground, or corners.
- **Scene and caption fidelity:** A single continuous tree trunk branches into a shadowed, fruit-bearing dream side with a resting figure and a clear waking side with open space and lotus-like stillness. The branches remain joined; no labels, chains, or separate-world diagram appear. This follows the mapped dream/waking caption (`photo-captions.txt:24`) and plan (`art/plans/d094.json:248–266, 284`).
- **Character/deity contract:** No named character or deity is depicted. The generic sleeper has exactly two arms; there is no duplicate figure.
- **Verdict: pass.**

## Commands and evidence record

Commands used for exact-byte and format checks:

```sh
sha256sum <the seven frozen contract paths listed above>
sha256sum <the five selected candidate paths listed above>
file <the five selected candidate paths listed above>
```

All ten SHA-256 values matched their expected values. `file` reported landscape PNGs at the dimensions listed in the scope paragraph. Full native-resolution views and focused `magick -crop` views were inspected separately for all five candidates; skin medians were read with the 11×11 command above. Plan line references for each selected version and disclosed deviation are: `art/plans/d094.json:68`, `120`, `175`, `233`, and `284`. Series style/text rules are in `art/bible/series.json:4–24, 51–64`; character anatomy and identity rules are in the cited character files and lines above.

## Recommendation and captain-call inventory

The exact-checksum visual review is complete. Three candidates pass without disclosed deviations; s003 v009 and s004 v017 pass with the skin/pose deviations explicitly present and within their plan disclosures. No new captain decision is raised by these review findings; the pending captain art approval remains the standing state. My captain-call inventory for this review is empty.

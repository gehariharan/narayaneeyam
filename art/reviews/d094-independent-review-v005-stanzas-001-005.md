# D094 landscape candidate review — stanzas 1–5

## Scope and method

I independently inspected each selected landscape candidate in full at its native resolution and in focused crops I made for scene details, faces, hands, feet, and (for stanza 4) skin sampling. Review was bound to the exact candidate, plan and character bytes listed below. Candidate SHA-256 values were verified before inspection; every expected value matched. I read the final plan, series bible, character contracts, mapped reference photos, and the matching captions. Reference photos were used as story/context references, while the final plan governed cast and composition.

The mapped photos are `intake/D094/001.jpg` through `005.jpg`; their captions are in `intake/D094/photo-captions.txt` at lines 1–23. The corresponding caption headings are lines 1/3, 6/8, 11/13, 16/18, and 21/23. They show, respectively, a spiral galaxy, a guru and student, Krishna embracing a devotee, a cosmic Vishnu scene, and reclining Vishnu. The plan intentionally interprets these as object-only cosmic/fire symbols (1–2), Bhattathiri and Bhagwan (3–4), and a joined dream/waking tree (5). I checked fidelity to those mapped contexts and captions without copying unsupported cast or composition.

Focused crops were generated and viewed from each exact candidate with ImageMagick `magick ... -crop ... +repage` under the worktree’s temporary `.review-scratch/`. `identify -format '%f %wx%h %[channels]\n'` returned 1672×941 sRGB for stanzas 1–3 and 5, and 1670×941 sRGB for stanza 4. Full images were viewed at original resolution. I also used `sha256sum` on the seven frozen contract files and five candidates, and `magick ... -crop 11x11+X+Y ... -format 'median RGB ...; R-B ...' info:` for the noted skin checks. No candidate or approval file was changed.

## Frozen contract checksums

| Contract file | Actual SHA-256 |
|---|---|
| `data/d094-production/review-contract-e/f/art/plans/d094.json` | `4a6d141118ffc2af93dbd90882c32ee9ddcdf83382b6687b6b4fb04027e7f7a6` |
| `.../f/art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `.../f/art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `.../f/art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `.../f/art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `.../f/art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `.../f/art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |

The plan bytes reviewed are the final frozen copy. Relevant plan entries are lines 30–77 (s001), 78–125 (s002), 126–180 (s003), 181–238 (s004), and 239–288 (s005). Character constraints consulted include series text/style rules at `series.json:1–76`, Bhattathiri identity and clothing at `bhattathiri/character.json:14–32`, Brahma’s head/arm counts at `brahma/character.json:30–45`, and Guruvayurappan’s appearance and crop/digit rules at `guruvayurappan/character.json:14–37`.

## Candidate findings

### Stanza 1 — v001

- **Candidate:** `artifacts/d094/s001/landscape/candidate-v001.png`
- **SHA-256:** `30295f3021ad8ab1a0ae0824eddae8fa013b2c6e99863ce9e3144a4fda2b0260` (matches expected)
- **Review time (UTC):** 2026-11-17T02:32:24Z
- **Anatomy / faces / hands and feet:** No people or creatures; these checks are not applicable.
- **Clothing and cast:** No cast or clothing.
- **Text / signature artifacts:** None seen in the full image, ground, or corners.
- **Scene and caption fidelity:** The full frame contains a continuous spiral-like cosmic field and three separate log groups at lower right, with clearly different log sizes/grains and small, medium, and large controlled flames. The symbols remain distinct; no human or deity was added. This matches plan lines 35–47 and the all-pervading/fire comparison in caption `photo-captions.txt:3–4`.
- **Character / deity contract:** Not applicable; plan declares no characters.
- **Verdict: pass.**

### Stanza 2 — v001

- **Candidate:** `artifacts/d094/s002/landscape/candidate-v001.png`
- **SHA-256:** `deb3dd33f7cd07077217f89b20716d970de404a99b179a116d0c697dd5e1f930` (matches expected)
- **Review time (UTC):** 2026-11-17T02:32:24Z
- **Anatomy / faces / hands and feet:** No people or creatures; these checks are not applicable.
- **Clothing and cast:** No cast or clothing.
- **Text / signature artifacts:** None seen in the full image, on the logs/branches, or at the corners. No written teaching.
- **Scene and caption fidelity:** Two distinct crossed wooden aranis sit under a central flame. A separate, smaller flame burns a sparse tangle of branches in front, with open calm clearing beyond. Both fire areas are visible; the crossed logs remain legible as the teaching metaphor. The candidate uses objects only as required by plan lines 84–95, though it depicts two fire points (the plan’s candidate status at line 116 likewise calls out the log flame as separate from the burning branch tangle). No teacher/disciple was added, consistent with caption `photo-captions.txt:8–9` and the explicit plan.
- **Character / deity contract:** Not applicable; plan declares no characters.
- **Verdict: pass.**

### Stanza 3 — v009

- **Candidate:** `artifacts/d094/s003/landscape/candidate-v009.png`
- **SHA-256:** `e3384fbb51ee9fbff519f9921206a08de74cd4f85328f006bb4d03785abc85a8` (matches expected)
- **Review time (UTC):** 2026-11-17T02:32:24Z
- **Anatomy / faces / hands and feet:** Exactly two figures are visible. Bhattathiri has a coherent older face and connected, proportionate limbs; his pressed prayer hands have four individually visible fingertips, with the thumbs hidden by the joined-palm angle. His one exposed foot has five toes; the other foot is tucked under the folded legs. Bhagwan’s open blessing hand has five digits, the resting hand is naturally placed on the knee, and both fully visible feet show five toes each. No malformed face or duplicate person is visible.
- **Clothing and cast:** Bhattathiri is clean-shaven with ash stripes, sacred thread, restrained beads, and cream dhoti. His skin reads orange-brown in the full image. I independently measured 11×11 skin-only median patches: cheek at `(350,310)` RGB `(184,104,58)`, R−B `126`; torso at `(280,480)` RGB `(187,111,66)`, R−B `121`. Both exceed the plan’s explicit under-120 target (lines 136 and 147); the cheek is visibly more orange-ochre than the required warm medium-brown. Bhagwan is blue-skinned and wears traditional yellow/orange clothing and elaborate temple-mural ornaments; the ornamentation is ordinary iconography and is not a failure.
- **Text / signature artifacts:** None seen in the image, on the lower-right objects, or at the corners.
- **Scene and caption fidelity:** Bhagwan and Bhattathiri face each other; the medicine bowl, ritual vessel, and discarded crown are grouped at the far edge, and there are no doctors, kings, sages, groups, inset scenes, or light beams. The surrender and temporary-path objects match plan lines 136–155 and caption `photo-captions.txt:13–14`. **The plan calls for both figures to be seated facing each other (line 135); Bhagwan is seated but Bhattathiri is clearly kneeling, with folded lower legs beneath him (approx. x=155–515, y=220–910 in the 1672×941 image).** This visible posture differs from the required two seated figures.
- **Character / deity contract:** Bhattathiri’s age, clean-shaven face, sacred markings and clothing match his character contract (`bhattathiri/character.json:14–32`). Bhagwan’s two narrative arms are attached and correct for this scene; his deep blue skin, peacock-feather crown and uncut hands/feet conform to the Guruvayurappan contract (`guruvayurappan/character.json:14–37`).
- **Verdict: needs-fix.** The cheek and torso samples exceed the explicit plan color threshold, and the required seated posture is not present. Both deviations are visible in the full image; neither is disclosed in the stanza 3 candidate status.

### Stanza 4 — v017

- **Candidate:** `artifacts/d094/s004/landscape/candidate-v017.png`
- **SHA-256:** `f2d27cfef6dc2efd58b4c9af56db75cc61b69ee839944b81bf64bc6c7f41eb1e` (matches expected)
- **Review time (UTC):** 2026-11-17T02:32:24Z
- **Anatomy / faces / hands and feet:** Brahma has exactly four heads total: three distinct faces are visible and the rear-facing head shows its back. He has four distinct attached arms and hands, each holding a separate attribute. No merged faces, extra limbs, malformed anatomy, or text on the palm-leaf object is visible. Bhattathiri’s prayer hands are coherent; his legs and feet are tucked beneath the dhoti as the plan status says. Bhagwan’s visible open hands each show thumb plus four fingers. His two visible feet each show five toes. No figure is cut off.
- **Clothing and cast:** Bhattathiri’s visible skin is warm orange-brown. I independently measured 11×11 median patches in the enlarged crop: cheek at `(620,590)` RGB `(185,105,67)`, R−B `118`; torso at `(620,680)` RGB `(181,94,57)`, R−B `124`. The torso exceeds the under-about-120 target by 4; the face sample is below it. This is consistent with, and no worse than, the plan’s explicit **DISCLOSED DEVIATION** at line 229 (face/torso summary R−B 120/125). Per the disclosed-deviation rubric, this deviation is present and measured, and the image is otherwise sound. Brahma’s multi-tier ochre crowns and layered ornaments are visible; they read as ordinary temple-mural iconography, not oversized in this composition and not a contract violation. Bhattathiri wears a cream dhoti and sacred thread.
- **Text / signature artifacts:** None seen in the full frame, cosmic ground, temple surfaces, or corners; the palm-leaf object has no readable writing.
- **Scene and caption fidelity:** Brahma is at the celestial edge; the lower refuge shows Bhattathiri praying toward a calm blue Bhagwan in a sheltered sanctuary, with cosmic heights and refuge clearly contrasted. There is no hell or invented punishment. The deep-blue cosmic ground is indigo, not purple. This follows plan lines 191–205 and caption `photo-captions.txt:18–19`.
- **Character / deity contract:** Brahma’s four-head/four-arm anatomy matches `brahma/character.json:30–45`. Bhattathiri remains the older clean-shaven devotee in cream clothing, and Bhagwan retains the expected blue skin, crown, clothing, and uncut hands/feet (`bhattathiri/character.json:14–32`; `guruvayurappan/character.json:14–37`).
- **Verdict: pass — disclosed deviation present.**

### Stanza 5 — v005

- **Candidate:** `artifacts/d094/s005/landscape/candidate-v005.png`
- **SHA-256:** `424583c0ad2b33536d7aa3192150a64c1687d2a035f62b965b78c637f3b035a3` (matches expected)
- **Review time (UTC):** 2026-11-17T02:32:24Z
- **Anatomy / faces / hands and feet:** One resting figure, with a coherent face and connected, proportionate limbs. The raised hand shows five digits; the branch-side hand shows four fingers and a thumb in a natural palm-down pose. Both fully visible feet show five toes. No duplicate figure is present.
- **Clothing and cast:** One figure in a traditional drape with a bare upper torso and simple ornaments; this is ordinary traditional male devotional dress, with no sexualised framing.
- **Text / signature artifacts:** None seen in the whole tree, fruit, ground, lotus, or corners. No chains, labels, or text symbols.
- **Scene and caption fidelity:** One connected central tree body carries a shadowed branch with fruit and the resting figure, and a clear branch with open space and a lotus-like bloom. The branches visibly join the same trunk; waking space is not a separate place or independent background. This satisfies plan lines 245–256 and caption `photo-captions.txt:23–24`.
- **Character / deity contract:** No named character is required; no separate deity or second reality is depicted.
- **Verdict: pass.**

## Commands and evidence summary

Commands used for machine-verifiable checks:

- `sha256sum <seven frozen contract paths> <five candidate paths>` — all twelve actual digests matched the expected values listed above.
- `identify -format '%f %wx%h %[channels]\n' <five candidate paths>` — confirmed native dimensions and sRGB channels listed above.
- `magick <candidate> -crop <region> +repage <scratch crop>` followed by original-resolution image viewing — focused crops included the stanza 1 logs/flames; stanza 2 logs/branch fire; stanza 3 face, prayer hands, blessing hand, and feet; stanza 4 Brahma heads/arms and Bhattathiri; stanza 5 face, both hands, and both feet.
- `magick <candidate> -crop 11x11+X+Y +repage -format 'median RGB ...; R-B ...' info:` — stanza 3 at cheek `(350,310)` and torso `(280,480)`; stanza 4 at cheek `(620,590)` and torso `(620,680)`. Coordinates are in native candidate pixels from the upper-left corner.

The final plan’s required scene language and each candidate’s status are at the plan lines cited per stanza. The character contracts and source captions are cited above. These are independent exact-checksum findings, not artwork approval and not approval-manifest changes.

## Recommendation and captain-call inventory

Do not advance stanza 3 v009 as visually cleared. Request a new candidate that shows Bhattathiri seated opposite Bhagwan and brings both sampled skin regions under the plan’s R−B 120 target while preserving the two-person cast and the three object-only signs. Stanzas 1, 2, 4, and 5 pass this review of their exact listed checksums; stanza 4 passes with its disclosed skin deviation present.

Captain-call inventory: **empty**. This review raises no unresolved product or approval choice. The pending captain art approval remains the standing state and is not a decision raised by this review. No approval manifest was touched.

# D072 landscape candidate review: stanzas 7–12

## Scope and method

I independently reviewed each selected landscape candidate against the frozen final D072 plan, the applicable character contracts, the mapped intake reference photo, and that stanza’s supplied caption. I opened every candidate at native resolution (1672×941 pixels, except stanza 12 at 1671×941) and made focused crops in a temporary worktree scratch directory for faces, hands, feet, and interactions. I inspected the crops and full frames directly. The scratch crops were not retained. The review time for all six images was **2026-11-16T10:36:31Z**. Each verdict applies only to the exact candidate SHA-256 listed below.

Checksum verification command: `sha256sum <the ten frozen contract paths> <the six candidate paths>`. Every actual digest matched its expected digest; the full values are recorded below. Image dimensions were checked with ImageMagick `identify -format '%f %wx%h\n' <candidate>`. Focused crops were made with ImageMagick `magick <candidate> -crop <geometry> +repage <temporary crop path>`, then reviewed at original crop resolution. Full candidate and intake reference images were opened at original resolution.

The mapped reference photos were `intake/D072/007.jpg` through `012.jpg`; captions are `intake/D072/photo-captions.txt`, entries #7–#12. Plan entries are in the frozen plan at lines 310, 355, 403, 451, 499, and 548 respectively. The stanza captions and scene descriptions are in `content/daskams/d072.json` lines 118–207. I treated the supplied photos as story/cast context, with the caption and plan defining the intended scene.

## Frozen contract checksums

| Contract | Actual SHA-256 | Expected SHA-256 | Result |
|---|---|---|---|
| Final plan `art/plans/d072.json` | `e4f2afffe571d45b1b96563a517c391897683f4612d9e1f230545e10a45542d9` | same | match |
| Series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` | same | match |
| Bhattathiri `character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` | same | match |
| D072 Akrura `character.json` | `87842eebf4afd622f33f2002063e478737b79627ecdf5daab7003ce57f638e16` | same | match |
| D072 Balarama youth `character.json` | `d2fa330bf7a21fe9430fe1e5a05400fed866366200c4574fac06cda652cdabdc` | same | match |
| Gopas `character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` | same | match |
| Gopikas `character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` | same | match |
| Guruvayurappan `character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` | same | match |
| Kamsa `character.json` | `350e683816ad1e7a3edc8ecb6dac2b3a1c4a8dd910a34a3af9d2cf41983b0ab6` | same | match |
| Krishna Vrindavan youth `character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` | same | match |
| Nandagopan `character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` | same | match |

## Image findings

### Stanza 7 — v007

Candidate: `artifacts/d072/s007/landscape/candidate-v007.png`
Verified SHA-256: `14d8c58f38c42a7f38f6311c5a41c2de696c1a5c14db0ef88158bdf139657e26`
Pixels: 1672×941. Plan entry: `art/plans/d072.json` line 310; stanza and caption: `content/daskams/d072.json` lines 118–122; reference: `intake/D072/007.jpg`.

- **Anatomy:** Akrura is a single mature man with two attached arms, hands, legs, and feet. Three separate women sit in the doorway. No fused or duplicated people are visible.
- **Faces:** Akrura’s face is coherent and mature; each woman has a distinct, readable face. None is visibly malformed.
- **Hands/feet:** Akrura’s chest-side open hand shows a thumb and four fingers. His feet are both inside frame; five toe tips are discernible on each. The women’s lap hands overlap naturally in their seated poses; no malformed extremity is apparent. Krishna’s single flute-playing vision has two attached hands; one thumb is partly occluded and cannot be confirmed separately, as noted in the plan.
- **Clothing and cast:** All three gopikas wear modest, fully covering village saris in distinct muted colors. Akrura wears simple cream and olive travel dress. No exposed or sexualized framing.
- **Text/signature artifacts:** No readable text, caption, signature, logo, or watermark seen; I checked the ground, walls, and corners.
- **Scene and caption fidelity:** At dusk Akrura pauses outside a village home while three women sing. A single Krishna thought/vision bubble conveys the song’s subject and is not a duplicate physical person. This matches the stanza’s passing-by, Krishna-song, and joy context as well as the plan’s cast and action. The composition differs from the photo’s crowded glossy devotional grouping, consistent with the plan’s instruction to use the photo for context only.
- **Character/deity contract:** Akrura reads as a warm-brown adult devotee. The vision shows a youthful deep-blue Krishna with a low band, one upright feather, and plain forehead. The ornamented band and jewelry are visible, but do not form a tall tiered crown and are ordinary mural iconography.
- **Skin measurement / disclosed deviation:** The plan records Akrura cheek median RGB `(192,107,68)`, R−B 124, four above the approximate 120 target; torso R−B 120, gopika patches 116/118/95, Krishna vision B−R 88 (plan line 339). In my face crop the cheek is visibly warm brown and not saturated orange. A skin pixel at `(300,350)` is RGB `(196,114,75)`, R−B 121; this point sample is consistent with a local cheek region near the plan’s median 124 and the disclosed approximately four-point overage. This disclosed margin is the only issue found.

**Verdict: pass — disclosed deviation present.**

### Stanza 8 — v003

Candidate: `artifacts/d072/s008/landscape/candidate-v003.png`
Verified SHA-256: `262b96c4e9bc24c0dd82cade26dd620b11209863507d5c547676efa493e8a0dc`
Pixels: 1672×941. Plan entry: `art/plans/d072.json` line 355; stanza and caption: `content/daskams/d072.json` lines 135–139; reference: `intake/D072/008.jpg`.

- **Anatomy:** One Akrura, one youthful Krishna, one youthful Balarama, and one cow are distinct. The cow has a coherent head, torso, four legs, and hooves. No duplicate people or fused bodies.
- **Faces:** Akrura and both youths have coherent, separate faces; Krishna and Balarama do not look like duplicate identities.
- **Hands/feet:** Akrura’s joined hands are attached. Krishna’s two visible hands each show a thumb and four fingers. Balarama’s two connected milking hands meet the udder/teats, but the fingers are partly occluded and cannot be individually counted; the focused crop confirms the plan’s disclosed occlusion. Visible feet of Akrura and Balarama each show five toes. No detached or visibly malformed hand or foot.
- **Clothing and cast:** Akrura is modestly dressed in cream and maroon. Krishna wears yellow with a red-orange shawl; Balarama wears blue with a cream wrap. All are fully clothed.
- **Text/signature artifacts:** No text, caption, signature, logo, or watermark seen, including along the courtyard ground and image corners.
- **Scene and caption fidelity:** The dusk courtyard has a cow, milking vessel, Balarama milking, Krishna beside him turning toward Akrura, and Akrura arriving. The supplied reference depicts Krishna and Balarama around cattle; the candidate recomposes the required greeting/arrival context per the caption and plan.
- **Character/deity contract:** Krishna is youthful, deep matte blue, with plain forehead, one low band and feather, and two arms. Balarama is youthfully proportioned, warm light-brown, and blue-garbed, not Krishna-blue. Akrura is a warm-brown adult devotee.
- **Skin / disclosed deviation:** Plan line 384 gives skin-only measurements: Akrura R−B 101, Balarama R−B 96–106, Krishna B−R 79. My focused view confirms the warm brown/light-brown versus deep blue separation. The disclosed milking-finger occlusion is the only issue found.

**Verdict: pass — disclosed deviation present.**

### Stanza 9 — v002

Candidate: `artifacts/d072/s009/landscape/candidate-v002.png`
Verified SHA-256: `c8f43bd481cf67ab16d85c07d4cf70bc844c3b8f48a2745ad235da915e7008a2`
Pixels: 1672×941. Plan entry: `art/plans/d072.json` line 403; stanza and caption: `content/daskams/d072.json` lines 152–156; reference: `intake/D072/009.jpg`.

- **Anatomy:** Akrura and the two youths have ordinary proportions and two arms/two legs each. Their relaxed stances do not fuse limbs or bodies. No duplicate person.
- **Faces:** The two brothers have distinct, coherent youthful faces; Akrura is clearly mature and moustached.
- **Hands/feet:** Akrura’s joined hands attach at the wrists. Krishna’s and Balarama’s relaxed hands attach normally; fingers overlap at the garments and cannot all be counted separately, without a visible digit defect. Enlarged view shows five toes on each visible foot.
- **Clothing and cast:** Krishna wears yellow and muted red-orange; Balarama wears blue and cream. Both look dry and tidy. Akrura is modestly dressed. Their ornaments are restrained in the mural style.
- **Text/signature artifacts:** No readable or decorative text, signature, logo, or watermark seen in the ground, sky, or corners.
- **Scene and caption fidelity:** The two brothers stand together in a quiet courtyard after bathing; their garments are complementary, and their calm smiles align with the stanza/caption. Akrura witnesses them. The scene is a fresh composition relative to the reference.
- **Character/deity contract:** Krishna has deep matte blue skin, youth proportions, a plain forehead, low band and one feather. Balarama is warm light-brown with a blue garment and distinct face, not a duplicate Krishna. Akrura remains a mature warm-brown devotee.
- **Skin measurement:** Plan line 432 records cheek patches Akrura R−B 103, Balarama R−B 102, Krishna B−R 84. Visual inspection confirms these roles and color separation; no apparent target deviation.

**Verdict: pass.**

### Stanza 10 — v002

Candidate: `artifacts/d072/s010/landscape/candidate-v002.png`
Verified SHA-256: `7b52b71229276ed2a7d0de90d31c73a830cf7427c840add9ff9920c2013338cb`
Pixels: 1672×941. Plan entry: `art/plans/d072.json` line 451; stanza and caption: `content/daskams/d072.json` lines 169–173; reference: `intake/D072/010.jpg`.

- **Anatomy:** Three distinct figures form a readable greeting. Krishna’s two arms reach around Akrura; Akrura’s visible arm wraps around Krishna, with the other arm obscured by the embrace. Balarama stands alongside with two attached arms. No extra limb or fused torso is visible.
- **Faces:** Akrura and Krishna have coherent, distinct faces in the close crop; Balarama’s face is clear and separate.
- **Hands/feet:** Both Krishna embrace hands attach at shoulder/back and torso. Akrura’s embracing hand attaches at Krishna’s back. Balarama’s open hand visibly has a thumb and four fingers; his other hand rests at his waist. All three figures’ feet are inside the frame. Focused crop at 2.5× shows five toe tips on Akrura’s foreground foot and on Krishna’s right foot; the other feet are angled or partly occluded by the pose. As the plan records (line 476), not every toe tip is sufficiently distinct for an exact count. I see no missing or malformed toe; the feet remain fully inside the frame.
- **Clothing and cast:** The figures are modestly clothed in cream/olive, yellow/red-orange, and blue/cream. Akrura’s exposed upper torso is ordinary traditional dress, not sexualized.
- **Text/signature artifacts:** No text, signature, logo, or watermark seen, including on the ground and corners.
- **Scene and caption fidelity:** Akrura has descended and bows/leans into Krishna’s joyful embrace while Balarama stands close by. The greeting reads clearly as the caption’s lifting and embracing moment. The reference is an embrace scene; the candidate adapts its staging to the plan and omits the reference’s unrelated surrounding figures.
- **Character/deity contract:** Krishna remains a youthful, two-armed deep-blue cowherd with plain forehead, low band, and one feather. Akrura is a mature warm-brown devotee; Balarama is light-brown and youthfully proportioned.
- **Skin measurement:** Plan line 476 records Akrura/Balarama skin-only R−B 113–116 and Krishna B−R 68. The sampled appearance in my focused view is consistent with those values and the warm-brown/deep-blue distinction.

**Verdict: pass.**

### Stanza 11 — v004

Candidate: `artifacts/d072/s011/landscape/candidate-v004.png`
Verified SHA-256: `8c1f868d4b1dc339472f7fc61a48898423aee9e092ffc59f517b858f82cf7fa8`
Pixels: 1672×941. Plan entry: `art/plans/d072.json` line 499; stanza and caption: `content/daskams/d072.json` lines 186–190; reference: `intake/D072/011.jpg`.

- **Anatomy:** Five distinct men are present: Akrura, Krishna, moustached Nanda, and two cowherds. The seated group has coherent bodies without fused or duplicated people.
- **Faces:** All five faces are individually legible and distinct. Nanda’s moustache and mature face distinguish him from the other men; Krishna remains youthful.
- **Hands/feet:** Akrura’s speaking hand is attached and shows a thumb plus four fingers. Nanda’s two hands support the offering tray; Krishna’s hands rest on his lap; the cowherds’ hands rest naturally. Some tray/lap fingers overlap and are not all separately countable, but no malformed digit or detached hand is visible. Seated feet are covered by clothing/pose.
- **Clothing and cast:** The group wears modest cream, olive, and maroon cowherd clothes. Nanda’s cream headcloth and olive drape, moustache, and householder presence fit his contract. No royal court or throne is depicted.
- **Text/signature artifacts:** No text, message scroll, signature, logo, or watermark seen. Ground, walls, and corners are clear.
- **Scene and caption fidelity:** In a simple home, Nanda offers hospitality as Akrura speaks; Krishna listens, with two distinct gopas nearby. This conveys the caption’s reception, message, and conversation without adding a readable message.
- **Character/deity contract:** Krishna is youthfully proportioned, blue, and has a plain forehead, low band, and single feather. Akrura is a warm-brown devotee rather than villain-coded. Nanda is mature, moustached, and in muted householder colors. The two gopas are distinct and secondary.
- **Skin measurement:** Plan line 522 records Akrura R−B 115, Nanda 111, rear gopa 93, Krishna B−R 81. My close view confirms the intended brown/blue separation; no apparent skin target defect.

**Verdict: pass.**

### Stanza 12 — v003

Candidate: `artifacts/d072/s012/landscape/candidate-v003.png`
Verified SHA-256: `ea81a98dbf1fb702f96f1826c563b9c1fe3ca93f0119ae38514c9fae8b5d1878`
Pixels: 1671×941. Plan entry: `art/plans/d072.json` line 548; stanza and caption: `content/daskams/d072.json` lines 203–207; reference: `intake/D072/012.jpg`.

- **Anatomy:** Four distinct gopikas, one seated Bhattathiri, and one two-armed Guruvayurappan murti are visible. No duplicate or fused figure. Murti has two attached arms and two feet.
- **Faces:** The four women have distinct faces. Bhattathiri has an older, clean-shaven face with a small tuft and a calm expression. The murti has a coherent serene face.
- **Hands/feet:** The murti’s raised blessing hand shows thumb plus four fingers; both murti feet show five toes in the focused view. Bhattathiri’s joined hands attach but their overlapping fingertips cannot be counted separately. Gopika lap/face-touching hands are partly overlapped by sleeves and poses; no malformed or detached hand is visible. No image-critical extremity is cut off.
- **Clothing and cast:** All women wear modest, fully covering saris. Bhattathiri wears a cream dhoti, sacred thread, and prayer beads. The murti has yellow and red-orange garments. Its elaborate crown, layered jewelry, and halo are visible in the right shrine vignette (approximately x=1320–1670, y=0–710 px); these are ordinary temple-mural iconography and are allowed by the Guruvayurappan contract, so they are observations, not defects.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark seen, including the dark doorway, ground, shrine, and corners.
- **Scene and caption fidelity:** The four women gather at night and look thoughtfully toward Krishna’s home; a separate small prayer vignette shows Bhattathiri before the Lord. This follows the plan’s two distinct moments and the reference/caption’s wondering women and closing prayer without depicting the rumor as a literal Krishna romance scene.
- **Character/deity contract:** Bhattathiri is older, clean-shaven, lightly built, with horizontal ash stripes, forehead mark, hair tuft, and cream clothing as specified. Guruvayurappan is a blue, serene, two-armed murti with yellow dhoti, red-orange shawl, peacock ornament, and intact hands and feet. His ornate jewelry and crown are consistent with the explicit murti contract and ordinary iconography.
- **Skin measurement:** Plan line 594 records gopika and Bhattathiri skin-only R−B 112 and murti blue-patch B−R 59. My close crop confirms the separate warm-brown human and deep-blue murti pigments.

**Verdict: pass.**

## Recommendation and captain-call inventory

The six reviewed candidates have no undisclosed defect meeting the review gate. Stanzas 7 and 8 have only the measured, expressly disclosed deviations described above and pass under the stated standard. The candidates remain unapproved; this visual review does not approve art or change any manifest. I found no new captain decision to raise; pending captain art approval is the standing state. **Captain-call inventory for this review: empty.**

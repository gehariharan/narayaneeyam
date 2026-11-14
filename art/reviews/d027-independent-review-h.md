# D027 landscape candidate review — stanzas 1–6

## Scope and method

I independently reviewed each selected landscape candidate for Narayaneeyam dasakam 27 against the frozen final plan, frozen series and character contracts, its mapped D027 reference photo, and the supplied photo caption. Each source image was opened at its native resolution (all candidates are 1672×941 except S004 at 1671×941), then examined in enlarged, focused crops for faces, hands, feet, animal anatomy, and crowded areas. Crop files were written only to `/tmp/d027-review-h/crops/`; producer candidates and intake files were read-only. I also checked the whole frame for text, signatures, and watermarks.

Commands/evidence used:

- `sha256sum <six candidate paths> <15 frozen contract paths>` — all output hashes matched the expected values in the task brief; the candidate hashes are repeated below.
- `identify -format '%f %wx%h\n' <six candidate paths>` — dimensions as above.
- `magick <candidate> -crop <WxH+X+Y> +repage -resize ... /tmp/d027-review-h/crops/<name>.png` — source-coordinate crops listed below; all crops were enlarged for inspection.
- `view_image` opened each complete candidate and each mapped reference photo at original detail, plus the focused crops.

The numbered references map as follows: S001 → `intake/D027/003.jpg`, S002 → `004.jpg`, S003 → `005.jpg`, S004 → `007.jpg`, S005 → `008.jpg`, S006 → `011.jpg`. This follows the stanza entries in the plan and the captions in `OneDrive/Pictures/Narayaneeyam Studio/intake/D027/photo-captions.txt` (caption lines 9–49); the chapter content independently repeats those mappings at lines 21–22, 31–32, 41–42, 51–52, 61–62, and 71–72.

Plan checkpoints: frozen `art/plans/d027.json` lines 57–70 (S001), 109–122 (S002), 159–172 (S003), 210–223 (S004), 260–273 (S005), and 309–322 (S006). Series treatment is frozen `art/bible/series.json` lines 4–24 and 51–64. Relevant anatomy rules include the plan continuity rules at lines 27–31 and character contracts for Airavata (lines 17–25), Brahma (lines 20–47), Vishnu (lines 18–31), devas (lines 17–25), Garuda (lines 17–25), asuras (lines 17–25), Vasuki (lines 17–25), and Kurma (lines 18–27). Contract file hashes are recorded below.

Review time recorded for each image: **2026-11-14T03:03:52Z**. This report evaluates only the exact candidate checksums listed below. These are visual review verdicts, not human art approvals.

## Frozen contract SHA-256 values read

| Contract file | SHA-256 |
|---|---|
| `art/plans/d027.json` | `7bcbefcf19ffd6c610d13d7ceafbd3643713e1b953a57eb6a4ddce7ab17cdb73` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/d027-cast-contract.json` | `6c16be532562c27aa755057f52a9a91ed96b1b38120e817431a3ebac409a84ba` |
| `art/bible/characters/durvasa/character.json` | `46a15b14b1d07e086dbccc499330837ef7e7a67dbc9f55588c91edd8676c77ab` |
| `art/bible/characters/indra/character.json` | `79673700165a403b64babad8f47e11218b06911b64eb1686ff1a1f8a14bf5831` |
| `art/bible/characters/airavata/character.json` | `8f1a1ed0b879d49c6467f12b271d7633a6e2055c97bc5b3ba516c747f53a8496` |
| `art/bible/characters/vishnu/character.json` | `b12934f8ab07bf3378b90ea256a6074a771d5edb22b9d36565d44bdb41441111` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/devas/character.json` | `549a36458ed305cd2fa0f1f7c41c087bae53bbe7ac44ee425ab2654d6a901a1a` |
| `art/bible/characters/garuda/character.json` | `8f8418c3fbaf8857bcdc8912fa80e47dbdfac66cc156cd20ed87e7eba8d0ecce` |
| `art/bible/characters/asuras/character.json` | `0bbc62b39d78299add49f9e3e1d26f969a4ca79de4cdc6698e3c53c8e7c6d96d` |
| `art/bible/characters/vasuki/character.json` | `4e2745074230f7cf5317609857a7aaa0d84085e02e1ed491bda5ff1ada830fc1` |
| `art/bible/characters/kurma/character.json` | `e672aae1d68282614afb4ab5c73ab86d1f62c736a1b30a9d9eb51f8647926094` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |

## Image findings

### S001 — candidate v005

- **Candidate:** `artifacts/d027/s001/landscape/candidate-v005.png`; **SHA-256:** `b86c10e1cdbb07f49f5d2e9aa22f0cbe588fd1e64e06893366fee5a4b97b36fa`.
- **Focused crops:** source pixels `(80,160)–(880,680)` (faces and garland exchange); `(900,100)–(1660,900)` (Airavata face, four legs and crushed flowers).
- **Anatomy:** Durvasa and Indra each read as one adult with two attached arms and legs; Airavata has one head, trunk, two ears, and four attached legs. All four feet remain in frame.
- **Faces:** Durvasa’s lined face and angry brows are legible; Indra has one downcast face. Airavata’s eye, trunk and ear are distinct and natural for the mural style. No duplicated person or elephant.
- **Hands/feet:** Durvasa’s raised open hand and garland hand are connected; Indra’s two hands hold the garland. Finger lines are stylized and partly covered by flowers, with no visible extra or fused digits. Elephant feet show separate toe arcs; the near forefoot presses the flowers.
- **Clothing and cast:** Both men wear covered traditional garments; Durvasa has ascetic beads and Indra wears a crown and ornaments. No exposed or sexualized framing.
- **Text/signature artifacts:** None seen in the scene, ground, or corners.
- **Scene and caption fidelity:** The single crushed flower garland lies under Airavata’s forefoot; Durvasa is at left with a raised hand and Indra beside the elephant at right, matching the caption and S001 plan.
- **Character/deity contract:** Airavata is pale, single-headed, single-trunked, and four-legged; no structural contract conflict. Ornament is ordinary divine/royal iconography.
- **Verdict: PASS.**

### S002 — candidate v002

- **Candidate:** `artifacts/d027/s002/landscape/candidate-v002.png`; **SHA-256:** `b71846b9873e48c4ab28354b33954719adc3efa26c48f95fd34060e186c9d933`.
- **Focused crops:** source pixels `(510,100)–(1080,700)` (Brahma’s heads, arms, attributes); `(0,0)–(600,900)` (Shiva, Indra and petitioners).
- **Anatomy:** Vishnu has four attached arms. Brahma has four total heads with three distinct faces visible and four attached arms. Shiva is a single two-armed figure. Petitioners read as separate two-armed figures; no fused body or duplicated person is visible.
- **Faces:** Brahma’s three front-facing profiles are separate; Shiva’s face and crescent are distinct. The bowed foreground Indra is subdued. The other petitioner faces remain individually legible.
- **Hands/feet:** Brahma’s four hands each hold a separate attribute (scripture, lotus, pot, beads). Vishnu’s four hands hold separate attributes. Prayer hands in the petitioners’ crop are joined cleanly; no visible extra/fused digits. Lower legs/feet are mostly under robes or lotus seats; none is cut off at the frame.
- **Clothing and cast:** Cream/saffron garments and restrained painted-ochre jewelry; Shiva’s ascetic clothing is distinct. All figures are modestly dressed.
- **Text/signature artifacts:** No readable text, signature, or watermark seen. Brahma’s palm-leaf object has horizontal bands but no readable writing.
- **Scene and caption fidelity:** A small group approaches Vishnu; Brahma and Shiva accompany them and Indra bows in front, consistent with the S002 plan and reference caption.
- **Character/deity contract:** Brahma’s intentional three visible faces/four total heads and four arms conform to the contract. Vishnu’s deep muted blue and four arms conform. Shiva is one figure. No prohibited anatomy observed.
- **Verdict: PASS.**

### S003 — candidate v003

- **Candidate:** `artifacts/d027/s003/landscape/candidate-v003.png`; **SHA-256:** `b4776791ba78aae2a72c2125ed9403251a03254c3f6ea7a81f8d55cf81cda80f`.
- **Focused crops:** source pixels `(40,100)–(790,900)` (Vishnu’s face, arms, hands, legs); `(650,360)–(930,600)` (enlarged teaching hand); `(950,150)–(1600,870)` (listening devas and their hands/feet).
- **Anatomy:** Vishnu’s four arms are separately attached; seated legs and both feet connect naturally. Four distinct devas are shown, each with two arms and two legs. No cloned face, fused body, or extra limb observed.
- **Faces:** Vishnu has one calm face. The four listening devas have distinct faces, hair and mustaches; none is malformed.
- **Hands/feet:** Vishnu’s four hands each hold one attribute or gesture. In the open teaching hand at source pixels approximately `(674,380)–(784,440)`, the enlarged crop shows a thumb and only three finger tips (four digits total); the fourth finger is absent. The hand is a focal gesture and the digit omission is visible on inspection. The devas’ joined prayer hands are distinct; no malformed or cut-off key extremity. Visible feet/toes are naturally drawn; other feet are covered by robes.
- **Clothing and cast:** Covered cream/ochre and maroon garments; Vishnu’s jewelry and crown are ordinary iconography. No exposed or sexualized framing.
- **Text/signature artifacts:** None seen in the sea, ground, frame, or corners.
- **Scene and caption fidelity:** Vishnu gestures toward the ocean and Mandara motif while devas listen in one assembly; no nectar is shown. This matches the counsel scene and mapped caption.
- **Character/deity contract:** Vishnu’s skin and four-armed form conform; crowd figures are distinct and two-armed. **Visible defects:** (1) In the open teaching hand at approximately source pixels `(674,380)–(784,440)`, the enlarged crop shows a thumb and only three finger tips (four digits total); the fourth finger is absent. This is a focal hand and a visible digit error. (2) A separate ornamental outer frame is plainly present at all four edges, approximately `x=0–55` and `y=0–54` plus corresponding bottom/right strips; it conflicts with the series bible’s full-bleed/no-separate-border treatment (`series.json` line 21).
- **Verdict: NEEDS-FIX.** Remove the separate border in a newly composed candidate. The verdict is based on the visible digit error and series-contract deviation, not scene fidelity.

### S004 — candidate v003

- **Candidate:** `artifacts/d027/s004/landscape/candidate-v003.png`; **SHA-256:** `102c9ca8dce19be9ef692584669c220bbe4b1896f60ffb4dd94e461f8dd8de3b`.
- **Focused crops:** source pixels `(300,0)–(1320,610)` (Vishnu and Garuda); `(0,460)–(600,940)` (left carriers); `(1000,460)–(1650,940)` (right carriers).
- **Anatomy:** Vishnu has four attached arms. Garuda is one coherent bird with one head, two attached wings and two taloned legs. Carriers on both sides have connected human limbs. Some peripheral carriers continue naturally off the lower/right frame edge; no face or key extremity is cut off.
- **Faces:** Vishnu and Garuda each have one clear face/head. Carrier faces are separate and readable, with no duplicate figure.
- **Hands/feet:** Vishnu’s four hands hold distinct attributes. Garuda’s two taloned feet attach to the mountain. Carrier open hands are separate with ordinary finger lines; toes/feet that meet the lower edge remain legible or naturally continue off-frame. No visible extra/fused digits.
- **Clothing and cast:** Vishnu is fully clothed in traditional cream/ochre/maroon garments with ordinary deity ornaments. Devas and asuras are distinct by side and garments; modest traditional dress throughout.
- **Text/signature artifacts:** None seen in the sky, water, mountain, or corners.
- **Scene and caption fidelity:** Carriers flank the fallen Mandara; Vishnu rides Garuda above it as Garuda grips the mountain over the milk ocean, matching the plan’s recovery-and-placement moment and the S004 caption.
- **Character/deity contract:** Vishnu’s four-arm form, Garuda’s single head/two wings/two legs, and distinct human groups conform. The exposed mountain-and-water composition is consistent with the mapped reference.
- **Verdict: PASS.**

### S005 — candidate v005

- **Candidate:** `artifacts/d027/s005/landscape/candidate-v005.png`; **SHA-256:** `0404915ea1fe49078b8f36fbc0e8834377745e6031495c786602030527e9d371`.
- **Focused crops:** source pixels `(0,280)–(760,900)` (two asuras and Vasuki’s head); `(950,280)–(1650,900)` (devas holding the tail).
- **Anatomy:** Four human pullers are individually separated, each with two attached arms and legs. Vasuki reads as one continuous body around Mandara, with one head at left and one tapering tail at right. No detached coil or second head observed.
- **Faces:** Two asuras have different skin tones and facial details; the two devas are distinct. Vasuki has one head and a coherent face.
- **Hands/feet:** Hands attach to the arms and grip the serpent on each side; some fingers are occluded by the rope, but no visible malformed, extra, or fused digits. Each puller’s two feet are visible and separately drawn with toe marks.
- **Clothing and cast:** Asuras wear muted maroon/olive wraps; devas wear cream/saffron wraps and crowns. Clothing is traditional and modest.
- **Text/signature artifacts:** None seen in water, ground, or corners.
- **Scene and caption fidelity:** Asuras hold the head end on the left and devas pull the tail end on the right; the serpent visibly wraps around the central mountain. This is unambiguous and matches the reference caption and S005 plan.
- **Character/deity contract:** Vasuki’s single continuous body, head/tail assignment, and natural human groups conform. No deity anatomy is at issue in the image.
- **Verdict: PASS.**

### S006 — candidate v003

- **Candidate:** `artifacts/d027/s006/landscape/candidate-v003.png`; **SHA-256:** `eb78c032e714e303f44adf48554bdec389d02374af5d749a1c58044b5b4935a7`.
- **Focused crops:** source pixels `(230,550)–(1530,930)` (Kurma’s head, shell, legs and tail); `(650,100)–(1550,700)` (Mandara and Vasuki’s head/body).
- **Anatomy:** Kurma is a complete tortoise with one head, one continuous shell, four attached legs (three legs are clearly exposed; the far rear leg is occluded by the body in this side view) and a short tail. No human torso or hands. The single Vasuki body has one head and stays connected around the mountain. Three devas at the waterline are distinct two-armed figures.
- **Faces:** Kurma’s head has one natural face; Vasuki has one separate serpent face. The three devas have separate faces with distressed/upward-looking expressions; no malformed or duplicate face.
- **Hands/feet:** Devas’ hands are attached and raised in prayer/appeal. Kurma’s four leg forms end in separate scaled feet; visible toes/claws are individually outlined. No extra or fused digits apparent.
- **Clothing and cast:** Devas wear covered cream/ochre garments and crowns. No exposed or sexualized framing.
- **Text/signature artifacts:** None seen in sky, water, mountain, or corners.
- **Scene and caption fidelity:** The mountain’s base sits on Kurma’s broad shell beneath the churning water; devas watch at the waterline. Vasuki remains as contextual churning rope, consistent with reference 011 and the stanza’s crisis setting.
- **Character/deity contract:** Kurma is fully tortoise, with shell directly carrying Mandara; no human anatomy, duplicate mountain, extra head, or extra limb observed. Vasuki is a single continuous serpent.
- **Verdict: PASS.**

## Summary and recommendation

Five candidates pass this visual review. S003 v003 needs a new candidate because its focal teaching hand is missing a finger and its decorative border conflicts with the frozen series bible’s full-bleed treatment. Do not update approvals based on this report; every candidate remains an unapproved image, and these verdicts are bound to the listed checksums only.

No unresolved captain choice was discovered. The only recommendation is an ordinary production correction to S003’s frame treatment; it does not require a captain decision. Captain-call inventory for this review is therefore empty.

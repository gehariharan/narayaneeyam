# D072 landscape candidate visual review: stanzas 1–6

## Review basis and method

I independently inspected each selected landscape candidate at native resolution, then inspected enlarged scratch crops of relevant faces, hands, feet, chariot/animal anatomy and scene details. I also viewed the mapped intake reference photographs 001.jpg–006.jpg and read their captions. The final plan maps stanza 1 to `intake/D072/001.jpg` (lines 43–80), stanza 2 to `002.jpg` (90–124), stanza 3 to `003.jpg` (134–168), stanza 4 to `004.jpg` (178–212), stanza 5 to `005.jpg` (222–256), and stanza 6 to `006.jpg` (266–300). Corresponding chapter-content stanza starts are lines 16, 33, 50, 67, 84 and 101. Caption text is in `intake/D072/photo-captions.txt`, lines 1–29.

The visual review used the exact final plan and frozen character contracts listed below. Candidate dimensions were checked with `identify -format '%f %wx%h\n'`; all six returned 1672x941. `magick` created temporary close crops in this worktree's `.review-scratch/`; the crops were inspected with the image viewer. Native-resolution 7 × 7 RGB patches were sampled for reported warm-skin R−B checks. Each point is in native image coordinates; the patch is centered on that point. These are approximate mural-color checks, not image-wide classifications. Face and animal shapes, digits and extremities were judged from full images and focused crops.

Evidence commands: `sha256sum` on all six candidate paths and all eleven frozen contract paths; `identify -format '%f %wx%h\n'` on the six candidates; and ImageMagick crops and RGB patch samples. Every candidate and contract digest matched its expected value. I did not inspect any review record, report, producer note, approval manifest or review directory. No project file or approval manifest was changed.

Review time for the six image-specific inspections: **2026-11-16T10:38:21Z**.

## Contract checksums

Actual SHA-256 values of the exact frozen bytes read:

- Final plan `art/plans/d072.json`: `e4f2afffe571d45b1b96563a517c391897683f4612d9e1f230545e10a45542d9`
- Series bible `art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- `bhattathiri/character.json`: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- `d072-akrura/character.json`: `87842eebf4afd622f33f2002063e478737b79627ecdf5daab7003ce57f638e16`
- `d072-balarama-vraja-youth/character.json`: `d2fa330bf7a21fe9430fe1e5a05400fed866366200c4574fac06cda652cdabdc`
- `gopas/character.json`: `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0`
- `gopikas/character.json`: `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`
- `guruvayurappan/character.json`: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- `kamsa/character.json`: `350e683816ad1e7a3edc8ecb6dac2b3a1c4a8dd910a34a3af9d2cf41983b0ab6`
- `krishna-vrindavan-youth/character.json`: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`
- `nandagopan/character.json`: `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36`

All actual contract hashes equal their expected values. Applied requirements include Akrura's mature, warm-brown ordinary two-arm traveler depiction (`d072-akrura/character.json`, lines 14–25), Kamsa's ordinary human king depiction (`kamsa/character.json`, lines 9–20), Krishna's youthful matte indigo form, plain forehead, low band, single upright feather and ordinary two-arm anatomy (`krishna-vrindavan-youth/character.json`, lines 6–14 and 54–60), and the scene-specific requirements in the final plan.

## Candidate reviews

### Stanza 1 — candidate-v004.png

- **Candidate:** `artifacts/d072/s001/landscape/candidate-v004.png`
- **SHA-256:** `4e61f72a2d46ff93abd7800e22731df588829fb74bba2edc74717555dc8d2373` (matches expected)
- **Plan/content/reference:** final plan lines 43–80; content stanza line 16; caption lines 1–4; mapped photo `intake/D072/001.jpg`.
- **Anatomy:** Kamsa and Akrura have ordinary, continuous adult proportions. The two guards are separate, not duplicated or fused.
- **Faces:** Both principal faces are formed and readable. Kamsa is stern without monstrous distortion; Akrura reads as a mature male devotee. My 7 × 7 cheek-region means at (330,225) for Kamsa and (1430,230) for Akrura are R−B **110** and **107**; both read warm brown.
- **Hands/feet:** Kamsa's extended hand has one thumb and four fingers. Akrura's joined hands attach at the wrists; overlapping fingers cannot all be counted individually. Feet are covered by the seated court pose.
- **Clothing and cast:** Akrura wears a cream dhoti and muted olive wrap; the bare upper torso is ordinary traditional dress. Kamsa's crown, earrings and layered necklaces are ornate but ordinary royal mural iconography. No cast beyond Kamsa, Akrura and two distinct guards.
- **Text/signature artifacts:** No readable text, signature, watermark or logo, including ground/corners; no accidental border.
- **Scene and caption fidelity:** Quiet court summons; Kamsa gestures toward the bow and quiver token while Akrura listens reverently. Neither Krishna nor Narada is depicted. This aligns with the plan and mapped caption's summons context.
- **Character/deity contract:** Akrura is devotional, not villainized; Kamsa remains an ordinary two-armed king. No deity is present.
- **Verdict: pass.**

### Stanza 2 — candidate-v003.png

- **Candidate:** `artifacts/d072/s002/landscape/candidate-v003.png`
- **SHA-256:** `045bff7a78696da11a4a9710fb12cca45d01c84b516255770a2786b3370453f3` (matches expected)
- **Plan/content/reference:** final plan lines 90–124; content stanza line 33; caption lines 6–9; mapped photo `intake/D072/002.jpg`.
- **Anatomy:** Akrura sits securely in a two-wheeled chariot. Two harnessed horses remain distinct; their heads, necks and visible legs terminate in separate hooves without fused anatomy. No duplicate physical Akrura.
- **Faces:** Akrura's mature face is intact and joyful. His cheek-region 7 × 7 mean at (340,355) is R−B **116**, clearly brown. Krishna appears once as a cloud-framed vision, not as a second physical traveler.
- **Hands/feet:** Akrura's two attached hands are visible, one in prayer and one holding reins. Prayer fingertips overlap, and the reins grip does not expose every digit separately. Feet are obscured by the chariot.
- **Clothing and cast:** Akrura wears cream and muted olive. The chariot is decorated, but there is no parade or royal procession; only Akrura and the two horses occupy the journey scene.
- **Text/signature artifacts:** No readable text, signature, watermark or logo visible in the scene or corners.
- **Scene and caption fidelity:** Akrura travels on an open Vraja road with restrained joy; a single Krishna vision conveys his anticipation. The source photo's staging is not copied.
- **Character/deity contract:** The vision has deep blue skin, a plain forehead, a low band and one upright feather. It is framed inside the image; no extra limbs or second physical Krishna.
- **Verdict: pass.**

### Stanza 3 — candidate-v005.png

- **Candidate:** `artifacts/d072/s003/landscape/candidate-v005.png`
- **SHA-256:** `08a69f61e5886e782f8c98c7e627187fcb4aabe625e893d2540b603ee16ba257` (matches expected)
- **Plan/content/reference:** final plan lines 134–168; content stanza line 50; caption lines 11–14; mapped photo `intake/D072/003.jpg`.
- **Anatomy:** Akrura sits securely in the moving chariot. Two harnessed horses have separate, coherent legs and hooves in the enlarged view. No unsafe pose, fused body or duplicate traveler.
- **Faces:** Akrura's face is intact and directed upward in thought. My cheek-region patch at (465,290) gives R−B **101**; his joined-palm patch at (510,425) gives R−B **119**. Both read brown rather than orange. The single Krishna vision's face is well formed.
- **Hands/feet:** Akrura's prayer hands join with both wrists attached; finger outlines overlap and cannot all be counted separately. Feet are hidden by the chariot. The vision's hands are not shown.
- **Clothing and cast:** Akrura wears cream and muted olive. Two horses and one Krishna vision are distinct; no additional human figure is present.
- **Text/signature artifacts:** No text, signature, watermark, beams or border visible; ground and corners are clean.
- **Scene and caption fidelity:** Road, chariot and absorbed prayer match the stanza and caption. One cloud-framed Krishna vision appears; there is no second Akrura or vision montage.
- **Character/deity contract:** Krishna's visible face has deep matte blue skin, plain forehead, low band and one upright feather; no extra physical Krishna. Akrura remains mature and devotional.
- **Verdict: pass.**

### Stanza 4 — candidate-v003.png

- **Candidate:** `artifacts/d072/s004/landscape/candidate-v003.png`
- **SHA-256:** `9b55b5a18e5dbe88f51b1b24f2eeec37415b0ef10f5fddfd79bd2774177fa188` (matches expected)
- **Plan/content/reference:** final plan lines 178–212; content stanza line 67; caption lines 16–19; mapped photo `intake/D072/004.jpg`.
- **Anatomy:** Akrura's two arms attach normally, one hand at his chest and one at the reins. Two oxen remain separate beneath a shared harness; their heads are intact and bodies continue off the right edge as peripheral animals.
- **Faces:** Akrura's face is intact and contemplative. My 7 × 7 cheek patch at (445,320) gives R−B **96**, consistent with the plan's reported 93–99 face/forehead/chest range.
- **Hands/feet:** Both hands attach to Akrura; individual digits are not separable at this scale. Feet are concealed by the ox cart and clothing.
- **Clothing and cast:** Akrura wears cream and muted olive, with ordinary traditional dress. The two oxen are the only animals; no added people or deities.
- **Text/signature artifacts:** No readable text, signature, watermark, light beams or logo, including corners/ground.
- **Scene and caption fidelity:** Akrura pauses in thought and looks toward an open Vraja horizon, without a literal Krishna vision or montage. **Disclosed vehicle deviation present:** the image uses an ox cart with two oxen rather than the plan's chariot; final-plan candidate_status at line 212 records the oxen and concealed feet. This is an observable substitution, not malformed anatomy.
- **Character/deity contract:** Akrura's warm-brown adult devotee identity is intact; no deity or prohibited figure is present.
- **Verdict: pass — disclosed deviation present.**

### Stanza 5 — candidate-v006.png

- **Candidate:** `artifacts/d072/s005/landscape/candidate-v006.png`
- **SHA-256:** `25d773be005a892756ab9d8c35f946d4f946f30d9a4d67ee43b05ba606427231` (matches expected)
- **Plan/content/reference:** final plan lines 222–256; content stanza line 84; caption lines 21–24; mapped photo `intake/D072/005.jpg`.
- **Anatomy:** Akrura kneels in one continuous pose. Krishna has one face, two attached arms and two legs; no fused or duplicated people. Both feet are fully inside the image.
- **Faces:** Akrura's face is intact; his cheek-side 7 × 7 patch at (390,295) gives R−B **119**, still reading warm brown. Krishna's youthful face is clear and indigo-blue.
- **Hands/feet:** Each of Krishna's two open hands visibly has one thumb and four fingers. His left and right feet each show **five toes** in the focused crop. Akrura's prayer hands attach at both wrists, but overlapping fingertips cannot all be counted separately; his feet are covered by his wrapped dhoti.
- **Clothing and cast:** Akrura is modestly dressed in cream and maroon. Krishna wears yellow with a red-orange shawl; layered necklaces and armlets are visible as ordinary temple-mural ornamentation. No added Shiva, Brahma or other deva figure is present. Krishna himself is pictured standing beside Akrura.
- **Text/signature artifacts:** No readable text, signature, watermark or logo in dust, ground or corners; footprints are distinct marks, not lettering.
- **Scene and caption fidelity:** Grove and village edge, Akrura's reverence and Krishna's footprints convey sanctity. Krishna is also shown bodily with raised open hands; this is visible in the image, while the plan's prohibition addresses adding unsupported gods. The plan does not expressly prohibit Krishna's presence. No unsupported gods are added.
- **Character/deity contract:** Krishna is youthful, deep matte indigo, with a plain forehead, one low band and one upright feather; neither a tall crown nor forehead mark appears. Akrura remains the mature devotee.
- **Verdict: pass.**

### Stanza 6 — candidate-v007.png

- **Candidate:** `artifacts/d072/s006/landscape/candidate-v007.png`
- **SHA-256:** `0df36f0bfb08e44b6617ce4e5cb48311ab228c1be7b56cf1aafecd6704ca32d4` (matches expected)
- **Plan/content/reference:** final plan lines 266–300; content stanza line 101; caption lines 26–29; mapped photo `intake/D072/006.jpg`.
- **Anatomy:** One continuous Akrura figure lies supported on the ground. The extended arm remains attached to shoulder and torso; his second arm is concealed by the prone body. No visible stump, fused or duplicate body. His wrapped lower body covers both feet.
- **Faces:** Akrura's face is intact, calm and recognizably mature. My 7 × 7 cheek patch at (1030,400) gives R−B **113**. The exposed upper-shoulder patch at (800,500) gives R−B **123**, confirming a small warm-skin deviation above the approximate 120 target; it still reads brown, not orange. This locally verifies and measures the plan's disclosed shoulder deviation (candidate_status at line 300 reports 122, cheek 115.5 and arm/palm 118.5).
- **Hands/feet:** The extended open hand is connected and shows one thumb plus four fingers. The other hand and both feet are concealed by the prone posture and dhoti; visible extremities are not cut off.
- **Clothing and cast:** Akrura wears a cream dhoti and maroon shawl, modestly covering his body. Only one Akrura is present; Krishna is absent.
- **Text/signature artifacts:** No text, watermark, signature or logo visible. The small footprints remain distinct footprints and do not resemble text.
- **Scene and caption fidelity:** Akrura worships and lies beside the dust footprints at a quiet grove path, showing one action and one body as required. No second pose or split scene.
- **Character/deity contract:** The mature devotee is proportioned naturally in the prone pose; no extra limb, deity, Krishna body or identity violation is visible. The disclosed shoulder tint is the only measured issue.
- **Verdict: pass — disclosed deviation present.**

## Recommendation and inventory attestation

All six checksums are bound to these observations. I found no undisclosed defect meeting the review gate's needs-fix criteria. Stanzas 4 and 6 pass with disclosed deviations recorded above; the other four pass without a reported deviation. These are visual-review findings only: candidates remain unapproved, and the standing captain art approval remains separate from this review. No new captain decision was raised by these findings. My captain-call inventory for this review is empty.

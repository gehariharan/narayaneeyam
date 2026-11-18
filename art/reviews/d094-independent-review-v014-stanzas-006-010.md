# D094 independent visual review — stanzas 6–10

## Scope and method

I independently reviewed five landscape candidates at native resolution and in enlarged crops against the exact frozen plan, the named character contracts, each stanza’s mapped intake photo, the chapter content, and the supplied caption. The source map assigns stanza N to `intake/D094/00N.jpg`; the numbered captions and chapter stanzas agree (reference map lines 57–97; content lines 67–107; caption headings lines 26–46). The final plan entries are at lines 302, 358, 406, 462, and 516. The relevant explicit continuity rules include Bhattathiri’s warm-brown skin and ash marks (Bhattathiri contract lines 8–24), Guruvayurappan’s blue skin and deity styling (lines 8–28), and Krishna’s deep matte blue skin, plain forehead and two-arm anatomy (Krishna contract lines 7–26 and 45–54). The series contract calls for matte mural rendering and no text or watermarks (series bible lines 5–6, 21–23, 48–52).

Every expected digest was checked with `sha256sum -c` on `.review-scratch/d094-review-zk/checksums.txt`, generated from the supplied expected-hash list. All entries returned `OK`. Candidate dimensions were checked with `identify`: 1672×941 for stanzas 6–9 and 1671×941 for stanza 10. I opened each full candidate and its mapped reference photo individually, then opened focused, enlarged crops saved only under this worktree’s `.review-scratch/d094-review-zk/`. I sampled required warm-brown skin patches as 11×11-pixel crops and calculated per-channel medians from the pixels; coordinates below are crop upper-left origins in the original candidate.

Contract file SHA-256 values (actual hashes; all matched the expected hashes):

- Frozen final plan `art/plans/d094.json`: `ff7dba81c5e6ac9ced7b6a086deed562ab274cdf08f4e3313b48978c4f48b1b5`
- Series bible `art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- Bhattathiri contract: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- Brahma contract: `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`
- Guruvayurappan contract: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Krishna Vrindavan youth contract: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`
- Gopikas contract: `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`

Read-only source mapping and caption hashes also matched: `content/sources/d094/reference-map.json` `8642034f80398172e7e1a25c1c4d91606f7fe540d998c3f6665d6fcd7ffbefdb`; `intake/D094/photo-captions.txt` `8b040f7e5f008a9d3b3d826c93b05c5810f25cadf043ea0930de8a4cc970aacb`.

## Candidate findings

### Stanza 6 — v013 — needs-fix

- Candidate: `artifacts/d094/s006/landscape/candidate-v013.png`
- Verified SHA-256: `2963a6822bb223a8fc00b99a1745817a8fde02a817ac6636b451bd41d04c1de1`
- Review time: 2026-11-18 05:56:44 UTC
- Anatomy: One older devotee and one two-armed deity; limbs remain attached and proportionate. No duplicate or fused figure.
- Faces: Both faces are legible and undistorted. Bhattathiri’s shaved scalp, small tuft, ash stripes and central forehead mark match his contract.
- Hands and feet: Bhattathiri’s joined namaste has five aligned fingertip ends; the overlapping thumbs are naturally obscured. His exposed foot shows five toes; the other leg is tucked. Bhagwan’s raised open hand shows five digits; the lowered hand is fully attached and open. Both visible deity feet show five toes.
- Clothing and cast: Bhattathiri’s bare upper torso with cream dhoti, sacred thread and beads is ordinary traditional dress. Six independently sampled Bhattathiri skin medians (RGB; R−B) were (146,81,44; 102), (168,95,57; 111), (126,68,37; 89), (150,79,41; 109), (161,89,51; 110), and (164,91,51; 113). All are below 120 and read as natural warm brown.
- Text/signature artifacts: The palm-leaf stack has small non-letter marks at about x=640–866, y=808–869; at enlarged view these do not form readable writing. No caption, signature, logo or watermark is visible.
- Scene and caption fidelity: The quiet garden prayer scene, blank teaching leaves, clean water vessel and devotee/deity relationship fit the stanza plan and caption. The mapped photo supplies prayer context only; its woman, dark lighting and close crop are not copied.
- Character/deity contract: **Needs-fix.** The raised palm at approximately x=1010–1070, y=220–320 is salmon pink while the attached forearm and the deity’s other exposed skin are blue. This prominent, high-contrast patch is visible in the full image and breaks the Guruvayurappan deep-blue skin contract. The rest of the exposed deity skin reads blue. The rendering is more modeled and glossy than the series’ flat-matte target, noted as a style deviation, but is not the verdict basis here.

### Stanza 7 — v004 — pass

- Candidate: `artifacts/d094/s007/landscape/candidate-v004.png`
- Verified SHA-256: `b8b76fe0985c5a89aa381e61496c42c443b300969dc539ca31d733901a15486e`
- Review time: 2026-11-18 05:56:44 UTC
- Anatomy: There are no people. The single cow has a coherent head and body, four attached legs and four distinct hooves; its pose reads naturally and it appears healthy.
- Faces: The cow’s face is intact, with two ears, two horns and no malformed or duplicated features.
- Hands and feet: No human hands or feet. The four hooves are separately visible; none is fused or missing.
- Clothing and cast: No clothing or human cast. One cow is present as planned.
- Text/signature artifacts: The two open palm leaves are uniformly pale and unmarked in the enlarged manuscript crop. No text, signature, logo or watermark appears elsewhere.
- Scene and caption fidelity: The healthy unmilked cow, open blank text, empty bowl and quiet flower match the analogy and the plan. The mapped photo’s meditating silhouette and written scripture are not reproduced.
- Character/deity contract: No named or recurring character or deity is present, as required. The scene uses the earthy palette, though its rendering has stronger dimensional shading than the series matte target; this is an observation only.

### Stanza 8 — v009 — needs-fix

- Candidate: `artifacts/d094/s008/landscape/candidate-v009.png`
- Verified SHA-256: `4c3b23a1add1254999584e0ad8b00f9c23aee9473af3e07052e24859e51514de`
- Review time: 2026-11-18 05:56:44 UTC
- Anatomy: One older devotee and one two-armed deity, with connected and proportionate limbs. No fused or duplicate people.
- Faces: Both faces are intact and distinct. Bhattathiri is clean-shaven with the contracted ash markings and small dark tuft.
- Hands and feet: Bhattathiri’s two open hands each show a thumb and four fingers. His two visible feet each show five toes. Bhagwan’s two open hands each show a thumb and four fingers; both visible feet show five toes.
- Clothing and cast: Bhattathiri’s cream dhoti, sacred thread and modest beads are appropriate; the bare upper torso is ordinary traditional dress. Five independent 11×11 skin medians were RGB/R−B: (158,83,48; 110), (136,71,39; 97), (158,83,48; 110), (163,88,53; 110), and (156,83,49; 107). Each is below 120, and the skin reads warm brown.
- Text/signature artifacts: No readable text, signature, logo or watermark. The cymbals and fruit offering have no lettering.
- Scene and caption fidelity: The single devotee worships one Bhagwan; the veena and three separate pairs of devotee footprints are visible, with no extra unidentified faces. This follows the plan and the caption’s worship/service theme without copying the mapped photo’s crowd or watermark.
- Character/deity contract: **Needs-fix.** Bhagwan’s raised palm at approximately x=905–960, y=220–280 and lowered palm at x=1185–1230, y=415–495 are salmon pink while the attached arms and the rest of his exposed skin are blue. Both patches are conspicuous at full image size and contradict the Guruvayurappan deep-blue skin contract. No other anatomy or identity defect was found. The strong modeled highlights also depart from the matte series target; that style observation is not the verdict basis.

### Stanza 9 — v005 — pass, with disclosed skin deviation

- Candidate: `artifacts/d094/s009/landscape/candidate-v005.png`
- Verified SHA-256: `0819104ff28151e82c7af260792a2e655c4608ce2b9ac05c4cba8f0089b76a43`
- Review time: 2026-11-18 05:56:44 UTC
- Anatomy: Bhattathiri stands naturally with two attached arms and legs. The shrine deity has four distinct attached arms and four hands in the required iconographic form; no extra arms or duplicate deity.
- Faces: Bhattathiri’s face is intact and clean-shaven, with contract ash stripes and central mark. The deity has one intact face.
- Hands and feet: Bhattathiri’s lowered hand shows five fingers; the hand gripping the broom is naturally wrapped around its shaft. Both feet are visible with five toes each. The deity’s four hands are separately articulated around the discus, conch, lotus and mace; visible digits are separated and consistent with natural grips, with no extra or fused fingers.
- Clothing and cast: Cream dhoti, sacred thread and restrained beads are ordinary traditional dress. The bare upper torso is not a defect. The frozen plan discloses a skin-color deviation. My skin-only 11×11 medians (RGB; R−B) at (420,170), (390,260), (470,360), (430,180), (400,270), and (460,350) were (172,88,49; 123), (178,90,52; 126), (180,94,56; 124), (177,94,55; 122), (182,98,59; 123), and (151,77,45; 106). Five of six exceed the plan’s below-120 target. At full-image scale the skin reads terracotta/reddish warm brown, not saturated orange.
- Text/signature artifacts: No readable text, signature, logo or watermark.
- Scene and caption fidelity: Bhattathiri sweeps the temple threshold; the small shrine holds one four-armed Bhagwan, and a sun, lamp and offering appear without extra deity figures. The scene follows the caption and plan; the mapped portrait’s halo and framing are not copied.
- Character/deity contract: The four-arm form is intentional and correctly attached. The disclosed warm-brown numeric deviation is present, as measured above; I do not see a separate viewer-noticeable identity or ornament defect. The elaborate shrine surround and deity ornaments read as temple iconography consistent with the other deity scenes, not palace regalia added to Bhattathiri.

### Stanza 10 — v006 — needs-fix

- Candidate: `artifacts/d094/s010/landscape/candidate-v006.png`
- Verified SHA-256: `6d82f5fed8b3b8b6b5cbedfbd32dcd15d8df79a2caff495ab990a7eeb1aa9bda`
- Review time: 2026-11-18 05:56:44 UTC
- Anatomy: One youthful two-armed Krishna and four distinct gopikas are visible. Each has one head and connected natural limbs; no fused or duplicated figures. The four women form a respectful circle around the central lotus.
- Faces: Krishna and all four women have separate, recognizable faces. Krishna is youthful rather than infant-like.
- Hands and feet: All ten visible hands show a thumb and four fingers. Eight visible gopika feet and Krishna’s one visible foot each show five toes; his other leg/foot is tucked beneath the seated pose.
- Clothing and cast: The gopikas wear fully covered village saris with modest jewelry. Krishna’s yellow dhoti, muted red-orange shawl, low band and single upright peacock feather match the contract. His bare upper torso is ordinary traditional dress.
- Text/signature artifacts: No readable text, signature, logo or watermark in the scene or corners.
- Scene and caption fidelity: One Krishna, four distinct adult gopikas and a central lotus convey the caption’s devotional union without copying the reference’s moon/reflection staging. There is no sexualized framing.
- Character/deity contract: **Needs-fix.** A narrow pale vertical forehead stroke at approximately x=858–878, y=176–205 reads as a forehead mark in the enlarged face crop, contrary to the explicit bare-forehead rule in the plan and Krishna contract. It is small but visible on inspection of the full composition. No other character or anatomy defect was found. The series matte contract is also not fully met: the image uses pronounced glossy modeling and bright highlights; this is recorded as a style observation, not an additional verdict basis.

## Recommendation and status

Regenerate stanza 6 and stanza 8 with blue deity skin continuous through both palms, and stanza 10 with a smooth, unmarked Krishna forehead. Reinspect any replacement against the exact final plan and character bytes. Stanza 7 passes this review; stanza 9 passes with the disclosed measured skin deviation and no additional visible defect. These are independent exact-checksum visual findings only; all artwork remains unapproved and this review confers no approval.

I inventoried the completed report and review surface: there is no unresolved captain decision raised by these findings. The pending captain art approval is the existing standing state, not a call created by this review. Captain-call inventory for this review: empty.

## Reproducible evidence

- Hash gate: `sha256sum -c .review-scratch/d094-review-zk/checksums.txt` (all 19 expected entries returned `OK`; list generated from the task’s expected hashes).
- Dimensions: `identify <candidate>` for each of the five candidates.
- Visual evidence: each native candidate and mapped `intake/D094/006.jpg` through `010.jpg` opened individually; enlarged crops saved under `.review-scratch/d094-review-zk/` include `s006-bhattathiri.png`, `s006-bhagwan.png`, `s006-palms.png`, `s007-cow.png`, `s007-manuscript-bowl.png`, `s008-bhattathiri.png`, `s008-bhagwan.png`, `s008-palms.png`, `s009-bhattathiri.png`, `s009-deity.png`, `s010-krishna.png`, `s010-face.png`, `s010-forehead.png`, and `s010-lower-group.png`.
- Measurement: ImageMagick crops of 11×11 pixels were converted to PPM samples and per-channel medians calculated with the Python standard library; the coordinates and results are reported under the relevant candidates.
- No candidate, reference, contract, plan, chapter content, caption, or approval manifest was modified. No approval was recorded.

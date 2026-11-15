# D039 independent landscape candidate review: stanzas 6–10

## Scope and method

I independently inspected the five selected landscape candidates against the frozen D039 plan, series bible, relevant character contracts, stanza content, reference photos, and the D039 photo captions. Each candidate was copied byte-for-byte to this task worktree’s scratch area after its source SHA-256 was verified; I inspected the copied full image at its native dimensions and enlarged crops of faces, hands, feet, torsos, deity anatomy, and crowded groups. Crops and skin samples were created only from those task-local copies. All candidate and contract hashes matched the brief. The candidate verdicts below apply only to the exact SHA-256 shown.

Commands/evidence used: Python `hashlib.sha256` read-only checks on every listed frozen contract and candidate; `identify -format '%f %wx%h %[channels]'` on local copies (all candidates are approximately 16:9, 1671/1672 × 941 px); `magick -crop` for detail crops and 12×12 sample patches in `data/d039-review-i/scratch/`; `magick ... -depth 8 txt:-` plus per-channel sorted pixel values to compute RGB medians. I viewed the complete candidate and crop set for each stanza, along with reference photos D039/006.jpg, /007.jpg, /008.jpg, /009.jpg, /010.jpg, and /011.jpg. The selected references and caption mappings are in the frozen plan’s stanza entries and `/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/2/narayaneeyam/content/daskams/d039.json` (stanzas 6–10 at lines 102, 119, 136, 153, 170; caption provenance `content/sources/d039/photo-captions.txt#6` through `#10`). Plan entry and disclosure line references are noted per candidate below.

## Frozen contract hashes

All actual SHA-256 values below equal the expected values in the review brief. The plan, series bible, and visible-cast contracts for Yogamaya, Kamsa, devas, the asura council, infant Krishna, Yashoda, Nandagopan, gopikas, Brahmins, and gopas were read for this review. Every listed contract file was byte-hash-verified, including contracts for characters not present in these five stanzas. Devaki does not appear in the reviewed stanza cast, so her sari-color rule is not applicable to these five images.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d039.json` | `fa058c552935c84177edfaca8c3cbaf9b3a3d43f2e8e7b9ad39717aa0e28136f` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/adishesha/character.json` | `d5c14279a218432cf99035e86436523e156167af06563c7890a3ae5954f5790c` |
| `art/bible/characters/asura-council/character.json` | `16f82d11ca685feca5181d1cc59a01a73e27e4196662f923e5d43305c77084f1` |
| `art/bible/characters/brahmins/character.json` | `ee6f618e0dd1b82fae4f7ab0a37abdee5cf6edb7a0544410a55e5fbc996f7b07` |
| `art/bible/characters/devaki/character.json` | `bec219a76ee6e61b859a8232e6951090c35ac83ecca1471d00b40e607c064dd6` |
| `art/bible/characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| `art/bible/characters/infant-krishna/character.json` | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| `art/bible/characters/kamsa/character.json` | `350e683816ad1e7a3edc8ecb6dac2b3a1c4a8dd910a34a3af9d2cf41983b0ab6` |
| `art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `art/bible/characters/vasudeva/character.json` | `b48f743c0d11b884adecf7f61e0d33d26f5f58a5b58dbb21197c1469c54d0ec8` |
| `art/bible/characters/yashoda/character.json` | `4184ee9aaad05fe1ecb5e2cf392ed82c88cba7ae20bb51b6527ddb6ea8601d1d` |
| `art/bible/characters/yogamaya/character.json` | `759bed23397912cc03a765560ac613ef4e7d5dca8c5b2e7c937b06034bd02122` |

## Candidate findings

### Stanza 6 — landscape v001

- **Candidate:** `artifacts/d039/s006/landscape/v001/candidate.png` (1672×941 px)
- **SHA-256:** `3900ffd5c8380be8d0928b4f4c7ab32e61cb1b4f9136292841210689ed46c4fc`
- **Review time:** 2026-11-15T23:22:06Z
- **Plan/content references:** frozen plan stanza at line 620, candidate status at line 714; D039/006 caption and stanza content at `content/daskams/d039.json` line 102. Photo 006 is the matching captioned reference.
- **Anatomy:** Yogamaya is depicted with eight connected arms; Kamsa and the small deva witnesses read as ordinary two-armed figures. No detached, fused, duplicated, or visibly malformed limbs; both of Yogamaya’s feet are fully in frame.
- **Faces:** Yogamaya’s and Kamsa’s faces are legible and proportionate in the enlarged crops. The small devas remain distinct figures, not duplicate faces.
- **Hands/feet:** The eight hand ends are distinct; visible fingers are separated in the close view, and Kamsa’s raised hand is intact. Yogamaya’s toes are individually drawn; no visible digit defect.
- **Clothing and cast:** Yogamaya wears a fully covered saffron/ochre sari and temple-mural jewelry; Kamsa wears red royal clothing and a crown; the small deva group is secondary. Ornament is visible on the goddess and king but does not violate their scene contracts. No Devaki appears.
- **Text/signature artifacts:** No readable text, watermark, signature, logo, or interface artifact in the ground, corners, sky, or figures.
- **Scene and caption fidelity:** The elevated goddess addresses Kamsa below while devas honor her with flowers, matching the reference’s arrangement and caption. The painted cloud/halo is flat and opaque, not a cinematic beam. The balcony architecture is part of the scene, not an outer frame; the composition is full-bleed.
- **Character/deity contract:** Yogamaya’s adult eight-armed divine form is explicitly required by this stanza’s plan, consistent with the exception in her contract. Kamsa remains a human king with ordinary anatomy; deva witnesses are distinct and two-armed. 12×12 skin-only patch medians (RGB): Yogamaya face patches at (1028,158) **(243,163,59)** and (1040,158) **(242,160,57)**; Kamsa face patches at (272,470) **(212,117,37)** and (285,480) **(220,126,41)**. No skin deviation is disclosed in this stanza’s candidate status; the samples appear warm painted ochre rather than glossy or neon.
- **Verdict: pass.**

### Stanza 7 — landscape v004

- **Candidate:** `artifacts/d039/s007/landscape/v004/candidate.png` (1672×941 px)
- **SHA-256:** `7973a878bb537e9fa97c81943001e64b21f2ec2f4828618d04f8dc82f1f4c864`
- **Review time:** 2026-11-15T23:22:06Z
- **Plan/content references:** frozen plan stanza at line 727, candidate status at line 814; D039/007 caption and stanza content at `content/daskams/d039.json` line 119. Photo 007 is the matching captioned reference.
- **Anatomy:** Kamsa’s seated body and the three asura figures have coherent, attached limbs. The bird-headed Baka-like figure is an intentional mythic form, not an accidental malformed person; no duplicate or fused bodies. No infants or violence are shown.
- **Faces:** Kamsa’s stern face is recognizable and human. The red and green asuras have distinct faces; the central beaked head is a deliberate supernatural silhouette.
- **Hands/feet:** The enlarged group crop shows Kamsa’s resting and gesturing hands; the walking asuras’ visible hands and feet are attached. No obvious extra/missing digits or fused extremities. The bird figure’s feet and hands remain within the composition.
- **Clothing and cast:** Kamsa has royal red/ochre dress and elaborate crown; the council has three adult, varied supernatural figures in muted council garments. The green member’s exposed arms and legs are part of a modest covered costume; no sexualized framing. No infant appears.
- **Text/signature artifacts:** No readable text, watermark, signature, or logo, including the corners and floor. The stock watermark visible in source photo 007 was not carried into the candidate.
- **Scene and caption fidelity:** The candidate retains the reference’s Kamsa/asura identities but resolves them into the required wide council chamber and nonviolent departure through the doorway. The group is listening/leaving; no attack, injury, or infant harm is depicted.
- **Character/deity contract:** Kamsa remains two-armed and human; the council has three distinct adult figures with varied silhouettes as required. Two 12×12 skin-only Kamsa shoulder patches from my copy, at (150,400) and (175,425), have RGB medians **(191,90,18)** and **(191,92,19)**. These are close to the plan’s disclosed shoulder measurements **(195,92,18)** and **(197,96,22)**; the warm orange-brown cast remains present as disclosed. The asura group uses varied red/green/earthy mural pigments; its contract allows varied mythic features and earthy pigments.
- **Verdict: pass — disclosed deviation present.** The disclosed Kamsa skin cast is the only remaining noted deviation; no separate defect was found.

### Stanza 8 — landscape v004

- **Candidate:** `artifacts/d039/s008/landscape/v004/candidate.png` (1672×941 px)
- **SHA-256:** `b8eaa75de43d6289e5776b541215a10e8fbf129b2e0edc39909d81f425737d23`
- **Review time:** 2026-11-15T23:22:06Z
- **Plan/content references:** frozen plan stanza at line 827, candidate status at line 945; D039/008 is the lead source and D039/009 is the documented caption-8 alternate; stanza content is at `content/daskams/d039.json` line 136. Photo 008 is the lead captioned reference.
- **Anatomy:** The newborn, Yashoda, Nanda, and the visible gopikas have coherent proportions and attached limbs. No accidental duplicate people or fused bodies. The baby’s partly wrapped limbs are naturally obscured by the blanket, not missing.
- **Faces:** The baby’s face is readable and infant-proportioned; Yashoda, Nanda, and the women have distinct, composed faces. Background cattle are separate and coherent.
- **Hands/feet:** Enlarged crops show Yashoda’s cradle-side hand, Nanda’s open gesture, and the gopikas’ prayer/offer hands; visible fingers are separated and no malformed hands or feet stand out. The baby’s visible feet are distinct.
- **Clothing and cast:** Yashoda’s cream sari with muted rose border and restrained jewelry fits her cream/rose palette; Nanda wears cream and muted olive/green with a simple head covering. The gopikas wear covered, varied village saris. Krishna is wrapped in muted yellow with deep blue skin and a small peacock feather; no crown or adult-scale ornament.
- **Text/signature artifacts:** No readable text, watermark, signature, logo, or interface artifact in the corners, ground, or figures.
- **Scene and caption fidelity:** The lead reference’s moonlit Gokula celebration is retained: Krishna is in a cradle, Yashoda and Nanda announce/share the news, and gopikas respond with flowers and offerings. The decorated cradle and offerings also echo the plan’s documented alternate D039/009; this does not displace the lead scene’s main action.
- **Character/deity contract:** Krishna is a natural two-armed newborn with deep indigo-blue mural pigment, curls, and peacock feather. Yashoda and Nanda remain distinct ordinary adults; Yashoda’s sari is within the contract palette. My 12×12 skin-only patch medians (RGB) are: Yashoda face (375,270) **(126,68,38)** and arm (480,455) **(205,81,50)**; Nanda cheek/face (1120,255) **(187,109,55)** and open hand (868,322) **(99,57,37)**; Krishna blue cheek (685,480) **(108,106,134)** and arm (700,520) **(114,112,148)**. The plan discloses repaired warm orange-brown Yashoda/Nanda skin and red-minus-blue shifts; those remain present in the sampled warmer human patches. The blue Krishna samples match his established indigo family.
- **Verdict: pass — disclosed deviation present.** The plan-disclosed warm skin cast is present; the inspected images show no additional defect.

### Stanza 9 — landscape v003

- **Candidate:** `artifacts/d039/s009/landscape/v003/candidate.png` (1671×941 px)
- **SHA-256:** `6f9fcab65a7119fa0e1c043ae2ef6d316e400db2349f6bfbc77155f650b30c88`
- **Review time:** 2026-11-15T23:22:06Z
- **Plan/content references:** frozen plan stanza at line 958, candidate status at line 1057; D039/010 caption and stanza content at `content/daskams/d039.json` line 153. Photo 010 is the matching captioned reference.
- **Anatomy:** The close two-figure arrangement has natural adult and infant proportions. Yashoda’s two arms connect around the baby; Krishna’s two arms are visible near his chest, with the rest naturally wrapped/obscured. No extra, detached, fused, or duplicated limbs.
- **Faces:** The mother and newborn meet each other’s gaze; both faces are legible and gently formed. No malformed or duplicated face.
- **Hands/feet:** The enlarged hands crop shows two separate Yashoda hands and the infant’s two small hands; fingers are individually drawn without an obvious count or fusion error. The feet are under the wrap and need not be visible; no extremity is cut by the frame.
- **Clothing and cast:** Yashoda is fully covered in a warm cream sari with muted rose/red blouse and modest mural jewelry. Krishna is wrapped in muted golden-yellow cloth, with deep blue skin, curls, and a peacock feather. No other cast is inserted.
- **Text/signature artifacts:** No readable text, watermark, signature, logo, or artifact in the ground, corners, or background.
- **Scene and caption fidelity:** This matches the reference’s intimate mother-and-newborn composition and the caption’s loving gaze and touch. As the plan itself notes, nursing is not literally visible; the candidate conveys the quiet maternal feeding/caressing moment through the hold and gaze.
- **Character/deity contract:** Yashoda’s face and sari palette are consistent with the contract; Krishna is a two-armed natural infant in the deep indigo family. My 12×12 skin-only samples: Yashoda face at (780,230) **(152,74,27)** and cheek at (780,250) **(185,101,45)**; Krishna cheek (995,485) **(109,104,132)** and forearm/hand (945,525) **(94,90,119)**. The plan discloses Yashoda’s remaining warm orange-brown skin deviation; my two human patches have red-minus-blue differences of 125 and 140, consistent with that disclosure. Krishna’s samples are blue rather than pale/gray.
- **Verdict: pass — disclosed deviation present.** The disclosed Yashoda skin shift is present; no additional defect was observed.

### Stanza 10 — landscape v004

- **Candidate:** `artifacts/d039/s010/landscape/v004/candidate.png` (1671×941 px)
- **SHA-256:** `ec1b737a67e2733c6e7fd2c9cb3ccfb6a6136caeb9e208273bff2b7d1be0131a`
- **Review time:** 2026-11-15T23:22:06Z
- **Plan/content references:** frozen plan stanza at line 1070, candidate status at line 1181; D039/011 caption and stanza content at `content/daskams/d039.json` line 170. Photo 011 is the matching captioned reference.
- **Anatomy:** Nanda, the newborn, the Brahmin elders, and the supporting cowherds have coherent attached limbs and distinct bodies. No malformed or duplicated people. The infant’s legs and arms are partly supported/wrapped but read naturally.
- **Faces:** Nanda, the baby, and the Brahmin elders have clear differentiated faces; the group does not merge or clone. The visible cow is coherent and backgrounded.
- **Hands/feet:** Nanda’s gift hand and supporting arm are distinct; the elders’ prayer and receiving hands are attached and legible. The infant’s visible feet are separated. No visible extra/missing digits or malformed extremity.
- **Clothing and cast:** Nanda wears a cream headcloth/dhoti and muted green upper garment; his costume remains cowherd rather than royal. The elders wear traditional cream dhotis, upper cloths, and sacred threads. The devotional woman at the right is modestly dressed. No Bhattathiri is inserted as a historical participant.
- **Text/signature artifacts:** No readable text, watermark, signature, logo, or interface artifact, including the ground and corners. The source photo’s watermark is absent.
- **Scene and caption fidelity:** Nanda presents a gift to the assembled Brahmins beside the newborn, while offerings and the group communicate blessing and household joy. The candidate keeps Nanda and Krishna central and carries the closing prayer through devotional attention rather than inserting Bhattathiri.
- **Character/deity contract:** Nanda is a two-armed householder in cream/olive-green, without crown or armor. Krishna is a natural two-armed infant with deep indigo-blue skin, yellow wrap, curls, and peacock feather. The Brahmins remain distinct elders, not Bhattathiri duplicates. My 12×12 skin-only medians: Nanda face (1070,260) **(193,110,45)** and gift hand (728,445) **(195,110,47)**; Krishna foot/leg patches (1020,560) **(91,91,127)** and (1040,560) **(91,91,127)**; Brahmin face (315,408) **(123,71,28)** and hand (423,520) **(186,102,45)**. The plan-disclosed Nanda warm orange-brown samples remain present; the sampled Nanda red-minus-blue differences are 148 and 148. Krishna remains blue and the Brahmin samples are warm mural brown.
- **Verdict: pass — disclosed deviation present.** The plan-disclosed Nanda skin cast is present; no separate defect was found.

## Recommendation and captain-call inventory

All five exact-checksum candidates pass this independent visual review. Keep the disclosed warm skin deviations recorded for stanzas 7–10; they do not independently warrant needs-fix under the review standard. Human art approval remains pending and is not granted by this report. I found no new unresolved choice that belongs to the captain, so this review’s captain-call inventory is empty; the existing pending art-approval state is the standing gate, not a decision raised by this review.

The local copies and crops under `data/d039-review-i/scratch/` were temporary inspection material and are removed after this report is finalized. No candidate, intake file, approval manifest, or producer file was modified.

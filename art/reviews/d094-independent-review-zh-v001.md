# Independent D094 landscape review

Reviewed 2026-11-18 05:03 UTC. This is an independent visual review of the exact candidate checksums below. I inspected each candidate at native size, viewed its mapped source photo, and inspected enlarged crops of the figures and relevant extremities. I used the frozen final plan and character contracts, not producer review records. The source-map entry and caption numbering map stanza 3/4/5 to `intake/D094/003.jpg`, `004.jpg`, and `005.jpg` respectively (`content/sources/d094/reference-map.json:30-50`; captions at `intake/D094/photo-captions.txt:11-24`).

## Input verification and evidence

I generated `.review-scratch/expected.sha256` from the expected paths and digests in the task brief and ran `sha256sum -c` on it. Every candidate, reference photo, frozen contract, reference map, and caption file returned `OK`. Candidate native dimensions are 1672×941 (S003), 1670×942 (S004), and 1672×941 (S005), measured with `identify`. Focused crop files were written under this worktree's `.review-scratch/` with ImageMagick `convert -crop`; source images were not modified. Skin patch medians below were computed from each original candidate using ImageMagick raw RGB output and Python channel medians over 11×11 pixel patches. I also inspected image corners, ground, water, and dense detail for text/signature artifacts.

Frozen contract SHA-256 values (all verified with `sha256sum -c`):

- Final plan `art/plans/d094.json`: `17012e1dc633937610b524cd1c5f5e9f88142fcfb89d3ceb52fd114ae573f535`
- Series bible `art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- Bhattathiri contract `art/bible/characters/bhattathiri/character.json`: `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535`
- Brahma contract `art/bible/characters/brahma/character.json`: `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`
- Guruvayurappan contract `art/bible/characters/guruvayurappan/character.json`: `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456`
- Krishna-Vrindavan-youth contract `art/bible/characters/krishna-vrindavan-youth/character.json`: `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d`
- Gopikas contract `art/bible/characters/gopikas/character.json`: `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665`
- Reference map `content/sources/d094/reference-map.json`: `8642034f80398172e7e1a25c1c4d91606f7fe540d998c3f6665d6fcd7ffbefdb`
- Photo captions `intake/D094/photo-captions.txt`: `8b040f7e5f008a9d3b3d826c93b05c5810f25cadf043ea0930de8a4cc970aacb`

Review commands: `sha256sum -c .review-scratch/expected.sha256`; `identify` on the six candidate/reference files; `convert <candidate> -crop <region> +repage <absolute .review-scratch output>` for enlargements; and the RGB median sampling described above. All artifact pixel regions below use the candidate's original top-left coordinate origin.

## Stanza 3 — landscape v014

Candidate: `artifacts/d094/s003/landscape/candidate-v014.png`  
Verified SHA-256: `475482c9c53f51f95eb225aee2ef76d89de8a4bea0a3d24fd8d3903bcbafb7e3`  
Reference: `intake/D094/003.jpg` (verified SHA-256 `6d76512ff40040a64751dbff73ddffa37853e7f81b429e4e6babf8883bfa0ea4`).  
Plan: `art/plans/d094.json:130-178`; source photo is surrender context only. Bhattathiri's compact tuft and non-orange skin requirements are explicit at plan lines 139-152; his shared hair contract says small traditional tuft at `character.json:19-23`.

- **Anatomy:** Two distinct people only. Bhattathiri kneels (the plan-disclosed pose) and Bhagwan sits. Their limbs are connected and proportions read naturally. The poses are clear and not duplicated.
- **Faces:** Both faces are coherent. Bhattathiri is older and clean-shaven, with the ash markings. Bhagwan has a calm expression. No malformed facial features.
- **Hands/feet:** Bhattathiri's joined namaste reads as two hands with overlapping thumbs; the visible fingertip ends are distinct. Bhagwan's raised hand shows one thumb and four fingers; the resting hand is connected at the wrist. Both visible feet show five toes each. No cut-off key extremity.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread, and prayer beads; the bare upper torso is ordinary traditional dress. Bhagwan's dhoti and drape are present. Exactly the two planned figures appear. The bowl, vessel, and discarded crown are grouped at the far edge. The rendering has conspicuous glossy shading and bright gold highlights, departing from the series matte/painted-ochre treatment; I record this style deviation separately.
- **Text/signature artifacts:** None seen, including in the lower ground and corners.
- **Scene and caption fidelity:** The two figures face one another in a grove and the devotee's surrender is clear. The photo's embrace and glossy portrait staging are not copied; only surrender context is retained. The kneeling pose is the plan-disclosed deviation.
- **Character/deity contract and skin:** Bhagwan's blue skin, peacock-feather crown, and regal iconography fit Guruvayurappan's contract (`guruvayurappan/character.json:18-27`). Bhattathiri's sampled 11×11 skin medians: cheek origin (375,305) RGB (134,74,39), R−B 95; cheek (390,320) (145,81,46), R−B 99; torso (330,465) (137,72,37), R−B 100; upper arm (255,450) (138,77,43), R−B 95. By eye these read warm brown, not orange. **Needs-fix:** at approximately x=260–310, y=285–345, the nape hair is a dangling curved lock/loop extending well below the scalp. It remains visibly longer than the small tuft required by plan lines 141/152 and Bhattathiri's contract. A viewer can distinguish the trailing curl in the full image; this is the earlier hair issue still present in v014.

**Verdict: needs-fix.** The checksum-bound defect is the conspicuous trailing nape curl in the cited region. This review does not approve the artwork.

## Stanza 4 — landscape v025

Candidate: `artifacts/d094/s004/landscape/candidate-v025.png`  
Verified SHA-256: `661771f0a19f876961b9b4cc0eb7730b81f78ce5976b52eccc2bc985f38e5fe8`  
Reference: `intake/D094/004.jpg` (verified SHA-256 `1cd9c48899e45b86751a317a51d42b89bd1e3c670596479624dc6b9ca3c18dd3`).  
Plan: `art/plans/d094.json:187-245`; the contract requires four heads and arms with four attributes, low plain crowns, and restrained ornaments (plan lines 197-213; Brahma contract `character.json:22-38`).

- **Anatomy:** Brahma has four heads: three distinct faces and a rear-facing fourth head. Four separate arms attach to his torso and hold the lotus, beads, pot, and blank scripture. Bhattathiri and Bhagwan each have coherent, connected bodies. No duplicated people or malformed face.
- **Faces:** Brahma's three visible faces are separately drawn and legible; the fourth is back-facing rather than a duplicated front face. Bhattathiri is clean-shaven with ash marks; Bhagwan's face is calm. No face is cut off.
- **Hands/feet:** Brahma has four visible hands, each connected to an arm and holding a distinct attribute. The fingers are distinguishable at this scale, without an obvious extra or fused digit. Bhattathiri's namaste is coherent. Bhagwan's two visible open hands each show a thumb and four fingers; his feet each show five toes. No required extremity is clipped.
- **Clothing and cast:** Brahma's cream/saffron robes, sacred thread, and minimal chest ornament are visible. Crowns are four low, plain matte ochre forms without jewel bands or gems; wrist/arm decoration is thin. They do not read as oversized tiered regalia. Bhattathiri's bare torso with dhoti is ordinary traditional dress. Only the planned three figures are present. The rendering has conspicuous glossy shading and bright gold highlights, departing from the series matte/painted-ochre treatment; I record this style deviation separately.
- **Text/signature artifacts:** None seen in the cosmic field, temple, plants, ground, or corners. The scripture is blank.
- **Scene and caption fidelity:** The image establishes exposed cosmic heights above a sheltered sanctuary and does not depict hell or invented punishment. The mapped photo's reclining Vishnu is not copied; the candidate uses its cosmic context only, consistent with the caption and plan.
- **Character/deity contract and skin:** Brahma's crowns and ornaments meet the specified restrained design. Bhattathiri's own patch medians include cheek origin (710,465) RGB (160,83,44), R−B 116; jaw (695,490) (180,98,54), R−B 126; torso (655,590) (184,101,57), R−B 127; upper arm (630,635) (122,58,29), R−B 93. The plan-disclosed upper-arm deviation is present (plan candidate-status reports R−B 132 at center (615,650)); my independent patch with upper-left origin (610,645) measures RGB (181,94,49), R−B 132. By eye his exposed skin reads warm brown overall, not saturated orange, though these jaw/torso patches exceed the plan's R−B 120 guide. **Needs-fix:** Bhattathiri's nape at approximately x=600–635, y=485–535 also has a curved hanging lock rather than the small dark tuft required by his shared character contract (`bhattathiri/character.json:19-23`). It is visible in the enlarged crop and still reads as a trailing curl.

**Verdict: needs-fix.** The contract-visible nape curl is the defect; the disclosed skin deviation is also recorded above. Brahma's repaired crowns and ornaments pass this review. This review does not approve the artwork.

## Stanza 5 — landscape v017

Candidate: `artifacts/d094/s005/landscape/candidate-v017.png`  
Verified SHA-256: `889cedf92b0bb17a54b66abf8178dc69e120486559e2e5b95e3c2b2e783dc268`  
Reference: `intake/D094/005.jpg` (verified SHA-256 `32720af189874958820a308efaa8a34677825830742422e5192d1845240e8864`).  
Plan: `art/plans/d094.json:248-292`; it requires a connected dream/waking tree, one generic reclining figure, plain forehead/no devotional ornaments, and a chest-covering uttariya (plan lines 252-262, 270-292).

- **Anatomy:** One reclining generic figure lies along the left branch of a single connected trunk. Both arms connect from separate shoulders; the paths are distinct in the enlarged crop. Two legs and feet are present. No duplicate or malformed body.
- **Faces:** The sleeping face is coherent and relaxed. The forehead is plainly bare with no mark.
- **Hands/feet:** The head-supporting hand has four clear fingers; its thumb is partly occluded at the head contact, the plan-disclosed point. The other hand rests visibly on the thigh and has a thumb plus four fingers. Each foot has five visible toes. No key extremity is cut off.
- **Clothing and cast:** The opaque warm-cream uttariya fully covers the chest and separates clearly from both arms; the saffron cloth is separate. The single generic figure has no devotional ornaments. Bare limbs are ordinary traditional dress, not exposed chest or sexualized framing. The rendering has conspicuous glossy shading, departing from the series matte treatment; I record this style deviation separately.
- **Text/signature artifacts:** None seen anywhere in the candidate, including the ground, branches, and corners. The source photo contains labels, but none are reproduced.
- **Scene and caption fidelity:** The dream side is shadowed with a reclining figure and mango fruit; the clear waking side has open space and a lotus. Both grow from one trunk. This follows the plan's metaphor and does not copy the mapped source infographic's text or busy composition.
- **Character/deity contract and skin:** No named deity or recurring character is present. The disclosed skin deviation is present. My 11×11 patches: cheek origin (245,390) RGB (163,82,37), R−B 126; jaw (250,405) (164,84,37), R−B 127; forearm (550,440) (171,84,32), R−B 139. The disclosed range above 120 is measurable, while by eye the exposed skin reads warm brown, not orange. The torso is fully covered, so I did not sample covered cloth as skin.

**Verdict: pass.** No viewer-noticeable anatomy, clothing, scene, or artifact defect found. The measured skin-guide deviation and partly occluded supporting thumb are disclosed plan points. This is a visual-review pass only; it does not approve artwork.

## Inventory and recommendation

No new captain decision arose from this review. The standing pending art approval remains pending, and this report grants no approval. Captain-call inventory for this review is empty. Recommend new candidate versions for S003 and S004 to shorten Bhattathiri's nape hair to the contract tuft; retain the exact checksums and image-specific findings above. S005 v017 passes this review.

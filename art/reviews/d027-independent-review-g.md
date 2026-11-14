# D027 landscape candidate visual review

## Scope and method

I independently reviewed the four selected landscape candidates at native resolution (each 1672 × 941 pixels) and inspected focused crops at native resolution and enlarged 2×. I compared each scene to the frozen final plan, its mapped D027 reference photo and caption, and the applicable cast contracts. Review time for all four checksum-bound findings: **2026-11-14T01:44:56Z**.

Commands used: `sha256sum` on the four candidates and fourteen frozen contracts; `cat` on the frozen plan, series bible, character contracts, D027 chapter content, and supplied photo captions; `jq '.stanzas[] | select(.n >= 8 and .n <= 11)'` on the plan; `magick identify -format '%f %wx%h\n'` on the candidates; `magick ... -crop ...` to create image-specific focus crops and `view_image` to inspect the full candidates, references, and crops. The command output confirmed the four candidates are 1672 × 941. The crops included S008 pullers and rope, S009 Vishnu and Brahma, S010 both pulling groups, and S011 Vishnu's grips and Bhattathiri.

The plan maps S008–S011 to `intake/D027/013.jpg`–`016.jpg`, respectively: frozen plan lines 390–580; chapter content `content/daskams/d027.json` lines 87–122; photo captions `intake/D027/photo-captions.txt` lines 56–74. Reference photos were viewed directly from the worktree intake. Verdicts apply only to the listed exact candidate checksum. They are visual review findings, not art approval.

## Frozen contract checksums

Every actual SHA-256 below matches the expected value in the task brief. The frozen plan and series bible were read in full; the character contracts listed here were read in full.

| Contract file | Actual SHA-256 |
|---|---|
| `art/plans/d027.json` | `1916d7fa8441ddbace6956f7bd4f8b0672e2792803db399206cf21ce82c20dd3` |
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

## Stanza 8 — landscape v004

Candidate: `artifacts/d027/s008/landscape/candidate-v004.png`  
SHA-256: `340f96cb88f1770d7ba9c11ce3c8a8cd43edc8d15624b811d6ac0ec6f515daf6`  
Reference: `intake/D027/013.jpg`; caption describes the devas and asuras resuming vigorous churning as Vishnu renews their strength through Vasuki.

- **Anatomy:** The four pullers are individually connected at shoulders, elbows, hips, knees and ankles in the full image and enlarged left/right crops (roughly x=0–620 and x=1000–1500, y=250–800). Each has two arms and two legs; no extra, fused or detached limbs are visible.
- **Faces:** Four distinct faces, each legible at full-image scale; no malformed or duplicated person is apparent.
- **Hands and feet:** Enlarged rope-grip crops (x=150–610 and x=1000–1500, y=430–610) show separate hands wrapped around the serpent. Finger divisions are stylized but no extra or missing digit that reads as an error is visible. Feet are complete within the waterline composition; no malformed toe grouping is visible.
- **Clothing and cast:** Both groups wear traditional waist garments. The left pair are the asuras holding Vasuki's head; the right pair are the devas holding the tapering tail. Their exposed torsos are ordinary traditional mural dress, not sexualized framing.
- **Text/signature artifacts:** None visible in the full image or its corners, water, mountain, or ground.
- **Scene and caption fidelity:** One serpent head is at the asura side; its continuous body wraps the raised Mandara and reaches the devas' tail side. The broad churning composition and distinct groups match the mapped caption and plan.
- **Character/deity contract:** The plan's exact requirement is a *restrained warm mineral radiance reaching both groups and the serpent, not a second figure* (plan lines 407–415). A diffuse warm amber field fills the backdrop from x=0–1672, y=0–600, including directly around both puller groups and the serpent; it reads as shared ambient glow. There is no separate Vishnu figure. I find the required radiance present, though it is diffuse rather than a localized halo. Vasuki is a single connected serpent with one head and a tapering tail.

**Verdict: pass** — exact checksum above only.

## Stanza 9 — landscape v002

Candidate: `artifacts/d027/s009/landscape/candidate-v002.png`  
SHA-256: `8ce57af6c8c18bc4afd3b77fa3f3200965441c7cf2db898f08ffb16411f23a7a`  
Reference: `intake/D027/014.jpg`; caption describes Brahma, Shiva, and other gods praising Vishnu and showering flowers.

- **Anatomy:** Vishnu is the central standing figure with four attached arms. Brahma is seated, with four distinct arms; Shiva is a single seated figure with two arms. The gods at the right remain separate bodies. No malformed or fused body is apparent in the full image or the enlarged central and right-side views.
- **Faces:** Vishnu's face is proportionate and legible. Brahma has the three distinct front-visible faces required by the contract; the fourth is specified to face behind the central head and not be seen from the front (Brahma character contract lines 22 and 33–38), so its absence from the frontal view is consistent. Shiva and the other visible gods have distinct, legible faces; no unintended duplicate is evident.
- **Hands and feet:** Enlarged Vishnu and Brahma crops (Vishnu x=160–860, y=40–820; Brahma x=900–1600, y=40–740) show their hands separately attached and holding their attributes. Vishnu's lotus hand rests on Mandara. Brahma's four hands hold separate objects. No visible extra/missing finger or malformed grip reads as a full-image defect. Their visible feet are intact; no digit error is apparent.
- **Clothing and cast:** Traditional garments cover the figures appropriately. Vishnu wears a tall tiered crown, a peacock feather, and multiple necklaces at approximately x=260–500, y=20–650. These are the exact disclosed ornament deviation in plan line 479; I record it as present and do not count it as a defect. Brahma's crown, necklaces, and sacred thread are ordinary temple-mural iconography. Shiva and the devas are modestly clothed.
- **Text/signature artifacts:** No readable text, signature, logo, or watermark is visible, including at the lower waterline and image corners.
- **Scene and caption fidelity:** Vishnu steadies the rising Mandara with the lotus hand; Brahma and Shiva praise him, with a light flower shower from the compact group of witnesses. The arrangement matches the plan and caption.
- **Character/deity contract:** Vishnu's four arms are attached; Brahma's three front-visible faces and four arms conform to the specified form. The known Vishnu ornament deviation is the only disclosed deviation observed. Peripheral figures at the right edge are cut by the mural boundary at their bodies, but their faces and key hands remain inside the frame; they read as edge-entering witnesses, not accidentally severed key extremities.

**Verdict: pass** — exact checksum above only.

## Stanza 10 — landscape v006

Candidate: `artifacts/d027/s010/landscape/candidate-v006.png`  
SHA-256: `4e73e13bbc96505b19fbe02be077641ae08230acb9c692ea6d12cf25a74a037b`  
Reference: `intake/D027/015.jpg`; caption describes Vasuki's poison heating the asuras, with rain for the devas only.

- **Anatomy:** The two devas at left and two asuras at right each have connected two-armed, two-legged bodies. Enlarged crops of both groups (left x=0–800 and right x=850–1650, y=180–830) show no extra, detached or fused limbs. The visible leg stances and feet are coherent for pulling.
- **Faces:** The two deva faces share near-identical features, hair and head angles; the two asura faces also share near-identical features, hair and head angles. These are the exact disclosed paired-face deviation in plan line 527 and are stated here as present, not counted against the verdict. Their bodies, garments and poses remain separate. I see no additional duplicate person or face beyond the disclosed pairs.
- **Hands and feet:** Enlarged crops show the pullers' hands gripping the same continuous rope; finger shapes are distinct enough to read as hands and no clear extra/missing digit is visible. No malformed feet or toe grouping is apparent.
- **Clothing and cast:** The devas wear light cream/olive garments and the asuras wear darker maroon garments. Chests are exposed in conventional traditional mural dress; no sexualized framing is present.
- **Text/signature artifacts:** None visible, including the sky, smoke, water, or corners. The source reference has a watermark, but no such mark appears in this candidate.
- **Scene and caption fidelity:** One Vasuki head at the right emits muted fumes toward the asuras; rain falls over the left/deva side only. The asuras remain dry. The connected serpent runs around Mandara and between both groups. This matches the caption and plan.
- **Character/deity contract:** Vasuki has one head and a continuous body with a tapering tail at the left. The rain and fumes obey the selective placement rule. The only face repetition is the already disclosed pairwise similarity.

**Verdict: pass** — exact checksum above only.

## Stanza 11 — landscape v002

Candidate: `artifacts/d027/s011/landscape/candidate-v002.png`  
SHA-256: `50f2e4ea5f0188a0446547f496fb7cbc8154644b65003e36840c54f29958b54d`  
Reference: `intake/D027/016.jpg`; caption describes Vishnu resuming the churning with two hands and Bhattathiri praying for relief.

- **Anatomy:** Vishnu has exactly two attached arms, each reaching to and gripping a different section of the same Vasuki. Bhattathiri kneels separately on the shore. Fish and two distinct makara-like sea creatures surface in the water. No fused or extra bodies/limbs are apparent.
- **Faces:** Vishnu's serene face is intact. Bhattathiri's older face is lined and clean-shaven, with no beard or moustache. No duplicate person is visible.
- **Hands and feet:** The enlarged crop around Vishnu's torso and the serpent grips (x=90–1340, y=250–640) shows two separate hands, one on each side of the composition; both remain connected to his two arms. Bhattathiri's folded prayer hands are connected and readable in the focused right foreground crop (x=1200–1650, y=220–870). No clear digit error is visible. Vishnu's feet are partly obscured by water and cloth, not cut off by the frame; Bhattathiri's seated legs and feet are coherently folded beneath his dhoti.
- **Clothing and cast:** Vishnu's cream dhoti and maroon sash are in-frame. His tall tiered crown, peacock feather, and heavy necklaces at approximately x=430–740, y=0–430 are the known disclosed ornament deviation (plan line 577); I record them as present and do not count them as a defect. Bhattathiri wears a cream dhoti, sacred thread and prayer beads, with modest upper-body exposure consistent with traditional dress.
- **Text/signature artifacts:** None visible, including water, shoreline, foliage and corners.
- **Scene and caption fidelity:** Vishnu alone resumes churning in the milk ocean with two hands gripping opposite parts of Vasuki. Sea creatures surface; no nectar is shown. The small prayerful poet stays on the right shore, with no second divine tableau. This matches the stanza plan and caption.
- **Character/deity contract:** Vishnu's two-arm form matches the stanza-specific contract; the serpent is continuous with one head and a tapering tail. Bhattathiri matches the older clean-shaven identity and has no forbidden facial hair. The disclosed Vishnu ornament deviation is the only deviation noted.

**Verdict: pass** — exact checksum above only.

## Recommendation and captain-call inventory

All four exact candidate checksums pass this independent visual review. The review raises no new captain decision. The chapter's pending captain art approval remains the existing standing state, not a call created by this review. My captain-call inventory for this review is empty.

# D028 independent landscape visual review: stanzas 6–10

Review completed: **2026-11-14T02:54:42Z**. Each verdict below applies only to the listed candidate checksum. The candidates remain unapproved; this report does not constitute captain art approval.

## Method and evidence

I independently reviewed each full candidate at its supplied native resolution (1672 × 941 px), then copied it to this task's scratch directory and inspected enlarged crops of faces, torsos, hands, feet, crowded figures, water/ground, and image edges. I did not write to the producer's artifact or intake directories. I opened the mapped intake photos and read their supplied captions, then compared each candidate with the matching final plan entry and relevant frozen character contracts.

Integrity checks were run before visual inspection with `sha256sum` on all five candidate paths and the frozen plan/character paths listed below. All actual hashes matched the expected values in the assignment. The five candidate hashes were run again after inspection and remained identical. Evidence commands included:

- `sha256sum <the five listed candidate paths> <the frozen plan and character paths>` (before and after inspection; all expected hashes matched)
- `jq '.stanzas[] | select(.n >= 6 and .n <= 10)' <frozen art/plans/d028.json>`
- `cat <content/daskams/d028.json> <OneDrive intake/D028/photo-captions.txt>`
- `cat <the relevant frozen character.json files>`
- `magick <task scratch copy> -crop <native-pixel-region> +repage -resize 200% <task scratch crop>` followed by direct visual inspection of each crop
- `file <task scratch candidate copy>` confirmed 1672 × 941 px (plan dimensions at `art/plans/d028.json:325,377,429,481,529` also specify 1672 × 941 px).

The final plan maps stanzas 6–10 to intake photos 010–014 at `art/plans/d028.json:284–538`; chapter commentary maps them to caption references 010–014 at `content/daskams/d028.json:67–113`, and the caption text is at `photo-captions.txt:49–73`. I inspected those five photos individually. The plan explicitly adapts the broader source icons: two-armed Lakshmi in 6–8, restrained modest Varuni plus two asuras in 9, and two-handed one-pot Dhanvantari in 10.

### Frozen contract SHA-256 values

The actual SHA-256 values below were recorded from the frozen copies read for this review. Each matched its expected value.

| Contract file | SHA-256 |
|---|---|
| `art/plans/d028.json` | `c09738a636a8efddb9928568813171de47ae8dfb1ad2298ef7b524b9becbac13` |
| `art/bible/characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `art/bible/characters/apsaras/character.json` | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| `art/bible/characters/asuras/character.json` | `00c00f503c33706c54306461c404e467e54ffcc40266f89190e0376a7d4afded` |
| `art/bible/characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `art/bible/characters/dhanvantari/character.json` | `3557d434fe4cdf43000a3ba3605fbb23f6a977adbbfec21a5a59c428e7b7f951` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `art/bible/characters/lakshmi/character.json` | `541fc9d30aed43e142a7bd195b994710bd91d834df484a6b9e4eba2f7c74ef8c` |
| `art/bible/characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `art/bible/characters/uchchaihshravas/character.json` | `b80c20b5d4d52bbca4839119616769f86b9d431776e6de54f2e72a955a1c48c7` |
| `art/bible/characters/varuni/character.json` | `15d582ded2890fede70d1ad79cf5f6d0f5e1d6c0a2de1f9a9477ecdd4e70910f` |

Relevant explicit character rules reviewed include Lakshmi's adult two-arm identity and no-cropping/text prohibitions (`characters/lakshmi/character.json:7–35`); Guruvayurappan's blue youthful identity, costume, and intact hands/feet rules (`characters/guruvayurappan/character.json:11–37`); Varuni's distinct two-arm modest depiction (`characters/varuni/character.json:7–22`); two-arm distinct asura witnesses (`characters/asuras/character.json:7–21`); and Dhanvantari's ordinary two-arm form and no extra hands or vessels (`characters/dhanvantari/character.json:7–16`). The stanza-specific arm and prop instructions come from the corresponding plan entries, which take precedence for these narrative scenes.

## Per-candidate findings

### Stanza 6 — v001 — `artifacts/d028/s006/landscape/v001/candidate.png`

- **Verified SHA-256:** `8ce8426b1ed9c6c6b28f76c749fe7ff0da119f708e551b0ae9088ca415e04076`
- **Review time:** 2026-11-14T02:54:42Z
- **Anatomy:** Two full figures with connected, proportionate bodies. Lakshmi has two arms; Vishnu has four separate arms. No duplicate or fused body/limb is visible.
- **Faces:** Both faces are intact and serene. Lakshmi has a warm golden-brown complexion; Vishnu has a youthful deep-blue complexion. Neither face or crown is cut by the frame.
- **Hands/feet:** Lakshmi's two hands hold the two sides of one hanging flower garland at waist height; it is still in her hands and not yet placed on Vishnu. Vishnu's four hands are distinct and carry the discus, conch, lotus, and welcome gesture. The visible hands show no extra or missing digit; grasping fingers are partly occluded by the props/flowers. Both figures' feet are fully inside the frame; visible toe marks are distinct and proportionate.
- **Clothing/cast:** Opaque yellow sari and green blouse; Vishnu wears yellow dhoti and red shawl. Only the two required figures appear. Both wear traditional gold jewelry and tiered crowns; Vishnu's crown includes a peacock feather, consistent with the contract.
- **Text/signature artifacts:** None seen after inspecting the patterned ground, water, and corners.
- **Scene/caption fidelity:** Matches photo 010 and its caption: Lakshmi approaches Vishnu carrying the garland. The shore setting and space between the figures follow `art/plans/d028.json:284–334`.
- **Character/deity contract:** Matches the two-arm Lakshmi scene identity and four-arm Vishnu narrative directions at `art/plans/d028.json:302–305`; no physical narrator or extra deity is present.
- **Verdict: pass.**

### Stanza 7 — v002 — `artifacts/d028/s007/landscape/v002/candidate.png`

- **Verified SHA-256:** `0b47c8def88aaa7d249fe33ddaabf57d2a5606c7468a24dd39e91f43c5e85424`
- **Review time:** 2026-11-14T02:54:42Z
- **Anatomy:** Two full, separate figures. Lakshmi has two attached arms; Vishnu has four attached arms. Arm paths remain readable around the garland; no detached, fused, or duplicated limbs or bodies are visible.
- **Faces:** Both faces are intact, calmly expressive, and within the frame. The Vishnu face is deep blue and youthful; Lakshmi's face is warm golden-brown.
- **Hands/feet:** Lakshmi's two hands are distinct on either side of the single garland as she places it on Vishnu. Vishnu's upper hands hold the discus and conch; both lower hands remain below the garland, one open and one holding the lotus. Enlarged hand crops show no extra, missing, or malformed fingers. Both figures' feet are inside the frame; five toe marks are visible on each foot and are not fused or extended beyond the outline.
- **Clothing/cast:** Opaque yellow sari/green blouse and yellow dhoti/red shawl, with traditional gold ornamentation and tiered crowns. The scene contains only the two planned figures; Shiva and Brahma are not added.
- **Text/signature artifacts:** None seen in ground, water, or corners.
- **Scene/caption fidelity:** The candidate depicts the exclusive garlanding described in caption 011. It uses the two-figure adaptation of reference 011 and follows the full-figure spacing and arm separation required at `art/plans/d028.json:336–386`.
- **Character/deity contract:** Lakshmi's two-arm narrative form and Vishnu's four-arm form with upper attributes match the stanza plan at `art/plans/d028.json:354–357` and the character contracts. The crowns and layered jewelry are visible traditional iconography, not a contract violation.
- **Verdict: pass.**

### Stanza 8 — v002 — `artifacts/d028/s008/landscape/v002/candidate.png`

- **Verified SHA-256:** `8f203d17956b8dd064b0acc704b3d00e75d5439216a22e98b3f7b2acaf25e786`
- **Review time:** 2026-11-14T02:54:42Z
- **Anatomy:** The two seated figures remain distinct on the shared lotus throne. Vishnu has four attached arms; Lakshmi has two. Their torsos and arm roots are separate, with no body fusion or duplicate goddess.
- **Faces:** Both faces are intact and calmly expressive. Vishnu's face and Lakshmi's face are separately readable and fully within the frame.
- **Hands/feet:** Vishnu's upper hands hold the discus and conch; one lower hand rests on his lap and the other extends in welcome beside Lakshmi. Lakshmi has one hand resting on her lap and one open, compassionate hand toward the landscape. Enlarged crops show no anomalous digits. Feet are concealed by the seated pose and lotus rather than cropped at the frame edge.
- **Clothing/cast:** Opaque yellow sari/green blouse and yellow dhoti/red shawl; traditional gold ornamentation and tiered crowns. Only the two planned figures are present.
- **Text/signature artifacts:** None seen in foliage, water, ground, or image corners.
- **Scene/caption fidelity:** Consistent with caption 012's acceptance and compassionate glance. The two distinct seated figures, shared low lotus throne, ocean, and flourishing landscape follow the plan's adaptation of the reference icon at `art/plans/d028.json:388–438`.
- **Character/deity contract:** The two-arm Lakshmi and four-arm Vishnu, including the plan's specified hand actions and attributes, are respected at `art/plans/d028.json:406–409`. No extra Lakshmi figure is present.
- **Verdict: pass.**

### Stanza 9 — v002 — `artifacts/d028/s009/landscape/v002/candidate.png`

- **Verified SHA-256:** `36db12170d5ef8b5372f9b197fd2032e2f8c53b6e3bf644bd072218616c7c507`
- **Review time:** 2026-11-14T02:54:42Z
- **Anatomy:** Varuni has two attached arms and is separate from both asuras. The asuras are distinct adult figures with ordinary proportions and two arms each. Vishnu has four attached arms; all arm roots and outlines are readable. No fused or duplicated body/limb is visible.
- **Faces:** Varuni's oval face is intact and visibly distinct from Lakshmi's established face. The two asura faces are distinct (one dark-haired/moustached, one grey-haired/bearded). Vishnu's face is intact; no face is clipped.
- **Hands/feet:** Varuni holds one bowl securely with both hands. Vishnu's four hands are distinct: upper discus/conch, lower lotus, and lower open offering hand. Both asuras' joined prayer hands are clearly attached; enlarged crops show no malformed or extra digits. Vishnu's feet and both asuras' feet are fully shown; the visible toe marks are distinct and within the foot outlines. Varuni's feet are concealed by the lotus and sari, not cut off by the frame.
- **Clothing/cast:** Varuni wears opaque cream/ochre sari with maroon edge and a smaller crown; no sensualized framing or intoxicated caricature. The asuras wear muted maroon/green cloth and restrained ornaments. The scene has two asuras, one Varuni, and one Vishnu, with no duplicate goddess.
- **Text/signature artifacts:** None seen in patterned ground, water, or corners.
- **Scene/caption fidelity:** The central Varuni with bowl and respectful asura witnesses follows the caption at photo 013. The source photo is a more exposed seated Varuni icon; the candidate follows the plan's explicit modest adaptation and includes Vishnu's offering gesture at `art/plans/d028.json:440–490`.
- **Character/deity contract:** Varuni's two-arm, modest, distinct depiction matches `characters/varuni/character.json:7–22`; both asuras follow `characters/asuras/character.json:7–21`; Vishnu's four-arm count and attributes follow `art/plans/d028.json:461–464`.
- **Verdict: pass.**

### Stanza 10 — v002 — `artifacts/d028/s010/landscape/v002/candidate-v002.png`

- **Verified SHA-256:** `3d29ebac0bfb1fcf893fb79c6d91b7b12663ccbed44a6c49c8b81e8f411cbed7`
- **Review time:** 2026-11-14T02:54:42Z
- **Anatomy:** One centered, connected divine figure with exactly two attached arms. No extra head, arm, body, or vessel is visible.
- **Faces:** One intact serene youthful deep-blue face with a modest ochre crown, fully inside frame.
- **Hands/feet:** Both hands securely support one continuous nectar pot at waist/chest height. On the enlarged crop, visible fingers are partly occluded by the pot; no extra, missing, or malformed digit is evident. The lower legs and feet are hidden behind the lotus and water composition, not cut off by the frame.
- **Clothing/cast:** Opaque yellow dhoti and restrained red shawl; one person, one pot, no crowd. Gold ornaments and the crown are traditional painted iconography.
- **Text/signature artifacts:** None seen in the patterned ground, water, or corners.
- **Scene/caption fidelity:** The candidate shows Dhanvantari emerging from the ocean with the nectar pot carried in both hands, matching caption 014 and the plan's explicit adaptation from the eight-armed source icon at `art/plans/d028.json:492–540`.
- **Character/deity contract:** The two-arm narrative Dhanvantari and single vessel satisfy the scene plan and the no-extra-hands/no-duplicate-vessels rules in `characters/dhanvantari/character.json:7–16`.
- **Verdict: pass.**

## Recommendation and captain-call inventory

All five selected landscape candidates pass this independent visual review on their exact listed checksums. This is review clearance only; keep the candidates unapproved pending the standing captain art approval. I found no additional unresolved choice requiring a captain call, so this review's captain-call inventory is empty.

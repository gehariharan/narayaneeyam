# D028 landscape visual review: stanzas 6–10

## Scope and method

I independently reviewed each selected landscape candidate against the frozen D028 plan, the listed character contracts, the stanza commentary and its mapped reference photograph. I opened each candidate at its native 1672 × 941 pixels, then enlarged centered crops of its figures and extremities. I also opened the five mapped intake photographs (010.jpg–014.jpg) for scene comparison. Enlarged candidate crops were made only in this task worktree’s `.review-scratch/`; no candidate, master, approval manifest, or project source was changed.

The commands used to verify the exact bytes and dimensions were `sha256sum <candidate and frozen contract paths>` and `identify -format '%f %wx%h' <candidate paths>`. All expected values matched. For visual inspection I used `view_image` with `detail: original` on each candidate and on enlarged crops made with ImageMagick `convert <candidate> -crop <geometry> +repage -resize 160% <scratch crop>`. Reference photographs were opened from `intake/D028/010.jpg` through `014.jpg`; their stanza mapping is recorded in `art/plans/d028.json` and `content/daskams/d028.json`.

Review time recorded for each image: **2026-11-14T01:20:16Z**. Dimensions for every candidate are 1672 × 941 pixels.

## Frozen contract SHA-256 values

These are the actual SHA-256 values of the exact frozen plan and character files read for this review:

| Contract file | SHA-256 |
|---|---|
| `art/plans/d028.json` | `6fb2aa8b460867174800bf0fbe4753213cb1d72cd071eba5315c69aca9a6ca13` |
| `characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `characters/apsaras/character.json` | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| `characters/asuras/character.json` | `00c00f503c33706c54306461c404e467e54ffcc40266f89190e0376a7d4afded` |
| `characters/devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| `characters/dhanvantari/character.json` | `3557d434fe4cdf43000a3ba3605fbb23f6a977adbbfec21a5a59c428e7b7f951` |
| `characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `characters/lakshmi/character.json` | `541fc9d30aed43e142a7bd195b994710bd91d834df484a6b9e4eba2f7c74ef8c` |
| `characters/sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| `characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `characters/uchchaihshravas/character.json` | `b80c20b5d4d52bbca4839119616769f86b9d431776e6de54f2e72a955a1c48c7` |
| `characters/varuni/character.json` | `15d582ded2890fede70d1ad79cf5f6d0f5e1d6c0a2de1f9a9477ecdd4e70910f` |

Plan scene and candidate byte references are at `art/plans/d028.json:297–333` (S006), `:335–385` (S007), `:387–437` (S008), `:439–489` (S009), and `:491–539` (S010). Character-specific checks used the Lakshmi contract (`characters/lakshmi/character.json:15–33`), Guruvayurappan (`characters/guruvayurappan/character.json:18–37`), Varuni (`characters/varuni/character.json:5–20`), asuras (`characters/asuras/character.json:5–20`), and Dhanvantari (`characters/dhanvantari/character.json:7–13`). Stanza commentary maps S006–S010 to captions 010–014 in `content/daskams/d028.json:67–113` and `photo-captions.txt:49–72`.

## Candidate findings

### Stanza 6 — v001

- **Candidate:** `artifacts/d028/s006/landscape/v001/candidate.png`
- **Verified SHA-256:** `8ce8426b1ed9c6c6b28f76c749fe7ff0da119f708e551b0ae9088ca415e04076`
- **Anatomy:** Two distinct standing adult figures, each with one head, torso and two attached arms; no duplicated person or fused body. Lakshmi approaches from the left and Vishnu stands at the right. Feet remain inside the frame.
- **Faces:** Both faces are intact, calm and proportionate at the face crop (Lakshmi approximately x=350–560, y=95–315; Vishnu x=1110–1320, y=30–230). No malformed feature.
- **Hands/feet:** Lakshmi’s two hands visibly hold the two sides of one continuous U-shaped flower garland at approximately x=485–610, y=395–665; this is one garland, not two. Vishnu has four separate arms as prescribed: upper hands support the discus and conch, lower hands are open welcome and hold a lotus. Visible fingers are individually delineated; no extra, missing, or fused digits apparent. Bare toes remain inside the image; no malformed foot is apparent.
- **Clothing and cast:** Lakshmi wears the planned yellow sari and green blouse; Vishnu wears yellow dhoti and red shawl. Both are modestly dressed. Cast is limited to the planned pair. Their crowns and jewelry are detailed but not clearly palace-like regalia beyond the chapter’s other images.
- **Text/signature artifacts:** None visible on the figures, water, ground, foliage, or corners.
- **Scene and caption fidelity:** Matches caption 010: Lakshmi approaches Vishnu with the garland still held at waist height, not yet placed. The shore, water and open space separate the pair. The small lotus at far right is incidental; it does not obscure the scene.
- **Character/deity contract:** Lakshmi’s two-arm identity, yellow garment, warm complexion and jasmine-adorned dark hair are maintained. Vishnu’s youthful deep-blue face, yellow dhoti, red shawl, peacock-feather crown and four-arm narrative form are consistent with the scene contract.
- **Verdict: pass.**

### Stanza 7 — v002

- **Candidate:** `artifacts/d028/s007/landscape/v002/candidate.png`
- **Verified SHA-256:** `0b47c8def88aaa7d249fe33ddaabf57d2a5606c7468a24dd39e91f43c5e85424`
- **Anatomy:** Two distinct full figures with all limbs attached. Vishnu has exactly four visible arms; Lakshmi has exactly two. Their overlapping garlanding action remains legible in the enlarged crop (approximately x=520–1190, y=150–560); no fifth arm or fused torso is visible. Both figures’ feet are fully within frame.
- **Faces:** Faces and features are intact and distinct (Vishnu approximately x=650–825, y=90–300; Lakshmi x=965–1135, y=140–325). No duplicate or malformed person.
- **Hands/feet:** Lakshmi’s two hands reach to either side of Vishnu’s neck and visibly place the flower garland; the hands and wrists connect to her arms. Vishnu’s two upper hands hold separate discus and conch; both lower hands are open below the garland. Fingers are separately drawn, with no visible extra, missing or fused digit. The feet/toes at x=600–1000, y=835–925 are visible and not malformed.
- **Clothing and cast:** Yellow sari/green blouse on Lakshmi and yellow dhoti/red shawl on Vishnu; both modest. Only the two planned figures are present; no physical Shiva or Brahma has been added.
- **Text/signature artifacts:** None visible, including in the water, shore, corners, or clothing ornament.
- **Scene and caption fidelity:** Matches caption 011’s exclusive choice and garlanding action. The ocean shore is simple and does not crowd the figures. Their upper bodies are close as required, but the arms remain distinguishable on inspection.
- **Character/deity contract:** Lakshmi’s face, complexion, two-arm anatomy and costume align with the episode direction. Vishnu has the youthful blue identity, peacock crown, yellow/red garments and four arms required by the scene plan.
- **Verdict: pass.**

### Stanza 8 — v002

- **Candidate:** `artifacts/d028/s008/landscape/v002/candidate.png`
- **Verified SHA-256:** `8f203d17956b8dd064b0acc704b3d00e75d5439216a22e98b3f7b2acaf25e786`
- **Anatomy:** Two distinct seated adults share a low lotus throne. Lakshmi remains a separate figure beside Vishnu, not a miniature figure in his torso. Vishnu has four connected arms and Lakshmi two. The two lower figures are not fused; natural, distinct arm paths are visible in the enlarged crop (approximately x=60–1270, y=0–930).
- **Faces:** Both faces are intact and serene; neither is duplicated or malformed. Their heads and crowns are fully inside the frame.
- **Hands/feet:** Vishnu’s upper hands hold discus and conch; one lower hand opens toward Lakshmi beside her shoulder and the other rests on his lap. Lakshmi’s lap hand and open compassionate hand are distinct and attached. Finger separations are visible without an extra, missing, or fused digit. Feet are covered by seated drapery and are not exposed for inspection; no cut-off extremity is visible.
- **Clothing and cast:** Planned yellow sari/green blouse and yellow dhoti/red shawl are present. No exposed skin beyond ordinary traditional dress. Only Lakshmi and Vishnu appear.
- **Text/signature artifacts:** None visible across the background, water, foliage or corners.
- **Scene and caption fidelity:** Matches caption 012’s honouring of Lakshmi and compassionate glance toward a fertile world. The shared low lotus throne and flourishing landscape occupy the planned positions. No elephant or duplicate goddess is added from the source icon.
- **Character/deity contract:** Lakshmi has the planned two arms and yellow/green attire; Vishnu retains the deep-blue youthful face, peacock-feather crown and four-arm form. The arms do not cross through either torso.
- **Verdict: pass.**

### Stanza 9 — v002

- **Candidate:** `artifacts/d028/s009/landscape/v002/candidate.png`
- **Verified SHA-256:** `36db12170d5ef8b5372f9b197fd2032e2f8c53b6e3bf644bd072218616c7c507`
- **Anatomy:** Three distinct adults: Vishnu at left, Varuni centered, two asuras at right. The two asuras have visibly different faces and hair. Each figure’s limbs remain attached; Vishnu’s four arms are distinct. No duplicates or fused bodies.
- **Faces:** Varuni’s longer face and Vishnu’s blue face are intact. The asuras’ separate moustached and bearded faces are intact and not cloned. No face or key extremity is cut off.
- **Hands/feet:** Varuni’s two attached hands support one bowl at approximately x=620–820, y=435–535. Vishnu’s lower open offering hand and lotus hand, plus his two upper attribute hands, remain distinct. Both asuras’ prayer hands connect to their forearms; their fingers are separately drawn. Visible feet/toes along the lower edge are inside the image and not malformed. No visible extra, missing, or fused digit.
- **Clothing and cast:** Varuni wears an opaque cream/ochre sari with maroon edge; the neckline is ordinary traditional dress and not sexualized. Her dark hair is loose and lacks jasmine; her crown is smaller than Vishnu’s. Both asuras wear muted maroon/green cloth and modest ornaments. No drunken caricature or extra figure.
- **Text/signature artifacts:** None visible in the ornamental background, ocean, ground, or corners.
- **Scene and caption fidelity:** Matches caption 013 and the plan’s offering scene: Varuni emerges on a small lotus with a bowl, Vishnu offers her to two respectful asuras. The caption’s moral framing is not turned into an intoxicated caricature.
- **Character/deity contract:** Varuni is visually distinct from Lakshmi and has two arms and one bowl. The asuras are ordinary-proportioned adults with two arms each and distinct faces. Vishnu retains his blue four-arm narrative depiction.
- **Verdict: pass.**

### Stanza 10 — v002

- **Candidate:** `artifacts/d028/s010/landscape/v002/candidate-v002.png`
- **Verified SHA-256:** `3d29ebac0bfb1fcf893fb79c6d91b7b12663ccbed44a6c49c8b81e8f411cbed7`
- **Anatomy:** One centered figure with one intact head and torso and exactly two attached arms. The arms bend naturally toward one pot; no duplicate limb, hand, or vessel. The full figure and crown are inside frame.
- **Faces:** One serene, intact face with no malformed or duplicated features (face and crown within approximately x=650–1040, y=0–410).
- **Hands/feet:** Both hands visibly support the single pot at approximately x=735–970, y=425–650. The enlarged crop shows separated fingers and thumbs at the rim/base; no visible extra, missing, or fused digit. Lower legs are partly obscured by the planned lotus and ocean waves, with no cut-off limb or malformed extremity visible.
- **Clothing and cast:** Yellow dhoti and restrained red shawl, modest crown and jewelry; the bare chest is ordinary traditional male divine dress, not exposed sexualized framing. No other person is present.
- **Text/signature artifacts:** None visible in the wide negative-space background, water, lotus, ground, or corners. No writing or medical icon attributes appear.
- **Scene and caption fidelity:** Matches caption 014 and the plan: Dhanvantari rises alone from the ocean holding one nectar pot in two hands, without the source photo’s generic multi-armed attributes or a physical Bhattathiri.
- **Character/deity contract:** The scene-specific final plan requires a youthful two-armed form and both hands supporting one vessel (`art/plans/d028.json:504–509`); the candidate follows that instruction. The generic character file describes other provisional continuity, so I treated the final scene plan as the controlling D028 direction.
- **Verdict: pass.**

## Recommendation and captain-call inventory

All five reviewed landscape candidates pass this exact-checksum visual review. They remain unapproved candidates; this review does not constitute human art approval and does not update `art/approved/`. No unresolved question for the captain was raised by these findings. The pending captain art approval is the standing chapter state and is not an additional call created by this review; my captain-call inventory for this review is empty.

# D064 stanza 6 landscape candidate visual review

Reviewed: 2026-11-16T04:06:50Z (UTC)  
Reviewer: independent exact-checksum visual review  
Scope: landscape candidate v003 only; no art approval or master assignment.

## Method and evidence

Verified the candidate and all listed frozen contract files with `sha256sum` before inspection; each matched the expected SHA-256 in the task brief. Inspected the 1672×941 candidate at native resolution, then copied it into this task worktree and examined enlarged crops made only from that copy. The scratch copy and crops were removed after review. I also inspected the mapped reference `intake/D064/006.jpg` and its caption in `intake/D064/photo-captions.txt#6`, then compared scene and character details with the final plan and contracts.

For skin samples, coordinates below are the upper-left pixel of a 15×15 native-resolution patch. Each patch was checked in an enlarged crop to ensure it covered only Nandagopan's skin. I computed a channel-wise median from the 225 pixels using ImageMagick raw RGB output and Python's standard-library `statistics.median`.

Commands/evidence:

- `sha256sum <candidate> <frozen plan> <frozen series bible> <listed frozen character contracts>` — all values below matched the expected values.
- `identify -format 'dimensions=%wx%h\n' <scratch copy>` — `dimensions=1672x941`.
- `magick <scratch copy> -crop 15x15+X+Y +repage -depth 8 rgb:-` — raw pixels for the reported skin-patch medians.
- Enlarged scratch crops examined: Nanda's face and arms; Krishna's face, both gesturing hands, and feet; Nanda's prayer hands and feet; the attendant's face, prayer hands and feet; the full cast and lower frame; and the ground/corner areas for text or signature artifacts.

## Contract file hashes

| Frozen file | Actual SHA-256 |
|---|---|
| `art/plans/d064.json` | `d03ce7e66c81bf722313a6cba29d3f877b58141bd33cbe4a759151cc3e45a215` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/nandagopan/character.json` | `56c05bed530c956487d19773766dee57e2e1365511e99f084143491cb1241c36` |
| `art/bible/characters/gopas/character.json` | `06ba363afb4ceff408375ee6460f0ba83fc05d7c55dad42beb4d775d07d6bdb0` |
| `art/bible/characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `art/bible/characters/surabhi/character.json` | `86d088f5be5c2a19a13df3138b66ea8ba3a24606ce1883645ab0f94c2ec6b0e2` |
| `art/bible/characters/airavata/character.json` | `4fccbe1a5b971e4b6ed09b817eacfc32a1d6385a359b9e6d21340fedbe2cd524` |
| `art/bible/characters/d064-varuna/character.json` | `86d8c71fa5d46c86863d527f756c53fa998512ce1ec15ef82ee73b5e720f7e3e` |
| `art/bible/characters/d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |

## Candidate review

- **Stanza/version:** D064 stanza 6, landscape v003 (`d064-s006`). Plan scene and mapped source caption: final plan `art/plans/d064.json:298-323`; stanza text/commentary `content/daskams/d064.json:67-73`; reference photo `intake/D064/006.jpg`.
- **Exact candidate:** `artifacts/d064/s006/landscape/candidate-v003.png`
- **Verified SHA-256:** `4c6eaea136846f0d2f806360732a42289b9741024293ac1e267b889a7ce3ab24`
- **Anatomy:** The full frame has one youthful Krishna, one mature Nandagopan, and one distinct attendant; no duplicate or fused person, detached limb, or monster anatomy is apparent. The attendant is placed separately at the right, as allowed by the plan. A visible digit defect is present on Krishna's two open, gesturing hands: in the enlarged native crops at approximately x=685–790, y=245–325 and x=565–695, y=410–490, each hand has a thumb and only three distinct extended finger tips/segments. The fifth finger is absent from each hand. The hands are a prominent part of Krishna's gesture, and the short count is discernible in the full image; this is an undisclosed anatomy defect.
- **Faces:** Krishna has one youthful face and Nandagopan has one mature moustached face; neither is malformed. The attendant has a distinct face. Nandagopan's skin reads orange rather than warm medium-brown, matching the plan's disclosed deviation, detailed below.
- **Hands/feet:** Krishna's arms connect to both wrists and hands; the defect is the missing fifth finger on each hand noted above. Nandagopan's and the attendant's palms meet in prayer poses; visible finger tips are orderly, with overlapping palms and no detached or extra digits evident. The feet remain inside the frame and attached. The near feet show five toe tips; the far feet are foreshortened, with no obvious extra or malformed toe visible.
- **Clothing and cast:** Krishna wears a yellow dhoti, muted red-orange shawl, and a low gold/ochre band with one upright peacock feather; his torso is conventionally bare in this traditional depiction. His forehead is plain. Nandagopan has a cream dhoti, muted olive upper cloth, cream headcloth, moustache, earrings, and a small necklace; he has no crown or armor. The attendant wears a cream dhoti and muted red cloth with a simple headband. All are conventionally dressed; no sexualized framing or exposed area beyond ordinary traditional dress is present. Krishna's painted jewelry is ornamented but remains ochre mural ornament, not reflective metallic gold.
- **Text/signature artifacts:** No readable or decorative text, signature, logo, or watermark found. I inspected the ground, water, and image corners at enlarged scale.
- **Scene and caption fidelity:** The reference photo depicts Nandagopan in the Yamuna being taken by Varuna's servant. The candidate follows the final plan's recomposed rescue-at-the-underwater-court scene: Krishna has arrived and Nanda is safely escorted in a shallow symbolic aquatic palace. The calm court, aquatic motifs, and single attendant are consistent with the stanza caption and plan. No violence or drowning is depicted. There is no outer border; the architectural columns and arches are scene elements. The broad matte mural treatment and palette are consistent with the series description (`art/bible/series.json:4-24`).
- **Character/deity contract:** Krishna meets the one-face, two-arm, two-leg, youthful cowherd form, with deep matte blue skin, plain forehead, yellow dhoti, shawl, low band, and single upright feather (`krishna-vrindavan-youth/character.json:8-14`). His two hands have the digit defect recorded above. Nandagopan's mature face, moustache, head covering, cream and olive clothing fit his identity cues (`nandagopan/character.json:16-23`); his skin color is the disclosed deviation. No other deity appears.
- **Nandagopan skin measurement and disclosed deviation:** Plan `art/plans/d064.json:332` discloses orange readings of RGB(199,114,47) and RGB(199,108,39) at (850,350) and (870,390), with red-minus-blue values 152 and 160; those coordinates match when interpreted as patch upper-left corners. I independently measured five skin-only patches: face cheek (968,200) RGB(203,114,45), R−B 158; face forehead (973,171) RGB(187,102,42), R−B 145; exposed arm (850,350) RGB(199,114,47), R−B 152; exposed arm (870,390) RGB(199,108,39), R−B 160; exposed arm (939,358) RGB(203,113,44), R−B 159. Every patch is above the plan's R−B under-120 threshold for ordinary human skin (`art/plans/d064.json:41`), and the visual read is warm orange rather than confidently medium-brown as the Nandagopan contract specifies (`nandagopan/character.json:18-19`). This is the already disclosed skin deviation; by itself it would receive `pass — disclosed deviation present` under the task rule. It is not the reason for the needs-fix verdict.
- **Verdict: NEEDS-FIX.** The undisclosed four-digit depiction on each of Krishna's two prominent gesturing hands is independently sufficient. Findings bind only to the exact candidate SHA-256 above. Recommendation: retain this version as-is and create a new candidate correcting Krishna's finger anatomy; preserve the existing version. The pending captain art approval remains pending; this review makes no captain decision.

## Captain-call inventory

Empty for this review. The standing pending captain art approval is not a decision raised by this report.

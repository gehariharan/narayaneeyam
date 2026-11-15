# D036 independent landscape candidate review: stanzas 1–6

## Scope and method

I independently inspected the six selected landscape candidates against the frozen final plan, frozen series and character contracts, chapter content, mapped intake reference photographs, and their captions. I opened each candidate at native resolution (1672×941), then inspected enlarged crops made from copies under `/tmp/d036-review-a/`. I also viewed each mapped reference photo individually. The source candidates and intake files remained read-only. Review times below are real UTC timestamps.

Commands used to establish the evidence included:

- `sha256sum <frozen contract paths>` and `sha256sum <six candidate paths>` — every result matched the expected SHA-256 supplied for this review.
- `identify -format '%f %wx%h\n' /tmp/d036-review-a/s*.png` — all six copied candidates reported `1672x941`.
- `magick <scratch candidate copy> -crop ... -resize ... <scratch detail crop>` — created detail crops under `/tmp/d036-review-a/` only.
- `view_image` — opened every full candidate, each detail crop, and mapped intake photos 001.jpg–011.jpg.
- `nl -ba` on the final plan and chapter JSON — used for the line references below.

The final plan maps stanza 1 to photos 001–002 (plan lines 20–30), stanza 2 to 003–004 (79–89), stanza 3 to 005 (138–148), stanza 4 to 006–007 (195–205), stanza 5 to 008–009 (255–266), and stanza 6 to 010–011 (plan lines 328–338). Captions are in `intake/D036/photo-captions.txt`, sections `#1` through `#6`; sourced chapter commentary maps to those caption sections in [content/daskams/d036.json](/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/9/narayaneeyam/content/daskams/d036.json:18) (stanza records begin at lines 14, 31, 48, 65, 82, and 99; their commentary source lines are 19, 36, 53, 70, 87, and 104).

No selected stanza plan entry discloses a remaining deviation. The plan status text says the candidate remains unapproved and that no art approval is implied; this review does not approve art or alter an approval manifest.

## Frozen contract SHA-256 values

All are the actual hashes of the byte-exact frozen files read for this review, and all match their expected values.

| Contract | SHA-256 |
|---|---|
| `art/plans/d036.json` | `9643879a8f864e8131bca5dcff64aefa836da52c3ad1cba383d2ee813ddc3037` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/akruthavrana/character.json` | `438f4a4f8a4e6ec174840e367196c612bf6cbb55d12e0fdc6a5079d0c781e506` |
| `art/bible/characters/dattatreya/character.json` | `13a559840423655f67e6f47f6a31e565bad559b22d14626ec6a8b5981cafe498` |
| `art/bible/characters/dattatreya-consort/character.json` | `56ebc107bc605cfc1b966dd9d9cf5c77333994188e09eb35bbc941bbb139e0d4` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/jamadagni/character.json` | `6792aa8790488f1c84f17f90817571a6bf75f522c28ef8d338dd635d595347fb` |
| `art/bible/characters/kamadhenu/character.json` | `df6f56e2642d37f6a4787219aeaf351ed6f94de321902e70e310a67f9a2e496a` |
| `art/bible/characters/kartavirya-arjuna/character.json` | `27f3d43b7a3502707c10e5bf4124d5ad61f2129442af4778b9e7f176578d5471` |
| `art/bible/characters/parashurama/character.json` | `7d42d4f6c759be7e24d7e5a8e3789149c86e1d505a7475ec34effa0912073648` |
| `art/bible/characters/renuka/character.json` | `5fe40c84d319e6d59c99c52046e8fdbabcb575e9ce74bb4f2e556a063e2380ea` |
| `art/bible/characters/sanatkumara/character.json` | `5ed32bc1fbab4599d13c1a54d58309c5a99b2b7cc8297fa9fbe933707e6e9966` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |

## Per-candidate findings

### Stanza 1 — `candidate-v001.png`

- **Image / binding:** `artifacts/d036/s001/landscape/candidate-v001.png`; SHA-256 `9178f6f2d471f079c3d236900b5768ab9cbadef243990ae7ff7efa28b7653a48` (verified before and after inspection); 1672×941.
- **Review time:** 2026-11-14T06:54:54Z.
- **Anatomy:** Dattatreya, his consort, and the kneeling king have connected, plausible full bodies. No extra, missing, or fused limbs; the reclining cow has four visible, naturally attached legs.
- **Faces:** Three distinct, formed human faces; no malformed or cloned face is apparent.
- **Hands / feet:** Enlarged central crop shows Dattatreya’s raised hand with five distinct fingers, his relaxed hand, the consort’s resting hands, and the king’s joined hands without fused or extra digits. Feet are within frame and formed; the king’s feet are covered by his kneeling pose.
- **Clothing / cast:** Consort wears a sari; Dattatreya wears simple ascetic cloth and beads. The king has a tiered crown, earrings, necklace, armlets, and royal dress at the right-center; this is ordinary royal mural ornament. Cast matches plan lines 23–27 and contracts for Dattatreya, his consort, and Kārtavīrya.
- **Text / signature artifacts:** No readable text, signature, logo, or watermark seen, including the ground and all four corners.
- **Scene / caption fidelity:** Quiet hermitage, seated sage and consort, kneeling devoted king, and restrained eight-siddhi motifs are legible. The boon scene agrees with plan lines 33–39 and caption `#1`; no violence or unrelated action.
- **Character / deity contract:** Dattatreya is single-headed and two-armed, with no crown, weapon, or peacock feather. The consort is one distinct adult woman. No contract violation observed.
- **Verdict: pass.**

### Stanza 2 — `candidate-v001.png`

- **Image / binding:** `artifacts/d036/s002/landscape/candidate-v001.png`; SHA-256 `f2fa6e891acf46d0c5890db1b394a9c48adbcfd59c18f6ae37acc8fe0bb613de` (verified before and after inspection); 1672×941.
- **Review time:** 2026-11-14T06:54:54Z.
- **Anatomy:** Jamadagni stands with ordinary proportions; Renuka sits cradling a newborn. The baby’s visible limbs are small and connected; no extra or fused limbs are apparent.
- **Faces:** Jamadagni, Renuka, and the newborn have coherent distinct faces; no duplicate person or malformed face seen.
- **Hands / feet:** The enlarged mother-and-child view shows Renuka’s two hands supporting the baby and the baby’s small bent arm without a visible digit or attachment error. Jamadagni’s joined hands and both feet are clearly formed and inside the frame.
- **Clothing / cast:** Renuka’s sari and Jamadagni’s cream ascetic wrap are modest; the newborn is swaddled. No weapon or warrior gear appears. The cast is the three figures required by plan lines 82–89.
- **Text / signature artifacts:** No readable text, signature, logo, or watermark seen, including ground, water, and corners.
- **Scene / caption fidelity:** Tender birth in a forest ashram, with Jamadagni beside the mother and newborn. It follows plan lines 92–98 and caption `#2`; it does not show an adult warrior or battle.
- **Character / deity contract:** Jamadagni’s white beard, tied grey hair, and simple cloth fit his contract; Renuka is depicted as an adult in a simple sari. No contract violation observed.
- **Verdict: pass.**

### Stanza 3 — `candidate-v001.png`

- **Image / binding:** `artifacts/d036/s003/landscape/candidate-v001.png`; SHA-256 `093d56231032d6d393f6b23eb800818ddd1da4a0ac40b12b74a2846076fa1fc5` (verified before and after inspection); 1672×941.
- **Review time:** 2026-11-14T06:54:54Z.
- **Anatomy:** Rama stands with ordinary two-arm and two-leg anatomy; Renuka stands upright and Jamadagni sits cross-legged. Bodies and limbs remain distinct and attached.
- **Faces:** All three faces are individually formed and distinguishable; no malformed or duplicated person seen.
- **Hands / feet:** Enlarged lower and center crop shows Rama’s lowered axe held in one hand, his other hand relaxed, Renuka’s joined hands, and Jamadagni’s raised blessing hand. Their fingers are distinct at this scale; feet are fully inside frame and formed.
- **Clothing / cast:** Rama and Jamadagni wear ascetic wraps; Renuka wears a modest red sari. Beads and simple armlets are visible. No exposed or sexualized framing.
- **Text / signature artifacts:** No readable text, signature, logo, or watermark seen, including grass, water, and corners.
- **Scene / caption fidelity:** Renuka is alive and restored, Jamadagni blesses, Rama stands beside her with the axe lowered, and a broken garland lies on the ground by still water. The scene follows plan lines 141–156 and caption `#3`; no injury or blood is shown.
- **Character / deity contract:** Jamadagni’s white beard and tied pale hair, Renuka’s adult appearance, and Rama’s recurring dark-haired ascetic-warrior appearance fit the character contracts. No extra arms or other prohibited depiction seen.
- **Verdict: pass.**

### Stanza 4 — `candidate-v001.png`

- **Image / binding:** `artifacts/d036/s004/landscape/candidate-v001.png`; SHA-256 `487f51c29216f944e7b49051eec1dd6f322eed6b09f33b28b0738d23e355db3c` (verified before and after inspection); 1672×941.
- **Review time:** 2026-11-14T06:54:54Z.
- **Anatomy:** Shiva, Parashurama, Akruthavrana, the background sage, and seated woman have connected bodies and natural proportions. Kamadhenu and calf show four bovine legs each, attached to the body. No fused or extra limbs seen.
- **Faces:** Principal faces are formed and distinct; the two ascetics in the return-path group are visually distinct. No accidental duplicate face apparent.
- **Hands / feet:** Shiva’s open and axe-presenting hands are attached; Parashurama’s receiving hands are distinct around the axe handle. The background figures’ hands and walking feet show no visible extra digits or attachment errors; no key extremity is cut off.
- **Clothing / cast:** Ascetics wear simple cream/ochre cloth with beads; Shiva is bare-chested with a tiger-skin waist covering and restrained ornaments. Kamadhenu has painted ochre harness ornaments. All are ordinary traditional mural dress/ornament; nothing is exposed beyond it.
- **Text / signature artifacts:** No readable text, signature, logo, or watermark seen, including rocks, ground, and corners.
- **Scene / caption fidelity:** Blue-grey Shiva presents one axe to kneeling Parashurama at a Himalayan shrine; a restrained set of symbolic weapons sits nearby. Akruthavrana is in the return group and Kamadhenu with calf appears as an ashram cue. This follows plan lines 198–215 and caption `#4`; the exchange is peaceful.
- **Character / deity contract:** Shiva has one head and two attached arms in this scene; Parashurama also has ordinary two-arm anatomy and one battle axe. The trident and symbolic weapons are separate scene attributes, not extra limbs or an axe exchange. No prohibition violated.
- **Verdict: pass.**

### Stanza 5 — `candidate-v002.png`

- **Image / binding:** `artifacts/d036/s005/landscape/candidate-v002.png`; SHA-256 `ba17a24de815ef8f08e61ff3d0ca89b829a2cf306a5a6236f494d51e7f7585cc` (verified before and after inspection); 1672×941.
- **Review time:** 2026-11-14T06:54:54Z.
- **Anatomy:** This is the densest scene. Enlarged group crop shows distinct human bodies through the king, attendants, sage, and calf handlers; no obvious duplicate body, fused figure, extra arm, or missing limb. Kamadhenu and calf each show four connected legs and natural bovine body shape.
- **Faces:** Main king, sage, handlers, and other visible faces are formed. No malformed focal face or obvious cloned person in the crowd.
- **Hands / feet:** The king’s two open hands, Jamadagni’s raised hand and vessel hand, and the calf handlers’ hands on the tether/calf are visibly attached. The cow and calf hooves are distinct; human feet visible at the lower edge remain inside the frame. No viewer-noticeable digit error seen.
- **Clothing / cast:** Sage wears cream ascetic cloth; king and soldiers wear traditional maroon/ochre royal or military clothing. The king’s crown, necklaces, armlets, and belts are ornate at left-center, consistent with ordinary royal mural iconography. No immodest dress or sexualized framing.
- **Text / signature artifacts:** No readable text, signature, logo, or watermark seen, including the ochre ground and corners.
- **Scene / caption fidelity:** The left group shows hospitality between Jamadagni and the king; the right group shows the refusal/emissary action while two soldiers lead the calf away. The mother cow remains close, oriented toward the calf. Jamadagni is alive; no later death is included. The sequence follows plan lines 258–275 and caption `#5`.
- **Character / deity contract:** Kārtavīrya’s visible focal depiction has two arms; Kamadhenu is a calm cream-white, four-legged cow with the calf close. No contract violation seen.
- **Verdict: pass.**

### Stanza 6 — `candidate-v001.png`

- **Image / binding:** `artifacts/d036/s006/landscape/candidate-v001.png`; SHA-256 `a8380807eebd8e888fde808453cd1f3613992e2f69cb62dc84625454ac813ae1` (verified before and after inspection); 1672×941.
- **Review time:** 2026-11-14T06:54:54Z.
- **Anatomy:** Parashurama, Akruthavrana, the waiting king, soldiers, horses, and elephants are visibly separate. Parashurama has ordinary two-arm anatomy; the king has two arms. Three harnessed horses are depicted with connected legs and coherent heads; the chariot has one clearly visible wheel in perspective, with its second side occluded by the body. No detached or fused body part seen.
- **Faces:** Parashurama, companion, and king have distinct formed faces; the smaller soldiers have simplified but coherent faces. No malformed focal face or obvious cloned person seen.
- **Hands / feet:** Parashurama’s hands connect to the reins and axe; Akruthavrana’s hand rests on the chariot rail. Harness, reins, and horse team remain visually connected. Enlarged lower crop shows hooves and the visible wheel inside frame; no visible extra or fused digits or limbs.
- **Clothing / cast:** Parashurama and Akruthavrana wear ascetic clothing; the waiting king and soldiers wear traditional royal/military attire. Kārtavīrya’s crown, necklaces, armlets, and painted ochre ornament are ordinary royal mural iconography. No immodest dress or sexualized framing.
- **Text / signature artifacts:** No readable text, signature, logo, or watermark seen, including road, grass, and corners.
- **Scene / caption fidelity:** Parashurama travels toward the distant fortified city carrying bow, quiver, and one axe with Akruthavrana in a chariot; the king awaits. The tense scene is before battle; no attack is depicted. It follows plan lines 333–350 and caption `#6`.
- **Character / deity contract:** Parashurama has a single recurring adult appearance and two arms, carrying one axe; Akruthavrana is a quieter ascetic companion without royal armor or weapon exchange. The king is not multi-armed. No contract violation seen.
- **Verdict: pass.**

## Recommendation

The six exact candidate versions reviewed here pass the specified visual checks. They remain unapproved; an explicit art approval is still required before publication. This review raises no separate captain decision or art-fix call. The review's captain-call inventory is empty.

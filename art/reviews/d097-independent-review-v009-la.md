# D097 selected landscape candidate review

## Scope and method

I independently reviewed the five selected landscape candidates against the exact plan and character-contract bytes supplied for this task. Review verdicts bind to the exact candidate checksums below and the frozen plan checksum `0fbb97791dce00b36a5e6362a21c3ede5422efc3a0a6956835fdab0ca20116a8`. All images were viewed at native 1672×941 resolution and in focused, enlarged crops created under the worktree's `.review-scratch/` directory. I checked faces, bodies, hands/feet, group and creature anatomy, clothing, scene requirements, image edges, water/ground textures and character colors. For applicable skin checks, I measured 11×11 pixel skin-only patches; coordinates are zero-based native image pixels. SHA values are actual hashes of the files read.

The expected checksums were assembled into `.review-scratch/hashes.sha256` and verified with:

```sh
sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/5/narayaneeyam/.review-scratch/hashes.sha256'
```

Every listed file returned `OK`, including all five candidates, the two mapped source photos, both D001 rendering references, the approved Guruvayurappan reference sheet, all ten frozen contract files, `content/sources/d097/reference-map.json`, and `intake/D097/photo-captions.txt`. `identify` reported each candidate as PNG 1672×941. Crops and scratch data were written only below `.review-scratch/`; candidate/reference inputs and approval metadata were not changed.

Reference mapping evidence: `art/plans/d097.json:56-61,103-108` maps photos 001 and 002 to stanzas 1 and 2; `content/sources/d097/reference-map.json:11-25` confirms those mappings. The plan says canonical Sanskrit governs stanzas 3–5 without a mapped photo (`art/plans/d097.json:25-31`; `content/sources/d097/reference-map.json:133-137`). The chapter stanza records are at `content/daskams/d097.json:17,34,51,68,85`. The supplied photos have no captions (`intake/D097/photo-captions.txt:1-42`). Both D001 masters were viewed as rendering anchors; the approved Guruvayurappan sheet was viewed for identity only.

## Frozen contract hashes

All expected hashes matched mechanically. These are the actual hashes of the frozen files read:

| Contract file | SHA-256 |
|---|---|
| `art/plans/d097.json` | `0fbb97791dce00b36a5e6362a21c3ede5422efc3a0a6956835fdab0ca20116a8` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/markandeya/character.json` | `35ad1eeceb9a913642865171d8b0b8c82f8cbf0a774e8182761fcae0ee857e15` |
| `art/bible/characters/nara/character.json` | `d471169d678bac66c0dbbc738db053428631dd89457f8f21d2596965419be628` |
| `art/bible/characters/infant-krishna/character.json` | `227f15a9bd70e4e79dbe74b216356b87f8714e2a0e53c545887313a97bd938cb` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/indra/character.json` | `1830d705fd78f05ded85faab1fb11787e426ffcc0f7c3f4326005c3ccee20195` |
| `art/bible/characters/apsaras/character.json` | `7cb70047c6f0788f396556702e428409ca82ff6bd51eb289d423fc9eabf1a6cc` |
| `art/bible/characters/shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| `art/bible/characters/uma-d029/character.json` | `10a67fe2054d31325697e899df1f9905700e4145fed6acf4a9c8bb7ed10e8d03` |

The local reference-map and caption-file hashes also matched: `content/sources/d097/reference-map.json` = `ffce89dccf07e4e94f5a1d3bffb5d3fb0b57d286730e94f048ddcf690d4436ad`; `intake/D097/photo-captions.txt` = `a3e81d036b428d227f27d59eda3ece2f24dd7dcaed033a5f28ad7a4fb94812fa`.

## Image findings

Review time for each exact-checksum verdict: **2026-11-26T02:12:56Z**.

### Stanza 1 — v001

- Candidate: `artifacts/d097/s001/landscape/candidate-v001.png`
- Verified SHA-256: `e30b096e9b766cd0398d294776a0dcfc589898d67a82ef589b277ef4c7872505`
- **Anatomy / faces / hands / feet:** No people or animals appear, as required; no anatomy review items.
- **Clothing and cast:** No cast or clothing.
- **Text / signature artifacts:** No readable text, watermark or signature is visible in the water, patterned fields, ground, or corners.
- **Scene and reference fidelity:** The large clear lotus rises above still, horizontally banded water; the middle field supplies motion and the dark lower earth band supplies visual weight. A second, small lotus sits at the transition. Photo 001 is the labeled triguna diagram (`reference-map.json:11-17`); this image uses its three-quality context without copying labels or deity portraits. It remains a full-bleed matte composition without a separate border. The upper floral ornament is more decorative than the diagram but does not displace the required three zones.
- **Character / deity contract:** No characters or deity portraits, matching `art/plans/d097.json:41-52`.
- **Verdict: pass.**

### Stanza 2 — v015

- Candidate: `artifacts/d097/s002/landscape/candidate-v015.png`
- Verified SHA-256: `89dd9fa07756b63556406ad75cbefae0ba089ab2873fffcb9b24b120c4c95860`
- **Anatomy / faces / hands / feet:** Both human faces are distinct and intact. The camel, seated monkey, bull, deer, peacock and swan have coherent visible bodies and attached limbs; the smaller birds' digits are below useful resolution and show no visible error. The two worshippers' joined hands are not open-hand poses and show no visible malformed fingers. The central deity's hands rest together in the lap; they are partly overlapped but not visibly malformed. The visible feet of both worshippers show five toes each. No fused or duplicated people or creatures are apparent.
- **Clothing and cast:** Two modestly dressed worshippers sit on opposite sides of the shrine. Their equal posture and the repeated blue devotional motif do not single either person out as inferior. No exposed skin beyond ordinary dress.
- **Text / signature artifacts:** No readable text, signature or watermark appears, including in foliage, path, ground, water-like fields or corners.
- **Scene and reference fidelity:** The central shrine, grove path, water pot, staff, animal tracks and three balanced flower offerings are visible. Photo 002 shows a rural worker, animals and birds bearing repeated divine visages (`reference-map.json:20-25`); the candidate preserves that story cue while following the plan's equal-offerings scene and avoiding the source photo's exact pose and framing (`art/plans/d097.json:86-108`). The shrine is more ornate than the word “low” suggests, but remains a central shrine and does not obscure the required cues.
- **Character / deity contract:** The central Guruvayurappan is a serene, youthful deep-blue two-armed seated form with crown, yellow clothing and red-orange shawl. The blue reads deep rather than gray or neon. His painted ochre ornaments remain matte and consistent with the character sheet and series treatment (`series.json:5-6,21,45`; `characters/guruvayurappan/character.json:18-37`).
- Skin medians: left worshipper cheek (280,490) RGB **144,84,43**, R−B **101**; left arm (300,600) **164,111,67**, R−B **97**; right cheek (1370,495) **144,84,45**, R−B **99**; right arm (1360,600) **145,86,45**, R−B **100**. They read as natural muted warm brown, not orange, and are under the plan's approximate 120 guide (`art/plans/d097.json:97-99`).
- **Verdict: pass.**

### Stanza 3 — v002

- Candidate: `artifacts/d097/s003/landscape/candidate-v002.png`
- Verified SHA-256: `f577047b32285be8cdfe51ca57d3f1ae4ecfd7df8aad5fffd85f07b4d41c9b37`
- **Anatomy / faces / hands / feet:** No people or creatures appear; no anatomy review items.
- **Clothing and cast:** No cast or clothing.
- **Text / signature artifacts:** No text, signature or watermark is visible on the shrine, path, river, ground, patterned sky or corners.
- **Scene and reference fidelity:** As disclosed by the plan, there is no mapped photo for this stanza; I judged the scene against canonical Sanskrit and `art/plans/d097.json:127-162`. A single winding path crosses the layered landscape toward a clear horizon; the quiet river and small dark, unlit shrine are present. No doctrinal diagram or specific ritual is depicted. The scene remains nonfigurative and calm, with the series' matte mineral palette.
- **Character / deity contract:** No characters or deity portraits appear, matching the stanza's empty character list (`art/plans/d097.json:128-135`).
- **Verdict: pass.**

### Stanza 4 — v020

- Candidate: `artifacts/d097/s004/landscape/candidate-v020.png`
- Verified SHA-256: `be2e787946f28c7e5d598c052cf179d66b3eaa24ac48d154e79ebdab4099457f`
- **Anatomy / faces / hands / feet:** The child, four attendants and fleeing shadow are separate; faces are intact, with no duplicated person or detached limb. The Lord has two arms, an open raised hand with five digits and a lowered open hand with five digits. Each visible Lord foot has five toes. The attendant's raised open hand has five digits. The child's joined hands show no visible defect. Attendant toes are small at native scale and not individually resolvable; nothing visible at that scale is wrong.
- **Clothing and cast:** The boy wears a simple dhoti and shoulder cloth; his bare upper torso is ordinary traditional dress. The four attendants wear modest dhotis and shoulder cloths. No sexualized framing or exposed skin beyond ordinary dress.
- **Text / signature artifacts:** No readable text, signature or watermark is visible in the patterned ground, shadow area, background or corners.
- **Scene and reference fidelity:** The plan discloses no mapped source photo for stanza 4; this is judged against canonical Sanskrit and `art/plans/d097.json:172-210`. The young devotee kneels and offers flowers before the Lord's visible feet; four small guardians are distinct, and a dark fleeing silhouette at the right edge conveys death driven back without naming or showing violence. The architectural shrine is more elaborate than “simple,” but the required story elements remain legible and no separate decorative outer border is present.
- **Character / deity contract:** The child reads as a child devotee, with warm-brown skin and no ornate jewelry; the Lord is a calm, deep-blue two-armed form with peacock-feather crown, yellow dhoti and red-orange shawl. Painted ochre ornament is matte rather than metallic. Skin patch medians: child's cheek (710,540) RGB **158,91,46**, R−B **112**; attendant cheeks (766,313) **163,93,46**, R−B **117**; (913,300) **121,85,48**, R−B **73**; (1060,300) **152,86,44**, R−B **108**; (1200,300) **136,79,40**, R−B **96**. All sampled patches look like natural warm brown rather than orange and are below 120. This agrees with `characters/markandeya/character.json:5-12,19-25` and `characters/guruvayurappan/character.json:18-37`.
- **Verdict: pass.**

### Stanza 5 — v007

- Candidate: `artifacts/d097/s005/landscape/candidate-v007.png`
- Verified SHA-256: `76bd016a9735b9079f3f7109181e93c746be8d1fed7e543ac93b606e2f58ca08`
- **Anatomy / faces / hands / feet:** Mārkaṇḍeya's mature face and topknot are intact. His forearms descend naturally beside the torso; both hands are concealed beneath the opaque lap cloth, with no visible fingers or fused hand shapes. Indra's extended open hand has five digits; his other hand grips the parasol shaft. The two apsaras each have two attached arms and distinct intact faces; their hands hold a garland and bowl, with no visible malformed digits. Their legs and feet are covered by their hems. **The sage's feet are defective:** at native coordinates approximately **x=329–591, y=812–879**, the crossed legs terminate in a single continuous, elongated brown foot shape with five toes at each opposite end and no visible boundary separating two feet. The full image reads as fused/duplicated feet at the sage's focal lower center. This is a visible anatomy defect, not a miniature-detail limitation.
- **Clothing and cast:** The mature sage wears a cream dhoti and plain ochre shoulder cloth, without ornate jewelry; his bare upper torso is ordinary traditional dress. Indra and two apsaras are clothed in a cream/rose and ochre palette with no sexualized framing. The group remains across the clearing and secondary to the meditating sage.
- **Text / signature artifacts:** No readable text, signature or watermark appears in the river, ground, foliage or corners.
- **Scene and reference fidelity:** The plan discloses no mapped photo for stanza 5; I judged the image against canonical Sanskrit and `art/plans/d097.json:219-258`. Mārkaṇḍeya meditates on the Pushpabhadrā riverbank; Indra and two distinct apsaras remain across the clearing, with a curling wind motif between them and the sage. The warm field is quiet and contains no beam or halo ray. The required cast and story are present.
- **Character / deity contract:** Mārkaṇḍeya is visibly mature, with a dark ascetic topknot; Indra has a warm-brown complexion, cream dhoti, saffron shawl and matte ochre crown/ornament; the apsaras wear modest flowing cream/rose saris. Skin-only cheek medians: sage (407,286) RGB **131,69,29**, R−B **102**; Indra (1240,180) **157,89,44**, R−B **113**; left apsara (1010,230) **167,97,50**, R−B **117**; right apsara (1495,230) **170,97,52**, R−B **118**. The samples read as natural warm brown rather than orange and are below the guide. Character checks follow `characters/markandeya/character.json:5-12,19-25`, `characters/indra/character.json:5-20`, and `characters/apsaras/character.json:5-20`.
- **Verdict: needs-fix.** The exact defect region is identified above; this verdict is bound only to candidate checksum `76bd016a9735b9079f3f7109181e93c746be8d1fed7e543ac93b606e2f58ca08`.

## Recommendation and approval state

Four candidates pass this independent exact-checksum review. Revise stanza 5's fused foot depiction as a new candidate version, then obtain a fresh exact-checksum review for that version. No artwork is approved by this report; all five remain unapproved and the review does not update `art/approved/` or any master checksum.

Captain-call inventory: **empty**. The pending captain art approval is the standing state and is not a decision raised by this review. I found no additional unresolved choice requiring a captain call.

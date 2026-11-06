# D029 S008 v002 managed visual review v001

- Reviewer: Claude (no-mistakes review fix round, claude-opus-5-5)
- Scene: Shiva and Uma visit Narayana's abode with their attendants
- Selected native PNG: `artifacts/d029/s008/landscape/candidate-v002.png` (v002), SHA-256 `35abe07d708d9615afe8e166909f83aa7581f33a67e55feedd7f2a3d002f6b46`, 1672 × 941; hydrated byte-exact into this managed checkout from `/home/gehariharan/.treehouse/narayaneeyam-9a4f64/3/narayaneeyam/artifacts/d029/s008/landscape/candidate-v002.png` and rehashed
- Inspected: full frame and detail views between 2026-11-06T11:49:01Z and 2026-11-06T11:55:10Z
- Outcome: **pass**. This is a checksum-bound visual observation, not art approval. Portraits remain paused. Producer observations (`artifacts/d029/producer-observations-v001.json`) were not relied on.

## Views actually opened

- Full frame: `artifacts/d029/s008/landscape/candidate-v002.png`, the entire 1672x941 frame opened as one image.
- Detail crops cut from the exact selected bytes with `magick -crop` (scaled crops use `-scale`). These are gitignored local evidence, reproducible from the geometry:
  - `artifacts/d029/review-evidence/managed-v001/s008-v002-nw.png`: region `836x471+0+0`, SHA-256 `65d130076a3c8e75ffa4b78982c9f1913517fb989b65a8d046699e5e06e3adca`
  - `artifacts/d029/review-evidence/managed-v001/s008-v002-ne.png`: region `836x471+836+0`, SHA-256 `7732ed73d3dc95303afa822fcbf339a643470697e3bcede3b6effd5fd9ed2c49`
  - `artifacts/d029/review-evidence/managed-v001/s008-v002-sw.png`: region `836x470+0+471`, SHA-256 `90b6352a5bd202baa74fe07c5567407d751e9ee6bae035f13234440fae17a7b0`
  - `artifacts/d029/review-evidence/managed-v001/s008-v002-se.png`: region `836x470+836+471`, SHA-256 `e14ff6cd629d4991e901f35f5de3c658037402a998cb2513ba31e1b21ae64561`

## References opened and hashed

- Source reference: `intake/D029/009.jpg` (SHA-256 `526e47f7e3dc9f8233dde6318309ec911309873ca6cf5d5d35fe9461df9f4cc2`), opened full-frame immediately before the candidate
- Caption: `intake/D029/photo-captions.txt#8` (file SHA-256 `e3b97203123ac3eb6e2b5b136b4769301ed2ceda304bcab1cf957388fe063a33`)
- Reference image: `artifacts/d029/references/d001-s004-matte-style.png` (SHA-256 `9fe353cac5bb27947bc469e904d9f1e1303abde3275869a78f8a8bb553aad46d`), matte style anchor (opened full-frame in this session)
- Contract: `art/bible/series.json` (SHA-256 `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`)
- Contract: `art/plans/d029.json` (SHA-256 `744487e77c0c2d8a76b2e6a0ae34704a8b0a049aea95a6ef0a09c8c45c5f666a`)
- Contract: `content/daskams/d029.json` (SHA-256 `d072f04cd4067e506339a618b9523d956b4894eb37b6778470c74103d03d4ef4`)
- Contract: `content/sources/d029/reference-map.json` (SHA-256 `99682e746ce5a9ccad1ea3bdd8e4e66500bd3421fc7b79a6357ac12917a3bdba`)
- Contract: `art/bible/characters/shiva-d029/character.json` (SHA-256 `9e87b3de6832e1a62d6d8608635d56af0b72a08a03edcd531529c0b35a22de11`)
- Contract: `art/bible/characters/uma-d029/character.json` (SHA-256 `10a67fe2054d31325697e899df1f9905700e4145fed6acf4a9c8bb7ed10e8d03`)

## Anatomy basis

Shiva and Uma at the front; four attendants behind (three standing, one bearded with joined palms).

## Observations

- Limbs, hands, feet and fingers (pass): Shiva holds the trident upright in his right hand with the other hand open at his side; Uma lifts her pallu at the waist with one hand, the other hangs at her side. The bearded attendant joins palms; the others' hands hang at their sides. All feet are bare with toes.
- Attachment and proportions (pass): Shiva's striding legs, Uma's walk and the attendants' legs are each paired and attached; the trident shaft passes in front of Shiva without merging.
- Faces (pass): Shiva: ash blue-grey skin, crescent moon in matted hair, tripundra, rudraksha, composed smile. Uma: warm brown skin, flowers in her hair, ochre jewellery. Attendants: topknot youth, turbaned moustached man, bearded man, topknot youth with a different necklace.
- Duplication and fusion (pass): One Shiva, one Uma, four individual attendants; no fusion.
- Text and marks (pass): None observed; the shrine and clouds carry no glyphs.
- Scene, identity, composition and style (pass): Matches stanza 8: Shiva and Uma lead a small attendant group toward a lamp-lit shrine threshold with no added character. Shiva's tiger-pattern waist cloth and trident and Uma's deep maroon sari match their D029 contracts. Attendants are ordinary two-armed people. Matte olive/ochre mural treatment.

## Defects

- None observed.

## Limitations

- Shiva's waist cloth is drawn with leopard-like rosettes rather than tiger stripes; this is a common mural convention and does not change his identity.
- The detail crops are gitignored local files. Their hashes and geometry are recorded here so they can be regenerated from the exact selected bytes.

No image bytes or approval manifests were changed by this review. Human editorial and art approval remain pending.

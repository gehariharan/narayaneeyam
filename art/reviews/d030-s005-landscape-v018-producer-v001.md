# Producer visual review — D030 S005 landscape v018

- Outcome: needs-fix
- Inspected at: 2026-11-26T02:19:46Z
- Candidate SHA-256: c82d4b2c1086357f074da17a97993d983027b9194f3f585d31d45ceec3c37281
- Prompt SHA-256: 17a2018ae109047acefc3cae99d1fd9043b7f5e0a5d87018478c99e816b6c27b
- Call arguments SHA-256: 3bd3068aeef7fedd41a84ede15d72f6290b8c516df6483793cb2cdea82d8cb19
- Final plan SHA-256: 29568446d51206c822f2eb066dce77985d5ab9101bf59922b4d96546788db665
- Series contract SHA-256: cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa
- Aditi contract SHA-256: 94c8ed8be0a948ad2b58b754f06fe0f48ed06c9b39c8a75908b676cdb2cdc92a
- Kashyapa contract SHA-256: 3a4bfe53bece23fc17b2a86fde28ce6e0923c61940b657f240fad89b556d281f
- Vamana contract: shared `art/bible/characters/d031-vamana/character.json`, SHA-256 31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229
- Devas contract SHA-256: e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138
- Reference map SHA-256: 22c4e7d2ae46cf32216e583957d6980ab342b15d66285c75f186190e150ff719
- Mapped reference: `intake/D030/006.jpg`, SHA-256 `967e36e6b52931328b4d031369ec53c713dd20a54bebb621987b3f5b63013b1c`

## Findings

I inspected the native 1672×941 candidate and enlarged crops of the parents’ prayer hands and faces, both Devas’ faces and flower-casting/bowl hands, Vamana’s face and staff grips, both feet, the empty cradle, folded cloth and four attribute tokens. Exactly two Devas are visible and individually distinguishable: the left Deva is youthful and clean-shaven with a rounded crown and short wavy hair; the right Deva is older with a gray beard, taller crown and olive garment. Their poses and silhouettes differ. Aditi and Kashyapa pray; one two-armed Vamana stands with parasol and staff. The cradle is empty, and the folded indigo cloth and separate discus, conch, mace and lotus are clear. Both visible Deva hands casting flowers have a thumb and four fingers; the bowl-holding hands appear connected without an obvious extra digit. Vamana’s two feet each show five toes. I see no extra person, repeated Deva face, fused body, malformed face, detached limb, readable text, logo, signature or watermark.

The final plan requires Aditi and Kashyapa skin-only median R−B below 100, two distinct Devas each below 100, and Vamana face and torso B−R at least 45. I measured 15×15 skin-only patches in the native PNG: Kashyapa cheek RGB (171,106,66), R−B 105; Aditi cheek (162,97,59), R−B 103; youthful Deva cheek (179,112,69), R−B 110; older Deva cheek (144,109,27), R−B 117. All four brown-skin samples miss the below-100 plan limit, although the parents’ samples improved from v017 and read brown rather than saturated orange. Vamana cheek RGB (50,64,96), B−R 46; torso (50,63,95), B−R 45. Those two samples meet the plan minimum 45 but remain below the prompt’s aspirational B−R 60 palette target. The composition, cast distinctions and objects pass this inspection; the measured palette deviations keep the overall verdict needs-fix. This is the second and final authorized generation attempt in the S005-only repair round; no further S005 generation was made.

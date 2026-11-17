# D094 S006 landscape exact-image review

**Review performed:** 2026-11-17T04:30:55Z (UTC)  
**Scope:** Independent read-only visual review of the single selected image below against the frozen final D094 plan, frozen series and character contracts, stanza 6 content, and mapped photo caption/reference. No image or approval manifest was changed.

## Contract byte checks

I ran `sha256sum` on the selected candidate and all seven frozen contract files before inspection. Every value matched the task’s expected SHA-256.

| File | Actual SHA-256 |
|---|---|
| `art/plans/d094.json` (frozen final plan) | `a1c4ed1418addeac6675f373a24f57b3a2a0563539c70472096eb91a608d82d4` |
| `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| `art/bible/characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| `art/bible/characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| `art/bible/characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| `art/bible/characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |
| `art/bible/characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |

## Candidate review

**Stanza:** D094 S006  
**Concept:** `d094-s006`  
**Version:** v011 landscape  
**File:** `artifacts/d094/s006/landscape/candidate-v011.png` in the asset-bearing checkout  
**Dimensions:** 1672 × 941 pixels (`identify`)  
**Verified SHA-256:** `8f321bf7bad6dd4f13c8d2c9b34b93c4abf2ae5c870332b8161dc39b55923573`  
**Inspected:** 2026-11-17T04:30:55Z (UTC)  
**Verdict:** **uncertain**

### Findings by area

- **Anatomy:** At full image and enlarged figure crops, Bhattathiri has a coherent kneeling body with attached arms and legs; no duplicate person, fused body, or other visible limb error. The deity has one face, two arms, two legs and feet. No malformed facial anatomy is apparent. Bhattathiri’s one exposed foot at the lower-left (about x=180–330, y=800–900) has five visible toe ends. The deity’s viewer-right foot (about x=1165–1260, y=840–895) has five plausible toes. The viewer-left deity foot remains the unresolved area described below.
- **Faces:** Both faces are fully inside the frame and readable at enlarged scale. Bhattathiri appears older, clean-shaven, with the shaved scalp, small dark tuft, horizontal ash marks and central forehead mark required by his contract. Bhagwan has a serene youthful face, deep blue skin and dark wavy hair. No malformed face or duplicate figure is visible.
- **Hands and feet:** Bhattathiri’s namaste shows five fingertip ends; the thumbs are hidden by the overlap, consistent with the plan’s disclosed description. Both of Bhagwan’s open hands show a thumb plus four fingers. The deity’s viewer-left foot is the tiebreak location, about **x=1080–1170, y=845–890** in the 1672 × 941 original. I inspected the full image, a combined crop at native pixels and enlarged, nearest-neighbour crops of each foot (including a 12× enlargement of the viewer-left toes), plus a sharpened view. The viewer-left foot shows overlapping toe tips/outlines: I can distinguish several tips, including a larger inner toe and smaller outer tips, but cannot confidently separate and count all five. I see no definite malformed, fused, extra, or missing toe that I can identify in pixel terms; the overlap prevents a reliable five-toe determination. This is unresolved after the requested enlarged inspection, so it is not a pass.
- **Clothing and cast:** The single human is modestly dressed in a cream dhoti with maroon edging and restrained beads. The off-white sacred thread is clearly visible crossing from Bhattathiri’s left shoulder diagonally over his chest to the right waist (roughly x=380–505, y=405–690), as required. His visible skin reads warm medium-brown rather than saturated orange. Bhagwan wears a yellow dhoti and red-orange shawl. His crown, necklaces, armlets and other painted-ochre ornaments are ornate, especially around the head and chest; this is ordinary temple-mural iconography and does not violate his character contract. The cast is exactly one Bhattathiri and one Bhagwan.
- **Text/signature artifacts:** I found no readable writing on the palm leaves and no text, signature, logo, or watermark. I inspected the corners and the ground/foliage areas at full resolution; none shows an apparent lettering or signature artifact.
- **Scene and caption fidelity:** Plan stanza 6 requires a humble prayer before one serene blue Bhagwan, an unmarked palm-leaf teaching, and clean water in a simple vessel. All are present: the figures face one another, the bound palm leaves sit between them without marks, and a water vessel is at the lower center. The mapped source is `intake/D094/006.jpg`, captioned as a prayer to Bhagwan; the source photo supplies prayer context only (plan lines 315–321), and the candidate appropriately recomposes it as the specified Bhattathiri scene. The candidate is full-bleed landscape with no separate border and keeps both faces, hands and feet inside the frame. Its leafy grove and shrine setting maintain the devotional context. The disclosed viewer-left deity toe overlap is present and remains the only unresolved finding.
- **Character/deity contract:** The candidate follows Bhattathiri’s mature, clean-shaven identity, ash markings, tuft, cream clothing and sacred thread (character contract lines 14–23). Bhagwan follows the deep-blue, youthful, wavy-haired identity with peacock-feather crown, yellow clothing and red-orange drape (contract lines 18–25). Neither the scene plan nor the Guruvayurappan contract prohibits the visible painted-ochre crown and layered jewelry. The image has no extra deity heads or arms, no cropped crown, and no frame-cut face or key extremity. The plan’s recorded skin patch medians are R−B 106/116/95 for Bhattathiri and B−R 51/55 for Bhagwan (plan line 332); I observed the same warm-brown/deep-blue appearance, but did not independently recalculate those patches.

### Evidence and recommendation

The byte checks were run with `sha256sum` on the candidate and frozen contract paths. The dimensions were checked with `identify`. I opened the complete candidate at original resolution and created focused scratch crops from the original with ImageMagick, including separate deity-foot crops, nearest-neighbour enlargement, and a sharpened foot view; I visually inspected those views and enlarged Bhattathiri and Bhagwan crops. I also opened the mapped photo `intake/D094/006.jpg` and read its matching caption in `intake/D094/photo-captions.txt`.

The final plan is `art/plans/d094.json`, stanza 6 at lines 287–332. Its required scene elements and mapped photo guidance are at lines 295–321; the v011 candidate record and disclosed thread/foot observations are at line 332. The source stanza and caption provenance are in `content/daskams/d094.json`, lines 67–74. Series rendering and frame guidance are in `art/bible/series.json`, lines 5–24 and 51–58. Bhattathiri’s identity and clothing contract is in `art/bible/characters/bhattathiri/character.json`, lines 14–32; Guruvayurappan’s is in `art/bible/characters/guruvayurappan/character.json`, lines 18–37.

**Recommendation:** Keep this exact checksum in `uncertain` status; it has not cleared the independent review gate. A future exact-image review can resolve the foot only if the viewer-left deity toes are distinguishable. No art approval is implied by this review.

## Captain-call inventory

Empty. The pending captain art approval is the standing state of the chapter and is not a decision raised by this review. This report raises no captain choice.

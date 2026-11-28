# Independent visual review — Dasakam 30, stanza 6

## Result

**Verdict: needs-fix** for landscape candidate v015, bound only to SHA-256 `9f3e440d7869d3f001a0b1e3305890f7c245b76177e5adc5e2733b2d2bf83038`.

I independently inspected the full image at native size (1672 × 941) and enlarged crops of Brahma’s faces, crowns and each arm/hand; Vamana’s face, hands and feet; both elders; the fire and implements; the Ashvamedha pavilion; and the image edges and ground. The review was completed at **2026-11-26 09:22:49 UTC**. I did not edit the candidate or any project/approval file. Crop outputs were written only under `.review-scratch/` in this worktree.

**Needs-fix region:** approximately source pixels **x=520–540, y=158–180** on Brahma’s central crown. The crown band has a distinct outlined circular inset with a central dot, and an outlined plaque directly above it. The central head is the focal face, so these read as crown ornaments at native size. The stanza 6 plan requires the three visible crowns to be the same modest, plain ochre form without gems or medallions (frozen plan lines 271–274). Remove these details and make the central crown plain to match the two side crowns. This is the only defect supporting the verdict.

The earlier concern that Brahma has only two arms is not supported by this image. All four arms and hands are visibly distinct and connected: the upper hand on the image’s left holds the book; the lower hand on the left rests on the kamandalu handle; the upper hand on the right holds the lotus; and the lower hand on the right grips the sacred thread. This satisfies the explicit four-arm requirement.

This report is an independent review, not an approval. The artwork remains unapproved. The pending captain art approval is standing state; this review raises no captain decision, so my captain-call inventory is empty.

## Input verification and provenance

I generated `.review-scratch/expected.sha256` from the expected checksums and exact paths in the task brief and ran:

```sh
sha256sum -c '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/4/narayaneeyam/.review-scratch/expected.sha256'
```

Every listed input reported `OK`. The list covered the candidate, reference photo 007, all frozen contract files below, `content/sources/d030/reference-map.json`, and `intake/D030/photo-captions.txt`. I separately confirmed the candidate checksum after visual inspection. The review inputs and relevant scene references are:

| File | Actual SHA-256 |
|---|---|
| Frozen plan `art/plans/d030.json` | `a09c8cfeea11a0e75df67ee527b8d5c08fa7da5e9600c57e73708e94a58f6041` |
| Frozen series bible `art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Frozen character `d031-vamana/character.json` | `31d403fb50b382cb2cd58a19ef71953f2440f6092c80f69a42beac79575ed229` |
| Frozen character `d031-mahabali/character.json` | `e334bbe06ab91249be71bfe5ed494b5b7dff837a32b30fe5391a29796854dfc9` |
| Frozen character `d031-shukracharya/character.json` | `c493d4cfa5d61cb35e6cf5b318819d563f98825038ba456fd5a47fb37658b3c8` |
| Frozen character `d027-vishnu/character.json` | `65205c3f838ba8af093f79cda39978a8b0de3d0cdbc8a0a9aa2510491906bd24` |
| Frozen character `devas/character.json` | `e6b8240053a9bf48c4b2a1843394000aa4f360ec9de318400c21dcdaf4e2f138` |
| Frozen character `sages/character.json` | `4c8c717e6cb38c11f39463c131d2bec5528d65fc20c564ccdd203240eaf1152c` |
| Frozen character `brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| Frozen character `shiva/character.json` | `cf55e863899b7c948208f234295ad20ed723393ee879d4b16f8cd9251010228f` |
| Frozen character `d030-aditi/character.json` | `94c8ed8be0a948ad2b58b754f06fe0f48ed06c9b39c8a75908b676cdb2cdc92a` |
| Frozen character `d030-kashyapa/character.json` | `3a4bfe53bece23fc17b2a86fde28ce6e0923c61940b657f240fad89b556d281f` |
| Candidate `artifacts/d030/s006/landscape/candidate-v015.png` | `9f3e440d7869d3f001a0b1e3305890f7c245b76177e5adc5e2733b2d2bf83038` |
| Reference photo `intake/D030/007.jpg` | `8dd284dad7b70fe36b04e69d20890e86c2debbc3c25b9a47747f0290eb27e820` |
| `content/sources/d030/reference-map.json` | `623008011dbe4abf33efdfbbbe7772a5ce1b6a12fecbcf536a0aa66b8f66b79f` |
| `intake/D030/photo-captions.txt` | `613b928883790a1b301cb7a72d8ed810ea4dea11e6357e81d67eeb08632eb21f` |

The final frozen stanza plan identifies concept `d030-s006`, characters Kashyapa, Vamana, Brahma and sages, and photo 007 (plan lines 255–279). It requires the initiation implements, the fire rite, departure toward Bali’s Ashvamedha, Brahma’s four attached arms and four total heads with three front-visible faces, muted brown elder skin, and plain matching crowns (lines 271–274). The chapter source records canonical stanza 30-6 at `content/daskams/d030.json:67–69`; the reference map documents photo 007’s mismatch at `content/sources/d030/reference-map.json:73–80`.

The map says photo 007 depicts Bali’s later foot-washing welcome, not the stanza 6 initiation/departure. I inspected that photo and confirmed the mismatch. The candidate follows the stanza plan rather than reproducing the photo: it shows the initiation, sacred fire, listed implements and a distant horse pavilion with a path. The plan-disclosed reference deviation is present; it is not itself a candidate defect.

The character contract for Brahma requires four heads total, three visible faces from the front, and four distinct attached arms/hands (frozen `brahma/character.json:22–38`); the Vamana and Kashyapa contracts specify natural two-arm/two-leg anatomy, ascetic dress and matte mural rendering (`d031-vamana/character.json:5–10`, `d030-kashyapa/character.json:5–9`). The sages contract calls for distinct mature figures with warm brown pigments, cream/saffron cloth and two attached arms (`sages/character.json`, `depiction_rules` and `visual_bible`).

## Image-specific findings

- **Anatomy:** No malformed or duplicated people, fused bodies, extra/missing limbs, detached props, or clearly defective proportions are visible. Brahma’s four arms are individually traceable to the torso and terminate in four distinct hands as enumerated above. Vamana has one face, two attached arms and legs. Both elders are distinct and normally proportioned.
- **Faces:** Brahma has three distinct front-visible faces; no merged or duplicated facial features are visible. The fourth rear-facing head is not visible from this frontal angle, as the contract specifies. Vamana and both elders have legible, distinct faces without malformed features.
- **Hands and feet:** Enlarged checks show no obvious extra, fused or malformed digits. Brahma’s book hand has five visible digit shapes; the pot grip has three visible digits, with others occluded by the handle; the lotus grip has four visible digits, with one occluded by the stem; the thread grip has four visible digits, with the remaining digit occluded by the grip. Vamana’s staff grip shows five digits; the bead grip shows four visible digits, with one obscured by the beads. Vamana’s two feet each show five distinct toes. Brahma’s one visible resting foot shows five toes. The cropped peripheral elders’ feet run naturally toward the image edge; this is not a defect.
- **Clothing and cast:** Vamana wears simple cream brahmachari cloth and sacred thread and carries the staff and beads; the deer skin is visibly offered by an elder. The elders wear modest cream cloth. Brahma’s sacred thread and one fine bead strand are visible; I see no layered necklaces, medallion, armlets or stacked wrist ornaments. Bare upper torsos are ordinary traditional dress. No exposed or sexualised framing is present. The specific forbidden central crown ornaments are recorded above.
- **Text/signature artifacts:** No readable text, caption, signature, logo or watermark is visible in the image, including corners, grass, path and ground. Decorative lines on the fire altar and mat do not resolve as writing.
- **Scene and reference fidelity:** The small fire, initiation scene, sacred thread, staff, deer skin, beads, and distant horse/pavilion with a connecting path are present. The scene reads as the canonical initiation and journey context, not the mismatched foot-washing reference. The curved path suggests the destination; Vamana is standing rather than visibly mid-stride. This is an observation, not a separate defect. The broad mural composition has no outer border.
- **Character/deity contract:** Brahma is rose-ochre, not blue, with three front-visible faces and exactly four visibly attached arms/hands; his low ochre crowns are matte, but the central crown’s circular inset/plaque violates the plan’s plain-crown rule. Vamana’s skin is deep blue, not orange or a different contract colour; the visible forehead mark and bun are consistent with a brahmachari depiction, and there is no peacock feather or flute. Kashyapa and the other elder read as natural warm brown, not orange. From 24 × 24 skin-only pixel patches sampled on the left elder’s torso (x=115,y=525) and right elder’s torso (x=1500,y=500), median RGB values were (178, 115.5, 81) and (181, 116, 82), respectively; red-minus-blue medians are **97** and **99**, below the stanza plan’s stricter 100 guide. Both look naturally warm brown at native size. A 24 × 24 Brahma torso patch (x=465,y=420) measured median RGB (219, 134, 103), red-minus-blue **116**, consistent with the distinct rose-ochre Brahma contract rather than the elders’ brown requirement.

## Evidence and review method

Commands used included `sha256sum -c` on the generated expected-checksum list, `sha256sum` on the candidate after inspection, `magick identify` for native dimensions, and `magick ... -crop ... -resize ...` to create enlarged views at explicit absolute output paths under `.review-scratch/`. I opened the full-resolution candidate, photo 007 and the crops individually. The primary visual evidence includes `.review-scratch/brahma_all.png`, `brahma_hands.png`, `brahma_crowns_detail.png`, the individual hand crops, `vamana.png`, `vamana_feet.png`, `kashyapa.png`, `elder_right.png`, `fire_props.png`, `upper_right.png`, and `lower_edges.png`. No source image was modified.

## Recommendation

Make a new version of this candidate with the central crown’s circular inset and plaque removed, preserving the four attached Brahma arms and the rest of the plan-compliant scene. Then obtain a fresh exact-checksum review. Do not update the approval manifest from this report; this candidate remains unapproved.

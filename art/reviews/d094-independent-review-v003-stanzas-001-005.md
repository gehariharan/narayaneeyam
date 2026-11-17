# D094 landscape candidate review — stanzas 1–5

Independent visual review completed 2026-11-17. The review is bound to the exact image checksums below and the frozen plan and character-contract bytes listed below. I read the final plan, series bible, all five character files supplied for this review, chapter content and the five mapped intake photographs with their captions. I inspected each candidate at native resolution (1672×941 for S001–S003; 1670×941 for S004–S005), then enlarged focused crops of every depicted figure, visible hands and feet, and the crowded Brahma figure. I also checked the full frames, corners, ground and foliage for text/signature artifacts.

## Contract and candidate byte checks

The required contract hashes matched their expected values at review time:

| Contract file | SHA-256 |
|---|---|
| Frozen plan `data/d094-production/review-contract-c/art/plans/d094.json` | `8d28c96f8725b2f367f55a1147d8735125d25b2d96780e56e7321cc3642f6d5b` |
| Frozen series bible `.../art/bible/series.json` | `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa` |
| Bhattathiri `.../characters/bhattathiri/character.json` | `85250f4fee4e6928bb7ba41d5c54aaccdb226879e7880d2cf79951e01897b535` |
| Brahma `.../characters/brahma/character.json` | `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389` |
| Gopikas `.../characters/gopikas/character.json` | `a467a2342ad1504311a8ca82cc388c25940823adb8b5705be1bcf641f8b17665` |
| Guruvayurappan `.../characters/guruvayurappan/character.json` | `84376d4a9007d9ce191f243989719e121bdc026c9453ae1d8fd347d0387f4456` |
| Krishna Vrindavan youth `.../characters/krishna-vrindavan-youth/character.json` | `bde3b6c529fbf0c2fbf24d7c553cc1df1050a6f9aab3a2417b3624912770db2d` |

Candidate hash verification also matched the selected versions:

| Dasakam stanza | Version | Image SHA-256 | Mapped reference |
|---|---:|---|---|
| 1 | v001 | `30295f3021ad8ab1a0ae0824eddae8fa013b2c6e99863ce9e3144a4fda2b0260` | `intake/D094/001.jpg` |
| 2 | v001 | `deb3dd33f7cd07077217f89b20716d970de404a99b179a116d0c697dd5e1f930` | `intake/D094/002.jpg` |
| 3 | v009 | `e3384fbb51ee9fbff519f9921206a08de74cd4f85328f006bb4d03785abc85a8` | `intake/D094/003.jpg` |
| 4 | v017 | `f2d27cfef6dc2efd58b4c9af56db75cc61b69ee839944b81bf64bc6c7f41eb1e` | `intake/D094/004.jpg` |
| 5 | v005 | `424583c0ad2b33536d7aa3192150a64c1687d2a035f62b965b78c637f3b035a3` | `intake/D094/005.jpg` |

Verification and inspection record: ran `sha256sum` over the seven frozen contract files and five candidate files; all printed values matched the expected hashes in the task brief. Ran `identify -format '%f %wx%h'` on all five candidates for native dimensions. Opened every candidate and mapped reference image at full-frame resolution, and inspected manually generated 2× crops made with ImageMagick `convert -crop ... -resize ...` in `.d094-review-c-scratch/` inside the disposable worktree. For S004 I additionally sampled 11×11 pixel patches with `magick -crop 11x11 ... txt:-` and computed channel medians. No project source or approval manifest was changed. Review time for all five images: **2026-11-17T01:40:15Z** (UTC).

Plan and source mapping evidence: stanza entries and mapped-photo arrays are in frozen plan lines 30–68 (S001), 78–116 (S002), 126–171 (S003), 181–229 (S004), and 239–277 (S005). Chapter stanza commentary and `commentary_source` mapping are in `content/daskams/d094.json` lines 1–63; the corresponding supplied captions are `intake/D094/photo-captions.txt` lines 1–24. The reference photographs were used for scene/context fidelity only, not copied as poses or compositions.

## Per-image findings

### Stanza 1 — candidate v001

- **Anatomy:** No humans or creatures are depicted; no anatomy defects apply.
- **Faces:** None present.
- **Hands/feet:** None present.
- **Clothing and cast:** No cast or clothing; the plan requires no people.
- **Text/signature artifacts:** None seen in the corners, star field, ground or logs. No lettering, signature, logo or watermark found.
- **Scene and caption fidelity:** The image uses a continuous spiral-like cosmic field and shows three separate log groupings with visibly different flame sizes. The logs and flames remain on the right, distinct from the cosmic field; no person or text appears. This supports the mapped caption’s all-pervading presence and variable flame metaphor (plan lines 35–50; caption line 4). The reference is an abstract galaxy image (reference `001.jpg`); the candidate recomposes it into the planned mural rather than reproducing its photographic treatment.
- **Character/deity contract:** No characters are required or shown; no contract conflict.
- **Verdict: pass.**

### Stanza 2 — candidate v001

- **Anatomy:** No humans or creatures are depicted; no anatomy defects apply.
- **Faces:** None present.
- **Hands/feet:** None present.
- **Clothing and cast:** No cast or clothing; the plan explicitly calls for objects only.
- **Text/signature artifacts:** None seen in the flames, branch tangle, soil or corners; no readable marks, signature, logo or watermark.
- **Scene and caption fidelity:** Two wooden pieces cross at the controlled central flame; the lower piece is horizontal and the upper piece diagonal. A distinct tangle of dry branches burns beside them, with open calm ground beyond. No teacher/disciple people or written teaching appear. This matches the plan and mapped caption’s fire-of-knowledge metaphor (plan lines 83–98; caption lines 7–10). Reference `002.jpg` depicts a guru and student; the candidate appropriately follows the final object-only plan instead of adding either figure.
- **Character/deity contract:** No characters are required or shown; no contract conflict.
- **Verdict: pass.**

### Stanza 3 — candidate v009

- **Anatomy:** Two figures only, both seated; limbs connect naturally and proportions are coherent. No duplicate person or fused body seen. Bhattathiri’s one visible bare foot at lower left is fully inside the frame and shows five toes; the other foot is tucked under the dhoti and not visible. Bhagwan’s two feet on the seat are visible and each shows five toes. No extremity is cut off.
- **Faces:** Bhattathiri has one lined, clean-shaven face, forehead ash stripes and a small hair tuft. Bhagwan has one serene face and blue skin. Neither face is malformed.
- **Hands/feet:** Bhattathiri’s joined prayer hands read as one folded pair without an extra digit or fused limb. Bhagwan’s raised open hand shows a thumb and four fingers; the lowered hand rests on his knee with five fingers visible. Both Bhagwan feet show five toes; Bhattathiri’s visible foot shows five toes.
- **Clothing and cast:** One older devotee wears a cream dhoti with sacred thread and beads; his torso is traditionally bare and not sexualized. The only other person is the blue deity. No added doctors, kings, sages or group figures.
- **Text/signature artifacts:** None seen in the ground, plants, garment details or corners; no readable text, signature, logo or watermark.
- **Scene and caption fidelity:** The seated pair faces each other in a grove; Bhattathiri turns toward Bhagwan with folded hands. At lower right I see a plain bowl, a small vessel and a discarded crown, kept as objects rather than vignettes. The blue deity is the calm focus; there is no beam or miracle effect. These satisfy the plan’s required pair and three temporary-path objects (plan lines 134–150; caption lines 13–16). The mapped photo is a Krishna/devotee embrace; the candidate uses its surrender context without reproducing that pose.
- **Character/deity contract:** Bhattathiri’s age, clean-shaven face, ash marks, tuft, cream dhoti, thread and restrained beads agree with his contract (character file lines 17–32). Bhagwan is blue, serene, and has a peacock-feather crown. The crown and layered jewelry are ornate in the head/neck region but are ordinary temple-mural iconography and no contract prohibition applies (Guruvayurappan file lines 14–34).
- **Verdict: pass.**

### Stanza 4 — candidate v017

- **Anatomy:** Three figures are present: four-headed Brahma, Bhattathiri, and one Bhagwan. Brahma has four distinct heads arranged around the center: three front/profile faces and one rear-facing head with the back visible. Four separate arms attach to Brahma’s torso, each ending in a hand holding a distinct attribute. Bhagwan has two connected arms. Bhattathiri is seated; both legs and feet are naturally tucked beneath his dhoti and not visible. Bhagwan’s feet are fully inside the frame and each has five toes. No malformed or duplicated person, fused limb or cut-off key extremity seen.
- **Faces:** Brahma’s three visible faces are individually formed; the fourth head faces away as required. Bhattathiri has one clean-shaven, lined face; Bhagwan has one serene blue face. No malformed or merged features seen.
- **Hands/feet:** Brahma’s four hands are attached and separately hold the lotus, prayer beads, palm-leaf book and water pot. Bhagwan’s two open hands each show thumb plus four fingers. Bhattathiri’s prayer hands are joined naturally. Bhagwan’s two visible feet each show five toes; Bhattathiri’s are concealed by the dhoti.
- **Clothing and cast:** Bhattathiri wears a cream dhoti, sacred thread and prayer beads, with traditionally bare upper body. His skin reads warm brown with an amber cast. In my enlarged crop, an 11×11 cheek patch centered at image pixel (675,535) had median RGB (189,108,70), R−B 119; an 11×11 upper-torso patch centered at (680,660) had median RGB (209,122,79), R−B 130. The warmth is visible, but is comparable to the plan’s disclosed deviation (candidate status reports face/torso median R−B 120/125 and individual patches up to 128). No sexualized framing. Brahma wears cream/saffron clothing and sacred ornaments; his four crowns are visibly tiered and jeweled, proportionate to the four heads. Bhagwan wears yellow garments and a red/orange shawl.
- **Text/signature artifacts:** None seen among stars, planets, shrine, textile patterns, or image edges. The book is blank/mark-free at this scale; no readable writing, signature, logo or watermark.
- **Scene and caption fidelity:** Brahma occupies the exposed celestial upper-left; below and to the right Bhattathiri prays toward a calm Bhagwan in a sheltered shrine. Cosmic height is contrasted with the sanctuary; no hell or punishment is depicted. This matches the plan and caption’s fear in Satyaloka and prayer for release (plan lines 190–208; caption lines 19–22). The source is cosmic context only; the candidate does not reproduce its reclining figure.
- **Character/deity contract:** Brahma’s 4 heads and 4 arms meet the explicit anatomy count (Brahma file lines 22–38); Bhattathiri’s identity and dress follow his contract (Bhattathiri file lines 17–32). The visible crowns and necklaces on the deities are ornate, but are ordinary mural iconography; the crowns are not disproportionate enough to violate Brahma’s “not oversized” wording (Brahma file lines 25–31). The brown-skin deviation is present and measured above; it is not clearly worse than the already disclosed variation.
- **Verdict: pass — disclosed deviation present.**

### Stanza 5 — candidate v005

- **Anatomy:** One resting human figure is shown. The head, torso, arms and legs connect naturally; no duplicate person or fused body is visible. The figure’s raised hand at the forehead and the lower hand on the branch each show five digits at enlarged view. Both feet are visible and each shows five toes. No face or extremity is cut off by the frame.
- **Faces:** One calm sleeping face with closed eyes; no malformed facial features.
- **Hands/feet:** Five digits on both visible hands and five toes on each foot. Hands and feet are fully inside the image.
- **Clothing and cast:** One traditionally dressed figure with a dhoti and orange drape; upper torso is bare and wears jewelry. This is ordinary traditional iconography, not sexualized framing. No other people appear.
- **Text/signature artifacts:** None seen in the tree bark, fruit, leaf/ground patterns, sky or corners; no text, signature, logo or watermark.
- **Scene and caption fidelity:** One branching tree visibly joins the shadowed dream side with fruit and the resting figure to the clear side with open space and a lotus-like form. It reads as two conditions of one underlying reality, not a second independent place; no chains or textual symbols appear (plan lines 244–258; caption lines 23–24). The figure is prominent on the left branch, but remains a single resting figure within the tree metaphor; I found no listed disqualifying defect.
- **Character/deity contract:** No named character contract applies; no character rule conflict.
- **Verdict: pass.**

## Recommendation and approval boundary

The five exact candidate files reviewed here pass the stated visual gate; S004 passes with the plan’s disclosed Bhattathiri skin-tone deviation noted. This is an independent visual review only. It does not approve artwork, update `art/approved/`, or clear the standing captain art-approval step. No additional unresolved captain decision was raised by this review; the captain-call inventory for this report is empty.

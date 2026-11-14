# D012 stanza 5 landscape: independent visual review

## Scope and method

I independently reviewed the selected landscape candidate against the frozen final stanza plan, series bible, Brahma and Varaha character contracts, the D012 stanza text, reference photo `intake/D012/005.jpg`, and its preserved caption. The image was inspected in full at its native 1672 × 941 resolution and in enlarged scratch crops of the boar's head/roar, all four legs/hooves, Brahma's heads and hands, the lower ground, and a frame corner. The candidate was copied to `/tmp/d012-review-candidate-v003.png` for crop work; the original was read-only. The final source and scratch-copy hashes match.

The selected source reference is D012/005: the plan names it at `art/plans/d012.json:247-254`; chapter content associates stanza 5 with caption `photo-captions.txt#005` at `content/daskams/d012.json:51-57`. The preserved caption says Brahma wonders at the boar's origin and Varaha becomes mountain-sized and roars (`photo-captions.txt:15-16`). The reference itself shows a humanoid, weapon-bearing boar deity; the plan explicitly limits it to subject iconography and says not to copy its humanoid warrior anatomy or unrelated weapons (`art/plans/d012.json:254`).

## Contract file checksums

All actual SHA-256 values below match the task's expected values.

- Final plan, `art/plans/d012.json`: `5073515ef7467fc27feff08b8f71f47acf76617db7fe39b6148104863b4d9e30`
- Series bible, `art/bible/series.json`: `cd883d8f451aa26812932ed2f35332d677e52cb7dd905e1d0972b17c92f07aaa`
- Brahma contract, `art/bible/characters/brahma/character.json`: `839148939946eb9fa1931b0bc34e015026a21a423c3234cd03a373d3c7dd2389`
- Varaha contract, `art/bible/characters/varaha/character.json`: `76a352c0d1a766a95deec6db9c42bdf13eeafd3aac48fbefb3545f5df1f94ed3`

## Candidate and findings

- Stanza: 5 (`12-5`)
- Concept: `d012-s005`
- Version/orientation: `candidate-v003.png`, landscape
- Candidate SHA-256: `bc8a03142e0382473c28b6c2886326673e5a9640716e54e801c70dc52abf7af6`
- Verified review time: `2026-11-14T22:41:51Z`
- Verdict: **pass** (bound only to the exact checksum above)

### Per-area findings

- **Anatomy:** One boar occupies the sky. It has one head and a coherent torso with four visibly attached natural quadruped legs and an up-curled tail. No extra, missing, fused, or detached limbs are visible. The boar is dynamically posed in the air; its elongated body and limbs remain connected and read as one animal, not a humanoid warrior. Brahma is a separate small seated figure below.
- **Faces:** The boar has one readable face with an open roaring snout, two tusks, and no duplicate features. Brahma has three distinct visible faces/heads arranged around the central face, with no merged or repeated facial parts apparent. At this front-facing angle that matches the contract's three visible faces; the fourth head is turned away/hidden as specified. No malformed faces are visible in the full image or enlarged crop.
- **Hands and feet:** Brahma has four distinct attached arms and four hands, each with a separate attribute or gesture: open palm, water pot, lotus, and prayer beads. The enlarged open palm shows five digits; no extra or fused digits are apparent on the hands. The other hands wrap around their attributes, with no visible digit defect. All four boar feet are present; each enlarged hoof reads as a paired cloven hoof (two toe halves), with no extra or malformed toes. No key extremity is cut off by the frame.
- **Clothing and cast:** Brahma wears cream and saffron lower robes with a draped sash, sacred thread, and ordinary sacred ornaments; the upper torso is traditionally bare and not sexualized. The cast contains Brahma and one Varaha only; there are no duplicated or accidental extra people. Varaha has a tiered ochre crown, prominent necklace/collar, leg bands, and a decorated saddle cloth. This ornament is conspicuous, especially around the head/neck and torso, but it is painted ochre temple-mural iconography; neither the plan nor the character contract explicitly prohibits a crown or collar. It does not obscure the boar anatomy. No weapons are present.
- **Text/signature artifacts:** No readable text, pseudo-script, signature, logo, or watermark is visible. I checked the full image and enlarged lower-ground and corner crops, including the vegetation and ground; no artifact is apparent.
- **Scene and caption fidelity:** The single boar is shown roaring over a much smaller Brahma, who regards it below. The composition has a clear gap between Brahma and the boar. Clouds surround and pass beneath the boar. There are no literal mountain silhouettes in the background, but scale reads clearly from the immense boar-to-small-Brahma contrast, the clouds around the body, and the open gap; it is legible as the mountain-sized boar looming over Brahma. This follows the exact plan wording, “Scale reads through cloud and mountain forms, not bodybuilder proportions” (`art/plans/d012.json:220-224`): the lack of literal mountain forms is an observation, not a defect, because the required scale is unmistakable. The scene agrees with stanza 12-5's mountain-sized growth and fierce roar (`content/daskams/d012.json:51-55`) and the preserved caption. It does not copy the source photo's humanoid warrior anatomy or weapons.
- **Character/deity contract:** Brahma's three visible faces, four attached arms/hands, cream/saffron dress, and seated lotus presentation accord with the Brahma contract (`characters/brahma/character.json`, anatomy and visual-bible sections). Varaha reads as one coherent natural boar, with one head and four legs, and no human arms or weapon attributes, in keeping with the D012-scoped Varaha contract (`characters/varaha/character.json`, anatomy and `never` sections). The dominant palette is warm earth ochre, cream, and dark brown contours, rendered as a painted matte scene without metallic shine or cinematic lighting. No explicit structural prohibition is violated.

## Evidence and recommendation

Commands used to verify bytes and dimensions and create scratch crops:

```sh
sha256sum '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam/artifacts/d012/s005/landscape/candidate-v003.png' '/home/gehariharan/firstmate-narayaneeyam-mate/data/d012-s003-fix/review-contract-c/art/plans/d012.json' '/home/gehariharan/firstmate-narayaneeyam-mate/data/d012-s003-fix/review-contract-c/art/bible/series.json' '/home/gehariharan/firstmate-narayaneeyam-mate/data/d012-s003-fix/review-contract-c/art/bible/characters/brahma/character.json' '/home/gehariharan/firstmate-narayaneeyam-mate/data/d012-s003-fix/review-contract-c/art/bible/characters/varaha/character.json'
cp '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam/artifacts/d012/s005/landscape/candidate-v003.png' /tmp/d012-review-candidate-v003.png
identify /tmp/d012-review-candidate-v003.png '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam/intake/D012/005.jpg'
convert /tmp/d012-review-candidate-v003.png -crop 580x420+820+0 +repage /tmp/d012-review-crop-boar-head.png
convert /tmp/d012-review-candidate-v003.png -crop 1450x300+35+330 +repage /tmp/d012-review-crop-boar-legs.png
convert /tmp/d012-review-candidate-v003.png -crop 500x390+580+545 +repage /tmp/d012-review-crop-brahma.png
convert /tmp/d012-review-candidate-v003.png -crop 340x260+45+500 +repage -resize 300% /tmp/d012-review-crop-left-hooves-3x.png
convert /tmp/d012-review-candidate-v003.png -crop 500x280+990+330 +repage -resize 250% /tmp/d012-review-crop-right-hooves-2_5x.png
convert /tmp/d012-review-candidate-v003.png -crop 360x210+590+585 +repage -resize 300% /tmp/d012-review-crop-brahma-hands-3x.png
convert /tmp/d012-review-candidate-v003.png -crop 1672x140+0+801 +repage -resize 200% /tmp/d012-review-crop-ground-2x.png
convert /tmp/d012-review-candidate-v003.png -crop 300x220+1372+721 +repage -resize 200% /tmp/d012-review-crop-corner-br-2x.png
sha256sum /tmp/d012-review-candidate-v003.png '/home/gehariharan/.treehouse-narayaneeyam-mate/.treehouse/narayaneeyam-9a4f64/7/narayaneeyam/artifacts/d012/s005/landscape/candidate-v003.png'
FM_HOME='/home/gehariharan/firstmate-narayaneeyam-mate' bash '/home/gehariharan/firstmate-narayaneeyam-mate/bin/fm-captain-hold.sh' complete 'd012-review-c' --none
```

`identify` reported candidate dimensions `1672x941` and reference dimensions `736x1041`. The last command returned `complete: d012-review-c captain-call inventory reviewed`. The plan's stanza-5 requirements are at `art/plans/d012.json:216-254`, especially the explicit scale clause and composition at lines 220-224. The image is visually cleared for this independent review only. Keep it unapproved pending the standing captain art approval; this review does not change any approval manifest or master.

Captain-call inventory for this review: empty. The standing captain art approval is not a decision raised by this review.

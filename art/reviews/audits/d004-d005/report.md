# D004–D005 generated image audit

**Date:** 2026-10-15  **Scope:** D004 and D005 landscape candidates only.
**Result:** 28/28 candidates currently shown on the live review pages were matched to the deployed release and inspected individually; 32/32 local generated versions were individually inspected, including four preserved D004 versions not shown on the live pages. No artwork was generated; no source candidate was modified, approved, removed, synced, or published. No feedback was submitted.

## Summary

| Inventory | Expected | Inspected | Missing |
|---|---:|---:|---:|
| Local generated versions in original Narayaneeyam source tree | 32 | 32 | 0 |
| Published candidates (D004 selected rows plus D005 selected rows and visible alternates) | 28 | 28 | 0 |

The live pages were opened with chrome-devtools-axi at [D004](https://gehariharan.com/narayaneeyam/d004) and [D005](https://gehariharan.com/narayaneeyam/d005). The exact deployed dataset/provenance came from the checksum-pinned [review-bundle release](https://github.com/gehariharan/narayaneeyam/releases/tag/review-bundle-2f7a5eb5efb6a631b31d5a5e144ecc38d1ea16ee), revision af9bed7652551848. For each published candidate, its deployed asset-provenance.json source path and full source hash matched the read-only original candidate; its published media key matched the image URL visible in the live page. D004 uses the generic live label “Traditional matte mural”; its version comes from the bundle dataset and pinned comparison manifest. D005 publishes candidate-version labels and alternates explicitly.

No masters or approval manifest entries were expected: art/approved/d004.json marks all D004 orientations planned, and neither batch is a master/approval record. The D004 and D005 batch manifests both mark their artwork needs-review.

## Findings requiring attention

Factual defects are separated from interpretive or scale uncertainty. Severity is local to this review set; low severity indicates presentation/style correction rather than a harmful anatomy error.

### D004-S007-v001-F01 — D004 S007 v001 (moderate, high)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d004/s007/landscape/candidate-v001.png (preserved local version; not published)
- **Type:** factual-defect; cropped-principal-figure. **Subject/location:** Guruvayurappan murti; upper-right, bbox [0.62,0.00,0.26,0.72].
- **Observed:** The composition cuts off the murti crown at the top edge; the crown is not complete in frame.
- **Expected basis:** D004 S007 scene brief calls for the complete Lord in the sanctum; continuity rules prohibit cropping crown, hands, or feet.
- **Repair direction:** Recompose with the full murti inside safe margins; preserve the separate candidate as historical.

### D004-S012-v001-F01 — D004 S012 v001 (moderate, high)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d004/s012/landscape/candidate-v001.png ([published](https://gehariharan.com/narayaneeyam/media/d004-s012-matte-e27485276f7a2071.webp))
- **Type:** factual-defect; character-anatomy-contract. **Subject/location:** Small Brahma figure in the upper-right celestial pavilion; upper-right, bbox [0.79,0.03,0.18,0.48].
- **Observed:** The identifiable three-faced creator is shown with only two visible arms; the torso is unobstructed and no other pair is present.
- **Expected basis:** Brahma character bible requires exactly four arms and hands, all distinct and visibly attached; the same bible allows three visible faces from a frontal view.
- **Repair direction:** Remove the incidental Brahma motif or recompose it with four distinct attached arms and hands.

### D005-S001-v001-U01 — D005 S001 v001 (low, low)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d005/s001/landscape/candidate-v001.png ([published](https://gehariharan.com/narayaneeyam/media/d005-s001-alternate-v001-da419fb0e2d89cec.webp))
- **Type:** uncertain-judgment; attribute-grip-clarity. **Subject/location:** Lower hand and mace, viewer-right of seated Lord; lower-right side of the deity, bbox [0.48,0.42,0.08,0.25].
- **Observed:** A close view shows the lower hand touching the mace finial/top, but the hand does not read as a clear grip on the handle. The remaining three attributes are visibly held.
- **Expected basis:** This four-armed depiction should keep any shown attributes legibly associated with distinct hands; the D005 S001 plan itself does not prescribe the mace.
- **Repair direction:** If the mace is intended as held, clarify the grip; otherwise remove or reposition it as a deliberate nearby symbol.

### D005-S007-v001-F01 — D005 S007 v001 (low, high)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d005/s007/landscape/candidate-v001.png ([published](https://gehariharan.com/narayaneeyam/media/d005-s007-alternate-v001-dfd8d4a5dac90e2e.webp))
- **Type:** factual-defect; composition-style. **Subject/location:** Decorative outer frame around the symbolic bands; entire perimeter, bbox [0.00,0.00,1.00,1.00].
- **Observed:** A separate floral ornamental border encloses the image.
- **Expected basis:** Series bible specifies full-bleed composition without a separate decorative outer border.
- **Repair direction:** Recompose the symbolic bands full-bleed, without a perimeter frame.

### D005-S007-v002-F01 — D005 S007 v002 (low, high)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d005/s007/landscape/candidate-v002.png ([published](https://gehariharan.com/narayaneeyam/media/d005-s007-matte-v002-64a6c1277f23816c.webp))
- **Type:** factual-defect; composition-style. **Subject/location:** Decorative outer frame around the symbolic bands; entire perimeter, bbox [0.00,0.00,1.00,1.00].
- **Observed:** A separate repeating floral/lotus frame encloses the image.
- **Expected basis:** Series bible specifies full-bleed composition without a separate decorative outer border.
- **Repair direction:** Recompose the symbolic bands full-bleed, without a perimeter frame.

### D005-S008-v001-F01 — D005 S008 v001 (low, high)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d005/s008/landscape/candidate-v001.png ([published](https://gehariharan.com/narayaneeyam/media/d005-s008-matte-v001-662aa0fd27980f1d.webp))
- **Type:** factual-defect; composition-style. **Subject/location:** Floral and geometric outer frame; entire perimeter, bbox [0.00,0.00,1.00,1.00].
- **Observed:** A thick separate decorative border frames the elemental streams.
- **Expected basis:** Series bible specifies full-bleed composition without a separate decorative outer border.
- **Repair direction:** Recompose the elemental streams full-bleed, without the decorative perimeter.

### D005-S010-v001-F01 — D005 S010 v001 (low, high)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d005/s010/landscape/candidate-v001.png ([published](https://gehariharan.com/narayaneeyam/media/d005-s010-alternate-v001-217bede781a2b018.webp))
- **Type:** factual-defect; composition-style. **Subject/location:** Thin ornamental outer frame; entire perimeter, bbox [0.00,0.00,1.00,1.00].
- **Observed:** A distinct patterned border surrounds the Virat composition.
- **Expected basis:** Series bible specifies full-bleed composition without a separate decorative outer border.
- **Repair direction:** Remove the separate perimeter frame while retaining the cosmic egg and tiered form.

### D005-S010-v001-U01 — D005 S010 v001 (low, low)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d005/s010/landscape/candidate-v001.png ([published](https://gehariharan.com/narayaneeyam/media/d005-s010-alternate-v001-217bede781a2b018.webp))
- **Type:** uncertain-judgment; small-figure-anatomy. **Subject/location:** Miniature inhabitants depicted within the fourteen world-bands; central world-bands, approximately bbox [0.34,0.18,0.32,0.55].
- **Observed:** The tiny inhabitants are visible as scene motifs but too small to clear hands, feet, and body attachment reliably at native review size; no defect was confirmed.
- **Expected basis:** The stanza plan explicitly requires fourteen bands and an integrated Virat world form; tiny realm inhabitants are secondary and do not set the Virat limb count.
- **Repair direction:** For publication-level anatomy clearance, omit or enlarge the miniature people so their bodies can be inspected.

### D005-S010-v002-U01 — D005 S010 v002 (low, low)

- **Image:** /home/gehariharan/Projects/narayaneeyam/artifacts/d005/s010/landscape/candidate-v002.png ([published](https://gehariharan.com/narayaneeyam/media/d005-s010-matte-v002-77d7e4b29b260ccb.webp))
- **Type:** uncertain-judgment; small-figure-anatomy. **Subject/location:** Miniature inhabitants depicted within the fourteen world-bands; central world-bands, approximately bbox [0.34,0.18,0.32,0.55].
- **Observed:** The tiny inhabitants are visible as scene motifs but too small to clear hands, feet, and body attachment reliably at native review size; no defect was confirmed.
- **Expected basis:** The stanza plan explicitly requires fourteen bands and an integrated Virat world form; tiny realm inhabitants are secondary and do not set the Virat limb count.
- **Repair direction:** For publication-level anatomy clearance, omit or enlarge the miniature people so their bodies can be inspected.

### Non-defect and uncertainty notes

- **D004 S014 v001:** the same Bhattathiri appears at successive positions across the seven cosmic bands. This reads as staged movement through the layers specified by the plan, not an accidental copied duplicate. The bodies remain visually separated; no duplicate-artifact finding.
- **D004 S012 v001:** the Brahma motif is small but a close view confirms three frontal faces and only two visible arms, a factual mismatch with the four-arm Brahma character contract. The scene plan does not name Brahma; the safest repair is to omit the incidental motif or correct it.
- **D005 S010 v001/v002:** repeated Virat heads/arms/feet are explicitly planned cosmic anatomy, not extra-limb defects. The broad tiers are readable at full image size. Some tiny inhabitants inside world-bands are too small for reliable individual hand/foot assessment; those images are marked uncertain for that subregion, not cleared.
- D005 S009 detached hand/foot emblems are symbolic icons, not detached limbs from a person. Across D004 S008 the two walking sages are separate figures; not a fused body or duplicated person.

## Per-image inventory

`findings.json` contains full records, including full SHA-256, actual dimensions, source path, current published key/URL, exact version/role, selected-match evidence, outcome, anatomy basis and finding IDs for each image.

| Daskam / sloka | Role / version | Outcome | Published match | SHA-256 |
|---|---|---|---|---|
| D004 S001 | lead v001 | pass | yes | e6a22097e7c3222c9449e0803c98eb0d37a566a18af7d8fb67b14aaedcf6c871 |
| D004 S002 | alternate v001 | pass | not in deployed set | 593e331ae5fadec6310c814deeab8d7d76a5f4351cdd6c3f68cf5cc78729f9e1 |
| D004 S002 | lead v002 | pass | yes | c1be91ead45d20d5e4a1257368891b6f1f0848fef9145042b624310c7509ac93 |
| D004 S003 | alternate v001 | pass | not in deployed set | 1cd75f8ca4ee2be122db6934014f3527c219f63783ea030ca7cfb618d374e303 |
| D004 S003 | lead v002 | pass | yes | 8ea4f57d29abf725b4851693c56a0ea476e63949c340168a1d01547f64fd6efc |
| D004 S004 | alternate v001 | pass | not in deployed set | 587048ce71b50526f6afb980fa47ae0aa2c34f2f61d37cbddc9a77b701a13d82 |
| D004 S004 | lead v002 | pass | yes | 3995de77d11610879df50195e37104e5703569bb977956c1be6822978a807769 |
| D004 S005 | lead v001 | pass | yes | 2af8f369c348f872abcce5c76c583a64cd7424f5bb5eabbf1c32dcd53b0faa50 |
| D004 S006 | lead v001 | pass | yes | 412440457a4e849c42ae6c17ba4254549f9b76b91c6d7e4db795b8e288615f91 |
| D004 S007 | alternate v001 | needs-fix | not in deployed set | b64ceb9d2a193083ea9c12b9e0623fd6ce3e897f45e3cd30cc91e69c8ecb1a4a |
| D004 S007 | lead v002 | pass | yes | d43c464710bcd8322f1a12ad503f881800042407403b1643d95f8b9d7909c079 |
| D004 S008 | lead v001 | pass | yes | b343d0b2c3a49be5154e047e39ee179510740f4499e6a042466709e02b43a93b |
| D004 S009 | lead v001 | pass | yes | ebe9f5229897acc7ecd5f6a9013dbdb8a13c3fefc157c0e16e289be6a1be265a |
| D004 S010 | lead v001 | pass | yes | 9f465a1863b20fb1f01a3f598c25b3bd55d63c5cb15336761fee9e2605eee0f4 |
| D004 S011 | lead v001 | pass | yes | 57daca880371b0a16a5d349e2e331d305ebb60c4817764c264c5f8efa5b3e98e |
| D004 S012 | lead v001 | needs-fix | yes | a7444d537a762aa56e90211f0daed50c5a10837bb32238907e5d7eba2c1d2296 |
| D004 S013 | lead v001 | pass | yes | b596ae62219d53502d60bdf1f79b2708da5e86c012f84ff268f89036d0b91566 |
| D004 S014 | lead v001 | pass | yes | 501d9edc9a0a87319d7f2fe344b684366e2e956427189816f5891c95ae779998 |
| D004 S015 | lead v001 | pass | yes | 836a1f93271523d0916441119ad86ba9d52fb99161b472048c0682c6526fe6d4 |
| D005 S001 | alternate v001 | uncertain | yes | 62db779c4bd55c68eab795240b86ee40a9d3c6e72c71c1d10112bc3aa77aa534 |
| D005 S001 | lead v002 | pass | yes | e02e098b170a5e529fe31d7e6c57e9c5ae384962752223fc10872c5d03a9cb27 |
| D005 S002 | lead v001 | pass | yes | 3593f7bc082a4648665b62c9f0e9937dfcf764086a251166f076ca30df7d761b |
| D005 S003 | lead v001 | pass | yes | 6ff39ec7a7bb06a16499c735ec066df44bc87ab725363f86be6403bc792fe108 |
| D005 S004 | lead v001 | pass | yes | b9609e9d3b75c569956c7e8ca31246b04aae963e5d7411d7fd5ff6e26512d877 |
| D005 S005 | lead v001 | pass | yes | a3fad00cd3701e9b85b77963b617dc913d171e5d3d3a26902d5be1372931562c |
| D005 S006 | lead v001 | pass | yes | a6137397bd043330dc0fb26acc0e673ec9c134bdcc7144e87d6119695dd4f5ce |
| D005 S007 | alternate v001 | needs-fix | yes | 077a776e56d492517391ced4db28fef6dfc8428bf596bb90b27957d0b07a5f59 |
| D005 S007 | lead v002 | needs-fix | yes | 1979b61dc646f6de1a80da1f470bd22aa662f1bf1a43b0b0e8b3b07752bb592f |
| D005 S008 | lead v001 | needs-fix | yes | 04abf787d6563725eb7932b9034274c2b8e463c5e48ceae0060ed2810ac65d39 |
| D005 S009 | lead v001 | pass | yes | 94489def093de0529d349bad440f0c8e233e00b4c998f2869ae504b14dfa2372 |
| D005 S010 | alternate v001 | needs-fix | yes | 4a4e8b8442d54b6d5732a3d6b925f17ad936f63b4beec1ab4226d93d7400fc53 |
| D005 S010 | lead v002 | uncertain | yes | 2137336cca2c9559bc473cbbe8b321f0d95fa8493eac3a1f7667d11676a04c07 |

## Reusable no-mistakes image-review gate

Require these checks before a candidate set is finalized:

1. Pin the exact source version, full SHA-256, chapter/sloka, role, and published derivative key; compare that binding with the live page. Review every displayed alternate as well as each lead.
2. Open every generated image individually at full usable resolution. Use crops/close views for ambiguous hands, feet, faces, overlapping silhouettes, and small secondary people. Mark too-small or occluded regions uncertain; do not infer a hidden limb or clear an unseen hand.
3. Count and trace limbs from shoulder/hip to hand/foot for each normal human. Check attachment, joint direction, proportions, hand/finger coherence, face/eye coherence, overlaps, and accidental duplicate named people within one scene.
4. Use a scene-specific anatomy contract for deities and cosmic depictions. Allow only the explicitly planned extra heads/arms; continue checking that those limbs are attached and orderly. Treat symbolic parts and planned sequential appearances separately from a person’s body.
5. Search for copied faces/bodies only when a crowd makes a repeated asset look like a visible generation artifact; do not flag recurring character identity across different scenes.
6. Check readable text, watermark/signature/logo, accidental duplicate person, framing/crops, and composition/style contracts (full-bleed, palette, finish) while visually inspecting. Report factual defects separately from theological/scene interpretation uncertainty; give location, severity, confidence, and a concrete repair direction.
7. Preserve the image and evidence; an audit finding does not authorize regeneration, replacement, approval, or publication.

## Evidence and procedure

- Read `STUDIO.md`, `art/bible/series.json`, the Bhattathiri, Guruvayurappan, Brahma, and Adishesha character bibles, both plans, `art/approved/d004.json`, and the current D004/D005 comparison manifests and review notes. Relevant source references: `art/batches/d004-comparison-v001.json:14-18` and selected stanza rows; `art/batches/d005-comparison-v001.json:15-29` and selected/alternate rows.
- Checked current review-builder source: `review-site/scripts/build.mjs:51-85` reads the pinned comparison manifests, checks each candidate SHA-256, converts only selected candidates and explicit alternates, and labels their versions. `review-site/scripts/package-release.mjs` packages data, asset provenance, and review derivatives.
- GitHub evidence was obtained with `gh-axi release view` and `gh-axi release download` for the release above; `data.json` and `asset-provenance.json` were read from the zip.
- Browser evidence: `chrome-devtools-axi open` and page snapshots/evaluation at the live D004/D005 URLs; live images and visible alternate URLs were enumerated without opening or submitting feedback.
- Source images were copied read-only from `/home/gehariharan/Projects/narayaneeyam/artifacts/d004/` and `.../artifacts/d005/` into the task worktree scratch folder. All 32 candidate PNGs were opened individually with `view_image` at original detail; targeted enlarged crops were then opened for ambiguous regions. Full source hashes were computed from the originals and checked against deployed provenance for the 28 published candidates.
- Four prior D004 candidate versions are not present in the deployed manifest: S002 v001, S003 v001, S004 v001, S007 v001. They are nevertheless inspected and reported as preserved alternate versions with no published key/URL.
- No feedback was submitted and no image generation, source edits, approval, sync, or publication occurred.

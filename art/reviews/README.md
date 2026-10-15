# Visual inspection evidence

A visual review is separate from art approval. Every newly selected or revised
generated image, including every visible alternate, must be opened individually
at native resolution before the comparison site can publish it. Deterministic
validation checks the evidence, completeness and hashes; it cannot see anatomical
correctness or prove that an inspection actually happened.

Read STUDIO.md, the series bible, the stanza plan and every relevant character
bible first. Include incidental characters as well as the plan's character list.
Inspect hands, fingers, feet and limb counts; trace shoulder/hip attachments,
joints and proportions. Check faces and eyes, fused bodies, accidental duplicates
within the scene, floating objects, text, signatures, logos, watermarks, style,
framing and scene fidelity. Open close views for overlaps, crowds and small figures.
Record uncertainty where detail is too small or occluded to judge.

Compare deity anatomy with the particular scene contract: four attached arms may
be correct for Vishnu or Brahma; an ordinary human must retain ordinary anatomy.
Intentional symbolic or sequential appearances need a specific plan basis. The
same recurring character across different stanzas is required continuity, not an
accidental duplicate. Deity status does not excuse disconnected or fused limbs.

## Recording a new inspection

Keep candidates, versions and earlier reports intact. Add a versioned Markdown
inspection report under `art/reviews/` naming the reviewer, exact files and hashes,
viewing method, native dimensions, close views, findings, counterevidence and any
limits. Do not invent a pass or reinterpret an existing uncertainty as cleared.
Append a record to `visual-reviews.json` with this shape (replace illustrative
values with actual inspection evidence; this is not a clearance record):

```json
{
  "chapter": 8,
  "sloka": 1,
  "role": "matte",
  "file": "artifacts/d008/s001/landscape/candidate-v001.png",
  "version": "v001",
  "sha256": "FULL_SOURCE_SHA256",
  "reviewer": "Reviewer identity",
  "inspected_at": "ISO_8601_UTC_TIMESTAMP",
  "method": "individual-native-resolution",
  "outcome": "uncertain",
  "anatomy_basis": "Identify ordinary humans, deities and permitted forms under the scene and character rules.",
  "contracts": [
    { "path": "art/bible/series.json", "sha256": "FULL_FILE_SHA256" },
    { "path": "art/plans/d008.json", "sha256": "FULL_FILE_SHA256" },
    { "path": "art/bible/characters/brahma/character.json", "sha256": "FULL_FILE_SHA256" }
  ],
  "evidence": [
    { "path": "art/reviews/d008-s001-v001-review-v001.md", "sha256": "FULL_REPORT_SHA256" }
  ],
  "checks": {
    "limbs_hands_feet": { "status": "uncertain", "observations": "Record actual count and visibility findings." },
    "attachment_proportions": { "status": "uncertain", "observations": "Record actual attachment and proportion findings." },
    "faces": { "status": "uncertain", "observations": "Record actual face and eye findings." },
    "duplication_fusion": { "status": "uncertain", "observations": "Record actual identity, duplicate and fused-body findings." },
    "text_artifacts": { "status": "uncertain", "observations": "Record actual text and artifact findings." },
    "scene_style_continuity": { "status": "uncertain", "observations": "Record actual scene, palette and framing findings." }
  },
  "findings": [
    { "id": "STABLE_ID", "severity": "low", "confidence": "low", "status": "uncertain", "observed": "Actual localized observation", "repair": "Concrete next inspection or repair" }
  ]
}
```

The role is `matte` for a lead and `alternate` for each visible alternate. Include
all required plan/series/character contracts with their current hashes, plus any
incidental character rules used. Every check needs observations; when no people
are present, explain that fact rather than skipping anatomy. Only a real
inspection with `outcome: pass`, all six checks `pass`, and an empty findings array
can clear a new selection. `needs-fix`, `uncertain` and `needs-human-review` block.
Changing the source path, version, bytes, stanza or role invalidates that binding.
Contract or report edits also invalidate the review. A new inspection report and
record may supersede a failed review of the same bytes only after the reported
issue has actually been resolved through inspection; defects require new artwork,
never a prose waiver. Keep old findings in the earlier versioned report.

Run `npm run art:review:validate` and `npm test` before no-mistakes. The builder
checks source bytes; `npm run art:review:validate -- --bundle` also checks every
bundled generated image, alternate, source-provenance binding, derivative checksum
and inspection label. Packaging, uploading and the deployment dataset test call
that same consumer, so an old bundle or missing alternate fails before upload.
The shared selection loader includes D002's previously hardcoded versions.

## Historical comparison versus final clearance

`historical-selection.json` freezes only the exact 101 generated selections
already present in release `review-bundle-2f7a5eb5efb6a631b31d5a5e144ecc38d1ea16ee`
(dataset `af9bed7652551848`). It includes each path, full hash, version, stanza
and lead/alternate role. This preserves the live comparison collection; it is not
a reviewed-final-set list. Do not extend it to exempt new or revised images.
All historical selections display that status, including known-defect alternates.

`npm run art:review:validate -- --final` is strict: historical entries receive no
exemption. With originals available locally, every selection must have current
passing inspection evidence and matching actual source bytes. The
current set deliberately fails this check. `art:approve` uses this strict rule
for its exact candidate, computes its actual hash, and refuses before creating a
master or changing the approval manifest if clearance is absent, stale or
unresolved. Explicit user approval remains separately required to invoke it.
Nothing in this review process grants art approval.

The three commissioned audits are preserved verbatim under `audits/` and
consolidated in `audit-index.json`, retaining original source paths, checksums,
published keys, severity and uncertainties. They cover **81/81 published versions**
(**75 leads + 6 visible alternates**) in D001–D007, plus **5 unpublished versions**:
**86 inspected in total, 0 missing published versions**. Their per-image outcomes
are 40 pass / 38 needs-fix / 3 uncertain among published images; across all
inspections, 43 pass / 40 needs-fix / 3 uncertain. A needs-fix record can also carry
an inspection limitation. These are historical audit judgments, not newly issued
clearances. D038 and D096's 20 selections were outside this commission.

High-confidence examples: D004 S012 v001 has two visible Brahma arms where four
are required; D005 S007 (both versions), S008 v001 and S010 v001 have unwanted
outer borders; D006 S007 alternate v001 omits the planned Adharma/back mapping.
D002, D006 and D007 have series-style drift. Uncertain cases include possible
repeated Bhattathiri identity in D003 S001, the mace grip in D005 S001 alternate
v001, miniature inhabitants in D005 S010, small human groups in D006 S008 and tiny
Brahma in D007 S004. Inspect the original reports for localized findings and
repair directions; no replacements or approvals were commissioned here.

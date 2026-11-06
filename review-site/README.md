# Narayaneeyam public review site

The user explicitly authorised a public Cloudflare review site at
`https://gehariharan.com/narayaneeyam`, with a dedicated R2 bucket and D1 feedback.
This supersedes the earlier prohibition on remote stores for this review-site
scope only. Local source content, image candidates and approvals remain authoritative.
No image generation runs in the website. No artwork is approved by publishing it.

## Build and publish

Production deployment may run through the manual GitHub Actions workflow
`.github/workflows/deploy-review.yml`. It requires the repository or
`review-production` environment secret `CLOUDFLARE_API_TOKEN`, scoped to account
`d9967c9f63e9aa7685c005a62a00443c` with access to write objects in the
`narayaneeyam` R2 bucket and Editor access to the existing `narayaneeyam-review`
Worker. Its routes are already attached; Actions uploads review WebPs to R2 and
deploys a Worker version without changing those routes. For the D001 regeneration,
the workflow uploads the D001 image selection from the checksum-pinned review-only
release bundle before deploying the Worker. Actions performs read-only live
verification after deployment. Raw intake, masters, candidates, prompts, and
feedback exports must never be included in that bundle.

For local deployment:
```sh
node review-site/scripts/build.mjs
node review-site/scripts/test.mjs
python review-site/scripts/test-migrations.py
node review-site/scripts/upload.mjs
wrangler d1 migrations apply narayaneeyam-feedback --remote --config review-site/wrangler.jsonc
wrangler deploy --dry-run --config review-site/wrangler.jsonc
wrangler deploy --config review-site/wrangler.jsonc
```

The local upload can use an R2-only token. The separate GitHub Actions secret
`CLOUDFLARE_API_TOKEN` belongs in the `review-production` environment and needs
Editor access to the existing Worker. Changing the route configuration later
also requires Zone > Workers Routes > Write for `gehariharan.com`. The personal
blog repository is a separate
Worker and is not part of this deployment path.

For a GitHub Actions deployment, validate and ship the source through no-mistakes,
then build and package the exact commit. The current workflow uploads D001 through D003,
D005 through D014, D042, D043 and D044 media from the release using the existing
`CLOUDFLARE_API_TOKEN` environment secret. Other selected chapter derivatives
need their chapter-scoped R2 upload before deployment. Each selected chapter's
R2 upload runs before the Worker version upload/deploy and writes only that
chapter's content-addressed derivatives, preserving existing bucket objects.
Then release the bundle and dispatch the workflow:

```sh
node review-site/scripts/build.mjs
node review-site/scripts/upload.mjs
node review-site/scripts/package-release.mjs
sha=$(git rev-parse HEAD)
gh release create "review-bundle-$sha" \
  "artifacts/review-releases/$sha/review-site-bundle.zip" \
  "artifacts/review-releases/$sha/review-site-bundle.zip.sha256" \
  --target "$sha" --title "Review bundle $sha"
gh workflow run deploy-review.yml --ref "review-bundle-$sha"
```

The release bundle contains only rendered review HTML, the review data and
provenance manifests, and WebP derivatives. The Worker deployment uses a separate
GitHub environment secret; GitHub Actions uploads the chapters listed above to R2.

Build creates a standalone index and chapter HTML reviews under `artifacts/review-site/`
and WebP derivatives from an explicit list of local images. Originals remain
unchanged. Each chapter compares a source reference with one traditional matte mural
candidate; the build manifest records the exact versions. Every generated lead
and visible alternate is checked against the version-bound
visual review evidence before building, packaging or uploading. See
[the inspection procedure](../art/reviews/README.md). The exact frozen historical
collection remains visible as historical review material, including unresolved
defects and uncertainties; it is not a cleared final set. All new/revised
selections must have passing inspection evidence. Run `npm test`,
`npm run art:review:validate`, and (after building)
`npm run art:review:validate -- --bundle` before publication.

Detailed/glossy
candidates are retained only as historical files and are not published. Commentary
is copied verbatim from content JSON only when its source is an allowlisted Facebook
photo-caption file or a user-supplied Google Drive commentary file. The pages label
the columns Reference and Traditional matte mural, with no filenames or editorial
metadata shown. A small Leave feedback link opens a text box and Submit button below
each image row.

Only the `/narayaneeyam` route family is attached. The existing blog Worker and
its media bucket and database are not modified. R2 remains private; the review
Worker serves only image keys explicitly present in its bundled data manifest.
It does not expose raw intake folders, provenance files or generated masters.

## Feedback

Feedback accepts same-origin JSON requests with strict size, field and revision
validation, prepared SQL statements, a honeypot and a 10/minute per-IP edge rate
limit. IP addresses are used transiently for the rate limiter, not saved in D1.
The rate limiter is regional, not a global hard quota. There is no passphrase,
public feedback listing or browser administration panel.

Each new record stores the Dasakam, sloka, message, dataset revision and exact
generated-image version/key snapshot automatically. Target is `generated`, category
is `other`, and reviewer name is empty; reference images are excluded. Existing
feedback records remain unchanged. Retrieve open feedback with:

```sh
wrangler d1 execute narayaneeyam-feedback --remote --config review-site/wrangler.jsonc --command "SELECT * FROM feedback WHERE status='open' ORDER BY created_at" --json
```

Export durable local backups (choose a new versioned filename each time):

```sh
wrangler d1 export narayaneeyam-feedback --remote --config review-site/wrangler.jsonc --output artifacts/review-site/feedback-backup-v001.sql
```

To withdraw the review site, remove only its two Worker routes or deploy a
maintenance response. Do not delete the R2 bucket or feedback database.

## Dasakam 1

D001 landscape regeneration is staged as a ten-row review set in
`art/batches/d001-comparison-v001.json`. It uses new, versioned candidate
masters and their source references; the existing `approved-legacy` masters and
`art/approved/d001.json` remain unchanged. The candidates remain `needs-review`
and are shown on the public review page without approval. The batch manifest can
be repointed to the preserved legacy masters for a later rollback; content-addressed
R2 objects are not deleted. Portraits remain paused.

## Dasakam 3

D003 contains exactly ten cleaned Facebook photo-caption rows and ten new
traditional matte, full-bleed landscape candidates. Exact selected versions and
checksums are in `art/batches/d003-traditional-v001.json`. All remain
`needs-review`; publishing does not approve them, and no portrait companions were
created.

## Dasakam 4

D004 has 15 rows. Commentary is copied verbatim from
`intake/D004/photo-captions.txt`; `content/daskams/d004.json` stores the same text
with a source pointer for each row. The chosen landscape candidates and source
checksums are pinned in `art/batches/d004-comparison-v001.json`. All remain
`needs-review`, and portraits are paused. For a local deployment, upload only
its new WebP derivatives with `node review-site/scripts/upload.mjs --daskam=4`
before deploying the Worker.

## Dasakam 5

D005 has ten landscape review rows and thirteen candidate images. The comparison
is pinned in `art/batches/d005-comparison-v001.json`; S001, S007, and S010 show
both their v001 and v002 candidates. All generated art remains `needs-review`.
The page explicitly marks the D005 Sanskrit transcription for source review and
notes that romanization and English translation are not yet available. Upload its
WebP derivatives with `node review-site/scripts/upload.mjs --daskam=5` before
deploying the Worker.

## Dasakam 6

D006 has ten landscape review rows with thirteen unapproved candidates. S001
shows v004 as the lead candidate and preserves v001 and v002 for comparison.
S007 shows v002 with v001 as an alternate; v002 adds the missing Adharma/back
mapping. The supplied commentary is shown verbatim; Sanskrit, romanization, and
commentary remain editorial review material, and English translations are not
yet available. Portraits remain paused. Upload its WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=6` before deploying the Worker.

## Dasakam 38

D038 is imported from Jarvis with its original sourced content, plans, and
references. The traditional matte style was independently recomposed as borderless
landscapes for all ten slokas and visually reviewed. Exact selected versions and
checksums are in `art/batches/d038-comparison-v002.json`; findings are in
`art/batches/d038-review-v002.md`. These remain candidates. The comparison has
ten rows, two images per row, and the same mobile stack and feedback form.


`node review-site/scripts/upload.mjs --daskam=38` uploads only D038 derivatives.
Chapter links and Worker routing use three-digit slugs (`d038`, not `d0038`).

D1 migration `0002_feedback_all_dasakams.sql` is applied in production. It
preserves existing rows and replaces the original D001/D002-only database
constraint. The Worker still accepts feedback only for bundled chapter/sloka
pairs. A private pre-migration SQL backup is preserved under `artifacts/review-site/`.

D096 matte review now uses `art/batches/d096-comparison-v003.json`: the
traditional style was independently recomposed as borderless landscapes for all ten rows.
The selected candidates are documented in `art/batches/d096-review-v003.md`.
Upload its derivatives using

`node review-site/scripts/upload.mjs --daskam=96`. Palette/border findings are
recorded in `art/batches/series-color-border-review-v001.md`.

## Dasakam 7

D007 contains ten landscape review candidates matched to its ten supplied collages and verbatim Google Drive commentary entries. Brahma’s approved continuity shows four heads total, with three visible faces in a front view and the fourth facing behind. Each scene remains unapproved; portraits are paused. Upload its WebP derivatives with `node review-site/scripts/upload.mjs --daskam=7` before deploying the Worker.

## Dasakam 8

D008 contains thirteen landscape comparison rows, each matched to its numbered
intake reference and supplied caption. The selected leads are independently
composed candidates in `art/batches/d008-comparison-v001.json`; all thirteen
have checksum-bound individual visual inspection records. Superseded trials
remain in local artifacts and the internal review inventory, but are not part
of the published comparison. The candidates remain unapproved, translations
are absent, and portrait compositions are paused. Upload only D008's WebP
derivatives with `node review-site/scripts/upload.mjs --daskam=8` before the
serialized public deployment.

## Dasakam 9

D009 contains ten landscape comparison rows, each matched to its numbered
intake reference and supplied commentary section. The selected leads are
independently composed candidates in `art/batches/d009-comparison-v001.json`;
all ten have checksum-bound individual visual inspection records. Superseded
and defective trials remain in local artifacts and the review inventory, but
are not part of the published comparison. The candidates remain unapproved,
translations are absent, and portrait compositions are paused. Upload only
D009's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=9`
before the serialized public deployment.

## Dasakam 10

D010 contains ten landscape comparison rows, each matched to its numbered
intake reference and supplied commentary section. The selected leads are
independently composed candidates in `art/batches/d010-comparison-v001.json`;
all ten have checksum-bound individual visual inspection records. The
candidates remain unapproved, translations are absent, and portrait
compositions are paused. Upload only D010's WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=10` before the serialized public
deployment.

## Dasakam 46

D046 contains ten native landscape candidates paired with the ten supplied
scene references in `art/batches/d046-comparison-v001.json`. The selected
versions are S001–S004 v001, S005 v002, S006–S007 v002 and S008–S010 v001.
S005 v001 remains preserved as needs-fix: the managed report found a detached
far-shoulder hand. Its prior producer-pass record and original report remain in
history; `art/reviews/d046-s005-v001-correction-addendum-v001.md` corrects the
unsupported claim that a human chose not to act. The root-accepted native S005
v002 (1672 × 941) removes that hand, and its exact source/prompt/reference roles
are recorded in `art/reviews/d046-s005-v002-native-provenance-v001.md`. The
corrected release requires a fresh independent managed full-frame/detail review
of all ten selected leads; S005 v002 has no independent pass yet. Earlier
S006/S007 four-armed external-child drafts remain preserved but are not selected.
English translations and portrait compositions are absent. All artwork remains
unapproved. Upload only D046's WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=46` before any serialized Worker
deployment.

## Dasakam 11

D011 contains ten landscape comparison rows matched to the ten numbered intake
references. Each selected lead has an individual checksum-bound visual review;
failed earlier versions remain preserved locally and are not comparison
alternates. The Sanskrit and supplied commentary are source-mapped, English
translations remain absent, the candidates remain unapproved, and portraits
are paused. Upload only D011's WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=11` before any serialized Worker
deployment.

## Dasakam 12

D012 contains ten landscape comparison rows matched to the ten numbered intake
references. Each selected lead has an exact checksum-bound managed visual
review. Failed earlier versions, including the needs-fix S002 v003, S007 v004
and v005, S008 v004 and S009 v003, remain preserved and are not comparison
alternates.
The Sanskrit source and supplied commentary are source-mapped; unattributed
draft English translations are present for editorial review only and are not
shown on the review site, the candidates remain unapproved, and portraits are
paused.
Upload only D012's WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=12` before the serialized Worker
deployment.

## Dasakam 13

D013 contains ten landscape comparison rows matched to the ten numbered intake
references. Each selected lead in `art/batches/d013-comparison-v001.json` has
an individual checksum-bound visual review, and
`art/reviews/d013-landscape-final-coverage-v003.md` records the all-ten
full-frame pass and its limits. Superseded versions, including the needs-fix
S001 v003, S003 v005, v006 and v007, S004 v002 and S008 v002, remain preserved
locally and are not comparison alternates. The Sanskrit and supplied
commentary are source-mapped, English translations remain absent, the
candidates remain unapproved, and portraits are paused. Upload only D013's
WebP derivatives with `node review-site/scripts/upload.mjs --daskam=13` before
any serialized Worker deployment.

## Dasakam 14

D014 contains ten landscape comparison rows matched to the ten captioned
intake references and supplied commentary sections. Selected leads are pinned
in `art/batches/d014-comparison-v001.json`; they remain unapproved, English
translations are absent, and portrait compositions are paused. Upload only
D014's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=14`
before any serialized Worker deployment.

## Dasakam 42

D042 contains eleven landscape comparison rows matched to the eleven numbered
intake references and supplied captions. Its selected candidates are pinned in
`art/batches/d042-comparison-v001.json`; they remain unapproved, English
translations are absent, and portrait compositions are paused. The infant
Krishna v004 image is a provisional shared identity anchor that passed exact
version review; the common D043 S009 image supplies Nandagopan/Yashoda identity
cues only. Stanza image reviews are version-bound and independent. Upload only
D042's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=42`
before the serialized Worker deployment.

## Dasakam 44

D044 contains ten landscape comparison rows matched to its ten numbered source
references. The selected versions are checksum-pinned in
`art/batches/d044-comparison-v001.json`; the managed review passed all ten
selected leads (S001–S009 v001 and S010 v002) as checksum-bound visual
inspections, while all artwork remains unapproved. S010 v002 replaces the preserved split
composition in v001. English translations and portrait compositions are absent.
Upload only D044's WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=44` before any serialized Worker
deployment.

Reconciled with main `84a214f310008155ad22dd8a80e1ed8afd786ab4` (D014, D012 and the
D001/D002/D003 audit cleanup) and D013, the union contains 16 chapters, 168 stanza
rows, 342 review media inputs, and 174 selected generated images (69 historical and
not cleared, 105 individually inspected). With D042 and D044 it contains 18 chapters,
189 rows, 384 review media inputs, and 195 generated selections (69 historical and
not cleared, 126 individually inspected).
With D042, D043, D044 and D046 selected, the union contains 20 chapters, 209
stanza rows, 424 review media inputs and 215 generated selections (69 historical
and not cleared, 146 individually inspected). The managed D014 review passed
all ten leads, including the S005 v003, S008 v008 and S010 v003 repairs; earlier
failed versions remain recorded as history. These totals must be recalculated
if the base advances.

## Dasakam 43

D043 contains ten source-mapped landscape candidates in `art/batches/d043-comparison-v001.json`. Each row binds its numbered intake reference and selected native candidate version by SHA-256. The independent managed review in `art/reviews/visual-reviews.json` and `art/reviews/d043-*-final-managed-review-v001.md` passes all ten selected leads, and `art/plans/d043.json` pins the same versions. S005 v003 supersedes S005 v002 and S005 v001, which was uncertain because Trinavarta neither read as falling nor matched S004. S006 v003 (native 1671 × 941) supersedes S006 v001, which needed a fix because the fallen Trinavarta's legs were too short, and S006 v002, whose pass was invalidated because the demon was brown and tidy-haired, unlike S004/S005. Those records stay as history. After the plan pins changed, every selected image was re-opened and its review re-bound (`art/reviews/d043-plan-pin-recheck-managed-review-v001.md`). The same was done after the stanza 8 and 10 source descriptions in `content/sources/d043/reference-map.json` were corrected (`art/reviews/d043-reference-map-context-recheck-managed-review-v001.md`). Upload only D043's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=43` before any serialized Worker deployment. With D042, D043 and D044 selected, the union holds 19 chapters, 199 stanza rows, 404 review media inputs and 205 selected generated images (69 historical, 136 individually inspected). Binding the yashoda, gopikas, nandagopan and gopas contracts in the plan led to a re-inspection (`art/reviews/d043-supporting-cast-contract-recheck-managed-review-v001.md`). It found S003 v001 (Yashoda's heavy jewellery) and S005 v002 (Yashoda's maroon sari) failed that contract. Native repairs S003 v002 and S005 v003 (1671 × 941) now pass managed review and are selected, and the other eight frames were re-opened against the final plan (`art/reviews/d043-native-repair-context-recheck-managed-review-v001.md`). Candidates remain unapproved, portraits are paused, and English translations are absent.

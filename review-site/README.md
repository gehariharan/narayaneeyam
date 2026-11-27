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
Worker, plus Edit access to the `narayaneeyam-feedback` D1 database. Its routes are
already attached; Actions uploads review WebPs to R2, applies pending D1 migrations
(`wrangler d1 migrations apply narayaneeyam-feedback --remote`; the deploy stops if
this fails) and deploys a Worker version without changing those routes. For the D001 regeneration,
the workflow uploads the D001 image selection from the checksum-pinned review-only
release bundle before deploying the Worker. Actions then verifies anonymously,
without the passphrase, that the live index, every chapter page, a media path and
feedback and reviewer decisions all return the locked 401 response (`review-site/scripts/verify-live-pages.mjs`).
Page content is checked before deployment by `review-site/scripts/test.mjs`. Raw intake, masters, candidates, prompts, and
feedback exports must never be included in that bundle.

For local deployment:
```sh
node review-site/scripts/build.mjs
node review-site/scripts/test.mjs
python review-site/scripts/test-migrations.py
node review-site/scripts/upload.mjs
wrangler d1 migrations apply narayaneeyam-feedback --remote --config review-site/wrangler.jsonc  # before the Worker deploy
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
then build and package the exact commit. The workflow's per-chapter `Upload DNNN review ... to R2`
steps define which chapters' media are uploaded from the release, using the existing
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
photo-caption file or a user-supplied Google Drive commentary file. Each stanza is
one card, top to bottom: the selected painting (tap to open full size), any
alternates, the smaller reference photo, then the text: Commentary, then the
stanza (Sanskrit, then transliteration) from `content/daskams/dNNN.json`, with
a small note where either is missing. A reference photo the batch marks as
excluded from scene derivation stays in the bundle but is not shown. The review
notice, image versions, inspection labels, media keys and commentary sources sit
in collapsed "Studio details" sections per chapter and per card. Below the text,
each card shows its status chip (Not reviewed, Approved, Redraw requested, Small edit
requested, Text issue, or Note (legacy) for feedback from before decisions) and four
decision buttons: Approve, Redraw, Small edit and Text issue. Approve saves at once;
the other three open a note box. The page asks for the reviewer's name once per
device and remembers it in the browser. Approve is the reviewer's decision only, not
final art approval; the card says so in a tooltip and in Studio details.

Only the `/narayaneeyam` route family is attached. The existing blog Worker and
its media bucket and database are not modified. R2 remains private; the review
Worker serves only image keys explicitly present in its bundled data manifest.
It does not expose raw intake folders, provenance files or generated masters.

## Passphrase lock

Every request under `/narayaneeyam` (index, chapter pages, `/media/*` images,
`HEAD` requests, `POST /api/feedback` and `GET /api/decisions`) requires one shared
passphrase. Locked visitors get a small passphrase page (HTTP 401, `Cache-Control: no-store`,
`noindex`); images, feedback and decisions return an empty 401. The passphrase form posts to
`/narayaneeyam/unlock`, which accepts same-origin requests only, rate-limits
attempts per IP through the `FEEDBACK_LIMIT` binding (key `unlock:<ip>`) and
compares SHA-256 digests in constant time. A correct passphrase sets an
`HttpOnly; Secure; SameSite=Lax` cookie scoped to `/narayaneeyam` for 90 days, then
returns the visitor to the page they asked for (relative `/narayaneeyam` paths only).
The cookie holds an expiry and an HMAC of it keyed by the passphrase, so it cannot be
forged and contains no passphrase. Pages and images are served `private` and every
response carries `X-Robots-Tag: noindex, nofollow`.

The passphrase exists only as the Worker secret `NARAYANEEYAM_PASSPHRASE`. It is
never stored in this repository, the workflow or chat. Until it is set, or if it is
empty, the site stays closed and offers no passphrase form. The owner sets or changes
it once, from this repository's `review-site` directory, on a machine logged in to
Cloudflare (`npx wrangler login`):

```sh
npx wrangler secret put NARAYANEEYAM_PASSPHRASE
```

Wrangler prompts for the value, so it is not saved in shell history. Setting a new
value signs every visitor out immediately; they must enter the new passphrase.
Deployments do not change the secret.

## Feedback

Feedback accepts same-origin JSON requests with strict size, field and revision
validation, prepared SQL statements, a honeypot and a 60/minute per-IP edge rate
limit through the `DECISION_LIMIT` binding, so one-click Approve works through a
whole Dasakam. Unlock attempts keep their own 10/minute limit. IP addresses are used transiently for the rate limiter, not saved in D1.
The rate limiter is regional, not a global hard quota. There is no
browser administration panel; the only listing is the latest decision per stanza
described below. Feedback, like every other
route, requires the passphrase unlock described above.

Each Dasakam has its own revision, a hash of that chapter's bundled data. A
submission is checked against its own Dasakam's revision, so republishing one
chapter does not reject feedback forms already open on another.

Each submission is a reviewer decision: `approve`, `redraw`, `small-edit` or
`text-issue`, with the reviewer's name (1–60 characters, required). Approve takes no
note; the other three need a 3–2,000 character note. A page from before decisions
existed sends no decision and is asked to reload. Each record stores the Dasakam,
sloka, decision, reviewer name, note, time, Dasakam revision and the exact
generated-image version/key snapshot shown on the card; reference images are
excluded. Target is `text` for a text issue and `generated` otherwise; category is
`other`. Status is `open` for Redraw, Small edit and Text issue (work for the studio)
and `closed` for Approve. A reviewer's Approve never writes `art/approved/` and is
not art approval; only explicit user approval changes approvals.

Migration `0003_feedback_decisions.sql` adds the `decision` column and keeps every
existing row as decision `note`, shown on its card as "Note (legacy)". The deploy
workflow applies pending D1 migrations before uploading the Worker version; for a
local deployment, apply them first as shown above. Until 0003 is applied, new
decisions fail with the temporary-unavailable response.

`GET /api/decisions?daskam=N` (unlocked visitors only) returns the latest decision
per stanza for the paintings currently shown, with reviewer name, note and time.
Decisions on an earlier painting version stay stored but are not returned once a new
version is published. The read is not rate-limited, and it refuses cross-site
requests.

The front page `/narayaneeyam/` is a progress board of all 100 Dasakams, one
numbered tile each, rendered by the Worker behind the passphrase lock from one D1
query. A tile links to its chapter when the chapter is on the site. Its colour and
label show: Art not made yet (no chapter), Ready for review (no decisions), In review
(decided/total stanzas), Waiting for fixes (any Redraw, Small edit or Text issue still
open), or Reviewed - awaiting captain confirmation (every stanza approved). Like
`/api/decisions`, each stanza counts only its latest decision on the painting shown
now; decisions on an earlier version and legacy notes leave it undecided. A legend
and a line such as "51 of 100 dasakams have paintings · 120 of 526 stanzas reviewed"
sit above the tiles. If the database cannot be read, the tiles still link every
chapter and the page says progress is unavailable. The static preview `index.html`
shows painted chapters without progress. Reviewed on the board is the reviewer's
decision only; final art approval is confirmed separately.

Retrieve open feedback with:

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

## Dasakam 35

D035 contains ten stanza-specific landscape candidates selected from mapped intake photos and exact version hashes: S001 v002, S002 v002, S003 v001, S004 v004, S005 v004, S006 v003, S007 v004, S008 v001, S009 v005, and S010 v003.
Superseded attempts remain preserved with their findings and are excluded from the comparison.
Fresh independent exact-checksum review of all ten selected candidates passes against the final plan and character contracts, with one record per exact image identity in `art/reviews/visual-reviews.json`. Reports l, m and n remain separate evidence files; earlier reports are history. The S005 v003 review found clipped Garuda wing tips; one authorized repair produced v004, now selected with both wing tips inside the frame, two connected arms on each brother, and visible binding coils. Tie-break review confirms S008 shows Valmiki rather than an extra Rama and S009 includes Valmiki at the far left. The batch is unapproved; captain art approval is pending. S009’s trench-like ground opening remains disclosed.
Supplied captions are shown as commentary; no sourced English translation was found.
Portrait production remains paused.
For an authorized deployment, upload only D035 review derivatives with `node review-site/scripts/upload.mjs --daskam=35`.
With D035 added, the union holds 30 chapters, 310 stanza rows, 633 review media inputs and 316 selected generated images.

## Dasakam 38

D038 is imported from Jarvis with its original sourced content, plans, and
references. The traditional matte style was independently recomposed as borderless
landscapes for all ten slokas and visually reviewed. Exact selected versions and
checksums are in `art/batches/d038-comparison-v002.json`; findings are in
`art/batches/d038-review-v002.md`. These remain candidates. The comparison has
ten rows, two images per row, and the same mobile stack and feedback form.


`node review-site/scripts/upload.mjs --daskam=38` uploads only D038 derivatives.
Chapter links and Worker routing use three-digit slugs (`d038`, not `d0038`).

## Dasakam 37

D037 has ten landscape comparison rows mapped to the numbered intake photographs
and their supplied commentary. Exact candidate versions and SHA-256 values are
pinned in `art/batches/d037-comparison-v006.json`; the source mapping is recorded
in `content/sources/d037/`. S005 v003 corrects Hari's skin to deep blue. S010 v006
is the better candidate after the authorized final repair, with its softly
feathered, slightly luminous blue path disclosed as a remaining deviation.
Fresh independent exact-checksum review is recorded for all ten selected images
in `art/reviews/visual-reviews.json`, bound to reports k and l and the frozen
plan and batch checksums. All ten selected candidates pass that review; this is
review clearance only, not art approval.
The selected candidates remain unapproved, portraits are paused, and no sourced
English translation is available.
Upload only D037's review WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=37` before deploying the review
Worker.

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

## Dasakam 39

D039 contains ten source-mapped landscape comparison rows. Intake images 008 and
009 are both captioned for stanza 8; 008 is the displayed lead source and 009 is
retained as a same-stanza source alternate, not an artwork alternate. Exact
candidate versions and source hashes are pinned in
`art/batches/d039-comparison-v001.json`. S007v003 removes the detached gray
hand at the far-left edge; its exact-version producer self-review is recorded,
while independent managed review remains pending. S007v001 duplication and
S007v002 edge-hand findings remain in version history. S008v003 has a producer
exact-version pass after repairing the previously uncertain Yashoda far-arm
attachment; managed review remains pending for the selected set. All art
remains unapproved and portraits are paused. The deployment workflow uploads
D039 derivatives to R2 before Worker traffic.

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

## Dasakam 27

D027 contains eleven caption-mapped landscape candidates in `art/batches/d027-comparison-v001.json`, linked to the eleven canonical stanzas and the selected lead reference for each. The eighteen supplied photos include alternates and text/UI extras, preserved in intake with their mapping and checksums; photo number is not stanza number. The comparison remains unapproved review material, and publication does not change the approval manifest. Upload only D027's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=27` before any serialized Worker deployment. With D027 added, the union holds 29 chapters, 300 stanza rows, 613 review media inputs and 306 selected generated images.

## Dasakam 29

D029 contains ten source-mapped landscape candidates in
`art/batches/d029-comparison-v003.json`: S001 v003, S002, S006 and S008 v002,
S003 and S007 v004, and native repairs v003 for S004, S005, S009 and S010. The
exact candidate versions and checksums are pinned there; S003 and S004 are
native 1671 × 941 frames. Every candidate remains unapproved. Independent,
checksum-bound full-frame and detail reviews in
`art/reviews/d029-s*-managed-review-v001.md` and `visual-reviews.json` pass all
ten selected frames; failed earlier versions keep their reports and findings.
Supplied commentary is preserved verbatim, a sourced English translation is
unavailable, and portraits are paused. Upload only D029's WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=29` before any serialized Worker
deployment. With D029 added alongside D031 and D034, the union holds 23
chapters, 239 stanza rows, 485 review media inputs and 245 selected generated
images (69 historical, 176 individually inspected).

## Dasakam 30

D030 contains ten checksum-pinned landscape candidates paired with their mapped reference photos in `art/batches/d030-comparison-v013.json`. Photos 005 and 006 both map to stanza 5; photo 005 depicts the birth rather than stanza 5, photo 007 depicts Bali's later foot-washing welcome rather than stanza 6, and photo 009 depicts the later cosmic stride rather than stanza 8, so canonical Sanskrit controls each scene. Stanza 10 has no supplied photo, and photo 010 stays mapped to stanza 9. S010 was generated from canonical stanza 10 alone under the pinned plan, before caption #10 was located; caption #10, which follows #9 in the raw 010.jpg section, is shown as stanza 10 commentary only and is consistent with the image. S004 v010 retains one short infant neck strand; S006 v015 reduces Brahma's necklace to one fine strand beneath three plain matching crowns. S008 v007 corrects Shukra and the seated elders to sampled deep muted brown skin below R−B 100 while retaining two-armed blue Vamana, the sacrificial hall, horse and altar. S009 v010 shows Bali washing Vamana's feet, receiving that water in his cupped hand, and bowing beneath the stream. S010 v008 shows Vamana's two visible arms and the water path to Bali and Shiva.

Independent review k preserved nine passes and the S008 v006 needs-fix for orange skin. Independent review l then passed all ten selected exact checksums against final plan SHA-256 `e1ac0ddacae7cf89fc615c0aa01e8aaa31043f1dd316ef1dfe4fa2ef04c08fa3`; both rounds and their reports remain in `art/reviews/visual-reviews.json` and `art/reviews/`. The independent reviewer measured S009's raised-arm patch at R−B 130 despite a visual-brown pass; this numeric deviation is disclosed in the batch. S001 and S004 retain producer uncertainties. No candidate is approved. Portraits are paused.

Upload only D030 WebP review derivatives with `node review-site/scripts/upload.mjs --daskam=30` before any serialized Worker deployment.
## Dasakam 33

D033 contains ten source-mapped landscape comparison candidates in
`art/batches/d033-comparison-v001.json`. Captions and numbered source photos are
mapped through `content/sources/d033/reference-map.json`; uncaptioned documentary
extras remain in intake and are excluded from stanza attribution. The Sanskrit
and IAST are sourced, but the cited source does not provide English
translations. The independent managed review in `art/reviews/visual-reviews.json`
and `art/reviews/d033-*-managed-review-v001.md` passes all ten selected leads.
Native repairs S002 v003, S006 v005, S008 v003, S009 v003 and S010 v002 replace
versions recorded as needs-fix: S002 and S008 for Vishnu or king arms that
shared an elbow or armlet or added a third hand, S006, S009 and S010 for a
beardless or peacock-crowned king, and S006 also for an undispersed Kṛtyā. The
needs-fix reports stay as history, and superseded and rejected attempts stay
preserved locally and are not published. Candidates remain unapproved and
portraits are paused. Upload only D033's review derivatives with
`node review-site/scripts/upload.mjs --daskam=33` before the serialized Worker
deployment. With D033 added alongside D029, the union holds 24 chapters, 249
stanza rows, 505 review media inputs and 255 selected generated images (69
historical, 186 individually inspected).

## Dasakam 34

D034 contains ten landscape comparison rows mapped from the accepted readiness
record to the stanza references and supplied captions. Canonical Sanskrit and
IAST are source-mapped; no English translation was supplied. Exact selected
versions and source checksums are pinned in
`art/batches/d034-comparison-v001.json`. Candidates remain unapproved and
portrait compositions are paused. All ten selected versions carry checksum-bound
managed visual reviews; the S001, S003, S007, S009 and S010 replacements
supersede earlier versions whose reviews found defects, which remain recorded as
history. Upload only D034's WebP
derivatives with `node review-site/scripts/upload.mjs --daskam=34` before any
serialized Worker deployment.

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

## Dasakam 48

D048 contains ten source-mapped landscape candidates in `art/batches/d048-comparison-v005.json`. Photos 001–010 map to stanzas 1–10; 011–012 are preserved Tamil text extras. The selected versions are S001 v002, S002–S003 v001, S004 v002, S005 v001, S006 v003, S007 v002, S008 v004, S009 v001 and S010 v002. After one native S008 repair, its far foot remains in frame and visibly resolves as four separate toe tips, one short of five; this disclosed deviation is pinned in the final plan. Fresh independent exact-checksum reviews by reports J, K and L pass all ten selected images against the frozen plan and character contracts. Report K’s S008 one-trunk finding remains as dissent evidence; report L’s final tiebreak confirms two distinct fallen trees, and its passing verdict is bound to the S008 record. The far-foot four-toe deviation remains disclosed. The comparison is unapproved, portrait work is paused, and the complete asset-bearing review build and exact-byte bundle validation are performed at publication.

With D048 added to current main, the selection union contains 36 chapters, 371 stanza rows, 764 review media inputs and 377 generated selections (69 historical and 308 individually inspected).

## Dasakam 49

D049 contains ten stanza-mapped, checksum-pinned native landscape comparisons in `art/batches/d049-comparison-v014.json`, paired with the ten numbered source photos and pinned to final plan SHA-256 `6e6d7afd2f736b7ce4fa00aebc47ed0edd20f65386d9d799f6b38d68f1ed66b5`. Selected versions are S001 v006, S002 v005, S003 v020, S004 v006, S005 v009, S006 v012, S007 v016, S008 v010, S009 v009, S010 v018. Byte, prompt, argument and metadata provenance is in `art/batches/d049-candidate-versions-v013.json`, with every native attempt in `art/batches/d049-generation-attempts-v013.json`. All ten selected versions passed independent exact-checksum visual review: stanzas 1–5 are in `art/reviews/d049-independent-review-la-v013.md` and stanzas 6–10 in `art/reviews/d049-independent-review-lb-v013.md`; each image has an individual producer review and independent record in `art/reviews/visual-reviews.json`. S001 v006 has five clear toe forms plus a tiny toe-like nub the independent reviewer judged not noticeable at full native size. S003 v020’s adult skin readings (Yashoda R-B 117, Nandagopan R-B 127) remain disclosed; both read natural warm brown. S005 v009 has five digits on each open hand, five toe forms on both feet and a bare forehead; Krishna cheek/chest B-R medians are 68/61. S008 v010 has no hand-to-rock contact; both knee hands show five digits, both visible feet show five toe forms, and cheek/chest B-R medians are 52/50. S010 v018’s Balarama R-B 131 and gopa samples R-B 121–131 remain disclosed; they read warm brown, not orange. `art/batches/d049-comparison-v014.json` relabels only the reference cards of the review-pinned v013 batch (same ten candidate files and checksums): photos 001, 003, 004 and 006 are shown as mismatched context photos excluded from scene derivation, 002 and 005 as broad environment context, and 007–010 as thematic references. The per-photo mapping is owned by `content/sources/d049/reference-map.json`. No photo captions or vetted English verse translation are supplied; numbered source commentary remains attributed commentary. Candidates remain unapproved and portraits are paused. Upload only D049 review derivatives with `node review-site/scripts/upload.mjs --daskam=49` before the serialized Worker deployment.

With D049 added to current main alongside D030, D045, and D097, the selection union contains 51 chapters, 526 stanza rows, 1,071 review media inputs, and 532 generated selections (69 historical and 463 individually inspected).

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
The managed D014 review passed all ten leads, including the S005 v003, S008 v008
and S010 v003 repairs; earlier failed versions remain recorded as history. These
totals must be recalculated if the base advances.

## Dasakam 45

D045 contains twelve landscape comparison rows in
`art/batches/d045-comparison-v010.json`, one for each canonical stanza and
numbered reference. The selected candidates are S001 v007, S002 v004, S003
v012, S004 v018, S005 v009, S006 v004, S007 v004, S008 v008, S009 v005, S010
v006, S011 v014 and S012 v005. Producer and independent inspections are bound
to final plan SHA-256 `5888750d4fe733ce7815ba5a896629a4f6dec232089ffa895013b7398692ebb5`.
All twelve exact candidate hashes passed independent review. S008's initial
reviewer concern about a separate singing cue was resolved by a targeted
independent pass: the planned dance posture while drinking satisfies the
coherent-gathering wording. Both reports remain recorded.
The photo 003 stanza-3/stanza-4 visual conflict, near-duplicate nursing
references and broad mood-only references remain disclosed. S004 v018's mud
repair and measured skin/occlusion notes remain with the chapter. It is
unapproved, and portraits remain paused.

## Dasakam 36

D036 adds eleven native landscape candidates in `art/batches/d036-comparison-v001.json`. Each stanza may show more than one mapped source photograph; the selection pins all twenty accepted source photos across the eleven rows. Candidate versions and checksums are bound in the batch and scene plan. Producer inspections and final independent exact-checksum records are preserved under `art/reviews/`; all eleven selected candidates pass independent review and remain unapproved. S009 v002’s earlier needs-fix was superseded by a tiebreak pass; both reports remain evidence. S010 v002 has a disclosed repeated-face deviation in the background ancestor row, pending captain art approval. The supplied captions are shown as commentary; an English verse translation was not sourced. Portrait production remains paused. Upload only D036's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=36` before any serialized Worker deployment. With D036 added, the union holds 31 chapters, 321 stanza rows, 664 review media inputs and 327 selected generated images.

The comparison builder supports one or more mapped source images per stanza. Every source image is included in bundle hash validation and rendered before the selected candidate. Feedback snapshots include generated candidates only.

## Dasakam 43

D043 contains ten source-mapped landscape candidates in `art/batches/d043-comparison-v001.json`. Each row binds its numbered intake reference and selected native candidate version by SHA-256. The independent managed review in `art/reviews/visual-reviews.json` and `art/reviews/d043-*-final-managed-review-v001.md` passes all ten selected leads, and `art/plans/d043.json` pins the same versions. S005 v003 supersedes S005 v002 and S005 v001, which was uncertain because Trinavarta neither read as falling nor matched S004. S006 v003 (native 1671 × 941) supersedes S006 v001, which needed a fix because the fallen Trinavarta's legs were too short, and S006 v002, whose pass was invalidated because the demon was brown and tidy-haired, unlike S004/S005. Those records stay as history. After the plan pins changed, every selected image was re-opened and its review re-bound (`art/reviews/d043-plan-pin-recheck-managed-review-v001.md`). The same was done after the stanza 8 and 10 source descriptions in `content/sources/d043/reference-map.json` were corrected (`art/reviews/d043-reference-map-context-recheck-managed-review-v001.md`). Upload only D043's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=43` before any serialized Worker deployment. With D042, D043 and D044 selected, the union holds 19 chapters, 199 stanza rows, 404 review media inputs and 205 selected generated images (69 historical, 136 individually inspected). Binding the yashoda, gopikas, nandagopan and gopas contracts in the plan led to a re-inspection (`art/reviews/d043-supporting-cast-contract-recheck-managed-review-v001.md`). It found S003 v001 (Yashoda's heavy jewellery) and S005 v002 (Yashoda's maroon sari) failed that contract. Native repairs S003 v002 and S005 v003 (1671 × 941) now pass managed review and are selected, and the other eight frames were re-opened against the final plan (`art/reviews/d043-native-repair-context-recheck-managed-review-v001.md`). Candidates remain unapproved, portraits are paused, and English translations are absent.

## Dasakam 67

D067 contains ten native landscape comparison candidates in
`art/batches/d067-comparison-v001.json`, matched to the ten numbered source
photos and verbatim captions. Photos 011–012 remain unmapped text extras.
Canonical Sanskrit and IAST are sourced from Stotra Nidhi; no English stanza
translation was supplied. The selected versions are S001 v004, S002 v003,
S003 v002, S004 v002, S005 v002, S006 v003, S007 v001, S008 v003, S009 v003
and S010 v002. All ten passed final independent exact-checksum review
(`art/reviews/d067-independent-review-r.md` and `-s.md`) bound to the final
plan and character contracts, with one record per image in
`art/reviews/visual-reviews.json`. Krishna keeps disclosed deviations from the
current series reference: a forehead mark and raised crown in S003 and S010, and
a faint forehead mark in S009. Earlier independent reports (scouts a–q) and
producer reports stay as evidence; dissenting findings on the selected images
are cited in each record's notes. Captain art approval remains pending. Earlier image versions and their
localized framing findings remain in candidate history. Candidates are
unapproved, portraits are paused, and translation/editorial review is pending.
Upload only D067's WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=67` before a serialized Worker
deployment.

## Dasakam 40

D040 contains ten source-mapped landscape candidates in `art/batches/d040-comparison-v001.json`. Each row binds its numbered intake reference and selected native candidate version by SHA-256, and `art/plans/d040.json` pins the same versions with their native 1672 × 941 dimensions. The visible cast binds to the vasudeva, nandagopan, infant-krishna, gopikas and gopas contracts and to a new provisional, chapter-scoped `putana` contract. That contract keeps one recognizable Putana across her flower-adorned disguise (S004–S007) and her fallen giant true form (S008–S009). The independent managed review in `art/reviews/visual-reviews.json` and `art/reviews/d040-*-managed-review-v001.md` passes all ten selected leads. Native repairs S008 v003 and S009 v002 supersede S008 v002 and S009 v001, both recorded as needs-fix because the giant's far arm rooted mid-torso instead of at the shoulder. Their earlier pass reports stay as history. After each repair, every other selected frame was re-opened against the final plan. Superseded trials S002 v001, S008 v001, S008 v002 and S009 v001 stay preserved locally and are not published. Upload only D040's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=40` before any serialized Worker deployment. With D040 added, the union holds 20 chapters, 209 stanza rows, 424 review media inputs and 215 selected generated images (69 historical, 146 individually inspected). Candidates remain unapproved, portraits are paused, and English translations are absent.

## Dasakam 31

D031 contains ten native landscape candidates paired with mapped intake photographs in `art/batches/d031-comparison-v001.json`. S009 is mapped to both source images, and the comparison keeps both references visible. The independent managed review in `art/reviews/visual-reviews.json` and `art/reviews/d031-*-managed-review-v001.md` passed S001–S003 v001 and recorded S004 v001, S005 v001, S006 v004, S007 v002, S008 v001, S009 v002 and S010 v001 as needs-fix (Bali identity break, broken pour path, inconsistent Trivikrama skin and cloned Devas, a forbidden peacock feather, cloned Deva soldiers, a youthful Prahlada resembling Vamana, and a duplicated inset with a modern-map globe). Native repairs S004 v002, S005 v002, S006 v005, S007 v004, S008 v002, S009 v003 and S010 v002 supersede them, and each passed a fresh full-frame and native-detail inspection. The earlier needs-fix reports stay as history, the superseded attempts stay preserved locally and are not published, and the rejected S007 v003 repair attempt was never selected. Images remain unapproved, portraits are paused, and no sourced English translation was available. Upload only D031's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=31` before any serialized Worker deployment. With D031 and D034 added, the union holds 22 chapters, 229 stanza rows, 465 review media inputs and 235 selected generated images (69 historical, 166 individually inspected).

## Dasakam 28

D028 contains ten reference-mapped landscape candidates in
`art/batches/d028-comparison-v001.json`. Stanza 2 shows all five mapped source
photos (002–006); photos 015–017 are preserved extras, not stanza references.
The selected S001 v003 corrects the prior v002 frame, where Shiva’s bare foot
met the bottom edge; both feet are now fully inside the native 1672 × 941 frame.
The selected S005 v003 is the one authorized repair for the tray-bearing deva’s
missing second arm; both hands now support the ornament tray. Selected S003 v003
and S004 v002 follow the documented Lakshmi and Indra scene direction. S004’s
tall multi-banded crown and Lakshmi’s thick bead-collar necklace remain disclosed
ornament observations. Dhanvantari S010 v002 is selected without the peacock
feather present in v001. Independent exact-checksum reports f (S001–S005) and h
(S006–S010) pass all ten selected images; the reports and one-per-image records
are in `art/reviews/`. Images remain unapproved, and the S004 observation does
not imply art approval. Sanskrit and IAST excerpts and caption provenance remain
under `content/sources/d028/`; caption commentary is separate from the absent
sourced English translations. Portraits are paused. Upload only D028's review
WebPs with `node review-site/scripts/upload.mjs --daskam=28` before serialized
Worker deployment.

## Dasakam 32

D032 contains ten native landscape candidates matched to the accepted stanza map
and the numbered captions preserved in `intake/D032/photo-captions.txt`. Stanzas
3 and 10 retain both mapped source photographs; photos 013–014 are preserved as
documentary extras and are not attributed to a stanza. Selected versions are
pinned in `art/batches/d032-comparison-v001.json` and `art/plans/d032.json`.
Fresh producer full-frame and detail inspections of the selected versions are
in `art/reviews/d032-s*-producer-review-v002.md` for S001 v005, S002 v001,
S003 v004, S004 v002, S005 v004, S006 v004, S007 v004 and S008 v003, and in
`art/reviews/d032-s009-landscape-v005-producer-review-v001.md` and
`art/reviews/d032-s010-landscape-v009-producer-review-v001.md` for S009 v005
and S010 v009. Independent exact-checksum reviews
`art/reviews/d032-independent-review-f.md`, `-g.md` and `-h.md` pass all ten
selections against the final plan and contracts; their non-failing observations
(the disclosed S003 v004 gold floral patch, S009 v005 Matsya scale and gill band,
S010 v009 ornament) are recorded in the batch review notice. D032 remains
unapproved, portraits are paused, and sourced English translations are absent.
Upload only D032's WebP derivatives with
`node review-site/scripts/upload.mjs --daskam=32` before any serialized Worker
deployment. With D028 and D032 added, the union holds 28 chapters, 289 stanza rows, 591
review media inputs and 295 selected generated images.

## Dasakam 41

D041 contains ten source-mapped landscape candidates in `art/batches/d041-comparison-v001.json`, bound to the canonical Stotra Nidhi Sanskrit/IAST, accepted numbered photo map, and exact candidate checksums. Candidate history is listed in `art/batches/d041-candidate-versions-v001.json`; unselected needs-fix attempts remain local and are not visible alternates. Independent exact-checksum visual review must pass all ten selected images before publication. The candidates remain unapproved and portraits are paused. No sourced English verse translation is included; supplied captions remain separately attributed, and unrelated trailing text in caption #10 is preserved in raw intake but excluded from stanza commentary. Upload only D041's review WebP derivatives with `node review-site/scripts/upload.mjs --daskam=41` after the selected images have passing checksum-bound review evidence and the release bundle has been validated.

## Dasakam 46

D046 has ten landscape candidates mapped sequentially to captioned photos 001–010; photos 011–012 are preserved as extras and excluded from the scene mapping. The selected versions are S001 v009, S002 v011, S003 v006, S004 v008, S005 v006, S006 v007, S007 v008, S008 v008, S009 v004 and S010 v004, pinned in `art/batches/d046-comparison-v001.json`; the complete retained candidate history is in `art/batches/d046-candidate-versions-v001.json`. Producer inspections and measured skin patches are in `art/reviews/d046-s*-producer-review-v001.md`. S007 v008 discloses the measured tiny-witness skin readings after three repair attempts; Firstmate accepted the remaining warm-tan deviation for those miniature figures. S008 v008 changes the contained Hari skin from cyan-teal to deep matte blue. All ten current selections have independent exact-checksum passes recorded in `art/reviews/visual-reviews.json`. S001 v009's earlier needs-fix finding about Yashoda's hair touching the upper edge remains preserved verbatim; the fresh tiebreak passed the same exact candidate and treated the edge contact as ordinary full-bleed cropping because face and limbs remain inside. S007's independent reviewer c measured an asura arm patch R−B 136 and judged the tiny figures warm tan-brown at full and moderate enlargement. The comparison remains unapproved, portraits are paused, and no art approval is implied. Canonical Sanskrit and IAST are sourced from Stotra Nidhi; the supplied numbered captions are separately attributed commentary and preserved verbatim. Upload only D046's review WebP derivatives with `node review-site/scripts/upload.mjs --daskam=46` after independent review, release-bundle validation and deployment checks are complete.

## Dasakam 62

D062 contains ten stanza-specific landscape comparisons mapped to the accepted captioned references. Selected candidate versions are checksum-pinned in `art/batches/d062-comparison-v001.json`; superseded candidates and native provenance remain in the local version inventory. Fresh independent exact-checksum reviews of all ten selected candidates are recorded in `art/reviews/visual-reviews.json` against the frozen plan and character contracts; producer reviews remain separate. S005 scout a raised an extra-elder concern, and scout c’s tie-break review confirmed exactly two seated Brahmin elders. S006 v003 visibly retains a pale orange U-shaped forehead mark on youthful Krishna; this known deviation is disclosed in the frozen plan and candidate notice. S005’s mountain visage is a symbolic face integrated into Govardhana, not a second bodily Krishna. Canonical Sanskrit and IAST are sourced from Stotra Nidhi. The supplied numbered captions are attributed commentary, and no sourced English verse translation was supplied. Candidates remain unapproved; portrait production is paused. Upload only D062 review derivatives with `node review-site/scripts/upload.mjs --daskam=62` before serialized Worker deployment.

## Dasakam 63

D063 contains ten native landscape comparison candidates in `art/batches/d063-comparison-v008.json`, matched to the ten numbered source photos and captions and pinned by SHA-256 to the final plan `art/plans/d063.json`. The selected versions are S001–S003 v005, S004–S005 v006, S006–S007 v004, S008–S009 v005 and S010 v004. Final independent exact-checksum reviews are in `art/reviews/d063-independent-review-*.md`, with one record per image in `art/reviews/visual-reviews.json`; producer observations are indexed in `art/reviews/d063-producer-review-index-v008.md`. Known deviations are disclosed in the plan and the batch `review_notice`. Canonical Sanskrit and IAST are sourced from Stotra Nidhi; no English verse translation was supplied. Candidates remain unapproved and portraits are paused. Upload only D063's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=63` before a serialized Worker deployment. With D063 added, the selection union contains 37 chapters, 381 stanza rows, 784 review media inputs and 387 generated selections (69 historical and 318 individually inspected). Recalculate these totals if main advances.

## Dasakam 64

D064 contains ten native landscape comparison candidates in `art/batches/d064-comparison-v001.json`, matched by SHA-256 to numbered source photos and captions 1–10 and pinned to the plan `art/plans/d064.json`. Numbered files 011–013 are uncaptioned reference extras and are not assigned to stanzas. The selected versions are S001–S002 v003, S003–S004 v004, S005–S007 v003, S008 v004 and S009–S010 v003; candidate history is listed in `art/batches/d064-candidate-versions-v001.json`. Final independent exact-checksum reviews k/l (`art/reviews/d064-independent-review-k.md` and `-l.md`) pass all ten selections, with one record per image in `art/reviews/visual-reviews.json`; producer reports are kept separately as `art/reviews/d064-s*-producer-review-v001.md`. Known deviations are disclosed in the plan and the batch `review_notice`. Canonical Sanskrit and IAST are sourced from Stotra Nidhi; no English verse translation was supplied. Candidates remain unapproved and portraits are paused. Upload only D064's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=64` before a serialized Worker deployment.

## Dasakam 65

D065 contains nine native landscape comparison candidates in `art/batches/d065-comparison-v001.json`, matched by SHA-256 to numbered source photos and captions 1–9 and pinned to the plan `art/plans/d065.json`. Numbered files 010–011 are unmapped text extras, so the chapter has nine stanza rows. The selected versions are S001–S002 v002, S003 v001, S004–S005 v002, S006 v001, S007–S008 v002 and S009 v003; candidate history is listed in `art/batches/d065-candidate-versions-v001.json`. Independent exact-checksum reviews are in `art/reviews/d065-independent-review-*.md`, with one record per image in `art/reviews/visual-reviews.json`; producer reports are kept separately as `art/reviews/d065-s*-producer-*.md`. Known deviations are disclosed in the batch `candidate_status`. Canonical Sanskrit and IAST are sourced from Stotra Nidhi; no English verse translation was supplied. Candidates remain unapproved and portraits are paused. Upload only D065's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=65` before a serialized Worker deployment. With D065 added, the selection union contains 38 chapters, 390 stanza rows, 802 review media inputs and 396 generated selections (69 historical and 327 individually inspected). Recalculate these totals if main advances.

## Dasakam 72

D072 contains twelve native landscape comparison candidates in `art/batches/d072-comparison-v001.json`, matched by SHA-256 to numbered source photos and captions 1–12 and pinned to the plan `art/plans/d072.json`. Photos 013–014 are unmapped extras. The selected versions are S001 v004, S002 v003, S003 v005, S004 v003, S005 v006, S006–S007 v007, S008 v003, S009–S010 v002, S011 v004 and S012 v003; candidate history is kept in the batch `candidate_history`. Independent exact-checksum reviews are in `art/reviews/d072-independent-review-stanzas-001-006-v001.md` and `-007-012-v001.md`, with one record per image in `art/reviews/visual-reviews.json`; producer reports are kept separately as `art/reviews/d072-s*-producer-review-v001.md`. Known S006–S008 uncertainties are disclosed in the batch `review_notice`. Canonical Sanskrit and IAST are sourced from Stotra Nidhi; no English verse translation was supplied. Candidates remain unapproved and portraits are paused. Upload only D072's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=72` before a serialized Worker deployment. With D072 added, the selection union contains 40 chapters, 412 stanza rows, 846 review media inputs and 418 generated selections (69 historical and 349 individually inspected). Recalculate these totals if main advances.

## Dasakam 94

D094 contains ten native landscape comparison candidates in `art/batches/d094-comparison-v015.json`, matched by SHA-256 to numbered source photos and captions 1–10 and pinned to the final plan `art/plans/d094.json`. Photos 011–014 are unmapped extras. Selected versions are S001 v001, S002 v004, S003 v016, S004 v034, S005 v017, S006 v014, S007 v004, S008 v010, S009 v010 and S010 v006; full candidate history is in `art/batches/d094-candidate-versions-v015.json`. Fresh independent exact-checksum review of all ten selected images passed under request d094-independent-review-v022m; the versioned reports and per-image records are in `art/reviews/`. S004 v034 has disclosed minor generation drift outside the hand silhouettes, accepted by Firstmate after direct review; its blue deity palms measure B-R 180 and 186 and Bhattathiri samples R-B 102–122. S009 v010's compact medallion is approximately 16% of width by 42% of height; the independent reviewer could not confidently count every small deity toe tip at full size but observed no missing-toe defect and passed the candidate. Producer measurements and accepted deviations remain disclosed in candidate status, including S003 v016 samples up to R-B 120, S005 v017 up to R-B 138, S006 v014 and S008 v010 continuous blue deity palms, and S009 v010 Bhattathiri skin samples R-B 110–129. Art remains unapproved and portraits paused. Upload only D094's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=94` before a serialized Worker deployment.

## Dasakam 95

D095 contains ten native landscape comparison candidates in `art/batches/d095-comparison-v006.json`, matched by SHA-256 to numbered source photos and captions 1–10 and pinned to the plan `art/plans/d095.json`. Photos 011–014 are unmapped extras. The selected versions are S001 v007, S002 v002, S003 v006, S004 v003, S005 v007, S006 v004, S007 v003, S008 v005, S009 v003 and S010 v007; candidate history is listed in `art/batches/d095-candidate-versions-v006.json`. Independent exact-checksum reviews are in `art/reviews/d095-s*-independent-review-v001.md`, with one record per image in `art/reviews/visual-reviews.json`; producer reports are kept separately as `art/reviews/d095-s*-producer-review-*.md`. Known deviations are disclosed in the batch `candidate_status`. Canonical Sanskrit and IAST are sourced from Stotra Nidhi; no English verse translation was supplied. Candidates remain unapproved and portraits are paused. Upload only D095's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=95` before a serialized Worker deployment. With D095 added, the selection union contains 41 chapters, 422 stanza rows, 866 review media inputs and 428 generated selections (69 historical and 359 individually inspected). Recalculate these totals if main advances.

## Dasakam 99

D099 contains ten native landscape comparison candidates in `art/batches/d099-comparison-v001.json`, matched by SHA-256 to numbered source photos and captions 1–10 and pinned to the plan `art/plans/d099.json`. Selected versions and candidate history are listed in the batch and `art/batches/d099-candidate-versions-v001.json`. Independent exact-checksum reviews are in `art/reviews/d099-independent-review-*.md`, with one record per image in `art/reviews/visual-reviews.json`; producer reports are kept beside them as `art/reviews/d099-s*-producer-review-*.md`. The review status and known deviations are stated in the batch `review_notice`. Candidates remain unapproved; publishing is not art approval. Upload only D099's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=99` before a serialized Worker deployment.

## Dasakam 97

D097 contains ten native landscape comparison candidates in `art/batches/d097-comparison-v013.json`, one per canonical stanza, pinned by SHA-256 to the plan `art/plans/d097.json`. Photos 001, 002 and 006–010 pair with stanzas 1, 2 and 6–10; stanzas 3–5 have no mapped photo, and photos 003–005 and 011–014 remain unmapped extras. All supplied captions are empty, so English commentary is a studio paraphrase in `content/sources/d097/COMMENTRY.txt`. Selected versions and candidate history are listed in the batch and `art/batches/d097-candidate-versions-v013.json`. Independent exact-checksum review passed all ten selected versions under request d097-independent-review-v010 (`art/reviews/d097-independent-review-v010-*.md`), with one record per image in `art/reviews/visual-reviews.json` and earlier verdicts in `art/reviews/d097-visual-review-history-v001.json`; the S004 follow-up and known deviations are disclosed in the batch `review_notice`. Candidates remain unapproved; publishing is not art approval, and portraits are paused. Upload only D097's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=97` before a serialized Worker deployment.

## Dasakam 98

D098 contains eleven native 16:9 landscape comparison rows in `art/batches/d098-comparison-v004.json`, each mapped to its numbered source photograph and caption from `intake/D098/photo-captions.txt`, with image hashes pinned by SHA-256 and the batch bound to the plan `art/plans/d098.json` as recorded in its `review_notice`. Uncaptioned photos 012–017 remain preserved and unmapped. The chapter is an unapproved reference-versus-candidate comparison: publishing it is not art approval, no `art/approved/` entry exists for D098, and review status is recorded in the batch and `art/reviews/`. Upload only D098's WebP derivatives with `node review-site/scripts/upload.mjs --daskam=98` before a serialized Worker deployment.

## Dasakam 100

D100 contains eleven native landscape candidates in `art/batches/d100-comparison-v001.json`, paired to numbered source photos and captions 1–11 by SHA-256; photos 012–015 remain unmapped extras. Selected versions are S001 v012, S002 v003, S003–S004 v002, S005 v010, S006 v002, S007 v004, S008 v003, S009 v005, S010 v006 and S011 v014. All generated attempts, submitted prompts, reference arguments and checksums are inventoried in `art/batches/d100-candidate-versions-v001.json`. Producer reviews are recorded in versioned files under `art/reviews/`; selected S005 v010 and S010 v006 repair-review records are preserved as `producer_reviews` beside the matching exact-checksum rows in `art/reviews/visual-reviews.json`. Independent exact-checksum review passed all eleven selected versions: nine in `art/reviews/d100-independent-review-v007.md`, plus S007 v004 and S011 v014 in `art/reviews/d100-independent-review-v006.md`; the reviewer accepted S005’s paired halo-side curves as musical ornament. S001, S010 and S011 skin measurements are disclosed in their plans and producer reports; S011’s warm-brown face, neck, torso and arm patches measure R−B 124–131 and were judged natural brown by the independent reviewer. Canonical Sanskrit and IAST are sourced from Stotra Nidhi; no English verse translation was supplied. Candidates remain unapproved and portraits are paused. Upload only D100 review derivatives with `node review-site/scripts/upload.mjs --daskam=100` after exact-byte bundle validation.

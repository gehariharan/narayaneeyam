# Jarvis handoff: remove unintended decorative borders

The user explicitly asked to hand this task to the existing Narayaneeyam Codex
agent in Herdr on Jarvis. Continue the artwork correction, not just planning.

## Requested outcome

D001 and D002 are the borderless visual baseline. D038 and D096 acquired thick
floral borders through reference drift; this was not intentional. Generate new
borderless versions of BOTH Traditional mural and Detailed painting candidates
for all ten slokas in each chapter (40 images), preserving scene, character
identity, palette, symbolism and the distinction between the two renderings.
Inspect each result for anatomy, faces, hands, unwanted text, continuity and
framing. Do not crop away borders or overwrite existing candidates. Keep all
older comparisons. Update comparison selections, build, test, publish to the
existing Cloudflare review endpoint, verify images and feedback, and sync the
finished files and continuation notes to OneDrive/GitHub. Do not mark art approved
without explicit user approval. Portraits are not part of this correction pass.

## Starting state

Authoritative published checkpoint: main commit acfaa6feaf51eec096b74d0c478958079d6f2662
at https://github.com/gehariharan/narayaneeyam.git . Four chapters (1,2,38,96),
40 rows, 120 review images. D096 is complete in both landscape styles.
Live: https://gehariharan.com/narayaneeyam/ . Worker version:
7d701905-550d-4783-8429-98d6025c0575 . All 120 hashes and feedback verified.

Read AGENTS.md, STUDIO.md, CONTINUE.md, art/bible/series.json, applicable character
bibles, art/plans/d038.json and d096.json, and
art/batches/series-color-border-review-v001.md. Current selections:
art/batches/d038-comparison-v001.json and d096-comparison-v002.json.
D096 review notes include an S009 editorial deviation: visible discarded coins
rather than the planned empty pouch. Correct that in the new pass as practical.

Use session Codex ImageGen only. D001 S004/S008 landscape masters anchor flat
painting style; approved character sheets anchor identity only. Explicitly
request a full-bleed scene without an outer decorative frame. Existing framed
candidates can anchor scene content, but must NOT dictate border treatment.
Generate a first correction, inspect against D001/D002, then proceed.
Keep versioned prompts, exact requests, reference paths, dimensions and SHA-256
alongside candidates under artifacts/. Intake comparison copies use
intake/D038/outputs/d38NNN-landscape-vVVV.png and
intake/D096/outputs/d96NNN-landscape-vVVV.png. Inspect existing numbering first.
Do not add generation endpoints or API calls to the application.

## Preserve Jarvis local work before reconciliation

SSH Jarvis opens Windows PowerShell. Existing agent cwd:
C:\Users\gehar\Documents\Github\narayaneeyam ; Herdr pane wM:p1.
At handoff this checkout was at c46836c with modified series.json,
build-prompt.mjs, validate-studio.mjs and untracked D038 content/bibles, output,
tmp and proof-building scripts. DO NOT reset/clean or blindly pull over these.
Inspect and preserve all local work. Prefer a separate checkout/worktree of
current origin/main for border corrections, then reconcile relevant local work
carefully without substituting outdated D038 records for the completed set.

Generated assets are gitignored: GitHub alone is insufficient. The Linux studio
/home/gehariharan/narayaneeyam is authoritative; its completed artifacts and intake
were uploaded non-destructively to OneDrive Pictures/Narayaneeyam Studio.
Locate/download that mirror on Jarvis and verify selected asset SHA-256 values
before generation. Do not overwrite differing local masters. If access is
missing, report the exact missing files/tool instead of fabricating replacements.

Cloudflare instructions are in review-site/README.md and CONTINUE.md. Wrangler
was authenticated on the Linux machine; do not assume Jarvis authentication.
Use dedicated narayaneeyam R2 and narayaneeyam-feedback D1. Site is intentionally
public, no passphrase. Preserve existing feedback and remove only explicitly
labelled deployment test submissions. Keep the blog outside /narayaneeyam intact.

The earlier ImageGen limit cleared on retry; all D096 images finished. Do not
assume the previous six-day estimate is still a blocker. If the actual session
has no ImageGen access, state that precisely rather than switching to API.

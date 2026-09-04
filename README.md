# Narayaneeyam

An offline-first editorial and image-production studio for a Narayaneeyam coffee-table book and downloadable digital edition. The project combines sourced verses and commentary with consistent temple-mural-inspired artwork.

The current milestone is content quality. There is no image-generation API, admin panel, cloud image store, or deployment requirement. Codex ImageGen is used interactively; masters and candidates stay local until a durable shared store is chosen.

## Start here

```sh
npm install
npm run studio:validate
npm run dev
```

See [STUDIO.md](STUDIO.md) for the complete production workflow.

## Paired artwork contract

Every stanza is planned and approved as a pair:

- landscape 16:9 for desktop, spreads, and presentations
- portrait 4:5 for mobile, downloads, covers, and portrait pages

These are separate compositions of one concept, not crops. Shared identity is recorded with `concept_id` in both the plan and approval manifest.

## Useful commands

```sh
npm run studio:validate
npm run studio:validate -- --strict
npm run prompt:build -- --daskam=1 --sloka=1 --orientation=landscape
npm run prompt:build -- --daskam=1 --sloka=1 --orientation=portrait
npm run art:approve -- --daskam=1 --sloka=1 --orientation=portrait --file=artifacts/path/to/candidate.png
npm run preview:sync
npm run check
npm run build
```

## Repository layout

```text
content/                 canonical content and source provenance
art/bible/               series and recurring-character continuity
art/plans/               stanza concepts and paired compositions
art/approved/            explicit approvals, local paths, and checksums
artifacts/               prompts, candidates, and masters (local/ignored)
public/images/           generated preview derivatives (local/ignored)
schemas/                 versioned contracts for content, plans, and approvals
src/                     small Astro proof-reading interface
scripts/                 offline acquisition, prompt, validation, and preview tools
```

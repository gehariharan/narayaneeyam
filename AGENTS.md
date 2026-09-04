# Narayaneeyam studio instructions

This repository is an offline-first editorial and art studio. The website is a local preview of approved material, not the source of truth.

## Non-negotiable workflow

- Do not add OpenAI API calls, image-generation endpoints, an admin panel, Vercel Blob, or another remote store unless the user explicitly reopens that decision.
- Generate artwork through Codex ImageGen in the working session. Save results under `artifacts/`; never put generated masters directly in `public/`.
- Read `STUDIO.md`, `art/bible/series.json`, the relevant character bible, and `art/plans/dNNN.json` before generating.
- Keep source text, editorial text, visual plans, candidates, and approvals separate. Never silently rewrite sourced Sanskrit, transliteration, or translations.
- Never overwrite a candidate or master. Use a new version. Only an explicit user approval may update `art/approved/dNNN.json`.
- Every concept has two independently composed masters: landscape 16:9 and portrait 4:5. Do not crop one to manufacture the other. Preserve the same `concept_id`, characters, moment, palette, and symbolism across the pair.
- When making the companion orientation, use the approved first orientation and approved character references as visual anchors, while explicitly asking ImageGen to recompose for the new frame.
- Generated art must not contain readable text, captions, signatures, logos, or watermarks.

## Source-of-truth paths

- `content/daskams/dNNN.json`: sourced and edited chapter content
- `content/sources/dNNN/`: provenance and retrieval notes
- `art/bible/`: series and character continuity rules
- `art/plans/dNNN.json`: one visual concept with two compositions per stanza
- `art/approved/dNNN.json`: explicit approval manifest and checksums
- `artifacts/dNNN/sNNN/`: prompts, candidates, and local masters; intentionally gitignored
- `public/images/dNNN/`: reproducible web previews; intentionally gitignored

## Routine commands

```sh
npm run studio:validate
npm run prompt:build -- --daskam=1 --sloka=1 --orientation=landscape
npm run prompt:build -- --daskam=1 --sloka=1 --orientation=portrait
npm run art:approve -- --daskam=1 --sloka=1 --orientation=portrait --file=artifacts/path/to/candidate.png
npm run preview:sync
npm run build
```

`studio:validate` reports incomplete art pairs without failing. Use `npm run studio:validate -- --strict` when completeness is required.

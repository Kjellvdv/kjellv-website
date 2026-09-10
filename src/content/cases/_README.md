# Case studies

One markdown file per client, named after its slug in `src/data/cases.ts` (`zygo.md`, `willow.md`, `will.md`, `aspire.md`, `sofico.md`). Each renders at `/work/<slug>`, and the card on `/work` gets a "Read the full case study" button once the file is published.

Drafts go in `drafts/`, which is gitignored. The repo is public, so a committed draft is a published draft. A case only moves up out of `drafts/` once the client has signed off, and the schema refuses `status: published` without a `client_approval` date.

Drafts render on the local dev server only: run `npx astro dev --port 4322` and open `/work/<slug>`.

The editorial brief, the per-case notes and the sign-off records live in the brand vault, not here, because they name people and record what each client cleared: `~/brands/kjellvandevyvere/projects/case-studies/`.

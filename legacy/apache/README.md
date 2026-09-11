# Apache fallback

`.htaccess` for the pre-2026 WordPress redirects and asset cache headers, kept
here for a possible future move to Apache hosting.

**Nothing in this folder is deployed.** It sits outside `public/`, so Astro does
not copy it into `dist/`. That is deliberate: the file used to live in `public/`,
where GitHub Pages ignored every rule in it while still publishing it at
`https://kjellv.com/.htaccess`.

`astro.config.mjs` `redirects` is the source of truth for the old URLs. This file
mirrors it and should be regenerated from it, not edited alongside it.

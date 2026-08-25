# Very Klear Website

Astro + Tailwind CSS. Static output, deployed to SiteGround.

## Setup

```bash
npm install
npm run dev        # localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the build locally
```

Add `@tailwindcss/typography` for blog post styling:
```bash
npm install @tailwindcss/typography
```

## Deploy to SiteGround

1. Run `npm run build`
2. Upload the contents of `dist/` to your SiteGround public_html folder via FTP or File Manager
3. Done — it's plain static HTML

For automatic deploys, SiteGround supports Git deployment via their dashboard (Devs > Git).

## Adding blog posts

The blog pipeline writes markdown files to `~/.claude/content-drafts/very-klear/`. Copy approved posts into `src/content/blog/` and rebuild.

Each post needs this frontmatter:

```yaml
---
title: "Sentence case title"
slug: "url-safe-slug"
meta_description: "135–160 chars with primary keyword"
primary_keyword: "main search term"
category: "Educational"   # Educational | Personal | Promotional | Entertaining
leaf_id: 1
status: "published"
published_at: 2026-04-22
---
```

## Updating the Calendly/Cal link

Replace `https://cal.com/kjell` in these files with your actual booking link:
- `src/components/Nav.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro` (3 occurrences)

## Project structure

```
src/
├── content/
│   ├── config.ts           ← blog schema (matches pipeline spec)
│   └── blog/               ← drop markdown files here
├── layouts/
│   ├── BaseLayout.astro    ← HTML head, fonts, meta tags
│   └── BlogPost.astro      ← individual post template
├── components/
│   ├── Nav.astro
│   ├── Footer.astro
│   └── BlogCard.astro
└── pages/
    ├── index.astro          ← homepage
    └── blog/
        ├── index.astro      ← blog index with category filter
        ├── [slug].astro     ← individual post
        ├── category/
        │   └── [category].astro
        └── rss.xml.js       ← RSS feed at /blog/rss.xml
```

## Brand tokens

Defined in `tailwind.config.mjs`:
- `coral` — #d76262 (primary accent, CTAs)
- `saffron` — #f59e0b (secondary accent)
- `bg-primary` — #f7f5f2 (page background)
- `bg-secondary` — #e7e3de (subtle sections)
- `text-main` — #2b2b2b
- `text-secondary` — #6b6763
- `divider` — #d6d1cb
- `font-display` — Fraunces (headings; Google Fonts, variable with SOFT=100 for a warm display feel close to the brand font Fields)
- `font-body` — Inter (body)

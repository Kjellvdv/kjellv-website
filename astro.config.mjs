import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://kjellv.com',
  // WordPress URLs from the pre-2026 kjellv.com. GitHub Pages is not Apache,
  // so .htaccess is ignored there; Astro emits a static redirect page for each
  // of these instead. Kept in sync with nothing else: this is now the only
  // source of truth for the old URLs.
  redirects: {
    '/how-i-publish-one-success-story-every-single-week-and-how-you-can-too': '/blog/how-i-publish-one-success-story-every-single-week-and-how-you-can-too',
    '/how-social-media-shaped-my-career-and-changed-my-life': '/blog/how-social-media-shaped-my-career-and-changed-my-life',
    '/some-thoughts-on-business-and-marketing': '/blog/some-thoughts-on-business-and-marketing',
    '/veggie-challenge': '/blog/veggie-challenge',
    '/apply-these-ux-laws-to-increase-your-conversions': '/blog/apply-these-ux-laws-to-increase-your-conversions',
    '/target-audience-research': '/blog/target-audience-research',
    '/fantastic-formulas': '/blog/fantastic-formulas',
    '/seo-guide-for-beginners': '/blog/seo-guide-for-beginners',
    '/why-startup-content-strategies-fail': '/blog/why-startup-content-strategies-fail',
    '/starting-an-interview-podcast': '/blog/starting-an-interview-podcast',
    '/27-book-marketing-ideas': '/blog/27-book-marketing-ideas',
    '/kjells-2021-review': '/blog/kjells-2021-review',
    '/how-to-make-sure-your-online-writings-fulfil-their-purpose': '/blog/how-to-make-sure-your-online-writings-fulfil-their-purpose',
    '/writing-clearly': '/blog/writing-clearly',
    '/from-niche-to-personal-brand': '/blog/from-niche-to-personal-brand',
    '/short-bio': '/blog/short-bio',
    '/28-lessons-about-life': '/blog/28-lessons-about-life',
    '/lines-of-writing-advice': '/blog/lines-of-writing-advice',
    '/david-perells-three-plates-of-ideas': '/blog/david-perells-three-plates-of-ideas',
    '/control-distractions-at-home': '/blog/control-distractions-at-home',
    '/writing-a-blog-post': '/blog/writing-a-blog-post',
    '/how-to-review': '/blog/how-to-review',
    '/words-to-avoid': '/blog/words-to-avoid',
    '/write-with-clarity': '/blog/write-with-clarity',
    '/the-power-of-words': '/blog/the-power-of-words',
    '/creating-a-landing-page': '/blog/creating-a-landing-page',
    '/why-people-write': '/blog/why-people-write',
    '/writing-advice-guides': '/blog/writing-advice-guides',
    '/write-this-not-that-joshua-lisec': '/blog/write-this-not-that-joshua-lisec',
    '/the-best-way-to-say-it-joshua-lisec': '/blog/the-best-way-to-say-it-joshua-lisec',
    '/vibe-coding': 'https://vibing.kjellv.com/',
  },

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
  },
});

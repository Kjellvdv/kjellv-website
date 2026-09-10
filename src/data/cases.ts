import { getCollection, type CollectionEntry } from 'astro:content';

// The five client cases. The short version lives here and feeds both the cards
// on /work and the fact rail on each full case page, so the two always agree.
// The long version is a markdown file in src/content/cases/<slug>.md, and the
// card only links to it once that file exists and is published.
//
// Written from publishable facts only: what the company does, the role, and
// the work delivered. Anything commercially sensitive from the brand vaults
// (revenue, internal blockers, their own customers by name) is deliberately
// left out.
export interface ClientCase {
  slug: string;
  name: string;
  logo: string;
  logoClass: string;
  sector: string;
  role: string;
  duration: string;
  what: string;
  did: string[];
}

export const cases: ClientCase[] = [
  {
    slug: 'willow',
    name: 'Willow',
    logo: '/logos/willow.png',
    logoClass: 'h-7',
    sector: 'AI social media for professional services',
    role: 'Marketing lead and customer success',
    duration: '2+ years, ongoing',
    what:
      'Willow is an AI social media platform for professional-services firms: a platform, posts built from a profile of the business, and a dedicated coach, published across LinkedIn, Instagram, Facebook and X. The buyer is the firm owner or managing partner.',
    did: [
      'Run the social media programme',
      'Relaunched the website: migrated off Webflow, rebuilt with Claude, and shipped it without an SEO hit',
      'Built the customer case study engine: weekly at the start, closer to monthly now',
      'Wrote the onboarding email sequence new customers land in',
      'Worked on pricing strategy and the rate card behind it',
      'Produced partner content and conference material',
    ],
  },
  {
    slug: 'zygo',
    name: 'ZYGO',
    logo: '/logos/zygo.png',
    logoClass: 'h-7',
    sector: 'Physical AI and robotics',
    role: 'Marketing and growth lead',
    duration: 'Ongoing',
    what:
      'ZYGO builds a software platform for physical AI agents: robots that take on the dull, dangerous and difficult work so hybrid teams can cover more ground. Deeptech, technical founders, and a category most buyers have not shopped for before.',
    did: [
      'Built the go-to-market motion from scratch, with no marketing function in place',
      'Set up the CRM in Attio, with website forms routing straight into it',
      'Put prospect detection and visitor tracking in place',
      'Built the content model for the company plus both founders\' personal brands',
    ],
  },
  {
    slug: 'will',
    name: 'Will',
    logo: '/logos/will.svg',
    logoClass: 'h-7',
    sector: 'AI social media tooling',
    role: 'Product marketing and launch',
    duration: '2025, ongoing',
    what:
      'Will is Willow\'s AI agent for LinkedIn, and it runs entirely through WhatsApp. Send a voice note or a few bullets and it comes back with a post in your own voice, having read your last fifty to learn how you write. No dashboard, no new app to open. Over 1,400 people have signed up so far.',
    did: [
      'Coordinated the Product Hunt launch, which landed just outside the top ten without picking up a feature',
      'Ran the LinkedIn ad programme, testing creatives, ICPs and USPs against each other rather than one variable at a time',
      'Built sign-up tracking for a product that lives entirely inside WhatsApp',
      'Worked on UX and onboarding for an app with no interface beyond the conversation',
      'Made the YouTube explainers, and brought in a videographer for the more entertaining end of it',
      'Ran website branding and messaging with a Webflow designer on the homepage, then built the rest of the site and the blog setup myself',
      'Promoted Will at events, including its first public outing at SuperNova in Antwerp',
    ],
  },
  {
    slug: 'aspire',
    name: 'Aspire',
    logo: '/logos/aspire.svg',
    logoClass: 'h-6',
    sector: 'Fintech',
    role: 'Copy editor, on retainer',
    duration: '3 months, late 2021 to early 2022',
    what:
      'Aspire builds business finance for startups. The brief was the Founder Academy, a blog aimed squarely at founders: how to set up a company in Singapore, and the financial decisions and terminology that follow once you have.',
    did: [
      'Built the content strategy: four pillars, anchored on in-depth blog pieces with shorter term-by-term explainers underneath',
      'Set up the glossary and the writing guide the whole team worked from',
      'Led four writers, and brought in a fifth for one important pillar piece',
      'Edited everything against the brand strategy and the writing guide before it shipped',
      'Published to Webflow and worked with the designers on the visuals',
      'Turned the blog content into social',
    ],
  },
  {
    slug: 'sofico',
    name: 'SOFICO',
    logo: '/logos/sofico.png',
    logoClass: 'h-7',
    sector: 'Automotive finance and leasing software',
    role: 'Contract marketing',
    duration: 'Ongoing',
    what:
      'SOFICO makes contract management software for automotive finance and leasing: fleet, lease, and dealer operations on one platform. The buyers are operations and technology leaders at captive finance units and multi-market leasing companies.',
    did: [
      'Researched and wrote the state of AI report for the automotive industry',
      'Developed the positioning narratives, then write the content off them myself',
      'Landing pages, blogs, newsletters and case studies',
      'Long-form technical content on migration and data quality',
    ],
  },
];

export type CaseStudy = { slug: string; entry: CollectionEntry<'cases'> };

// Full case studies that exist on this build, keyed by client slug. Published
// ones always; drafts only on the local dev server, so they can be read in
// place before the client has signed off. Drafts sit in
// src/content/cases/drafts/, which is gitignored: the repo is public, so a
// committed draft would be a published draft.
export async function caseStudies(): Promise<Map<string, CaseStudy>> {
  const entries = await getCollection('cases');
  const found = new Map<string, CaseStudy>();

  for (const entry of entries) {
    const isDraftFile = entry.slug.startsWith('drafts/');
    const slug = entry.slug.replace(/^drafts\//, '');

    if (!cases.some((c) => c.slug === slug)) {
      throw new Error(`Case study "${entry.id}" has no matching client in src/data/cases.ts.`);
    }
    if (isDraftFile && entry.data.status === 'published') {
      throw new Error(`"${entry.id}" is marked published but still sits in drafts/, which is gitignored and never deploys. Move it up to src/content/cases/${slug}.md.`);
    }
    if (entry.data.status !== 'published' && !import.meta.env.DEV) continue;

    // A published file wins over a leftover draft of the same client.
    if (!found.has(slug) || !isDraftFile) found.set(slug, { slug, entry });
  }

  return found;
}

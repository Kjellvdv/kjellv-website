import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    meta_description: z.string().max(160),
    category: z.enum(['Marketing', 'Writing', 'Personal', 'AI']),

    // Where the post was first published. Absent means it was written for
    // this site. Use the exact source, never a generic "archive".
    source: z.enum(['topthreeguide', 'thecopygalaxy', 'coffeeandpens']).optional(),
    original_url: z.string().url().optional(),

    // Only set on posts produced by the brand's blog pipeline, which ties a
    // post back to a leaf in content-model.yml. Migrated and personal posts
    // have no leaf.
    leaf_id: z.number().optional(),
    primary_keyword: z.string().optional(),

    status: z.enum(['draft', 'published']).default('draft'),
    published_at: z.coerce.date().optional(),
  }),
});

// Full client case studies, rendered at /work/<slug>. The card data they sit
// behind lives in src/data/cases.ts. See src/content/cases/_README.md.
const cases = defineCollection({
  type: 'content',
  schema: z
    .object({
      // The headline outcome, naming the client. Sentence case.
      title: z.string().max(90),
      // Doubles as the meta description and the standfirst under the headline.
      summary: z.string().max(160),

      // Up to three numbers worth putting in lights. Each one needs a source
      // recorded in the vault notes for that case: nothing estimated.
      numbers: z.array(z.object({ value: z.string(), label: z.string() })).max(3).optional(),

      // A real client quote, cleared by the person quoted. Never a paraphrase
      // put in quote marks.
      quote: z.object({ text: z.string(), name: z.string(), role: z.string() }).optional(),

      status: z.enum(['draft', 'published']).default('draft'),
      // The date the client signed off. Who signed off goes in the vault
      // notes, not here, because this repo is public.
      client_approval: z.coerce.date().optional(),
      published_at: z.coerce.date().optional(),
    })
    .refine((d) => d.status !== 'published' || (d.client_approval && d.published_at), {
      message: 'A published case study needs client_approval and published_at. Nothing goes live before the client signs off.',
    }),
});

export const collections = { blog, cases };

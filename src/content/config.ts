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

export const collections = { blog };

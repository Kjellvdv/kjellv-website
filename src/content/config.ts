import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    meta_description: z.string().max(160),
    primary_keyword: z.string(),
    category: z.enum(['Diagnose', 'Build', 'Grow', 'Learn']),
    leaf_id: z.number(),
    status: z.enum(['draft', 'published']).default('draft'),
    published_at: z.coerce.date().optional(),
  }),
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    image_alt: z.string(),
    background_image: z.string().optional(),
    date: z.coerce.date(),
    category: z.string().optional(),
    cta: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};

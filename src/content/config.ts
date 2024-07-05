import { z, defineCollection } from 'astro:content';

const core = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    contacts: z.array(z.object({
      type: z.enum(['email', 'twitter', 'linkedin', 'github']),
      value: z.string(),
    })),
    recentFavorite: z.object({
      url: z.string(),
      cover: z.string().optional(),
      title: z.string(),
      artist: z.string(),
    }).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    linktype: z.enum(['internal', 'external']),
    link: z.string().optional(),
    team: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    linktype: z.enum(['internal', 'external']),
    link: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { core, projects, articles };
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One JSON file per deal in src/content/deals/
const deals = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/deals' }),
  schema: z.object({
    merchant: z.string(), // key in src/data/merchants.json
    product: z.string(),
    categories: z.array(z.string()), // category slugs (see src/data/categories.ts)
    was: z.string().default('unknown'),
    now: z.string(),
    discount: z.string().optional(),
    starts: z.string().default('unknown'),
    ends: z.string().default('unknown'),
    code: z.string().default('No code needed'),
    status: z.enum(['live', 'upcoming', 'ended']).default('live'),
    verified: z.string(), // YYYY-MM-DD, date checked on the official page
    url: z.string().url(), // official page
    affiliate_url: z.string().optional(), // optional per-deal affiliate link; falls back to merchant affiliate_url, then url
    note: z.string().optional(),
    featured: z.boolean().default(false),
    blackFriday: z.boolean().default(true),
    order: z.number().default(100),
  }),
});

// One Markdown file per daily digest in src/content/posts/ (YYYY-MM-DD.md)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    deals: z.array(z.string()).default([]), // deal ids (file names without .json)
    lastChecked: z.string().optional(),
  }),
});

export const collections = { deals, posts };

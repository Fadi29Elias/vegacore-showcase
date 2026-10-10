import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every visible text is bilingual.
const L = z.object({ ar: z.string(), en: z.string() });

export const industries = ['fashion', 'healthcare', 'finance', 'travel', 'restaurants', 'retail', 'beauty', 'vegacore'] as const;

const stat = z.object({
  label: L,
  value: z.string(),
  from: z.string().optional(),
  note: L.optional(),
});

// One file per client in src/content/clients/. Numbers are real, taken from the client's
// Instagram (or a VegaCore report) on the `asOf` date — never estimated.
const clients = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/clients' }),
  schema: z.object({
    name: L,
    handle: z.string(),
    industry: z.enum(industries),
    category: L,
    location: L.optional(),
    // "story" = full success story with reels; "name" = listed by name only.
    showcase: z.enum(['story', 'name']).default('story'),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    since: z.string().optional(), // YYYY-MM, start of our work
    headline: L.optional(), // the one-line result
    before: L.optional(),
    did: z.array(L).default([]),
    after: L.optional(),
    // Before/after profile snapshot (optional).
    growth: z
      .object({
        before: z.object({ followers: z.string(), posts: z.string().optional() }),
        after: z.object({ followers: z.string(), posts: z.string().optional() }),
      })
      .optional(),
    stats: z.array(stat).default([]),
    source: L.optional(),
    // Reels in our work period: total count and views (from Instagram on asOf).
    period: z.object({ reels: z.number(), views: z.string() }).optional(),
    // Strongest reels, shown with Instagram's own player.
    reels: z.array(z.object({ code: z.string(), views: z.string(), date: z.string() })).default([]),
    asOf: z.string().optional(),
  }),
});

export const collections = { clients };

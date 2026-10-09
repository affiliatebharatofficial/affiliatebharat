import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared frontmatter schema for both Hinglish and English articles.
// Writers must fill every required field; honesty fields (verdict,
// lastVerified, faq) are mandatory by design.
const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  category: z.enum(['hosting', 'saas-tools', 'deals']),
  tags: z.array(z.string()).default([]),
  products: z.array(z.string()).default([]),
  tools: z.array(z.string()).default([]),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  verdict: z.string(),
  lastVerified: z.string(),
});

// Hinglish articles live at src/content/articles/*.md -> /{slug}/
const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: articleSchema,
});

// English articles live at src/content/articles/en/*.md -> /en/{slug}/
const articlesEn = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles/en' }),
  schema: articleSchema,
});

export const collections = { articles, articlesEn };

import { getCollection } from 'astro:content';

// Hand-rolled sitemap: static pages + every article in both languages.
// lastmod comes from frontmatter `updated ?? date`.
export async function GET(): Promise<Response> {
  const SITE = 'https://affiliatebharat.com';

  const staticPages = [
    '/',
    '/hosting/',
    '/saas-tools/',
    '/finance/',
    '/deals/',
    '/tools/',
    '/tools/website-cost-calculator/',
    '/tools/hosting-compare/',
    '/about/',
    '/disclosure/',
    '/en/',
    '/en/about/',
    '/en/disclosure/',
  ];

  const escapeXml = (s: string): string =>
    s.replace(/[&<>"']/g, (c) => {
      switch (c) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        default: return '&apos;';
      }
    });

  const urlEntry = (loc: string, lastmod?: string): string =>
    `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`;

  const entries: string[] = staticPages.map((p) => urlEntry(`${SITE}${p}`));

  const articles = await getCollection('articles');
  for (const a of articles) {
    const slug = a.id.replace(/\.md$/, '');
    const lastmod = (a.data.updated ?? a.data.date).toISOString().split('T')[0];
    entries.push(urlEntry(`${SITE}/${slug}/`, lastmod));
  }

  const articlesEn = await getCollection('articlesEn');
  for (const a of articlesEn) {
    const slug = a.id.replace(/\.md$/, '');
    const lastmod = (a.data.updated ?? a.data.date).toISOString().split('T')[0];
    entries.push(urlEntry(`${SITE}/en/${slug}/`, lastmod));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

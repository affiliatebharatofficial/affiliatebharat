// robots.txt — served as text/plain by Astro static output.
export function GET(): Response {
  const body = ['User-agent: *', 'Allow: /', '', 'Sitemap: https://affiliatebharat.com/sitemap.xml', ''].join('\n');
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

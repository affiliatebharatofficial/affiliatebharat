import { defineConfig } from 'astro/config';
import { remarkAffiliate } from './src/plugins/remark-affiliate.ts';

// AffiliateBharat.com — "Bharat ka honest buying-guide"
// Hinglish affiliate review/deals site. Static output, hand-rolled sitemap.
export default defineConfig({
  site: 'https://affiliatebharat.com',
  output: 'static',
  markdown: {
    // Rewrites {{aff:ID}} / {{aff:ID|Label}} shortcodes into affiliate CTAs.
    // Pass the factory reference (unified calls it per processor), not the result.
    remarkPlugins: [remarkAffiliate],
  },
});

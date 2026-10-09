# AffiliateBharat

"Bharat ka honest buying-guide" — Hinglish affiliate review/deals site.
Astro 5, static output, no deploy configured yet.

## Structure

```
src/
  content.config.ts          # Content collections (articles, articlesEn) via astro/loaders glob
  content/articles/*.md      # Hinglish articles -> /{slug}/
  content/articles/en/*.md   # English articles   -> /en/{slug}/
  data/
    affiliates.ts            # Affiliate registry — single source of truth for money links
    hosting-plans.ts          # Hosting plan data for the compare tool (PLACEHOLDER prices)
    categories.ts            # Category labels/blurbs shared by hubs + cards
  plugins/
    remark-affiliate.ts      # {{aff:ID}} / {{aff:ID|Label}} -> affiliate CTA links
  components/                # Layout, Header, Footer, ArticleCard, Faq, VerdictBox, ...
  pages/
    index.astro              # Hinglish home
    {hosting,saas-tools,finance,deals}.astro   # Category hubs
    tools/                   # index, hosting-compare, website-cost-calculator (vanilla JS)
    about.astro  disclosure.astro
    [slug].astro             # Hinglish article template (JSON-LD: Article, FAQPage, BreadcrumbList)
    en/                      # English mirror: index, about, disclosure, [slug]
    robots.txt.ts  sitemap.xml.ts   # Hand-rolled (no @astrojs/sitemap)
    404.astro
content-calendar.md          # 30 long-tail topics (flank strategy, no head keywords)
research/                    # Research notes land here (notes.md); feeds hosting-plans.ts
```

## How affiliate links work

1. All outbound money links resolve through `src/data/affiliates.ts`.
2. `affiliateUrl` is an **empty placeholder** until real links arrive (Cuelinks / EarnKaro / direct programs).
3. `affUrl(id)` returns `affiliateUrl || officialUrl`, so pages never render dead links. Unknown ids return `/`.
4. In article markdown, write `{{aff:hostinger}}` or `{{aff:hostinger|Offer dekho}}` —
   the remark plugin turns these into `<a rel="sponsored nofollow noopener" class="aff-link">`.
5. Tool CTAs call `affUrl()` directly in `.astro` frontmatter.

When real affiliate links arrive: paste them into `affiliateUrl` in `affiliates.ts` and rebuild. Nothing else changes.

## How to add an article

1. Create `src/content/articles/<slug>.md` (Hinglish) or `src/content/articles/en/<slug>.md` (English).
2. Fill ALL frontmatter fields (schema is strict):
   `title, description, date, updated?, category (hosting|saas-tools|finance|deals), tags[], products[], tools[], faq[] ({q,a}), verdict, lastVerified`.
3. Write the body in markdown. Use `{{aff:ID}}` shortcodes for CTAs.
4. `npm run build` — the `[slug]` template wires up breadcrumb, disclosure box, verdict,
   methodology, FAQ accordion, JSON-LD, related articles and the English cross-link automatically.

## Honesty rules (non-negotiable)

- Never claim we tested a product we didn't. MethodologyBox says this on every article.
- `lastVerified` must be a real date when facts were checked — never future-dated.
- Rankings are never for sale; commission rates never influence verdicts.
- Prices in `hosting-plans.ts` are UNVERIFIED placeholders until research/notes.md confirms them.
- Every affiliate link carries `rel="sponsored nofollow noopener"`.

## Commands

- `npm run dev` — local dev server
- `npm run check` — `astro check` (run via `./node_modules/.bin/astro check`, never bare npx)
- `npm run build` — static build to `dist/`

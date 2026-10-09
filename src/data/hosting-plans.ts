// Hosting plan data for the comparison engine.
// VERIFIED values come from official pricing pages fetched 2026-10-09
// (see research/notes.md for sources + access dates).
// Fields that could NOT be verified from official pages are `null`
// with the third-party-reported numbers quoted in `note` text only.
// Renewal price matters more than intro price — sort/filter treat
// null as +Infinity so unverified plans sink, never float.

export interface HostingPlan {
  id: string;
  provider: string;
  plan: string;
  type: 'shared' | 'cloud' | 'vps';
  /** Introductory promo price per month (billing-term normalised). null = unverified. */
  introMonthly: number | null;
  /** Renewal price per month after the promo term. null = unverified. */
  renewalMonthly: number | null;
  currency: 'INR' | 'USD';
  storage: string;
  websites: string;
  /** null = not confirmed from a public source yet. */
  freeDomain: boolean | null;
  freeSSL: boolean | null;
  /** null = not confirmed from a public source yet. */
  hindiSupport: boolean | null;
  /** Use-case tags; the compare tool filters on these. */
  bestFor: Array<'hindi-blog' | 'business' | 'ecommerce' | 'portfolio'>;
  /** Affiliate registry id (see src/data/affiliates.ts). */
  affiliateId: string;
  note?: string;
}

/** Badge text for the use-case tags shown on the compare tool. */
export const BEST_FOR_LABELS: Record<HostingPlan['bestFor'][number], string> = {
  'hindi-blog': 'Hindi Blog',
  business: 'Business',
  ecommerce: 'E-commerce',
  portfolio: 'Portfolio',
};

export const HOSTING_PLANS: HostingPlan[] = [
  // ---- Hostinger India — verified from hostinger.com/in (2026-10-09) ----
  {
    id: 'hostinger-single', provider: 'Hostinger', plan: 'Single', type: 'shared',
    introMonthly: 69, renewalMonthly: 289, currency: 'INR',
    storage: '10 GB SSD', websites: '1 website',
    freeDomain: true, freeSSL: null,
    hindiSupport: null,
    bestFor: ['hindi-blog', 'portfolio'], affiliateId: 'hostinger',
    note: 'Verified 2026-10-09 (hostinger.com/in). Intro ₹69/mo on 48-mo term; renews ₹289/mo. Free domain banner applies to yearly plans; free mailbox + weekly backups included.',
  },
  {
    id: 'hostinger-premium', provider: 'Hostinger', plan: 'Premium', type: 'shared',
    introMonthly: 149, renewalMonthly: 449, currency: 'INR',
    storage: '20 GB SSD', websites: '3 websites',
    freeDomain: true, freeSSL: null,
    hindiSupport: null,
    bestFor: ['hindi-blog', 'business', 'portfolio'], affiliateId: 'hostinger',
    note: 'Verified 2026-10-09 (hostinger.com/in). Intro ₹149/mo on 48-mo term; renews ₹449/mo. Free domain for 1 year; weekly backups.',
  },
  {
    id: 'hostinger-unlimited', provider: 'Hostinger', plan: 'Unlimited', type: 'shared',
    introMonthly: 249, renewalMonthly: 649, currency: 'INR',
    storage: '50 GB NVMe', websites: 'Unlimited',
    freeDomain: true, freeSSL: null,
    hindiSupport: null,
    bestFor: ['hindi-blog', 'business', 'ecommerce'], affiliateId: 'hostinger',
    note: 'Verified 2026-10-09 (hostinger.com/in). Top shared tier — the old "Business" plan no longer appears on the India homepage. Intro ₹249/mo on 48-mo term; renews ₹649/mo. Daily backups; free domain 1 year.',
  },
  // ---- MilesWeb India — verified from milesweb.in (2026-10-09) ----
  {
    id: 'milesweb-starter', provider: 'MilesWeb', plan: 'Starter', type: 'shared',
    introMonthly: 69, renewalMonthly: 69, currency: 'INR',
    storage: '10 GB NVMe', websites: '1 website',
    freeDomain: true, freeSSL: true,
    hindiSupport: true,
    bestFor: ['hindi-blog', 'portfolio'], affiliateId: 'milesweb',
    note: 'Verified 2026-10-09 (milesweb.in). Formerly "Tyro". Same-price-at-renewal guaranteed. Displayed prices exclude 18% GST. 30-day money-back.',
  },
  {
    id: 'milesweb-business', provider: 'MilesWeb', plan: 'Business', type: 'shared',
    introMonthly: 199, renewalMonthly: 199, currency: 'INR',
    storage: '100 GB NVMe', websites: '50 websites',
    freeDomain: true, freeSSL: true,
    hindiSupport: true,
    bestFor: ['business', 'hindi-blog'], affiliateId: 'milesweb',
    note: 'Verified 2026-10-09 (milesweb.in). Formerly "Swift". Same-price-at-renewal guaranteed. Prices exclude 18% GST. 150 emails, daily + on-demand backups.',
  },
  {
    id: 'milesweb-cloud-startup', provider: 'MilesWeb', plan: 'Cloud Startup', type: 'cloud',
    introMonthly: 399, renewalMonthly: 399, currency: 'INR',
    storage: '150 GB NVMe', websites: '100 websites',
    freeDomain: true, freeSSL: true,
    hindiSupport: true,
    bestFor: ['business', 'ecommerce'], affiliateId: 'milesweb',
    note: 'Verified 2026-10-09 (milesweb.in). Formerly "Turbo". Same-price-at-renewal guaranteed. Prices exclude 18% GST.',
  },
  // ---- Bluehost India — intro prices verified from bluehost.in help page (2026-10-09);
  // renewal prices are NOT published on the official page -> null ----
  {
    id: 'bluehost-basic', provider: 'Bluehost India', plan: 'Basic', type: 'shared',
    introMonthly: 299, renewalMonthly: null, currency: 'INR',
    storage: '50 GB', websites: '1 website',
    freeDomain: true, freeSSL: null,
    hindiSupport: null,
    bestFor: ['hindi-blog', 'portfolio'], affiliateId: 'bluehost',
    note: 'Intro verified 2026-10-09 (my0.bluehost.in/hosting/help/price): ₹399/mo (12-mo), ₹359/mo (24-mo), ₹299/mo (36-mo) — table shows 36-mo price. Renewal prices not published on official page. Unmetered bandwidth; 5 email accounts.',
  },
  {
    id: 'bluehost-choice-plus', provider: 'Bluehost India', plan: 'Choice Plus', type: 'shared',
    introMonthly: 499, renewalMonthly: null, currency: 'INR',
    storage: 'Unmetered', websites: 'Unlimited',
    freeDomain: true, freeSSL: null,
    hindiSupport: null,
    bestFor: ['business', 'hindi-blog'], affiliateId: 'bluehost',
    note: 'Intro verified 2026-10-09 (my0.bluehost.in/hosting/help/price): ₹659/mo (12-mo), ₹559/mo (24-mo), ₹499/mo (36-mo) — table shows 36-mo price. Renewal prices not published on official page. Adds domain privacy + CodeGuard backups.',
  },
  // ---- HostGator India — official site showed NO prices on 2026-10-09 ----
  {
    id: 'hostgator-hatchling', provider: 'HostGator India', plan: 'Hatchling', type: 'shared',
    introMonthly: null, renewalMonthly: null, currency: 'INR',
    storage: 'Unmetered', websites: '1 website',
    freeDomain: null, freeSSL: null,
    hindiSupport: null,
    bestFor: ['hindi-blog', 'portfolio'], affiliateId: 'hostgator-in',
    note: 'UNVERIFIED: hostgator.com showed blank price placeholders on 2026-10-09. Third-party (insidehost.net, older data) reported Hatchling ₹199/mo intro, renews ₹399 — not confirmed.',
  },
  {
    id: 'hostgator-baby', provider: 'HostGator India', plan: 'Baby', type: 'shared',
    introMonthly: null, renewalMonthly: null, currency: 'INR',
    storage: 'Unmetered', websites: 'Unlimited',
    freeDomain: null, freeSSL: null,
    hindiSupport: null,
    bestFor: ['business', 'hindi-blog'], affiliateId: 'hostgator-in',
    note: 'UNVERIFIED: hostgator.com showed blank price placeholders on 2026-10-09. Third-party (insidehost.net, older data) reported Baby ₹249/mo intro, renews ₹499 — not confirmed.',
  },
  // ---- A2 Hosting — official pricing page not accessible 2026-10-09; third-party conflicts ----
  {
    id: 'a2-startup', provider: 'A2 Hosting', plan: 'Startup', type: 'shared',
    introMonthly: null, renewalMonthly: null, currency: 'USD',
    storage: '100 GB SSD', websites: '1 website',
    freeDomain: false, freeSSL: true,
    hindiSupport: null,
    bestFor: ['portfolio', 'hindi-blog'], affiliateId: 'a2hosting',
    note: 'UNVERIFIED: official page not accessible 2026-10-09. Third-party reports Startup $2.99/mo intro (36-mo), renews $10.99 — not confirmed. No free domain (third-party).',
  },
  {
    id: 'a2-drive', provider: 'A2 Hosting', plan: 'Drive', type: 'shared',
    introMonthly: null, renewalMonthly: null, currency: 'USD',
    storage: 'Unlimited SSD', websites: 'Unlimited',
    freeDomain: null, freeSSL: true,
    hindiSupport: null,
    bestFor: ['business', 'ecommerce'], affiliateId: 'a2hosting',
    note: 'UNVERIFIED: official page not accessible 2026-10-09. Third-party sources conflict (Drive $4.99 vs $5.99/mo intro; renewal ~$12.99) — not confirmed.',
  },
];

/** Last date the plan data was verified against official pricing pages. */
export const lastVerified = '2026-10-09';

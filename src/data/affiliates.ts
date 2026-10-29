// Central affiliate registry. SINGLE source of truth for every outbound
// money link on the site.
//
// Workflow: affiliateUrl stays '' until the coordinator pastes the REAL
// affiliate link (Cuelinks / EarnKaro / direct program). affUrl() falls back
// to officialUrl meanwhile, so no page ever renders a dead link.

export interface Affiliate {
  id: string;
  name: string;
  category: 'hosting' | 'saas-tools' | 'deals';
  officialUrl: string;
  /** Real affiliate/tracking link. EMPTY placeholder until filled. */
  affiliateUrl: string;
  /** Short public payout info (from public program pages only). */
  payoutNote: string;
}

export const AFFILIATES: Affiliate[] = [
  { id: 'hostinger', name: 'Hostinger', category: 'hosting', officialUrl: 'https://www.hostinger.com', affiliateUrl: '', payoutNote: 'Up to $150/sale (public program info)' },
  { id: 'bluehost', name: 'Bluehost India', category: 'hosting', officialUrl: 'https://www.bluehost.in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'hostgator-in', name: 'HostGator India', category: 'hosting', officialUrl: 'https://www.hostgator.in', affiliateUrl: '', payoutNote: 'TBD — merging into BigRock (2026-10-17)' },
  { id: 'bigrock', name: 'BigRock', category: 'hosting', officialUrl: 'https://www.bigrock.in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'milesweb', name: 'MilesWeb', category: 'hosting', officialUrl: 'https://www.milesweb.in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'a2hosting', name: 'A2 Hosting', category: 'hosting', officialUrl: 'https://www.a2hosting.com', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'getresponse', name: 'GetResponse', category: 'saas-tools', officialUrl: 'https://www.getresponse.com', affiliateUrl: '', payoutNote: '33% recurring' },
  { id: 'semrush', name: 'Semrush', category: 'saas-tools', officialUrl: 'https://www.semrush.com', affiliateUrl: '', payoutNote: '$200/sale (public info)' },
  { id: 'kit', name: 'Kit (ConvertKit)', category: 'saas-tools', officialUrl: 'https://kit.com', affiliateUrl: '', payoutNote: 'Up to 30% recurring for 24 months' },
  { id: 'jasper', name: 'Jasper', category: 'saas-tools', officialUrl: 'https://www.jasper.ai', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'clickfunnels', name: 'ClickFunnels', category: 'saas-tools', officialUrl: 'https://www.clickfunnels.com', affiliateUrl: '', payoutNote: 'Up to 30–40% recurring (public info)' },
  { id: 'systeme', name: 'Systeme.io', category: 'saas-tools', officialUrl: 'https://systeme.io', affiliateUrl: '', payoutNote: '60% lifetime recurring (public info)' },
  { id: 'flipkart', name: 'Flipkart', category: 'deals', officialUrl: 'https://www.flipkart.com', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'amazon', name: 'Amazon India', category: 'deals', officialUrl: 'https://www.amazon.in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'asus', name: 'ASUS India', category: 'deals', officialUrl: 'https://www.asus.com/in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'lenovo', name: 'Lenovo India', category: 'deals', officialUrl: 'https://www.lenovo.com/in/in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'hp', name: 'HP India', category: 'deals', officialUrl: 'https://www.hp.com/in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'acer', name: 'Acer India', category: 'deals', officialUrl: 'https://www.acer.com/in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'realme', name: 'Realme India', category: 'deals', officialUrl: 'https://www.realme.com/in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'oneplus', name: 'OnePlus India', category: 'deals', officialUrl: 'https://www.oneplus.in', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'godaddy', name: 'GoDaddy', category: 'deals', officialUrl: 'https://www.godaddy.com', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'porkbun', name: 'Porkbun', category: 'deals', officialUrl: 'https://porkbun.com', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'cloudflare', name: 'Cloudflare Registrar', category: 'deals', officialUrl: 'https://www.cloudflare.com', affiliateUrl: '', payoutNote: 'No affiliate program for registrar' },
  { id: 'namecheap', name: 'Namecheap', category: 'deals', officialUrl: 'https://www.namecheap.com', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'ubersuggest', name: 'Ubersuggest', category: 'saas-tools', officialUrl: 'https://www.ubersuggest.com', affiliateUrl: '', payoutNote: 'TBD' },
  { id: 'google-search-console', name: 'Google Search Console', category: 'saas-tools', officialUrl: 'https://search.google.com/search-console', affiliateUrl: '', payoutNote: 'Free tool — no affiliate program' },
];

/** Resolve the outbound URL for an affiliate id. Unknown id -> site root. */
export function affUrl(id: string): string {
  const a = AFFILIATES.find((x) => x.id === id);
  if (!a) return '/';
  return a.affiliateUrl || a.officialUrl;
}

/** Display name for an affiliate id (used as default CTA label). */
export function affiliateName(id: string): string {
  return AFFILIATES.find((x) => x.id === id)?.name ?? id;
}

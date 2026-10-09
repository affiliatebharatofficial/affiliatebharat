// Category metadata shared by the homepage, hubs and article pages.
// Labels/blurbs are Hinglish; English pages use their own inline strings.
export const CATEGORIES = {
  hosting: {
    slug: 'hosting',
    label: 'Hosting',
    icon: '🖥️',
    blurb: 'Web hosting, domain aur website setup — kaun sa plan kis ke liye sahi hai.',
  },
  'saas-tools': {
    slug: 'saas-tools',
    label: 'SaaS Tools',
    icon: '🛠️',
    blurb: 'Email marketing, SEO, AI aur business tools ki honest comparisons.',
  },
  finance: {
    slug: 'finance',
    label: 'Finance',
    icon: '💳',
    blurb: 'Demat accounts, credit cards aur money tools — charges samajh ke chuno.',
  },
  deals: {
    slug: 'deals',
    label: 'Deals',
    icon: '🏷️',
    blurb: 'Hosting aur SaaS par chal rahe genuine offers aur discount alerts.',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

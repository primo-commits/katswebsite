export type Container = {
  id: string;
  size: string;
  condition: string;
  isNew: boolean;
  dimensions: string;
  availability: string;
  blurb: string;
};

export type UseCase = {
  id: string;
  title: string;
  blurb: string;
  detail: string;
  sizes: string;
  fits: string[];
};
export type Modification = { id: string; title: string; blurb: string };
export type Step = { n: string; title: string; blurb: string };
export type Faq = { q: string; a: string };

export type Content = {
  nav: { inventory: string; mods: string; delivery: string; faq: string; quote: string };
  hero: { eyebrow: string; title: string; lede: string; ctaPrimary: string; ctaSecondary: string };
  about: { eyebrow: string; title: string; body: string; statValue: string; statLabel: string };
  inventory: { eyebrow: string; title: string; updated: string; quoteLabel: string; cta: string };
  useCases: { eyebrow: string; title: string; items: UseCase[] };
  mods: { eyebrow: string; title: string; note: string; items: Modification[] };
  steps: { eyebrow: string; title: string; items: Step[] };
  delivery: { eyebrow: string; title: string; zones: string; elsewhere: string; requirements: string };
  testimonial: { eyebrow: string; title: string; quote: string; author: string; role: string; rating: string };
  faq: { eyebrow: string; title: string; items: Faq[] };
  contact: { title: string; body: string; phone: string; hours: string[] };
  containers: Container[];
};

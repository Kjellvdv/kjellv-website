// One accent per category, used by BlogCard, the blog index filters, the
// category archives and the post header so the whole site agrees.
// Brand distribution is roughly 70% neutral / 20% coral / 10% saffron, so
// coral carries the biggest category and saffron the second.

export interface CategoryStyle {
  /** Small pill on cards and post headers. */
  badge: string;
  /** Top edge on a card, revealed properly on hover. */
  bar: string;
  /** Filter pill when active. */
  active: string;
  /** Hover border on cards. */
  border: string;
  hex: string;
}

export const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  Marketing: {
    badge: 'bg-coral/10 text-coral',
    bar: 'bg-coral',
    active: 'bg-coral text-white border-coral',
    border: 'hover:border-coral/50',
    hex: '#d76262',
  },
  Writing: {
    badge: 'bg-saffron/15 text-amber-700',
    bar: 'bg-saffron',
    active: 'bg-saffron text-white border-saffron',
    border: 'hover:border-saffron/60',
    hex: '#f59e0b',
  },
  Personal: {
    badge: 'bg-sage/20 text-sage-deep',
    bar: 'bg-sage',
    active: 'bg-sage-deep text-white border-sage-deep',
    border: 'hover:border-sage/50',
    hex: '#8a9b76',
  },
  AI: {
    badge: 'bg-text-main/10 text-text-main',
    bar: 'bg-text-main',
    active: 'bg-text-main text-white border-text-main',
    border: 'hover:border-text-main/40',
    hex: '#2b2b2b',
  },
};

export const FALLBACK_STYLE: CategoryStyle = {
  badge: 'bg-bg-secondary text-text-secondary',
  bar: 'bg-divider',
  active: 'bg-text-main text-white border-text-main',
  border: 'hover:border-divider',
  hex: '#6b6763',
};

export const styleFor = (category: string): CategoryStyle =>
  CATEGORY_STYLES[category] ?? FALLBACK_STYLE;

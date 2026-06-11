// ─── SEO Configuration ───────────────────────────────────────────────────────
// Global constants injected on every page via useSEO hook

export const SEO_GLOBAL = {
  ogType:      'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@BusinessWealthKey',
  siteName:    'Business Wealth Key',
  baseUrl:     'https://businesswealthkey.com',
}

// Per-page metadata — canonical URLs use no trailing slash except root /
export const seoConfig = {
  '/': {
    title:       'Business Wealth Key | Psychic Business Consultations & Prosperity Rituals',
    description: 'Psychic consultations, prosperity rituals, financial blockage removal and wealth activation. For entrepreneurs, executives and corporations worldwide.',
    keywords:    'psychic business consultant, prosperity rituals, wealth activation, financial blockage removal, business breakthrough, spiritual business guidance',
    ogImage:     '/og/og-home.jpg',
    canonical:   'https://businesswealthkey.com/',
  },
  '/about': {
    title:       'About Us | Business Wealth Key — Spiritual Business Guidance',
    description: 'Learn about Business Wealth Key — helping entrepreneurs, executives and corporations achieve lasting prosperity through authentic spiritual guidance worldwide.',
    keywords:    'about business wealth key, spiritual business guidance, prosperity consultant',
    ogImage:     '/og/og-about.jpg',
    canonical:   'https://businesswealthkey.com/about',
  },
  '/services': {
    title:       'Our Services | Psychic Consultations, Rituals & Wealth Activation',
    description: 'Psychic consultations, prosperity rituals, financial blockage removal, wealth activation and business breakthrough solutions for entrepreneurs worldwide.',
    keywords:    'spiritual business services, psychic consultations, prosperity rituals, wealth activation',
    ogImage:     '/og/og-services.jpg',
    canonical:   'https://businesswealthkey.com/services',
  },
  '/services/psychic-consultations': {
    title:       'Psychic Business Consultations | Business Wealth Key',
    description: 'Book a private psychic business consultation with an experienced spiritual medium. Online psychic readings for entrepreneurs and executives worldwide.',
    keywords:    'psychic business consultation, business psychic reading, business clarity, spiritual business advice',
    ogImage:     '/og/og-psychic-consultations.jpg',
    canonical:   'https://businesswealthkey.com/services/psychic-consultations',
  },
  '/services/prosperity-rituals': {
    title:       'Ritual for Business Success & Luck | Business Wealth Key',
    description: 'Powerful prosperity rituals for business success & luck. Remove spiritual & financial blockages. For entrepreneurs, executives, & corporations worldwide.',
    keywords:    'ritual for business success, luck rituals for business, good luck rituals for business, business rituals, spiritual blockage removal, financial blockage removal, remove spiritual blockages, business prosperity ritual',
    ogImage:     '/og/og-prosperity-rituals.jpg',
    canonical:   'https://businesswealthkey.com/services/prosperity-rituals',
  },
  '/services/financial-blockage': {
    title:       'Financial Blockage Removal | Restore Prosperity & Growth',
    description: 'Identify and remove financial blockages holding your business back. Restore financial flow, overcome recurring setbacks, and pursue greater prosperity.',
    keywords:    'financial blockage removal, remove financial obstacles, restore prosperity, financial flow',
    ogImage:     '/og/og-financial-blockage.jpg',
    canonical:   'https://businesswealthkey.com/services/financial-blockage',
  },
  '/services/wealth-activation': {
    title:       'Wealth Activation Services | Strengthen Prosperity & Growth',
    description: 'Activate your wealth consciousness and strengthen your path to long-term financial prosperity. For entrepreneurs, investors, executives and corporations.',
    keywords:    'wealth activation, wealth consciousness, prosperity activation, financial abundance',
    ogImage:     '/og/og-wealth-activation.jpg',
    canonical:   'https://businesswealthkey.com/services/wealth-activation',
  },
  '/services/business-breakthrough': {
    title:       'Business Breakthrough Solutions | Overcome Stagnation',
    description: 'Overcome business stagnation, unlock new opportunities, and accelerate growth with tailored business breakthrough solutions and spiritual guidance.',
    keywords:    'business breakthrough, overcome business stagnation, business growth solutions, unlock opportunities',
    ogImage:     '/og/og-business-breakthrough.jpg',
    canonical:   'https://businesswealthkey.com/services/business-breakthrough',
  },
  '/services/corporate-solutions': {
    title:       'Corporate Spiritual Solutions | Executive Prosperity',
    description: 'Spiritual guidance for corporations, executives and directors. Corporate prosperity programmes, executive success support and organisational growth solutions.',
    keywords:    'corporate spiritual solutions, executive prosperity, corporate wealth activation, business prosperity program',
    ogImage:     '/og/og-corporate-solutions.jpg',
    canonical:   'https://businesswealthkey.com/services/corporate-solutions',
  },
  '/contact': {
    title:       'Contact Business Wealth Key | Book a Private Consultation',
    description: 'Book a private consultation with Business Wealth Key. Serving clients worldwide. Begin your journey toward prosperity, business growth and financial success.',
    keywords:    'book psychic business consultation, contact business wealth key, private consultation',
    ogImage:     '/og/og-contact.jpg',
    canonical:   'https://businesswealthkey.com/contact',
  },
}

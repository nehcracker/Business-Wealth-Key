// ─── Services Data ────────────────────────────────────────────────────────────
import { IconEye, IconFlame, IconCompass, IconCrown, IconBolt, IconGlobe } from '../assets/icons'

export const services = [
  {
    id:          'psychic-consultations',
    slug:        '/services/psychic-consultations',
    title:       'Psychic Business Consultations',
    shortDesc:   'Gain insight into business challenges, opportunities, partnerships, and your path to prosperity through a personalised psychic business consultation.',
    icon:        <IconEye />,
    heroImage:   'psychic-consultations.webp',
    ogImage:     '/og/og-psychic-consultations.jpg',
    heroTitle:   'Gain Insight. Identify Opportunities. Strengthen Your Path to Success.',
    heroSubtitle:'Every business decision shapes the future of your company. Gain the insight you need to move forward with confidence.',
  },
  {
    id:          'prosperity-rituals',
    slug:        '/services/prosperity-rituals',
    title:       'Business Prosperity Rituals',
    shortDesc:   'Activate prosperity, attract opportunities, and support business growth through powerful, personalised prosperity rituals for individuals and corporations.',
    icon:        <IconFlame />,
    heroImage:   'prosperity-rituals.webp',
    ogImage:     '/og/og-prosperity-rituals.jpg',
    heroTitle:   'Activate Prosperity. Attract Opportunities. Support Business Growth.',
    heroSubtitle:'Harness the power of spiritual rituals to align your business with abundance and lasting prosperity.',
  },
  {
    id:          'financial-blockage',
    slug:        '/services/financial-blockage',
    title:       'Financial Blockage Removal',
    shortDesc:   'Identify and remove the hidden financial blockages holding your business back. Restore financial flow and pursue the prosperity you deserve.',
    icon:        <IconCompass />,
    heroImage:   'financial-blockage.webp',
    ogImage:     '/og/og-financial-blockage.jpg',
    heroTitle:   'Restore Financial Flow. Remove Obstacles. Pursue Greater Prosperity.',
    heroSubtitle:'Many businesses experience recurring financial challenges despite consistent effort. The root cause may lie deeper than strategy alone.',
  },
  {
    id:          'wealth-activation',
    slug:        '/services/wealth-activation',
    title:       'Wealth Activation Services',
    shortDesc:   'Activate your wealth consciousness, strengthen your prosperity mindset, and align your business with long-term financial growth and abundance.',
    icon:        <IconCrown />,
    heroImage:   'wealth-activation.webp',
    ogImage:     '/og/og-wealth-activation.jpg',
    heroTitle:   'Activate Prosperity. Expand Abundance. Strengthen Your Wealth Path.',
    heroSubtitle:'For individuals and organisations seeking greater prosperity and long-term wealth development.',
  },
  {
    id:          'business-breakthrough',
    slug:        '/services/business-breakthrough',
    title:       'Business Breakthrough Solutions',
    shortDesc:   'Overcome business stagnation, unlock new opportunities, and accelerate growth with tailored breakthrough solutions guided by spiritual insight.',
    icon:        <IconBolt />,
    heroImage:   'business-breakthrough.webp',
    ogImage:     '/og/og-business-breakthrough.jpg',
    heroTitle:   'Overcome Stagnation. Unlock Opportunities. Accelerate Business Growth.',
    heroSubtitle:'For businesses facing stagnation, missed opportunities, declining revenue, or recurring setbacks.',
  },
  {
    id:          'corporate-solutions',
    slug:        '/services/corporate-solutions',
    title:       'Corporate Spiritual Solutions',
    shortDesc:   'Tailored spiritual guidance for corporations, executives, directors, and investors. Drive organisational growth, prosperity, and leadership success.',
    icon:        <IconGlobe />,
    heroImage:   'corporate-solutions.webp',
    ogImage:     '/og/og-corporate-solutions.jpg',
    heroTitle:   'Spiritual Guidance for Corporate Growth, Prosperity, Leadership, and Organisational Success.',
    heroSubtitle:'Tailored services for corporations, executives, directors, investors, and organisational leaders.',
  },
]

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug) || null

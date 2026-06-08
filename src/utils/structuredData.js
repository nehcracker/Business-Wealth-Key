// ─── Structured Data — JSON-LD Generators ────────────────────────────────────
// Called by page components. Pass result to <script type="application/ld+json">
// via useSEO or directly in a Helmet script tag.

const BASE_URL = 'https://businesswealthkey.com'

// Service page JSON-LD
export function generateServiceSchema({ name, description, slug }) {
  return {
    '@context':    'https://schema.org',
    '@type':       'Service',
    name,
    description,
    url:           `${BASE_URL}${slug}`,
    provider: {
      '@type': 'Organization',
      name:    'Business Wealth Key',
      url:     BASE_URL,
    },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type':           'ServiceChannel',
      serviceUrl:        `${BASE_URL}/contact`,
      availableLanguage: 'English',
    },
  }
}

// FAQ page JSON-LD — accepts array of {question, answer}
export function generateFAQSchema(faqs) {
  return {
    '@context':  'https://schema.org',
    '@type':     'FAQPage',
    mainEntity:  faqs.map(({ question, answer }) => ({
      '@type':        'Question',
      name:           question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    answer,
      },
    })),
  }
}

// Breadcrumb JSON-LD for service pages
// items = [{name, slug}] — e.g. [{name:'Home',slug:'/'},{name:'Services',slug:'/services'},{name:'Psychic Consultations',slug:'/services/psychic-consultations'}]
export function generateBreadcrumbSchema(items) {
  return {
    '@context':        'https://schema.org',
    '@type':           'BreadcrumbList',
    itemListElement:   items.map(({ name, slug }, index) => ({
      '@type':   'ListItem',
      position:  index + 1,
      name,
      item:      `${BASE_URL}${slug}`,
    })),
  }
}

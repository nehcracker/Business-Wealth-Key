import { Helmet } from 'react-helmet-async'
import { seoConfig, SEO_GLOBAL } from '../utils/seoConfig'

// Injects per-page meta tags via react-helmet-async (v1.3.0)
// Usage: const seoHelmet = useSEO('/about')  then render {seoHelmet} in JSX
export function useSEO(route, overrides = {}) {
  const cfg = { ...(seoConfig[route] || {}), ...overrides }

  return (
    <Helmet>
      {/* Primary */}
      <title>{cfg.title}</title>
      <meta name="description" content={cfg.description} />
      {cfg.keywords && <meta name="keywords" content={cfg.keywords} />}
      <link rel="canonical" href={cfg.canonical} />

      {/* Open Graph */}
      <meta property="og:type"        content={SEO_GLOBAL.ogType} />
      <meta property="og:site_name"   content={SEO_GLOBAL.siteName} />
      <meta property="og:title"       content={cfg.title} />
      <meta property="og:description" content={cfg.description} />
      <meta property="og:url"         content={cfg.canonical} />
      {cfg.ogImage && (
        <meta property="og:image" content={`${SEO_GLOBAL.baseUrl}${cfg.ogImage}`} />
      )}

      {/* Twitter / X */}
      <meta name="twitter:card"        content={SEO_GLOBAL.twitterCard} />
      <meta name="twitter:site"        content={SEO_GLOBAL.twitterSite} />
      <meta name="twitter:title"       content={cfg.title} />
      <meta name="twitter:description" content={cfg.description} />
      {cfg.ogImage && (
        <meta name="twitter:image" content={`${SEO_GLOBAL.baseUrl}${cfg.ogImage}`} />
      )}
    </Helmet>
  )
}

import Button from '../Button/Button'
import './HeroSection.css'

/**
 * HeroSection
 * @param {string} image         - image src (from assets/images/hero/)
 * @param {string} title         - H1 text
 * @param {string} subtitle      - supporting paragraph
 * @param {object} ctaPrimary    - { label, href }
 * @param {object} ctaSecondary  - { label, href } optional
 * @param {number} overlay       - darkness 0–1, default 0.65
 * @param {string} align         - 'center' | 'left'
 * @param {boolean} eager        - loading="eager" + fetchpriority="high" (Home only)
 * @param {node}   children      - optional extra content below CTAs
 */
export default function HeroSection({
  image,
  imageSources = [],
  imageAlt = '',
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  overlay       = 0.65,
  align         = 'center',
  eager         = false,
  children,
}) {
  return (
    <section
      className={['hero', `hero--align-${align}`].join(' ')}
      aria-label={title}
    >
      {/* Responsive background image */}
      {(imageSources.length > 0 || image) && (
        <picture className="hero__picture">
          {imageSources.map((source, index) => (
            <source
              key={index}
              srcSet={source.srcSet}
              media={source.media}
              type={source.type}
              sizes={source.sizes}
            />
          ))}
          <img
            src={image}
            alt={imageAlt}
            aria-hidden={imageAlt ? 'false' : 'true'}
            className="hero__bg"
            loading={eager ? 'eager' : 'lazy'}
            fetchpriority={eager ? 'high' : undefined}
            decoding="async"
          />
        </picture>
      )}

      {/* Gradient overlays — multi-layer for depth */}
      <div
        className="hero__overlay"
        style={{ '--overlay-opacity': overlay }}
        aria-hidden="true"
      />
      <div className="hero__overlay-bottom" aria-hidden="true" />

      {/* Decorative grain texture */}
      <div className="hero__grain" aria-hidden="true" />

      {/* Content */}
      <div className="hero__inner">
        <div className="hero__content">

          {/* Eyebrow label */}
          <p className="hero__eyebrow" aria-hidden="true">
            <span className="hero__eyebrow-line" />
            Business Wealth Key
            <span className="hero__eyebrow-line" />
          </p>

          <h1 className="hero__title">{title}</h1>

          {subtitle && (
            <p className="hero__subtitle">{subtitle}</p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <div className="hero__actions">
              {ctaPrimary && (
                <Button
                  variant="primary"
                  size="lg"
                  href={ctaPrimary.href}
                  accentVariant="amethyst"
                >
                  {ctaPrimary.label}
                </Button>
              )}
              {ctaSecondary && (
                <Button
                  variant="ghost"
                  size="lg"
                  href={ctaSecondary.href}
                  accentVariant="amethyst"
                >
                  {ctaSecondary.label}
                </Button>
              )}
            </div>
          )}

          {children}
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="hero__fade" aria-hidden="true" />
    </section>
  )
}

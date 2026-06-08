import Button from '../Button/Button'
import './CTABanner.css'

/**
 * CTABanner
 * @param {string} heading
 * @param {string} subtext       optional
 * @param {object} ctaPrimary    { label, href }
 * @param {object} ctaSecondary  { label, href } optional
 * @param {string} variant       'dark' | 'amethyst'
 */
export default function CTABanner({
  heading,
  subtext,
  ctaPrimary,
  ctaSecondary,
  variant = 'dark',
}) {
  const isAmethyst = variant === 'amethyst'

  return (
    <section className={['cta-banner', `cta-banner--${variant}`].join(' ')}>
      {/* Decorative background elements */}
      <span className="cta-banner__orb cta-banner__orb--left"  aria-hidden="true" />
      <span className="cta-banner__orb cta-banner__orb--right" aria-hidden="true" />

      <div className="cta-banner__inner">
        <div className="cta-banner__text">
          <h2 className="cta-banner__heading">{heading}</h2>
          {subtext && <p className="cta-banner__subtext">{subtext}</p>}
        </div>

        <div className="cta-banner__actions">
          {ctaPrimary && (
            <Button
              variant="primary"
              size="lg"
              href={ctaPrimary.href}
              accentVariant={isAmethyst ? 'ember' : 'amethyst'}
            >
              {ctaPrimary.label}
            </Button>
          )}
          {ctaSecondary && (
            <Button
              variant="ghost"
              size="lg"
              href={ctaSecondary.href}
              accentVariant={isAmethyst ? 'ember' : 'amethyst'}
            >
              {ctaSecondary.label}
            </Button>
          )}
        </div>
      </div>

      {/* Bottom border accent */}
      <span className="cta-banner__border" aria-hidden="true" />
    </section>
  )
}

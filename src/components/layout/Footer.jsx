import { Link, NavLink } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/images/brand/logo.png'

const SERVICE_LINKS = [
  { label: 'Psychic Consultations',   href: '/services/psychic-consultations' },
  { label: 'Prosperity Rituals',       href: '/services/prosperity-rituals' },
  { label: 'Financial Blockage Removal', href: '/services/financial-blockage' },
  { label: 'Wealth Activation',        href: '/services/wealth-activation' },
  { label: 'Business Breakthrough',    href: '/services/business-breakthrough' },
  { label: 'Corporate Solutions',      href: '/services/corporate-solutions' },
]

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact',  href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">

      {/* Divider line at top */}
      <div className="footer__top-border" aria-hidden="true" />

      <div className="footer__inner">

        {/* ── Brand column ── */}
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="Business Wealth Key home">
            <img src={logo} alt="Business Wealth Key" className="footer__logo-img" />
            <span className="footer__logo-text">
              <span className="footer__logo-top">Business</span>
              <span className="footer__logo-bottom">Wealth Key</span>
            </span>
          </a>

          <p className="footer__tagline">
            Unlock Prosperity.<br />
            Activate Success.<br />
            Pursue Greater Wealth.
          </p>

          <p className="footer__global">
            Serving clients worldwide. Online consultations available across all time zones.
          </p>

          <a
            href="mailto:info@businesswealthkey.com"
            className="footer__email"
            aria-label="Send email to Business Wealth Key"
          >
            info@businesswealthkey.com
          </a>
        </div>

        {/* ── Services column ── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">Our Services</h3>
          <ul className="footer__list" role="list">
            {SERVICE_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NavLink to={href} className="footer__link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Navigation column ── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">Navigate</h3>
          <ul className="footer__list" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <NavLink to={href} end={href === '/'} className="footer__link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="footer__consult">
            <h3 className="footer__col-heading" style={{ marginTop: 'var(--space-8)' }}>
              Private Consultation
            </h3>
            <p className="footer__consult-text">
              Begin your journey toward prosperity and business success.
            </p>
            <Link to="/contact#consultation-form" className="footer__cta">
              Book Consultation
            </Link>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; {year} Business Wealth Key. All rights reserved.
        </p>
        <p className="footer__confidential">
          All consultations are conducted in strict confidence.
        </p>
      </div>

      {/* Decorative ambient glow */}
      <div className="footer__glow" aria-hidden="true" />
    </footer>
  )
}

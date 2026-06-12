import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useNavScroll } from '../../hooks/useNavScroll'
import './Navbar.css'
import logo from '../../assets/images/brand/logo.png'

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled               = useNavScroll(60)
  const location                 = useLocation()
  const menuRef                  = useRef(null)
  const hamburgerRef             = useRef(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header
      className={[
        'navbar',
        isScrolled ? 'navbar--scrolled'   : '',
        menuOpen   ? 'navbar--menu-open'   : '',
      ].filter(Boolean).join(' ')}
      role="banner"
    >
      <div className="navbar__inner">

        {/* ── Logo ── */}
        <a href="/" className="navbar__logo" aria-label="Business Wealth Key home">
          <img src={logo} alt="Business Wealth Key" className="navbar__logo-img" />
          <span className="navbar__logo-text" aria-hidden="true">
            <span className="navbar__logo-top">Business</span>
            <span className="navbar__logo-bottom">Wealth Key</span>
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__list" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="navbar__item">
                <NavLink
                  to={href}
                  end={href === '/'}
                  className={({ isActive }) =>
                    ['navbar__link', isActive ? 'navbar__link--active' : ''].filter(Boolean).join(' ')
                  }
                >
                  {({ isActive }) => (
                    <span aria-current={isActive ? 'page' : undefined}>{label}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop CTA ── */}
        <Link to="/contact#consultation-form" className="navbar__cta" aria-label="Book a private consultation">
          Book Consultation
        </Link>

        {/* ── Hamburger ── */}
        <button
          type="button"
          ref={hamburgerRef}
          className={['navbar__hamburger', menuOpen ? 'navbar__hamburger--open' : ''].filter(Boolean).join(' ')}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </div>

      {/* ── Mobile menu overlay ── */}
      <div
        id="mobile-nav"
        ref={menuRef}
        className={['navbar__mobile', menuOpen ? 'navbar__mobile--open' : ''].filter(Boolean).join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-list" role="list">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li
                key={href}
                className="navbar__mobile-item"
                style={{ '--i': i }}
              >
                <NavLink
                  to={href}
                  end={href === '/'}
                  className={({ isActive }) =>
                    ['navbar__mobile-link', isActive ? 'navbar__mobile-link--active' : ''].filter(Boolean).join(' ')
                  }
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {({ isActive }) => (
                    <span aria-current={isActive ? 'page' : undefined}>{label}</span>
                  )}
                </NavLink>
              </li>
            ))}
            <li
              className="navbar__mobile-item navbar__mobile-item--cta"
              style={{ '--i': NAV_LINKS.length }}
            >
              <Link
                to="/contact#consultation-form"
                className="navbar__mobile-cta"
                tabIndex={menuOpen ? 0 : -1}
              >
                Book Consultation
              </Link>
            </li>
          </ul>
        </nav>

        {/* Decorative crystal icon */}
        <div className="navbar__mobile-deco" aria-hidden="true">⬡</div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

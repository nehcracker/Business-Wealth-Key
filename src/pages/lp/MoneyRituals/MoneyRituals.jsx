import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './MoneyRituals.css'

/* Alchemical floating gems — deterministic positions */
const GEMS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  style: {
    '--gem-size':    `${6 + (i % 4) * 5}px`,
    '--gem-opacity': `${(0.12 + (i % 5) * 0.055).toFixed(2)}`,
    '--gem-dur':     `${7 + (i % 6) * 1.8}s`,
    '--gem-delay':   `${(i * 0.65 % 6).toFixed(1)}s`,
    '--gem-travel':  `-${14 + (i % 4) * 9}px`,
    top:  `${(Math.sin(i * 2.4) * 0.5 + 0.5) * 86 + 4}%`,
    left: `${(Math.sin(i * 1.85) * 0.5 + 0.5) * 88 + 2}%`,
  },
}))

/* Deterministic pseudo-random particles — avoids Math.random() re-seeding on re-render */
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  style: {
    '--p-x':       `${((Math.sin(i * 1.6180) * 0.5 + 0.5) * 100).toFixed(1)}%`,
    '--p-delay':   `${(i * 0.37 % 8).toFixed(2)}s`,
    '--p-dur':     `${(6 + (i % 6) * 1.2).toFixed(2)}s`,
    '--p-size':    `${(1 + (i % 3) * 0.9).toFixed(1)}px`,
    '--p-opacity': `${(0.18 + (i % 5) * 0.07).toFixed(2)}`,
  },
}))

const TRUST = [
  { icon: '◈', text: 'Sessions Available Worldwide' },
  { icon: '◈', text: 'Absolute Confidentiality' },
  { icon: '◈', text: 'Results-Focused Ritual Work' },
]

const BENEFITS = [
  {
    glyph: '⬡',
    title: 'Diagnose the Blockage',
    body:  'We identify the exact spiritual and energetic barriers preventing money from flowing freely into your life.',
  },
  {
    glyph: '⬡',
    title: 'Ritual Work Performed',
    body:  'Powerful, personalised money ritual work designed for your precise situation. Conducted privately, online.',
  },
  {
    glyph: '⬡',
    title: 'Abundance Activated',
    body:  'Your energetic alignment with wealth is restored. Financial channels open. Results follow.',
  },
]

const STEPS = [
  { num: '01', title: 'Book a Consultation',   body: 'Submit your private request. We respond within 24 hours.' },
  { num: '02', title: 'Spiritual Diagnosis',   body: 'We identify the nature and source of your financial blockage.' },
  { num: '03', title: 'Ritual Work Begins',    body: 'Personalised money ritual work conducted on your behalf.' },
  { num: '04', title: 'Abundance Returns',     body: 'Experience the energetic shift as financial flow is restored.' },
]

const FOR_WHOM = [
  'You work hard but financial results remain blocked or inconsistent',
  'You sense an invisible force preventing money from reaching you',
  'You have tried every conventional approach and know something deeper is needed',
  'You are ready to invest seriously in a permanent spiritual solution',
  'You require absolute privacy and discretion throughout the process',
  'You want personalised ritual work, not generic advice',
]

export default function LpMoneyRituals() {
  /* Scroll-reveal — adds .is-visible when sections enter viewport */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      document.querySelectorAll('.lp-reveal').forEach(el => el.classList.add('is-visible'))
      return
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.lp-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* 3D card tilt — mouse-tracked perspective tilt on benefit cards */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches) return

    const cards = document.querySelectorAll('.lp-card')
    const cleanup = []

    cards.forEach(card => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width  - 0.5) * 14
        const y = ((e.clientY - r.top)  / r.height - 0.5) * 14
        card.style.transform = `perspective(700px) rotateX(${(-y).toFixed(1)}deg) rotateY(${x.toFixed(1)}deg) translateZ(8px)`
        card.style.transition = 'transform 80ms linear, border-color 280ms ease, background 280ms ease, box-shadow 280ms ease'
      }
      const onLeave = () => {
        card.style.transform = ''
        card.style.transition = ''
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanup.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanup.forEach(fn => fn())
  }, [])

  return (
    <div className="lp">
      <Helmet>
        <title>Money Rituals — Business Wealth Key</title>
        <meta name="description" content="Professional money rituals to attract wealth and remove financial blockages. Private online sessions worldwide. Book a confidential consultation today." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="lp-hero" aria-label="Hero">

        {/* Floating particles */}
        <div className="lp-particles" aria-hidden="true">
          {PARTICLES.map(p => (
            <span key={p.id} className="lp-particle" style={p.style} />
          ))}
        </div>

        {/* CSS 3D Portal */}
        <div className="lp-portal-wrap" aria-hidden="true">
          <div className="lp-portal__bg-glow" />
          <div className="lp-portal__ring lp-portal__ring--1" />
          <div className="lp-portal__ring lp-portal__ring--2" />
          <div className="lp-portal__ring lp-portal__ring--3" />
          <div className="lp-portal__ring lp-portal__ring--4" />
          <div className="lp-portal__ring lp-portal__ring--5" />
          <div className="lp-portal__ring lp-portal__ring--6" />
          <div className="lp-portal__orb" />
        </div>

        {/* Hero content */}
        <div className="lp-hero__content">
          <p className="lp-hero__eyebrow">Business Wealth Key</p>
          <h1 className="lp-hero__h1">Money Rituals</h1>
          <p className="lp-hero__sub">
            Professional spiritual ritual work to attract wealth, remove financial
            blockages and restore abundance — conducted privately online, worldwide.
          </p>
          <Link to="/contact#consultation-form" className="lp-btn lp-btn--primary">
            Book a Private Consultation
            <span className="lp-btn__arrow" aria-hidden="true">→</span>
          </Link>
          <p className="lp-hero__note">By private appointment · Online · Worldwide · Confidential</p>
        </div>
      </section>

      {/* ── Trust strip ───────────────────────────────────────────────────── */}
      <div className="lp-trust lp-reveal">
        {TRUST.map(({ icon, text }) => (
          <div key={text} className="lp-trust__item">
            <span className="lp-trust__icon" aria-hidden="true">{icon}</span>
            <span className="lp-trust__text">{text}</span>
          </div>
        ))}
      </div>

      {/* ── Truth / Problem-Solution ──────────────────────────────────────── */}
      <section className="lp-section lp-section--truth lp-reveal" aria-label="About money rituals">

        {/* Sacred geometry mandala backdrop */}
        <div className="lp-truth-bg" aria-hidden="true">
          <svg className="lp-truth-mandala" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#D4A030">
            <circle cx="300" cy="300" r="293" strokeWidth="0.8"/>
            <circle cx="300" cy="300" r="242" strokeWidth="0.45"/>
            <circle cx="300" cy="300" r="172" strokeWidth="0.8"/>
            <circle cx="300" cy="300" r="96"  strokeWidth="0.55"/>
            <circle cx="300" cy="300" r="38"  strokeWidth="0.4"/>
            <circle cx="300" cy="128" r="172" strokeWidth="0.32"/>
            <circle cx="449" cy="214" r="172" strokeWidth="0.32"/>
            <circle cx="449" cy="386" r="172" strokeWidth="0.32"/>
            <circle cx="300" cy="472" r="172" strokeWidth="0.32"/>
            <circle cx="151" cy="386" r="172" strokeWidth="0.32"/>
            <circle cx="151" cy="214" r="172" strokeWidth="0.32"/>
            <polygon points="300,128 449,214 449,386 300,472 151,386 151,214" strokeWidth="0.65"/>
            <polygon points="300,128 449,386 151,386" strokeWidth="0.42"/>
            <polygon points="300,472 449,214 151,214" strokeWidth="0.42"/>
            <polygon points="300,214 375,257 375,343 300,386 225,343 225,257" strokeWidth="0.55"/>
            <circle cx="300" cy="300" r="16" strokeWidth="0.9"/>
            <circle cx="300" cy="300" r="5" fill="#D4A030" stroke="none" opacity="0.65"/>
          </svg>
        </div>

        {/* Floating alchemical gems */}
        <div className="lp-gems" aria-hidden="true">
          {GEMS.map(g => <span key={g.id} className="lp-gem" style={g.style} />)}
        </div>

        <div className="lp-section__inner">
          <p className="lp-eyebrow">The Hidden Truth</p>
          <h2 className="lp-h2">
            When Hard Work Alone Cannot<br className="lp-br--md" />
            Break the Pattern
          </h2>
          <p className="lp-body">
            Many people work tirelessly, apply every financial strategy available,
            and still find money consistently elusive. This is not a failure of
            effort or intelligence — it is a sign of a spiritual or energetic
            blockage that no spreadsheet or business plan can resolve.
          </p>
          <p className="lp-body">
            Money rituals are a time-honoured practice: a structured, intentional
            spiritual intervention that identifies the root cause of financial
            stagnation and removes it at its source. At Business Wealth Key, our
            practitioners provide private, professional money ritual consultations
            — personalised to your exact situation.
          </p>
          <Link to="/contact#consultation-form" className="lp-btn lp-btn--ghost">
            Begin Your Consultation
            <span className="lp-btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────────────── */}
      <section className="lp-section lp-section--alt lp-reveal" aria-label="What ritual work delivers">
        <div className="lp-section__inner">
          <p className="lp-eyebrow">Our Approach</p>
          <h2 className="lp-h2">What Our Ritual Work Delivers</h2>
          <div className="lp-cards">
            {BENEFITS.map(({ glyph, title, body }) => (
              <article key={title} className="lp-card">
                <span className="lp-card__glyph" aria-hidden="true">{glyph}</span>
                <h3 className="lp-card__title">{title}</h3>
                <p className="lp-card__body">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section className="lp-section lp-reveal" aria-label="How it works">
        <div className="lp-section__inner">
          <p className="lp-eyebrow">The Process</p>
          <h2 className="lp-h2">How It Works</h2>
          <div className="lp-steps">
            {STEPS.map(({ num, title, body }, i) => (
              <div key={num} className="lp-step lp-reveal">
                <span className="lp-step__num" aria-hidden="true">{num}</span>
                <div className="lp-step__content">
                  <h3 className="lp-step__title">{title}</h3>
                  <p className="lp-step__body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ──────────────────────────────────────────────────── */}
      <section className="lp-section lp-section--alt lp-reveal" aria-label="Who this service is for">
        <div className="lp-section__inner lp-for__inner">
          <div className="lp-for__header">
            <p className="lp-eyebrow">Is This For You?</p>
            <h2 className="lp-h2">This Service Is Right<br />For You If…</h2>
          </div>
          <ul className="lp-for__list" role="list">
            {FOR_WHOM.map(item => (
              <li key={item} className="lp-for__item">
                <span className="lp-for__diamond" aria-hidden="true">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="lp-final lp-reveal" aria-label="Book a consultation">
        <div className="lp-final__rings" aria-hidden="true">
          <div className="lp-final__ring lp-final__ring--1" />
          <div className="lp-final__ring lp-final__ring--2" />
          <div className="lp-final__ring lp-final__ring--3" />
        </div>
        <div className="lp-final__inner">
          <p className="lp-eyebrow lp-eyebrow--center">Private Consultation</p>
          <h2 className="lp-final__h2">
            Your Financial Transformation<br />
            Begins With One Conversation
          </h2>
          <p className="lp-final__sub">
            Submit your private consultation request today.
            All information is treated with absolute confidentiality.
          </p>
          <Link to="/contact#consultation-form" className="lp-btn lp-btn--primary lp-btn--large">
            Book Your Private Money Ritual Consultation
            <span className="lp-btn__arrow" aria-hidden="true">→</span>
          </Link>
          <p className="lp-final__note">
            By appointment only · All time zones · Strict confidentiality guaranteed
          </p>
        </div>
      </section>

      {/* ── Minimal footer ────────────────────────────────────────────────── */}
      <footer className="lp-footer" role="contentinfo">
        <nav aria-label="Footer navigation">
          <Link to="/" className="lp-footer__link">Business Wealth Key</Link>
          <span className="lp-footer__sep" aria-hidden="true">·</span>
          <Link to="/contact" className="lp-footer__link">Contact</Link>
          <span className="lp-footer__sep" aria-hidden="true">·</span>
          <Link to="/services" className="lp-footer__link">All Services</Link>
          <span className="lp-footer__sep" aria-hidden="true">·</span>
          <Link to="/services/prosperity-rituals" className="lp-footer__link">Prosperity Rituals</Link>
        </nav>
        <p className="lp-footer__copy">
          © {new Date().getFullYear()} Business Wealth Key. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

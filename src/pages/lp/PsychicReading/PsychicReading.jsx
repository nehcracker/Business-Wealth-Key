import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './PsychicReading.css'

/* ── Static data ─────────────────────────────────────────────────────────── */

/* Deterministic star field — 3 depth layers */
const STARS = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  layer: i % 3,
  style: {
    '--s-x':     `${((Math.sin(i * 2.618) * 0.5 + 0.5) * 100).toFixed(1)}%`,
    '--s-y':     `${((Math.cos(i * 1.414) * 0.5 + 0.5) * 100).toFixed(1)}%`,
    '--s-size':  `${(0.9 + (i % 4) * 0.6).toFixed(1)}px`,
    '--s-op':    `${(0.12 + (i % 7) * 0.09).toFixed(2)}`,
    '--s-dur':   `${(2.2 + (i % 6) * 0.7).toFixed(1)}s`,
    '--s-delay': `${(i * 0.41 % 7).toFixed(2)}s`,
  },
}))

/* Constellation stars + lines for truth section */
const CS = [
  {x:12,y:18,r:1.3},{x:30,y:7,r:1.6},{x:52,y:13,r:1.1},{x:74,y:5,r:1.5},{x:90,y:20,r:1.2},
  {x:96,y:45,r:1.4},{x:88,y:68,r:1.6},{x:72,y:86,r:1.1},{x:50,y:91,r:1.4},{x:28,y:83,r:1.3},
  {x:6,y:70,r:1.5}, {x:3,y:46,r:1.1},{x:14,y:32,r:1.3},{x:38,y:40,r:1.8},{x:62,y:36,r:1.2},
  {x:80,y:52,r:1.4},{x:54,y:60,r:1.6},{x:32,y:58,r:1.1},{x:70,y:74,r:1.3},{x:44,y:76,r:1.2},
]
const CL = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],
  [1,13],[2,14],[13,14],[13,17],[14,16],[16,15],[15,5],
  [17,19],[19,18],[16,18],[6,18],
]

const FLIP_CARDS = [
  {
    front: { icon: '◎', label: 'Love & Relationships' },
    back:  'We read the energetic bonds connecting you to others — revealing the true nature of a connection, its timing, and what is needed for lasting harmony.',
  },
  {
    front: { icon: '◆', label: 'Career & Purpose' },
    back:  'Your professional gifts, hidden obstacles, and the direction most aligned with your soul\'s purpose are all visible in the energetic field.',
  },
  {
    front: { icon: '⬡', label: 'Spiritual Path' },
    back:  'Past life imprints, spiritual contracts and soul-level lessons shape every aspect of your present life. A reading illuminates what logic cannot reach.',
  },
  {
    front: { icon: '◈', label: 'Life Challenges' },
    back:  'Recurring difficulties and repeating patterns all have a spiritual root. We identify it clearly — so you can finally move beyond it.',
  },
]

const READINGS = [
  {
    icon: '◎',
    title: 'Personal Life Reading',
    body:  'A deep exploration of your current path, personal challenges, and the energies surrounding your present circumstances.',
  },
  {
    icon: '◆',
    title: 'Relationship Reading',
    body:  'Clarity on romantic connections, family dynamics and meaningful relationships — past, present and what approaches.',
  },
  {
    icon: '⬡',
    title: 'Career & Business Reading',
    body:  'Spiritual guidance on your professional direction and the hidden forces influencing your work life and finances.',
  },
  {
    icon: '◈',
    title: 'Spiritual Path Reading',
    body:  'Insight into your soul\'s purpose, spiritual gifts and the deeper lessons your current life experience is designed to teach.',
  },
  {
    icon: '⬟',
    title: 'Future Path Reading',
    body:  'A forward-looking reading examining likely trajectories and the energetic influences shaping the months ahead.',
  },
]

const FOR_WHOM = [
  'You face an important decision and need clarity beyond rational analysis',
  'You sense a pattern in your life but cannot identify its spiritual source',
  'You have lost your sense of direction and need a trusted spiritual perspective',
  'You want to understand the deeper meaning behind current events in your life',
  'You seek confirmation of something you already know intuitively but cannot act on',
  'You require absolute privacy and complete discretion throughout the process',
]

const TRUST = [
  { icon: '◈', text: 'Sessions Available Worldwide' },
  { icon: '◈', text: 'Absolute Confidentiality' },
  { icon: '◈', text: 'Direct, Honest Spiritual Insight' },
]

/* ── Carousel offset → 3D transform ──────────────────────────────────────── */
function cardTransform(offset) {
  const a = Math.abs(offset)
  if (a === 0) return { transform: 'translateX(0) translateZ(180px) rotateY(0deg) scale(1)',          opacity: 1,    zIndex: 5 }
  if (a === 1) return { transform: `translateX(${offset*52}%) translateZ(30px) rotateY(${-offset*44}deg) scale(0.78)`, opacity: 0.68, zIndex: 4 }
  if (a === 2) return { transform: `translateX(${offset*72}%) translateZ(-50px) rotateY(${-offset*60}deg) scale(0.58)`, opacity: 0.38, zIndex: 3 }
  return              { transform: `translateX(${offset*85}%) translateZ(-110px) rotateY(${-offset*72}deg) scale(0.42)`, opacity: 0,    zIndex: 1 }
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function LpPsychicReading() {
  const [activeCard, setActiveCard] = useState(0)
  const [paused,     setPaused]     = useState(false)
  const [flipped,    setFlipped]    = useState({})

  /* Scroll reveal */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      document.querySelectorAll('.pr-reveal').forEach(el => el.classList.add('is-visible'))
      return
    }
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.pr-reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* Auto-advance carousel */
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActiveCard(p => (p + 1) % READINGS.length), 3800)
    return () => clearInterval(id)
  }, [paused])

  const toggleFlip = i => setFlipped(p => ({ ...p, [i]: !p[i] }))

  /* Normalise offset for circular wrapping */
  const getOffset = i => {
    const len = READINGS.length
    let off = ((i - activeCard) % len + len) % len
    if (off > Math.floor(len / 2)) off -= len
    return off
  }

  return (
    <div className="pr">
      <Helmet>
        <title>Online Psychic Reading — Business Wealth Key</title>
        <meta name="description" content="Professional online psychic reading by private appointment. Receive honest spiritual insight into love, career, life path and purpose — worldwide, fully confidential." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="pr-hero" aria-label="Hero">

        {/* Star field — 3 depth layers */}
        <div className="pr-stars" aria-hidden="true">
          {STARS.map(s => (
            <span key={s.id} className={`pr-star pr-star--${s.layer}`} style={s.style} />
          ))}
        </div>

        {/* Crystal ball */}
        <div className="pr-crystal-wrap" aria-hidden="true">
          <div className="pr-crystal-glow" />
          <div className="pr-crystal">
            <div className="pr-crystal__swirl" />
            <div className="pr-crystal__inner-glow" />
          </div>
          <div className="pr-crystal__pedestal" />
          <div className="pr-crystal__shadow" />
        </div>

        {/* Hero copy */}
        <div className="pr-hero__content">
          <p className="pr-eyebrow">Business Wealth Key</p>
          <h1 className="pr-hero__h1">Online<br />Psychic<br />Reading</h1>
          <p className="pr-hero__sub">
            Receive profound clarity on your life, relationships, career and
            spiritual path — from an experienced psychic reader, online,
            in complete confidence.
          </p>
          <Link to="/contact#consultation-form" className="pr-btn pr-btn--primary">
            Book Your Private Reading
            <span className="pr-btn__arrow" aria-hidden="true">→</span>
          </Link>
          <p className="pr-hero__note">Private · Online · All Time Zones · Confidential</p>
        </div>
      </section>

      {/* ── Trust strip ─────────────────────────────────────────────────────── */}
      <div className="pr-trust pr-reveal">
        {TRUST.map(({ icon, text }) => (
          <div key={text} className="pr-trust__item">
            <span className="pr-trust__icon" aria-hidden="true">{icon}</span>
            <span className="pr-trust__text">{text}</span>
          </div>
        ))}
      </div>

      {/* ── Truth section ───────────────────────────────────────────────────── */}
      <section className="pr-section pr-section--truth pr-reveal" aria-label="About psychic readings">

        {/* Constellation background */}
        <svg className="pr-constellation" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {CL.map(([a, b], i) => (
            <line
              key={i}
              x1={CS[a].x} y1={CS[a].y}
              x2={CS[b].x} y2={CS[b].y}
              stroke="rgba(123,63,228,0.18)"
              strokeWidth="0.14"
            />
          ))}
          {CS.map((star, i) => (
            <circle key={i} cx={star.x} cy={star.y} r={star.r} fill="#C4D0E8">
              <animate
                attributeName="opacity"
                values={`${(0.2 + (i%4)*0.12).toFixed(2)};${(0.7 + (i%3)*0.15).toFixed(2)};${(0.2 + (i%4)*0.12).toFixed(2)}`}
                dur={`${(2.1 + (i%5)*0.75).toFixed(1)}s`}
                begin={`${(i*0.32%5).toFixed(1)}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>

        <div className="pr-section__inner">
          <p className="pr-eyebrow">What Can Be Seen</p>
          <h2 className="pr-h2">
            Some Questions Cannot Be<br className="pr-br--md" />
            Answered by Logic Alone
          </h2>
          <p className="pr-body">
            There are moments when conventional wisdom, professional advice and rational
            analysis provide no meaningful clarity. A relationship, a career decision, a
            recurring pattern — these often have roots that extend beyond what the
            thinking mind can access.
          </p>
          <p className="pr-body">
            A professional psychic reading offers something fundamentally different: access
            to the energetic and spiritual dimensions of your situation. At Business Wealth
            Key, our readers provide clear, direct and deeply honest spiritual insight —
            personalised to your exact circumstances, conducted privately online.
          </p>
          <Link to="/contact#consultation-form" className="pr-btn pr-btn--ghost">
            Request a Reading
            <span className="pr-btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── 3D Flip Cards ───────────────────────────────────────────────────── */}
      <section className="pr-section pr-section--alt pr-reveal" aria-label="What the reading covers">
        <div className="pr-section__inner">
          <p className="pr-eyebrow">Areas We Read</p>
          <h2 className="pr-h2">What the Reading Reveals</h2>
          <p className="pr-section__sub">Tap each card to discover what we can see in each area of your life.</p>
          <div className="pr-flips">
            {FLIP_CARDS.map((card, i) => (
              <div
                key={i}
                className={`pr-flip${flipped[i] ? ' pr-flip--flipped' : ''}`}
                onClick={() => toggleFlip(i)}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleFlip(i)}
                tabIndex={0}
                role="button"
                aria-pressed={!!flipped[i]}
                aria-label={card.front.label}
              >
                <div className="pr-flip__inner">
                  <div className="pr-flip__front" aria-hidden={!!flipped[i]}>
                    <span className="pr-flip__icon" aria-hidden="true">{card.front.icon}</span>
                    <h3 className="pr-flip__label">{card.front.label}</h3>
                    <span className="pr-flip__hint" aria-hidden="true">tap to reveal</span>
                  </div>
                  <div className="pr-flip__back" aria-hidden={!flipped[i]}>
                    <p className="pr-flip__text">{card.back}</p>
                    <span className="pr-flip__back-hint" aria-hidden="true">tap to close</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D Coverflow Carousel ───────────────────────────────────────────── */}
      <section className="pr-section pr-reveal" aria-label="Types of readings available">
        <div className="pr-section__inner">
          <p className="pr-eyebrow">Reading Types</p>
          <h2 className="pr-h2">Choose Your Reading</h2>
        </div>
        <div
          className="pr-carousel-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="pr-carousel" role="region" aria-label="Reading types">
            {READINGS.map((reading, i) => {
              const offset = getOffset(i)
              const { transform, opacity, zIndex } = cardTransform(offset)
              return (
                <article
                  key={i}
                  className={`pr-carousel__card${offset === 0 ? ' pr-carousel__card--active' : ''}`}
                  style={{ transform, opacity, zIndex }}
                  onClick={() => setActiveCard(i)}
                  aria-hidden={offset !== 0}
                >
                  <span className="pr-carousel__icon" aria-hidden="true">{reading.icon}</span>
                  <h3 className="pr-carousel__title">{reading.title}</h3>
                  <p className="pr-carousel__body">{reading.body}</p>
                  {offset === 0 && (
                    <Link
                      to="/contact#consultation-form"
                      className="pr-btn pr-btn--primary pr-btn--sm"
                      onClick={e => e.stopPropagation()}
                    >
                      Book This Reading →
                    </Link>
                  )}
                </article>
              )
            })}
          </div>

          {/* Dot navigation */}
          <nav className="pr-carousel__dots" aria-label="Reading selector">
            {READINGS.map((r, i) => (
              <button
                key={i}
                className={`pr-carousel__dot${i === activeCard ? ' pr-carousel__dot--active' : ''}`}
                onClick={() => { setActiveCard(i); setPaused(true) }}
                aria-label={`Show ${r.title}`}
                aria-current={i === activeCard ? 'true' : undefined}
              />
            ))}
          </nav>
        </div>
      </section>

      {/* ── Who it's for ────────────────────────────────────────────────────── */}
      <section className="pr-section pr-section--alt pr-reveal" aria-label="Who this is for">
        <div className="pr-section__inner pr-for__inner">
          <div className="pr-for__header">
            <p className="pr-eyebrow">Is This For You?</p>
            <h2 className="pr-h2">This Reading Is Right<br />For You If…</h2>
          </div>
          <ul className="pr-for__list" role="list">
            {FOR_WHOM.map(item => (
              <li key={item} className="pr-for__item">
                <span className="pr-for__mark" aria-hidden="true">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────────── */}
      <section className="pr-final pr-reveal" aria-label="Book your reading">
        <div className="pr-final__rings" aria-hidden="true">
          <div className="pr-final__ring pr-final__ring--1" />
          <div className="pr-final__ring pr-final__ring--2" />
          <div className="pr-final__ring pr-final__ring--3" />
        </div>
        <div className="pr-final__inner">
          <p className="pr-eyebrow pr-eyebrow--center">Private Reading</p>
          <h2 className="pr-final__h2">
            Clarity Is One<br />Conversation Away
          </h2>
          <p className="pr-final__sub">
            Submit your private reading request today. We respond within 24 hours.
            All sessions are conducted with absolute confidentiality.
          </p>
          <Link to="/contact#consultation-form" className="pr-btn pr-btn--primary pr-btn--large">
            Book Your Online Psychic Reading
            <span className="pr-btn__arrow" aria-hidden="true">→</span>
          </Link>
          <p className="pr-final__note">
            By appointment only · All time zones · Strict confidentiality guaranteed
          </p>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="pr-footer" role="contentinfo">
        <nav aria-label="Footer navigation">
          <Link to="/" className="pr-footer__link">Business Wealth Key</Link>
          <span className="pr-footer__sep" aria-hidden="true">·</span>
          <Link to="/contact" className="pr-footer__link">Contact</Link>
          <span className="pr-footer__sep" aria-hidden="true">·</span>
          <Link to="/services" className="pr-footer__link">All Services</Link>
          <span className="pr-footer__sep" aria-hidden="true">·</span>
          <Link to="/services/psychic-consultations" className="pr-footer__link">Psychic Consultations</Link>
        </nav>
        <p className="pr-footer__copy">
          © {new Date().getFullYear()} Business Wealth Key. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

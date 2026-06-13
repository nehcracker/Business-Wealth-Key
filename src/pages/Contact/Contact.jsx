import { useSEO } from '../../hooks/useSEO'
import SectionWrapper from '../../components/common/SectionWrapper/SectionWrapper'
import CTABanner from '../../components/common/CTABanner/CTABanner'
import ConsultationForm from '../../components/common/ConsultationForm/ConsultationForm'
import ProblemList from '../../components/common/ProblemList/ProblemList'
import { services } from '../../utils/servicesData'
import { Link } from 'react-router-dom'
import './Contact.css'

const WHY_CONTACT = [
  'You are ready to address a persistent business challenge with a deeper level of insight',
  'You want genuine clarity on a major decision, not reassurance, but truth',
  'You believe something unseen is influencing your business results and you want it identified',
  'You are seeking spiritual guidance for a significant business transition or opportunity',
  'You represent a corporation that requires a confidential, high-level spiritual engagement',
  'You have explored conventional business advice and know that something more is needed',
  'You are ready to invest in your business prosperity with seriousness and commitment',
  'You want to work with advisors who will maintain absolute discretion about your goals',
  'You are prepared to take decisive action toward the success your business deserves',
  'You are ready to unlock the spiritual key to your wealth and business success',
]

/* Deterministic floating gold particles for the left panel */
const LEFT_PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  style: {
    left:          `${(Math.sin(i * 1.618) * 0.5 + 0.5) * 82 + 6}%`,
    bottom:        `${(Math.sin(i * 2.094) * 0.5 + 0.5) * 84 + 4}%`,
    '--p-dur':     `${(7 + (i % 5) * 1.6).toFixed(1)}s`,
    '--p-delay':   `${(i * 0.55 % 8).toFixed(1)}s`,
    '--p-size':    `${(1.2 + (i % 3) * 0.9).toFixed(1)}px`,
    '--p-opacity': `${(0.12 + (i % 4) * 0.065).toFixed(2)}`,
    '--p-travel':  `${18 + (i % 4) * 8}px`,
  },
}))

export default function Contact() {
  const seo = useSEO('/contact')

  return (
    <>
      {seo}

      {/* ── Split layout ── */}
      <div className="contact-split">

        {/* Left — Atmospheric panel */}
        <aside className="contact-split__left" aria-label="Contact information">

          {/* All decorative elements live in one clipped container */}
          <div className="contact-left__deco" aria-hidden="true">

            {/* Diagonal gold light rays from top-left */}
            <div className="contact-left__rays">
              <span className="contact-left__ray contact-left__ray--1" />
              <span className="contact-left__ray contact-left__ray--2" />
              <span className="contact-left__ray contact-left__ray--3" />
              <span className="contact-left__ray contact-left__ray--4" />
              <span className="contact-left__ray contact-left__ray--5" />
            </div>

            {/* Sacred geometry — slowly rotating hexagram */}
            <div className="contact-left__geo">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#D4A030">
                <circle cx="200" cy="200" r="192" strokeWidth="0.55"/>
                <circle cx="200" cy="200" r="148" strokeWidth="0.38"/>
                <circle cx="200" cy="200" r="96"  strokeWidth="0.48"/>
                <circle cx="200" cy="200" r="44"  strokeWidth="0.6"/>
                {/* Outer hexagon */}
                <polygon points="200,10 375,105 375,295 200,390 25,295 25,105" strokeWidth="0.52"/>
                {/* Star of David triangles */}
                <polygon points="200,10 375,295 25,295" strokeWidth="0.38"/>
                <polygon points="200,390 375,105 25,105" strokeWidth="0.38"/>
                {/* Inner hexagon */}
                <polygon points="200,105 288,152 288,248 200,295 112,248 112,152" strokeWidth="0.48"/>
                {/* Inner star */}
                <polygon points="200,105 288,248 112,248" strokeWidth="0.28"/>
                <polygon points="200,295 288,152 112,152" strokeWidth="0.28"/>
                {/* Center */}
                <circle cx="200" cy="200" r="8" fill="#D4A030" stroke="none" opacity="0.45"/>
              </svg>
            </div>

            {/* Floating gold dust particles */}
            <div className="contact-left__particles">
              {LEFT_PARTICLES.map(p => (
                <span key={p.id} className="contact-left__particle" style={p.style} />
              ))}
            </div>

          </div>

          {/* Floating glow orb */}
          <div className="contact-left__orb" aria-hidden="true" />
          <div className="contact-left__orb contact-left__orb--secondary" aria-hidden="true" />

          <div className="contact-left__inner">

            <p className="contact-left__eyebrow">Private Consultations</p>

            <h1 className="contact-left__heading">
              Begin<br />Your Journey
            </h1>

            <p className="contact-left__text">
              Every successful journey begins with a conversation.
              Submit your request and we will be in touch promptly,
              in complete confidence.
            </p>

            <div className="contact-left__rule" aria-hidden="true" />

            {/* Contact details */}
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail__label">General Enquiries</span>
                <a href="mailto:info@businesswealthkey.com" className="contact-detail__value">
                  info@businesswealthkey.com
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Consultation Requests</span>
                <a href="mailto:consultations@businesswealthkey.com" className="contact-detail__value">
                  consultations@businesswealthkey.com
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Availability</span>
                <span className="contact-detail__value">Online, All Time Zones Served</span>
              </div>
            </div>

            <div className="contact-left__rule" aria-hidden="true" />

            {/* Service quick-links */}
            <p className="contact-services__label">Enquire About a Specific Service</p>
            <ul className="contact-services-list" role="list">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} className="contact-service-link">
                    <span className="contact-service-link__icon" aria-hidden="true">{s.icon}</span>
                    <span>{s.title}</span>
                    <span className="contact-service-link__arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </aside>

        {/* Right — Form panel */}
        <main className="contact-split__right" id="consultation-form">

          {/* Ambient depth lighting behind the form */}
          <div className="contact-right__ambient" aria-hidden="true" />

          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <p className="contact-form-header__eyebrow">Consultation Request</p>
              <h2 className="contact-form-header__heading">Submit Your Private Enquiry</h2>

              {/* Decorative ornament replacing the plain divider */}
              <div className="contact-form-header__ornament" aria-hidden="true">
                <span className="contact-form-header__orn-line" />
                <span className="contact-form-header__orn-gem">◆</span>
                <span className="contact-form-header__orn-line contact-form-header__orn-line--right" />
              </div>

              <p className="contact-form-header__lead">
                Please complete the form below. Fields marked * are required.
                All information is held in the strictest confidence.
              </p>
            </div>
            <ConsultationForm />
          </div>
        </main>

      </div>

      {/* ── Who should contact ── */}
      <SectionWrapper background="alt">
        <ProblemList
          heading="Who Should Contact Business Wealth Key"
          items={WHY_CONTACT}
          icon="diamond"
          columns={2}
        />
      </SectionWrapper>

      <CTABanner
        heading="The Next Opportunity May Begin With One Conversation"
        subtext="Take the step. Submit your consultation request and begin your journey toward greater prosperity."
        ctaPrimary={{ label: 'Submit Your Enquiry', href: '#consultation-form' }}
        variant="dark"
      />
    </>
  )
}

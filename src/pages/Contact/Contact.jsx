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
  'You want genuine clarity on a major decision — not reassurance, but truth',
  'You believe something unseen is influencing your business results and you want it identified',
  'You are seeking spiritual guidance for a significant business transition or opportunity',
  'You represent a corporation that requires a confidential, high-level spiritual engagement',
  'You have explored conventional business advice and know that something more is needed',
  'You are ready to invest in your business prosperity with seriousness and commitment',
  'You want to work with advisors who will maintain absolute discretion about your goals',
  'You are prepared to take decisive action toward the success your business deserves',
  'You are ready to unlock the spiritual key to your wealth and business success',
]

export default function Contact() {
  const seo = useSEO('/contact')

  return (
    <>
      {seo}

      {/* ── Split layout ── */}
      <div className="contact-split">

        {/* Left — Atmospheric panel */}
        <aside className="contact-split__left" aria-label="Contact information">
          <div className="contact-left__orb" aria-hidden="true" />
          <div className="contact-left__inner">

            <p className="contact-left__eyebrow">Private Consultations</p>

            <h1 className="contact-left__heading">
              Begin<br />Your Journey
            </h1>

            <p className="contact-left__text">
              Every successful journey begins with a conversation.
              Submit your request and we will be in touch promptly —
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
                <span className="contact-detail__value">Online — All Time Zones Served</span>
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
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <p className="contact-form-header__eyebrow">Consultation Request</p>
              <h2 className="contact-form-header__heading">Submit Your Private Enquiry</h2>
              <div className="section-divider" />
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

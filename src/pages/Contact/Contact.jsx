import { useSEO } from '../../hooks/useSEO'
import HeroSection from '../../components/common/HeroSection/HeroSection'
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

      <HeroSection
        title="Begin Your Journey Toward Prosperity, Business Growth, and Financial Success"
        subtitle="Every successful journey begins with a conversation. Submit your consultation request and we will be in touch promptly — in complete confidence."
        ctaPrimary={{ label: 'Go to Consultation Form', href: '#consultation-form' }}
        align="center"
      />

      {/* ── Welcome + Service Quick-Links ── */}
      <SectionWrapper background="alt">
        <div className="contact-intro">
          <div className="contact-intro__text">
            <p className="page-eyebrow">Private Consultations</p>
            <h2 className="page-heading">Every Journey Begins With a Conversation</h2>
            <div className="section-divider" />
            <p>We serve clients worldwide via secure online consultations — entrepreneurs, executives, investors, and corporations seeking genuine spiritual business guidance.</p>
            <p>All enquiries are treated with absolute confidentiality. We respond to every request promptly and personally.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail__label">General Enquiries</span>
                <a href="mailto:info@businesswealthkey.com" className="contact-detail__value">info@businesswealthkey.com</a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Consultation Requests</span>
                <a href="mailto:consultations@businesswealthkey.com" className="contact-detail__value">consultations@businesswealthkey.com</a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Availability</span>
                <span className="contact-detail__value">Online — All Time Zones Served</span>
              </div>
            </div>
          </div>
          <div className="contact-intro__services">
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
        </div>
      </SectionWrapper>

      {/* ── Form ── */}
      <SectionWrapper background="default" id="consultation-form">
        <div className="contact-form-section">
          <div className="contact-form-section__header">
            <p className="page-eyebrow">Consultation Request</p>
            <h2 className="page-heading">Submit Your Private Enquiry</h2>
            <div className="section-divider" />
            <p className="page-lead">Please complete the form below. All fields marked with * are required. Your information is held in strict confidence.</p>
          </div>
          <ConsultationForm />
        </div>
      </SectionWrapper>

      {/* ── Why Contact ── */}
      <SectionWrapper background="alt">
        <ProblemList
          heading="Who Should Contact Business Wealth Key"
          items={WHY_CONTACT}
          icon="diamond"
          columns={2}
        />
      </SectionWrapper>

      {/* ── Confidentiality ── */}
      <SectionWrapper background="default" padding="tight">
        <div className="contact-confidentiality">
          <span className="contact-confidentiality__icon" aria-hidden="true">⬡</span>
          <div>
            <h2 className="page-heading" style={{ fontSize: 'var(--text-xl)' }}>Your Privacy Matters</h2>
            <p>All information submitted through this form — and every detail shared during your consultation — is treated with absolute confidentiality. We do not share, sell, or disclose client information to any third party under any circumstances. Your goals, challenges, and business details remain entirely private.</p>
          </div>
        </div>
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

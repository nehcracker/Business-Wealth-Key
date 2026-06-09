import { useSEO } from '../../hooks/useSEO'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/common/HeroSection/HeroSection'
import SectionWrapper from '../../components/common/SectionWrapper/SectionWrapper'
import CTABanner from '../../components/common/CTABanner/CTABanner'
import TrustBadges from '../../components/common/TrustBadges/TrustBadges'
import ProcessSteps from '../../components/common/ProcessSteps/ProcessSteps'
import ProblemList from '../../components/common/ProblemList/ProblemList'
import WhoWeServe from '../../components/common/WhoWeServe/WhoWeServe'
import FAQAccordion from '../../components/common/FAQAccordion/FAQAccordion'
import { faqData } from '../../utils/faqData'
import { processStepsData } from '../../utils/processStepsData'
import { generateBreadcrumbSchema } from '../../utils/structuredData'
import { IconShield, IconDiamond, IconCrown, IconGlobe, IconStar } from '../../assets/icons'
import heroImage from '../../assets/images/services/Psychic-Business-Consultations.png'
import './PsychicConsultations.css'

const WHO = [
  'Entrepreneurs', 'CEOs & Executives', 'Business Owners', 'Investors',
  'Corporations', 'Startups', 'Directors', 'Traders',
  'Real Estate Investors', 'Contractors', 'Professionals', 'Family Businesses',
]

const WHAT_WE_ASSESS = [
  { title: 'Business Growth Pathways',    desc: 'Identifying the fastest and most aligned routes to scaling your business.' },
  { title: 'Financial Opportunities',     desc: 'Uncovering hidden income streams, investment opportunities, and revenue potential.' },
  { title: 'Business Partnerships',       desc: 'Assessing the suitability and potential of existing or future partnerships.' },
  { title: 'Investor Alignment',          desc: 'Understanding which investors and funding routes align with your business energy.' },
  { title: 'Market Positioning',          desc: 'Gaining insight into competitive positioning and untapped market opportunities.' },
  { title: 'Leadership & Decision-Making',desc: 'Clarity on key decisions, leadership challenges, and organisational direction.' },
  { title: 'Long-Term Strategic Planning',desc: 'A broader view of the forces shaping your business destiny over the coming years.' },
  { title: 'Obstacle Identification',     desc: 'Identifying hidden blockages — spiritual, energetic, or relational — limiting your results.' },
]

const BENEFITS = [
  'Greater clarity on your most pressing business challenges and decisions',
  'Insight into hidden opportunities you may have been overlooking',
  'Improved confidence in your strategic direction and leadership',
  'Awareness of threats, risks, and obstacles before they manifest',
  'Guidance on partnerships, investors, and key business relationships',
  'A renewed sense of direction and purpose in your business journey',
]

const WHY_SEEK = [
  'Facing a major business decision with no clear path forward',
  'Experiencing recurring setbacks despite strong strategy and effort',
  'Sensing that hidden forces or blocked energy are influencing your results',
  'Struggling to identify why opportunities keep falling through',
  'Needing an honest, outside perspective that conventional advisors cannot provide',
]

const TRUST = [
  { icon: <IconShield size={28} />, title: 'Absolute Confidentiality', description: 'All session content is held in complete privacy. Nothing is shared with any third party.' },
  { icon: <IconDiamond size={28} />, title: 'Personalised to Your Business', description: 'Every consultation is built around your specific questions, situation, and goals.' },
  { icon: <IconCrown size={28} />, title: 'Deep Experience', description: 'Decades of experience providing genuine psychic insight to business leaders worldwide.' },
  { icon: <IconGlobe size={28} />, title: 'Available Worldwide', description: 'Online sessions available to clients in every country and time zone.' },
  { icon: <IconStar size={28} />, title: 'Trusted by Executives & CEOs', description: 'Business leaders trust us with their most sensitive goals and confidential strategies.' },
]

export default function PsychicConsultations() {
  const seo = useSEO('/services/psychic-consultations')
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', slug: '/' },
    { name: 'Services', slug: '/services' },
    { name: 'Psychic Consultations', slug: '/services/psychic-consultations' },
  ])

  return (
    <>
      {seo}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <HeroSection
        image={heroImage}
        imageAlt="Psychic Business Consultations — Business Wealth Key"
        title="Gain Insight. Identify Opportunities. Strengthen Your Path to Success."
        subtitle="Every business decision shapes the future of your company. A psychic business consultation provides the deeper clarity that strategy and analysis alone cannot offer."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        align="center"
      />

      <SectionWrapper background="alt">
        <div className="page-two-col">
          <div className="page-two-col__body">
            <p className="page-eyebrow">What Is This Service</p>
            <h2 className="page-heading">Psychic Business Consultations</h2>
            <div className="section-divider" />
            <p>A psychic business consultation is a private, personalised session in which we use spiritual insight and psychic perception to examine the hidden forces influencing your business — challenges you cannot fully explain, opportunities you may be missing, and the energetic landscape surrounding your next steps.</p>
            <p>Unlike conventional business advice, a psychic consultation reaches beyond what is visible — providing clarity on the root causes of obstacles, the nature of key relationships, and the most aligned path forward for your business.</p>
            <p>These sessions are designed for serious business people who want genuine insight, not reassurance. Every consultation is conducted in complete confidence.</p>
          </div>
          <div className="page-two-col__aside">
            <div className="page-highlight">
              <p>"Every business challenge has a visible dimension and a hidden one. Our consultations address both."</p>
            </div>
            <div className="page-info-box">
              <h3>Who This Is For</h3>
              <p>Entrepreneurs, executives, investors, and corporations facing important decisions, recurring obstacles, or an unexplained sense that something is working against their success.</p>
              <h3>How It Works</h3>
              <p>Sessions are conducted online. You share your key questions and challenges. We provide genuine psychic insight — clearly and directly.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <WhoWeServe items={WHO} heading="Who This Service Is For" variant="pill" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <div className="page-section-header page-section-header--center">
          <p className="page-eyebrow">Areas of Focus</p>
          <h2 className="page-heading">What We Assess in Your Consultation</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto' }} />
        </div>
        <div className="page-cards-grid">
          {WHAT_WE_ASSESS.map((item, i) => (
            <div key={i} className="page-card">
              <span className="page-card__title">{item.title}</span>
              <span className="page-card__desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProblemList
          heading="Benefits of a Psychic Business Consultation"
          items={BENEFITS}
          icon="check"
          columns={2}
        />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <ProblemList
          heading="Common Reasons Clients Seek This Service"
          items={WHY_SEEK}
          icon="diamond"
          columns={1}
        />
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProcessSteps
          heading="How Your Consultation Works"
          steps={processStepsData['psychic-consultations']}
          layout="horizontal"
        />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <TrustBadges heading="Why Choose Business Wealth Key" items={TRUST} columns={3} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <FAQAccordion items={faqData['psychic-consultations']} heading="Frequently Asked Questions" />
      </SectionWrapper>

      <CTABanner
        heading="Gain Greater Insight Into Your Business Future"
        subtext="Book a private psychic business consultation and take the first step toward the clarity your business needs."
        ctaPrimary={{ label: 'Book Your Consultation', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}

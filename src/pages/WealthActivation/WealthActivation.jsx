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
import { IconShield, IconCrown, IconStar, IconGlobe, IconDiamond } from '../../assets/icons'

const WHO = [
  'Entrepreneurs', 'Business Owners', 'CEOs & Executives', 'Investors',
  'Traders', 'Corporations', 'Startups', 'Directors',
  'Real Estate Investors', 'Professionals', 'Contractors', 'Family Businesses', 'High Net Worth Individuals',
]

const ACTIVATION_AREAS = [
  { title: 'Wealth Consciousness',      desc: 'Develop the internal beliefs, mindset, and spiritual alignment that attract lasting wealth.' },
  { title: 'Financial Prosperity',      desc: 'Activate the energetic conditions that support consistent financial growth and abundance.' },
  { title: 'Business Abundance',        desc: 'Align your business with the energetic frequency of expansion, opportunity, and success.' },
  { title: 'Investment Success',        desc: 'Strengthen the energetic foundation that guides sound investment decisions and returns.' },
  { title: 'Revenue Growth',            desc: 'Remove resistance to revenue growth and activate the pathways that increase business income.' },
  { title: 'Opportunity Attraction',    desc: 'Open your business to a greater flow of aligned opportunities, clients, and contracts.' },
  { title: 'Long-Term Prosperity',      desc: 'Build a sustained, protected prosperity field that supports wealth creation over the long term.' },
]

const BENEFITS = [
  'Activation of your natural wealth potential and prosperity consciousness',
  'Greater alignment between your efforts and financial outcomes',
  'Increased confidence in financial decisions and strategic direction',
  'A stronger, more resilient energetic foundation for your business',
  'Accelerated progress toward your financial goals and wealth targets',
  'Deeper awareness of opportunities aligned with your wealth path',
  'Reduced internal and external resistance to financial growth',
  'Protection of existing wealth against spiritual and energetic interference',
  'Long-term wealth patterns replacing cycles of feast and famine',
  'Corporate-level wealth activation available for entire organisations',
]

const WHY_SEEK = [
  'Financial progress feels slower than your capability and effort should produce',
  'You sense an invisible ceiling limiting how much wealth you can accumulate',
  'Past financial success has not been sustained or built upon as expected',
  'A desire to create a deeper, more permanent foundation for wealth creation',
  'Corporate need to improve the financial performance and prosperity of the organisation',
]

const TRUST = [
  { icon: <IconShield size={28} />, title: 'Complete Confidentiality',    description: 'All wealth activation work is conducted in absolute privacy.' },
  { icon: <IconCrown size={28} />, title: 'Authentic Practice',           description: 'Rooted in genuine spiritual tradition — not modern wellness trends.' },
  { icon: <IconStar size={28} />, title: 'Personalised Activation',       description: 'Every programme is built around your unique wealth profile and goals.' },
  { icon: <IconGlobe size={28} />, title: 'Serving Clients Globally',     description: 'Available worldwide via secure online delivery.' },
  { icon: <IconDiamond size={28} />, title: 'Corporate Programmes',       description: 'Bespoke wealth activation for organisations of every size.' },
]

export default function WealthActivation() {
  const seo = useSEO('/services/wealth-activation')
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', slug: '/' },
    { name: 'Services', slug: '/services' },
    { name: 'Wealth Activation', slug: '/services/wealth-activation' },
  ])

  return (
    <>
      {seo}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <HeroSection
        title="Activate Prosperity. Expand Abundance. Strengthen Your Wealth Path."
        subtitle="For individuals and organisations seeking to move beyond financial plateaus and build a lasting foundation for wealth creation and sustained prosperity."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        align="center"
      />

      <SectionWrapper background="alt">
        <div className="page-two-col">
          <div className="page-two-col__body">
            <p className="page-eyebrow">What This Service Offers</p>
            <h2 className="page-heading">Wealth Activation Services</h2>
            <div className="section-divider" />
            <p>Wealth activation is the process of identifying and energising the spiritual and energetic conditions that enable sustained financial growth. It addresses the invisible foundations of wealth — the consciousness, alignment, and energetic pathways through which financial abundance flows.</p>
            <p>Many individuals and businesses possess the capability for significant wealth creation, but are held back by invisible ceilings — spiritual conditions, prosperity consciousness limitations, or energetic misalignments that prevent their efforts from fully translating into financial results.</p>
            <p>Our wealth activation programmes identify these conditions, remove the barriers, and actively cultivate the spiritual foundations required for lasting prosperity and abundance at every level of your business and personal finances.</p>
          </div>
          <div className="page-two-col__aside">
            <div className="page-highlight">
              <p>"Wealth is not simply earned. It is activated — through the right alignment of energy, intention, and spiritual foundation."</p>
            </div>
            <div className="page-info-box">
              <h3>For Individuals & Corporations</h3>
              <p>We work with sole traders, high net worth individuals, and large corporations. Wealth activation is relevant at every scale of ambition.</p>
              <h3>Ongoing Programmes Available</h3>
              <p>Single activation sessions or sustained wealth development programmes — we design the approach that will create the most lasting results for your situation.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <WhoWeServe items={WHO} heading="Who This Service Is For" variant="pill" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <div className="page-section-header page-section-header--center">
          <p className="page-eyebrow">Focus Areas</p>
          <h2 className="page-heading">What We Activate</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto' }} />
        </div>
        <div className="page-cards-grid">
          {ACTIVATION_AREAS.map((item, i) => (
            <div key={i} className="page-card">
              <span className="page-card__title">{item.title}</span>
              <span className="page-card__desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProblemList heading="Benefits of Wealth Activation" items={BENEFITS} icon="star" columns={2} />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <ProblemList heading="Common Reasons Clients Seek Wealth Activation" items={WHY_SEEK} icon="diamond" columns={1} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProcessSteps heading="Your Wealth Activation Programme" steps={processStepsData['wealth-activation']} layout="horizontal" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <TrustBadges heading="Why Choose Business Wealth Key" items={TRUST} columns={3} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <FAQAccordion items={faqData['wealth-activation']} heading="Frequently Asked Questions" />
      </SectionWrapper>

      <CTABanner
        heading="Activate Your Path To Greater Prosperity"
        subtext="Take the first step toward unlocking your full wealth potential with a private consultation."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}

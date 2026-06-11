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
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '../../utils/structuredData'
import { IconShield, IconDiamond, IconCrown, IconGlobe, IconFlame } from '../../assets/icons'
import heroImage from '../../assets/images/services/Business-Prosperity-Rituals.jpg'
import './ProsperityRituals.css'

const WHO = [
  'Entrepreneurs', 'Business Owners', 'CEOs & Executives', 'Investors',
  'Traders', 'Corporations', 'Startups', 'Directors',
  'Real Estate Investors', 'Contractors', 'Professionals', 'Family Businesses',
]

const RITUAL_SERVICES = [
  { title: 'Spiritual & Financial Blockage Removal', desc: 'Identify and clear spiritual and financial blockages restricting your prosperity flow, revenue growth, and business success.' },
  { title: 'Wealth Attraction Rituals',       desc: 'Rituals designed to draw greater financial abundance and revenue to your business.' },
  { title: 'Prosperity Activation',           desc: 'Activate dormant prosperity energy within your business and personal wealth field.' },
  { title: 'Business Blessing Ceremonies',    desc: 'Spiritual ceremonies to bless your business, premises, and ventures for success.' },
  { title: 'Opportunity Attraction Rituals',  desc: 'Open energetic pathways to new clients, contracts, and business opportunities.' },
  { title: 'Partnership & Alliance Rituals',  desc: 'Strengthen the energetic foundations of important business relationships.' },
  { title: 'Revenue Growth Rituals',          desc: 'Targeted rituals focused on increasing revenue flow and financial performance.' },
  { title: 'Market Success Rituals',          desc: 'Align your business energy with market conditions to improve competitive positioning.' },
  { title: 'Investor Attraction Rituals',     desc: 'Create the energetic conditions that attract the right investors and funding sources.' },
]

const BENEFITS = [
  'A stronger energetic alignment between your business and prosperity',
  'Increased openness to new opportunities, clients, and revenue streams',
  'Reduced energetic resistance to financial growth and expansion',
  'Greater confidence and conviction in your business direction',
  'Improved attraction of aligned partnerships and business allies',
  'A renewed sense of momentum and positive forward movement',
  'Long-term prosperity consciousness supporting sustained growth',
  'Corporate-level results for organisations seeking systemic improvement',
  'Removal of stagnant energy blocking financial performance',
  'A deeper sense of alignment between your purpose and your prosperity',
]

const WHY_SEEK = [
  'Business performance has plateaued despite strong execution',
  'Financial growth feels blocked or restricted by unseen forces',
  'Opportunities consistently fail to materialise or follow through',
  'A sense that negative energy or interference is affecting results',
  'Desire to establish a strong prosperity foundation for a new venture',
  'Corporate need for systematic energetic improvement across departments',
  'Experiencing spiritual blockages you believe are suppressing financial performance',
  'Seeking financial blockage removal to restore natural prosperity flow',
]

const TRUST = [
  { icon: <IconShield size={28} />, title: 'Absolute Discretion',        description: 'All rituals are conducted privately. Your details are never shared.' },
  { icon: <IconFlame size={28} />, title: 'Genuine Ritual Practice',     description: 'Authentic, deeply-rooted spiritual ritual work — not performative ceremony.' },
  { icon: <IconCrown size={28} />, title: 'Personalised Programmes',     description: 'Every ritual is designed around your specific business goals and spiritual profile.' },
  { icon: <IconGlobe size={28} />, title: 'Available Worldwide',         description: 'Ritual services available to clients globally via secure online delivery.' },
  { icon: <IconDiamond size={28} />, title: 'Corporate Packages Available', description: 'Bespoke prosperity programmes for organisations of all sizes and sectors.' },
]

export default function ProsperityRituals() {
  const seo = useSEO('/services/prosperity-rituals')
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', slug: '/' },
    { name: 'Services', slug: '/services' },
    { name: 'Prosperity Rituals', slug: '/services/prosperity-rituals' },
  ])
  const serviceSchema = generateServiceSchema({
    name:        'Business Prosperity Rituals',
    description: 'Powerful prosperity rituals for business success and luck. Remove spiritual and financial blockages. For entrepreneurs, executives, and corporations worldwide.',
    slug:        '/services/prosperity-rituals',
  })
  const faqSchema = generateFAQSchema(faqData['prosperity-rituals'])

  return (
    <>
      {seo}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <HeroSection
        image={heroImage}
        imageAlt="Prosperity Rituals — Business Wealth Key"
        title="Rituals for Business Success, Luck & Prosperity"
        subtitle="Remove spiritual and financial blockages. Attract luck, opportunity, and abundance through personalised prosperity rituals for entrepreneurs, executives, and corporations."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        align="center"
      />

      <SectionWrapper background="alt">
        <div className="page-two-col">
          <div className="page-two-col__body">
            <p className="page-eyebrow">What This Service Offers</p>
            <h2 className="page-heading">Prosperity Rituals for Business Success & Luck</h2>
            <div className="section-divider" />
            <p>Business prosperity rituals are powerful, personalised spiritual ceremonies designed to activate abundance, attract new opportunities, and strengthen the energetic foundations that support financial growth and success.</p>
            <p>Every ritual is tailored specifically to you and your business. We assess your current energetic and spiritual alignment, identify the areas where ritual work will have the greatest impact, and design a ceremony that addresses your goals at their root.</p>
            <p>These are not symbolic gestures. They are serious spiritual interventions rooted in authentic practice — designed to produce real change in the flow of prosperity through your business and personal life.</p>
          </div>
          <div className="page-two-col__aside">
            <div className="page-highlight">
              <p>"Prosperity is not luck. It is alignment. Our rituals create the conditions in which your business can thrive."</p>
            </div>
            <div className="page-info-box">
              <h3>Private Ritual Sessions — Entrepreneurs & Corporations</h3>
              <p>We serve solo entrepreneurs and large corporations alike. Every programme is scaled and customised to your size and goals.</p>
              <h3>Spiritual & Financial Blockage Removal Programmes</h3>
              <p>One-time rituals or sustained prosperity programmes — we recommend the approach that will create the most lasting impact for your situation.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <WhoWeServe items={WHO} heading="Who This Service Is For" variant="pill" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <div className="page-section-header page-section-header--center">
          <p className="page-eyebrow">Ritual Services</p>
          <h2 className="page-heading">Luck Rituals for Business — Our Full Offering</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto' }} />
        </div>
        <div className="page-cards-grid">
          {RITUAL_SERVICES.map((item, i) => (
            <div key={i} className="page-card">
              <span className="page-card__title">{item.title}</span>
              <span className="page-card__desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProblemList heading="Results After Financial & Spiritual Blockage Removal" items={BENEFITS} icon="star" columns={2} />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <ProblemList heading="Signs of Spiritual or Financial Blockage in Your Business" items={WHY_SEEK} icon="diamond" columns={1} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProcessSteps heading="How Your Ritual for Business Success Works" steps={processStepsData['prosperity-rituals']} layout="horizontal" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <TrustBadges heading="Why Clients Trust Us for Spiritual Blockage Removal" items={TRUST} columns={3} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <FAQAccordion items={faqData['prosperity-rituals']} heading="Frequently Asked Questions" />
      </SectionWrapper>

      <CTABanner
        heading="Begin Your Ritual for Business Success Today"
        subtext="Start your prosperity ritual programme and take decisive action toward the abundance your business deserves."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}

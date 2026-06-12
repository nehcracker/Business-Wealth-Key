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
import { IconShield, IconBolt, IconCrown, IconGlobe, IconStar } from '../../assets/icons'
import heroImage from '../../assets/images/services/Business-Breakthrough.jpg'

const WHO = [
  'Entrepreneurs', 'Business Owners', 'CEOs & Executives', 'Investors',
  'Startups', 'Corporations', 'Directors', 'Traders',
  'Real Estate Investors', 'Contractors', 'Professionals', 'Family Businesses',
]

const SIGNS_OF_STAGNATION = [
  'Business growth has flatlined despite strong effort, investment, and strategy',
  'Revenue targets are consistently missed without a clear explanation',
  'Promising opportunities arise but never seem to fully develop or convert',
  'Key team members, partners, or clients leave at critical moments',
  'The same obstacles keep recurring in different forms across different periods',
  'Competitors in the same market are progressing while your business stands still',
  'Decisions that should lead to growth seem to produce disappointing outcomes',
  'A persistent internal sense that the business is not operating at its true potential',
  'Significant time, resources, and energy are spent without corresponding returns',
  'Investor interest, funding, or expansion repeatedly stalls at the final stage',
  'Business relationships are draining rather than energising the company',
  'Leadership feels disconnected from the direction and momentum of the business',
]

const BREAKTHROUGH_AREAS = [
  { title: 'Stagnation Analysis',          desc: 'A deep assessment of the spiritual, energetic, and strategic causes of your business stagnation.' },
  { title: 'Obstacle Removal',             desc: 'Targeted spiritual work to remove the specific blockages preventing your business breakthrough.' },
  { title: 'Opportunity Unlocking',        desc: 'Reopening the energetic pathways through which new clients, contracts, and growth opportunities flow.' },
  { title: 'Revenue Recovery',             desc: 'Addressing the spiritual and energetic conditions that have suppressed revenue performance.' },
  { title: 'Momentum Restoration',         desc: 'Rebuilding the energetic momentum and forward movement that a stagnating business loses over time.' },
  { title: 'Leadership Clarity',           desc: 'Providing leaders with the insight and direction needed to drive the business forward with conviction.' },
  { title: 'Partnership Renewal',          desc: 'Assessing and improving the energetic quality of key business relationships and alliances.' },
  { title: 'Market Breakthrough Support',  desc: 'Spiritual guidance and support for businesses attempting to enter new markets or territories.' },
]

const RESULTS = [
  'A clearly identified cause for your business stagnation, both spiritual and energetic',
  'Removal of the specific blockages preventing your breakthrough',
  'Renewed momentum and forward movement in business performance',
  'Greater confidence and clarity in your leadership and decision-making',
  'An improved flow of opportunities, clients, and revenue',
  'Release from the recurring patterns that have been holding the business back',
  'A stronger energetic foundation to prevent future stagnation',
  'Restored alignment between your business vision and your daily results',
  'Leadership that feels genuinely re-energised and directionally clear',
  'A business that is genuinely moving forward, not just managing the present',
]

const TRUST = [
  { icon: <IconShield size={28} />, title: 'Complete Confidentiality',     description: 'Your business situation is handled with absolute privacy and discretion.' },
  { icon: <IconBolt size={28} />, title: 'Rapid Impact Focus',             description: 'We work to identify the core obstacle and begin clearing it as efficiently as possible.' },
  { icon: <IconCrown size={28} />, title: 'Tailored to Your Business',     description: 'Every breakthrough programme is built around your specific situation and goals.' },
  { icon: <IconGlobe size={28} />, title: 'Serving Clients Worldwide',     description: 'Available globally via secure, private online consultation.' },
  { icon: <IconStar size={28} />, title: 'Ongoing Support Available',      description: 'We provide continued support to sustain your breakthrough and build on your momentum.' },
]

export default function BusinessBreakthrough() {
  const seo = useSEO('/services/business-breakthrough')
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', slug: '/' },
    { name: 'Services', slug: '/services' },
    { name: 'Business Breakthrough', slug: '/services/business-breakthrough' },
  ])
  const serviceSchema = generateServiceSchema({
    name:        'Business Breakthrough Solutions',
    description: 'Overcome business stagnation, unlock new opportunities, and accelerate growth with tailored business breakthrough solutions and spiritual guidance.',
    slug:        '/services/business-breakthrough',
  })
  const faqSchema = generateFAQSchema(faqData['business-breakthrough'])

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
        imageAlt="Business Breakthrough | Business Wealth Key"
        title="Business Breakthrough: Overcome Stagnation, Unlock Opportunities & Accelerate Growth"
        subtitle="For businesses that are doing everything right, yet something invisible is holding back the growth, momentum, and success they deserve."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        align="center"
      />

      <SectionWrapper background="alt">
        <div className="page-two-col">
          <div className="page-two-col__body">
            <p className="page-eyebrow">Breaking Through the Invisible</p>
            <h2 className="page-heading">Business Breakthrough Solutions</h2>
            <div className="section-divider" />
            <p>Business stagnation is one of the most frustrating and disorienting experiences a business leader can face. When you have done everything by the book, built the right strategy, hired the right people, invested in the right areas, and the results still do not match the effort, something deeper is at work.</p>
            <p>Our business breakthrough service is designed precisely for this situation. We conduct a comprehensive spiritual and energetic assessment of your business, identify the hidden forces responsible for your stagnation, and apply targeted spiritual guidance to remove them and restore forward momentum.</p>
            <p>This is not motivational coaching. It is serious spiritual intervention, conducted with precision, delivered with discretion, and focused entirely on producing a genuine breakthrough for your business.</p>
          </div>
          <div className="page-two-col__aside">
            <div className="page-highlight">
              <p>"Stagnation is not failure. It is a signal that something invisible is holding the business back, and invisible problems require non-conventional solutions."</p>
            </div>
            <div className="page-info-box">
              <h3>Overcome Business Stagnation: For Every Size of Business</h3>
              <p>Breakthrough solutions for sole traders, SMEs, and large corporations. We scale our approach to match the size and complexity of your challenge.</p>
              <h3>Business Stagnation Solutions: Ongoing Support Available</h3>
              <p>We provide continued support after the initial breakthrough to ensure momentum is maintained and the underlying conditions do not return.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProblemList heading="Signs You Need to Overcome Business Stagnation" items={SIGNS_OF_STAGNATION} icon="warning" columns={2} />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <div className="page-section-header page-section-header--center">
          <p className="page-eyebrow">Our Breakthrough Services</p>
          <h2 className="page-heading">How We Unlock Business Opportunities & Drive Your Breakthrough</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto' }} />
        </div>
        <div className="page-cards-grid">
          {BREAKTHROUGH_AREAS.map((item, i) => (
            <div key={i} className="page-card">
              <span className="page-card__title">{item.title}</span>
              <span className="page-card__desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <WhoWeServe items={WHO} heading="Who This Service Is For" variant="pill" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <ProblemList heading="Results When You Unlock Business Opportunities" items={RESULTS} icon="star" columns={2} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProcessSteps heading="Your Business Stagnation Solutions Programme" steps={processStepsData['business-breakthrough']} layout="horizontal" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <TrustBadges heading="Why We're Trusted for Business Breakthrough Solutions" items={TRUST} columns={3} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <FAQAccordion items={faqData['business-breakthrough']} heading="Frequently Asked Questions" />
      </SectionWrapper>

      <CTABanner
        heading="Begin Your Business Breakthrough Today"
        subtext="Begin identifying and removing what is holding your business back. Book a private consultation today."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}

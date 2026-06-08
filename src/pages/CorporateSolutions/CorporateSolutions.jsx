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
import { IconShield, IconGlobe, IconCrown, IconStar, IconDiamond, IconKey } from '../../assets/icons'

const WHO = [
  'Large Corporations', 'Mid-Sized Companies', 'Executives & CEOs', 'Directors & Boards',
  'Investors & Funds', 'Startups Seeking Scale', 'Family-Owned Businesses', 'Divisional Leaders',
  'C-Suite Teams', 'Organisations in Transition', 'Private Equity Groups', 'Joint Ventures',
]

const CORPORATE_SERVICES = [
  { title: 'Corporate Spiritual Consultations',  desc: 'Private consultations for executives, boards, and leadership teams seeking deeper strategic clarity.' },
  { title: 'Organisational Prosperity Programmes', desc: 'Structured programmes to improve financial performance, team alignment, and organisational energy.' },
  { title: 'Executive Success Support',           desc: 'Personal spiritual guidance for C-suite leaders navigating high-stakes decisions and transitions.' },
  { title: 'Corporate Wealth Activation',         desc: 'Activating the energetic conditions that support sustained corporate growth and financial performance.' },
  { title: 'Business Expansion Support',          desc: 'Spiritual guidance for organisations planning mergers, acquisitions, or geographic expansion.' },
  { title: 'Corporate Protection Services',       desc: 'Protecting the organisation against external interference, reputational risk, and competitive threats.' },
  { title: 'Leadership Alignment Programmes',     desc: 'Aligning leadership energy and intention to drive greater organisational cohesion and performance.' },
  { title: 'Investor Relations Support',          desc: 'Spiritual guidance on investor relationships, funding strategies, and financial communications.' },
]

const CORPORATE_REASONS = [
  'Persistent underperformance relative to the organisation\'s genuine potential and resources',
  'Leadership team dynamics that generate friction, misalignment, and poor decision outcomes',
  'Repeated failure to close major deals, secure funding, or complete acquisitions',
  'Organisational culture that drains rather than energises employees and performance',
  'Major transitions — restructuring, leadership change, M&A — creating destabilising energy',
  'Inexplicable decline in client retention, market share, or competitive standing',
  'A pattern of promising initiatives that consistently fail to deliver expected results',
  'Boards and leadership teams seeking a deeper level of strategic perspective',
  'Corporate desire to establish a positive, prosperity-aligned energetic foundation',
  'Organisations operating in competitive environments where every advantage matters',
]

const RESULTS = [
  'Organisational alignment between leadership, teams, and shared prosperity goals',
  'Removal of the spiritual and energetic conditions suppressing corporate performance',
  'Greater clarity for executive decision-making at the highest levels of the organisation',
  'A stronger energetic foundation for sustained corporate growth and market presence',
  'Improved attraction of aligned investors, partners, clients, and talent',
  'Protection against external interference and competitive spiritual threats',
  'Restoration of positive momentum in underperforming divisions or initiatives',
  'Leadership that feels genuinely empowered, clear, and strategically confident',
]

const TRUST = [
  { icon: <IconShield size={28} />, title: 'Executive-Level Confidentiality', description: 'Corporate consultations are conducted under the strictest possible discretion.' },
  { icon: <IconGlobe size={28} />, title: 'Global Corporate Experience',      description: 'We have served corporations, executives, and investors across multiple continents.' },
  { icon: <IconCrown size={28} />, title: 'Bespoke Corporate Programmes',     description: 'Every corporate engagement is custom-designed — no standard packages.' },
  { icon: <IconStar size={28} />, title: 'Trusted at Board Level',            description: 'Executives and board members trust us with the most sensitive corporate challenges.' },
  { icon: <IconDiamond size={28} />, title: 'Scalable Solutions',             description: 'From small executive teams to large multinational organisations.' },
  { icon: <IconKey size={28} />, title: 'Long-Term Partnership Approach',     description: 'We build lasting relationships with corporate clients — not one-off engagements.' },
]

export default function CorporateSolutions() {
  const seo = useSEO('/services/corporate-solutions')
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', slug: '/' },
    { name: 'Services', slug: '/services' },
    { name: 'Corporate Solutions', slug: '/services/corporate-solutions' },
  ])

  return (
    <>
      {seo}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <HeroSection
        title="Spiritual Guidance for Corporate Growth, Prosperity, Leadership, and Organisational Success."
        subtitle="Tailored spiritual solutions for corporations, executives, directors, and investors. Addressing the invisible forces that shape organisational performance at the highest level."
        ctaPrimary={{ label: 'Submit a Corporate Enquiry', href: '/contact' }}
        align="center"
      />

      <SectionWrapper background="alt">
        <div className="page-two-col">
          <div className="page-two-col__body">
            <p className="page-eyebrow">For Organisations That Seek More</p>
            <h2 className="page-heading">Corporate Spiritual Solutions</h2>
            <div className="section-divider" />
            <p>Business Wealth Key offers a comprehensive range of spiritual guidance services specifically designed for corporations, executive leadership teams, boards of directors, and institutional investors.</p>
            <p>Organisations, like individuals, operate within an energetic and spiritual field that profoundly influences their performance, culture, decision-making, and financial results. When that field is misaligned — through leadership conflict, historic negative events, competitive interference, or accumulated organisational stress — the consequences show up in the balance sheet and the boardroom.</p>
            <p>Our corporate programmes are not wellness initiatives or team-building exercises. They are serious, private, high-level spiritual engagements — designed to produce measurable improvement in the conditions that determine organisational prosperity.</p>
          </div>
          <div className="page-two-col__aside">
            <div className="page-highlight">
              <p>"The most successful organisations understand that performance has invisible dimensions. We address those dimensions — with precision and complete discretion."</p>
            </div>
            <div className="page-info-box">
              <h3>Confidential Engagement</h3>
              <p>All corporate consultations are treated as commercially sensitive engagements. Full discretion is maintained at every stage.</p>
              <h3>Scalable From SME to Enterprise</h3>
              <p>We work with organisations of every size — from growing businesses to large multinationals — with programmes scaled to match the complexity and scope of each engagement.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <WhoWeServe items={WHO} heading="Organisations We Serve" variant="card" columns={4} />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <div className="page-section-header page-section-header--center">
          <p className="page-eyebrow">Corporate Service Portfolio</p>
          <h2 className="page-heading">Our Corporate Spiritual Services</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto' }} />
        </div>
        <div className="page-cards-grid">
          {CORPORATE_SERVICES.map((item, i) => (
            <div key={i} className="page-card">
              <span className="page-card__title">{item.title}</span>
              <span className="page-card__desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProblemList heading="Common Reasons Corporations Contact Us" items={CORPORATE_REASONS} icon="diamond" columns={2} />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <ProblemList heading="What Corporate Clients Achieve" items={RESULTS} icon="check" columns={2} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProcessSteps heading="Our Corporate Engagement Process" steps={processStepsData['corporate-solutions']} layout="horizontal" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <TrustBadges heading="Why Leading Organisations Choose Us" items={TRUST} columns={3} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <FAQAccordion items={faqData['corporate-solutions']} heading="Frequently Asked Questions" />
      </SectionWrapper>

      <CTABanner
        heading="Support Your Organisation's Growth, Prosperity, and Leadership Success"
        subtext="Submit a confidential corporate enquiry and begin exploring what spiritual guidance can unlock for your organisation."
        ctaPrimary={{ label: 'Submit a Corporate Enquiry', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}

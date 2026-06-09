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
import { IconShield, IconCompass, IconCrown, IconGlobe, IconDiamond } from '../../assets/icons'
import heroImage from '../../assets/images/services/Financial-Blockage-Removal.jpg'

const WHO = [
  'Entrepreneurs', 'Business Owners', 'CEOs & Executives', 'Investors',
  'Traders', 'Corporations', 'Startups', 'Directors',
  'Real Estate Investors', 'Professionals', 'Contractors', 'Family Businesses',
]

const SIGNS = [
  'Revenue has been flat or declining despite genuine effort and strong strategy',
  'Funding opportunities and investors consistently fail to materialise',
  'Promising deals, contracts, and partnerships repeatedly fall apart at the last moment',
  'Key clients or customers are unexpectedly lost without clear reason',
  'Cash flow problems persist regardless of revenue levels',
  'A persistent feeling that financial growth is being held back by something unseen',
  'New markets or expansion efforts repeatedly fail despite solid preparation',
  'Competitors in the same space seem to progress while you remain stuck',
  'Financial setbacks occur in patterns — not random events but recurring cycles',
  'Internal conflicts and team dynamics seem to generate financial consequences',
  'Legal disputes, regulatory issues, or contractual problems drain resources',
  'Despite positive signs and good fortune, nothing seems to convert into lasting success',
]

const ROOT_CAUSES = [
  { title: 'Energy Misalignment',       desc: 'Your business or personal energy field is not aligned with the frequency of financial abundance.' },
  { title: 'Spiritual Interference',    desc: 'External negative energies or spiritual interference are actively blocking your prosperity.' },
  { title: 'Relationship Dynamics',     desc: 'Key business relationships — partners, clients, employees — carry conflicting or negative energies.' },
  { title: 'Decision-Making Patterns',  desc: 'Recurring patterns of self-sabotage or misaligned decisions rooted in deeper causes.' },
  { title: 'Business Environment',      desc: 'The physical or energetic environment of your business carries residual negative energy.' },
  { title: 'Prosperity Consciousness',  desc: 'Deep-seated beliefs or spiritual conditions are limiting your capacity to receive abundance.' },
  { title: 'Opportunity Flow',          desc: 'Energetic pathways through which opportunities should flow have become blocked or closed.' },
]

const WHAT_WE_RESTORE = [
  'Consistent and healthy financial flow through your business',
  'Openness to new revenue streams and income opportunities',
  'The ability to attract and retain clients, investors, and contracts',
  'Confidence and clarity in financial decision-making',
  'Release from recurring cycles of financial setback and loss',
  'Alignment between your effort and your financial outcomes',
  'A clear and unobstructed path toward greater prosperity',
  'Energetic protection against future financial interference',
  'Business relationships that support rather than drain your prosperity',
  'A lasting foundation for sustained financial growth and abundance',
]

const TRUST = [
  { icon: <IconShield size={28} />, title: 'Absolute Confidentiality',     description: 'Your financial situation is handled with the utmost privacy and discretion.' },
  { icon: <IconCompass size={28} />, title: 'Root Cause Analysis',          description: 'We identify the true underlying cause — not just the symptoms — of your blockage.' },
  { icon: <IconCrown size={28} />, title: 'Proven Removal Methods',         description: 'Authentic, effective spiritual methods developed through decades of practice.' },
  { icon: <IconGlobe size={28} />, title: 'Worldwide Service',              description: 'Available to clients globally via secure, private online sessions.' },
  { icon: <IconDiamond size={28} />, title: 'Long-Term Prosperity Focus',   description: 'We remove blockages and build lasting protective foundations for your future growth.' },
]

export default function FinancialBlockage() {
  const seo = useSEO('/services/financial-blockage')
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', slug: '/' },
    { name: 'Services', slug: '/services' },
    { name: 'Financial Blockage Removal', slug: '/services/financial-blockage' },
  ])

  return (
    <>
      {seo}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <HeroSection
        image={heroImage}
        imageAlt="Financial Blockage Removal — Business Wealth Key"
        title="Restore Financial Flow. Remove Obstacles. Pursue Greater Prosperity."
        subtitle="Many businesses experience recurring financial challenges despite consistent effort and strong strategy. The root cause may lie beyond what conventional analysis can reach."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        align="center"
      />

      <SectionWrapper background="alt">
        <div className="page-two-col">
          <div className="page-two-col__body">
            <p className="page-eyebrow">Understanding the Problem</p>
            <h2 className="page-heading">What Is a Financial Blockage?</h2>
            <div className="section-divider" />
            <p>A financial blockage is any spiritual, energetic, or metaphysical condition that restricts the natural flow of prosperity through your business or personal finances. These blockages operate below the surface of conventional business analysis — and they can persist for years, frustrating even the most capable and disciplined business operators.</p>
            <p>Financial blockages are not always the result of bad decisions or poor strategy. They often arise from external interference, energy misalignment, disrupted business relationships, or conditions in the environment surrounding your business that conventional consultants are not equipped to address.</p>
            <p>Our financial blockage removal service identifies the precise nature and source of the blockage, removes it through targeted spiritual work, and puts in place protective and restorative measures to support your financial recovery and long-term prosperity.</p>
          </div>
          <div className="page-two-col__aside">
            <div className="page-highlight">
              <p>"If you have done everything right and the results still do not follow — the cause may be something no spreadsheet can identify."</p>
            </div>
            <div className="page-info-box">
              <h3>Individual & Corporate</h3>
              <p>We work with sole traders, small businesses, and large corporations — wherever financial blockages are impacting performance.</p>
              <h3>International Clients</h3>
              <p>All services delivered privately online. Available to clients worldwide across all time zones.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProblemList heading="Signs You May Have a Financial Blockage" items={SIGNS} icon="warning" columns={2} />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <div className="page-section-header page-section-header--center">
          <p className="page-eyebrow">Our Assessment Framework</p>
          <h2 className="page-heading">Root Causes We Investigate</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto' }} />
        </div>
        <div className="page-cards-grid">
          {ROOT_CAUSES.map((item, i) => (
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
        <ProblemList heading="What We Help You Restore" items={WHAT_WE_RESTORE} icon="check" columns={2} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <ProcessSteps heading="Our Financial Blockage Removal Process" steps={processStepsData['financial-blockage']} layout="horizontal" />
      </SectionWrapper>

      <SectionWrapper background="alt">
        <TrustBadges heading="Why Choose Business Wealth Key" items={TRUST} columns={3} />
      </SectionWrapper>

      <SectionWrapper background="default">
        <FAQAccordion items={faqData['financial-blockage']} heading="Frequently Asked Questions" />
      </SectionWrapper>

      <CTABanner
        heading="Restore Your Path To Prosperity"
        subtext="Begin the process of identifying and removing what is holding your business back from the financial success it deserves."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}

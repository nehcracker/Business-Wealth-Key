import { useSEO } from '../../hooks/useSEO'
import HeroSection from '../../components/common/HeroSection/HeroSection'
import SectionWrapper from '../../components/common/SectionWrapper/SectionWrapper'
import ServiceCard from '../../components/common/ServiceCard/ServiceCard'
import CTABanner from '../../components/common/CTABanner/CTABanner'
import TrustBadges from '../../components/common/TrustBadges/TrustBadges'
import ProcessSteps from '../../components/common/ProcessSteps/ProcessSteps'
import ProblemList from '../../components/common/ProblemList/ProblemList'
import WhoWeServe from '../../components/common/WhoWeServe/WhoWeServe'
import { services } from '../../utils/servicesData'
import { processStepsData } from '../../utils/processStepsData'
import {
  IconShield, IconStar, IconKey, IconCrown, IconGlobe, IconDiamond,
} from '../../assets/icons'
import heroImage from '../../assets/images/hero/hero__bg.jpg'
import './Home.css'

const heroImageSources = [
  {
    srcSet: `${heroImage} 1200w, ${heroImage} 800w, ${heroImage} 480w`,
    sizes: '(max-width: 480px) 100vw, (max-width: 768px) 100vw, 100vw',
    type: 'image/png',
  },
]

const WHO_WE_SERVE = [
  'Entrepreneurs', 'CEOs & Executives', 'Business Owners', 'Investors',
  'Contractors', 'Traders', 'Real Estate Investors', 'Corporations',
  'Startups', 'Professionals', 'Directors', 'Family Businesses',
]

const PROBLEMS = [
  'Stagnant business growth despite consistent effort',
  'Recurring financial setbacks with no clear explanation',
  'Missed opportunities and lost contracts',
  'Difficulty attracting investors or funding',
  'Struggling to retain key clients or partnerships',
  'Leadership challenges and internal conflict',
  'Market entry barriers and expansion difficulties',
  'Declining revenue and deteriorating profit margins',
  'Inability to identify the true root cause of failure',
  'A persistent feeling that something unseen is blocking success',
]

const BENEFITS = [
  'Accelerated wealth creation and financial prosperity',
  'Greater revenue growth and business expansion',
  'Clarity on the path forward and hidden opportunities',
  'Stronger strategic partnerships and investor attraction',
  'Long-term prosperity consciousness and success mindset',
  'Protection against negative forces affecting your business',
  'Renewed confidence in your decisions and leadership',
]

const TRUST_ITEMS = [
  { icon: <IconShield size={28} />, title: 'Absolute Confidentiality',   description: 'Every consultation is conducted in complete privacy. Your business details are never shared.' },
  { icon: <IconDiamond size={28} />, title: 'Fully Personalised',        description: 'No generic programmes. Every service is tailored to your unique situation and goals.' },
  { icon: <IconCrown size={28} />, title: 'Prosperity-Focused',          description: 'Our sole focus is your lasting business prosperity and financial success.' },
  { icon: <IconGlobe size={28} />, title: 'Serving Clients Worldwide',   description: 'Online consultations available across all time zones. No location barriers.' },
  { icon: <IconStar size={28} />, title: 'Trusted by Leaders',           description: 'Entrepreneurs, executives, investors, and corporations trust us with their most sensitive goals.' },
]

// Home shares process steps with psychic-consultations as the generic intro flow
const HOME_STEPS = processStepsData['psychic-consultations']

export default function Home() {
  const seo = useSEO('/')

  return (
    <>
      {seo}

      {/* ── Hero ── */}
      <HeroSection
        image={heroImage}        imageSources={heroImageSources}
        imageAlt="Spiritual business prosperity hero background"        title="The Spiritual Key to Wealth, Prosperity, and Business Success"
        subtitle="Unlock the hidden forces behind business growth. Through psychic consultations, prosperity rituals, and spiritual guidance, we help entrepreneurs, executives, and corporations achieve lasting success."
        ctaPrimary={{ label: 'Book Private Consultation', href: '/contact' }}
        ctaSecondary={{ label: 'Explore Our Services', href: '/services' }}
        eager
        align="left"
      />

      {/* ── Who We Serve ── */}
      <SectionWrapper background="alt" padding="tight">
        <div className="home-intro">
          <p className="home-intro__eyebrow">Trusted Spiritual Business Guidance</p>
          <h2 className="home-intro__heading">
            Prosperity, Success &amp; Wealth — For Those Who Seek More
          </h2>
          <p className="home-intro__body">
            Business Wealth Key was founded to serve those who understand that lasting success
            requires more than strategy alone. We work with driven individuals and organisations
            who are ready to unlock the full potential of their prosperity.
          </p>
        </div>
        <WhoWeServe items={WHO_WE_SERVE} heading="We Work With" variant="pill" />
      </SectionWrapper>

      {/* ── Problems ── */}
      <SectionWrapper background="default">
        <ProblemList
          heading="Is Your Business Experiencing Any of These Challenges?"
          items={PROBLEMS}
          icon="diamond"
          columns={2}
        />
      </SectionWrapper>

      {/* ── Services Grid ── */}
      <SectionWrapper background="alt" className="home-services-section">
        <div className="home-section-header">
          <h2>Our Spiritual Business Services</h2>
          <div className="section-divider" />
          <p>Six specialised service areas, each designed to unlock a specific dimension of business prosperity.</p>
        </div>
        <div className="home-services-grid">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              icon={s.icon}
              title={s.title}
              description={s.shortDesc}
              href={s.slug}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ── Benefits ── */}
      <SectionWrapper background="default">
        <ProblemList
          heading="What We Help You Unlock"
          items={BENEFITS}
          icon="star"
          columns={1}
        />
      </SectionWrapper>

      {/* ── Trust Badges ── */}
      <SectionWrapper background="alt">
        <TrustBadges
          heading="Why Clients Trust Business Wealth Key"
          items={TRUST_ITEMS}
          columns={3}
        />
      </SectionWrapper>

      {/* ── How It Works ── */}
      <SectionWrapper background="default">
        <ProcessSteps
          heading="How It Works"
          steps={HOME_STEPS}
          layout="horizontal"
        />
      </SectionWrapper>

      {/* ── CTA ── */}
      <CTABanner
        heading="Your Success Begins with The Right Key"
        subtext="Take the first step toward lasting prosperity. Book a private consultation and begin your journey."
        ctaPrimary={{ label: 'Schedule Consultation', href: '/contact' }}
        ctaSecondary={{ label: 'Speak With an Advisor', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}

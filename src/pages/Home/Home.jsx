import { useSEO } from '../../hooks/useSEO'
import { useScrollReveal } from '../../hooks/useScrollReveal'
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
  IconShield, IconStar, IconCrown, IconGlobe, IconDiamond,
} from '../../assets/icons'
import heroImage      from '../../assets/images/hero/hero__bg.jpg'
import servicesBgImage from '../../assets/images/services/Spiritual-Business-Services.jpg'
import './Home.css'

const STATS = [
  { value: '100%',    label: 'Confidential' },
  { value: 'Global',  label: 'Worldwide Service' },
  { value: '6',       label: 'Specialist Disciplines' },
  { value: 'Private', label: 'Every Consultation' },
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
  {
    icon: <IconShield size={28} />,
    title: 'Absolute Confidentiality',
    description: 'Every consultation is conducted in complete privacy. Your business details are never shared.',
  },
  {
    icon: <IconDiamond size={28} />,
    title: 'Fully Personalised',
    description: 'No generic programmes. Every service is tailored to your unique situation and goals.',
  },
  {
    icon: <IconCrown size={28} />,
    title: 'Prosperity-Focused',
    description: 'Our sole focus is your lasting business prosperity and financial success.',
  },
  {
    icon: <IconGlobe size={28} />,
    title: 'Serving Clients Worldwide',
    description: 'Online consultations available across all time zones. No location barriers.',
  },
  {
    icon: <IconStar size={28} />,
    title: 'Trusted by Leaders',
    description: 'Entrepreneurs, executives, investors, and corporations trust us with their most sensitive goals.',
  },
]

const HOME_STEPS = processStepsData['psychic-consultations']

export default function Home() {
  const seo = useSEO('/')
  const statsRef     = useScrollReveal()
  const manifestoRef = useScrollReveal()

  return (
    <>
      {seo}

      <HeroSection
        image={heroImage}
        imageAlt="Psychic business consultations and prosperity rituals | Business Wealth Key"
        title="Psychic Business Consultations, Prosperity Rituals & Wealth Activation"
        subtitle="Unlock the hidden forces behind business growth. Through psychic consultations, prosperity rituals, and spiritual guidance, we help entrepreneurs, executives, and corporations achieve lasting success."
        ctaPrimary={{ label: 'Book Private Consultation', href: '/contact' }}
        ctaSecondary={{ label: 'Explore Our Services', href: '/services' }}
        eager
        align="center"
      />

      {/* Stats strip */}
      <div className="home-stats" ref={statsRef}>
        <div className="home-stats__inner">
          {STATS.map((s, i) => (
            <div key={i} className="home-stats__item">
              <span className="home-stats__value">{s.value}</span>
              <span className="home-stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Intro + Who We Serve */}
      <SectionWrapper background="alt" padding="tight">
        <div className="home-intro">
          <p className="home-intro__eyebrow">Trusted Spiritual Business Guidance</p>
          <h2 className="home-intro__heading">
            Business Prosperity, Wealth &amp; Success: For Entrepreneurs Who Seek More
          </h2>
          <p className="home-intro__body">
            Business Wealth Key was founded to serve those who understand that lasting business
            prosperity requires more than strategy alone. We work with driven entrepreneurs,
            executives, and corporations who are ready to unlock the full potential of their wealth.
          </p>
        </div>
        <WhoWeServe items={WHO_WE_SERVE} heading="We Work With" variant="pill" />
      </SectionWrapper>

      {/* Challenges */}
      <SectionWrapper background="default">
        <ProblemList
          heading="Is Your Business Experiencing Financial or Spiritual Blockages?"
          items={PROBLEMS}
          icon="diamond"
          columns={2}
        />
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper
        background="alt"
        className="home-services-section"
        style={{ backgroundImage: `url(${servicesBgImage})` }}
      >
        <div className="home-section-header">
          <h2>Our Psychic &amp; Spiritual Business Services</h2>
          <div className="section-divider" />
          <p>Six specialised psychic and spiritual service areas, from prosperity rituals to wealth activation, each designed to unlock a specific dimension of business prosperity.</p>
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

      {/* Manifesto */}
      <section className="home-manifesto" ref={manifestoRef} aria-label="Our philosophy">
        <div className="home-manifesto__inner">
          <span className="home-manifesto__ornament" aria-hidden="true">✦</span>
          <blockquote className="home-manifesto__quote">
            "True prosperity is not found in strategy alone. It begins where logic ends,
            in the realm of energy, intention, and spiritual alignment."
          </blockquote>
          <cite className="home-manifesto__cite">Business Wealth Key</cite>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper background="alt">
        <ProblemList
          heading="What Our Spiritual Business Guidance Helps You Unlock"
          items={BENEFITS}
          icon="star"
          columns={1}
        />
      </SectionWrapper>

      {/* Trust */}
      <SectionWrapper background="default">
        <TrustBadges
          heading="Why Clients Trust Business Wealth Key"
          items={TRUST_ITEMS}
          columns={3}
        />
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper background="alt">
        <ProcessSteps
          heading="How Our Psychic Business Consultation Works"
          steps={HOME_STEPS}
          layout="horizontal"
        />
      </SectionWrapper>

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

import { useSEO } from '../../hooks/useSEO'
import HeroSection from '../../components/common/HeroSection/HeroSection'
import SectionWrapper from '../../components/common/SectionWrapper/SectionWrapper'
import ServiceCard from '../../components/common/ServiceCard/ServiceCard'
import CTABanner from '../../components/common/CTABanner/CTABanner'
import TrustBadges from '../../components/common/TrustBadges/TrustBadges'
import WhoWeServe from '../../components/common/WhoWeServe/WhoWeServe'
import { services } from '../../utils/servicesData'
import { IconShield, IconStar, IconCrown, IconDiamond, IconGlobe, IconKey, IconBolt, IconEye } from '../../assets/icons'
import heroImage from '../../assets/images/services/Spiritual-Business-Services.jpg'
import './Services.css'

const WHO_WE_SERVE = [
  'Entrepreneurs', 'CEOs & Executives', 'Business Owners', 'Investors',
  'Contractors', 'Traders', 'Real Estate Investors', 'Corporations',
  'Startups', 'Professionals', 'Directors', 'Family Businesses',
]

const TRUST_ITEMS = [
  { icon: <IconShield size={28} />, title: 'Absolute Confidentiality',     description: 'All services and consultations are conducted in complete privacy.' },
  { icon: <IconDiamond size={28} />, title: 'Fully Personalised',          description: 'Every programme is built around your unique situation with no generic solutions.' },
  { icon: <IconCrown size={28} />, title: 'Prosperity-Centred',            description: 'Our purpose is your lasting business prosperity and financial success.' },
  { icon: <IconGlobe size={28} />, title: 'Global Client Base',            description: 'We serve clients across every continent via secure online consultations.' },
  { icon: <IconStar size={28} />, title: 'Deep Spiritual Expertise',       description: 'Decades of experience guiding businesses through spiritual and energetic challenges.' },
  { icon: <IconKey size={28} />, title: 'Trusted by Leaders',              description: 'Entrepreneurs, executives, investors, and corporations trust us with their goals.' },
  { icon: <IconBolt size={28} />, title: 'Results-Oriented Guidance',      description: 'Every service is focused on producing real, measurable change in your business.' },
  { icon: <IconEye size={28} />, title: 'Honest & Transparent',            description: 'We provide genuine insight, not comfort. We tell you what your business needs to hear.' },
]

export default function Services() {
  const seo = useSEO('/services')
  return (
    <>
      {seo}
      <HeroSection
        image={heroImage}
        imageAlt="Spiritual business services hero image | Business Wealth Key"
        title="Spiritual Solutions for Business Growth, Prosperity, and Financial Success"
        subtitle="Six specialised service areas, each designed to unlock a specific dimension of business prosperity. From psychic insight to corporate prosperity programmes, we address what strategy alone cannot."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        ctaSecondary={{ label: 'About Us', href: '/about' }}
        align="center"
      />

      <SectionWrapper background="alt" padding="tight">
        <div className="page-section-header page-section-header--center">
          <p className="page-eyebrow">What We Offer</p>
          <h2 className="page-heading">Unlock the Hidden Forces Behind Success</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto' }} />
          <p className="page-lead">
            Every business challenge has a visible dimension and a hidden one. Our services address both,
            combining deep spiritual insight with a clear-eyed understanding of what it takes to succeed.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="alt">
        <div className="page-section-header">
          <p className="page-eyebrow">Core Areas of Expertise</p>
          <h2 className="page-heading">Six Dimensions of Business Prosperity</h2>
          <div className="section-divider" />
        </div>
        <div className="page-services-grid">
          {services.map((s) => (
            <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.shortDesc} href={s.slug} bgImage={s.bgImage} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="alt">
        <WhoWeServe items={WHO_WE_SERVE} heading="Who We Serve" variant="pill" />
      </SectionWrapper>

      <SectionWrapper background="default">
        <TrustBadges heading="Why Clients Trust Us" items={TRUST_ITEMS} columns={4} />
      </SectionWrapper>

      <CTABanner
        heading="Take the Next Step Toward Prosperity"
        subtext="Every journey begins with a single conversation. Book your private consultation today."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        ctaSecondary={{ label: 'View All Services', href: '/services' }}
        variant="dark"
      />
    </>
  )
}

import { useSEO } from '../../hooks/useSEO'
import HeroSection from '../../components/common/HeroSection/HeroSection'
import SectionWrapper from '../../components/common/SectionWrapper/SectionWrapper'
import ServiceCard from '../../components/common/ServiceCard/ServiceCard'
import CTABanner from '../../components/common/CTABanner/CTABanner'
import TrustBadges from '../../components/common/TrustBadges/TrustBadges'
import WhoWeServe from '../../components/common/WhoWeServe/WhoWeServe'
import { services } from '../../utils/servicesData'
import { IconShield, IconStar, IconKey, IconCrown, IconDiamond } from '../../assets/icons'
import heroImage from '../../assets/images/hero/Business-Wealth-Key.jpg'
import differentImage from '../../assets/images/hero/Business-Wealth-Key-Different.png'
import './About.css'

const WHO_WE_SERVE = [
  'Entrepreneurs', 'CEOs & Executives', 'Business Owners', 'Investors',
  'Contractors', 'Traders', 'Real Estate Investors', 'Corporations',
  'Startups', 'Professionals', 'Directors', 'Family Businesses',
]

const DIFFERENTIATORS = [
  'We identify hidden spiritual and energetic obstacles blocking your business',
  'We strengthen your prosperity consciousness for long-term success',
  'We attract the right opportunities, partnerships, and financial pathways',
  'We provide clarity when conventional analysis cannot explain the blockage',
  'We combine deep spiritual insight with an understanding of business reality',
  'We offer absolute confidentiality — your goals remain entirely private',
  'We serve individuals and corporations with equal depth and personalisation',
  'We are committed to your lasting prosperity, not a single transaction',
]

const VALUES = [
  { icon: <IconShield size={28} />, title: 'Confidentiality',  description: 'Every consultation and all information shared is treated with absolute discretion.' },
  { icon: <IconDiamond size={28} />, title: 'Integrity',       description: 'We operate with honesty and transparency in everything we do.' },
  { icon: <IconStar size={28} />, title: 'Excellence',         description: 'We hold ourselves to the highest standard in every service we provide.' },
  { icon: <IconCrown size={28} />, title: 'Commitment',        description: 'We are genuinely invested in your long-term prosperity and success.' },
  { icon: <IconKey size={28} />, title: 'Respect',             description: 'Every client is treated with dignity, care, and without judgement.' },
]

export default function About() {
  const seo = useSEO('/about')

  return (
    <>
      {seo}

      <HeroSection
        image={heroImage}
        imageAlt="About Business Wealth Key — spiritual business guidance"
        title="The Spiritual Key to Business Prosperity, Wealth, and Success"
        subtitle="We exist to serve those who know their business is capable of more — and who are ready to unlock the forces that make lasting prosperity possible."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        ctaSecondary={{ label: 'Our Services', href: '/services' }}
        align="center"
      />

      {/* ── Our Story ── */}
      <SectionWrapper background="alt">
        <div className="about-story">
          <div className="about-story__text">
            <p className="page-eyebrow">Our Founding</p>
            <h2 className="page-heading">Why Business Wealth Key Exists</h2>
            <div className="section-divider" />
            <p>Business Wealth Key was founded on a simple but profound truth: that lasting business success is not achieved through strategy alone. Behind every thriving enterprise is an alignment of energy, intention, and opportunity that conventional consulting cannot fully address.</p>
            <p>We were created to serve entrepreneurs, executives, investors, and corporations who sense that something beyond the visible is influencing their results — and who are ready to address it with seriousness and discretion.</p>
            <p>Our work sits at the intersection of deep spiritual insight and the hard realities of business. We do not offer vague promises. We offer genuine guidance, grounded in decades of experience, delivered with absolute confidentiality and a genuine commitment to your prosperity.</p>
          </div>
          <div className="about-story__aside">
            <div className="page-highlight">
              <p>"Every business journey is unique. Every obstacle has a root cause. Our purpose is to find it — and to help you move past it toward the prosperity you are seeking."</p>
            </div>
            <div className="about-mission-box">
              <h3>Our Mission</h3>
              <p>To provide trusted spiritual business guidance that creates lasting prosperity and greater business success for those we serve.</p>
              <h3>Our Vision</h3>
              <p>To become a globally recognised destination for spiritual business solutions — trusted by leaders on every continent.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── What Makes Us Different ── */}
      <SectionWrapper background="default" className="about-different-section">
        <div className="page-section-header">
          <p className="page-eyebrow">Our Approach</p>
          <h2 className="page-heading">What Makes Business Wealth Key Different</h2>
          <div className="section-divider" />
        </div>
        <ul className="about-differentiators">
          {DIFFERENTIATORS.map((item, i) => (
            <li key={i} className="about-differentiator">
              <span className="about-differentiator__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="about-differentiator__text">{item}</span>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* ── Services ── */}
      <SectionWrapper background="alt">
        <div className="page-section-header">
          <p className="page-eyebrow">Core Areas of Expertise</p>
          <h2 className="page-heading">Six Dimensions of Business Prosperity</h2>
          <div className="section-divider" />
        </div>
        <div className="page-services-grid">
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

      {/* ── Who We Serve ── */}
      <SectionWrapper background="default">
        <WhoWeServe items={WHO_WE_SERVE} heading="Who We Serve" variant="card" columns="auto" />
      </SectionWrapper>

      {/* ── Values ── */}
      <SectionWrapper background="alt">
        <TrustBadges heading="Our Core Values" items={VALUES} columns={3} />
      </SectionWrapper>

      <CTABanner
        heading="Your Success Journey Starts Here"
        subtext="Speak privately with Business Wealth Key and take the first step toward lasting prosperity."
        ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
        variant="dark"
      />
    </>
  )
}

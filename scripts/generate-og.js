import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const pages = [
  {
    slug: 'og-home',
    lines: ['Psychic Business Consultations', '&amp; Prosperity Rituals'],
    subtitle: 'Spiritual guidance for entrepreneurs and corporations worldwide.',
  },
  {
    slug: 'og-about',
    lines: ['About Business Wealth Key'],
    subtitle: 'Our mission, philosophy, and commitment to your prosperity.',
  },
  {
    slug: 'og-services',
    lines: ['Spiritual Business Services'],
    subtitle: 'Consultations · Rituals · Wealth Activation · Breakthrough',
  },
  {
    slug: 'og-psychic-consultations',
    lines: ['Psychic Business Consultations'],
    subtitle: 'Clarity, insight, and guidance for your business challenges.',
  },
  {
    slug: 'og-prosperity-rituals',
    lines: ['Business Prosperity Rituals'],
    subtitle: 'Activate abundance and align your business with prosperity.',
  },
  {
    slug: 'og-financial-blockage',
    lines: ['Financial Blockage Removal'],
    subtitle: 'Restore financial flow and remove hidden obstacles to growth.',
  },
  {
    slug: 'og-wealth-activation',
    lines: ['Wealth Activation Services'],
    subtitle: 'Strengthen your path to lasting financial prosperity.',
  },
  {
    slug: 'og-business-breakthrough',
    lines: ['Business Breakthrough Solutions'],
    subtitle: 'Overcome stagnation and unlock your next level of growth.',
  },
  {
    slug: 'og-corporate-solutions',
    lines: ['Corporate Spiritual Solutions'],
    subtitle: 'Tailored guidance for corporations, executives, and boards.',
  },
  {
    slug: 'og-contact',
    lines: ['Book a Private Consultation'],
    subtitle: 'Begin your journey toward prosperity and business success.',
  },
]

function generateSVG(lines, subtitle) {
  const isTwoLine = lines.length === 2
  const titleY1 = isTwoLine ? 258 : 300
  const titleY2 = 348
  const subtitleY = isTwoLine ? 452 : 408

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="bg" cx="18%" cy="52%" r="85%">
      <stop offset="0%" stop-color="#1C1035"/>
      <stop offset="55%" stop-color="#0D0A1A"/>
      <stop offset="100%" stop-color="#08060F"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#9B6EC8" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#9B6EC8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accentBar" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9B6EC8"/>
      <stop offset="50%" stop-color="#C4A0E8"/>
      <stop offset="100%" stop-color="#D4824A"/>
    </linearGradient>
    <linearGradient id="divLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9B6EC8" stop-opacity="0"/>
      <stop offset="25%" stop-color="#9B6EC8" stop-opacity="0.7"/>
      <stop offset="75%" stop-color="#9B6EC8" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#9B6EC8" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="bottomBar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#D4824A"/>
      <stop offset="35%" stop-color="#9B6EC8"/>
      <stop offset="65%" stop-color="#9B6EC8"/>
      <stop offset="100%" stop-color="#D4824A"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Soft centre glow -->
  <ellipse cx="600" cy="315" rx="480" ry="260" fill="url(#glow)"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="5" height="630" fill="url(#accentBar)"/>
  <!-- Top edge line -->
  <rect x="5" y="0" width="900" height="2" fill="url(#divLine)"/>

  <!-- Diamond ornament -->
  <polygon points="600,50 618,72 600,94 582,72"
    fill="none" stroke="#9B6EC8" stroke-width="1.5" opacity="0.65"/>
  <polygon points="600,57 612,72 600,87 588,72"
    fill="#9B6EC8" opacity="0.22"/>

  <!-- Brand name -->
  <text x="600" y="128"
    font-family="'Palatino Linotype','Palatino','Book Antiqua',Georgia,serif"
    font-size="14" fill="#9B6EC8" text-anchor="middle" letter-spacing="8">BUSINESS WEALTH KEY</text>

  <!-- Divider under brand name -->
  <rect x="350" y="146" width="500" height="1" fill="url(#divLine)"/>

  <!-- Title line 1 -->
  <text x="600" y="${titleY1}"
    font-family="'Palatino Linotype','Palatino','Book Antiqua',Georgia,serif"
    font-size="64" fill="#F0EBF8" text-anchor="middle" font-weight="normal">${lines[0]}</text>

  ${isTwoLine ? `<!-- Title line 2 -->
  <text x="600" y="${titleY2}"
    font-family="'Palatino Linotype','Palatino','Book Antiqua',Georgia,serif"
    font-size="64" fill="#F0EBF8" text-anchor="middle" font-weight="normal">${lines[1]}</text>` : ''}

  <!-- Subtitle -->
  <text x="600" y="${subtitleY}"
    font-family="'Segoe UI',Arial,sans-serif"
    font-size="23" fill="#B8A8D4" text-anchor="middle">${subtitle}</text>

  <!-- URL -->
  <text x="600" y="572"
    font-family="'Segoe UI',Arial,sans-serif"
    font-size="14" fill="#6B5E8A" text-anchor="middle" letter-spacing="3">businesswealthkey.com</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#bottomBar)"/>
</svg>`
}

async function main() {
  const outDir = join(ROOT, 'public', 'og')
  mkdirSync(outDir, { recursive: true })

  for (const page of pages) {
    const svg = generateSVG(page.lines, page.subtitle)
    const outPath = join(outDir, `${page.slug}.jpg`)
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(outPath)
    console.log(`  ${page.slug}.jpg`)
  }

  console.log('\nDone.')
}

main().catch(err => { console.error(err); process.exit(1) })

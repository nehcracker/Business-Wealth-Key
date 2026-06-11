# Psychic Consultations Heading Alignment + Meta Description Fixes — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update all H2/H3 heading strings in the Psychic Consultations page with SKAG keyword clusters, and trim all overlength meta descriptions in seoConfig.js to 150–160 characters.

**Architecture:** All changes are string replacements across two files — `src/pages/PsychicConsultations/PsychicConsultations.jsx` (9 heading strings) and `src/utils/seoConfig.js` (7 description strings). No structural changes, no new files, no other pages' heading content touched.

**Tech Stack:** React, Vite. No test runner — verification is done via `npm run dev` in a browser.

**Spec:** `docs/superpowers/specs/2026-06-11-psychic-consultations-heading-alignment.md`

---

## File Map

| File | Change |
|---|---|
| `src/pages/PsychicConsultations/PsychicConsultations.jsx` | Replace 9 heading strings (4 inline JSX, 5 component props) |
| `src/utils/seoConfig.js` | Replace 7 meta description strings |

---

## Task 1: Update Inline JSX Headings

Four heading strings are hardcoded directly in the JSX return block of `PsychicConsultations.jsx`.

**Files:**
- Modify: `src/pages/PsychicConsultations/PsychicConsultations.jsx`

- [ ] **Step 1: Open the file and locate the intro two-col section (around line 94–96)**

  Find this exact line:
  ```jsx
  <h2 className="page-heading">Psychic Business Consultations</h2>
  ```

- [ ] **Step 2: Replace the H2 intro heading**

  Change to:
  ```jsx
  <h2 className="page-heading">Psychic Business Consultations — Private Online Psychic Readings</h2>
  ```

- [ ] **Step 3: Locate the aside info box (around line 106–111)**

  Find this exact block:
  ```jsx
  <h3>Who This Is For</h3>
  <p>Entrepreneurs, executives, investors, and corporations facing important decisions, recurring obstacles, or an unexplained sense that something is working against their success.</p>
  <h3>How It Works</h3>
  <p>Sessions are conducted online. You share your key questions and challenges. We provide genuine psychic insight — clearly and directly.</p>
  ```

- [ ] **Step 4: Replace both H3 headings in the aside**

  Change to:
  ```jsx
  <h3>Private Sessions with an Experienced Spiritual Medium</h3>
  <p>Entrepreneurs, executives, investors, and corporations facing important decisions, recurring obstacles, or an unexplained sense that something is working against their success.</p>
  <h3>Online Psychic Reading Sessions — What to Expect</h3>
  <p>Sessions are conducted online. You share your key questions and challenges. We provide genuine psychic insight — clearly and directly.</p>
  ```

- [ ] **Step 5: Locate the cards grid header (around line 121–123)**

  Find this exact line:
  ```jsx
  <h2 className="page-heading">What We Assess in Your Consultation</h2>
  ```

- [ ] **Step 6: Replace the cards grid H2**

  Change to:
  ```jsx
  <h2 className="page-heading">What Your Spiritual Medium Assesses Each Session</h2>
  ```

- [ ] **Step 7: Commit**

  ```bash
  git add src/pages/PsychicConsultations/PsychicConsultations.jsx
  git commit -m "seo: update inline H2/H3 headings with SKAG keyword alignment on psychic-consultations"
  ```

---

## Task 2: Update Component `heading` Props

Five reusable components receive their heading text via a `heading` prop. All are in the same file.

**Files:**
- Modify: `src/pages/PsychicConsultations/PsychicConsultations.jsx`

- [ ] **Step 1: Locate the ProblemList for benefits (around line 137)**

  Find this exact block:
  ```jsx
  <ProblemList
    heading="Benefits of a Psychic Business Consultation"
    items={BENEFITS}
    icon="check"
    columns={2}
  />
  ```

- [ ] **Step 2: Replace the benefits ProblemList heading**

  Change to:
  ```jsx
  <ProblemList
    heading="What You Gain From a Psychic Business Consultation"
    items={BENEFITS}
    icon="check"
    columns={2}
  />
  ```

- [ ] **Step 3: Locate the ProblemList for why-seek (around line 145)**

  Find this exact block:
  ```jsx
  <ProblemList
    heading="Common Reasons Clients Seek This Service"
    items={WHY_SEEK}
    icon="diamond"
    columns={1}
  />
  ```

- [ ] **Step 4: Replace the why-seek ProblemList heading**

  Change to:
  ```jsx
  <ProblemList
    heading="Signs You Need an Online Psychic Reading for Business"
    items={WHY_SEEK}
    icon="diamond"
    columns={1}
  />
  ```

- [ ] **Step 5: Locate the ProcessSteps component (around line 154)**

  Find this exact block:
  ```jsx
  <ProcessSteps
    heading="How Your Consultation Works"
    steps={processStepsData['psychic-consultations']}
    layout="horizontal"
  />
  ```

- [ ] **Step 6: Replace the ProcessSteps heading**

  Change to:
  ```jsx
  <ProcessSteps
    heading="How Your Online Psychic Reading Session Works"
    steps={processStepsData['psychic-consultations']}
    layout="horizontal"
  />
  ```

- [ ] **Step 7: Locate the TrustBadges component (around line 162)**

  Find this exact line:
  ```jsx
  <TrustBadges heading="Why Choose Business Wealth Key" items={TRUST} columns={3} />
  ```

- [ ] **Step 8: Replace the TrustBadges heading**

  Change to:
  ```jsx
  <TrustBadges heading="Why We're Trusted as the Best Online Psychic for Business" items={TRUST} columns={3} />
  ```

- [ ] **Step 9: Locate the CTABanner component (around line 170)**

  Find this exact block:
  ```jsx
  <CTABanner
    heading="Gain Greater Insight Into Your Business Future"
    subtext="Book a private psychic business consultation and take the first step toward the clarity your business needs."
    ctaPrimary={{ label: 'Book Your Consultation', href: '/contact' }}
    variant="dark"
  />
  ```

- [ ] **Step 10: Replace the CTABanner heading**

  Change to:
  ```jsx
  <CTABanner
    heading="Book Your Psychic Business Consultation Today"
    subtext="Book a private psychic business consultation and take the first step toward the clarity your business needs."
    ctaPrimary={{ label: 'Book Your Consultation', href: '/contact' }}
    variant="dark"
  />
  ```

- [ ] **Step 11: Confirm these two components are unchanged**

  These must NOT be modified — do not touch their heading props:
  ```jsx
  <WhoWeServe items={WHO} heading="Who This Service Is For" variant="pill" />
  <FAQAccordion items={faqData['psychic-consultations']} heading="Frequently Asked Questions" />
  ```

- [ ] **Step 12: Commit**

  ```bash
  git add src/pages/PsychicConsultations/PsychicConsultations.jsx
  git commit -m "seo: update component heading props with SKAG keyword alignment on psychic-consultations"
  ```

---

## Task 3: Update Meta Descriptions in seoConfig.js

Seven descriptions across `src/utils/seoConfig.js` exceed the 160-character limit. Replace each one with the exact string below (all verified at 150–160 chars). Three routes are already within range and must NOT be touched: `/services/prosperity-rituals`, `/services/financial-blockage`, `/services/business-breakthrough`.

**Files:**
- Modify: `src/utils/seoConfig.js`

- [ ] **Step 1: Locate the `/` route description (around line 17)**

  Find:
  ```js
  description: 'Unlock business prosperity with psychic consultations, prosperity rituals, financial blockage removal, and wealth activation services. Serving entrepreneurs, executives, and corporations worldwide.',
  ```

  Replace with:
  ```js
  description: 'Psychic consultations, prosperity rituals, financial blockage removal and wealth activation. For entrepreneurs, executives and corporations worldwide.',
  ```

- [ ] **Step 2: Locate the `/about` route description (around line 23)**

  Find:
  ```js
  description: 'Learn about Business Wealth Key — our mission, philosophy, and commitment to helping entrepreneurs, executives, and corporations achieve lasting prosperity through spiritual guidance.',
  ```

  Replace with:
  ```js
  description: 'Learn about Business Wealth Key — helping entrepreneurs, executives and corporations achieve lasting prosperity through authentic spiritual guidance worldwide.',
  ```

- [ ] **Step 3: Locate the `/services` route description (around line 29)**

  Find:
  ```js
  description: 'Explore our full range of spiritual business services — psychic consultations, prosperity rituals, financial blockage removal, wealth activation, business breakthrough, and corporate solutions.',
  ```

  Replace with:
  ```js
  description: 'Psychic consultations, prosperity rituals, financial blockage removal, wealth activation and business breakthrough solutions for entrepreneurs worldwide.',
  ```

- [ ] **Step 4: Locate the `/services/psychic-consultations` route description (around line 38)**

  Find:
  ```js
  description: 'Gain clarity on business challenges, identify hidden opportunities, and strengthen your path to success with private psychic business consultations. Available worldwide.',
  ```

  Replace with:
  ```js
  description: 'Book a private psychic business consultation with an experienced spiritual medium. Online psychic readings for entrepreneurs and executives worldwide.',
  ```

- [ ] **Step 5: Locate the `/services/wealth-activation` route description (around line 58)**

  Find:
  ```js
  description: 'Activate your wealth consciousness and strengthen your path to long-term financial prosperity. Services for individuals, entrepreneurs, investors, and corporations.',
  ```

  Replace with:
  ```js
  description: 'Activate your wealth consciousness and strengthen your path to long-term financial prosperity. For entrepreneurs, investors, executives and corporations.',
  ```

- [ ] **Step 6: Locate the `/services/corporate-solutions` route description (around line 72)**

  Find:
  ```js
  description: 'Tailored spiritual guidance for corporations, executives, directors, and investors. Corporate prosperity programs, executive success support, and organizational growth solutions.',
  ```

  Replace with:
  ```js
  description: 'Spiritual guidance for corporations, executives and directors. Corporate prosperity programmes, executive success support and organisational growth solutions.',
  ```

- [ ] **Step 7: Locate the `/contact` route description (around line 79)**

  Find:
  ```js
  description: 'Book a private consultation with Business Wealth Key. Serving clients worldwide online. Begin your journey toward prosperity, business growth, and financial success.',
  ```

  Replace with:
  ```js
  description: 'Book a private consultation with Business Wealth Key. Serving clients worldwide. Begin your journey toward prosperity, business growth and financial success.',
  ```

- [ ] **Step 8: Verify all 7 descriptions are within 150–160 chars**

  Run this in the project root:
  ```bash
  node -e "
  const s = require('fs').readFileSync('src/utils/seoConfig.js', 'utf8');
  const m = s.matchAll(/description:\s*'([^']+)'/g);
  for (const r of m) {
    const len = r[1].length;
    const status = len >= 150 && len <= 160 ? 'OK' : 'FAIL';
    console.log(status, len, r[1].substring(0, 60) + '...');
  }
  "
  ```

  Expected: all lines print `OK`. If any print `FAIL`, fix the description before committing.

- [ ] **Step 9: Commit**

  ```bash
  git add src/utils/seoConfig.js
  git commit -m "seo: trim all meta descriptions to 150-160 chars"
  ```

---

## Task 4: Verify in Browser

**Files:** None — verification only.

- [ ] **Step 1: Start the dev server**

  ```bash
  npm run dev
  ```

  Expected: Vite starts (port 5173 or next available).

- [ ] **Step 2: Open the page**

  Navigate to `http://localhost:5173/services/psychic-consultations`

- [ ] **Step 3: Inspect H2 headings with DevTools**

  Open DevTools → Elements. Search for `<h2`. Confirm these H2s appear (in order):

  1. `Psychic Business Consultations — Private Online Psychic Readings`
  2. `Who This Service Is For` *(unchanged)*
  3. `What Your Spiritual Medium Assesses Each Session`
  4. `What You Gain From a Psychic Business Consultation`
  5. `Signs You Need an Online Psychic Reading for Business`
  6. `How Your Online Psychic Reading Session Works`
  7. `Why We're Trusted as the Best Online Psychic for Business`
  8. `Frequently Asked Questions` *(unchanged)*

  Plus in the CTABanner: `Book Your Psychic Business Consultation Today`

- [ ] **Step 4: Inspect H3 headings**

  Search for `<h3`. Confirm both H3s in the aside read:
  - `Private Sessions with an Experienced Spiritual Medium`
  - `Online Psychic Reading Sessions — What to Expect`

- [ ] **Step 5: Verify SKAG keyword coverage**

  | Phrase | Must appear in |
  |---|---|
  | `psychic business consultation` | H2 intro, H2 benefits, H2 CTA |
  | `online psychic reading` | H3 aside-2, H2 why-seek, H2 process |
  | `spiritual medium` | H3 aside-1, H2 cards |
  | `best online psychic` | H2 trust |

- [ ] **Step 6: Check page source for updated psychic-consultations description**

  In DevTools → Elements, search for `<meta name="description"`. Confirm it reads:
  `Book a private psychic business consultation with an experienced spiritual medium. Online psychic readings for entrepreneurs and executives worldwide.`
  (150 chars)

- [ ] **Step 7: Final commit**

  ```bash
  git add -A
  git commit -m "seo: verified heading alignment and description fixes complete on psychic-consultations"
  ```

---

## Done

Once pushed to `main`, Cloudflare Pages auto-deploys. After deploy:
- Re-submit `https://businesswealthkey.com/services/psychic-consultations` to Google Search Console for re-indexing.
- All updated pages (`/`, `/about`, `/services`, `/services/wealth-activation`, `/services/corporate-solutions`, `/contact`) will also receive updated meta descriptions automatically.

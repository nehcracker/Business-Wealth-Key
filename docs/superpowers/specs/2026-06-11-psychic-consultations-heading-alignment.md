# Psychic Consultations — H2/H3 Heading SKAG Alignment + Meta Description Fixes

**Date:** 2026-06-11
**Scope:** `/services/psychic-consultations` page H2/H3 heading tags + all overlength meta descriptions in `seoConfig.js`.
**Goal:** Weave the 4 SKAG keyword clusters verbatim (or near-verbatim) into the heading hierarchy, and trim all meta descriptions to 150–160 characters for optimal SERP display.

---

## 1. SKAG Keyword Reference

| Ad Group | Primary Keyword | Volume |
|---|---|---|
| AG1 | `psychic business consultation` | service-exact |
| AG2 | `online psychic reading` | 5,000 |
| AG3 | `spiritual medium` | 5,000 |
| AG4 | `best online psychic` | 500 (strong buyer intent) |

---

## 2. Heading Changes

File: `src/pages/PsychicConsultations/PsychicConsultations.jsx`

### 2.1 Inline JSX Headings

| Tag | Current | Proposed |
|---|---|---|
| H2 (intro two-col) | `Psychic Business Consultations` | `Psychic Business Consultations — Private Online Psychic Readings` |
| H3 (aside box 1) | `Who This Is For` | `Private Sessions with an Experienced Spiritual Medium` |
| H3 (aside box 2) | `How It Works` | `Online Psychic Reading Sessions — What to Expect` |
| H2 (cards grid) | `What We Assess in Your Consultation` | `What Your Spiritual Medium Assesses Each Session` |

### 2.2 Component `heading` Prop Changes

| Component | Current heading prop | Proposed heading prop |
|---|---|---|
| `ProblemList` (benefits) | `Benefits of a Psychic Business Consultation` | `What You Gain From a Psychic Business Consultation` |
| `ProblemList` (why-seek) | `Common Reasons Clients Seek This Service` | `Signs You Need an Online Psychic Reading for Business` |
| `ProcessSteps` | `How Your Consultation Works` | `How Your Online Psychic Reading Session Works` |
| `TrustBadges` | `Why Choose Business Wealth Key` | `Why We're Trusted as the Best Online Psychic for Business` |
| `CTABanner` | `Gain Greater Insight Into Your Business Future` | `Book Your Psychic Business Consultation Today` |

### 2.3 Headings Left Unchanged

| Component | Heading | Reason |
|---|---|---|
| `WhoWeServe` | `Who This Service Is For` | Audience copy — not a keyword section |
| `FAQAccordion` | `Frequently Asked Questions` | Standard label — no keyword value |

---

## 3. SKAG Coverage After Changes

| Ad Group | Keyword | Headings That Contain It |
|---|---|---|
| AG1 | `psychic business consultation` | H2 intro, H2 benefits (#5), H2 CTA (#9) |
| AG2 | `online psychic reading` | H3 aside-2 (#3), H2 why-seek (#6), H2 process (#7) |
| AG3 | `spiritual medium` | H3 aside-1 (#2), H2 cards (#4) |
| AG4 | `best online psychic` | H2 trust (#8) |

---

## 4. Exact Heading Code Changes

### 4.1 H2 intro (line ~96)

```jsx
// Before
<h2 className="page-heading">Psychic Business Consultations</h2>

// After
<h2 className="page-heading">Psychic Business Consultations — Private Online Psychic Readings</h2>
```

### 4.2 H3 aside box 1 (line ~107)

```jsx
// Before
<h3>Who This Is For</h3>

// After
<h3>Private Sessions with an Experienced Spiritual Medium</h3>
```

### 4.3 H3 aside box 2 (line ~109)

```jsx
// Before
<h3>How It Works</h3>

// After
<h3>Online Psychic Reading Sessions — What to Expect</h3>
```

### 4.4 H2 cards grid (line ~123)

```jsx
// Before
<h2 className="page-heading">What We Assess in Your Consultation</h2>

// After
<h2 className="page-heading">What Your Spiritual Medium Assesses Each Session</h2>
```

### 4.5 ProblemList — benefits (line ~138)

```jsx
// Before
<ProblemList
  heading="Benefits of a Psychic Business Consultation"
  items={BENEFITS}
  icon="check"
  columns={2}
/>

// After
<ProblemList
  heading="What You Gain From a Psychic Business Consultation"
  items={BENEFITS}
  icon="check"
  columns={2}
/>
```

### 4.6 ProblemList — why-seek (line ~146)

```jsx
// Before
<ProblemList
  heading="Common Reasons Clients Seek This Service"
  items={WHY_SEEK}
  icon="diamond"
  columns={1}
/>

// After
<ProblemList
  heading="Signs You Need an Online Psychic Reading for Business"
  items={WHY_SEEK}
  icon="diamond"
  columns={1}
/>
```

### 4.7 ProcessSteps (line ~154)

```jsx
// Before
<ProcessSteps
  heading="How Your Consultation Works"
  steps={processStepsData['psychic-consultations']}
  layout="horizontal"
/>

// After
<ProcessSteps
  heading="How Your Online Psychic Reading Session Works"
  steps={processStepsData['psychic-consultations']}
  layout="horizontal"
/>
```

### 4.8 TrustBadges (line ~162)

```jsx
// Before
<TrustBadges heading="Why Choose Business Wealth Key" items={TRUST} columns={3} />

// After
<TrustBadges heading="Why We're Trusted as the Best Online Psychic for Business" items={TRUST} columns={3} />
```

### 4.9 CTABanner (line ~170)

```jsx
// Before
<CTABanner
  heading="Gain Greater Insight Into Your Business Future"
  subtext="Book a private psychic business consultation and take the first step toward the clarity your business needs."
  ctaPrimary={{ label: 'Book Your Consultation', href: '/contact' }}
  variant="dark"
/>

// After
<CTABanner
  heading="Book Your Psychic Business Consultation Today"
  subtext="Book a private psychic business consultation and take the first step toward the clarity your business needs."
  ctaPrimary={{ label: 'Book Your Consultation', href: '/contact' }}
  variant="dark"
/>
```

---

## 5. Meta Description Changes

File: `src/utils/seoConfig.js`

All descriptions trimmed to 150–160 characters. Pages already within range (`/services/prosperity-rituals`, `/services/financial-blockage`, `/services/business-breakthrough`) are left unchanged.

| Route | Chars | New Description |
|---|---|---|
| `/` | 150 | `Psychic consultations, prosperity rituals, financial blockage removal and wealth activation. For entrepreneurs, executives and corporations worldwide.` |
| `/about` | 159 | `Learn about Business Wealth Key — helping entrepreneurs, executives and corporations achieve lasting prosperity through authentic spiritual guidance worldwide.` |
| `/services` | 153 | `Psychic consultations, prosperity rituals, financial blockage removal, wealth activation and business breakthrough solutions for entrepreneurs worldwide.` |
| `/services/psychic-consultations` | 150 | `Book a private psychic business consultation with an experienced spiritual medium. Online psychic readings for entrepreneurs and executives worldwide.` |
| `/services/wealth-activation` | 153 | `Activate your wealth consciousness and strengthen your path to long-term financial prosperity. For entrepreneurs, investors, executives and corporations.` |
| `/services/corporate-solutions` | 158 | `Spiritual guidance for corporations, executives and directors. Corporate prosperity programmes, executive success support and organisational growth solutions.` |
| `/contact` | 157 | `Book a private consultation with Business Wealth Key. Serving clients worldwide. Begin your journey toward prosperity, business growth and financial success.` |

### 5.1 Exact seoConfig.js Changes

```js
// Route: /
description: 'Psychic consultations, prosperity rituals, financial blockage removal and wealth activation. For entrepreneurs, executives and corporations worldwide.',

// Route: /about
description: 'Learn about Business Wealth Key — helping entrepreneurs, executives and corporations achieve lasting prosperity through authentic spiritual guidance worldwide.',

// Route: /services
description: 'Psychic consultations, prosperity rituals, financial blockage removal, wealth activation and business breakthrough solutions for entrepreneurs worldwide.',

// Route: /services/psychic-consultations
description: 'Book a private psychic business consultation with an experienced spiritual medium. Online psychic readings for entrepreneurs and executives worldwide.',

// Route: /services/wealth-activation
description: 'Activate your wealth consciousness and strengthen your path to long-term financial prosperity. For entrepreneurs, investors, executives and corporations.',

// Route: /services/corporate-solutions
description: 'Spiritual guidance for corporations, executives and directors. Corporate prosperity programmes, executive success support and organisational growth solutions.',

// Route: /contact
description: 'Book a private consultation with Business Wealth Key. Serving clients worldwide. Begin your journey toward prosperity, business growth and financial success.',
```

---

## 6. Files Changed

| File | Change type |
|---|---|
| `src/pages/PsychicConsultations/PsychicConsultations.jsx` | Modify — 9 heading strings (4 inline JSX, 5 component props) |
| `src/utils/seoConfig.js` | Modify — 7 meta description strings |

No new files. No other pages' heading content is touched.

---

## 7. Verification

After implementation, open `http://localhost:5173/services/psychic-consultations` and confirm:

- H2 count: 8 (2 inline + 6 from components)
- H3 count: 2 (both in the aside info box)
- The phrase "psychic business consultation" appears in at least 3 H2s
- The phrase "online psychic reading" appears in at least 3 H2/H3s
- The phrase "spiritual medium" appears in at least 2 H2/H3s
- The phrase "best online psychic" appears in the trust H2
- No heading duplicates another
- In browser DevTools → Network → doc source: all 7 updated descriptions are 150–160 chars

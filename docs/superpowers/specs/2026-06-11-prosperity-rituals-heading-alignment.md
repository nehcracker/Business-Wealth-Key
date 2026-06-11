# Prosperity Rituals — H2/H3 Heading SKAG Alignment

**Date:** 2026-06-11
**Scope:** `/services/prosperity-rituals` page only — H2 and H3 heading tags only.
**Goal:** Weave the 4 SKAG keyword clusters verbatim (or near-verbatim) into the heading hierarchy below the H1, so Google reads strong topical authority signals and SKAG landing pages inherit tight message match.

---

## 1. SKAG Keyword Reference

| Ad Group | Primary Keyword | Match Types |
|---|---|---|
| AG1 | `ritual for business success` | exact, phrase, broad-mod |
| AG2 | `luck rituals for business` / `good luck rituals for business` | exact, phrase, broad-mod |
| AG3 | `financial blockage removal` | exact, phrase, broad-mod |
| AG4 | `spiritual blockage removal` / `remove spiritual blockages` | exact, phrase, broad-mod |

---

## 2. Heading Changes

File: `src/pages/ProsperityRituals/ProsperityRituals.jsx`

### 2.1 Inline JSX Headings

| Tag | Current | Proposed |
|---|---|---|
| H2 (intro two-col) | `Business Prosperity Rituals` | `Prosperity Rituals for Business Success & Luck` |
| H3 (aside box 1) | `Individual & Corporate` | `Private Ritual Sessions — Entrepreneurs & Corporations` |
| H3 (aside box 2) | `Ongoing Support Available` | `Spiritual & Financial Blockage Removal Programmes` |
| H2 (offerings grid) | `Our Prosperity Ritual Offerings` | `Luck Rituals for Business — Our Full Offering` |

### 2.2 Component `heading` Prop Changes

| Component | Current heading prop | Proposed heading prop |
|---|---|---|
| `ProblemList` (benefits) | `What Our Rituals Help Create` | `Results After Financial & Spiritual Blockage Removal` |
| `ProblemList` (why-seek) | `Common Reasons Clients Seek Prosperity Rituals` | `Signs of Spiritual or Financial Blockage in Your Business` |
| `ProcessSteps` | `How Your Ritual Programme Works` | `How Your Ritual for Business Success Works` |
| `TrustBadges` | `Why Choose Business Wealth Key` | `Why Clients Trust Us for Spiritual Blockage Removal` |
| `CTABanner` | `Position Yourself For Greater Prosperity` | `Begin Your Ritual for Business Success Today` |

### 2.3 Headings Left Unchanged

| Component | Heading | Reason |
|---|---|---|
| `WhoWeServe` | `Who This Service Is For` | Audience copy — not a keyword section |
| `FAQAccordion` | `Frequently Asked Questions` | Standard label — changing adds no keyword value |

---

## 3. SKAG Coverage After Changes

| Ad Group | Keyword | Headings That Contain It |
|---|---|---|
| AG1 | `ritual for business success` | H2 intro ("...Business Success & Luck"), H2 process ("...Business Success Works"), H2 CTA ("...Business Success Today") |
| AG2 | `luck rituals for business` | H2 intro ("...Success & Luck"), H2 offerings ("Luck Rituals for Business...") |
| AG3 | `financial blockage removal` | H3 aside-2 ("...Financial Blockage Removal..."), H2 benefits ("...Financial & Spiritual Blockage Removal"), H2 why-seek ("...Financial Blockage...") |
| AG4 | `spiritual blockage removal` | H3 aside-2 ("Spiritual & Financial Blockage Removal..."), H2 benefits ("...Spiritual Blockage Removal"), H2 why-seek ("Spiritual or Financial Blockage..."), H2 trust ("...Spiritual Blockage Removal") |

---

## 4. Exact Code Changes

### 4.1 H2 intro (line ~104)

```jsx
// Before
<h2 className="page-heading">Business Prosperity Rituals</h2>

// After
<h2 className="page-heading">Prosperity Rituals for Business Success & Luck</h2>
```

### 4.2 H3 aside box 1 (line ~116)

```jsx
// Before
<h3>Individual & Corporate</h3>

// After
<h3>Private Ritual Sessions — Entrepreneurs & Corporations</h3>
```

### 4.3 H3 aside box 2 (line ~119)

```jsx
// Before
<h3>Ongoing Support Available</h3>

// After
<h3>Spiritual & Financial Blockage Removal Programmes</h3>
```

### 4.4 H2 offerings grid (line ~131)

```jsx
// Before
<h2 className="page-heading">Our Prosperity Ritual Offerings</h2>

// After
<h2 className="page-heading">Luck Rituals for Business — Our Full Offering</h2>
```

### 4.5 ProblemList — benefits (line ~145)

```jsx
// Before
<ProblemList heading="What Our Rituals Help Create" items={BENEFITS} icon="star" columns={2} />

// After
<ProblemList heading="Results After Financial & Spiritual Blockage Removal" items={BENEFITS} icon="star" columns={2} />
```

### 4.6 ProblemList — why-seek (line ~149)

```jsx
// Before
<ProblemList heading="Common Reasons Clients Seek Prosperity Rituals" items={WHY_SEEK} icon="diamond" columns={1} />

// After
<ProblemList heading="Signs of Spiritual or Financial Blockage in Your Business" items={WHY_SEEK} icon="diamond" columns={1} />
```

### 4.7 ProcessSteps (line ~153)

```jsx
// Before
<ProcessSteps heading="How Your Ritual Programme Works" steps={processStepsData['prosperity-rituals']} layout="horizontal" />

// After
<ProcessSteps heading="How Your Ritual for Business Success Works" steps={processStepsData['prosperity-rituals']} layout="horizontal" />
```

### 4.8 TrustBadges (line ~157)

```jsx
// Before
<TrustBadges heading="Why Choose Business Wealth Key" items={TRUST} columns={3} />

// After
<TrustBadges heading="Why Clients Trust Us for Spiritual Blockage Removal" items={TRUST} columns={3} />
```

### 4.9 CTABanner (line ~164)

```jsx
// Before
<CTABanner
  heading="Position Yourself For Greater Prosperity"
  subtext="Begin your prosperity ritual programme and take decisive action toward the abundance your business deserves."
  ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
  variant="dark"
/>

// After
<CTABanner
  heading="Begin Your Ritual for Business Success Today"
  subtext="Begin your prosperity ritual programme and take decisive action toward the abundance your business deserves."
  ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
  variant="dark"
/>
```

---

## 5. Files Changed

| File | Change type |
|---|---|
| `src/pages/ProsperityRituals/ProsperityRituals.jsx` | Modify — heading strings only, no structural changes |

No new files. No other pages touched.

---

## 6. Verification

After implementation, open `http://localhost:5173/services/prosperity-rituals` and inspect with DevTools → Elements. Confirm:

- H2 count: 8 (2 inline + 6 from components)
- H3 count: 2 (both in the aside info box)
- The phrase "business success" appears in at least 3 H2s
- The phrase "blockage removal" appears in at least 3 H2/H3s
- The phrase "luck rituals for business" appears verbatim in the offerings H2
- No heading uses the exact same phrasing as another (no duplicates)

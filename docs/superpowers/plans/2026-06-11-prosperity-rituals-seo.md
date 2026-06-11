# Prosperity Rituals SEO Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the `/services/prosperity-rituals` page to align with high-intent search keywords, improving organic visibility for queries like "ritual for business success", "luck rituals for business", and "financial blockage removal".

**Architecture:** Three files require changes — the global SEO config, the FAQ data utility, and the page component itself. No new files are created. All changes are isolated to the Prosperity Rituals service; other pages are untouched.

**Tech Stack:** React, Vite, react-helmet-async (SEO), plain CSS. No test runner configured — verification is done via `npm run dev` in a browser.

**Spec:** `docs/superpowers/specs/2026-06-11-prosperity-rituals-seo-skag-design.md`

---

## File Map

| File | Change |
|---|---|
| `src/utils/seoConfig.js` | Update title, description, keywords for `/services/prosperity-rituals` |
| `src/utils/faqData.js` | Replace Q1–Q3 in `prosperity-rituals` FAQ array |
| `src/pages/ProsperityRituals/ProsperityRituals.jsx` | Update hero title/subtitle, prepend RITUAL_SERVICES card, append WHY_SEEK items, update serviceSchema description |

---

## Task 1: Update SEO Config

**Files:**
- Modify: `src/utils/seoConfig.js`

- [ ] **Step 1: Open the file and locate the prosperity-rituals entry**

  In `src/utils/seoConfig.js`, find the block starting at `'/services/prosperity-rituals':` (currently around line 42).

- [ ] **Step 2: Replace the entire prosperity-rituals entry**

  Replace:
  ```js
  '/services/prosperity-rituals': {
      title:       'Business Prosperity Rituals | Wealth Attraction & Abundance',
      description: 'Activate prosperity, attract opportunities, and support business growth through powerful prosperity rituals. Individual and corporate programs available.',
      keywords:    'business prosperity ritual, wealth attraction ritual, abundance ritual, business blessing',
      ogImage:     '/og/og-prosperity-rituals.jpg',
      canonical:   'https://businesswealthkey.com/services/prosperity-rituals',
    },
  ```

  With:
  ```js
  '/services/prosperity-rituals': {
      title:       'Ritual for Business Success & Luck | Business Wealth Key',
      description: 'Powerful prosperity rituals for business success and luck. Remove spiritual and financial blockages. For entrepreneurs, executives, and corporations worldwide.',
      keywords:    'ritual for business success, luck rituals for business, good luck rituals for business, business rituals, spiritual blockage removal, financial blockage removal, remove spiritual blockages, business prosperity ritual',
      ogImage:     '/og/og-prosperity-rituals.jpg',
      canonical:   'https://businesswealthkey.com/services/prosperity-rituals',
    },
  ```

- [ ] **Step 3: Verify character counts**

  - Title: `Ritual for Business Success & Luck | Business Wealth Key` = **56 characters** ✓ (limit: 60)
  - Description: `Powerful prosperity rituals for business success and luck. Remove spiritual and financial blockages. For entrepreneurs, executives, and corporations worldwide.` = **159 characters** ✓ (limit: 160)

- [ ] **Step 4: Commit**

  ```bash
  git add src/utils/seoConfig.js
  git commit -m "seo: update prosperity-rituals title, description, keywords"
  ```

---

## Task 2: Update FAQ Data

**Files:**
- Modify: `src/utils/faqData.js`

- [ ] **Step 1: Locate the prosperity-rituals FAQ array**

  In `src/utils/faqData.js`, find `'prosperity-rituals': [` (around line 23). It currently has 4 questions.

- [ ] **Step 2: Replace Q1, Q2, Q3 — keep Q4 unchanged**

  Replace the entire `prosperity-rituals` array value with:
  ```js
  'prosperity-rituals': [
      {
        question: 'What is a ritual for business success?',
        answer:   'A ritual for business success is a personalised spiritual ceremony designed to activate the energetic conditions that support financial growth, attract opportunity, and align your business with prosperity. Each ritual is tailored to your specific goals and situation.',
      },
      {
        question: 'Can luck rituals for business really produce results?',
        answer:   'Yes. Luck rituals work by shifting the energetic environment around your business — removing resistance, attracting opportunity, and creating alignment between your intentions and your outcomes. Clients consistently report increased momentum, new opportunities, and improved financial flow following ritual work.',
      },
      {
        question: 'Can a ritual help with spiritual or financial blockage removal?',
        answer:   'Absolutely. Many clients seek ritual work specifically because they sense a spiritual or financial blockage limiting their success. Our rituals identify the root cause of the blockage and apply targeted spiritual work to clear it and restore natural prosperity flow.',
      },
      {
        question: 'Do you offer corporate prosperity ritual packages?',
        answer:   'Yes. We offer bespoke corporate prosperity programmes for organisations seeking to attract growth, improve financial performance, and support leadership success.',
      },
    ],
  ```

- [ ] **Step 3: Commit**

  ```bash
  git add src/utils/faqData.js
  git commit -m "seo: update prosperity-rituals FAQ questions to match search intent"
  ```

---

## Task 3: Update ProsperityRituals.jsx — Hero Section

**Files:**
- Modify: `src/pages/ProsperityRituals/ProsperityRituals.jsx`

- [ ] **Step 1: Locate the HeroSection component call**

  In `src/pages/ProsperityRituals/ProsperityRituals.jsx`, find the `<HeroSection` block (around line 88). It looks like:
  ```jsx
  <HeroSection
    image={heroImage}
    imageAlt="Prosperity Rituals — Business Wealth Key"
    title="Activate Prosperity. Attract Opportunities. Support Business Growth."
    subtitle="Harness the power of authentic spiritual rituals to align your business with abundance and create the energetic conditions for lasting financial prosperity."
    ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
    align="center"
  />
  ```

- [ ] **Step 2: Update title and subtitle props**

  Replace with:
  ```jsx
  <HeroSection
    image={heroImage}
    imageAlt="Prosperity Rituals — Business Wealth Key"
    title="Rituals for Business Success, Luck & Prosperity"
    subtitle="Remove spiritual and financial blockages. Attract luck, opportunity, and abundance through personalised prosperity rituals for entrepreneurs, executives, and corporations."
    ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
    align="center"
  />
  ```

- [ ] **Step 3: Commit**

  ```bash
  git add src/pages/ProsperityRituals/ProsperityRituals.jsx
  git commit -m "seo: update prosperity-rituals hero title and subtitle with target keywords"
  ```

---

## Task 4: Update ProsperityRituals.jsx — RITUAL_SERVICES, WHY_SEEK, serviceSchema

**Files:**
- Modify: `src/pages/ProsperityRituals/ProsperityRituals.jsx`

- [ ] **Step 1: Prepend new card to RITUAL_SERVICES array**

  Find the `const RITUAL_SERVICES = [` array (around line 24). Prepend this as the **first item**:
  ```js
  const RITUAL_SERVICES = [
    { title: 'Spiritual & Financial Blockage Removal', desc: 'Identify and clear spiritual and financial blockages restricting your prosperity flow, revenue growth, and business success.' },
    { title: 'Wealth Attraction Rituals',       desc: 'Rituals designed to draw greater financial abundance and revenue to your business.' },
    // ... rest of existing items unchanged
  ]
  ```

  The full updated array:
  ```js
  const RITUAL_SERVICES = [
    { title: 'Spiritual & Financial Blockage Removal', desc: 'Identify and clear spiritual and financial blockages restricting your prosperity flow, revenue growth, and business success.' },
    { title: 'Wealth Attraction Rituals',       desc: 'Rituals designed to draw greater financial abundance and revenue to your business.' },
    { title: 'Prosperity Activation',           desc: 'Activate dormant prosperity energy within your business and personal wealth field.' },
    { title: 'Business Blessing Ceremonies',    desc: 'Spiritual ceremonies to bless your business, premises, and ventures for success.' },
    { title: 'Opportunity Attraction Rituals',  desc: 'Open energetic pathways to new clients, contracts, and business opportunities.' },
    { title: 'Partnership & Alliance Rituals',  desc: 'Strengthen the energetic foundations of important business relationships.' },
    { title: 'Revenue Growth Rituals',          desc: 'Targeted rituals focused on increasing revenue flow and financial performance.' },
    { title: 'Market Success Rituals',          desc: 'Align your business energy with market conditions to improve competitive positioning.' },
    { title: 'Investor Attraction Rituals',     desc: 'Create the energetic conditions that attract the right investors and funding sources.' },
  ]
  ```

- [ ] **Step 2: Append two items to WHY_SEEK array**

  Find the `const WHY_SEEK = [` array (around line 48). Append two items to the **end**:
  ```js
  const WHY_SEEK = [
    'Business performance has plateaued despite strong execution',
    'Financial growth feels blocked or restricted by unseen forces',
    'Opportunities consistently fail to materialise or follow through',
    'A sense that negative energy or interference is affecting results',
    'Desire to establish a strong prosperity foundation for a new venture',
    'Corporate need for systematic energetic improvement across departments',
    'Experiencing spiritual blockages you believe are suppressing financial performance',
    'Seeking financial blockage removal to restore natural prosperity flow',
  ]
  ```

- [ ] **Step 3: Update serviceSchema description**

  Find the `generateServiceSchema` call (around line 72):
  ```js
  const serviceSchema = generateServiceSchema({
    name:        'Business Prosperity Rituals',
    description: 'Activate prosperity, attract opportunities, and support business growth through powerful prosperity rituals. Individual and corporate programs available.',
    slug:        '/services/prosperity-rituals',
  })
  ```

  Replace the `description` value:
  ```js
  const serviceSchema = generateServiceSchema({
    name:        'Business Prosperity Rituals',
    description: 'Powerful prosperity rituals for business success and luck. Remove spiritual and financial blockages. For entrepreneurs, executives, and corporations worldwide.',
    slug:        '/services/prosperity-rituals',
  })
  ```

- [ ] **Step 4: Commit**

  ```bash
  git add src/pages/ProsperityRituals/ProsperityRituals.jsx
  git commit -m "seo: add blockage removal card, keyword-aligned WHY_SEEK items, update serviceSchema"
  ```

---

## Task 5: Verify in Browser

**Files:** None — verification only.

- [ ] **Step 1: Start the dev server**

  ```bash
  npm run dev
  ```

  Expected: Vite dev server starts at `http://localhost:5173`

- [ ] **Step 2: Check the page title in browser tab**

  Open `http://localhost:5173/services/prosperity-rituals`

  Expected: Browser tab shows `Ritual for Business Success & Luck | Business Wealth Key`

- [ ] **Step 3: Inspect meta tags**

  Open DevTools → Elements → `<head>`. Confirm:
  - `<title>` = `Ritual for Business Success & Luck | Business Wealth Key`
  - `<meta name="description">` content = `Powerful prosperity rituals for business success and luck. Remove spiritual and financial blockages. For entrepreneurs, executives, and corporations worldwide.`
  - `<meta name="keywords">` contains `ritual for business success`

- [ ] **Step 4: Check hero H1**

  On the page, the main heading should read: `Rituals for Business Success, Luck & Prosperity`

- [ ] **Step 5: Confirm RITUAL_SERVICES cards**

  Scroll to the "Our Prosperity Ritual Offerings" section. Confirm the **first card** reads:
  > **Spiritual & Financial Blockage Removal**
  > Identify and clear spiritual and financial blockages restricting your prosperity flow, revenue growth, and business success.

- [ ] **Step 6: Confirm WHY_SEEK list**

  Scroll to "Common Reasons Clients Seek Prosperity Rituals". Confirm the last two items are:
  - *Experiencing spiritual blockages you believe are suppressing financial performance*
  - *Seeking financial blockage removal to restore natural prosperity flow*

- [ ] **Step 7: Check FAQ section**

  Scroll to "Frequently Asked Questions". Confirm Q1 reads: `What is a ritual for business success?`

- [ ] **Step 8: Final commit if all verified**

  ```bash
  git add -A
  git commit -m "seo: verified prosperity-rituals keyword alignment complete"
  ```

---

## Done — Phase 1 Complete

Once deployed to Cloudflare Pages (auto-deploy from `main`):
1. Submit `https://businesswealthkey.com/services/prosperity-rituals` to Google Search Console for re-indexing
2. Monitor impressions for `ritual for business success`, `luck rituals for business`, `financial blockage removal`, `spiritual blockage removal` over 4–6 weeks
3. When keyword impressions appear → proceed to Phase 2 (Google Ads SKAG campaign per spec Section 4)

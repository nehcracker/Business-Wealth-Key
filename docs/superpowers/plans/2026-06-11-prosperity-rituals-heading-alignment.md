# Prosperity Rituals Heading Alignment — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update all H2 and H3 heading strings in the Prosperity Rituals page so each of the 4 SKAG keyword clusters appears verbatim or near-verbatim in the heading hierarchy, strengthening topical authority signals for Google and SKAG message match.

**Architecture:** All changes are string replacements in a single file — `src/pages/ProsperityRituals/ProsperityRituals.jsx`. Four headings are inline JSX strings; five are `heading` prop values passed to reusable components. No structural changes, no new files, no other pages touched.

**Tech Stack:** React, Vite. No test runner — verification is done via `npm run dev` in a browser.

**Spec:** `docs/superpowers/specs/2026-06-11-prosperity-rituals-heading-alignment.md`

---

## File Map

| File | Change |
|---|---|
| `src/pages/ProsperityRituals/ProsperityRituals.jsx` | Replace 9 heading strings (4 inline JSX, 5 component props) |

---

## Task 1: Update Inline JSX Headings

All four inline heading strings live inside the JSX return block of `ProsperityRituals.jsx`.

**Files:**
- Modify: `src/pages/ProsperityRituals/ProsperityRituals.jsx`

- [ ] **Step 1: Open the file and locate the two-col intro section (around line 100–122)**

  Find this block:
  ```jsx
  <p className="page-eyebrow">What This Service Offers</p>
  <h2 className="page-heading">Business Prosperity Rituals</h2>
  ```

- [ ] **Step 2: Replace the H2 intro heading**

  Change:
  ```jsx
  <h2 className="page-heading">Business Prosperity Rituals</h2>
  ```

  To:
  ```jsx
  <h2 className="page-heading">Prosperity Rituals for Business Success & Luck</h2>
  ```

- [ ] **Step 3: Locate the aside info box (around line 114–121)**

  Find this block:
  ```jsx
  <h3>Individual & Corporate</h3>
  <p>We serve solo entrepreneurs and large corporations alike. Every programme is scaled and customised to your size and goals.</p>
  <h3>Ongoing Support Available</h3>
  <p>One-time rituals or sustained prosperity programmes — we recommend the approach that will create the most lasting impact for your situation.</p>
  ```

- [ ] **Step 4: Replace both H3 headings in the aside**

  Change:
  ```jsx
  <h3>Individual & Corporate</h3>
  <p>We serve solo entrepreneurs and large corporations alike. Every programme is scaled and customised to your size and goals.</p>
  <h3>Ongoing Support Available</h3>
  <p>One-time rituals or sustained prosperity programmes — we recommend the approach that will create the most lasting impact for your situation.</p>
  ```

  To:
  ```jsx
  <h3>Private Ritual Sessions — Entrepreneurs & Corporations</h3>
  <p>We serve solo entrepreneurs and large corporations alike. Every programme is scaled and customised to your size and goals.</p>
  <h3>Spiritual & Financial Blockage Removal Programmes</h3>
  <p>One-time rituals or sustained prosperity programmes — we recommend the approach that will create the most lasting impact for your situation.</p>
  ```

- [ ] **Step 5: Locate the offerings grid header (around line 129–133)**

  Find this block:
  ```jsx
  <p className="page-eyebrow">Ritual Services</p>
  <h2 className="page-heading">Our Prosperity Ritual Offerings</h2>
  ```

- [ ] **Step 6: Replace the offerings grid H2**

  Change:
  ```jsx
  <h2 className="page-heading">Our Prosperity Ritual Offerings</h2>
  ```

  To:
  ```jsx
  <h2 className="page-heading">Luck Rituals for Business — Our Full Offering</h2>
  ```

- [ ] **Step 7: Commit**

  ```bash
  git add src/pages/ProsperityRituals/ProsperityRituals.jsx
  git commit -m "seo: update inline H2/H3 headings with SKAG keyword alignment"
  ```

---

## Task 2: Update Component `heading` Props

Five reusable components receive their heading text via a `heading` prop. All are in the same file.

**Files:**
- Modify: `src/pages/ProsperityRituals/ProsperityRituals.jsx`

- [ ] **Step 1: Locate the ProblemList for benefits (around line 145)**

  Find:
  ```jsx
  <ProblemList heading="What Our Rituals Help Create" items={BENEFITS} icon="star" columns={2} />
  ```

- [ ] **Step 2: Replace the benefits ProblemList heading**

  Change to:
  ```jsx
  <ProblemList heading="Results After Financial & Spiritual Blockage Removal" items={BENEFITS} icon="star" columns={2} />
  ```

- [ ] **Step 3: Locate the ProblemList for WHY_SEEK (around line 149)**

  Find:
  ```jsx
  <ProblemList heading="Common Reasons Clients Seek Prosperity Rituals" items={WHY_SEEK} icon="diamond" columns={1} />
  ```

- [ ] **Step 4: Replace the why-seek ProblemList heading**

  Change to:
  ```jsx
  <ProblemList heading="Signs of Spiritual or Financial Blockage in Your Business" items={WHY_SEEK} icon="diamond" columns={1} />
  ```

- [ ] **Step 5: Locate the ProcessSteps component (around line 153)**

  Find:
  ```jsx
  <ProcessSteps heading="How Your Ritual Programme Works" steps={processStepsData['prosperity-rituals']} layout="horizontal" />
  ```

- [ ] **Step 6: Replace the ProcessSteps heading**

  Change to:
  ```jsx
  <ProcessSteps heading="How Your Ritual for Business Success Works" steps={processStepsData['prosperity-rituals']} layout="horizontal" />
  ```

- [ ] **Step 7: Locate the TrustBadges component (around line 157)**

  Find:
  ```jsx
  <TrustBadges heading="Why Choose Business Wealth Key" items={TRUST} columns={3} />
  ```

- [ ] **Step 8: Replace the TrustBadges heading**

  Change to:
  ```jsx
  <TrustBadges heading="Why Clients Trust Us for Spiritual Blockage Removal" items={TRUST} columns={3} />
  ```

- [ ] **Step 9: Locate the CTABanner component (around line 164)**

  Find:
  ```jsx
  <CTABanner
    heading="Position Yourself For Greater Prosperity"
    subtext="Begin your prosperity ritual programme and take decisive action toward the abundance your business deserves."
    ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
    variant="dark"
  />
  ```

- [ ] **Step 10: Replace the CTABanner heading**

  Change to:
  ```jsx
  <CTABanner
    heading="Begin Your Ritual for Business Success Today"
    subtext="Begin your prosperity ritual programme and take decisive action toward the abundance your business deserves."
    ctaPrimary={{ label: 'Book a Consultation', href: '/contact' }}
    variant="dark"
  />
  ```

- [ ] **Step 11: Confirm these two components are unchanged**

  These two components must NOT be modified — do not touch their heading props:
  ```jsx
  <WhoWeServe heading="Who This Service Is For" variant="pill" />
  <FAQAccordion heading="Frequently Asked Questions" />
  ```

- [ ] **Step 12: Commit**

  ```bash
  git add src/pages/ProsperityRituals/ProsperityRituals.jsx
  git commit -m "seo: update component heading props with SKAG keyword alignment"
  ```

---

## Task 3: Verify in Browser

**Files:** None — verification only.

- [ ] **Step 1: Start the dev server**

  ```bash
  npm run dev
  ```

  Expected: Vite starts at `http://localhost:5173`

- [ ] **Step 2: Open the page**

  Navigate to `http://localhost:5173/services/prosperity-rituals`

- [ ] **Step 3: Inspect H2 headings with DevTools**

  Open DevTools → Elements. Search for `<h2`. Confirm these 6 H2s appear (in order):

  1. `Prosperity Rituals for Business Success & Luck`
  2. `Luck Rituals for Business — Our Full Offering`
  3. `Results After Financial & Spiritual Blockage Removal`
  4. `Signs of Spiritual or Financial Blockage in Your Business`
  5. `How Your Ritual for Business Success Works`
  6. `Why Clients Trust Us for Spiritual Blockage Removal`

  Plus two unchanged:
  - `Who This Service Is For`
  - `Frequently Asked Questions`

- [ ] **Step 4: Inspect H3 headings**

  Search for `<h3`. Confirm both H3s in the aside read:
  - `Private Ritual Sessions — Entrepreneurs & Corporations`
  - `Spiritual & Financial Blockage Removal Programmes`

- [ ] **Step 5: Verify keyword phrase coverage**

  | Phrase | Must appear in at least one H2 or H3 |
  |---|---|
  | `business success` | ✓ (H2 intro, H2 process, H2 CTA) |
  | `luck rituals for business` | ✓ (H2 offerings) |
  | `financial blockage removal` | ✓ (H3 aside-2, H2 benefits, H2 why-seek) |
  | `spiritual blockage removal` | ✓ (H3 aside-2, H2 benefits, H2 why-seek, H2 trust) |

- [ ] **Step 6: Check no H2 or H3 was accidentally deleted**

  Count: page should have exactly **8 H2s** and **2 H3s** (not counting the H1).

- [ ] **Step 7: Final commit**

  ```bash
  git add -A
  git commit -m "seo: verified heading alignment complete on prosperity-rituals"
  ```

---

## Done

Once pushed to `main`, Cloudflare Pages auto-deploys. After deploy, re-submit `https://businesswealthkey.com/services/prosperity-rituals` to Google Search Console for re-indexing.

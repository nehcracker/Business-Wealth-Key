# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Frontend (root)
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build locally

# Cloudflare Worker (worker/)
cd worker && npx wrangler dev       # Worker at http://localhost:8787
cd worker && npx wrangler deploy    # Deploy worker to Cloudflare
```

No test or lint scripts are configured.

To test the contact form locally, set `VITE_WORKER_URL=http://localhost:8787/api/contact` and run both the Vite dev server and `wrangler dev` simultaneously.

## Architecture

**Business Wealth Key** is a Cloudflare-hosted spiritual business consultation site. The frontend is a React SPA on Cloudflare Pages; the backend is a single Cloudflare Worker (`worker/contact.js`) that handles contact form submissions via the MailChannels API.

### Frontend (`src/`)

Entry: `index.html` → `src/main.jsx` (React root + `BrowserRouter` + `HelmetProvider`) → `src/App.jsx` (routes)

All routes render inside `components/layout/Layout.jsx` (Navbar + `<Outlet>` + Footer). Six service detail pages are **lazy-loaded** (`React.lazy` + `Suspense`) for code splitting; Home, About, Services, and Contact are eager-loaded.

```text
src/
├── pages/          # 11 route-mapped pages (Home, About, Services, Contact, 6 service slugs, NotFound)
├── components/
│   ├── layout/     # Layout wrapper (Navbar, Footer)
│   └── common/     # Shared UI (ConsultationForm, Hero, FAQ, service cards, PageLoader, etc.)
├── hooks/          # useSEO (Helmet injection per page), useScrollReveal, useNavScroll
├── utils/          # Static data and config: seoConfig.js, servicesData.js, faqData.js, formConfig.js
├── assets/         # SVG icon components + images
└── styles/         # Global CSS: reset, variables (CSS custom properties), animations, page-specific
```

### SEO pattern

Each page calls `useSEO(seoConfig[routeKey])` at the top. All per-page metadata lives in `src/utils/seoConfig.js`. The HTML shell in `index.html` includes the static Organization JSON-LD schema.

### Styling conventions

- All styling uses plain CSS with CSS custom properties (no framework).
- BEM naming within component-scoped files (e.g. `.cf__input`, `.cf__error` for ConsultationForm).
- Global tokens live in `src/styles/variables.css`.

### Worker (`worker/contact.js`)

Single `fetch` handler. Validates a POST JSON body, then forwards the email via MailChannels. `CONTACT_EMAIL` is the only secret (set via `wrangler secret put CONTACT_EMAIL`). The worker URL is consumed by the frontend via `src/utils/formConfig.js` → `FORM_CONFIG.workerUrl`.

## Deployment

- **Frontend**: Cloudflare Pages — auto-deploys from `main` branch; build command `npm run build`, output dir `dist`.
- **Worker**: Cloudflare Workers — deploy manually with `wrangler deploy` from `worker/`.
- No `_redirects` file is needed; SPA fallback routing is handled by the Workers backend.

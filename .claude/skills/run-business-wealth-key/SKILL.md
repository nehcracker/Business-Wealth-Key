---
name: run-business-wealth-key
description: Run, build, start, launch, screenshot, or drive the Business Wealth Key React/Vite app in a browser. Use this when verifying UI changes, taking screenshots, or confirming a feature works locally.
---

Business Wealth Key is a React 18 / Vite SPA. Drive it with `chromium-cli` pointed at the Vite dev server (http://localhost:5173). A second terminal running `wrangler dev` is needed only to test the contact form POST — all other pages render from the frontend alone.

All paths below are relative to the project root (`h:\Business-wealth-key\`).

## Prerequisites

- Node.js ≥ 18, npm
- `chromium-cli` available in PATH — pre-installed in **Linux/Claude Code containers**; not available on Windows. On Windows use the curl smoke test below to verify pages, or open a browser manually.
- For contact form smoke test only: `npx wrangler` (bundled in devDependencies)

## Build

```bash
npm install
```

## Run — agent path

### 1. Start the dev server (background)

```bash
npm run dev &
# Wait until Vite prints "Local: http://localhost:5173" before continuing
sleep 5
```

### 2. Drive with chromium-cli

```js
// chromium-cli script — paste into chromium-cli stdin or save as a .js and pipe
await page.goto('http://localhost:5173');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'screenshot-home.png' });

await page.goto('http://localhost:5173/contact');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'screenshot-contact.png' });

await page.goto('http://localhost:5173/services/psychic-consultations');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: 'screenshot-service.png' });
```

Screenshots land in the current working directory.

### 2b. Curl smoke test (Linux or Windows fallback)

When `chromium-cli` is unavailable, verify all key routes with curl:

```bash
# All five should return HTTP 200
curl -s -o /dev/null -w "home: %{http_code}\n"   http://localhost:5173/
curl -s -o /dev/null -w "contact: %{http_code}\n" http://localhost:5173/contact
curl -s -o /dev/null -w "about: %{http_code}\n"   http://localhost:5173/about
curl -s -o /dev/null -w "services: %{http_code}\n" http://localhost:5173/services
curl -s -o /dev/null -w "psychic: %{http_code}\n"  http://localhost:5173/services/psychic-consultations

# Verify React module is injected (should print 1)
curl -s http://localhost:5173/ | grep -c '/src/main.jsx'
```

### 3. Stop the dev server

```bash
pkill -f vite
```

## Run — human path

```bash
npm run dev
# Opens http://localhost:5173 — Ctrl-C to stop
```

## Contact form smoke test (optional)

The worker's CORS allow-list is hardcoded to `https://businesswealthkey.com`
(`worker/contact.js` line 5). To test the form POST locally, patch the origin
check temporarily:

```bash
# In worker/contact.js — change the CORS origin to also allow localhost
# Then start both processes:
cd worker && npx wrangler dev &
cd .. && npm run dev
```

Revert the CORS patch before committing.

## Gotchas

- **CORS blocks local form POST.** `worker/contact.js` only allows `https://businesswealthkey.com`. The contact form UI renders fine locally; only the actual POST is rejected. All non-form pages work without the worker.
- **Service pages are lazy-loaded.** Six service detail pages use `React.lazy` + `Suspense`. Always call `await page.waitForLoadState('networkidle')` before screenshotting them — the PageLoader spinner may otherwise appear in the shot.
- **No test or lint scripts.** `npm test` does not exist. Use `npm run build` as the correctness gate — Vite hard-fails on import errors and type mismatches.
- **OG images live in `/public/og/`** — regenerate them with `node scripts/generate-og.js` if `seoConfig.js` changes (requires `sharp` dev dep).

# ZeptoMail Worker Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace MailChannels with ZeptoMail in the Cloudflare Worker contact handler, add phone as a required field, and upgrade the email body to HTML.

**Architecture:** Single-file Cloudflare Worker (`worker/contact.js`). No structural changes — same CORS, same POST handler, same JSON response shape. The MailChannels `fetch` call is replaced with a ZeptoMail `fetch` call. A `buildHtmlEmail()` helper replaces the plain-text string. No test framework exists in this project; verification is done via `wrangler dev` + `curl`.

**Tech Stack:** Cloudflare Workers (ES modules), ZeptoMail REST API, wrangler CLI

---

## Files

| File | Action |
|---|---|
| `worker/contact.js` | Modify — swap provider, add phone validation, HTML email |
| `worker/wrangler.toml` | Modify — document new `ZEPTO_API_KEY` secret |

---

### Task 1: Add phone to server-side required-field validation

**Files:**
- Modify: `worker/contact.js:42-47`

Context: The current validation check on line 42 is:
```js
if (!fullName || !email || !country || !message) {
```
We need to add `!phone` to this guard and update the error message string.

- [ ] **Step 1: Open `worker/contact.js` and update the required-fields guard**

Replace lines 42–46:
```js
// before
if (!fullName || !email || !country || !message) {
  return Response.json(
    { ok: false, error: 'Required fields missing: fullName, email, country, message' },
    { status: 400, headers: CORS_HEADERS }
  )
}
```
With:
```js
if (!fullName || !email || !phone || !country || !message) {
  return Response.json(
    { ok: false, error: 'Required fields missing: fullName, email, phone, country, message' },
    { status: 400, headers: CORS_HEADERS }
  )
}
```

- [ ] **Step 2: Verify the change looks correct — no other validation lines touched**

Read `worker/contact.js` lines 39–56 and confirm only that one block changed.

- [ ] **Step 3: Commit**

```bash
git add worker/contact.js
git commit -m "feat(worker): add phone to required field validation"
```

---

### Task 2: Add `buildHtmlEmail()` helper function

**Files:**
- Modify: `worker/contact.js` — insert helper before the `export default` line

Context: Currently the email body is a plain-text array joined with `\n` (lines 59–70). We replace that with an HTML builder function. The function is inserted at the top of the file, after the `CORS_HEADERS` constant.

- [ ] **Step 1: Insert the `buildHtmlEmail` function into `worker/contact.js` after the `CORS_HEADERS` block**

```js
function buildHtmlEmail({ fullName, email, phone, country, businessName, preferredMethod, serviceRequired, message }) {
  const row = (label, value) => `
    <tr>
      <td style="padding:10px 16px;background:#f5f5f5;font-weight:600;font-family:Arial,sans-serif;font-size:14px;color:#333;width:180px;vertical-align:top;border-bottom:1px solid #e0e0e0;">${label}</td>
      <td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:14px;color:#333;border-bottom:1px solid #e0e0e0;">${value}</td>
    </tr>`

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;background:#fafafa;font-family:Arial,sans-serif;">
  <table style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #e0e0e0;border-radius:6px;overflow:hidden;">
    <tr>
      <td colspan="2" style="padding:20px 24px;background:#1a0a2e;color:#fff;font-family:Arial,sans-serif;">
        <h2 style="margin:0;font-size:18px;font-weight:600;">New Consultation Request</h2>
        <p style="margin:4px 0 0;font-size:13px;opacity:0.75;">Business Wealth Key</p>
      </td>
    </tr>
    <tbody>
      ${row('Full Name', fullName)}
      ${row('Email', email)}
      ${row('Phone', phone)}
      ${row('Country', country)}
      ${row('Business Name', businessName || 'Not provided')}
      ${row('Preferred Method', preferredMethod || 'Not specified')}
      ${row('Service Required', serviceRequired || 'Not specified')}
      <tr>
        <td style="padding:10px 16px;background:#f5f5f5;font-weight:600;font-family:Arial,sans-serif;font-size:14px;color:#333;vertical-align:top;border-bottom:1px solid #e0e0e0;">Message</td>
        <td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:14px;color:#333;white-space:pre-wrap;border-bottom:1px solid #e0e0e0;">${message}</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`
}
```

- [ ] **Step 2: Remove the old plain-text `emailBody` block (lines 59–70)**

Delete this block entirely:
```js
// Build email content
const services = Array.isArray(serviceRequired) ? serviceRequired.join(', ') : (serviceRequired || 'Not specified')
const emailBody = [
  `Name:               ${fullName}`,
  `Email:              ${email}`,
  `Country:            ${country}`,
  `Business Name:      ${businessName || 'Not provided'}`,
  `Phone:              ${phone || 'Not provided'}`,
  `Preferred Method:   ${preferredMethod || 'Not specified'}`,
  `Services Required:  ${services}`,
  ``,
  `Message:`,
  `${message}`,
].join('\n')
```

- [ ] **Step 3: Commit**

```bash
git add worker/contact.js
git commit -m "feat(worker): add HTML email builder, remove plain-text body"
```

---

### Task 3: Replace MailChannels fetch with ZeptoMail fetch

**Files:**
- Modify: `worker/contact.js` — replace the `fetch('https://api.mailchannels.net/...')` block

Context: The MailChannels block (roughly lines 74–100 in the original file) sends via `api.mailchannels.net`. Replace it entirely with a ZeptoMail call using `env.ZEPTO_API_KEY`.

- [ ] **Step 1: Replace the MailChannels `fetch` block inside the `try` with the ZeptoMail equivalent**

Remove:
```js
const mailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
  method:  'POST',
  headers: { 'Content-Type': 'application/json' },
  body:    JSON.stringify({
    personalizations: [
      { to: [{ email: env.CONTACT_EMAIL }] },
    ],
    from: {
      email: 'noreply@businesswealthkey.com',
      name:  'BWK Contact Form',
    },
    reply_to: {
      email: email,
      name:  fullName,
    },
    subject: `New Consultation Request — ${fullName}`,
    content: [
      { type: 'text/plain', value: emailBody },
    ],
  }),
})
```

Insert in its place:
```js
const htmlBody = buildHtmlEmail({ fullName, email, phone, country, businessName, preferredMethod, serviceRequired, message })

const mailResponse = await fetch('https://api.zeptomail.com/v1.1/email', {
  method: 'POST',
  headers: {
    'Accept':        'application/json',
    'Content-Type':  'application/json',
    'Authorization': `Zoho-enczapikey ${env.ZEPTO_API_KEY}`,
  },
  body: JSON.stringify({
    from:     { address: 'noreply@businesswealthkey.com' },
    to:       [{ email_address: { address: env.CONTACT_EMAIL, name: 'Business Wealth Key' }}],
    reply_to: [{ address: email, name: fullName }],
    subject:  `New Consultation Request — ${fullName}`,
    htmlbody: htmlBody,
  }),
})
```

- [ ] **Step 2: Update the error log label from 'MailChannels error' to 'ZeptoMail error'**

```js
// before
console.error('MailChannels error:', err)

// after
console.error('ZeptoMail error:', err)
```

Also update the outer catch label:
```js
// before
console.error('Worker email error:', err)

// after — no change needed, this is generic
```

- [ ] **Step 3: Verify the complete final state of `worker/contact.js`**

The file should look exactly like this:

```js
// ─── Cloudflare Worker — Contact Form Handler ────────────────────────────────
// Route: businesswealthkey.com/api/contact (POST only)
// Validates fields → sends email via ZeptoMail → returns JSON

const ALLOWED_ORIGIN = 'https://businesswealthkey.com'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function buildHtmlEmail({ fullName, email, phone, country, businessName, preferredMethod, serviceRequired, message }) {
  const row = (label, value) => `
    <tr>
      <td style="padding:10px 16px;background:#f5f5f5;font-weight:600;font-family:Arial,sans-serif;font-size:14px;color:#333;width:180px;vertical-align:top;border-bottom:1px solid #e0e0e0;">${label}</td>
      <td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:14px;color:#333;border-bottom:1px solid #e0e0e0;">${value}</td>
    </tr>`

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;background:#fafafa;font-family:Arial,sans-serif;">
  <table style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #e0e0e0;border-radius:6px;overflow:hidden;">
    <tr>
      <td colspan="2" style="padding:20px 24px;background:#1a0a2e;color:#fff;font-family:Arial,sans-serif;">
        <h2 style="margin:0;font-size:18px;font-weight:600;">New Consultation Request</h2>
        <p style="margin:4px 0 0;font-size:13px;opacity:0.75;">Business Wealth Key</p>
      </td>
    </tr>
    <tbody>
      ${row('Full Name', fullName)}
      ${row('Email', email)}
      ${row('Phone', phone)}
      ${row('Country', country)}
      ${row('Business Name', businessName || 'Not provided')}
      ${row('Preferred Method', preferredMethod || 'Not specified')}
      ${row('Service Required', serviceRequired || 'Not specified')}
      <tr>
        <td style="padding:10px 16px;background:#f5f5f5;font-weight:600;font-family:Arial,sans-serif;font-size:14px;color:#333;vertical-align:top;border-bottom:1px solid #e0e0e0;">Message</td>
        <td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:14px;color:#333;white-space:pre-wrap;border-bottom:1px solid #e0e0e0;">${message}</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS })
    }

    if (request.method !== 'POST') {
      return Response.json(
        { ok: false, error: 'Method not allowed' },
        { status: 405, headers: CORS_HEADERS }
      )
    }

    let body
    try {
      body = await request.json()
    } catch {
      return Response.json(
        { ok: false, error: 'Invalid request body' },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    const { fullName, email, country, message, businessName, phone, preferredMethod, serviceRequired } = body

    if (!fullName || !email || !phone || !country || !message) {
      return Response.json(
        { ok: false, error: 'Required fields missing: fullName, email, phone, country, message' },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { ok: false, error: 'Invalid email address' },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    const htmlBody = buildHtmlEmail({ fullName, email, phone, country, businessName, preferredMethod, serviceRequired, message })

    try {
      const mailResponse = await fetch('https://api.zeptomail.com/v1.1/email', {
        method: 'POST',
        headers: {
          'Accept':        'application/json',
          'Content-Type':  'application/json',
          'Authorization': `Zoho-enczapikey ${env.ZEPTO_API_KEY}`,
        },
        body: JSON.stringify({
          from:     { address: 'noreply@businesswealthkey.com' },
          to:       [{ email_address: { address: env.CONTACT_EMAIL, name: 'Business Wealth Key' }}],
          reply_to: [{ address: email, name: fullName }],
          subject:  `New Consultation Request — ${fullName}`,
          htmlbody: htmlBody,
        }),
      })

      if (!mailResponse.ok) {
        const err = await mailResponse.text()
        console.error('ZeptoMail error:', err)
        throw new Error('Email delivery failed')
      }
    } catch (err) {
      console.error('Worker email error:', err)
      return Response.json(
        { ok: false, error: 'Failed to send your request. Please try again.' },
        { status: 500, headers: CORS_HEADERS }
      )
    }

    return Response.json(
      { ok: true, message: 'Your consultation request has been received.' },
      { status: 200, headers: CORS_HEADERS }
    )
  },
}
```

- [ ] **Step 4: Commit**

```bash
git add worker/contact.js
git commit -m "feat(worker): replace MailChannels with ZeptoMail, HTML email body"
```

---

### Task 4: Update wrangler.toml to document the new secret

**Files:**
- Modify: `worker/wrangler.toml`

- [ ] **Step 1: Add a comment documenting `ZEPTO_API_KEY` in the `[vars]` section**

Replace the current `[vars]` block:
```toml
[vars]
ENVIRONMENT = "production"
# CONTACT_EMAIL is set as an encrypted secret — never put it here
# Run: wrangler secret put CONTACT_EMAIL
```

With:
```toml
[vars]
ENVIRONMENT = "production"
# Secrets — set via wrangler, never hardcode values here:
#   wrangler secret put CONTACT_EMAIL   (recipient email address)
#   wrangler secret put ZEPTO_API_KEY   (full "Zoho-enczapikey ..." token from ZeptoMail dashboard)
```

- [ ] **Step 2: Update the top comment in `wrangler.toml` from MailChannels to ZeptoMail**

Change line 3:
```toml
# before — no mention of provider
main = "contact.js"

# after — add clarifying comment
main = "contact.js"
# Email provider: ZeptoMail (api.zeptomail.com)
```

- [ ] **Step 3: Commit**

```bash
git add worker/wrangler.toml
git commit -m "docs(worker): document ZEPTO_API_KEY secret in wrangler.toml"
```

---

### Task 5: Local verification with wrangler dev

**Files:** None modified — this task is verification only.

- [ ] **Step 1: Create `worker/.dev.vars` with local secrets (never commit this file)**

```
CONTACT_EMAIL=your-actual-email@example.com
ZEPTO_API_KEY=wSsVR613+RKhC6Z5mjP8J78/...paste-full-key-here
```

Verify `.dev.vars` is in `.gitignore` (wrangler adds this automatically; if not, add it manually).

- [ ] **Step 2: Start the worker locally**

```bash
cd worker
npx wrangler dev
```

Expected output: `Ready on http://localhost:8787`

- [ ] **Step 3: Test — missing required field (phone omitted)**

```bash
curl -s -X POST http://localhost:8787/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"test@test.com","country":"UK","message":"hello"}' | jq
```

Expected:
```json
{ "ok": false, "error": "Required fields missing: fullName, email, phone, country, message" }
```

- [ ] **Step 4: Test — invalid email**

```bash
curl -s -X POST http://localhost:8787/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","email":"notanemail","phone":"+44123","country":"UK","message":"hello"}' | jq
```

Expected:
```json
{ "ok": false, "error": "Invalid email address" }
```

- [ ] **Step 5: Test — full valid submission (sends a real email via ZeptoMail)**

```bash
curl -s -X POST http://localhost:8787/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test Client",
    "email": "test@example.com",
    "phone": "+44 7700 000000",
    "country": "United Kingdom",
    "businessName": "Test Corp",
    "preferredMethod": "WhatsApp",
    "serviceRequired": "Psychic Business Consultations",
    "message": "This is a test submission to verify ZeptoMail delivery."
  }' | jq
```

Expected:
```json
{ "ok": true, "message": "Your consultation request has been received." }
```

Check inbox at `CONTACT_EMAIL` — you should receive an HTML-formatted email with a dark header, two-column table, and all fields populated.

---

### Task 6: Set production secrets and deploy

**Files:** None modified — this task is operational.

- [ ] **Step 1: Set `ZEPTO_API_KEY` as a Wrangler secret in production**

```bash
cd worker
npx wrangler secret put ZEPTO_API_KEY
```

When prompted, paste the full token: `Zoho-enczapikey wSsVR613+RKh...` (the complete string from the ZeptoMail dashboard, not the `Authorization:` header prefix — just the token part starting with `wSsVR6...`).

Wait — check: the ZeptoMail dashboard shows the key as `wSsVR613+...`. The `Authorization` header format is `Zoho-enczapikey <key>`. Store only the key value in the secret (without the `Zoho-enczapikey` prefix) — the worker prepends it in the header string:
```js
'Authorization': `Zoho-enczapikey ${env.ZEPTO_API_KEY}`,
```

So the secret value to paste is everything after `Zoho-enczapikey ` in your curl example.

- [ ] **Step 2: Confirm `CONTACT_EMAIL` is still set**

```bash
npx wrangler secret list
```

Expected: both `CONTACT_EMAIL` and `ZEPTO_API_KEY` appear in the list.

- [ ] **Step 3: Deploy**

```bash
npx wrangler deploy
```

Expected output ends with: `Deployed bwk-contact ... (X ms)`

- [ ] **Step 4: Smoke test against production**

```bash
curl -s -X POST https://businesswealthkey.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Production Test",
    "email": "test@example.com",
    "phone": "+44 7700 000001",
    "country": "United Kingdom",
    "message": "Production smoke test — ZeptoMail."
  }' | jq
```

Expected: `{ "ok": true, ... }` and an email in the inbox.

---

## Self-Review

**Spec coverage check:**
- ✅ Phone added to required validation (Task 1)
- ✅ HTML email body builder (Task 2)
- ✅ MailChannels → ZeptoMail swap with correct request shape (Task 3)
- ✅ `ZEPTO_API_KEY` documented in wrangler.toml (Task 4)
- ✅ Local dev verification with `.dev.vars` (Task 5)
- ✅ Production secret set + deploy + smoke test (Task 6)
- ✅ CORS unchanged — not touched
- ✅ JSON response shape unchanged — `{ ok: true }` / `{ ok: false, error }` preserved

**Placeholder scan:** None found. All code blocks are complete.

**Type consistency:** `buildHtmlEmail()` signature in Task 2 matches the call site in Task 3. `env.ZEPTO_API_KEY` used consistently. `env.CONTACT_EMAIL` unchanged throughout.

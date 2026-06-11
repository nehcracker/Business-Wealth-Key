# ZeptoMail Worker Integration — Design Spec

## Goal

Replace the MailChannels email provider in `worker/contact.js` with ZeptoMail's transactional email API, add `phone` to server-side required fields, and upgrade the email body from plain text to HTML.

## Architecture

Single Cloudflare Worker file (`worker/contact.js`). No structural changes — same POST handler, same CORS logic, same JSON response contract (`{ ok: true }` / `{ ok: false, error: "..." }`). Only the outbound email call and email body format change.

## Files Changed

- `worker/contact.js` — swap MailChannels fetch for ZeptoMail fetch; add phone to required validation; build HTML email body
- `worker/wrangler.toml` — document new `ZEPTO_API_KEY` secret (comment only, never a value)

## Secrets

| Secret | How to set | Purpose |
|---|---|---|
| `ZEPTO_API_KEY` | `wrangler secret put ZEPTO_API_KEY` | Full `Zoho-enczapikey ...` token |
| `CONTACT_EMAIL` | Already set | Recipient email address |

## Validation (server-side)

Required fields: `fullName`, `email`, `phone`, `country`, `message`  
Email format: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`  
Phone: must be a non-empty string  
All other fields (`businessName`, `preferredMethod`, `serviceRequired`) are optional.

## ZeptoMail Request

Endpoint: `POST https://api.zeptomail.com/v1.1/email`

Headers:
```
Accept: application/json
Content-Type: application/json
Authorization: Zoho-enczapikey <env.ZEPTO_API_KEY>
```

Body:
```json
{
  "from": { "address": "noreply@businesswealthkey.com" },
  "to": [{ "email_address": { "address": "<env.CONTACT_EMAIL>", "name": "Business Wealth Key" }}],
  "reply_to": [{ "address": "<submitter email>", "name": "<submitter name>" }],
  "subject": "New Consultation Request — <fullName>",
  "htmlbody": "<HTML string — see Email Body section>"
}
```

## Email Body (HTML)

A clean HTML table listing all submitted fields in two columns (label / value). Dark-friendly inline styles, no external dependencies. Fields:

- Full Name
- Email
- Phone
- Country
- Business Name (or "Not provided")
- Preferred Method (or "Not specified")
- Service Required (or "Not specified")
- Message (full-width row at the bottom)

## Error Handling

ZeptoMail returns non-2xx with body `{ "message": "...", "data": [...] }` on failure.  
Worker logs the raw error body via `console.error`, then returns:
```json
{ "ok": false, "error": "Failed to send your request. Please try again." }
```
with HTTP 500. Frontend already handles this shape — no frontend change needed.

## CORS

Unchanged: `Access-Control-Allow-Origin: https://businesswealthkey.com`  
`OPTIONS` preflight → 204 as before.

## Local Dev

```bash
# 1. Add secret to local dev environment
echo "ZEPTO_API_KEY=<your-key>" >> worker/.dev.vars

# 2. Run worker
cd worker && npx wrangler dev

# 3. Test with curl
curl -X POST http://localhost:8787/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","email":"t@t.com","phone":"+1234","country":"UK","message":"hello"}'
```

## Deployment

```bash
wrangler secret put ZEPTO_API_KEY   # paste the Zoho-enczapikey token when prompted
cd worker && npx wrangler deploy
```

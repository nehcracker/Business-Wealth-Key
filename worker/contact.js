// ─── Cloudflare Worker — Contact Form Handler ────────────────────────────────
// Route: businesswealthkey.com/api/contact (POST only)
// Validates fields → sends email via MailChannels → returns JSON

const ALLOWED_ORIGIN = 'https://businesswealthkey.com'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function buildHtmlEmail({ fullName, email, phone, country, businessName, preferredMethod, serviceRequired, message }) {
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

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
    <tbody>
      <tr>
        <td colspan="2" style="padding:20px 24px;background:#1a0a2e;color:#fff;font-family:Arial,sans-serif;">
          <h2 style="margin:0;font-size:18px;font-weight:600;">New Consultation Request</h2>
          <p style="margin:4px 0 0;font-size:13px;opacity:0.75;">Business Wealth Key</p>
        </td>
      </tr>
      ${row('Full Name', esc(fullName))}
      ${row('Email', esc(email))}
      ${row('Phone', esc(phone))}
      ${row('Country', esc(country))}
      ${row('Business Name', esc(businessName) || 'Not provided')}
      ${row('Preferred Method', esc(preferredMethod) || 'Not specified')}
      ${row('Service Required', esc(serviceRequired) || 'Not specified')}
      <tr>
        <td style="padding:10px 16px;background:#f5f5f5;font-weight:600;font-family:Arial,sans-serif;font-size:14px;color:#333;vertical-align:top;border-bottom:1px solid #e0e0e0;">Message</td>
        <td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:14px;color:#333;white-space:pre-wrap;border-bottom:1px solid #e0e0e0;">${esc(message)}</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`
}

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS })
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return Response.json(
        { ok: false, error: 'Method not allowed' },
        { status: 405, headers: CORS_HEADERS }
      )
    }

    // Parse body
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

    // Server-side validation — required fields
    if (!fullName || !email || !phone || !country || !message) {
      return Response.json(
        { ok: false, error: 'Required fields missing: fullName, email, phone, country, message' },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { ok: false, error: 'Invalid email address' },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    // Send via MailChannels (available natively in Cloudflare Workers)
    try {
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

      if (!mailResponse.ok) {
        const err = await mailResponse.text()
        console.error('MailChannels error:', err)
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

// ─── Cloudflare Worker — Contact Form Handler ────────────────────────────────
// Route: businesswealthkey.com/api/contact (POST only)
// Validates fields → sends email via MailChannels → returns JSON

const ALLOWED_ORIGIN = 'https://businesswealthkey.com'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
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

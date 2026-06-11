// ─── Form Configuration ───────────────────────────────────────────────────────
// All form logic lives here — update WORKER_URL after Worker is deployed

export const FORM_CONFIG = {
  // Update this URL after deploying the Cloudflare Worker
  // Dev: use wrangler dev local URL (http://localhost:8787/api/contact)
  // Prod: https://businesswealthkey.com/api/contact
  workerUrl: import.meta.env.VITE_WORKER_URL || 'http://localhost:8787/api/contact',

  requiredFields: ['fullName', 'email', 'phone', 'country', 'message'],

  services: [
    'Psychic Business Consultations',
    'Business Prosperity Rituals',
    'Financial Blockage Removal',
    'Wealth Activation',
    'Business Breakthrough',
    'Corporate Solutions',
  ],

  preferredMethods: ['WhatsApp', 'Google Meet'],

  messages: {
    success: 'Thank you. Your consultation request has been received. We will be in touch shortly.',
    error:   'Something went wrong. Please try again or email us directly at info@businesswealthkey.com.',
    network: 'Unable to send your request. Please check your connection and try again.',
  },
}

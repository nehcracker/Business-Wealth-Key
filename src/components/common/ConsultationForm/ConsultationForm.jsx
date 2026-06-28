import { useState } from 'react'
import { FORM_CONFIG } from '../../../utils/formConfig'
import Button from '../Button/Button'
import './ConsultationForm.css'

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const IconGoogleMeet = () => (
  <svg viewBox="0 0 24 24" fill="none" width="26" height="26" aria-hidden="true">
    <rect x="2" y="7" width="13" height="10" rx="2" fill="currentColor" />
    <path d="M15 10.5l5.5-3.5v10l-5.5-3.5V10.5z" fill="currentColor" />
  </svg>
)

const METHODS = [
  { value: 'WhatsApp',    label: 'WhatsApp',    desc: 'Message or voice call',  Icon: IconWhatsApp,    mod: 'wa' },
  { value: 'Google Meet', label: 'Google Meet', desc: 'Video consultation',      Icon: IconGoogleMeet,  mod: 'gm' },
]

const INITIAL_STATE = {
  fullName:        '',
  email:           '',
  country:         '',
  businessName:    '',
  phone:           '',
  preferredMethod: '',
  serviceRequired: '',
  message:         '',
}

export default function ConsultationForm() {
  const [fields, setFields] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!fields.fullName.trim()) e.fullName = 'Full name is required.'
    if (!fields.email.trim())    e.email    = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                 e.email    = 'Please enter a valid email address.'
    if (!fields.country.trim())  e.country  = 'Country is required.'
    if (!fields.phone.trim()) {
      e.phone = 'Phone number is required.'
    } else {
      const stripped = fields.phone.trim().replace(/[\s\-().]/g, '')
      if (!/^\+\d{7,15}$/.test(stripped))
        e.phone = 'Include your country code — e.g. +44 7911 123456 or +1 234 567 8900.'
    }
    if (!fields.serviceRequired) e.serviceRequired = 'Please select a service to proceed.'
    if (!fields.message.trim())  e.message  = 'Please describe your challenge or goal.'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch(FORM_CONFIG.workerUrl, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(fields),
      })

      const data = await res.json()

      if (data.ok) {
        setStatus('success')
        setFields(INITIAL_STATE)
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18234308546/ame7COWvsb4cEMLv5fZD',
            value: 1.0,
            currency: 'USD',
          })
        }
      } else {
        setStatus('error')
        setErrMsg(data.error || FORM_CONFIG.messages.error)
      }
    } catch {
      setStatus('error')
      setErrMsg(FORM_CONFIG.messages.network)
    }
  }

  if (status === 'success') {
    return (
      <div className="cf-success" role="alert">
        <span className="cf-success__icon" aria-hidden="true">✦</span>
        <h3 className="cf-success__heading">Request Received</h3>
        <p className="cf-success__message">{FORM_CONFIG.messages.success}</p>
        <Button variant="ghost" size="md" onClick={() => setStatus('idle')}>
          Submit another enquiry
        </Button>
      </div>
    )
  }

  return (
    <form className="cf" onSubmit={handleSubmit} noValidate aria-label="Consultation request form">

      {/* Row 1 — Name + Email */}
      <div className="cf__row">
        <div className="cf__field">
          <label className="cf__label" htmlFor="fullName">
            Full Name <span className="cf__required" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName" name="fullName" type="text"
            className={['cf__input', errors.fullName ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
            value={fields.fullName} onChange={handleChange}
            placeholder="Your full name" autoComplete="name"
            aria-required="true" aria-describedby={errors.fullName ? 'err-fullName' : undefined}
          />
          {errors.fullName && <span id="err-fullName" className="cf__error" role="alert">{errors.fullName}</span>}
        </div>

        <div className="cf__field">
          <label className="cf__label" htmlFor="email">
            Email Address <span className="cf__required" aria-hidden="true">*</span>
          </label>
          <input
            id="email" name="email" type="email"
            className={['cf__input', errors.email ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
            value={fields.email} onChange={handleChange}
            placeholder="your@email.com" autoComplete="email"
            aria-required="true" aria-describedby={errors.email ? 'err-email' : undefined}
          />
          {errors.email && <span id="err-email" className="cf__error" role="alert">{errors.email}</span>}
        </div>
      </div>

      {/* Row 2 — Country + Business Name */}
      <div className="cf__row">
        <div className="cf__field">
          <label className="cf__label" htmlFor="country">
            Country <span className="cf__required" aria-hidden="true">*</span>
          </label>
          <input
            id="country" name="country" type="text"
            className={['cf__input', errors.country ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
            value={fields.country} onChange={handleChange}
            placeholder="Your country" autoComplete="country-name"
            aria-required="true" aria-describedby={errors.country ? 'err-country' : undefined}
          />
          {errors.country && <span id="err-country" className="cf__error" role="alert">{errors.country}</span>}
        </div>

        <div className="cf__field">
          <label className="cf__label" htmlFor="businessName">
            Business Name <span className="cf__optional">(optional)</span>
          </label>
          <input
            id="businessName" name="businessName" type="text"
            className="cf__input"
            value={fields.businessName} onChange={handleChange}
            placeholder="Your business or organisation" autoComplete="organization"
          />
        </div>
      </div>

      {/* Row 3 — Phone (required) + Communication Method */}
      <div className="cf__row">
        <div className="cf__field">
          <label className="cf__label" htmlFor="phone">
            Phone Number <span className="cf__required" aria-hidden="true">*</span>
          </label>
          <p className="cf__field-hint">International format — include country code</p>
          <input
            id="phone" name="phone" type="tel"
            className={['cf__input', errors.phone ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
            value={fields.phone} onChange={handleChange}
            placeholder="+44 7911 123456" autoComplete="tel"
            aria-required="true" aria-describedby={errors.phone ? 'err-phone' : undefined}
          />
          {errors.phone && <span id="err-phone" className="cf__error" role="alert">{errors.phone}</span>}
        </div>

        <div className="cf__field">
          <fieldset className="cf__fieldset">
            <legend className="cf__label">Preferred Consultation Method</legend>
            <div className="cf__method-group">
              {METHODS.map(({ value, label, desc, Icon, mod }) => (
                <label
                  key={value}
                  className={['cf__method-label', fields.preferredMethod === value ? 'cf__method-label--selected' : ''].filter(Boolean).join(' ')}
                >
                  <input
                    type="radio" name="preferredMethod" value={value}
                    checked={fields.preferredMethod === value}
                    onChange={handleChange} className="cf__radio"
                  />
                  <span className={`cf__method-icon cf__method-icon--${mod}`}>
                    <Icon />
                  </span>
                  <span className="cf__method-name">{label}</span>
                  <span className="cf__method-desc">{desc}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      {/* Service required — mandatory single select */}
      <div className="cf__field">
        <fieldset
          className="cf__fieldset"
          aria-describedby={errors.serviceRequired ? 'err-serviceRequired' : undefined}
        >
          <legend className="cf__label">
            Service Required <span className="cf__required" aria-hidden="true">*</span>
          </legend>
          <div className={['cf__service-group', errors.serviceRequired ? 'cf__service-group--error' : ''].filter(Boolean).join(' ')}>
            {FORM_CONFIG.services.map((service) => (
              <label
                key={service}
                className={['cf__service-label', fields.serviceRequired === service ? 'cf__service-label--selected' : ''].filter(Boolean).join(' ')}
              >
                <input
                  type="radio" name="serviceRequired" value={service}
                  checked={fields.serviceRequired === service}
                  onChange={handleChange} className="cf__radio"
                />
                <span className="cf__service-dot" aria-hidden="true" />
                {service}
              </label>
            ))}
          </div>
          {errors.serviceRequired && (
            <span id="err-serviceRequired" className="cf__error" role="alert">
              {errors.serviceRequired}
            </span>
          )}
        </fieldset>
      </div>

      {/* Message */}
      <div className="cf__field">
        <label className="cf__label" htmlFor="message">
          Describe Your Challenge or Goal <span className="cf__required" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message" name="message" rows={6}
          className={['cf__textarea', errors.message ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
          value={fields.message} onChange={handleChange}
          placeholder="Please share as much detail as you are comfortable with. All information is treated in the strictest confidence."
          aria-required="true" aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message && <span id="err-message" className="cf__error" role="alert">{errors.message}</span>}
      </div>

      {/* Confidentiality note */}
      <p className="cf__privacy">
        <span className="cf__privacy-icon" aria-hidden="true">⬡</span>
        All information submitted is treated with absolute confidentiality and never shared with third parties.
      </p>

      {status === 'error' && (
        <div className="cf__server-error" role="alert">
          {errMsg || FORM_CONFIG.messages.error}
        </div>
      )}

      {/* Pulsing rings behind submit button */}
      <div className="cf__submit-glow" aria-hidden="true">
        <span className="cf__submit-ring cf__submit-ring--1" />
        <span className="cf__submit-ring cf__submit-ring--2" />
        <span className="cf__submit-ring cf__submit-ring--3" />
      </div>

      <Button
        type="submit" variant="primary" size="lg"
        accentVariant="amethyst" fullWidth
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Submit Consultation Request'}
      </Button>
    </form>
  )
}

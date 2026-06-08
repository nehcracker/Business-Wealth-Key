import { useState } from 'react'
import { FORM_CONFIG } from '../../../utils/formConfig'
import Button from '../Button/Button'
import './ConsultationForm.css'

const INITIAL_STATE = {
  fullName:        '',
  email:           '',
  country:         '',
  businessName:    '',
  phone:           '',
  preferredMethod: '',
  serviceRequired: [],
  message:         '',
}

export default function ConsultationForm() {
  const [fields,  setFields]  = useState(INITIAL_STATE)
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // idle | loading | success | error
  const [errMsg,  setErrMsg]  = useState('')

  // ── Field handlers ──────────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleCheckbox = (service) => {
    setFields((prev) => {
      const has = prev.serviceRequired.includes(service)
      return {
        ...prev,
        serviceRequired: has
          ? prev.serviceRequired.filter((s) => s !== service)
          : [...prev.serviceRequired, service],
      }
    })
  }

  // ── Validation ──────────────────────────────────────────────────────────

  const validate = () => {
    const e = {}
    if (!fields.fullName.trim())  e.fullName = 'Full name is required.'
    if (!fields.email.trim())     e.email    = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                  e.email    = 'Please enter a valid email address.'
    if (!fields.country.trim())   e.country  = 'Country is required.'
    if (!fields.message.trim())   e.message  = 'Please describe your challenge or goal.'
    return e
  }

  // ── Submit ──────────────────────────────────────────────────────────────

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
      } else {
        setStatus('error')
        setErrMsg(data.error || FORM_CONFIG.messages.error)
      }
    } catch {
      setStatus('error')
      setErrMsg(FORM_CONFIG.messages.network)
    }
  }

  // ── Success state ───────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="cf-success" role="alert">
        <span className="cf-success__icon" aria-hidden="true">✦</span>
        <h3 className="cf-success__heading">Request Received</h3>
        <p className="cf-success__message">{FORM_CONFIG.messages.success}</p>
        <Button
          variant="ghost"
          size="md"
          onClick={() => setStatus('idle')}
        >
          Submit another enquiry
        </Button>
      </div>
    )
  }

  // ── Form ────────────────────────────────────────────────────────────────

  return (
    <form
      className="cf"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Consultation request form"
    >
      {/* Row 1 — Name + Email */}
      <div className="cf__row">
        <div className="cf__field">
          <label className="cf__label" htmlFor="fullName">
            Full Name <span className="cf__required" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={['cf__input', errors.fullName ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
            value={fields.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.fullName ? 'err-fullName' : undefined}
          />
          {errors.fullName && (
            <span id="err-fullName" className="cf__error" role="alert">{errors.fullName}</span>
          )}
        </div>

        <div className="cf__field">
          <label className="cf__label" htmlFor="email">
            Email Address <span className="cf__required" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={['cf__input', errors.email ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
            value={fields.email}
            onChange={handleChange}
            placeholder="your@email.com"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? 'err-email' : undefined}
          />
          {errors.email && (
            <span id="err-email" className="cf__error" role="alert">{errors.email}</span>
          )}
        </div>
      </div>

      {/* Row 2 — Country + Business Name */}
      <div className="cf__row">
        <div className="cf__field">
          <label className="cf__label" htmlFor="country">
            Country <span className="cf__required" aria-hidden="true">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            className={['cf__input', errors.country ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
            value={fields.country}
            onChange={handleChange}
            placeholder="Your country"
            autoComplete="country-name"
            aria-required="true"
            aria-describedby={errors.country ? 'err-country' : undefined}
          />
          {errors.country && (
            <span id="err-country" className="cf__error" role="alert">{errors.country}</span>
          )}
        </div>

        <div className="cf__field">
          <label className="cf__label" htmlFor="businessName">
            Business Name <span className="cf__optional">(optional)</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            className="cf__input"
            value={fields.businessName}
            onChange={handleChange}
            placeholder="Your business or organisation"
            autoComplete="organization"
          />
        </div>
      </div>

      {/* Row 3 — Phone + Preferred Method */}
      <div className="cf__row">
        <div className="cf__field">
          <label className="cf__label" htmlFor="phone">
            Phone <span className="cf__optional">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="cf__input"
            value={fields.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            autoComplete="tel"
          />
        </div>

        <div className="cf__field">
          <fieldset className="cf__fieldset">
            <legend className="cf__label">Preferred Consultation Method</legend>
            <div className="cf__radio-group">
              {FORM_CONFIG.preferredMethods.map((method) => (
                <label key={method} className="cf__radio-label">
                  <input
                    type="radio"
                    name="preferredMethod"
                    value={method}
                    checked={fields.preferredMethod === method}
                    onChange={handleChange}
                    className="cf__radio"
                  />
                  <span className="cf__radio-custom" aria-hidden="true" />
                  {method}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      {/* Services checkboxes */}
      <div className="cf__field">
        <fieldset className="cf__fieldset">
          <legend className="cf__label">Services Required</legend>
          <div className="cf__checkbox-group">
            {FORM_CONFIG.services.map((service) => (
              <label key={service} className="cf__checkbox-label">
                <input
                  type="checkbox"
                  name="serviceRequired"
                  value={service}
                  checked={fields.serviceRequired.includes(service)}
                  onChange={() => handleCheckbox(service)}
                  className="cf__checkbox"
                />
                <span className="cf__checkbox-custom" aria-hidden="true" />
                {service}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Message */}
      <div className="cf__field">
        <label className="cf__label" htmlFor="message">
          Describe Your Challenge or Goal <span className="cf__required" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={['cf__textarea', errors.message ? 'cf__input--error' : ''].filter(Boolean).join(' ')}
          value={fields.message}
          onChange={handleChange}
          placeholder="Please share as much detail as you are comfortable with. All information is treated in the strictest confidence."
          aria-required="true"
          aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message && (
          <span id="err-message" className="cf__error" role="alert">{errors.message}</span>
        )}
      </div>

      {/* Confidentiality note */}
      <p className="cf__privacy">
        <span className="cf__privacy-icon" aria-hidden="true">⬡</span>
        All information submitted is treated with absolute confidentiality and never shared with third parties.
      </p>

      {/* Server error */}
      {status === 'error' && (
        <div className="cf__server-error" role="alert">
          {errMsg || FORM_CONFIG.messages.error}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        accentVariant="amethyst"
        fullWidth
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Submit Consultation Request'}
      </Button>
    </form>
  )
}

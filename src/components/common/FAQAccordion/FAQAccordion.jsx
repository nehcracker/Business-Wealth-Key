import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { generateFAQSchema } from '../../../utils/structuredData'
import './FAQAccordion.css'

/**
 * FAQAccordion
 * @param {array}   items    - [{ question, answer }]
 * @param {string}  heading  - optional section heading
 * @param {boolean} withSchema - inject FAQPage JSON-LD (default true)
 */
export default function FAQAccordion({
  items = [],
  heading = 'Frequently Asked Questions',
  withSchema = true,
}) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq">
      {/* FAQPage JSON-LD */}
      {withSchema && items.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(generateFAQSchema(items))}
          </script>
        </Helmet>
      )}

      {heading && (
        <div className="faq__header">
          <h2 className="faq__heading">{heading}</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto 0' }} />
        </div>
      )}

      <dl className="faq__list">
        {items.map((item, i) => {
          const isOpen   = openIndex === i
          const panelId  = `faq-panel-${i}`
          const triggerId = `faq-trigger-${i}`

          return (
            <div
              key={i}
              className={['faq__item', isOpen ? 'faq__item--open' : ''].filter(Boolean).join(' ')}
            >
              <dt>
                <button
                  id={triggerId}
                  className="faq__trigger"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="faq__question">{item.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 6l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </dt>

              <dd
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="faq__panel"
                hidden={!isOpen}
              >
                <p className="faq__answer">{item.answer}</p>
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}

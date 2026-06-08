import './ProcessSteps.css'

/**
 * ProcessSteps
 * @param {array}  steps    - [{ number, title, description }]
 * @param {string} heading  - section heading
 * @param {string} layout   - 'horizontal' | 'vertical'
 */
export default function ProcessSteps({
  steps = [],
  heading = 'How It Works',
  layout = 'horizontal',
}) {
  return (
    <div className={['process', `process--${layout}`].join(' ')}>
      {heading && (
        <div className="process__header">
          <h2 className="process__heading">{heading}</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto 0' }} />
        </div>
      )}

      <ol className="process__list" role="list">
        {steps.map((step, i) => (
          <li key={step.number ?? i} className="process__step">
            {/* Connector line between steps */}
            {i < steps.length - 1 && (
              <span className="process__connector" aria-hidden="true" />
            )}

            {/* Number badge */}
            <span className="process__number" aria-hidden="true">
              {String(step.number ?? i + 1).padStart(2, '0')}
            </span>

            {/* Content */}
            <span className="process__content">
              <span className="process__title">{step.title}</span>
              <span className="process__desc">{step.description}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

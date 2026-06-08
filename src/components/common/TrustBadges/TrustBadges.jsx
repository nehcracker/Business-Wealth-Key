import './TrustBadges.css'

/**
 * TrustBadges
 * @param {array}  items    - [{ icon, title, description }]
 * @param {number} columns  - 2 | 3 | 4
 * @param {string} heading  - optional
 */
export default function TrustBadges({
  items = [],
  columns = 3,
  heading,
}) {
  return (
    <div className="trust">
      {heading && (
        <div className="trust__header">
          <h2 className="trust__heading">{heading}</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto 0' }} />
        </div>
      )}

      <ul
        className={['trust__grid', `trust__grid--cols-${columns}`].join(' ')}
        role="list"
      >
        {items.map((item, i) => (
          <li key={i} className="trust__item">
            {item.icon && (
              <span className="trust__icon" aria-hidden="true">
                {item.icon}
              </span>
            )}
            <span className="trust__content">
              <span className="trust__title">{item.title}</span>
              {item.description && (
                <span className="trust__desc">{item.description}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

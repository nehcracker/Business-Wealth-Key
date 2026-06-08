import './WhoWeServe.css'

/**
 * WhoWeServe
 * @param {array}  items    - string[]
 * @param {string} heading  - default 'Who This Is For'
 * @param {string} variant  - 'pill' | 'card'
 * @param {number|string} columns - 2 | 3 | 4 | 'auto'
 */
export default function WhoWeServe({
  items = [],
  heading = 'Who This Is For',
  variant = 'pill',
  columns = 'auto',
}) {
  const gridClass = columns === 'auto'
    ? 'who__grid--auto'
    : `who__grid--cols-${columns}`

  return (
    <div className="who">
      {heading && (
        <div className="who__header">
          <h2 className="who__heading">{heading}</h2>
          <div className="section-divider" style={{ margin: 'var(--space-5) auto 0' }} />
        </div>
      )}

      <ul
        className={['who__grid', `who__grid--${variant}`, gridClass].join(' ')}
        role="list"
      >
        {items.map((item, i) => (
          <li key={i} className={`who__item who__item--${variant}`}>
            {variant === 'pill' ? (
              <>
                <span className="who__pill-dot" aria-hidden="true" />
                {item}
              </>
            ) : (
              <>
                <span className="who__card-icon" aria-hidden="true">◆</span>
                <span className="who__card-label">{item}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

import './ProblemList.css'

/**
 * ProblemList / BenefitsList (same component, different icon default)
 * @param {array}   items    - string[]
 * @param {string}  heading  - optional
 * @param {string}  icon     - 'diamond' | 'warning' | 'x' | 'check' | 'star'
 * @param {number}  columns  - 1 | 2
 */
export default function ProblemList({
  items = [],
  heading,
  icon = 'diamond',
  columns = 1,
}) {
  const iconMap = {
    diamond: '◆',
    warning: '⚠',
    x:       '✕',
    check:   '✓',
    star:    '✦',
  }

  const iconChar  = iconMap[icon] ?? '◆'
  const iconClass = `problem-list__icon--${icon}`

  return (
    <div className="problem-list">
      {heading && (
        <div className="problem-list__header">
          <h2 className="problem-list__heading">{heading}</h2>
          <div className="section-divider" />
        </div>
      )}

      <ul
        className={[
          'problem-list__grid',
          `problem-list__grid--cols-${columns}`,
        ].join(' ')}
        role="list"
      >
        {items.map((item, i) => (
          <li key={i} className="problem-list__item">
            <span
              className={['problem-list__icon', iconClass].join(' ')}
              aria-hidden="true"
            >
              {iconChar}
            </span>
            <span className="problem-list__text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

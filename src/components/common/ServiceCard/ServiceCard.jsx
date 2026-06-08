import { Link } from 'react-router-dom'
import './ServiceCard.css'

/**
 * ServiceCard
 * @param {node}   icon        - inline SVG icon component
 * @param {string} title
 * @param {string} description
 * @param {string} href        - React Router link
 * @param {string} variant     - 'default' | 'featured'
 */
export default function ServiceCard({
  icon,
  title,
  description,
  href,
  variant = 'default',
}) {
  const classes = [
    'service-card',
    variant === 'featured' ? 'service-card--featured' : '',
  ].filter(Boolean).join(' ')

  return (
    <Link to={href} className={classes} aria-label={`Learn more about ${title}`}>
      {/* Hover glow */}
      <span className="service-card__glow" aria-hidden="true" />

      {/* Icon */}
      {icon && (
        <span className="service-card__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      {/* Content */}
      <span className="service-card__body">
        <span className="service-card__title">{title}</span>
        <span className="service-card__desc">{description}</span>
      </span>

      {/* Arrow */}
      <span className="service-card__arrow" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  )
}

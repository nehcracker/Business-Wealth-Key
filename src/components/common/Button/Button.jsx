import { Link } from 'react-router-dom'
import './Button.css'

/**
 * Button
 * @param {string}   variant       - 'primary' | 'ghost' | 'text'
 * @param {string}   size          - 'sm' | 'md' | 'lg'
 * @param {string}   accentVariant - 'amethyst' | 'ember'
 * @param {string}   href          - renders as <Link> if provided
 * @param {function} onClick
 * @param {boolean}  fullWidth
 * @param {boolean}  disabled
 * @param {node}     children
 */
export default function Button({
  variant      = 'primary',
  size         = 'md',
  accentVariant = 'amethyst',
  href,
  onClick,
  fullWidth    = false,
  disabled     = false,
  children,
  className    = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    `btn--${accentVariant}`,
    fullWidth  ? 'btn--full'     : '',
    disabled   ? 'btn--disabled' : '',
    className,
  ].filter(Boolean).join(' ')

  if (href && !disabled) {
    return (
      <Link to={href} className={classes} {...rest}>
        <span className="btn__label">{children}</span>
        {variant === 'primary' && <span className="btn__shimmer" aria-hidden="true" />}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span className="btn__label">{children}</span>
      {variant === 'primary' && <span className="btn__shimmer" aria-hidden="true" />}
    </button>
  )
}

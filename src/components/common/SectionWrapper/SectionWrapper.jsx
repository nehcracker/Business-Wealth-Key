import { useScrollReveal } from '../../../hooks/useScrollReveal'
import './SectionWrapper.css'

/**
 * SectionWrapper
 * @param {string}  id            - anchor ID for in-page links
 * @param {string}  maxWidth      - 'default' | 'narrow' | 'wide' | 'full'
 * @param {string}  padding       - 'section' | 'tight' | 'none'
 * @param {string}  background    - 'default' | 'alt' | 'transparent'
 * @param {boolean} revealOnScroll
 * @param {string}  className
 * @param {node}    children
 */
export default function SectionWrapper({
  id,
  maxWidth       = 'default',
  padding        = 'section',
  background     = 'default',
  revealOnScroll = true,
  className      = '',
  children,
  ...rest
}) {
  const revealRef = useScrollReveal()

  const classes = [
    'section-wrapper',
    `section-wrapper--bg-${background}`,
    `section-wrapper--pad-${padding}`,
    className,
  ].filter(Boolean).join(' ')

  const innerClasses = [
    'section-wrapper__inner',
    `section-wrapper__inner--${maxWidth}`,
  ].filter(Boolean).join(' ')

  return (
    <section
      id={id}
      className={classes}
      ref={revealOnScroll ? revealRef : undefined}
      {...rest}
    >
      <div className={innerClasses}>
        {children}
      </div>
    </section>
  )
}

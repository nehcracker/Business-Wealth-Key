import { useEffect, useRef } from 'react'

// Adds .reveal class to the referenced element, then .revealed when it enters viewport.
// Respects prefers-reduced-motion — immediately marks as revealed if motion is reduced.
// Usage: const ref = useScrollReveal()  →  <section ref={ref}>
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect OS reduced-motion preference
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      // Skip animation — element is immediately visible
      el.classList.add('reveal', 'revealed')
      return
    }

    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el) // Fire once only
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

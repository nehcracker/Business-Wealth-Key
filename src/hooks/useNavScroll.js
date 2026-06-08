import { useState, useEffect } from 'react'

// Returns true when the page has scrolled past the threshold.
// Navbar uses this to switch from transparent to solid background.
// Usage: const isScrolled = useNavScroll()
export function useNavScroll(threshold = 60) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Set initial state in case page loads mid-scroll
    setIsScrolled(window.scrollY > threshold)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}

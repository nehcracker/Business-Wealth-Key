// Corporate Solutions
export default function IconGlobe({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.8"/>
      <ellipse cx="24" cy="24" rx="8" ry="18" stroke="currentColor" strokeWidth="1.4" opacity="0.6"/>
      <path d="M6 24 Q16 20 24 24 Q32 28 42 24" stroke="currentColor" strokeWidth="1.4" opacity="0.6"/>
      <path d="M8 16 Q16 14 24 16 Q32 18 40 16" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
      <path d="M8 32 Q16 30 24 32 Q32 34 40 32" stroke="currentColor" strokeWidth="1" opacity="0.35"/>
    </svg>
  )
}

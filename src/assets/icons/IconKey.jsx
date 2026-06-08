// Hero, Nav, 404, Brand
export default function IconKey({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="16" cy="20" r="10" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="16" cy="20" r="5" stroke="currentColor" strokeWidth="1.4" opacity="0.45"/>
      <path d="M23 27 L38 42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M32 36 L36 32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M36 40 L40 36" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

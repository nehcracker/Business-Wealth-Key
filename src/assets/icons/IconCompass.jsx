// Financial Blockage Removal
export default function IconCompass({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="24" cy="24" r="2.5" fill="currentColor"/>
      <path d="M24 6 L24 10M24 38 L24 42M6 24 L10 24M38 24 L42 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/>
      <path d="M24 24 L30 14 L24 24 L18 34Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
      <path d="M24 24 L34 30 L24 24 L14 18Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08"/>
    </svg>
  )
}

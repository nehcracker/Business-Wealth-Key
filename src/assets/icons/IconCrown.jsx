// Wealth Activation
export default function IconCrown({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M8 34 L8 22 L16 30 L24 14 L32 30 L40 22 L40 34 Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 38 L40 38" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="24" cy="13" r="2.5" fill="currentColor" opacity="0.7"/>
      <circle cx="8" cy="21" r="2.5" fill="currentColor" opacity="0.7"/>
      <circle cx="40" cy="21" r="2.5" fill="currentColor" opacity="0.7"/>
      <path d="M14 34 L14 30M24 34 L24 28M34 34 L34 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    </svg>
  )
}

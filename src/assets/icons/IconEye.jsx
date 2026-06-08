// Psychic Consultations
export default function IconEye({ size = 48, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="24" cy="24" rx="20" ry="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="24" cy="24" r="2.5" fill="currentColor"/>
      <path d="M24 8 Q24 16 24 24" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4"/>
      <path d="M4 24 Q12 20 24 24" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4"/>
      <path d="M44 24 Q36 20 24 24" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4"/>
    </svg>
  )
}

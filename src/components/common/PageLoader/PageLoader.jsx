import './PageLoader.css'

// Suspense fallback for all lazy-loaded service pages
export default function PageLoader() {
  return (
    <div className="page-loader" aria-label="Loading page" role="status">
      <div className="page-loader__ring" />
      <div className="page-loader__ring page-loader__ring--delay" />
      <div className="page-loader__core" />
    </div>
  )
}

import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// Layout
import Layout from './components/layout/Layout'

// New components (Phase 1)
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'
import PageLoader from './components/common/PageLoader/PageLoader'
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary'

// Eager-loaded pages (Home, About, Services, Contact always ship in main bundle)
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

// Lazy-loaded service pages — each is a separate JS chunk
const PsychicConsultations = lazy(() =>
  import('./pages/PsychicConsultations/PsychicConsultations')
)
const ProsperityRituals = lazy(() =>
  import('./pages/ProsperityRituals/ProsperityRituals')
)
const FinancialBlockage = lazy(() =>
  import('./pages/FinancialBlockage/FinancialBlockage')
)
const WealthActivation = lazy(() =>
  import('./pages/WealthActivation/WealthActivation')
)
const BusinessBreakthrough = lazy(() =>
  import('./pages/BusinessBreakthrough/BusinessBreakthrough')
)
const CorporateSolutions = lazy(() =>
  import('./pages/CorporateSolutions/CorporateSolutions')
)

// Wrap a lazy page with ErrorBoundary + Suspense
function LazyPage({ component: Component }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <>
      {/* Fires window.scrollTo(0,0) on every route change */}
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {/* Eager pages */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Lazy service detail pages */}
          <Route
            path="/services/psychic-consultations"
            element={<LazyPage component={PsychicConsultations} />}
          />
          <Route
            path="/services/prosperity-rituals"
            element={<LazyPage component={ProsperityRituals} />}
          />
          <Route
            path="/services/financial-blockage"
            element={<LazyPage component={FinancialBlockage} />}
          />
          <Route
            path="/services/wealth-activation"
            element={<LazyPage component={WealthActivation} />}
          />
          <Route
            path="/services/business-breakthrough"
            element={<LazyPage component={BusinessBreakthrough} />}
          />
          <Route
            path="/services/corporate-solutions"
            element={<LazyPage component={CorporateSolutions} />}
          />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

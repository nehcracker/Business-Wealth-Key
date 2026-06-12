import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// CSS import order is mandatory — do not reorder
import './styles/reset.css'
import './styles/variables.css'
import './styles/animations.css'
import './styles/global.css'
import './styles/pages.css'

import App from './App'

document.addEventListener('copy', (e) => e.preventDefault())
document.addEventListener('contextmenu', (e) => e.preventDefault())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

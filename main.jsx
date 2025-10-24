

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppPrincipal from './AppPrincipal.jsx'
import { BrowserRouter } from 'react-router-dom'

const rootReact = createRoot(document.getElementById('root'))

rootReact.render(
  <StrictMode>
    <BrowserRouter>
      <AppPrincipal />
    </BrowserRouter>
  </StrictMode>
)

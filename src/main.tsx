import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeContextWrapper } from '~/context/themeContextWrapper'
import { UnitProvider } from '~/context/unitContext'
import Home from '~/pages/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <UnitProvider>
        <Home />
      </UnitProvider>
    </ThemeContextWrapper>
  </React.StrictMode>
)

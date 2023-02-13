import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '~/context/themeContext'
import { UnitProvider } from '~/context/unitContext'
import Home from '~/pages/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <UnitProvider>
        <Home />
      </UnitProvider>
    </ThemeProvider>
  </React.StrictMode>
)

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { useLocalStorage } from '~/hooks/useLocalStorage'

const isSystemThemeDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const systemTheme = isSystemThemeDark ? 'dark' : 'light'

const ThemeContext = createContext<string | undefined>(systemTheme)
const ThemeUpdateContext = createContext<() => void>(() => {})

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [savedTheme, setSavedTheme] = useLocalStorage('appTheme', systemTheme)
  const [theme, setTheme] = useState(savedTheme)

  const changeTheme = () => {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'))
    setSavedTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={changeTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

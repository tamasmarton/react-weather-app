import { createContext } from 'react'

const isSystemThemeDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const systemTheme = isSystemThemeDark ? 'dark' : 'light'

const defaultValue = {
  currentTheme: systemTheme,
  changeCurrentTheme: (_newTheme: 'dark' | 'light') => {},
}

export const ThemeContext = createContext(defaultValue)

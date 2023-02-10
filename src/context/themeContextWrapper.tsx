import { ReactNode, useEffect, useState } from 'react'

import { useLocalStorage } from '~/hooks/useLocalStorage'

import { ThemeContext } from './themeContext'

export type TThemeMode = 'dark' | 'light'

export const ThemeContextWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage('appTheme', '')

  console.log('theme', theme)

  const changeCurrentTheme = (newTheme: TThemeMode) => {
    setTheme(newTheme)
  }

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')

    // console.log('savedTheme', savedTheme)
    console.log('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
}

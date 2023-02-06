import { FC, ReactNode, useEffect, useState } from 'react'

import { useLocalStorage } from '~/hooks/useLocalStorage'

import { ThemeContext } from './themeContext'

interface Props {
  children: ReactNode
}

export const ThemeContextWrapper: FC<Props> = ({ children }) => {
  const savedTheme: unknown = useLocalStorage('appTheme')
  const [theme, setTheme] = useState(savedTheme as string)

  const changeCurrentTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme)
  }

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [theme])

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
}

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type ReturnType<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>]

export const useLocalStorage = <T,>(keyName: string, fallbackState?: T): ReturnType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (!fallbackState) return

    try {
      const value = localStorage.getItem(keyName)
      return value ? JSON.parse(value) : fallbackState
    } catch (error) {
      return fallbackState
    }
  })

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(keyName, JSON.stringify(state))
      } catch (error) {
        console.error(error)
      }
    }
  }, [state, setState])

  return [state, setState]
}

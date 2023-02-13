import { createContext, ReactNode, useContext, useState } from 'react'

import { useLocalStorage } from '~/hooks/useLocalStorage'

const UnitContext = createContext<string | undefined>(undefined)
const UnitUpdateContext = createContext<() => void>(() => {})

export const useUnit = () => useContext(UnitContext)

export const useUnitUpdate = () => useContext(UnitUpdateContext)

export const UnitProvider = ({ children }: { children: ReactNode }) => {
  const [savedUnit, setSavedUnit] = useLocalStorage('appUnit', 'metric')
  const [unit, setUnit] = useState(savedUnit)

  const changeUnit = () => {
    console.log('CHANGE UNIT TRIGGER')
    setUnit(prevState => (prevState === 'metric' ? 'imperial' : 'metric'))
    setSavedUnit(prevState => (prevState === 'metric' ? 'imperial' : 'metric'))
  }

  return (
    <UnitContext.Provider value={unit}>
      <UnitUpdateContext.Provider value={changeUnit}>{children}</UnitUpdateContext.Provider>
    </UnitContext.Provider>
  )
}

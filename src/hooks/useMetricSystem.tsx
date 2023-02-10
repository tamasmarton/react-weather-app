import { useEffect } from 'react'

import { useLocalStorage } from '~/hooks/useLocalStorage'

type TMetricSystem = 'metric' | 'imperial'

const useMetricSystem = (): [TMetricSystem, (value: TMetricSystem) => void] => {
  const [unit, setUnit] = useLocalStorage<TMetricSystem>('appUnit', 'metric')

  useEffect(() => {
    console.log(`Metric system changed to: ${unit}`)
  }, [unit])

  // @ts-ignore
  return [unit, setUnit]
}

export default useMetricSystem

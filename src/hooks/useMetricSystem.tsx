import { useEffect } from 'react'

import { useLocalStorage } from '~/hooks/useLocalStorage'

type MetricSystem = 'metric' | 'imperial'

const useMetricSystem = (): [MetricSystem, (value: MetricSystem) => void] => {
  const [unit, setUnit] = useLocalStorage<MetricSystem>('appUnit', 'metric')

  useEffect(() => {
    console.log(`Metric system changed to: ${unit}`)
  }, [unit])

  return [unit, setUnit]
}

export default useMetricSystem

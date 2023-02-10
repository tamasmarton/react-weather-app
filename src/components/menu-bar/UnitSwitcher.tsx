import ToggleButton from '~/components/ui/ToggleButton'
import useMetricSystem from '~/hooks/useMetricSystem'

const UnitSwitcher = () => {
  const [metricSystem, setMetricSystem] = useMetricSystem()

  const changeUnit = () => {
    if (metricSystem === 'metric') {
      setMetricSystem('imperial')
    } else {
      setMetricSystem('metric')
    }
  }

  return (
    <div className='flex justify-center items-center space-x-2'>
      <span>˚F</span>

      <ToggleButton
        toggled={metricSystem === 'metric'}
        onClick={() => changeUnit()}
      />

      <span>˚C</span>
    </div>
  )
}

export default UnitSwitcher

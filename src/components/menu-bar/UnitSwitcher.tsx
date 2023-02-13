import ToggleButton from '~/components/ui/ToggleButton'
import { useUnit, useUnitUpdate } from '~/context/unitContext'

const UnitSwitcher = () => {
  const unit = useUnit()
  const changeUnit = useUnitUpdate()

  return (
    <div className='flex justify-center items-center space-x-2'>
      <span>˚F</span>

      <ToggleButton
        toggled={unit === 'metric'}
        onClick={changeUnit}
      />

      <span>˚C</span>
    </div>
  )
}

export default UnitSwitcher

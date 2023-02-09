import ToggleButton from '~/components/ui/ToggleButton'

const UnitSwitcher = () => {
  return (
    <div className='flex justify-center items-center space-x-2'>
      <span>˚F</span>

      <ToggleButton
        toggled={true}
        onClick={() => console.log('click')}
      />

      <span>˚C</span>
    </div>
  )
}

export default UnitSwitcher

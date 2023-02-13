import DarkModeSwitcher from '~/components/menu-bar/DarkModeSwitcher'
import UnitSwitcher from '~/components/menu-bar/UnitSwitcher'

const MenuBar = () => {
  return (
    <div className='w-full h-10 flex items-center fixed top-0 bg-sky-600 shadow-md'>
      <div className='container flex justify-between items-center'>
        <p className='text-md md:text-2xl font-semibold mx-4'>React Weather App</p>

        <div className='flex items-center space-x-6'>
          <UnitSwitcher />

          <DarkModeSwitcher />
        </div>
      </div>
    </div>
  )
}

export default MenuBar

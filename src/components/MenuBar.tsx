import DarkModeToggle from '~/components/ui/DarkModeToggle'

function MenuBar() {
  return (
    <div className='w-full h-10 flex items-center fixed top-0 bg-sky-600 shadow-md'>
      <div className='container flex justify-between items-center'>
        <p className='text-2xl font-semibold'>React Weather App</p>

        <DarkModeToggle />
      </div>
    </div>
  )
}

export default MenuBar

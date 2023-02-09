import { useContext } from 'react'
import { WiDaySunny, WiMoonWaningCrescent2 } from 'react-icons/wi'

import ToggleButton from '~/components/ui/ToggleButton'
import { ThemeContext } from '~/context/themeContext'

function DarkModeSwitcher() {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

  return (
    <div className='flex justify-center items-center space-x-2'>
      <div>
        <WiDaySunny className='w-8 h-8 text-yellow-500' />
      </div>

      <ToggleButton
        toggled={currentTheme === 'light'}
        onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
      />

      <div>
        <WiMoonWaningCrescent2 className='w-8 h-8 text-slate-900' />
      </div>
    </div>
  )
}

export default DarkModeSwitcher

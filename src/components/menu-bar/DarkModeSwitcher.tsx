import { WiDaySunny, WiMoonWaningCrescent2 } from 'react-icons/wi'

import ToggleButton from '~/components/ui/ToggleButton'
import { useTheme, useThemeUpdate } from '~/context/themeContext'

function DarkModeSwitcher() {
  const theme = useTheme()
  const changeTheme = useThemeUpdate()

  return (
    <div className='flex justify-center items-center space-x-2'>
      <div>
        <WiDaySunny className='w-8 h-8 text-yellow-500' />
      </div>

      <ToggleButton
        toggled={theme === 'light'}
        onClick={changeTheme}
      />

      <div>
        <WiMoonWaningCrescent2 className='w-8 h-8 text-slate-900' />
      </div>
    </div>
  )
}

export default DarkModeSwitcher

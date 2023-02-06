import { useContext } from 'react'
import { WiDaySunny, WiMoonWaningCrescent2 } from 'react-icons/wi'

import { ThemeContext } from '~/context/themeContext'

function DarkModeToggle() {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

  return (
    <div className='flex justify-center items-center space-x-2'>
      <div>
        <WiDaySunny className='w-8 h-8 text-yellow-500' />
      </div>

      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          value=''
          className='sr-only peer'
          onChange={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
        />

        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-900"></div>
      </label>

      <div>
        <WiMoonWaningCrescent2 className='w-8 h-8 text-slate-900' />
      </div>
    </div>
  )
}

export default DarkModeToggle

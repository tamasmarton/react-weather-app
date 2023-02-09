import { ChangeEvent, ChangeEventHandler, useState } from 'react'

const ToggleButton = ({ toggled, onClick }: { toggled: boolean; onClick?: ChangeEventHandler<HTMLInputElement> }) => {
  const [isToggled, setIsToggled] = useState(toggled)

  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setIsToggled(event.target.checked)

    if (onClick) onClick(event)
  }

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        defaultChecked={isToggled}
        onChange={handleClick}
      />

      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-sky-900"></div>
    </label>
  )
}

export default ToggleButton

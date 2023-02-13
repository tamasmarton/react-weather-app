import { format, fromUnixTime } from 'date-fns'

import { useUnit } from '~/context/unitContext'
import { formatTemp } from '~/utils/formatTemp'

const WeatherItemByDay = ({ temp, timestamp, icon }: IWeatherItem) => {
  const unit = useUnit()

  return (
    <div className='grid grid-cols-3 items-center'>
      <span className='text-left'>{format(fromUnixTime(timestamp), 'EEEE')}</span>

      <img
        alt={icon}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className='w-10 h-10 mx-auto'
      />

      <span className='text-right'>{formatTemp(temp, unit)}</span>
    </div>
  )
}

export default WeatherItemByDay

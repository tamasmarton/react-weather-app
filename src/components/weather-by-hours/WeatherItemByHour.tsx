import { format, fromUnixTime } from 'date-fns'

import useMetricSystem from '~/hooks/useMetricSystem'
import { formatTemp } from '~/utils/formatTemp'

const WeatherItemByHour = ({ timestamp, temp, icon }: IWeatherItem) => {
  const [unit] = useMetricSystem()

  return (
    <div className='w-16 flex flex-col items-center'>
      <p>{format(fromUnixTime(timestamp), 'HH:mm')}</p>
      <img
        alt={icon}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className='w-10 h-10 my-2'
      />
      <p className='text-xl'>{formatTemp(temp, unit)}</p>
    </div>
  )
}

export default WeatherItemByHour

import { format, fromUnixTime } from 'date-fns'

import useMetricSystem from '~/hooks/useMetricSystem'
import { formatTemp } from '~/utils/formatTemp'

const WeatherItemByDay = ({ temp, timestamp, icon }: IWeatherItem) => {
  const [unit] = useMetricSystem()

  return (
    <div className='flex justify-between items-center'>
      <span>{format(fromUnixTime(timestamp), 'E')}</span>

      <img
        alt={icon}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className='w-10 h-10'
      />

      <span>{formatTemp(temp, unit)}</span>
    </div>
  )
}

export default WeatherItemByDay

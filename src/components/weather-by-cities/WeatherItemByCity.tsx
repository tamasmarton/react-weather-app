import { useQuery } from 'react-query'

import { getCurrentWeatherByCity } from '~/Fetchers'
import useMetricSystem from '~/hooks/useMetricSystem'
import { formatTemp } from '~/utils/formatTemp'

const WeatherItemByCity = ({ city }: { city: string }) => {
  const [unit] = useMetricSystem()

  const { data } = useQuery(`currentWeatherIn${city}`, getCurrentWeatherByCity(city))

  if (!data) return <p>An error occurred.</p>

  return (
    <div className='grid grid-cols-3 items-center'>
      <span className='text-left'>{data.name}</span>

      <img
        alt={data?.weather[0].icon}
        src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        className='w-10 h-10 my-2 mx-auto'
      />

      <span className='text-right'>{formatTemp(data?.main.temp, unit)}</span>
    </div>
  )
}

export default WeatherItemByCity

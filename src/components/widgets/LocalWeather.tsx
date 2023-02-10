import { useQuery } from 'react-query'

import WeatherByDays from '~/components/weather-by-days'
import WeatherByHours from '~/components/weather-by-hours'
import { getCurrentWeatherByCoordinates } from '~/Fetchers'
import useMetricSystem from '~/hooks/useMetricSystem'
import { formatTemp } from '~/utils/formatTemp'

const LocalWeather = ({ geolocation }: { geolocation: any }) => {
  const [unit] = useMetricSystem()

  const { data } = useQuery('localCurrentWeather', getCurrentWeatherByCoordinates(geolocation))

  if (!data) return <p>An error occurred.</p>

  return (
    <div className='flex flex-col justify-center items-center space-y-12 py-12 bg-sky-300 dark:bg-sky-700'>
      <div className='text-center'>
        <p className='text-xl'>Local Weather</p>

        <img
          alt={data?.current.weather[0].icon}
          src={`http://openweathermap.org/img/wn/${data?.current.weather[0].icon}@2x.png`}
          className='w-18 h-18 block mx-auto'
        />

        <p className='text-6xl font-bold'>{formatTemp(data?.current.temp, unit)}</p>

        <p className='mt-4 text-md'>{data?.current.weather[0].main}</p>
      </div>

      <WeatherByHours geolocation={geolocation} />

      <hr className='border border-sky-400 dark:border-sky-800 w-full' />

      <WeatherByDays geolocation={geolocation} />
    </div>
  )
}

export default LocalWeather

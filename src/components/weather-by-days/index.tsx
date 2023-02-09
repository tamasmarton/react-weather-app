import { useQuery } from 'react-query'

import WeatherItemByDay from '~/components/weather-by-days/WeatherItemByDay'
import { getDailyForecastByCoordinates } from '~/Fetchers'

const WeatherByDays = ({ geolocation }: { geolocation: IGeoLocation }) => {
  const { data } = useQuery('localDailyWeather', getDailyForecastByCoordinates(geolocation.lat, geolocation.long))

  const nextSixDayData = data?.daily.slice(0, 6)

  if (!data) return <p>An error occurred.</p>

  return (
    <div className='w-1/3'>
      <h3 className='mb-6 text-2xl font-bold text-center uppercase'>6 day forecast</h3>

      {nextSixDayData?.map((day: any, id: number) => {
        return (
          <WeatherItemByDay
            key={id}
            title='Tue'
            temp={day.temp.day}
            icon={day.weather[0].icon}
            timestamp={day.dt + data.timezone_offset}
          />
        )
      })}
    </div>
  )
}

export default WeatherByDays

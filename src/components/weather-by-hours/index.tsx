import { useQuery } from 'react-query'

import WeatherItemByHour from '~/components/weather-by-hours/WeatherItemByHour'
import { getHourlyForecastByCoordinates } from '~/Fetchers'

const WeatherByHours = ({ geolocation }: { geolocation: IGeoLocation }) => {
  const { data } = useQuery('localHourlyWeather', getHourlyForecastByCoordinates(geolocation.lat, geolocation.long))

  const nextTwelveHourData = data?.hourly.slice(0, 12)

  if (!data) return <p>An error occurred.</p>

  return (
    <div className='w-full grid grid-cols-12 px-12'>
      {nextTwelveHourData?.map((hourData: any, id: number) => {
        return (
          <WeatherItemByHour
            key={id}
            icon={hourData?.weather[0]?.icon}
            temp={hourData?.temp}
            timestamp={hourData?.dt + data.timezone_offset}
          />
        )
      })}
    </div>
  )
}

export default WeatherByHours

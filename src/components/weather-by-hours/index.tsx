import { useQuery } from 'react-query'

import WeatherItemByHour from '~/components/weather-by-hours/WeatherItemByHour'
import { getHourlyForecastByCoordinates } from '~/Fetchers'

const WeatherByHours = ({ geolocation }: { geolocation: IGeoLocation }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'localHourlyWeather',
    enabled: geolocation.lat !== null && geolocation.long !== null,
    queryFn: getHourlyForecastByCoordinates(geolocation),
  })

  const nextTwelveHourData = data?.hourly.slice(0, 12)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>An error occurred.</p>

  return (
    <div className='max-w-full flex justify-start items-center space-x-4 px-12 overflow-x-scroll'>
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

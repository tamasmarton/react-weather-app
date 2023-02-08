import { useQuery } from 'react-query'

import WeatherItemByHour from '~/components/WeatherItemByHour'
import { getForecastByCoordinates } from '~/Fetchers'

const WeatherByHours = ({ location }: { location: IGeoLocation }) => {
  const { data, error, status, failureCount } = useQuery(
    'localHourlyForecast',
    getForecastByCoordinates(location.lat, location.long)
  )

  console.log('forecast', status, error, failureCount, data)

  if (error) return <p>An error occurred.</p>

  return (
    <div className='w-full grid grid-cols-12 px-12'>
      {data?.list.map((hourData: any, id: number) => {
        return (
          <WeatherItemByHour
            key={id}
            icon={hourData?.weather[0]?.icon}
            temp={hourData?.main.temp}
            title={hourData?.dt_txt}
          />
        )
      })}
    </div>
  )
}

export default WeatherByHours

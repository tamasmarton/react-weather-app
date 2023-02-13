import { useQuery } from 'react-query'

import WeatherItemByDay from '~/components/weather-by-days/WeatherItemByDay'
import { getDailyForecastByCoordinates } from '~/Fetchers'

const WeatherByDays = ({ geolocation }: { geolocation: IGeoLocation }) => {
  // const [savedDailyData, setSavedDailyData] = useLocalStorage('appNextSixDayForecast', false)
  // const [hasSavedData, setHasSavedData] = useState<boolean>(!!savedDailyData)

  // const [nextSixDayData, setNextSixDayData] = useState<any>(savedDailyData)

  const { data, isLoading, isError } = useQuery({
    queryKey: 'localDailyWeather',
    keepPreviousData: true,
    enabled: geolocation.lat !== null && geolocation.long !== null,
    queryFn: getDailyForecastByCoordinates(geolocation),
  })

  // console.log('SAVED: ', !!savedDailyData)
  //
  // useEffect(() => {
  //   if (savedDailyData) {
  //     console.log('saved daily', savedDailyData)
  //     console.log('QUERY FALSE: ', isLoading, isSuccess, status)
  //
  //     setNextSixDayData({ ...savedDailyData, daily: savedDailyData?.daily.slice(0, 6) })
  //   } else {
  //     console.log('nincsen')
  //     setSavedDailyData(data)
  //     setHasSavedData(true)
  //     console.log('QUERY TRUE: ', isLoading, isSuccess, status)
  //   }
  // }, [hasSavedData])

  const nextSixDayData = { ...data, daily: data?.daily.slice(0, 6) }

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>An error occurred.</p>

  return (
    <div className='w-full sm:w-3/4 md:w-2/3 px-16 sm:px-8 md:px-0'>
      <h3 className='mb-6 text-2xl font-bold text-center uppercase'>6 day forecast</h3>

      {nextSixDayData?.daily.map((day: any, id: number) => {
        return (
          <WeatherItemByDay
            key={id}
            title='Tue'
            temp={day.temp.day}
            icon={day.weather[0].icon}
            timestamp={day.dt + nextSixDayData.timezone_offset}
          />
        )
      })}
    </div>
  )
}

export default WeatherByDays

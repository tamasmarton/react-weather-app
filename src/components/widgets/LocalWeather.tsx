import { useQuery } from 'react-query'

// import { usePosition } from '~/hooks/usePosition'
import WeatherByDays from '~/components/weather-by-days'
import WeatherByHours from '~/components/weather-by-hours'
import { getWeatherByCoordinates } from '~/Fetchers'

function LocalWeather() {
  // const [lat, long, loadingLocation, findCoordinates] = usePosition()

  const geolocation: IGeoLocation = {
    lat: 47.5514059560408,
    long: 19.090888448304877,
  }

  const { data } = useQuery('localWeather', getWeatherByCoordinates(geolocation.lat, geolocation.long))

  const weatherDataByNextTwelveHours = data?.hourly.slice(0, 12)
  const weatherDataBySixDay = data?.daily.slice(0, 6)

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

        <p className='text-6xl font-bold'>{data?.current.temp}˚C</p>

        <p className='mt-4 text-md'>{data?.current.weather[0].main}</p>
      </div>

      <WeatherByHours
        timezoneOffset={data?.timezone_offset}
        data={weatherDataByNextTwelveHours}
      />

      <hr className='border border-sky-400 dark:border-sky-800 w-full' />

      <WeatherByDays data={weatherDataBySixDay} />
    </div>
  )
}

export default LocalWeather

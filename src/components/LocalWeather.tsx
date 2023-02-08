// import { usePosition } from '~/hooks/usePosition'

import { useQuery } from 'react-query'

import SixDayForecast from '~/components/SixDayForecast'
import WeatherByHours from '~/components/WeatherByHours'
import { getWeatherByCoordinates } from '~/Fetchers'

function LocalWeather() {
  // const [lat, long, loadingLocation, findCoordinates] = usePosition()

  const geolocation: IGeoLocation = {
    lat: 47.5514059560408,
    long: 19.090888448304877,
  }

  const { data } = useQuery('localWeather', getWeatherByCoordinates(geolocation.lat, geolocation.long))

  // console.log('localWeatherData', data)

  if (!data) return <p>An error occurred.</p>

  return (
    <div className='flex flex-col justify-center items-center space-y-12 py-12 bg-sky-300 dark:bg-sky-700'>
      <p className='text-xl'>{data?.name}</p>

      <div className='text-center'>
        <p className='text-8xl font-bold'>{data?.main?.temp}˚C</p>
        <p className='text-lg'>{data?.weather?.main}</p>
      </div>

      <WeatherByHours location={geolocation} />

      <hr className='border border-black w-full' />

      <SixDayForecast />
    </div>
  )
}

export default LocalWeather

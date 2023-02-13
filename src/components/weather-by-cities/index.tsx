import { useQueries } from 'react-query'

import WeatherItemByCity from '~/components/weather-by-cities/WeatherItemByCity'
import { getCurrentWeatherByCity } from '~/Fetchers'

const WeatherByCities = ({ cityList }: { cityList: string[] }) => {
  const cityResults = useQueries(
    cityList.map(city => {
      return {
        queryKey: `currentWeatherIn${city}`,
        queryFn: getCurrentWeatherByCity(city),
      }
    })
  )

  return (
    <div className='w-full sm:w-3/4 md:w-2/3 px-16 sm:px-8 md:px-0 mt-8 mx-auto'>
      {cityResults.map((cityResult, idx) => (
        <WeatherItemByCity
          key={idx}
          result={cityResult}
        />
      ))}
    </div>
  )
}

export default WeatherByCities

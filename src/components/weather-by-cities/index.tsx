import WeatherItemByCity from '~/components/weather-by-cities/WeatherItemByCity'

const WeatherByCities = ({ cityList }: { cityList: string[] }) => {
  return (
    <div className='w-full sm:w-3/4 md:w-2/3 px-16 sm:px-8 md:px-0 mt-8 mx-auto'>
      {cityList.map((city, idx) => (
        <WeatherItemByCity
          key={idx}
          city={city}
        />
      ))}
    </div>
  )
}

export default WeatherByCities

import WeatherByCities from '~/components/weather-by-cities'

const SixCityWeather = () => {
  const sixCities: string[] = ['Munich', 'Birmingham', 'San Diego', 'Tel Aviv', 'Osaka', 'Shenzhen']

  return (
    <div className='bg-sky-300 dark:bg-sky-700 text-center pt-6 pb-12'>
      <h4 className='text-lg font-bold px-12'>Current weather in different cities around the world</h4>

      <WeatherByCities cityList={sixCities} />
    </div>
  )
}

export default SixCityWeather

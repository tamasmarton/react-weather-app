import WeatherItemByDay from '~/components/WeatherItemByDay'

const SixDayForecast = () => {
  return (
    <div className='w-1/3'>
      <h3 className='mb-6 text-2xl font-bold text-center uppercase'>6 day forecast</h3>

      <WeatherItemByDay
        title='Tue'
        temp='15'
        icon='WiDaySnowWind'
      />
      <WeatherItemByDay
        title='Tue'
        temp='15'
        icon='WiDaySnowWind'
      />
      <WeatherItemByDay
        title='Tue'
        temp='15'
        icon='WiDaySnowWind'
      />
      <WeatherItemByDay
        title='Tue'
        temp='15'
        icon='WiDaySnowWind'
      />
      <WeatherItemByDay
        title='Tue'
        temp='15'
        icon='WiDaySnowWind'
      />
      <WeatherItemByDay
        title='Tue'
        temp='15'
        icon='WiDaySnowWind'
      />
    </div>
  )
}

export default SixDayForecast

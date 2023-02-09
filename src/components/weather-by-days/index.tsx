import WeatherItemByDay from '~/components/weather-by-days/WeatherItemByDay'

const WeatherByDays = ({ data }: { data: any }) => {
  if (!data) return <p>An error occurred.</p>

  return (
    <div className='w-1/3'>
      <h3 className='mb-6 text-2xl font-bold text-center uppercase'>6 day forecast</h3>

      {data?.map((day: any, id: number) => {
        return (
          <WeatherItemByDay
            key={id}
            title='Tue'
            temp={day.temp.day}
            icon={day.weather[0].icon}
            timestamp={day.dt}
          />
        )
      })}
    </div>
  )
}

export default WeatherByDays

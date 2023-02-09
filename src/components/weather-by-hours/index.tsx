import WeatherItemByHour from '~/components/weather-by-hours/WeatherItemByHour'

const WeatherByHours = ({ data, timezoneOffset }: { data: any; timezoneOffset: number }) => {
  if (!data) return <p>An error occurred.</p>

  return (
    <div className='w-full grid grid-cols-12 px-12'>
      {data?.map((hourData: any, id: number) => {
        return (
          <WeatherItemByHour
            key={id}
            icon={hourData?.weather[0]?.icon}
            temp={hourData?.temp}
            timestamp={hourData?.dt + timezoneOffset}
          />
        )
      })}
    </div>
  )
}

export default WeatherByHours

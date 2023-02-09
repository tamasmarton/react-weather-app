import { format, fromUnixTime } from 'date-fns'

const WeatherItemByDay = ({ temp, timestamp, icon }: IWeatherItem) => {
  return (
    <div className='flex justify-between items-center'>
      <span>{format(fromUnixTime(timestamp), 'E')}</span>

      <img
        alt={icon}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className='w-10 h-10'
      />

      <span>{temp}˚C</span>
    </div>
  )
}

export default WeatherItemByDay

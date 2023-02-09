import { format, fromUnixTime } from 'date-fns'

const WeatherItemByHour = ({ timestamp, temp, icon }: IWeatherItem) => {
  return (
    <div className='w-full flex flex-col items-center'>
      <p>{format(fromUnixTime(timestamp), 'HH:mm')}</p>
      <img
        alt={icon}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className='w-10 h-10 my-2'
      />
      <p className='text-xl'>{temp}˚C</p>
    </div>
  )
}

export default WeatherItemByHour
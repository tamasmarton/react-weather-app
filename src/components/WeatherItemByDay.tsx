import { WiDaySnowWind } from 'react-icons/all'

const WeatherItemByDay = ({ title, temp }: IWeatherItem) => {
  return (
    <div className='flex justify-between'>
      <span>{title}</span>

      <WiDaySnowWind className='w-8 h-8' />

      <span>{temp}˚C</span>
    </div>
  )
}

export default WeatherItemByDay

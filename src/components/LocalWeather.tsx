import { WiDaySnowWind } from 'react-icons/all'

interface IWeatherItem {
  title: string
  temp: string
  icon: string
}
function WeatherItemByHour({ title, temp, icon }: IWeatherItem) {
  return (
    <div className='flex flex-col items-center'>
      <p>{title}</p>
      <WiDaySnowWind className='w-8 h-8' />
      <p className='text-xl'>{temp}˚C</p>
    </div>
  )
}

function WeatherItemByDay({ title, temp, icon }: IWeatherItem) {
  return (
    <div className='flex justify-between'>
      <span>{title}</span>

      <WiDaySnowWind className='w-8 h-8' />

      <span>{temp}˚C</span>
    </div>
  )
}

function LocalWeather() {
  return (
    <div className='flex flex-col justify-center items-center space-y-12 py-12 text-white dark:text-black bg-sky-700'>
      <p className='text-xl'>Budapest</p>

      <div className='text-center'>
        <p className='text-8xl font-bold'>20˚C</p>
        <p className='text-lg'>Clear</p>
      </div>

      <div className='w-2/3 grid grid-cols-12 gap-6'>
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
        <WeatherItemByHour
          icon='WiDaySnowWind'
          temp='14'
          title='10:00'
        />
      </div>

      <hr className='border border-black w-full' />

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
    </div>
  )
}

export default LocalWeather

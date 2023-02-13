import { useUnit } from '~/context/unitContext'
import { formatTemp } from '~/utils/formatTemp'

const WeatherItemByCity = ({ result }: { result: any }) => {
  const unit = useUnit()

  if (result.isLoading) return <p>Loading...</p>
  if (result.error) return <p>An error occurred.</p>

  return (
    <div className='grid grid-cols-3 items-center'>
      <span className='text-left'>{result?.data.name}</span>

      <img
        alt={result?.data?.weather[0].icon}
        src={`http://openweathermap.org/img/wn/${result?.data?.weather[0].icon}@2x.png`}
        className='w-10 h-10 my-2 mx-auto'
      />

      <span className='text-right'>{formatTemp(result?.data?.main.temp, unit)}</span>
    </div>
  )
}

export default WeatherItemByCity

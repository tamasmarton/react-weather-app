import LocalWeather from '~/components/LocalWeather'
import MenuBar from '~/components/MenuBar'
import SixCityWeather from '~/components/SixCityWeather'

function Home() {
  return (
    <div className='w-screen min-h-screen flex flex-col justify-center items-center bg-sky-800'>
      <MenuBar />

      <div className='container space-y-6'>
        <LocalWeather />
        <SixCityWeather />
      </div>
    </div>
  )
}

export default Home

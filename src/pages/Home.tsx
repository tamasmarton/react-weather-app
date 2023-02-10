import { Suspense, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import MenuBar from '~/components/menu-bar'
import LocalWeather from '~/components/widgets/LocalWeather'
import SixCityWeather from '~/components/widgets/SixCityWeather'
import { usePosition } from '~/hooks/usePosition'

const Home = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  })

  const [geolocation, _, findCoordinates] = usePosition()

  useEffect(() => {
    // @ts-ignore
    findCoordinates()
    console.warn('Default fetching')
  }, [])

  return (
    <QueryClientProvider client={client}>
      <Suspense fallback={<p>Loading...</p>}>
        <div
          className={`w-screen min-h-screen flex flex-col justify-center items-center transition-colors duration-200`}
        >
          <MenuBar />

          <div className='container space-y-6'>
            <LocalWeather geolocation={geolocation} />
            <SixCityWeather />
          </div>
        </div>
      </Suspense>
    </QueryClientProvider>
  )
}

export default Home

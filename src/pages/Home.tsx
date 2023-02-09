import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import MenuBar from '~/components/MenuBar'
import LocalWeather from '~/components/widgets/LocalWeather'
import SixCityWeather from '~/components/widgets/SixCityWeather'

const Home = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  })

  return (
    <QueryClientProvider client={client}>
      <Suspense fallback={<p>Loading...</p>}>
        <div
          className={`w-screen min-h-screen flex flex-col justify-center items-center transition-colors duration-200`}
        >
          <MenuBar />

          <div className='container space-y-6'>
            <LocalWeather />
            <SixCityWeather />
          </div>
        </div>
      </Suspense>
    </QueryClientProvider>
  )
}

export default Home

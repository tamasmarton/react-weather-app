import { Suspense, useEffect } from 'react'
import { QueryClient, QueryClientProvider, QueryKey } from 'react-query'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'

import MenuBar from '~/components/menu-bar'
import LocalWeather from '~/components/widgets/LocalWeather'
import SixCityWeather from '~/components/widgets/SixCityWeather'
import { usePosition } from '~/hooks/usePosition'

const Home = () => {
  const oneDayInMs = 86400000

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        cacheTime: oneDayInMs,
        refetchOnWindowFocus: false,
      },
    },
  })

  const localStoragePersistor = createWebStoragePersistor({
    storage: window.localStorage,
  })

  const notPersistedQueries: QueryKey[] = ['localCurrentWeather', 'localHourlyWeather']

  persistQueryClient({
    queryClient: client,
    persistor: localStoragePersistor,
    maxAge: oneDayInMs,
    dehydrateOptions: {
      shouldDehydrateQuery: ({ queryKey }) => !notPersistedQueries.includes(queryKey),
    },
  })

  const [geolocation, _, findCoordinates] = usePosition()

  useEffect(() => {
    // @ts-ignore
    findCoordinates()
  }, [])

  // @ts-ignore
  if (geolocation.lat === null && geolocation.long === null) return <p>Geolocation Error</p>

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

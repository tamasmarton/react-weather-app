import { useState } from 'react'

export const usePosition = () => {
  // const [lat, setLat] = useState<number>()
  // const [long, setLong] = useState<number>()
  const [loadingLocation, setLoadingLocation] = useState(false)
  const [geolocation, setGeolocation] = useState<IGeoLocation>({
    lat: null,
    long: null,
  })

  const getPosition = (options?: any) => {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options))
  }

  const findCoordinates = () => {
    if (navigator.geolocation) {
      setLoadingLocation(true)

      getPosition().then((position: any) => {
        setGeolocation({ lat: position.coords.latitude, long: position.coords.longitude })

        console.log('getPosition', position)
      })

      // navigator.geolocation.getCurrentPosition(
      //   pos => {
      //     console.log('usePosition: ', pos.coords)
      //     setLat(pos.coords.latitude)
      //     setLong(pos.coords.longitude)
      //   },
      //   positionError => {
      //     setLat(47.5545059)
      //     setLong(19.0926884)
      //     console.log(positionError)
      //   }
      // )

      setLoadingLocation(false)
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  return [geolocation, loadingLocation, findCoordinates]
}

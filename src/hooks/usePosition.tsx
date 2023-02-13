import { useState } from 'react'

export const usePosition = () => {
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

        // console.log('getPosition', position)
      })

      setLoadingLocation(false)
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  return [geolocation, loadingLocation, findCoordinates]
}

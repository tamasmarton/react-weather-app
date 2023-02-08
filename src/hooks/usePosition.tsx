import { useState } from 'react'

export const usePosition = () => {
  const [lat, setLat] = useState<number>()
  const [long, setLong] = useState<number>()
  const [loadingLocation, setLoadingLocation] = useState(false)

  const findCoordinates = () => {
    if (navigator.geolocation) {
      setLoadingLocation(true)
      navigator.geolocation.getCurrentPosition(
        pos => {
          console.log(pos.coords)
          setLat(pos.coords.latitude)
          setLong(pos.coords.longitude)
        },
        positionError => {
          setLat(41.390205)
          setLong(2.154007)
          console.log(positionError)
        }
      )
      setLoadingLocation(false)
    } else {
      console.log("It's not supported by this browser.")
    }
  }

  return [lat, long, loadingLocation, findCoordinates]
}

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = 'https://api.openweathermap.org/data/2.5/'
const UNITS = 'metric'

export const getWeatherByCoordinates = (lat: number, long: number) => () =>
  // fetch(`${API_URL}weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${UNITS}`).then(response => response.json())
  fetch(`${API_URL}onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${UNITS}`).then(response => response.json())

// export const getForecastByCoordinates = (lat: number, long: number) => () =>
//   fetch(`${API_URL}forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${UNITS}&cnt=12`).then(response =>
//     response.json()
//   )

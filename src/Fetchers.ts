const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = 'https://api.openweathermap.org/data/2.5/'
const UNITS = 'metric'

export const getCurrentWeatherByCoordinates = (lat: number, long: number) => () => {
  console.warn('Fetcher runs')
  return fetch(
    `${API_URL}onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${UNITS}&exclude=hourly,daily,minutely`
  ).then(response => response.json())
}

export const getHourlyForecastByCoordinates = (lat: number, long: number) => () =>
  fetch(`${API_URL}onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${UNITS}&exclude=current,daily,minutely`).then(
    response => response.json()
  )

export const getDailyForecastByCoordinates = (lat: number, long: number) => () =>
  fetch(
    `${API_URL}onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${UNITS}&exclude=hourly,current,minutely`
  ).then(response => response.json())

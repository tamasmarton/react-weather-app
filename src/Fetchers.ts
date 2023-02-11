const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = 'https://api.openweathermap.org/data/2.5/'
const UNITS = 'metric'

export const getCurrentWeatherByCoordinates = (geolocation: IGeoLocation) => () => {
  console.warn('Fetcher runs')
  return fetch(
    `${API_URL}onecall?lat=${geolocation.lat}&lon=${geolocation.long}&appid=${API_KEY}&units=${UNITS}&exclude=hourly,daily,minutely`
  ).then(response => response.json())
}

export const getHourlyForecastByCoordinates = (geolocation: IGeoLocation) => () =>
  fetch(
    `${API_URL}onecall?lat=${geolocation.lat}&lon=${geolocation.long}&appid=${API_KEY}&units=${UNITS}&exclude=current,daily,minutely`
  ).then(response => response.json())

export const getDailyForecastByCoordinates = (geolocation: IGeoLocation) => () =>
  fetch(
    `${API_URL}onecall?lat=${geolocation.lat}&lon=${geolocation.long}&appid=${API_KEY}&units=${UNITS}&exclude=hourly,current,minutely`
  ).then(response => response.json())

export const getCurrentWeatherByCity = (city: string) => () => {
  return fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&units=${UNITS}&exclude=hourly,current,minutely`).then(
    response => response.json()
  )
}

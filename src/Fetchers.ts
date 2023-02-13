const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = 'https://api.openweathermap.org/data/2.5/'

export const getCurrentWeatherByCoordinates = (geolocation: IGeoLocation) => () =>
  fetch(
    `${API_URL}onecall?lat=${geolocation.lat}&lon=${geolocation.long}&appid=${API_KEY}&exclude=hourly,daily,minutely`
  ).then(response => response.json())

export const getHourlyForecastByCoordinates = (geolocation: IGeoLocation) => () =>
  fetch(
    `${API_URL}onecall?lat=${geolocation.lat}&lon=${geolocation.long}&appid=${API_KEY}&exclude=current,daily,minutely`
  ).then(response => response.json())

export const getDailyForecastByCoordinates = (geolocation: IGeoLocation) => () =>
  fetch(
    `${API_URL}onecall?lat=${geolocation.lat}&lon=${geolocation.long}&appid=${API_KEY}&exclude=hourly,current,minutely`
  ).then(response => response.json())

export const getCurrentWeatherByCity = (city: string) => () =>
  fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&exclude=hourly,current,minutely`).then(response =>
    response.json()
  )

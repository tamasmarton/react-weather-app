export {}

declare global {
  interface IWeatherItem {
    title?: string
    temp: number
    icon?: string
    timestamp: number
  }

  interface IGeoLocation {
    lat: number | null
    long: number | null
  }
}

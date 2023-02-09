export {}

declare global {
  interface IWeatherItem {
    title?: string
    temp: string
    icon?: string
    timestamp: number
  }

  interface IGeoLocation {
    lat: number
    long: number
  }
}

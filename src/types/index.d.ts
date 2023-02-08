export {}

declare global {
  interface IWeatherItem {
    title: string
    temp: string
    icon?: string
  }

  interface IGeoLocation {
    lat: number
    long: number
  }
}

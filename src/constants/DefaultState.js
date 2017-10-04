// export const defaultState = {
//   isFetching: false,
//   searchCity: "no entry from user",
//   todayWeatherMin: "unknown low!",
//   todayWeatherMax: "unknown high!",
//   tomorrowWeatherMin: "unknown low!",
//   tomorrowWeatherMax: "unknown high!",
// }

export const defaultState = {
  plantList: [
    {
      plantName: "Philodendron",
      plantType: "Type",
      waterSchedule: "waterSchedule"
    }
  ],
  weatherList: {
    isFetching: false,
    searchCity: "no entry from user",
    todayWeatherMin: "unknown low!",
    todayWeatherMax: "unknown high!",
    tomorrowWeatherMin: "unknown low!",
    tomorrowWeatherMax: "unknown high!",
  }
}

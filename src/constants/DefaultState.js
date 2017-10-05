import { v4 } from 'uuid';

export const defaultState = {
  plantList: [
    {
      plantName: "Philodendron",
      plantType: "Type",
      waterSchedule: "waterSchedule",
      id: v4(),
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

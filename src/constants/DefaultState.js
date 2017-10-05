import { v4 } from 'uuid';

export const defaultState = {
  plantList1: [
    {
      plantName: "Philodendron",
      plantType: "Indoor",
      waterSchedule: "Every 4 days",
      lastWatered: "1 day ago",
      id: v4(),
    },
    {
      plantName: "Tomato",
      plantType: "Outdoor",
      waterSchedule: "Once a week",
      lastWatered: "3 days ago",
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

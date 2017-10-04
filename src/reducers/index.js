import constants from "./../constants";
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  let newState;
  let requestWeather;
  let newWeather;
  let todayWeatherMin;
  let todayWeatherMax;
  let tomorrowWeatherMin;
  let tomorrowWeatherMax;
  let searchCity;
  let weather;
  switch (action.type) {
    case types.REQUEST_WEATHER:
    newWeather = {
      isFetching: true,
      searchCity: action.searchCity,
    };
    newState = Object.assign({}, state, {
      [action.weather]: newWeather
    });
    return newState;

    case types.SHOW_WEATHER:
    todayWeatherMin = state[todayWeatherMin];
    todayWeatherMax = state[todayWeatherMax];
    tomorrowWeatherMin = state[tomorrowWeatherMin];
    tomorrowWeatherMax = state[tomorrowWeatherMax];
    searchCity = state[searchCity];
    newWeather = Object.assign({}, weather, {
      isFetching: false,
      weather: action.weather,
      searchCity: action.searchCity,
      todayWeatherMin: action.todayWeatherMin,
      todayWeatherMax: action.todayWeatherMax,
      tomorrowWeatherMin: action.tomorrowWeatherMin,
      tomorrowWeatherMax: action.tomorrowWeatherMax
    });
      return newWeather;

      case types.ADD_PLANT:
      todayWeatherMin = state[todayWeatherMin];
      todayWeatherMax = state[todayWeatherMax];
      tomorrowWeatherMin = state[tomorrowWeatherMin];
      tomorrowWeatherMax = state[tomorrowWeatherMax];
      searchCity = state[searchCity];
      let plantName;
      let plantType;
      let newPlant;
      let waterSchedule;
      let plant;
      newPlant = {
        isFetching: false,
        weather: action.weather,
        searchCity: action.searchCity,
        todayWeatherMin: action.todayWeatherMin,
        todayWeatherMax: action.todayWeatherMax,
        tomorrowWeatherMin: action.tomorrowWeatherMin,
        tomorrowWeatherMax: action.tomorrowWeatherMax,
        plantName: action.plantName,
        plantType: action.plantType,
        waterSchedule: action.waterSchedule,
      }
      newState = Object.assign({}, state, {
        [action.plant]: newPlant,
      });
        return newPlant;

      // case types.ADD_PLANT:
      // const { plantName, plantType, waterSchedule } = action;
      // return [
      //   ...state,
      //   {
      //     searchCity: searchCity,
      //     todayWeatherMin: action.todayWeatherMin,
      //     todayWeatherMax: action.todayWeatherMax,
      //     tomorrowWeatherMin: action.tomorrowWeatherMin,
      //     tomorrowWeatherMax: action.tomorrowWeatherMax,
      //     plantName: action.plantName,
      //     plantType: action.plantType,
      //     waterSchedule: action.waterSchedule,
      //   }
      // ]
      //   return newPlant;
    default:
    return state;
  }
}

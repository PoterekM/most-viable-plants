import constants from "./../constants";
const { defaultState, types } = constants;

const weatherList = (state = defaultState.weatherList, action) => {
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
    default:
    return state;
  }
}

export default weatherList;

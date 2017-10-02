import constants from "./../constants";
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  let newState;
  let requestWeather;
  let newWeather;
  let todayWeatherMin;
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
    todayWeatherMin = state[weather];
    searchCity = state[searchCity];
    newWeather = Object.assign({}, weather, {
      isFetching: false,
      weather: action.weather,
      searchCity: searchCity,
      todayWeatherMin: action.todayWeatherMin
    });
      return newWeather;
    default:
    return state;
  }
}

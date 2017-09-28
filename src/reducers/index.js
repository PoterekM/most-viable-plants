import constants from "./../constants";
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  let newState;
  let requestWeather;
  let newWeather;
  let weather;
  let searchCity;
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
    weather = state[action.weather];
    searchCity = state[action.searchCity]
    newWeather = Object.assign({}, weather, {
      isFetching: false,
      weather: action.weather,
      searchCity: action.searchCity
    });
      return newWeather;
    default:
    return state;
  }
}

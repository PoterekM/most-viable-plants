import * as types from "./../constants/ActionTypes";

export const requestWeather = (searchCity) => ({
  type: types.REQUEST_WEATHER,
  searchCity
});

export const showWeather = (todayWeatherMin, todayWeatherMax, tomorrowWeatherMin, tomorrowWeatherMax) => ({
  type: types.SHOW_WEATHER,
  todayWeatherMin,
  todayWeatherMax,
  tomorrowWeatherMin,
  tomorrowWeatherMax,
});

export const addPlant = (plantName, plantType, waterSchedule) => ({
  type: types.ADD_PLANT,
  plantName,
  plantType,
  waterSchedule
});

export function fetchWeather(searchCity) {
  console.log(searchCity);
  return function (dispatch) {
    dispatch(requestWeather(searchCity));
    console.log(searchCity + " line 17");
    return fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + searchCity + ",US&units=imperial&APPID=a928e20f76a0b5e801f9d90feb578f6a", {
      headers : {
        'Accept': 'application/json'
      }}).then(
      response => response.json(),
      error => console.log("There has been an error", error),
    ).then(function(json) {
      console.log(json);
      if (json.list.length > 0) {
        const todayWeatherMin = json.list[0].temp.min;
        const todayWeatherMax = json.list[0].temp.max;
        const tomorrowWeatherMin = json.list[1].temp.min;
        const tomorrowWeatherMax = json.list[1].temp.max;
        console.log(todayWeatherMax);
        console.log(todayWeatherMin);
        console.log(tomorrowWeatherMax);
        console.log(tomorrowWeatherMin);
        console.log(searchCity);
        dispatch(showWeather(todayWeatherMin, todayWeatherMax, tomorrowWeatherMin, tomorrowWeatherMax));
      } else {
        dispatch(showWeather("Sorry, we can't process that"));
      }
    });
  };
}

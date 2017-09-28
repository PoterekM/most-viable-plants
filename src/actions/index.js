import * as types from "./../constants/ActionTypes";

export const requestWeather = (searchCity) => ({
  type: types.REQUEST_WEATHER,
  searchCity
});

export const showWeather = (weather) => ({
  type: types.SHOW_WEATHER,
  weather
});

export function fetchWeather(searchCity) {
  console.log(searchCity);
  return function (dispatch) {
    dispatch(requestWeather(searchCity));
    console.log(searchCity + " line 17");
    return fetch("http://api.openweathermap.org/data/2.5/forecast?q=Portland&units=imperial&APPID=a928e20f76a0b5e801f9d90feb578f6a", {
      headers : {
        'Accept': 'application/json'
      }}).then(
      response => response.json(),
      error => console.log("There has been an error", error),
    ).then(function(json) {
      console.log("this is line 26"),
      console.log(json.list[0].dt_txt);
        if (json > 0) {
        const weather = json.cod
        console.log("HEY");
        console.log(weather);
        dispatch(showWeather(weather));
      } else {
        dispatch(showWeather("Sorry, we can't process that"));
      }
    });
  };
}

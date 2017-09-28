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
    return fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + searchCity + ",US&units=imperial&APPID=a928e20f76a0b5e801f9d90feb578f6a", {
      headers : {
        'Accept': 'application/json'
      }}).then(
      response => response.json(),
      error => console.log("There has been an error", error),
    ).then(function(json) {
      console.log(json)
      console.log("today high" + json.list[0].temp.max);
      console.log("tomorrow low" + json.list[0].temp.min);
      console.log("Friday high" + json.list[1].temp.max);
      console.log("Friday low" + json.list[1].temp.min);


      // console.log(json.list[0].dt_txt);
      // console.log(json.list[0].main.temp);
      // console.log(json.list[1].dt_txt);
      // console.log(json.list[1].main.temp);
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

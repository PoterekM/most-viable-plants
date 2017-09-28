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
    return fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&APPID=a928e20f76a0b5e801f9d90feb578f6a", {
      headers : {
        'Accept': 'application/json'
      }}).then(
      response => response.json(),
      error => console.log("There has been an error", error),
    ).then(function(json) {
      // console.log(json);
      // console.log("this is line 26"),
      // console.log(json.list);
      // console.log("First in list " + json.list[0].main.temp + " " + json.list[0].dt_txt);
      // console.log("Second in list " + json.list[1].main.temp + " " + json.list[1].dt_txt);
      // console.log("3 in list " + json.list[2].main.temp + " " + json.list[2].dt_txt);
      // console.log("4 in list " + json.list[3].main.temp + " " + json.list[3].dt_txt);
      // console.log("5 in list " + json.list[4].main.temp + " " + json.list[4].dt_txt);
      // console.log("6 in list " + json.list[5].main.temp + " " + json.list[5].dt_txt);
      // console.log("7 in list " + json.list[6].main.temp + " " + json.list[6].dt_txt);
      // console.log("8 in list " + json.list[7].main.temp + " " + json.list[7].dt_txt);
      // console.log("9 in list " + json.list[8].main.temp + " " + json.list[8].dt_txt);
      // console.log("10 in list " + json.list[9].main.temp + " " + json.list[9].dt_txt);
      // console.log("11 in list " + json.list[10].main.temp + " " + json.list[10].dt_txt);
      // console.log(json.list);
      console.log(json);
      if (json.list.length > 0) {

        const weather = json.list[0].main.temp;
        console.log("HEY");
        console.log(weather);
        console.log(searchCity);
        if (weather > 90) {
          alert("You should consider watering your plants tomorrow!")
        }
        dispatch(showWeather("The weather in " + searchCity + " is " + weather));
      } else {
        dispatch(showWeather("Sorry, we can't process that"));
      }
    });
  };
}

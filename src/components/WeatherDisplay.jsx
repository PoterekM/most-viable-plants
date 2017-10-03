import React from "react";
import { connect } from "react-redux";



const WeatherDisplay = ({ dispatch, weather }) => {
  let formAreaContent;
  if ((weather.todayWeatherMax) > 90) {
    alert("yaowza! Ya gotta watter your plants!");
  } else if ((weather.todayWeatherMin) < 32) {
    alert("Booooo!!");
  }

  if ((weather.todayWeatherMax) === "unknown high!"){
    console.log("yaaa");
    formAreaContent =
      <div>
      </div>
  } else {
    formAreaContent =
    <div>
      <h1>The high temperature for {weather.searchCity.searchCity} today is {weather.todayWeatherMax} with a low of {weather.todayWeatherMin}</h1>
      <hr/>
      <h1>Tomorrow</h1>
      The high temperature for {weather.searchCity.searchCity} today is {weather.tomorrowWeatherMax} with a low of {weather.tomorrowWeatherMin}

      <hr/><hr/><hr/>
      <h1>{weather.weather}</h1>
      <h2>{weather.searchCity.searchCity}</h2>
    </div>
  }


  return (
    <div>
      {formAreaContent}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  const weather = state;

  return {
    weather: weather,
  };
};

export default connect(mapStateToProps)(WeatherDisplay);

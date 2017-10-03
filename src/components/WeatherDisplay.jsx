import React from "react";
import { connect } from "react-redux";
import WeatherLocation from "./WeatherLocation";


const WeatherDisplay = ({ dispatch, weather }) => {
  let formAreaContent;

  if ((weather.todayWeatherMax || weather.todayWeatherMin) > 67) {
    alert("yaowza! Ya gotta watter your plants!");
  } else if ((weather.todayWeatherMin || weather.tomorrowWeatherMin) <= 44) {
    alert("Booooo!!");
  }

  if ((weather.todayWeatherMax) === "unknown high!"){
    console.log("yaaa");
    formAreaContent =
      <div>
        <WeatherLocation/>
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
  const weather = state;
  return {
    weather: state,
  };
};

export default connect(mapStateToProps)(WeatherDisplay);

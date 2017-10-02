import React from "react";
import { connect } from "react-redux";



const WeatherDisplay = ({ dispatch, weather }) => {
  if ((weather.todayWeatherMax) > 90) {
    alert("yaowza! Ya gotta watter your plants!");
  } else if ((weather.todayWeatherMin) < 32) {
    alert("Booooo!!");
  }

  return (
    <div>
      <h1>The high temperature for {weather.searchCity.searchCity} today is {weather.todayWeatherMax} with a low of {weather.todayWeatherMin}</h1>
    <hr/>
  <h1>Tomorrow</h1>
The high temperature for {weather.searchCity.searchCity} today is {weather.tomorrowWeatherMax} with a low of {weather.tomorrowWeatherMin}

      <hr/><hr/><hr/>
      <h1>{weather.weather}</h1>
      <h2>{weather.searchCity.searchCity}</h2>
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

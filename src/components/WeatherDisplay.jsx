import React from "react";
import { connect } from "react-redux";

const WeatherDisplay = ({ dispatch, weather, todayWeatherMin }) => {
  console.log(weather);
  return (
    <div>
      <h1>The high temperature for {weather.searchCity.searchCity} today is {weather.todayWeatherMax} with a low of </h1>
      {weather.weather.todayWeatherMin}
      <hr/><hr/><hr/><hr/>
      <h1>{weather.weather}</h1>
      <h2>{weather.searchCity.searchCity}</h2>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  const weather = state;
  const searchCity = state;
  const todayWeatherMin = state;
  return {
    weather: weather,
    searchCity: searchCity,
    todayWeatherMin: todayWeatherMin
  };
};

export default connect(mapStateToProps)(WeatherDisplay);

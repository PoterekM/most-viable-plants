import React from "react";
import { connect } from "react-redux";

const WeatherDisplay = ({ dispatch, weather }) => {
  console.log(weather);
  return (
    <div>
      <h1>The high temperature for {weather.searchCity.searchCity} tomorrow is {weather.weather}</h1>
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
  return {
    weather: weather,
    searchCity: searchCity
  };
};

export default connect(mapStateToProps)(WeatherDisplay);

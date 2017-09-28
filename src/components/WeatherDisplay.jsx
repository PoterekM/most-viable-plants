import React from "react";
import { connect } from "react-redux";

const WeatherDisplay = ({ dispatch, weather }) => {
  console.log(weather)
  return (
    <div>
      <h1>Here's where the weather will be displayed!</h1>
      <h1>{weather.weather}</h1>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  const weather = state;
  return {
    weather: weather
  };
};

export default connect(mapStateToProps)(WeatherDisplay);

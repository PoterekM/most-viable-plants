import React from "react";
import { connect } from "react-redux";
import WeatherLocation from "./WeatherLocation";
import Cover from "./../images/coverPlants.gif"
import Water from "./../images/wateringCan.gif"

const WeatherDisplay = ({ dispatch, weather }) => {
  let formAreaContent;
  let pic;

  if (weather.todayWeatherMin <= 35) {
    pic = Cover;
  } else if (weather.todayWeatherMax > 60){
    pic = Water;
  }

  if (weather.tomorrowWeatherMin <= 35) {
    pic = Cover;
  } else if (weather.tomorrowWeatherMax > 60){
    pic = Water;
  }

  if ((weather.searchCity) === "no entry from user"){
    formAreaContent =
      <div>
        <WeatherLocation/>
      </div>

  } else {
    formAreaContent =
    <div>
      <h2>{weather.searchCity.searchCity} Weather</h2>
      <h1>Today's forecast:</h1>
      <h3>{weather.todayWeatherMax}</h3>
      <h3>{weather.todayWeatherMin}</h3>
      <img src={pic}></img>
      <hr/>
      <h1>Tomorrow</h1>
      <h3>{weather.tomorrowWeatherMax}</h3>
      <h3>{weather.tomorrowWeatherMin}</h3>
      <img src={pic}></img>
      <hr/><hr/><hr/>
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

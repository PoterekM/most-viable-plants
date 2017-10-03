import React from "react";
import { connect } from "react-redux";
import WeatherLocation from "./WeatherLocation";
import {Container, Row, Col} from "react-grid-system";


const WeatherDisplay = ({ dispatch, weather }) => {
  let formAreaContent;

  if ((weather.todayWeatherMax || weather.todayWeatherMin) > 90) {
    alert("yaowza! Ya gotta watter your plants!");
  } else if ((weather.todayWeatherMin || weather.tomorrowWeatherMin) <= 44) {
    alert("Booooo!!");
  }

  if ((weather.searchCity) === "no entry from user"){
    formAreaContent =
      <div>
        <WeatherLocation/>
      </div>

  } else {
    formAreaContent =
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <h1>The high temperature for {weather.searchCity.searchCity} today is {weather.todayWeatherMax} with a low of {weather.todayWeatherMin}</h1>

          </Col>
          <Col sm={6}>
            <h1>Tomorrow</h1>
            The high temperature for {weather.searchCity.searchCity} today is {weather.tomorrowWeatherMax} with a low of {weather.tomorrowWeatherMin}

          </Col>
        </Row>
      </Container>
      <hr/>

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

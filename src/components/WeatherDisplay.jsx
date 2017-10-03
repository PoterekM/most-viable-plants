import React from "react";
import { connect } from "react-redux";
import WeatherLocation from "./WeatherLocation";
import Cover from "./../images/coverPlants.gif"
import Water from "./../images/wateringCan.gif"
import Thumb from "./../images/thumbs.png"
import {Container, Row, Col} from "react-grid-system";

const WeatherDisplay = ({ dispatch, weather }) => {
  var imageStyle = {
    width: 150,
    height: 150,
  }



  let formAreaContent;
  let pic;
  let picTomorrow;

  if ((weather.todayWeatherMin) < 32) {
    pic = Cover;
  } else if ((weather.todayWeatherMax) > 70){
    pic = Water;
  } else {
    pic = Thumb;
  }

  if ((weather.tomorrowWeatherMin) < 40) {
    picTomorrow = Cover;
  } else if ((weather.tomorrowWeatherMax) > 70){
    picTomorrow = Water;
  } else {
    picTomorrow = Thumb;
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
            <h1>Today's forecast:</h1>
            <h3>{weather.todayWeatherMax}</h3>
            <h3>{weather.todayWeatherMin}</h3>
            <img style={imageStyle} src={pic}></img>
          </Col>
          <Col sm={6}>
            <h1>Tomorrow</h1>
            <h3>{weather.tomorrowWeatherMax}</h3>
            <h3>{weather.tomorrowWeatherMin}</h3>
            <img style={imageStyle} src={picTomorrow}></img>
          </Col>
        </Row>
      </Container>
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

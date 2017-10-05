import React from "react";
import { connect } from "react-redux";
import WeatherLocation from "./WeatherLocation";
import Cover from "./../images/coverPlants.gif"
import Water from "./../images/wateringCan.gif"
import Thumb from "./../images/thumbs.png"
import {Container, Row, Col} from "react-grid-system";

const WeatherDisplay = (props) => {
  const { dispatch, weatherList, searchCity } = props;

  console.log(props);
  var imageStyle = {
    width: 150,
    height: 150,
  }

  let formAreaContent;
  let pic;
  let picTomorrow;



  if ((weatherList.todayWeatherMin) < 32) {
    pic = Cover;
  } else if ((weatherList.todayWeatherMax) > 68){
    pic = Water;
  } else {
    pic = Thumb;
  }

  if ((weatherList.tomorrowWeatherMin) < 40) {
    picTomorrow = Cover;
  } else if ((weatherList.tomorrowWeatherMax) > 70){
    picTomorrow = Water;
  } else {
    picTomorrow = Thumb;
  }

  if ((weatherList.searchCity) === "no entry from user"){
    formAreaContent =
      <div>
        <WeatherLocation/>
      </div>

  } else {
    formAreaContent =
    <div>
      <Container>
        <h1>{weatherList.searchCity}</h1>
        <Row>
          <Col sm={6}>
            <h1>Today:</h1>
            <h3>{weatherList.todayWeatherMax}</h3>
            <h3>{weatherList.todayWeatherMin}</h3>
            <img style={imageStyle} src={pic}></img>
          </Col>
          <Col sm={6}>
            <h1>Tomorrow</h1>
            <h3>{weatherList.tomorrowWeatherMax}</h3>
            <h3>{weatherList.tomorrowWeatherMin}</h3>
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
  console.log(state);
  return {
    weatherList: state.weatherList,
  };
};

export default connect(mapStateToProps)(WeatherDisplay);

import React from "react";
import Header from "./Header";
import WeatherDisplay from "./WeatherDisplay";
import PlantCreation from "./PlantCreation";
import PlantList from "./PlantList";
import { Container } from "react-grid-system";
import Flower from './../images/flowerPower.png'
import styles from './../styles/App.css';

function App(){

  var centerStyle = {
    maxWidth: "767px",
    display: "block"
  }

  return (
    <div className = {styles.app}>
      <Container>
        <div style={centerStyle}>

        <Header/>
        <WeatherDisplay/>
        <hr/>
        <PlantCreation/>
        <PlantList/>
        </div>
      </Container>
    </div>
  );
}

export default App;

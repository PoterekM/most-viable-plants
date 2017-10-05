import React from "react";
import Header from "./Header";
import WeatherDisplay from "./WeatherDisplay";
import PlantCreation from "./PlantCreation";
import PlantList from "./PlantList";
import { Container } from "react-grid-system";
import Flower from './../images/flowerPower.png'
import styles from './../styles/App.css';

function App(){

  return (
    <div className = {styles.app}>
      <Container>
        <Header/>
        <WeatherDisplay/>
        <hr/>
        <PlantCreation/>
        <PlantList/>
      </Container>
    </div>
  );
}

export default App;

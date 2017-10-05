import React from "react";
import Header from "./Header";
import WeatherDisplay from "./WeatherDisplay";
import PlantCreation from "./PlantCreation";
import PlantList from "./PlantList";
import { Container } from "react-grid-system";
import Flower from './../images/flowerPower.png'
import styles from './../styles/App.css';

function App(){
  // var programStyles = {
  //   backgroundImage: "url(" + Flower + ")",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   zIndex: 9999,
  //   backgroundRepeat: "repeatX",
  // }

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

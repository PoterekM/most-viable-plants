import React from "react";
import Header from "./Header";
import WeatherDisplay from "./WeatherDisplay";
import PlantCreation from "./PlantCreation";
import PlantDisplay from "./PlantDisplay";

function App(){
  return (
    <div>
      <Header/>
      <WeatherDisplay/>
      <hr/>
      <PlantCreation/>
      <PlantDisplay/>
    </div>
  );
}

export default App;

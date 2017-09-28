import React from "react";
import Header from "./Header";
import WeatherLocation from "./WeatherLocation";
import WeatherDisplay from "./WeatherDisplay";

function App(){
  return (
    <div>
      <Header/>
      <WeatherLocation/>
      <WeatherDisplay/>
    </div>
  );
}

export default App;

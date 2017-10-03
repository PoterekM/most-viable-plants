import React from "react";
import Header from "./Header";
import WeatherDisplay from "./WeatherDisplay";

function App(){
  return (
    <div>
      <Header/>
      <WeatherDisplay/>
      <hr/>
      <button>Add New Plant</button>
      <form>
        <input placeholder="Plant Name" ref="_plantName"></input>
        <input placeholder="Plant Type" ref="_plantType"></input>
        <input placeholder="Water Schedule" ref="_waterSchedule"></input>
        <button>Submit</button>
      </form>
      <h1>Plant Information</h1>
      <h4>Name: Philodendron</h4>
      <h4>type: Indoor</h4>
      <h4>Watering Schedule: every 3 days</h4>
      <button>water!</button>
      <h2></h2>
    </div>
  );
}

export default App;

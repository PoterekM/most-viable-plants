import React from "react";
import { connect } from "react-redux";




const PlantList = ({ dispatch, plant }) => {
  console.log(plant);
  console.log(plantName);
  let plantName;
  let plantType;
  let waterSchedule;
    return (
      <div>
        <h1>Plant Information: </h1>
        <h4>Name: Philodendron: {plant.plantName}</h4>
        <h4>type: Indoor {plant.plantType}</h4>
        <h4>Watering Schedule: every 3 days {plant.waterSchedule}</h4>
        <button type="submit">water!</button>
      </div>
    );
  }

  const mapStateToProps = state => {
    const plant = state;
    return {
      plant: state,
    };
  };

  export default connect(mapStateToProps)(PlantList);

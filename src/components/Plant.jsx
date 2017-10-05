import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Plant(props){
  console.log(props);
  function handleTimeSince() {
    let lastWatered = new Date();
    console.log("hello");
    console.log(lastWatered);
  }

  return (
    <div>
      <h3>{props.plantName} - {props.plantType}</h3>
      <p><em>Water {props.waterSchedule}</em></p>
    <button onClick={() => {handleTimeSince(props.lastWatered)}}>Water!</button>
      <p><em>Last watered {props.lastWatered}</em></p>
      <hr/>
    </div>
  );
}

Plant.propTypes = {
  plantName: PropTypes.string,
  plantType: PropTypes.string,
  waterSchedule: PropTypes.string,
  lastWatered: PropTypes.string,

};

export default Plant;

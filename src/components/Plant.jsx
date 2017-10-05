import React from "react";
import PropTypes from "prop-types";

function Plant(props){

  return (
    <div>
      <h3>{props.plantName} - {props.plantType}</h3>
      <p><em>{props.waterSchedule}</em></p>
      <hr/>
    </div>
  );
}

Plant.propTypes = {
  plantName: PropTypes.string,
  plantType: PropTypes.string,
  waterSchedule: PropTypes.string,
};

export default Plant;

import React from "react";
import { connect } from "react-redux";
import Plant from "./Plant"
import { v4 } from 'uuid';



var plantStyle = {
  backgroundColor: "rgba(255, 255, 255, .6)",
  // textShadow: "1px 1px white",
  color: "black",
}


const PlantList = (props) => {
  const { dispatch, plantList } = props;
  console.log(props.plantList);
  let plantName;
  let plantType;
  let waterSchedule;
    return (
      <div style={plantStyle}>
        {props.plantList.map((plant, index) =>
          <Plant  plantName={plant.plantName}
                  plantType={plant.plantType}
                  waterSchedule={plant.waterSchedule}
                  key={plant.id}/>
        )}
      </div>
    );
  }

  const mapStateToProps = state => {
    const plantList = state;
    return {
      plantList: state.plantList,
    };
  };

  export default connect(mapStateToProps)(PlantList);

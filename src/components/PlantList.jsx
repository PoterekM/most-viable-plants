import React from "react";
import { connect } from "react-redux";
import Plant from "./Plant"


var plantStyle = {
  backgroundColor: "rgba(255, 255, 255, .6)",
  color: "black",
  margin: 10,
  padding: 5,
  textAlign: "center"
}

const PlantList = (props) => {
  const { dispatch, plantList } = props;
  console.log(props.plantList);
  let plantName;
  let plantType;
  let waterSchedule;
  let lastWatered;
    return (
      <div style={plantStyle}>
        {props.plantList.map((plant, index) =>
          <Plant  plantName={plant.plantName}
                  plantType={plant.plantType}
                  waterSchedule={plant.waterSchedule}
                  lastWatered={plant.lastWatered}
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

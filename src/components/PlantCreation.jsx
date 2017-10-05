import React from "react";
import { addPlant } from "./../actions"
import { connect } from "react-redux";
import { v4 } from 'uuid';

class PlantCreation extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let { _plantName, _plantType, _waterSchedule } = this.refs;
    console.log(_plantName.value);
    this.props.dispatch(addPlant(_plantName.value, _plantType.value, _waterSchedule.value))
    _plantName.value = ("");
    _plantType.value = ("");
    _waterSchedule.value = ("");
  }

  render() {
    return(
      <div>
        <button>Add New Plant</button>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Plant Name" ref="_plantName"></input>
          <input placeholder="Plant Type" ref="_plantType"></input>
          <input placeholder="Water Schedule" ref="_waterSchedule"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(PlantCreation);

import React from "react";
import { fetchWeather } from "./../actions"
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class WeatherLocation extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    let { _searchCity } = this.refs;
    if (!_searchCity.value.trim()) {
      return;
    }
    this.props.dispatch(fetchWeather(_searchCity.value.trim().toUpperCase()));
    _searchCity.value = ("");
  }

  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="City, State"
            ref="_searchCity">
          </input>
          <button>Search</button>
        </form>
      </div>
    )
  }
}
export default connect()(WeatherLocation);

import React from "react";
import { fetchWeather } from "./../actions"
import { connect } from "react-redux";

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
    console.log(_searchCity.value);
    this.props.dispatch(fetchWeather(_searchCity.value.trim()));
  }

  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Search weather by city!"
            ref="_searchCity">
          </input>
          <button>Search</button>
        </form>
      </div>
    )
  }
}
export default connect()(WeatherLocation)

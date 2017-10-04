import { combineReducers } from 'redux';
import weatherList from './weather-reducer';
import plantList from './plant-list-reducer'

const combinedReducer = combineReducers({
  plantList,
  weatherList
});

export default combinedReducer;

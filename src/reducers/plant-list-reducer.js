import constants from "./../constants";
const { defaultState, types } = constants;
import { v4 } from 'uuid';

const plantList = (state = defaultState.plantList, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      const { plantName, plantType, waterSchedule, lastWatered, id } = action;
      return [
        ...state,
        {
          plantName : plantName,
          plantType : plantType,
          waterSchedule : waterSchedule,
          lastWatered: lastWatered,
          id: v4(),
        }
      ]
    default:
      return state;
  }
}

export default plantList;

import constants from "./../constants";
const { defaultState, types } = constants;

const plantList = (state = defaultState.plantList, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      const { plantName, plantType, waterSchedule, id } = action;
      return [
        ...state,
        {
          plantName : plantName,
          plantType : plantType,
          waterSchedule : waterSchedule,
          id: id
        }
      ]
    default:
      return state;
  }
}

export default plantList;

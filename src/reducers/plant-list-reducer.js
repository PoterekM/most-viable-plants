import constants from "./../constants";
const { defaultState, types } = constants;

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PLANT":
    const { plantName, plantType, waterSchedule, id } = action;
    return [
      ...state,
      {
        plantName : plantName,
        plantType : plantType,
        waterSchedule : waterSchedule,
        id : id
      }
    ]
    return
      default:
    return state;
  }
}

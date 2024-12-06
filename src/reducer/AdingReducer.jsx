import { SET_FETCHED_DATA } from "../actions";
const stateinitial = {
  produits: [],
};

const AdingReducer = (state = stateinitial, action) => {
  switch (action.type) {
    case SET_FETCHED_DATA:
      return {
        ...state,
        produits: action.payload,
      };
    default:
      return state;
  }
};

export default AdingReducer;

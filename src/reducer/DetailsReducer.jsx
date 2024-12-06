const stateinitial = {
  produit: {},
};

const DetailsReducer = (state = stateinitial, action) => {
  switch (action.type) {
    case "voirDetails":
      return {
        ...state,
        produit: action.payload,
      };
    default:
      return state;
  }
};

export default DetailsReducer;

const CompteurZeroReducer = (state = { compteur: 0 }, action) => {
  switch (action.type) {
    case "compteurzero":
      return {
        ...state,
        compteur: 0,
      };
    default:
      return state;
  }
};
export default CompteurZeroReducer;

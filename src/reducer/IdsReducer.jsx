const IdsReducer = (state = { ids: [], compteur: 0 }, action) => {
  switch (action.type) {
    case "ajouterProduit":
      return {
        ...state,
        ids: state.ids.concat(action.payload),
        compteur: state.compteur + 1,
      };
    case "suprimerProduit":
      return {
        ...state,
        ids: state.ids.filter((id) => id !== action.payload),
        compteur: state.compteur - 1,
      };
    case "compteurZero":
      return {
        ...state,
        ids: [],
        compteur: 0,
      };
    default:
      return state;
  }
};
export default IdsReducer;

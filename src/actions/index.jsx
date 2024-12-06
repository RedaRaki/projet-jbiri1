export const SET_FETCHED_DATA = "SET_FETCHED_DATA";

export const setFetchedData = (data) => {
  return {
    type: SET_FETCHED_DATA,
    payload: data,
  };
};
export const Details = (produit) => {
  return {
    type: "voirDetails",
    payload: produit,
  };
};
export const ajouterProduit = (produit) => {
  return {
    type: "ajouterProduit",
    payload: produit,
  };
};
export const suprimerProduit = (produit) => {
  return {
    type: "suprimerProduit",
    payload: produit,
  };
};
export const compteurZero = () => {
  return {
    type: "compteurZero",
  };
};

import { combineReducers } from "redux";
import IdsReducer from "./IdsReducer";
import AdingReducer from "./AdingReducer";
import DetailsReducer from "./DetailsReducer";
import CompteurZeroReducer from "./CompteurReducer";
const AllReducers = combineReducers({
  IdsReducer,
  AdingReducer,
  DetailsReducer,
  CompteurZeroReducer,
});
export default AllReducers;

import { todoReducers } from "./reducer";
import { combineReducers } from "redux";

const rootreducers = combineReducers({
  todoReducers
  //import and add here other reducer all will be combined in allReducer
});

export default rootreducers;

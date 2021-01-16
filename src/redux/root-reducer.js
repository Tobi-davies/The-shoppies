import { combineReducers } from "redux";
import nomineeReducer from "./nominated/nominated.reducer";

export default combineReducers({
  nominee: nomineeReducer,
});

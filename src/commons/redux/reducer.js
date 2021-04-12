import { combineReducers } from "redux";
import { authReducer } from "./auth/slice";

const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;

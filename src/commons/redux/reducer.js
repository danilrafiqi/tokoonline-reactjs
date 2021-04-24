import { combineReducers } from "redux";
import { authReducer } from "./auth/slice";
import { categoriesReducer } from "./categories/slice";
import { productsReducer } from "./products/slice";

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

export default reducer;

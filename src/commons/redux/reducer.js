import { combineReducers } from "redux";
import { addressReducer } from "./address/slice";
import { authReducer } from "./auth/slice";
import { cartReducer } from "./cart/slice";
import { categoriesReducer } from "./categories/slice";
import { productsReducer } from "./products/slice";
import { userReducer } from "./users/slice";

const reducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  address: addressReducer,
  user: userReducer,
});

export default reducer;

import { combineReducers } from "redux";
import { addressReducer } from "./address/slice";
import { authReducer } from "./auth/slice";
import { cartReducer } from "./cart/slice";
import { categoriesReducer } from "./categories/slice";
import { couponReducer } from "./coupon/slice";
import { orderReducer } from "./order/slice";
import { productReducer } from "./products/slice";
import { userReducer } from "./users/slice";

const reducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  address: addressReducer,
  user: userReducer,
  coupon: couponReducer,
  order: orderReducer,
});

export default reducer;

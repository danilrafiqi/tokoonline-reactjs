import { all } from "@redux-saga/core/effects";
import { addressWatcher } from "./address/saga";
import { authWatcher } from "./auth/saga";
import { cartWatcher } from "./cart/saga";
import { categoryWatcher } from "./categories/saga";
import { couponWatcher } from "./coupon/saga";
import { orderWatcher } from "./order/saga";
import { productsWatcher } from "./product/saga";
import { userWatcher } from "./users/saga";

const allWathcer = [
  ...authWatcher,
  ...categoryWatcher,
  ...productsWatcher,
  ...cartWatcher,
  ...addressWatcher,
  ...userWatcher,
  ...couponWatcher,
  ...orderWatcher,
];

// WATCHER
function* rootSaga() {
  yield all(allWathcer);
}

export { rootSaga };

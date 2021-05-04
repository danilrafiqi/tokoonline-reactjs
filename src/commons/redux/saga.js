import { all } from "@redux-saga/core/effects";
import { addressWatcher } from "./address/saga";
import { authWatcher } from "./auth/saga";
import { cartWatcher } from "./cart/saga";
import { categoriesWatcher } from "./categories/saga";
import { couponWatcher } from "./coupon/saga";
import { productsWatcher } from "./products/saga";
import { userWatcher } from "./users/saga";

const allWathcer = [
  ...authWatcher,
  ...categoriesWatcher,
  ...productsWatcher,
  ...cartWatcher,
  ...addressWatcher,
  ...userWatcher,
  ...couponWatcher,
];

// WATCHER
function* rootSaga() {
  yield all(allWathcer);
}

export { rootSaga };

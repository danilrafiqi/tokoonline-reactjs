import { all } from "@redux-saga/core/effects";
import { authWatcher } from "./auth/saga";
import { categoriesWatcher } from "./categories/saga";
import { productsWatcher } from "./products/saga";

const allWathcer = [...authWatcher, ...categoriesWatcher, ...productsWatcher];

// WATCHER
function* rootSaga() {
  yield all(allWathcer);
}

export { rootSaga };

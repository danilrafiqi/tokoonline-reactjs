import { all } from "@redux-saga/core/effects";
import { authWatcher } from "./auth/saga";

const allWathcer = [...authWatcher];

// WATCHER
function* rootSaga() {
  yield all(allWathcer);
}

export { rootSaga };

import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { baseApi } from "../../config";
import { orderAction } from "./slice";

// WORKER
function* retrieveOrderListWorker(action) {
  try {
    const status = action.payload?.status;
    const res = yield call(axios.get, `${baseApi}/orders?status=${status}`);
    yield put(orderAction.retrieveOrderListSuccess(res.data));
  } catch (error) {
    yield put(orderAction.retrieveOrderListFailed(error.response.data));
  }
}

// WATCHER
export const orderWatcher = [
  takeLatest(
    orderAction.retrieveOrderListExecute.type,
    retrieveOrderListWorker
  ),
];

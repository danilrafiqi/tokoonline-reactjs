import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { baseApi } from "../../config";
import { productsAction } from "./slice";

// WORKER
function* productsFetchWorker() {
  try {
    const res = yield call(axios.get, `${baseApi}/products`);
    yield put(productsAction.productsSuccess(res.data));
    yield put(productsAction.productsUpdate(res.data));
  } catch (error) {
    yield put(productsAction.productsFailed(error.response.data));
  }
}

function* productDetailFetchWorker(action) {
  try {
    console.log("Adsfgds", action);
    const res = yield call(
      axios.get,
      `${baseApi}/products/${action.payload.id}`
    );
    yield put(productsAction.productDetailSuccess(res.data));
  } catch (error) {
    console.log("error", error);
    yield put(productsAction.productDetailFailed(error.response.data));
  }
}

// WATCHER
export const productsWatcher = [
  takeLatest(productsAction.productsFetch.type, productsFetchWorker),
  takeLatest(productsAction.productDetailFetch.type, productDetailFetchWorker),
];

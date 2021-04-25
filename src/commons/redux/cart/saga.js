import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { baseApi } from "../../config";
import { cartAction } from "./slice";

// WORKER
function* addCartFetchWorker(action) {
  try {
    const res = yield call(axios.post, `${baseApi}/carts`, {
      product_id: action.payload.product_id,
      quantity: action.payload.quantity,
    });
    yield put(cartAction.addCartSuccess(res.data));
  } catch (error) {
    yield put(cartAction.addCartFailed(error.response.data));
  }
}

function* updateCartFetchWorker(action) {
  try {
    const res = yield call(axios.put, `${baseApi}/carts/${action.payload.id}`, {
      product_id: action.payload.product_id,
      quantity: action.payload.quantity,
    });
    yield put(cartAction.updateCartSuccess(res.data));
  } catch (error) {
    yield put(cartAction.updateCartFailed(error));
  }
}

function* retrieveCartListWorker() {
  try {
    const res = yield call(axios.get, `${baseApi}/carts`);
    yield put(cartAction.cartsSuccess(res.data));
    yield put(cartAction.cartsUpdate(res.data));
  } catch (error) {
    yield put(cartAction.cartsFailed(error.response.data));
  }
}

// WATCHER
export const cartWatcher = [
  takeLatest(cartAction.addCartFetch.type, addCartFetchWorker),
  takeLatest(cartAction.updateCartFetch.type, updateCartFetchWorker),
  takeLatest(cartAction.cartsFetch.type, retrieveCartListWorker),
];

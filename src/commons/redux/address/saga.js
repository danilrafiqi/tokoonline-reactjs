import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { baseApi } from "../../config";
import { addressAction } from "./slice";

// WORKER
function* retrieveAddressFetchWorker() {
  try {
    const res = yield call(axios.get, `${baseApi}/address`);
    yield put(addressAction.retrieveAddressSuccess(res.data));
  } catch (error) {
    yield put(addressAction.retrieveAddressFailed(error.response.data));
  }
}

function* createAddressFetchWorker(action) {
  try {
    const res = yield call(axios.post, `${baseApi}/address`, {
      address: action.payload.address,
      description: action.payload.description,
      name: action.payload.name,
      phone: action.payload.phone,
    });
    yield put(addressAction.createAddressSuccess(res.data));
  } catch (error) {
    yield put(addressAction.createAddressFailed(error.response.data));
  }
}

// WATCHER
export const addressWatcher = [
  takeLatest(
    addressAction.retrieveAddressFetch.type,
    retrieveAddressFetchWorker
  ),
  takeLatest(addressAction.createAddressFetch.type, createAddressFetchWorker),
];

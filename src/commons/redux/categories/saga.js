import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { baseApi } from "../../config";
import { categoriesAction } from "./slice";

// WORKER
function* categoriesFetchWorker() {
  try {
    const res = yield call(axios.get, `${baseApi}/categories`);
    yield put(categoriesAction.categoriesSuccess(res.data));
  } catch (error) {
    yield put(categoriesAction.categoriesFailed(error.response.data));
  }
}

// WATCHER
export const categoriesWatcher = [
  takeLatest(categoriesAction.categoriesFetch.type, categoriesFetchWorker),
];

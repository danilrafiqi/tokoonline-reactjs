import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { baseApi } from "../../config";
import { authAction } from "./slice";

// WORKER
function* loginFetchWorker(action) {
  try {
    const res = yield call(axios.post, `${baseApi}/login`, {
      email: action.payload.email,
      password: action.payload.password,
      type: "customers",
    });
    yield put(authAction.loginSuccess(res.data));
    yield put(authAction.updateToken(res.data.accessToken));
  } catch (error) {
    yield put(authAction.loginFailed(error));
  }
}

function* registerFetchWorker(action) {
  try {
    const res = yield call(axios.post, baseApi + "/register", {
      email: action.payload.email,
      password: action.payload.password,
      type: "customers",
    });
    yield put(authAction.registerSuccess(res.data));
  } catch (error) {
    yield put(authAction.registerFailed(error));
  }
}

// WATCHER
export const authWatcher = [
  takeLatest(authAction.loginFetch.type, loginFetchWorker),
  takeLatest(authAction.registerFetch.type, registerFetchWorker),
];

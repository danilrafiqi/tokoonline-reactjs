import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { baseApi } from "../../config";
import { userAction } from "./slice";

// WORKER
function* retrieveProfileWorker() {
  try {
    const res = yield call(axios.get, `${baseApi}/user/me`);
    yield put(userAction.retrieveProfileSuccess(res.data));
  } catch (error) {
    yield put(userAction.retrieveProfileFailed(error.response.data));
  }
}

function* updateProfileWorker(action) {
  try {
    const res = yield call(axios.post, `${baseApi}/profile/customers`, {
      name: action.payload.name,
      phone: action.payload.phone,
    });
    yield put(userAction.updateProfileSuccess(res.data));
  } catch (error) {
    yield put(userAction.updateProfileFailed(error.response.data));
  }
}

function* updatePasswordWorker(action) {
  try {
    const res = yield call(axios.post, `${baseApi}/update-password`, {
      oldPassword: action.payload.oldPassword,
      newPassword: action.payload.newPassword,
    });
    yield put(userAction.updatePasswordWorker(res.data));
  } catch (error) {
    yield put(userAction.updatePasswordFailed(error.response.data));
  }
}

// WATCHER
export const userWatcher = [
  takeLatest(userAction.retrieveProfileFetch.type, retrieveProfileWorker),
  takeLatest(userAction.updateProfileFetch.type, updateProfileWorker),
  takeLatest(userAction.updatePasswordFetch.type, updatePasswordWorker),
];

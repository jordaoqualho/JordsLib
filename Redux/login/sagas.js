import { call, put, all, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "../types";
import api from "connection/index";

function* loginSubmit({ payload }) {
  try {
    const res = yield call(api.post, "/usuarios/login/", payload);
    yield put(actions.loginSuccess(res));
  } catch (error) {
    console.log(
      "Error: " + error.message + "\n" +
      "File: store/login(loginSubmit)"
    );
  }
}

export default all([takeEvery(types.LOGIN_SUBMIT, loginSubmit)]);

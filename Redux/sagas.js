import { all } from "redux-saga/effects";

import loginSaga from "./login/sagas";

export default function* sagas() {
  return yield all([
    loginSaga,
  ]);
}

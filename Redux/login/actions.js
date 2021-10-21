import * as types from "../types";

export function loginSubmit(payload) {
  return {
    type: types.LOGIN_SUBMIT,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginLogout(payload) {
  return {
    type: types.LOGIN_LOGOUT,
    payload,
  };
}

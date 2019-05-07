import * as actionTypes from "../actions/actionTypes";

export function login(payload) {
  return {
    type: actionTypes.LOGIN,
    payload
  };
}

export function logout(payload) {
  return {
    type: actionTypes.LOGOUT,
    payload
  };
}

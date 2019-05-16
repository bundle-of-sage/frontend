import * as actionTypes from "../actions/actionTypes";

export function login(payload) {
  return {
    type: actionTypes.LOGIN,
    payload
  };
}

export function logout() {
  return { type: actionTypes.LOGOUT };
}

export function getUserProfile() {
  return { type: actionTypes.GET_USER_PROFILE };
}

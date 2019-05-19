import * as actionTypes from "./actionTypes";

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

export function updatePaymentStatus() {
  return { type: actionTypes.UPDATE_PAYMENT_STATUS };
}

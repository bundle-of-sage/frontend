import { put, takeLatest } from "redux-saga/effects";
import api from "../../api/api";
import * as actionTypes from "../actions/actionTypes";

function* loginSaga(action) {
  const { data } = yield api.auth.login(action.payload);
  const user = data.user || {};
  yield put({ type: actionTypes.LOGIN_COMPLETE, payload: user });
}

function* getUserProfileSaga(action) {
  const { data } = yield api.user.getUserProfile();
  const user = data.user || {};
  yield put({ type: actionTypes.GET_USER_PROFILE_COMPLETE, payload: user });
}

export default function* actionWatcher() {
  yield takeLatest(actionTypes.LOGIN, loginSaga);
  yield takeLatest(actionTypes.GET_USER_PROFILE, getUserProfileSaga);
}

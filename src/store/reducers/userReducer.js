import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const intialState = {
  userId: null
};

const userReducer = (state = intialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.LOGIN_COMPLETE:
        draft.userId = 45;
        break;
      default:
        return state;
    }
  });
};

export default userReducer;

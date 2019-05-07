import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const intialState = {
  activeMembership: null
};

const membershipReducer = (state = intialState, action) => {
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

export default membershipReducer;

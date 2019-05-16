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
        console.log("state: ", state);
        console.log("draft: ", draft.user_id);
        break;
      default:
        return state;
    }
  });
};

export default userReducer;

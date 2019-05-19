import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const intialState = {
  user_id: null,
  email: null,
  first_name: null,
  last_name: null,
  profile_photo_url: null,
  membership_paid: null
};

const userReducer = (state = intialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.LOGIN_COMPLETE:
        return { ...state, ...action.payload };

      case actionTypes.GET_USER_PROFILE_COMPLETE:
        return { ...state, ...action.payload };

      case actionTypes.UPDATE_PAYMENT_STATUS:
        draft.membership_paid = true;
        break;
      default:
        return state;
    }
  });
};

export default userReducer;

import * as actions from "../actions/uiActionTypes";

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export  function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.user,
      };
    case actions.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case actions.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    default:
      return state;
  }
}

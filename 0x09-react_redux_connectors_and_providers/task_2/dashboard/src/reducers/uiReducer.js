import * as actions from "../actions/uiActionTypes";
import {Map} from "immutable";

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export function uiReducer(state = initialState, action) {
  state = Map.isMap(state) ? state : Map(state);
  
  switch (action.type) {
    case actions.LOGIN:
      return state.set("isUserLoggedIn", true).set("user", action.user);
    case actions.LOGOUT:
      return state.set("isUserLoggedIn", false).set("user", {});
    case actions.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,

      }
    case actions.HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);
    default:
      return state;
  }
}

import * as actions from "../actions/notificationActionTypes";
import { Map, set, setIn } from "immutable";
import { notificationNormalizer } from "../schema/notifications";

export const initialState =
{
  notifications: [],
  filter: actions.NotificationTypeFilters,
  loading: false,
}
export function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.MARK_AS_READ:
      return setIn(state, ["notifications", action.index, "isRead"], true);
    case actions.SET_TYPE_FILTER:
      return setIn(state, "filter", action.filter);
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      const notis = notificationNormalizer(action.data);
      Object.keys(notis).map((key) => {
        notis[key].isRead = false;
      });
    case actions.SET_LODING_STATE:
      return state.set("loading", action.loading);

    default:
      return state;
  }
}
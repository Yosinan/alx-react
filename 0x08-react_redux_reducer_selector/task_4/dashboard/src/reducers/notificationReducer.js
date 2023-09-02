import * as actions from "../actions/notificationActionTypes";


export const initialState =
    {
        notifications: [],
        filter: actions.NotificationTypeFilters
    }
export function notificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => (notification.id === action.index ? { ...notification, isRead: true } : {...notification})),
      }
    case actions.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      }
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        filter: actions.NotificationTypeFilters.DEFAULT,
        notifications: action.data.map((notification) => ({ ...notification, isRead: false })),
      }
    default:
      return state;
  }
}
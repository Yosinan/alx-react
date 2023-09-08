import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const boundsetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));
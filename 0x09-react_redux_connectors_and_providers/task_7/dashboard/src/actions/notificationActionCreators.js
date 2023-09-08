import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LODING_STATE } from "./notificationActionTypes";

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

export const setNotifications = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  }
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(SET_LODING_STATE(true));
    return fetch('./notifications.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setNotifications(data));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(SET_LODING_STATE(false)));
  }
}

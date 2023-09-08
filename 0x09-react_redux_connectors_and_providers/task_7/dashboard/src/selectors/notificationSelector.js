import {Map} from 'immutable';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return Map(state.get('notifications')).valueSeq().toArray();
}

export function getUnreadNotifications(state) {
    return Map(state.get('notifications')).filter((notification) => !notification.isRead);
}
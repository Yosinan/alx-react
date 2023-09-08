import courseReducer, { initialState } from './courseReducer';
import uiReducer, { initialState } from './uiReducer';
import { combineReducers } from 'redux';
import { Map } from 'immutable';
import notificationReducer, { initialState } from './notificationReducer';

export const initialState = Map({
    courses: Map(initialState),
    ui: Map(initialState),
    notifications: Map(initialState),
});


const rootReducer = combineReducers({
    course: courseReducer,
    ui: uiReducer,
    notifications: notificationReducer,
});

export default rootReducer;
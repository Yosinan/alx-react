import * as actions from "../actions/courseActionTypes";

export function courseReducer(state = [], action = {}) {
    switch (action.type) {
        case actions.FETCH_COURSE_SUCCESS:
        return action.data.map((course) => ({  ...course, isSelected: false }));
        case actions.SELECT_COURSE:
        return state.map((course) => (course.id === action.index ? { ...course, isSelected: true } : course));
        case actions.UNSELECT_COURSE:
        return state.map((course) => (course.id === action.index ? { ...course, isSelected: false } : course));
        default:
        return state;
    }
}

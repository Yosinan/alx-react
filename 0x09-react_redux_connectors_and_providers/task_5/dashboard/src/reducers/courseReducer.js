import * as actions from "../actions/courseActionTypes";
import { courseNormalizer  } from "../schema/courses";
import { Map, set,setIn } from "immutable";

const initialState = Map();

export function courseReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.FETCH_COURSE_SUCCESS:
            const course = courseNormalizer(action.data);
            Object.keys(course).map((key) => {
                course[key].isSelected = false;
            });
            return state.merge(course);
        
        case actions.SELECT_COURSE:
            return setIn(state, [action.index, "isSelected"], true);
        case actions.UNSELECT_COURSE:
            return setIn(state, [action.index, "isSelected"], false);
        default:
            return state;
    }
}

import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer = (state = initialState.courses, action) => {
    switch (action.type) {
        case types.CREAT_COURSE:
            return [...state, { ...action.course }]
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}

export default courseReducer;
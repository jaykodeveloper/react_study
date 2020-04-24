import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer = (state = initialState.courses, action) => {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSES_SUCCESS:
            return [...state, { ...action.courses }]
        case types.UPDATE_COURSES_SUCCESS:
            return state.map(course =>
                course.id === action.course.id ? state.course : course)
        case types.DELETE_COURSE_OPTIMISTIC:
            return state.filter(course => course.id !== action.course.id)
        default:
            return state;
    }
}

export default courseReducer;
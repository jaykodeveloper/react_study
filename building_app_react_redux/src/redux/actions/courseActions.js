import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
    return { type: types.CREAT_COURSE, course }
}

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(err => {
                throw err;
            })
    }
}
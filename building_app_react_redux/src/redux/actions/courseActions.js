import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
    return { type: types.CREAT_COURSE, course }
}

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function updateCourseSuccess(savedCourse) {
    return { type: types.UPDATE_COURSES_SUCCESS, savedCourse }
}

export function createCourseSuccess(savedCourse) {
    return { type: types.CREATE_COURSES_SUCCESS, savedCourse }
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

export function saveCourses(course) {
    return function (dispatch) {
        return courseApi
            .saveCourses(course)
            .then(savedCourse => {
                course.id ?
                    dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(err => {
                throw err;
            })
    }
}
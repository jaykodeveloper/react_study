import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function createCourse(course) {
    return { type: types.CREAT_COURSE, course }
}

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSES_SUCCESS, course }
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSES_SUCCESS, course }
}

export function deleteCourseOptimistic(course) {
    return { type: types.DELETE_COURSE_OPTIMISTIC, course }
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginApiCall)
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(err => {
                dispatch(apiCallError(err))
                throw err;
            })
    }
}

export function saveCourses(course) {
    return function (dispatch) {
        dispatch(beginApiCall())
        return courseApi
            .saveCourses(course)
            .then(savedCourse => {
                course.id ?
                    dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(err => {
                dispatch(apiCallError(err))
                throw err;
            })
    }
}

export function deleteCourse(course) {
    return function (dispatch) {
        dispatch(deleteCourseOptimistic(course));
        return courseApi.deleteCourse(course.id);
    }
}
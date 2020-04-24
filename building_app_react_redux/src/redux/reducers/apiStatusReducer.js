import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function apiTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function apiStatusReducer(state = initialState.apiCallInProgess, action) {
    if (action.type === types.BEGIN_API_CALL) {
        return state + 1;
    }
    else if (types.API_CALL_ERROR === action.type || apiTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}
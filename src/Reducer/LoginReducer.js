import {
    LOGIN_RESPONSE,
    LOGOUT,
    GET_USERS,
} from '../Actions/LoginActions'

export const LoginReducer = (
    state = {
        isValidUser: false,
        employeeList: []
    }, action
) => {
    switch (action.type) {
        case LOGIN_RESPONSE:
            return {
                ...state,
                credential: action.credential,
                isValidUser: action.isValidUser,
                message: "Login Success",
            }
        case LOGOUT:
            return {
                ...state,
                isValidUser: false,
                credential: {}
            }
        case GET_USERS:
            return {
                ...state,
                employeeList: action.payload
            }
        default:
            return state
    }
}

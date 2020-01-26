export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export const LOGOUT = 'LOGOUT'
export const GET_USERS = 'GET_USERS'
import UserData from '../components/UserData';

loginResponse = (credential) => {
    return {
        type: LOGIN_RESPONSE,
        isValidUser: true,
        credential: credential
    }
}

export const loginUser = (username, password) => {
    return dispatch => {
        if ((username == UserData.UserLogin.username) && (password == UserData.UserLogin.password)) {
            return dispatch(loginResponse(JSON.stringify(UserData.UserLogin)))
        }
    }
}

export const userDetails = () => {
    return {
        type: GET_USERS,
        payload: UserData.user
    }
}

export const logout = (status) => {
    return {
        type: LOGOUT,
        status: status
    }
}




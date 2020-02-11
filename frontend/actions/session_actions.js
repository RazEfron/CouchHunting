import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const receiveUsersErrors = errors => ({
    type: RECEIVE_USERS_ERRORS,
    errors
});

export const signup = user => dispatch => {
    debugger;
    return APIUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveUsersErrors(err))))
}

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(() => (
        dispatch(logoutCurrentUser())
    ))
);

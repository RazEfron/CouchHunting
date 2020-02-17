import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USERS_ERRORS = 'RECEIVE_USERS_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const receiveUsersErrors = errors => ({
    type: RECEIVE_USERS_ERRORS,
    errors
});

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const signup = user => dispatch => {
    return APIUtil.signup(user).then(user => {
        return dispatch(receiveCurrentUser(user))}, err => (dispatch(receiveUsersErrors(err))))
}

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err))
    ))
);

export const logout = () => dispatch => {
    // debugger
    return APIUtil.logout().then(() => (
        dispatch(logoutCurrentUser())
    ))
    };

export const fetchAllUsers = () => dispatch => (
    APIUtil.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)))
)
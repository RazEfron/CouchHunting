import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_PROFILE } from '../actions/profiles_actions';

const _nullUser = {
    id: null
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { 
                profile_id: action.currentUser.profile_id ? action.currentUser.profile_id : 'null',
                id: action.currentUser.id,
             };
        case RECEIVE_PROFILE:
            debugger
            return Object.assign({}, state, {
                profile_id: action.profile.id
            })
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;

import {
    RECEIVE_PROFILE_ERRORS,
    RECEIVE_PROFILE
} from '../actions/profiles_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILE_ERRORS:
            return action.errors;
        case RECEIVE_PROFILE:
            return [];
        default:
            return state;
    }
};

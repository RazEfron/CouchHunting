import {
    RECEIVE_HOME,
    RECEIVE_ALL_HOMES
}
    from '../actions/homes_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState
    switch (action.type) {
        case RECEIVE_ALL_HOMES:
            newState = Object.assign({}, state, action.homes);
            return newState;
        case RECEIVE_HOME:
            newState = Object.assign({}, state);
            newState[action.home.id] = action.home
            return newState;
        case RECEIVE_CURRENT_USER:
            debugger
            if (action.currentUser.home) {
                return {
                    [action.currentUser.home.id]: action.currentUser.home
                };
            } else {
                return {}
            }
        default:
            return state;
    }
}

export default profilesReducer;
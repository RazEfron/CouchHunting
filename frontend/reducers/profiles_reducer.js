import { RECEIVE_PROFILE, 
        RECEIVE_ALL_PROFILES,
        RECEIVE_SEARCH_PROFILES,
        RECEIVE_OTHER_PROFILE } 
    from '../actions/profiles_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState
    switch (action.type) {
        case RECEIVE_ALL_PROFILES:
            newState = Object.assign({}, state, action.profiles);
            return newState;
        case RECEIVE_SEARCH_PROFILES:
            newState = Object.assign({}, action.profiles);
            return newState;
        case RECEIVE_PROFILE:
            // newState = Object.assign({}, state);
            // newState[action.profile.id] = action.profile
            return {[action.profile.id]: action.profile}
        case RECEIVE_OTHER_PROFILE:
            debugger
            // newState = Object.assign({}, state);
            // newState[action.profile.id] = action.profile
            return { [action.profile.id]: action.profile }
        case RECEIVE_CURRENT_USER:
            //  
            if (action.currentUser.profile) {
                return {
                    [action.currentUser.profile.id]: action.currentUser.profile
                }; 
            } else {
                return {}
            }
        default:
            return state;
    }
}

export default profilesReducer;
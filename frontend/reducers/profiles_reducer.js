import { RECEIVE_PROFILE, 
         RECEIVE_ALL_PROFILES } 
    from '../actions/profiles_actions';

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState
    switch (action.type) {
        case RECEIVE_ALL_PROFILES:
            newState = Object.assign({}, state, action.profiles);
            return newState;
        case RECEIVE_PROFILE:
            newState = Object.assign({}, state);
            newState[action.profile.id] = action.profile
            return newState;
        default:
            return state;
    }
}

export default profilesReducer;
import {
    RECEIVE_LOCATION,
    RECEIVE_ALL_LOCATIONS
}
    from '../actions/locations_actions';

const locationsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState
    switch (action.type) {
        case RECEIVE_ALL_LOCATIONS:
            newState = Object.assign({}, state, action.locations);
            return newState;
        case RECEIVE_LOCATION:
            newState = Object.assign({}, state);
            newState[action.location.id] = action.location
            return newState;
        default:
            return state;
    }
}

export default locationsReducer;
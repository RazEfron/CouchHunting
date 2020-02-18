import {
    RECEIVE_HOME,
    RECEIVE_ALL_HOMES
}
    from '../actions/homes_actions';

const homesReducer = (state = {}, action) => {
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
        default:
            return state;
    }
}

export default homesReducer;
import {
    RECEIVE_MESSAGE,
    RECEIVE_ALL_MESSAGES
}
    from '../actions/messages_actions';

const conversationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_MESSAGES:
            
            return action.messages;
        case RECEIVE_MESSAGE:
            
            let newState = Object.assign({}, state);
            newState[action.message.id] = action.message;
            return newState;
        default:
            return state;
    }
}

export default conversationsReducer;
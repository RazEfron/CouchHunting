import {
    RECEIVE_CONVERSATION,
    RECEIVE_ALL_CONVERSATIONS
}
    from '../actions/conversation_actions';

const conversationsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_CONVERSATIONS:
            
            return Object.values(action.conversations);
        case RECEIVE_CONVERSATION:
            return action.conversation
        default:
            return state;
    }
}

export default conversationsReducer;
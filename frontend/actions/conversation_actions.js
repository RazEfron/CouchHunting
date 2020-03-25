import * as APIUtil from '../util/conversation_api_util';

export const RECEIVE_ALL_CONVERSATIONS = 'RECEIVE_ALL_CONVERSATIONS'
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION'

const receiveConversation = conversation => {
    return {
        type: RECEIVE_CONVERSATION,
        conversation
    }
}

const receiveAllConversations = conversations => {
    return {
        type: RECEIVE_ALL_CONVERSATIONS,
        conversations
    }
}



export const fetchAllConversations = () => dispatch => {
    debugger
    return APIUtil.fetchAllConversations().then(conversations => (dispatch(receiveAllConversations(conversations))))
}

export const createConversation = conversation => dispatch => {
    debugger
    return APIUtil.createConversation(conversation).then(conversation => (dispatch(receiveConversation(conversation))))
}

export const fetchConversation = (conversationId) => dispatch => {
    debugger
    return APIUtil.fetchConversation(conversationId).then(conversation => (dispatch(receiveConversation(conversation))))
}


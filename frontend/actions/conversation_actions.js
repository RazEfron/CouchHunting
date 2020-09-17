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

export const fetchAllConversations = (profileId) => dispatch => {
    
    return APIUtil.fetchAllConversations(profileId).then(conversations => (dispatch(receiveAllConversations(conversations))))
}

export const createConversation = conversation => dispatch => {
    
    return APIUtil.createConversation(conversation).then(conversation => (dispatch(receiveConversation(conversation))))
}

export const fetchConversation = (conversationId, conversation) => dispatch => {
    
    return APIUtil.fetchConversation(conversationId, conversation).then(conversation => (dispatch(receiveConversation(conversation))))
}


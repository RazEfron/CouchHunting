import * as APIUtil from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

const receiveAllMessages = messages => {
    return {
        type: RECEIVE_ALL_MESSAGES,
        messages
    }
}



export const fetchAllMessages = (message) => dispatch => {
    
    return APIUtil.fetchAllMessages(message).then(messages => (dispatch(receiveAllMessages(messages))))
}

export const createMessage = message => dispatch => {
    
    return APIUtil.createMessage(message).then(message => (dispatch(receiveMessage(message))))
}

export const updateMessage = message => dispatch => {
    
    return APIUtil.updateMessage(message).then(message => (dispatch(receiveM(message))))
}

export const fetchMessage = (message) => dispatch => {
    
    return APIUtil.fetchMessage(message).then(message => (dispatch(receiveMessage(message))))
}


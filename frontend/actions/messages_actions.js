import * as APIUtil from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

const receivemessage = message => {
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



export const fetchAllMessages = () => dispatch => {
    debugger
    return APIUtil.fetchAllMessages().then(messages => (dispatch(receiveAllMessages(messages))))
}

export const createMessage = message => dispatch => {
    debugger
    return APIUtil.createMessage(message).then(message => (dispatch(receivemessage(message))))
}

export const fetchMessage = (message) => dispatch => {
    debugger
    //last message in a conversation!!!!
    return APIUtil.fetchMessage(message).then(message => (dispatch(receivemessage(message))))
}


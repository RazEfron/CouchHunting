export const fetchAllMessages = (message) => {
    
    return $.ajax({
        url: '/api/messages',
        method: 'GET',
        data: { message }
    })
}

export const fetchMessage = (messageId) => {
    
    return $.ajax({
        url: `/api/messages/${messageId}`,
        method: 'GET'
    })
}

export const createMessage = (message) => {
    
    return $.ajax({
        url: '/api/messages',
        method: 'POST',
        data: { message }
    })
}

export const updateMessage = (message) => {
    debugger
    return $.ajax({
        url: `/api/messages/${message.id}`,
        method: 'PATCH',
        data: { message }

    })
};
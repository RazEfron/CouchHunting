export const fetchAllConversations = () => {
    debugger
    return $.ajax({
        url: '/api/conversations',
        method: 'GET'
    })
}

export const fetchConversation = (conversationId) => {
    debugger
    return $.ajax({
        url: `/api/conversations/${conversationId}`,
        method: 'GET'
    })
}

export const createConversation = (conversation) => {  
    debugger
    return $.ajax({
        url: '/api/conversations',
        method: 'POST',
        data: { conversation }
    })
}
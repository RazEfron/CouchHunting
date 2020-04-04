export const fetchAllBookings = (conversationId) => {
    
    return $.ajax({
        url: '/api/bookings',
        method: 'GET',
        data: { conversationId }
    })
}

export const fetchUserBookings = (profileId) => {

    return $.ajax({
        url: `/api/bookings/${profileId}`,
        method: 'GET'
    })
}

export const createBooking = (booking) => {
    
    return $.ajax({
        url: '/api/bookings',
        method: 'POST',
        data: { booking }
    })
}

export const updateBooking = (booking) => {
    
    return $.ajax({
        url: `/api/bookings/${booking.id}`,
        method: 'PATCH',
        data: { booking }

    })
};
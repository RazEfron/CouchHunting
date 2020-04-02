export const fetchAllBookings = (conversationId) => {

    return $.ajax({
        url: '/api/bookings',
        method: 'GET',
        data: { conversationId }
    })
}

export const fetchBooking = (bookingId) => {

    return $.ajax({
        url: `/api/bookings/${bookingId}`,
        method: 'GET'
    })
}

export const createBooking = (booking) => {
    debugger
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
        data: { photo }

    })
};
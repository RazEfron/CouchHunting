import * as APIUtil from '../util/conversation_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS'
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING'

const receiveBooking = booking => {
    return {
        type: RECEIVE_BOOKING,
        booking
    }
}

const receiveAllBookings = booking => {
    return {
        type: RECEIVE_ALL_BOOKINGS,
        booking
    }
}

export const fetchAllBookings = (conversationId) => dispatch => {

    return APIUtil.fetchAllBookings(conversationId).then(bookings => (dispatch(receiveAllBookings(bookings))))
}

export const createBooking = booking => dispatch => {

    return APIUtil.createBooking(booking).then(booking => (dispatch(receiveBooking(booking))))
}

export const fetchBooking = (bookingId) => dispatch => {

    return APIUtil.fetchBooking(bookingId).then(booking => (dispatch(receiveBooking(booking))))
}


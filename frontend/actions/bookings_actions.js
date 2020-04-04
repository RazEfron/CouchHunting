import * as APIUtil from '../util/bookings_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS'
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING'

const receiveBooking = booking => {
    return {
        type: RECEIVE_BOOKING,
        booking
    }
}

const receiveAllBookings = bookings => {
    return {
        type: RECEIVE_ALL_BOOKINGS,
        bookings
    }
}

export const fetchAllBookings = (conversationId) => dispatch => {
    
    return APIUtil.fetchAllBookings(conversationId).then(bookings => (dispatch(receiveAllBookings(bookings))))
}

export const createBooking = booking => dispatch => {
    
    return APIUtil.createBooking(booking).then(booking => (dispatch(receiveBooking(booking))))
}

export const updateBooking = booking => dispatch => {
    
    return APIUtil.updateBooking(booking).then(booking => (dispatch(receiveBooking(booking))))
}

export const fetchUserBookings = (profileId) => dispatch => {

    return APIUtil.fetchUserBookings(profileId).then(bookings => (dispatch(receiveAllBookings(bookings))))
}


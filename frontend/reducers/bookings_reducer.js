import {
    RECEIVE_BOOKING,
    RECEIVE_ALL_BOOKINGS
}
    from '../actions/bookings_actions';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BOOKINGS:
            
            return action.bookings;
        case RECEIVE_BOOKING:
            debugger
            let newState = Object.assign({}, state)
            newState[action.booking.id] = action.booking
            return newState
        default:
            return state;
    }
}

export default bookingsReducer;
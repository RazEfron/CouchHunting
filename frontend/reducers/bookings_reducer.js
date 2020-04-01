import {
    RECEIVE_BOOKING,
    RECEIVE_ALL_BOOKINGS
}
    from '../actions/bookings_actions';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_BOOKINGS:
            return Object.values(action.conversations);
        case RECEIVE_BOOKING:
            return action.conversation
        default:
            return state;
    }
}

export default bookingsReducer;
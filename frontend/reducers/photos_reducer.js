import {
    RECEIVE_PHOTO,
    RECEIVE_ALL_PHOTOS,
    REMOVE_PHOTO
}
    from '../actions/photos_actions.js';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState
    switch (action.type) {
        case RECEIVE_ALL_PHOTOS:
            newState = Object.assign({}, state, action.photos);
            return newState;

        case RECEIVE_PHOTO:
            newState = Object.assign({}, state);
            newState[action.photo.id] = action.photo
            return newState;

        case REMOVE_PHOTO:
            newState = Object.assign({}, state);
            delete newState[action.photoId]
            return newState
        default:
            return state;
    }
}

export default photosReducer;
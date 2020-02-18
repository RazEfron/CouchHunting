import *  as APIUtil from '../util/photos_api_util' ;

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO'
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS'
export const REMOVE_PHOTO = 'REMOVE_PHOTO'

const receivePhoto = photo => {
    return {
        type: RECEIVE_PHOTO,
        photo
    }
}

const receiveAllPhotos = photos => {
    return {
        type: RECEIVE_ALL_PHOTOS,
        photos
    }
}

const removePhoto = photoId => {
    return {
        type: REMOVE_PHOTO,
        photoId
    }
} 

export const fetchAllPhotos = () => dispatch => {
    return APIUtil.fetchAllPhotos().then(photos => (dispatch(receiveAllPhotos(photos))))
}

export const fetchPhoto = (photoId) => dispatch => {
    return APIUtil.fetchPhoto(photoId).then(photo => (dispatch(receivePhoto(photo))))
}

// export const updateHome = (photo) => dispatch => {
//     return APIUtil.updateHome(photo).then(photo => (dispatch(receiveHome(photo))))
// }
export const deletePhoto = photoId => dispatch => {
    return APIUtil.deletePhoto(photoId).then(() => (dispatch(removePhoto(photoId))))
}
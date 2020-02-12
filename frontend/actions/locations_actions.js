import * as APIUtil from '../util/locations_api_util';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION'
export const RECEIVE_ALL_LOCATIONS = 'RECEIVE_ALL_LOCATIONS'

const receiveLocation = location => {
    return {
        type: RECEIVE_LOCATION,
        location
    }
}

const receiveAllLocations = locations => {
    return {
        type: RECEIVE_ALL_LOCATIONS,
        locations
    }
}



export const fetchAllLocations = () => dispatch => {
    return APIUtil.fetchAllLocations().then(locations => (dispatch(receiveAllLocations(locations))))
}


export const fetchLocation = (locationId) => dispatch => {
    return APIUtil.fetchLocation(locationId).then(location => (dispatch(receiveLocation(location))), err => (dispatch(receiveProfileErrors(err))))
}

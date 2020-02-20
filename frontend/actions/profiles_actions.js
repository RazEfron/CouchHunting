import * as APIUtil from '../util/profiles_api_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES'
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS'

const receiveProfile = profile => {
    return {
        type: RECEIVE_PROFILE,
        profile
    }
}

const receiveAllProfiles = profiles => {
    return {
        type: RECEIVE_ALL_PROFILES,
        profiles
    }
}

const receiveProfileErrors = errors => {
    return {
        type: RECEIVE_PROFILE_ERRORS,
        errors
    }
}

export const fetchAllProfiles = () => dispatch => {
    return APIUtil.fetchAllProfiles().then(profiles => (dispatch(receiveAllProfiles(profiles))))
}

export const createProfile = profile => dispatch => {
    return APIUtil.createProfile(profile).then(profile => (dispatch(receiveProfile(profile))), err => (dispatch(receiveProfileErrors(err))))
}

export const fetchProfile = (profileId) => dispatch => {
    return APIUtil.fetchProfile(profileId).then(profile => (dispatch(receiveProfile(profile))), err => (dispatch(receiveProfileErrors(err))))
}

export const updateProfile = (profile) => dispatch => {
    return APIUtil.updateProfile(profile).then(profiles => (dispatch(receiveProfile(profiles))), err => (dispatch(receiveProfileErrors(err))))
}

export const fetchSearchResults = (locationId) => dispatch => {
    return APIUtil.searchProfiles(locationId).then(profiles => dispatch(receiveAllProfiles(profiles)))
}
import * as APIUtil from '../util/homes_api_util';

export const RECEIVE_HOME = 'RECEIVE_HOME'
export const RECEIVE_ALL_HOMES = 'RECEIVE_ALL_HOMES'

const receiveHome = home => {
    return {
        type: RECEIVE_HOME,
        home
    }
}

const receiveAllHomes = homes => {
    return {
        type: RECEIVE_ALL_HOMES,
        homes
    }
}



export const fetchAllHomes = () => dispatch => {
    return APIUtil.fetchAllHomes().then(homes => (dispatch(receiveAllHomes(homes))))
}

export const createHome = home => dispatch => {
    return APIUtil.createHome(home).then(home => (dispatch(receiveHome(home))))
}

export const fetchHome = (homeId) => dispatch => {
    return APIUtil.fetchHome(homeId).then(home => (dispatch(receiveHome(home))))
}

export const updateHome = (home) => dispatch => {
    return APIUtil.updateHome(home).then(homes => (dispatch(receiveHome(homes))))
}
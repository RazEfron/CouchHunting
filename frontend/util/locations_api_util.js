export const fetchAllLocations = () => {
    return $.ajax({
        url: '/api/locations',
        method: 'GET'
    })
}

export const fetchLocation = (locationId) => {
    return $.ajax({
        url: `/api/profiles/${locationId}`,
        method: 'GET'
    })
}
export const fetchAllProfiles = () => {
    return $.ajax({
        url: '/api/profiles',
        method: 'GET'
    })
}

export const createProfile = (profile) => {
    return $.ajax({
        url: '/api/profiles',
        method: 'POST',
        data: { profile }
    })
}

export const fetchProfile = (profileId) => {
    return $.ajax({
        url: `/api/profiles/${profileId}`,
        method: 'GET'
    })
}

export const updateProfile = (profile) => {
    
    return $.ajax({
        url: `/api/profiles/${profile.id}`,
        method: 'PATCH',
        data: { profile }
    })
}

export const searchProfiles = (locationId, search) => {
    
    return $.ajax({
        url: `api/search`,
        method: 'GET',
        data: {locationId, search}
    })
}
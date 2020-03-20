export const fetchAllPhotos = () => {
    return $.ajax({
        url: '/api/photos',
        method: 'GET'
    })
}

export const fetchUserPhotos = (photoId) => {
    return $.ajax({
        url: `/api/photos/${photoId}`,
        method: 'GET'
    })
}

export const updatePhoto = (photo) => {
        
    return $.ajax({
        url: `/api/photos/${photo.id}`,
    method: 'PATCH',
    data: { photo }
    
})};

export const deletePhoto = (photoId) => {
        
    return $.ajax({
        url: `/api/photos/${photoId}`,
        method: 'DELETE'
    })
}
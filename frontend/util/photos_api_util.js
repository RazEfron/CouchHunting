export const fetchAllPhotos = () => {
    return $.ajax({
        url: '/api/photos',
        method: 'GET'
    })
}

export const fetchPhoto = (photoId) => {
    return $.ajax({
        url: `/api/photos/${photoId}`,
        method: 'GET'
    })
}

// export const updatePhoto = (photoId, formData) => {
//     return $.ajax({
//         url: `/api/photos/${photoId}`,
//     method: 'PATCH',
//     data: formData,
//     contentType: false,
//     processData: false
    
// })};

export const deletePhoto = (photoId) => {
    return $.ajax({
        url: `/api/photos/${photoId}`,
        method: 'PATCH'
    })
}
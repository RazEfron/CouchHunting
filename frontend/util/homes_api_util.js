export const fetchAllHomes = () => {
    return $.ajax({
        url: '/api/homes',
        method: 'GET'
    })
}

export const createHome = (home) => {
    //  
    return $.ajax({
        url: '/api/homes',
        method: 'POST',
        data: { home }
    })
}

export const fetchHome = (homeId) => {
    return $.ajax({
        url: `/api/homes/${homeId}`,
        method: 'GET'
    })
}

export const updateHome = (home) => {
     
    return $.ajax({
        url: `/api/homes/${home.id}`,
        method: 'PATCH',
        data: { home }
    })
}
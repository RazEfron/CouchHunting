export const fetchAllHomes = () => {
  return $.ajax({
    url: "/api/homes",
    method: "GET",
  });
};

export const createHome = (home) => {
<<<<<<< HEAD
  //
  return $.ajax({
    url: "/api/homes",
    method: "POST",
    data: { home },
  });
};
=======
    return $.ajax({
        url: '/api/homes',
        method: 'POST',
        data: { home }
    })
}
>>>>>>> 2509dcc9feaae2856b6ab9770c4f57e753337883

export const fetchHome = (homeId) => {
  return $.ajax({
    url: `/api/homes/${homeId}`,
    method: "GET",
  });
};

export const updateHome = (home) => {
  return $.ajax({
    url: `/api/homes/${home.id}`,
    method: "PATCH",
    data: { home },
  });
};

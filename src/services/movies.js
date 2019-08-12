const API_ALL_MOVIES = `https://swapi.co/api/films/`;

async function allMovies() {
  const listMovies = await fetch(API_ALL_MOVIES, {
    method: "GET"
  }).then(response => response.json());
  return listMovies;
}

export { allMovies };

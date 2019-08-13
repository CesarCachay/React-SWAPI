const API_ALL_MOVIES = `https://swapi.co/api/films/`;
const API_URL = `https://swapi.co/api`;

async function allMovies() {
  const listMovies = await fetch(API_ALL_MOVIES, {
    method: "GET"
  }).then(response => response.json());
  return listMovies;
}

async function getFilm(number) {
  const response = await fetch(`${API_URL}/films/${number}`);
  return response.json();
}
export { allMovies, getFilm };

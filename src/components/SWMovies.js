import React from "react";
import axios from "axios";
import { allMovies } from "../services/movies";

function SWMovies() {
  const [number, setNumber] = React.useState(1);
  const [movie, setMovie] = React.useState("");
  const [char, setChar] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}`);
      setMovie(response.data);
      console.log(movie.characters);
    }
    fetchData();
  }, [number]);

  React.useEffect(() => {
    async function getChars() {
      const charResponse = await axios.get(
        `https://swapi.co/api/people/${number}`
      );
      setChar(charResponse.data);
    }
    getChars();
  }, [number]);

  return (
    <div>
      <h1>Pick a Movie</h1>
      <h4>You chose: {number}</h4>
      <h3>Title: {movie.title}</h3>
      <h5>Director: {movie.director}</h5>
      {movie.characters === undefined
        ? "hola"
        : movie.characters.forEach(char => {
            return <h3>{char}</h3>;
          })}
      <h3>Movie Characters: </h3>
      <h5>{char.name}</h5>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}

export default SWMovies;

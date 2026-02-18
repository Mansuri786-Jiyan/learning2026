import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Movies() {
  const [search, setSearch] = useState("Phir Hera Pheri");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const MoviesApi = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=311c4c49&s=${search}`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError("");
      }

    } catch (err) {
      setError("Something went wrong!");
      console.log(err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Movies</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={MoviesApi}>Search</button>

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.map((movie) => (
          <Link to={`/imdb/${movie.imdbID}`}>
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
              width: "200px",
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%" }}
            />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            {/* <p>{movie.imdbID}</p> */}
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../../assets/imdb.css"

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=311c4c49&i=${id}`
        );
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="movie-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ⬅ Back
      </button>

      <div className="movie-container">
        <div className="movie-poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>

        <div className="movie-info">
          <h1 className="movie-title">
            {movie.Title} ({movie.Year})
          </h1>

          <p className="movie-meta"><b>Rated:</b> {movie.Rated}</p>
          <p className="movie-meta"><b>Released:</b> {movie.Released}</p>
          <p className="movie-meta"><b>Runtime:</b> {movie.Runtime}</p>
          <p className="movie-meta"><b>Genre:</b> {movie.Genre}</p>
          <p className="movie-meta"><b>Director:</b> {movie.Director}</p>
          <p className="movie-meta"><b>Writer:</b> {movie.Writer}</p>
          <p className="movie-meta"><b>Actors:</b> {movie.Actors}</p>
          <p className="movie-meta"><b>Language:</b> {movie.Language}</p>
          <p className="movie-meta"><b>Country:</b> {movie.Country}</p>
          <p className="movie-meta"><b>Awards:</b> {movie.Awards}</p>

          <div className="rating-box">
            ⭐ <span>{movie.imdbRating}</span> / 10  
            &nbsp; | &nbsp; {movie.imdbVotes} votes
          </div>

          <p className="movie-meta"><b>Box Office:</b> {movie.BoxOffice}</p>
          <p className="movie-meta"><b>Production:</b> {movie.Production}</p>

          <div className="plot-box">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
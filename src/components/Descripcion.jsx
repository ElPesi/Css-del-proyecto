import { useLocation } from "react-router-dom";
import './Descripcion.css';
import Trailer from "./Trailer.jsx";
import { useEffect, useState } from "react";

function Descripcion() {
  const location = useLocation();
  const { movie } = location.state || {};
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some(favMovie => favMovie.imdbID === movie?.imdbID));
  }, [movie]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
  
      const updatedFavorites = favorites.filter(favMovie => favMovie.imdbID !== movie.imdbID);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {

      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const getDuration = (runtime) => {
    if (runtime && runtime.includes("min")) {
      const minutes = parseInt(runtime.split(" ")[0], 10);
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return { hours, minutes: remainingMinutes };
    }
    return { hours: 1, minutes: 59 }; 
  };

  const duration = movie ? getDuration(movie.Runtime) : { hours: 1, minutes: 59 };

  return (
    <div className="page-container">
      <div className="image-section">
        {movie && movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} className="header-image" />
        ) : (
          <img src="scale.jpg" alt="Película" className="header-image" />
        )}
      </div>
      <div className="content-section">
        <div className="left-content">
          <h1 className="movieName">{movie ? movie.Title : "Nombre De La Película"}</h1>
          <p className="release-date">Release date {movie ? movie.Released : "Sep 30, 2022"}</p>
          <p className="author">Created by <span className="author-name">{movie ? movie.Director : "Nombre Del Autor"}</span></p>
          <p className="description">{movie ? movie.Plot : "Descripcion"}</p>
          <div className="extra-details">
            <p><span className="detail-title">Extra details</span></p>
            <p className="datailsStyle">👥 Actors: {movie ? movie.Actors : "Actores"}</p>
            <p className="datailsStyle">🌍 Language: {movie ? movie.Language : "Idiomas"}</p>
            <p className="datailsStyle">🎞️ Genre: {movie ? movie.Genre : "Genero"}</p>
            <p className="datailsStyle">🍿 Ratings: {movie ? movie.Ratings[1].Source : "Source"} 🍅 {movie ? movie.Ratings[1].Value : "Porcentaje"}, Imdb ⭐ {movie ? movie.imdbRating : "Source"} </p>
            <p className="datailsStyle">🏆 Awards: {movie ? movie.Awards : "Premios"}</p>
          </div>
        </div>
        <div className="right-content">
          <div className="duration-box">
            <p>Duration:</p>
            <div className="countdown">
              <span>{duration.hours}</span>
              <p>Hours</p>
              <span>{duration.minutes}</span>
              <p>Minutes</p>
            </div>
          </div>
          <button className="discover-button">Discover More</button>
          {movie && <Trailer imdbId={movie.imdbID} />}
          <button onClick={toggleFavorite} className="favorite-button">
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;

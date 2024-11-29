import { useLocation } from "react-router-dom";
import './Descripcion.css';
import { useState } from "react";
import Trailer from "./Trailer.jsx";
function Descripcion() {
  const location = useLocation();
  const [showTrailer, setShowTrailer] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrailerClick = () => {
    setLoading(true);
    setTimeout(() => {
      setShowTrailer(true);
      setLoading(false);
    }, 2000); // Simula un tiempo de carga para el tráiler
  };


  const { movie } = location.state || {};
  // Convierte el runtime a horas y minutos
  const getDuration = (runtime) => {
    if (runtime && runtime.includes("min")) {
      const minutes = parseInt(runtime.split(" ")[0], 10);
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return { hours, minutes: remainingMinutes };
    }
    return { hours: 1, minutes: 59 }; // Valor predeterminado
  };

  const RottenTomatoes = (rating) => {
    const percentage = parseInt(rating.replace("%", ""), 10);
    if (percentage < 60) {
      return "./img/RottenTomatoes_Moco.png"
    }
    else if (percentage >= 60 && percentage < 75) {
      return "./img/RottenTomatoes_Tomate.png"
    }
    else if (percentage >= 75) {
      return "./img/RottenTomatoes_Fresh.png"
    }
    return null;
  }

  const duration = movie ? getDuration(movie.Runtime) : { hours: 1, minutes: 59 };

  return (
    <div className="page-container">
      <div className="image-section">
        <div className="poster-and-trailer">
          <div className="text-section">
            <h1 className="movieName">{movie ? movie.Title : "Nombre De La Película"}</h1>
            <p className="release-date">
              Release date {movie ? movie.Released : "Sep 30, 2022"}
            </p>
            <p className="author">
              Created by <span className="author-name">{movie ? movie.Director : "Nombre Del Autor"}</span>
            </p>
          </div>

          {movie?.imdbID && !showTrailer && (
            <button className="trailer-button" onClick={handleTrailerClick}>
              {loading ? (
                <div className="loader"></div>
              ) : (
                "Ver Tráiler"
              )}
            </button>
          )}
          
          {movie && movie.Poster ? (
            <img src={movie.Poster} alt={movie.Title} className="header-image" />
          ) : (
            <img src="scale.jpg" alt="Película" className="header-image" />
          )}
        </div>
      </div>

      {showTrailer && movie?.imdbID && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowTrailer(false)}>X</button>
            <Trailer imdbId={movie.imdbID} />
          </div>
        </div>
      )}

      <div className="content-section">
        <div className="left-content">

          <p className="description">
            {movie ? movie.Plot : "Descripcion"}
          </p>
          <div className="extra-details">
            <p><span className="detail-title">Extra details</span></p>
            <p className="datailsStyle">👥  Actors: {movie ? movie.Actors : ""}</p>
            <p className="datailsStyle">🌍 Language: {movie ? movie.Language : ""}</p>
            <p className="datailsStyle">🎞️ Genre: {movie ? movie.Genre : ""}</p>
            {movie && movie.Ratings && movie.Ratings[1] ? (
              <p className="datailsStyle">
                🍿 Ratings: {movie.Ratings[1].Source}
                <img
                  src={RottenTomatoes(movie.Ratings[1].Value)} alt="Ratings RottenTomatoes" width="20" className="inline-image" />
                {movie.Ratings[1].Value}, Imdb ⭐ {movie.imdbRating}
              </p>
            ) : "This information is not available"}

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
        </div>
      </div>
      {
        showTrailer && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={() => setShowTrailer(false)}>X</button>
              <Trailer imdbId={movie.imdbID} />
            </div>
          </div>
        )
      }
    </div >
  );
}

export default Descripcion;
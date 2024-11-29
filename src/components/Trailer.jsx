import React, { useEffect, useState } from "react";
import axios from "axios";

const Trailer = ({ imdbId }) => {
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrailer = async () => {
            setTrailerUrl(null); // Reinicia el estado del tráiler al buscar uno nuevo
            const trailerApiUrl = `https://api.kinocheck.de/movies?imdb_id=${imdbId}&apikey=yvWaijqmkmoE7TBUWKyQdFR1PDJCqsNeNpvXa4EuMH09xbVYxDRI1YlnbhGtALSZ&language=en`;

            try {
                const res = await axios.get(trailerApiUrl);
                const videoId = res.data.trailer?.youtube_video_id;

                if (videoId) {
                    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                    setTrailerUrl(embedUrl);
                } else {
                    console.error("No hay tráiler disponible");
                    setTrailerUrl(null);
                }
            } catch (error) {
                console.error("Error al obtener el tráiler:", error);
                setTrailerUrl(null);
            } finally {
                setLoading(false); // Marca como terminado el proceso de carga
            }
        };

        if (imdbId) fetchTrailer();
    }, [imdbId]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p> // Mostrar loading mientras se obtiene el tráiler
            ) : trailerUrl ? (
                <iframe
                    width="560"
                    height="315"
                    src={trailerUrl}
                    title="Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>No hay tráiler disponible.</p>
            )}
        </div>
    );
};

export default Trailer;

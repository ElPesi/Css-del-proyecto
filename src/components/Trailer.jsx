import React, { useEffect, useState } from "react";
import axios from "axios";

const Trailer = ({ imdbId }) => {
    const [trailerUrl, setTrailerUrl] = useState(null);
    console.log(imdbId)
    useEffect(() => {
        const fetchTrailer = async () => {
            setTrailerUrl(null)
            const trailerApiUrl = `https://api.kinocheck.de/movies?imdb_id=${imdbId}&apikey=yvWaijqmkmoE7TBUWKyQdFR1PDJCqsNeNpvXa4EuMH09xbVYxDRI1YlnbhGtALSZ&language=en`;
            try {
                const res = await axios.get(trailerApiUrl);
                console.log(res);
                const englishTrailer = res.data.video?.find(video => video.language === "en")
                const videoId = res.data.trailer?.youtube_video_id;
                console.log(videoId) // Obtén el ID del video de YouTube
                if (videoId) {
                    
                    // Crea la URL de incrustación usando el ID de YouTube
                    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                    setTrailerUrl(embedUrl);
                } else {
                    console.error("No hay ID de video disponible");
                }
            } catch (error) {
                console.error("Error al obtener el tráiler:", error);
            }
        };

        fetchTrailer();
    }, [imdbId]);

    return (
        <>
            <div>
                {trailerUrl ? (
                    <iframe
                        width="560"
                        height="315"
                        src={trailerUrl} // Usa la URL de incrustación de YouTube
                        title="Trailer" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <p>No hay tráiler disponible.</p>
                )}
            </div>
        </>
    );
};

export default Trailer;

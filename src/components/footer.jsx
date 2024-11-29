/*Hecha la funcionalidad por Julio y Fritz*/

import React, { useState } from 'react';
import './footer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const [title, setTitle] = useState('');
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const SearchMovie = () => {
        if (title.trim()) {
            axios.get(`https://www.omdbapi.com/?t=${title}&apikey=e5b17a6c`)
                .then((res) => {
                    if (res.data.Response === "True") {
                        setMovie(res.data);
                        setError(null);
                        navigate('/Descripcion', { state: { movie: res.data } });
                        setTitle("")
                    } else {
                        setMovie(null);
                        setError('Movie not found. Try another title.');
                    }
                })
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            SearchMovie();
        }
    };

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Movie Randomizer</h2>
                    <div className="social-media">
                        <a href="https://www.facebook.com/InstitutoRenault/?locale=es_LA">Facebook</a>
                        <a href="https://www.instagram.com/instituto_tecnico_renault/?hl=es">Instagram</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h2>Search for a movie</h2>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search by name..."
                        className="search-input"
                        style={{ marginRight: '8px' }}
                    />
                    <button onClick={SearchMovie}>Search Movie</button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </footer>
    );
}

export default Footer;

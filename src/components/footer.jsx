import React from "react";
import "./footer.css"; // Asegúrate de que la ruta sea correcta

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>DescubrePeli</h2>
                    <div className="social-media">
                        {/* Añade aquí los enlaces a tus redes sociales */}
                        <a href="https://www.facebook.com/InstitutoRenault/?locale=es_LA">Facebook</a>
                        <a href="https://www.instagram.com/instituto_tecnico_renault/?hl=es">Instagram</a>
                    </div>
                </div>
                <div className="footer-section center">
                    <h2>Explora</h2>
                    <ul>
                        <li><a href="#">Categorías</a></li>
                        <li><a href="#">Películas</a></li>
                        <li><a href="#">Inicio</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Buscar una película?</h2>
                    <input type="text" placeholder="Buscar por nombre..." className="search-input" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;

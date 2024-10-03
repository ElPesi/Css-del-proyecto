import React from 'react';
import './App.css'; 
import Banner from './assets/marcos.jpg';
import Footer from './components/footer';
// Importar Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Componente de Font Awesome
import { faRandom, faSearch } from '@fortawesome/free-solid-svg-icons'; // Importar iconos específicos

function App() {
  return (
    <div className="app-container"> {/* Contenedor principal de la aplicación */}
      <img src={Banner} alt="Banner" className="banner" /> {/* Banner de la aplicación */}
      <div className="text-container"> {/* Contenedor para el texto */}
        <h1 className="title">Categorias</h1> {/* Título principal */}
        <p className="description">Aquí puedes explorar diferentes categorías.</p> {/* Descripción */}
        <div className="button-group"> {/* Contenedor para los botones */}
          {/* Botón Aleatorio con icono */}
          <button className="random-button">
            <FontAwesomeIcon icon={faRandom} /> Aleatoria {/* El icono se añade aquí */}
          </button>
          {/* Botón Específico con icono */}
          <button className="specific-button">
            <FontAwesomeIcon icon={faSearch} /> Específica {/* El icono se añade aquí */}
          </button>
        </div>
        <Footer /> {Footer}
      </div>
    </div>
  );
}

export default App; 
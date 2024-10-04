import './App.css'

function App() {
  return (
    <div className='paginaInicio'>
      <h1>Título</h1>
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <p id='flecha0' className='flechas'>v</p>
      <div className='iniciaDescubrimiento'>
        <h2>¿No sabes qué película ver?</h2>
        <button id='botonDescubrimiento'>Inicia Descubrimiento</button>
        <img 
          src="./public/img/pagInicio_descubrimiento.svg" 
        />
      </div>
    <div className='categoriasDeterminadas'>
        <p id='flecha1' className='flechas'>v</p>
        <button id='botonCategTerror' className='botonesCategInicio'>Terror</button>
        <button id='botonCategDrama'className='botonesCategInicio'>Drama</button>
        <button id='botonCategRomance'className='botonesCategInicio'>Romance</button>
        <button id='botonCategAccion'className='botonesCategInicio'>Acción</button>
        <button id='botonCategCiencFiccion'className='botonesCategInicio'>Ciencia Ficción</button>
        <p id='flecha2' className='flechas'>v</p>
      </div>
    </div>
  )
}

export default App

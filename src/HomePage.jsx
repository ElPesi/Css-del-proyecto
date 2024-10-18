import './HomePage.css'
import footer from './footer';
function HomePage() {
  return (
    <div className='homePage'>
      <h1>Título</h1>
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <p id='arrow0' className='arrows'>v</p>
      <div className='discoveryBegins'>
        <h2>¿No sabes qué película ver?</h2>
        <button id='discoveryButton'>Inicia Descubrimiento</button>
        <img 
          src="/img/homePageTitle.png" 
        />
      </div>
    <div className='certainCategories'>
        <p id='arrow1' className='arrows'>v</p>
        <button id='buttonCategTerror' className='buttonsCategStart'>Terror</button>
        <button id='buttonCategDrama'className='buttonsCategStart'>Drama</button>
        <button id='buttonCategRomance'className='buttonsCategStart'>Romance</button>
        <button id='buttonCategAction'className='buttonsCategStart'>Actión</button>
        <button id='buttonCategScienceFiction'className='buttonsCategStart'>Science Fictión</button>
        <p id='arrow2' className='arrows'>v</p>
      </div>
      <footer/>
    </div>
  )
}

export default HomePage

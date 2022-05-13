import './App.css';
import freeCodeCampLogo from './images/freeCodeCamp.png';
import Boton from './Components/Boton';
import Contador from './Components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  const handleClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          isButtonClic={true}
          handleClic={handleClic} />
        <Boton 
          texto='Reiniciar'
          isButtonClic={false}
          handleClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

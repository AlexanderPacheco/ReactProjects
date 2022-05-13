import React from 'react';
import '../stylesheet/Boton.css';

function Boton({ texto, isButtonClic, handleClic }) {
  return (
    <button
      className={ isButtonClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={handleClic} >
      {texto}
    </button>
  );
}

export default Boton;
import React from 'react';
import '../stylesheets/Testimonio.css';

export function Testimonio(props) {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require('../images/witcher.jpg')}
          alt='Witcher theme'
          />
        <div className='contenedore-text-testimonio'>
          <p className='nombre-testimonio'>{props.nombre}</p>
          <p className='cargo-testimonio'>{props.cargo}</p>
          <p className='texto-testimonio'>"{props.description}"</p>
        </div>
      </div>
    );
}

//export default Testimonio;
/*
export default only export a function
*/
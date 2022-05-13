import React from 'react';
import '../stylesheets/Testimonio.css';

export function Testimonio(props) {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          //src={require('../images/witcher.jpg')}
          src={require(`../images/${props.image}.jpg`)}
          alt='Witcher theme'
          />
        <div className='contenedore-text-testimonio'>
          <strong><p className='nombre-testimonio'>{props.nombre}</p></strong>
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
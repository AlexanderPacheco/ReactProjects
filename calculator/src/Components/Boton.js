import React from 'react';
import '../stylesheet/Boton.css'

function boton(props){

  const esOperador = valor => {
    //Sino es numero, punto o igual retornamos true
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }
  
  return (
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default boton;
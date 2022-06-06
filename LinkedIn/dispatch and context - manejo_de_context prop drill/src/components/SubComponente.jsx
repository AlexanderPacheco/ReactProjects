import React, {useContext} from 'react'
import {MiContexto} from './Contenedor'

export default function SubComponente(props) {

    const context = useContext(MiContexto);
    const animal = context.estado;

    return (
        <>
            <p className="card-text">
                <strong>Reino:</strong> {animal.reino}  <br />

                <strong>Familia:</strong> {animal.familia} <br />

                <strong>Género:</strong> {animal.genero} <br />

                <strong>Especie:</strong> {animal.especie}
            </p>

            {animal.status === 1 &&

                <div onClick={()=> context.dispatch({type:'desSeleccionar'})} className='alert alert-danger mt-3 text-center' role='alert'>
                    Seleccionado
                </div>

            }

        </>
    )
}

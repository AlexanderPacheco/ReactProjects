import React, {useReducer} from 'react'
import MiComponente from "./MiComponente";

export default function Contenedor() {
    const data = {
        nombreComun: 'Sardina común',
        reino: 'Animal',
        familia: 'Clupeidae',
        genero: 'Sardina',
        especie: 'Sardina pilchardus',
        status: 0
    }

    const reducer = (estado, accion) => {
        switch (accion.type) {
            case 'seleccionar':
                return {...estado, status:1}
                break;
            case 'desSeleccionar':
                return {...estado, status:0}
                break;
            default:
                throw new Error();
        }
    }

    const [estado, dispatch] = useReducer(reducer,data);
    
    return (
        <div className="container">
            <MiContexto.Provider value={ {estado, dispatch} }>
                <MiComponente/>
            </MiContexto.Provider>

            <button className='mt-4' onClick={()=>{dispatch({type:'seleccionar'})}}>
              Cambiar estado
            </button>
        </div>
    )
}

export const MiContexto = React.createContext(null)

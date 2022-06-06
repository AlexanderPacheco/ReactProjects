import React from 'react';
import useDocumentMousePosition from './useDocumentMousePosition'

function App() {

    const estaActivado = useDocumentMousePosition();

    return (
        <div className='container'>

            <div className={`${estaActivado ? "green":"red"}`}>
                <h1>Detectar posición mouse</h1>
            </div>
        </div>
    );
}

export default App;
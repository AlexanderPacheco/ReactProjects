import {useState, useEffect} from 'react';

const useDocumentMousePosition = () => {
    
    const [isMouseOnRange, setIsMouseOnRange] = useState(false);
    
    const checkMousePosition = (evento) => { 
        setIsMouseOnRange(evento?.pageY < 150);
    }

    useEffect( () => {
        document.addEventListener('mousemove',checkMousePosition)

        return () => document.removeEventListener('mousemove', checkMousePosition)
    }, [])

    return isMouseOnRange;
}

export default useDocumentMousePosition;
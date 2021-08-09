import React, { useEffect } from 'react'
import Form from './Form';
import { levantarInfo } from '../Actions/apiActions';
import { useDispatch  } from 'react-redux';


function Main() {
    
    const dispatch = useDispatch();

    /*const levantarDatos = () =>{
        dispatch(levantarInfo())
    }*/

    useEffect(() => {
        dispatch(levantarInfo())
    }, [dispatch]) //AMADA

    return (
        <header className="principal">
            <h2>Buscar Ciudad</h2>
            <Form />
        </header>
    )
}

export default Main

import React, { useEffect } from 'react'
import Form from './Form';
import { levantarInfo } from '../Actions/apiActions';
import { useDispatch  } from 'react-redux';
import styled from 'styled-components';

function Main() {
    
    const dispatch = useDispatch();

    /*const levantarDatos = () =>{
        dispatch(levantarInfo())
    }*/

    useEffect(() => {
        dispatch(levantarInfo())
    }, [dispatch]) //AMADA

    return (
        <Container>
            <h2>Buscar Ciudad</h2>
            <Form />
        </Container>
    )
}

export default Main

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: auto;
    h2{
        font-size: calc(10px + 1.5vw);
    }
`

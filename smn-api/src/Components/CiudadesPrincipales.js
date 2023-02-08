import React from 'react';
import styled, { keyframes } from 'styled-components';
import {useSelector} from 'react-redux';
import dataSet from'../departamentos.json';

const CiudadesPrincipales = () => {

    const datos = useSelector(state => state);
    /*const ciudades = datos.filter ( item => 
        item.ciudad.toUpperCase() === "CÓRDOBA" || 
        item.ciudad.toUpperCase() === "CAPITAL FEDERAL" ||
        item.ciudad.toUpperCase() === "MENDOZA" ||
        item.ciudad.toUpperCase() === "SALTA" ||
        item.ciudad.toUpperCase() === "SANTA FE" );*/

        


  return (
    <Container>
        <Envoltorio>
            {
                console.log(dataSet.departamentos)
           /* ciudades.map(( item ) => (
                <Ciudad key={item.id}>
                    <p>{item.ciudad}</p>
                    <em>{item.temp}</em>
                    <p>{item.humedad}%</p>
                </Ciudad>
            ))*/
            }

        </Envoltorio>
    </Container>
  )
}

export default CiudadesPrincipales;

export const Container = styled.marquee`
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    width: 100%;
    background: #fffbef;
`;

export const Envoltorio = styled.div`
    display: flex;
    gap: 20px;

    `;

export const Ciudad = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    img{
        width: 36px;
        padding: 5px;
        margin: 5px;
    }
`;

/*Sin usar por etiqueta Marquee */
const scrolling = keyframes`
    0% { transform: translateX(0) }
  100% { transform: translateX(-100%) }
`;



  
import React from 'react';
import styled, { keyframes } from 'styled-components';
import {useSelector} from 'react-redux';

import diaDespejado from '../img/dia-despejado.png';
import cubierto from '../img/cubierto.png';
import diaNublado from '../img/dia-nublado.png';
import lluvioso from '../img/lluvioso.png';
import nieve from '../img/snowing.png';
import tormenta from '../img/tormenta.png';
import pregunta from '../img/pregunta.png';


const CiudadesPrincipales = () => {

    const datos = useSelector(state => state.datosAPI);
    const populares = datos.filter ( item => 
        item.ciudad.toUpperCase() === "CÓRDOBA" || 
        item.ciudad.toUpperCase() === "CAPITAL FEDERAL" ||
        item.ciudad.toUpperCase() === "MENDOZA" ||
        item.ciudad.toUpperCase() === "SALTA" ||
        item.ciudad.toUpperCase() === "SANTA FE" );

        const determinarIcono = (api) =>{
            if(api.cielo.toLowerCase().includes('lluv')){
                return lluvioso;
            }
            if(api.cielo.toLowerCase().includes('niev')){
                return nieve;
            }
            if(api.cielo.toLowerCase().includes('torm')){
                return tormenta;
            }
            if(api.cielo.toLowerCase().includes('cubierto')){
                return cubierto;
            }
            if(api.cielo.toLowerCase().includes('despe')){
                return diaDespejado;
            }
            if (api.cielo.toLowerCase().includes('nublado')) {
                return diaNublado;
            }else{
                return pregunta;
            }
        
    }

  return (
    <Container>
        <Envoltorio>
            {
            populares.map(( item ) => (
                <Ciudad key={item.id}>
                    <p>{item.ciudad}</p>
                    <em>{item.temp}</em>
                    <p>{item.humedad}%</p>
                    <img src={determinarIcono(item)} alt="mh" />
                </Ciudad>
            ))
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



  
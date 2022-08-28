import React from 'react'
import diaDespejado from '../img/dia-despejado.png';
import cubierto from '../img/cubierto.png';
import diaNublado from '../img/dia-nublado.png';
import lluvioso from '../img/lluvioso.png';
import nieve from '../img/snowing.png';
import tormenta from '../img/tormenta.png';
import pregunta from '../img/pregunta.png';
import styled from 'styled-components';

function Tarjeta({api}) {

    const determinarIcono = () =>{
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
            <Container className="tarjeta">
                <h2>{api.prov}</h2>
                <h3>{api.ciudad}</h3>
                <img src={determinarIcono("")} alt="mh" className="avatar"/>

                <Contorno>
                    <h4>Temperatura</h4>
                    <p>{api.temp}</p>
                </Contorno>
                <Contorno>
                    <h4>Cielo</h4>
                    <p>{api.cielo}</p>
                </Contorno>
                <Contorno>
                    <h4>Humedad</h4>
                    <p>{api.humedad}</p>
                </Contorno>
                <Contorno>
                    <h4>Presión</h4>
                    <p>{api.presion}</p>
                </Contorno>
                <Contorno>
                    <h4>Viento</h4>
                    <p>{`${api.viento}km/h - ${api.vientoDir}` }</p>
                </Contorno>
            </Container>
    )
}

export default Tarjeta;

export const Container = styled.li`
  background: #fffbef;
  border-radius: 10px;
  text-align: center;
  box-shadow: 1px 1px 2px grey;
  margin: 20px 20px;
  padding: 10px 10px;
  max-width: 375px;

  h2{
    font-size: calc(14px + 1.5vw);
  }
  h3{
    font-size: calc(10px + 1.5vw);
  }
  img{

  }`;

  export const Contorno = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin: 5px;
    gap: 20px;
    h4{
        font-size: calc(8px + 1.5vw);
    }
    p{
        font-size: calc(6px + 1.5vw);
    }`;
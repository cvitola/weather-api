import React , {useState} from 'react'
import styled from 'styled-components';
import { WiHorizonAlt, WiHorizon, WiThermometer, WiHumidity, WiBarometer , WiStrongWind} from "react-icons/wi";

function Tarjeta({api, proximos, setProximos}) {
    

    const obtenerIcono = (source) => {
        return `http://openweathermap.org/img/wn/${source}@2x.png`
    }

    const proximosDias = (e) => {
        e.preventDefault();
        api.list.shift();
        setProximos(api.list);
    }
   
    return (
            <Container className="tarjeta">
                <h3>{api.city.name}</h3>
                <h5>Predicción</h5>
                {api.list[0].dt_txt}
                <img src={obtenerIcono(api.list[0].weather[0].icon)} alt="icon" />
                                
                <Contorno>
                    <WiThermometer />
                    <p>{`${(parseFloat(api.list[0]?.main.temp) - 275.15.toFixed(2)).toFixed(2)} °C`}</p>
                </Contorno>

                <Contorno>
                    <WiHumidity/>
                    <p>{api.list[0]?.main.humidity}</p>
                </Contorno>
                <Contorno>
                    <WiBarometer />
                    <p>{api.list[0]?.main.pressure}</p>
                </Contorno>
                <Contorno>
                    <WiStrongWind />
                    <p>{api.list[0]?.wind.speed }</p>
                </Contorno>
                <Contorno>
                    <WiHorizonAlt />
                    <i>{new Date(api.city.sunrise).toLocaleTimeString("en-us")}</i>
                </Contorno>
                 
                 <Contorno>
                    <WiHorizon />
                    <i>{new Date(api.city.sunset).toLocaleTimeString("en-us")} </i> <strong>fake!</strong>
                 </Contorno>

                <button onClick={proximosDias}>Próximos días</button>
            </Container>
    )
}

export default Tarjeta;

export const Container = styled.li`
    background: rgb(19, 86, 77, 0.25);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    list-style:none;
    border-radius: 10px;
    text-align: center;
    box-shadow: 1px 1px 2px grey;
    margin: 20px 20px;
    padding: 10px 10px;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    padding-left: 20px;
;
    button{
        border: none;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
    }
  h2{
    font-size: calc(14px + 1.5vw);
  }
  h3{
    font-size: calc(10px + 1.5vw);
  }
  img{
    width: 35%;
    margin-left: auto;
    margin-right: auto;
  }`;

  export const Contorno = styled.div`
    display: flex;

    gap: 20px;
    h4{
        font-size: calc(8px + 1.5vw);
    }
    p{
        font-size: calc(6px + 1.5vw);
    }
    svg{
        font-size: 36px;
    }`;

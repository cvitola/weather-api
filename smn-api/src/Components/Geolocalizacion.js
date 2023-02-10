import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { obtenerClimaActualDe  } from '../Actions/apiActions';
import Next from './Next';
import {FaGlobeAmericas} from 'react-icons/fa';

const Geolocalizacion = () => {


const [weather, setWeather] = useState("");

const obtenerDatos = async (valor) => {
    try {
        console.log(valor.latitude, valor.longitude)
        const resp =  await obtenerClimaActualDe(valor.latitude,valor.longitude);
        setWeather(resp);
    } catch (error) {
        alert(error)
    }
    
}

useEffect( () => {
    navigator.geolocation.getCurrentPosition((position) => {
       // setValor(position.coords);
        obtenerDatos(position.coords)
    })
}, [])

  return (
    <Article>
        <div>
            <h2><FaGlobeAmericas /></h2>
            <p>{weather?.name}</p>
        </div>

        {
            weather ? <Next data={weather} actual={true}/> :"<p>cargando...</p>"
        }
    </Article>
  )
}

export default Geolocalizacion

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    --tw-bg-opacity: 1;
    background-color: rgb(15 23 42/var(--tw-bg-opacity));
    div{
        display: flex;
        gap: 5px;
        align-items: center;
        color: #FAFAFA;
        margin-top: 10px;
    margin-bottom: 10px;
    width: 90%;
    justify-content: center;
    
    }


;`
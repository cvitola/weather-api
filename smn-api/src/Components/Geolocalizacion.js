import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { obtenerClimaActualDe  } from '../Actions/apiActions';
import Next from './Next';

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
        <h2>Geolocalización en: {weather?.name}</h2>
        {
            weather ? <Next data={weather} actual={true}/> :"<p>cargando...</p>"
        }
    </Article>
  )
}

export default Geolocalizacion

export const Article = styled.article`
    display: flex;
    border-radius: 0.5rem;
    padding: 0 10px 0 10px;
    margin: 0 10px 0 10px;
    --tw-bg-opacity: 1;
    background-color: rgb(15 23 42/var(--tw-bg-opacity));
    
    h2{
        color: white;
    };`
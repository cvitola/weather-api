import React, {useState} from 'react';

import dataSet from'../departamentos.json';
import Tarjeta from './Tarjeta';
import Next from './Next';
import styled from 'styled-components';
import { obtenerClimaDe } from '../Actions/apiActions';

function Form() {

   // const dispatch = useDispatch();
    const [inputSearch, setInputSearch] = useState("")
    const [weather, setWeather] = useState("");
    const [proximos, setProximos] = useState([]);
    //const datos = useSelector(state => state.datosAPI) por ahora no...
    const [resul, setResul] = useState([]);
    const handlePress = (e) =>{
        setInputSearch(e.target.value)
        setResul(dataSet.departamentos.filter( valor => valor.nombre.toUpperCase().includes(inputSearch.toUpperCase())))
    }

    const obtenerDatos = async (valor) => {
        try {
            setResul([]);
            const resp =  await obtenerClimaDe(valor.centroide.lat, valor.centroide.lon);
            setWeather(resp);
        } catch (error) {
            alert(error)
        }
        
    }
    return (
        <form 
            action="" 
            className="busqueda">
            <Input 
                type="search" 
                id="input-search" 
                placeholder="Escribí una ciudad..." 
                className="input-search"
                onChange={handlePress}/>
            <Display>
                {
                    resul.length>0 || weather ? resul?.map((valor) => (
                        <li api={valor} key={valor.id} onClick={() => obtenerDatos(valor)} >{`${valor.nombre} - ${valor.provincia.nombre}`}</li>
                        )) : <Info>Nada por aquí ... ☝🏼 </Info>                   
                }
            </Display>
            {
                weather ? <Tarjeta api={weather} proximos={proximos} setProximos={setProximos}/> : ""
            }
            <Detalles>
                {
                    proximos?.map((valor) => (
                        <Next data={valor} actual={false}/>
                    ))
                }
            </Detalles>
           
        </form>
    )
}

export default Form

export const Info = styled.p`
    padding: 10px;
    margin: 10px;
    font-size: calc(12px + 1.5vh);
    color: #22272e;
    `;

export const Display = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    li{
        background: #EAEAEA;
        cursor: pointer;
        margin-top: 2px;
        margin-bottom: 5px;
        padding: 5px;
    }`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  border-style: none;
  box-shadow: 2px 2px 2px silver;
  font-size: 20px;`;

export const Detalles = styled.ul`
    display: flex;
    justify-content: center;
    gap: 5px;
    flex-wrap: wrap;
    margin: 5px;
    padding: 5px;`;
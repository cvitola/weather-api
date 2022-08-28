import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Tarjeta from './Tarjeta';
import styled from 'styled-components';

function Form() {

   // const dispatch = useDispatch();
    const [inputSearch, setInputSearch] = useState("")
    const datos = useSelector(state => state.datosAPI)
    const [nuevito, setNuevito] = useState([]);
    const handlePress = (e) =>{
        setInputSearch(e.target.value)
        setNuevito(datos.filter( valor => valor.ciudad.toUpperCase().includes(inputSearch.toUpperCase())))
    }
    return (
        <form 
            action="" 
            className="busqueda">
            <input 
                type="search" 
                id="input-search" 
                placeholder="Escribí una ciudad..." 
                className="input-search"
                onChange={handlePress}/>
            <ul>
                {
                    nuevito.length>0 ? nuevito?.map((valor) => (
                        <Tarjeta api={valor} key={valor.id}/>
                        )) : <Info>Nada por aquí ... ☝🏼 </Info>                       
                }
            </ul>
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
import React from 'react'
import styled from 'styled-components';
import { WiHorizonAlt, WiHorizon, WiThermometer, WiHumidity, WiBarometer , WiStrongWind, WiTime8} from "react-icons/wi";
import { FaCalendarAlt } from 'react-icons/fa';

const Next = ({data}) => {

    const obtenerIcono = (source) => {
        return `http://openweathermap.org/img/wn/${source}@2x.png`
    }

  return (
    <Card>
        <img src={obtenerIcono(data.weather[0].icon)} alt="icon" />
        <div>
            <Item>
            <FaCalendarAlt />
                <i>{(data.dt_txt).split(" ")[0]}</i>
            </Item>
            <Item>
            <WiTime8 />
                <i>{(data.dt_txt).split(" ")[1]}</i>
            </Item>
        <Item>
            <WiThermometer />
            <p>{`${(parseFloat(data.main.temp) - 275.15.toFixed(2)).toFixed(2)} °C`}</p>
        </Item>

        <Item>
            <WiHumidity/>
            <p>{data.main.humidity}</p>            
        </Item>
        <Item>
            <WiStrongWind />
            <p>{data.wind.speed }</p>
        </Item>   
        </div>


    </Card>
  )
}

export default Next;

export const Card = styled.div`
    background: gray;
    padding: 5px 20px 5px 20px;
    margin: 5px;
    display: flex;
    img{
        width: 20%;
        margin: auto;
    }
    `;

export const Item = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    svg{
        font-size: 20px;
    }
`;
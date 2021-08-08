import React from 'react'
import diaDespejado from '../img/dia-despejado.png';
import cubierto from '../img/cubierto.png';
import diaNublado from '../img/dia-nublado.png';
import lluvioso from '../img/lluvioso.png';
import nieve from '../img/snowing.png';
import tormenta from '../img/tormenta.png';
import pregunta from '../img/pregunta.png';

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
            <li className="tarjeta">
                <h2>{api.prov}</h2>
                <h3>{api.ciudad}</h3>
                <img src={determinarIcono("")} alt="mh" className="avatar"/>

                <div className="contorno">
                    <p className="titulo">Temperatura</p>
                    <p className="descrip">{api.temp}</p>
                </div>
                <div className="contorno">
                    <p className="titulo">Cielo</p>
                    <p className="descrip">{api.cielo}</p>
                </div>
                <div className="contorno">
                    <p className="titulo">Humedad</p>
                    <p className="descrip">{api.humedad}</p>
                </div>
                <div className="contorno">
                    <p className="titulo">Presión</p>
                    <p className="descrip">{api.presion}</p>
                </div>
                <div className="contorno">
                    <p className="titulo">Viento</p>
                    <p className="descrip">{`${api.viento}km/h - ${api.vientoDir}` }</p>
                </div>
            </li>
    )
}

export default Tarjeta;

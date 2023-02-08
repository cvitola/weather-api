
//en este caso para Fetch devolverá otra funcion, no un objeto, sera asincrona. Presisará un middleware.

export const setInfo = (apiNuevos) => ({
    type: 'SET_API',
    payload: apiNuevos,
})

export const setCiudades = (apiweather) => ({
    type: 'SET_WEATHER',
    payload: apiweather,
})


export const levantarInfo = () => async(dispatch) =>{ //1. se crea la accion asincrona y vamos al reducer
    const posts = await fetch('https://ws.smn.gob.ar/map_items/weather');
    const data = await posts.json();
    dispatch(setInfo(data))

}

export const obtenerClimaDe = async (lat,lon) => {
    try {
        const clima = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=306395a7a86009e9ee4f4eba4504ee8f`);
        const data = await clima.json();
        console.log(data)
        return (data)
    } catch (error) {
        return error;
    }


}

export const filtrar = (dato) => ({
    type: 'FILTRAR_API',
    payload: dato,
})


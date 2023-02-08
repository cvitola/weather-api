

export const ApiReducer = (state = [], action) => {
 
    switch (action.type) {
        case 'SET_API':
            const nuevoArray = action.payload.map(valor =>(
                {
                    id: valor._id,
                    ciudad: valor.name,
                    prov: valor.province,
                    lat: valor.lat,
                    lon: valor.lon
                }
            ))
            return [...state, ...nuevoArray];
    
        case 'SET_WEATHER':
            return[...state, action.payload];
        case 'FILTRAR_API':
                const filtrados = action.state.filter( valor =>(
                    action.payload === valor.name 
                ))
                return [...state, ...filtrados]
        default:
            return state;
    }
}

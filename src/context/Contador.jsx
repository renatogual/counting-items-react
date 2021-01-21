import React, { useState } from 'react'

export const AppContext = React.createContext(0)

const ContadorProvider = props => {
    const [contador, setContador] = useState(0)

    function addContador() {
        setContador(contador + 1)
    }
    
    function subContador() {
        setContador(contador - 1)
    }

    return (
        <AppContext.Provider value={{contador, addContador, subContador}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContadorProvider
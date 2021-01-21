import React, { useState, useEffect, useContext } from 'react'
import './Badge.css'
import {AppContext} from '../context/Contador'

export default (props) => {
    const context = useContext(AppContext)

    return (
        <div className="notification">
            <span>Contador</span>
            <span className="badge">{context.contador}</span>
        </div>
            
    )
}
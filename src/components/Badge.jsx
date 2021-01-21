import React from 'react'
import './Badge.css'

export default (props) => {

    return (
        <a href="#" className="notification">
            <span>Contador</span>
            <span className="badge">0</span>
        </a>
    )
}
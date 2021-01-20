import React from 'react'
import './Button.css'

export default (props) => {
    return (
        <div className="btn">
            <button onClick={props.setItem}>{props.operation}</button>
        </div>
    )
}
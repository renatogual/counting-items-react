import React from 'react'
import './Button.css'

export default (props) => {
    return (
        <div className="btn">
            <button {...props}>{props.children}</button>
        </div>
    )
}
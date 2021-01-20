import React from 'react'
import './Display.css'

import Button from '../components/Button'

export default (props) => {
    return (
        <div className="display">
            {props.number}
        </div>
    )
}
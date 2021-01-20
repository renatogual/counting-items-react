import React from 'react'
import './Card.css'

import Button from './Button'
import Display from './Display'

export default (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {props.name}
            </div>
            <div className="card-footer">
                <Button operation="-" />
                <Display />
                <Button operation="+" />
            </div>
        </div>
    )
}
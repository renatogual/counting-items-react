import React, { useState, useEffect, useContext } from 'react'
import './Card.css'

import Button from './Button'
import Display from './Display'
import {AppContext} from '../context/Contador'

export default (props) => {
    const context = useContext(AppContext)

    const [count, setCount] = useState(0)

    function addContador() {
        setCount(count + 1)
        context.addContador()
    }
    
    function subContador() {
        setCount(count - 1)
        context.subContador()
    }
    
    return (
        <div className="card">
            <div className="card-header">
                {props.name}
            </div>
            <div className="card-footer">
                <Button disabled={count == 0} onClick={() => subContador()}>
                    -
                </Button>
                <Display number={count}/>
                <Button onClick={() => addContador()}>
                    +
                </Button>
            </div>
        </div>
    )
}
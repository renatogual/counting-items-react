import React, { useState } from 'react'
import './Card.css'

import Button from './Button'
import Display from './Display'

export default (props) => {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <div className="card-header">
                {props.name}
            </div>
            <div className="card-footer">
                <Button operation="-" setItem={() => setCount(count-1)}/>
                <Display number={count}/>
                <Button operation="+" setItem={() => setCount(count+1)}/>
            </div>
        </div>
    )
}
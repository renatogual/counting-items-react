import React from 'react'
import './Content.css'

import Card from '../Card'

export default (props) => {
    return (
        <div className='content'>
            <Card name='Item1' />
            <Card name='Item2' />
            <Card name='Item3' />
        </div>
    )
}
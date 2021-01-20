import React from 'react'
import './Content.css'

import Card from '../components/Card'

export default (props) => {
    return (
        <div className='content'>
            <Card name='Item1' />
            <Card name='Item2' />
            <Card name='Item3' />
            <Card name='Item4' />
            <Card name='Item5' />
            <Card name='Item6' />
        </div>
    )
}
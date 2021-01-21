import React from 'react'
import './App.css'
import Nav from './components/layout/Nav'
import Content from './components/layout/Content'

export default () => {
    return (
        <div className="app">
            <Nav />
            <Content />
        </div>
    )
}

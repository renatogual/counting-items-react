import React from 'react'
import './App.css'
import Nav from './components/layout/Nav'
import Content from './components/layout/Content'
import ContadorProvider from './context/Contador'

export default () => {
    return (
        <div className="app">
            <ContadorProvider>
                <Nav />
                <Content />
            </ContadorProvider>
        </div>
    )
}

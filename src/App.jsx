import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Content from './components/Content'

export default () => {
  return (
    <div className="app">
      <Nav />
      <Content />
    </div>
  )
}

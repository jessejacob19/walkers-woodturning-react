import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div class='container'>
      <Router path='/' component={Header}/>






      <Router path='/' component={Footer}/>
    </div>
  )
} 
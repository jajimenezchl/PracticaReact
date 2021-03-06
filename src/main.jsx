import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import HolaMundo from '/Components/Examples/HolaMundo'
import ComponentProps from '/Components/Examples/ComponentProps'
import Estados from '/Components/Examples/Estados'


ReactDOM.render(
  <React.StrictMode>
    <HolaMundo />
    <ComponentProps name='Jaime'/>
    <Estados />
  </React.StrictMode>,
  document.getElementById('root')
)

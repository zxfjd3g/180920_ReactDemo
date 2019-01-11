import React from 'react'

import logo from './logo.svg'
import './App.css'

/*
应用根组件
 */
export default class App extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" className='logo'/>
        <h2>first react demo</h2>
      </div>
    )
  }
}
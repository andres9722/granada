import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/Molecules/Header/Header.jsx'
import Routes from './components/Utils/Routes.jsx'
import './App.scss'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <Header />
          <Routes />
        </div>
      </HashRouter>
    )
  }
}

export default App

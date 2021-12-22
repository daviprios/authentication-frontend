import React from 'react'
import './App.sass'
import 'styles/global.sass'

import { Outlet, Link } from 'react-router-dom'

const App = () => {
  return (
    <div id='App'>
      <nav>
        <ul>
          <Link to='/login'>
            <li>Login</li>
          </Link>
          <Link to='/signup'>
            <li>Signup</li>
          </Link>
          <Link to='/profile'>
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default App

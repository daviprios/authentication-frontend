import React from 'react'

import { HashRouter, Route, Routes as Switch } from 'react-router-dom'

import App from './App'
import Login from './Login'
import Signup from './Signup'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' element={<App/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='*' element={<p style={{ width: '100%', margin: '2rem auto', textAlign: 'center' }}>404 - NotFound</p>}/>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Routes

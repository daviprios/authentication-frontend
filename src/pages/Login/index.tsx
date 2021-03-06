import React, { FormEvent, useState } from 'react'
import './index.sass'

import Api from 'api/Api'

const Login = () => {
  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    Api.login(username, password)
    event.preventDefault()
  }

  const [username, setUsername] = useState('')
  const onChangeUsername = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const [password, setPassword] = useState('')
  const onChangePassword = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  return (
    <div id='Login'>
      <form onSubmit={submitLogin}>
        <label>
          Username:
          <input type='text' placeholder='username' onChange={onChangeUsername} value={username}/>
        </label>
        <label>
          Password:
          <input type='password' placeholder='password' onChange={onChangePassword} value={password}/>
        </label>

        <button type='submit'>Login</button>
        <button type='reset'>Clear</button>
      </form>
    </div>
  )
}

export default Login

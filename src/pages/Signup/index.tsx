import Api from 'api/Api'
import React, { FormEvent, useState } from 'react'
import './index.sass'

const Signup = () => {
  const submitSignup = (event: FormEvent<HTMLFormElement>) => {
    Api.signup(username, password, email)
    event.preventDefault()
  }

  const [username, setUsername] = useState('')
  const onChangeUsername = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }
  
  const [email, setEmail] = useState('')
  const onChangeEmail = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const [password, setPassword] = useState('')
  const onChangePassword = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  return (
    <div id='Signup'>
      <form onSubmit={submitSignup}>
        <label>
          Username:
          <input type='text' placeholder='username' onChange={onChangeUsername} value={username}/>
        </label>
        <label>
          Email:
          <input type='email' placeholder='email' onChange={onChangeEmail} value={email}/>
        </label>
        <label>
          Password:
          <input type='password' placeholder='password' onChange={onChangePassword} value={password}/>
        </label>
        <button type='submit'>Signup</button>
        <button type='reset'>Clear</button>
      </form>
    </div>
  )
}

export default Signup

import React from 'react'

const Login = () => {
  return (
    <div id='Login'>
      <form>
        <label>
          Username
          <input type='text' placeholder='username' />
        </label>
        <label>
          Password
          <input type='password' placeholder='password'/>
        </label>

        <button type='submit'>Login</button>
        <button type='reset'>Clear</button>
      </form>
    </div>
  )
}

export default Login

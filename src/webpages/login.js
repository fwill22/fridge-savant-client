import React from 'react'
import LogInForm from '../components/logInForm'

const Login = () => {

  const handleSignUpClick = (event) => {
    console.log('test')
  }

  return (
    <div>
      <h1>Fridge Savant - Login</h1>
      <p>Login Page</p>
      <LogInForm handleSignUpClick={handleSignUpClick} />
    </div>
  )
}

export default Login

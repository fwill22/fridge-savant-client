import React from 'react'
import LogInForm from '../components/logInForm'
import SignUpForm from '../components/signUp'

const Login = () => {

  const handleSignUpClick = (event) => {
    console.log('test')
    //display sign up form component here
  }

  return (
    <div>
      <h1>Fridge Savant - Login</h1>
      <p>Login Page</p>
      <LogInForm handleSignUpClick={handleSignUpClick} />
      <SignUpForm />
    </div>
  )
}

export default Login

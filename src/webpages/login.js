import React from 'react'
import LoginForm from '../components/loginForm'
import SignUpForm from '../components/signUpForm'
import './login.css'

const Login = () => {

  const handleSignUpClick = (event) => {
    console.log('test')
    //display sign up form component here
  }

  return (
    <div className='login-container'>
      <h1 className='login-header'>Fridge Savant - Login</h1>
      <LoginForm handleSignUpClick={handleSignUpClick} />
      {/* <SignUpForm /> */}
    </div>
  )
}

export default Login

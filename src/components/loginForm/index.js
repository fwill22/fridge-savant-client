import React, { useState } from 'react';
import './index.css';

const LoginForm = ({ handleSignUpClick }) => {
  const [logInDetails, setLogInDetails] = useState({
    email : "",
    password : ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setLogInDetails(prevState => ({
      ...prevState,
      [name] : value
    }))
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()
    //authentication API call
  }

  

  return (
    <div className='loginForm'>
      <h2 className='loginTitle' data-testid='loginTitle'>Login</h2>
      <form onSubmit={handleSubmitClick}>
        <input type="email" 
              className="form-input"
              id="loginEmail" 
              name="email"
              placeholder="Email" 
              value={logInDetails.email} 
              onChange={handleChange}
              required />
        <br/>
        <input type='password'
              className="form-input"
              id = 'loginPassword'
              name='password'
              placeholder='Password'
              value={logInDetails.password}
              onChange={handleChange}
              required />
        <br/>
        <input type='submit' className='formButton' id='loginButton' value='Log In' data-testid='loginButton'/>
      </form>
      <p>
        Don't have an account? <span className='signUpLink' data-testid='signUpLink' onClick={handleSignUpClick}>Sign Up!</span>
      </p>
    </div>
  )
}


export default LoginForm
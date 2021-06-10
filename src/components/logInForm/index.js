import React, { useState } from 'react';
import './index.css';

const LogInForm = ({ handleSignUpClick }) => {
  const [logInDetails, setLogInDetails] = useState({
    email : "",
    password : ""
  })

  const handleChange = (event) => {
    const {id, value} = event.target
    setLogInDetails(prevState => ({
      ...prevState,
      [id] : value
    }))
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()
    //authentication API call
  }

  

  return (
    <div className='logInForm'>
      <input type="email" 
             id="email" 
             placeholder="Enter email" 
             value={logInDetails.email} 
             onChange={handleChange} />
      <input type='password'
             id = 'password'
             placeholder='Password'
             value={logInDetails.password}
             onChange={handleChange} />
      <button type='submit'
              onClick={handleSubmitClick} >
        Log In
      </button>
      <p>
        Don't have an account? <a onClick={handleSignUpClick}>Sign Up!</a>
      </p>
    </div>
  )
}

export default LogInForm
import React, { useState } from 'react';
import './index.css';

const SignUpForm = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    email : "",
    name : "",
    username : "",
    password : "",
    confirmPassword : ""
  })

  const handleChange = (event) => {
    const {id, value} = event.target
    setSignUpDetails(prevState => ({
      ...prevState,
      [id] : value
    }))
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()
    //create user API call
  }

  

  return (
    <div className='logInForm'>
      <form onSubmit={handleSubmitClick}> 
        <input type="email" 
              id="email" 
              placeholder="Enter email" 
              value={signUpDetails.email} 
              onChange={handleChange} 
              required />
        <input type="text" 
              id="name" 
              placeholder="Enter name" 
              value={signUpDetails.name} 
              onChange={handleChange}
              required />
        <input type="text" 
              id="username" 
              placeholder="Enter Username" 
              value={signUpDetails.username} 
              onChange={handleChange} />
        <input type='password'
              id = 'password'
              placeholder='Password'
              value={signUpDetails.password}
              onChange={handleChange}
              required />
        <input type='password'
              id = 'confirmPassword'
              placeholder='Confirm Password'
              value={signUpDetails.confirmPassword}
              onChange={handleChange} 
              required />
        <input type='submit' value='Sign Up'/>
      </form>
    </div>
  )
}

//close button to delete this component

export default SignUpForm
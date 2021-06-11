import React, { useState } from 'react';
import './index.css';

const SignUpForm = ({ handleSignUpClick }) => {
  const [signUpDetails, setSignUpDetails] = useState({
    email : "",
    name : "",
    username : "",
    password : "",
    confirmPassword : ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setSignUpDetails(prevState => ({
      ...prevState,
      [name] : value
    }))
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()
    if(signUpDetails.password === signUpDetails.confirmPassword) {
      sendDetailsToServer()
      handleSignUpClick()
    } else {
      console.log("Error: Passwords do not match") 
      // Add in flash message 
    }
  }

  const sendDetailsToServer = async () => {
    if(signUpDetails.email.length && signUpDetails.password.length) {
      // and error is null || success message present 
      const userDetails={
        "email":signUpDetails.email,
        "name":signUpDetails.name,
        "username":signUpDetails.username,
        "password":signUpDetails.password
      }
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(userDetails)
      }).catch((error) => {
        // Server response error message
        console.log(error)
      })
      return response.json()
    }
  }  

  return (
    <div className='signUpForm'>
      <div className='closeSignUp'> 
        <span className='closeSignUpLink' onClick={handleSignUpClick}>X</span>
      </div>
      <h2 className='signUpTitle'>Enter your details</h2>
      <form onSubmit={handleSubmitClick}> 
        <input type="email" 
              name='email'
              className="form-input"
              id="signUpEmail" 
              placeholder="Email" 
              value={signUpDetails.email} 
              onChange={handleChange}
              required />
        <input type="text"
              name='name'              
              className="form-input"
              id="signUpName" 
              placeholder="Name" 
              value={signUpDetails.name} 
              onChange={handleChange}
              required />
        <input type="text"
              name='username'        
              className="form-input" 
              id="signUpUsername" 
              placeholder="Username" 
              value={signUpDetails.username} 
              onChange={handleChange} />
        <input type='password'
              name='password'
              className="form-input"
              id = 'signUpPassword'
              placeholder='Password'
              value={signUpDetails.password}
              onChange={handleChange}
              required />
        <input type='password'
              name='confirmPassword'
              className="form-input"
              id = 'signUpConfirmPassword'
              placeholder='Confirm password'
              value={signUpDetails.confirmPassword}
              onChange={handleChange}
              required />
        <br/>
        <input className='formButton' type='submit' value='Sign Up' />
      </form>
    </div>
  )
}

//close button to delete this component

export default SignUpForm
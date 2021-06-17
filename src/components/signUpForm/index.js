import React, { useState, useContext } from 'react';
import { FlashContext } from '../../providers/Flash';
import './index.css';
import axios from 'axios'

const SignUpForm = ({ handleCardFlip }) => {
  const initialState = {
    email : "",
    name : "",
    username : "",
    password : "",
    confirmPassword : ""
  }
  
  const [signUpDetails, setSignUpDetails] = useState(initialState)
  
  const {createFlashMessage} = useContext(FlashContext);

  const handleChange = (event) => {
    const {name, value} = event.target
    setSignUpDetails(prevState => ({
      ...prevState,
      [name] : value
    }))
  }
  
  const handleSignUpSubmit = (event) => {
    event.preventDefault()
    if(signUpDetails.password === signUpDetails.confirmPassword) {
      sendDetailsToServer()
      setSignUpDetails(initialState)
      handleCardFlip()
    } else {
      createFlashMessage({
        type: "error",
        message: "Error: Passwords do not match",
      })
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

      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/signup",
          JSON.stringify(userDetails),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        createFlashMessage({
          type: "success",
          message: `Account created. Welcome ${response.data.name}!`,
        })
      } catch (e) {
        createFlashMessage({ type: "error", message: `Error: ${e.response.data.errors[0].msg}`})
      }
    }
  }  

  return (
    <div className='signUpForm'>
      <div className='closeSignUp'> 
        <span className='closeSignUpLink' onClick={handleCardFlip}>X</span>
      </div>
      <h2 className='signUpTitle' data-testid='signUpTitle'>Enter your details</h2>
      <form onSubmit={handleSignUpSubmit}> 
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
        <input className='formButton' id='signUpButton' type='submit' data-testid='signUpLink' value='Sign Up' />
      </form>
    </div>
  )
}


export default SignUpForm
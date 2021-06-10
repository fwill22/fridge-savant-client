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
    if(signUpDetails.password === signUpDetails.confirmPassword) {
      sendDetailsToServer()
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
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(userDetails)
      })
      return response.json()
    }
  }

  const ingredientRequest = async (ingredient) => {
    let result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${ingredient}`)
    let json = await result.json()
    console.log(json, basket)
  }
  

  return (
    <div className='logInForm'>
      <input type="email" 
             id="email" 
             placeholder="Enter email" 
             value={signUpDetails.email} 
             onChange={handleChange} />
      <input type="text" 
             id="name" 
             placeholder="Enter name" 
             value={signUpDetails.name} 
             onChange={handleChange} />
      <input type="text" 
             id="username" 
             placeholder="Enter Username" 
             value={signUpDetails.username} 
             onChange={handleChange} />
      <input type='password'
             id = 'password'
             placeholder='Password'
             value={signUpDetails.password}
             onChange={handleChange} />
      <input type='password'
             id = 'confirmPassword'
             placeholder='Confirm Password'
             value={signUpDetails.confirmPassword}
             onChange={handleChange} />
      <button type='submit'
              onClick={handleSubmitClick} >
        Sign Up
      </button>
    </div>
  )
}

//close button to delete this component

export default SignUpForm
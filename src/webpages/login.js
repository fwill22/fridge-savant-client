import React from 'react'
import LoginForm from '../components/loginForm'
import SignUpForm from '../components/signUpForm'
import './login.css'

const Login = () => {

  const [isRotated, setIsRotated] = React.useState(false);

  const onRotate = () => setIsRotated((rotated) => !rotated);

  const handleSignUpClick = (event) => {
    console.log('test')
    //display sign up form component here
  }

  return (
    <div className='login-container'>
      <h1 className='login-header'>Fridge Savant - Login</h1>
      <div className='form-wrapper'>
        <div className={`card ${isRotated ? 'rotated' : ''}`} onClick={onRotate}>
          <div className='front'>
            <LoginForm handleSignUpClick={handleSignUpClick} />
          </div>
          <div className='back'>
            <SignUpForm />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login


  // return(
  //   <div className={`card ${isRotated ? 'rotated' : ''}`} onClick={onRotate}>
  //     <div className="front"> 

  //     </div>
  //     <div className="back"> 

  //     </div>
  //   </div>
  // );
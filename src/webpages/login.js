import React from 'react'
import LoginForm from '../components/loginForm'
import SignUpForm from '../components/signUpForm'
import './login.css'

const Login = () => {

  const [isRotated, setIsRotated] = React.useState(false);

  const handleSignUpClick = () => setIsRotated((rotated) => !rotated);

  return (
    <div className='login-container'>
      <h1 className='login-header'>Fridge Savant - Login</h1>
      <div className='form-wrapper'>
        <div className={`card ${isRotated ? 'rotated' : ''}`} >
          <div className='front'>
            <LoginForm handleSignUpClick={handleSignUpClick} />
          </div>
          <div className='back'>
            <SignUpForm handleSignUpClick={handleSignUpClick} />
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
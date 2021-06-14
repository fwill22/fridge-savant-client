import React from 'react';
import LoginForm from '../../components/loginForm';
import SignUpForm from '../../components/signUpForm';
import './index.css';

const Login = () => {
  const [isRotated, setIsRotated] = React.useState(false);

  const handleCardFlip = () => setIsRotated((rotated) => !rotated);

  return (
    <div className='login-container'>
      <h1 className='login-header'>Fridge Savant</h1>
      <div className='form-wrapper'>
        <div className={`login-card ${isRotated ? 'rotated' : ''}`}>
          <div className='front'>
            <LoginForm handleCardFlip={handleCardFlip} />
          </div>
          <div className='back'>
            <SignUpForm handleCardFlip={handleCardFlip} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

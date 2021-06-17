import React, { useState, useContext } from 'react';
import { FlashContext } from '../../providers/Flash';
import { StoreContext } from '../../providers/store';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import './index.css';

const Login = () => {
  window.onload = function () {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('form-main-container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  };

  const initialState = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  };

  const [signUpDetails, setSignUpDetails] = useState(initialState);

  const { createFlashMessage } = useContext(FlashContext);

  const handleSignUpChange = (event) => {
    console.log(event)
    const { name, value } = event.target;
    setSignUpDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (signUpDetails.password === signUpDetails.confirmPassword) {
      sendDetailsToServer();
      setSignUpDetails(initialState);
    } else {
      createFlashMessage({
        type: 'error',
        message: 'Error: Passwords do not match',
      });
    }
  };

  const sendDetailsToServer = async () => {
    if (signUpDetails.email.length && signUpDetails.password.length) {
      // and error is null || success message present
      const userDetails = {
        email: signUpDetails.email,
        name: signUpDetails.name,
        password: signUpDetails.password,
      };

      try {
        const response = await axios.post(
          'http://localhost:5000/api/users/signup',
          JSON.stringify(userDetails),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        createFlashMessage({
          type: 'success',
          message: `Account created. Welcome ${response.data.name}!`,
        });
      } catch (e) {
        createFlashMessage({
          type: 'error',
          message: `Error: ${e.response.data.errors[0].msg}`,
        });
      }
    }
  };

  const [state, actions] = useContext(StoreContext);

  const [logInDetails, setLogInDetails] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLogInDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const status = await actions.signIn(logInDetails);
    if (status >= 400) {
      createFlashMessage({
        type: 'error',
        message: 'Invalid email or password.',
      });
    } else if (status >= 200) {
      createFlashMessage({
        type: 'success',
        message: 'Successfully logged in.', //`Successfully logged in. Welcome ${state.user.name}!` - would like but state not updating in time
      });
      history.push('/');
    }
  };

  return (
    <div className='form-body'>
      <div className='form-main-container' id='form-main-container'>
        <div className='login-form-container sign-up-container'>
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type='text'
              placeholder='Name'
              name='name'
              onChange={handleSignUpChange}
              value={signUpDetails.name}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleSignUpChange}
              value={signUpDetails.email}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={signUpDetails.password}
              onChange={handleSignUpChange}
            />
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={signUpDetails.confirmPassword}
              onChange={handleSignUpChange}
            />
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className='login-form-container sign-in-container'>
          <form onSubmit={handleLoginSubmit}>
            <h1>Sign in</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
              <a href='#' className='social'>
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
            <span>or use your account</span>
            <input
              type='email'
              placeholder='Email'
              onChange={handleLoginChange}
              name='email'
              value={logInDetails.email}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleLoginChange}
              value={logInDetails.password}
            />
            <a href='#'>Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className='ghost' id='signIn'>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Chef!</h1>
              <p>Enter your personal details and find the perfect recipes</p>
              <button className='ghost' id='signUp'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

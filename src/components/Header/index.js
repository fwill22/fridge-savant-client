import React from 'react';
import './index.css';
import logo from './images/logo.png';
import { Link } from "react-router-dom";
import {clearStoreToken} from  '../../lib/token'

const Header = () => {
  return (
    <div>
      <header class='header-outer'>
        <div class='header-inner responsive-wrapper'>
          <div class='header-logo'>
            <img src={logo} />
          </div>
          <nav className='header-navigation' data-testid='navbar'>
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="">
              <span>About</span>
            </Link>
            <Link to='/bookmarks'>
              <span>My Recipes</span>
            </Link>
            <Link to="/login">
              <span onClick={() => clearStoreToken()}>Log Out</span>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

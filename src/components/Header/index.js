import React from 'react';
import './index.css';
import { Redirect, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className='header-outer'>
        <div className='header-inner responsive-wrapper'>
          <div className='header-logo' >
            <img src='https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg' data-testid='headerLogo'/>
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
              <span>Log Out</span>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

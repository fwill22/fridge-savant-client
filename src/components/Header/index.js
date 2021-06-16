import React from 'react';
import './index.css';
import logo from './images/logo.png';

const Header = () => {
  return (
    <div>
      <header class='header-outer'>
        <div class='header-inner responsive-wrapper'>
          <div class='header-logo'>
            <img src={logo} />
          </div>
          <nav class='header-navigation' data-testid='navbar'>
            <button>Home</button>
            <button>About</button>
            <button>Recipes</button>
            <button>Profile</button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

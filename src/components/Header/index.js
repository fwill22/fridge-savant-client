import React from 'react';
import './index.css';

const Header = () => {
  return (
    <div>
      <header className='header-outer'>
        <div className='header-inner responsive-wrapper'>
          <div className='header-logo' >
            <img src='https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg' data-testid='headerLogo'/>
          </div>
          <nav className='header-navigation' data-testid='navbar'>
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

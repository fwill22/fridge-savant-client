import React from 'react';
import './index.css';

const Header = () => {
  return (
    <div>
      <header class='header-outer'>
        <div class='header-inner responsive-wrapper'>
          <div class='header-logo'>
            <img src='https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg' />
          </div>
          <nav class='header-navigation'>
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

import React, { useEffect } from 'react';
import './index.css';

const Advertisements = () => {
  return (
    <div className='advert-container'>
      <a href='https://www.wagamama.com' target='_blank'>
        <img
          src='https://penji.co/wp-content/uploads/2019/03/wagamama-Food-Ad-Designs.jpg'
          style={{ maxWidth: '100%' }}
        ></img>
      </a>
      <a href='https://www.instagram.com/demorfi/?hl=en' target='_blank'>
        <img
          src='https://penji.co/wp-content/uploads/2019/03/demorfi-Food-Ad-Designs.jpg'
          style={{ maxWidth: '100%' }}
        ></img>
      </a>
      <a href='https://curtistea.com/' target='_blank'>
        <img
          src='https://penji.co/wp-content/uploads/2019/03/CurtisTea-Food-Ad-Designs.jpg'
          style={{ maxWidth: '100%' }}
        ></img>
      </a>
    </div>
  );
};

export default Advertisements;

import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer_about'>
          <h3>About Us</h3>
          <p>
            Fridge Savant is a virtual kitchen assistant to help you make the
            best with what you've got. Designed to inspire creativity in the
            kitchen when your fridge looks bare, the app makes decision making
            easier when it comes to meal times. By encouraging you to use up the
            ingredients you have to hand, Fridge Savant helps you to reduce food
            waste, and so manage your budget better.
          </p>
        </div>
        <div className='footer_main'>
          <h3>Quick Links</h3>
          <ul>
            <li>Blog</li>
            <li>API</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className='footer_right'>
          <div className='footer_links'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faTelegram} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>
      </div>
      <div className='copyright'>
        Copyright © 2021 All Rights Reserved by FridgeBoi.
      </div>
    </footer>
  );
};

export default Footer;

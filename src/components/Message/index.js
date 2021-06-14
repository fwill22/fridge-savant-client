import React from 'react';
import './index.css';
import FlashMessage from 'react-flash-message';

const Message = () => (
  <FlashMessage duration={5000} persistOnHover={true}>
    <p>Message</p>
  </FlashMessage>
)

export default Message;
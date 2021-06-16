import React from 'react';
import './index.css';

const FlashMessage = ({type, message, setFlashMessage }) => {
  return (
    <div className="flash-message" onClick={() => setFlashMessage(null)}>
      <p className={type}>{message}</p>
    </div>
  )
}

export default FlashMessage

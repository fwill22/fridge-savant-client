import React, { useState } from 'react';
import './index.css';

const FlashMessage = ({type, message, setFlashMessage }) => {

  return (
    <div className="flash-message" onClick={() => setFlashMessage(null)}>
      <div className={`flash-header-${type}`} />
      <div className="flash-content">
      <p>{message}</p>
      </div>
    </div>
  )
}

export default FlashMessage;

import React, { useState } from 'react';
import './index.css';

const FlashMessage = ({type, message, setFlashMessage }) => {

  const [outro, setOutro] = useState(0)

  return (
    <div className="flash-message" onClick={() => setOutro(1)} onAnimationEnd={() => setFlashMessage(null)} outro={outro}>
      <div className={`flash-header-${type}`} />
      <div className="flash-content">
        <p>{message}</p>
      </div>
    </div>
  )
}

export default FlashMessage;

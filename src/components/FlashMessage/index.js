import React, { useState } from 'react';
import './index.css';

const FlashMessage = ({type, message, setFlashMessage, resetMessage, outro, setOutro }) => {

  // const [outro, setOutro] = useState(0)

  // const resetMessage = () => {
  //   if(outro === 1) {
  //     setFlashMessage(null)
  //     setOutro(0)
  //   }
  // }

  return (
    <div className="flash-message" onClick={() => setOutro(1)} onAnimationEnd={() => resetMessage()} outro={outro}>
      <div className={`flash-header-${type}`} />
      <div className="flash-content">
        <p>{message}</p>
      </div>
    </div>
  )
}

export default FlashMessage;

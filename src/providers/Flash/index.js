import React, { useState } from 'react'
import FlashMessage from '../../components/FlashMessage'
import './index.css';

export const FlashContext = React.createContext(null);

const FlashProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState(null);
  const [outro, setOutro] = useState(0);

  const createFlashMessage = ({ type, message }) => {
    setFlashMessage({ type, message });
    setTimeout(() => {
      setOutro(1)
      resetMessage()
    }, 10000);
  };

  const resetMessage = () => {
    if(outro === 1) {
      setFlashMessage(null)
      setOutro(0)
    }
  }

  return (
    <FlashContext.Provider value={{ createFlashMessage }}>
      {flashMessage && (
        <div className="flash-message" onClick={() => setOutro(1)} onAnimationEnd={() => resetMessage()} outro={outro}>
          <div className={`flash-header-${flashMessage.type}`} />
          <div className="flash-content">
          <p>{flashMessage.message}</p>
          </div>
        </div>
      )}
      {children}
    </FlashContext.Provider>
  );
};

export default FlashProvider;

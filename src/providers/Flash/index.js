import React, { createContext, useState, useEffect } from 'react'
import FlashMessage from '../../components/FlashMessage'

const FlashContext = React.createContext(null);
const FlashProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState(null);
  const createFlashMessage = ({ type, message }) => {
    setFlashMessage({ type, message });
    setTimeout(() => {
      setFlashMessage(null);
    }, 10000);
  };
  return (
    <FlashContext.Provider value={{ createFlashMessage }}>
      {flashMessage && (
        <FlashMessage type={flashMessage.type} message={flashMessage.message} setFlashMessage={setFlashMessage}/>
      )}
      {children}
    </FlashContext.Provider>
  );
};

export default FlashProvider;

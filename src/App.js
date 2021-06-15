import React from 'react';
import Pages from './pages';
import FlashProvider from './providers/Flash';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <FlashProvider>
        <Pages />
      </FlashProvider>
    </div>
  );
};

export default App;

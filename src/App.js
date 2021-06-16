import React from 'react';
import Pages from './pages';
import './App.css';
import AuthProvider from './providers/auth';
import FlashProvider from './providers/Flash';

const App = () => {
  return (
    <div className='App'>
      <AuthProvider>
        <FlashProvider>
          <Pages />
        </FlashProvider>
      </AuthProvider>
    </div>
  );
};

export default App;

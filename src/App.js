import React from 'react';
import './App.css';
import { GlobalStyle } from './features/ui/theme/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="spender-app">
        <h1>Spender</h1>
      </div>
    </>
  );
};

export default App;

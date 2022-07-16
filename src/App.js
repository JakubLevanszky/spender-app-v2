import React from 'react';
import './App.css';
import ItemsList from './components/ItemsList/ItemsList';

const App = () => {
  return (
    <>
      <div className="spender-app">
        <h1>Spender</h1>
        <ItemsList />
      </div>
    </>
  );
};

export default App;

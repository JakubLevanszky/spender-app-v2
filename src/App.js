import React from 'react';
import './App.css';
import ItemsList from './components/ItemsList/ItemsList';
import Header from './features/ui/components/Header/Header';
import Input from './features/ui/components/Input/Input';

const App = () => {
  return (
    <>
      <Header />
      <ItemsList />
      <Input palceholder="test" name="test2" type="text" />
    </>
  );
};

export default App;

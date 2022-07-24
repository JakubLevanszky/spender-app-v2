import React from 'react';
// import ItemsList from './components/ItemsList/ItemsList';
import Layout from './features/ui/components/Layout/Layout';
import { GlobalStyle } from './features/ui/theme/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
      {/* <ItemsList /> */}
    </>
  );
};

export default App;

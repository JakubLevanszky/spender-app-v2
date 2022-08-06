import React from 'react';
import Layout from './features/ui/components/Layout/Layout';
import { GlobalStyle } from './features/ui/theme/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
};

export default App;

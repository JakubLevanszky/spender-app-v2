import React from 'react';
import AppWrapper from './features/ui/components/AppWrapper/AppWrapper';
import { GlobalStyle } from './features/ui/theme/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper />
    </>
  );
}

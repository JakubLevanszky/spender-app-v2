import React from 'react';
import SpenderApp from './features/ui/components/SpenderApp/SpenderApp';
import { GlobalStyle } from './features/ui/theme/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <SpenderApp />
    </>
  );
}

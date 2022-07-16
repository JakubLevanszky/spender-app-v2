import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}

html, body {
  padding: 0;
  height: 100%;
}

html {
  font-size: 62.5%; // 16 px = 1.6 rem | cons = if there is some library imported which uses etc 1 rem as a unit that will cause a problem and in whole application
}
`;

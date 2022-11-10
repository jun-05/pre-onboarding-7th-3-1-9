import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Nanum Gothic' !important;
    margin: 0;
    padding: 0;
  }
  html {
    width: 1440px;
    margin: 0 auto;
  }
  html, body, div#root {
    height: auto;
    
  }
  body {

  }
`;

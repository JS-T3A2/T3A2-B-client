import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  *,
  *:after,
  *:before,
  input[type='search'] {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    font-family: "Roboto", sans serif;
    font-size: 16px;
    
    height: 100%;

    min-height: 100%;
    min-width: 100%;

    overflow: hidden;

    width: 100%;
  }

  h1 {
      margin: 0;

      padding: 0;
  }
`;

export default GlobalStyle;

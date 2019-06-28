import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  @import url('https://fonts.googleapis.com/css?family=Raleway:500,600,800,900&display=swap');

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Raleway', sans-serif;
  }

  html:not(.hydrated) body {
    display: block;
  }
`;

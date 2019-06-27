import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  @import url('https://fonts.googleapis.com/css?family=Raleway:500,600,800,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Raleway', sans-serif;
  }
`

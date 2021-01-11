import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background: #D1D8E5;
  }

  body, input, button, a {
    color: #000;
    font-family: 'Poppins', sans-serif;
  }
`
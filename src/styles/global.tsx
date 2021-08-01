import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
// Colors

:root{
  --brand-blue-dark: #200E64;
  --brand-purple: #7A57FD;
  --brand-purple-light: #6F48EC;
  --brand-yellow-light: #FFD74F;
  --bg-gradient: linear-gradient(180deg, #7A57FD 0%, #6135D7 100%);
  
  // Default
  
  --white: #FFFFFF;
  --black: #000000;
  
}

// RESET
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
}

input{
  border: none;
}

input[type="password"]{
}

img {
  max-width: 100%;
  display: block;
}

html {
  width: 100%;
  font-size: 62.5%;
}

html, body {
  overflow-x: hidden;
  overflow-y: hidden;
}

button,
a {
  background-color: transparent;
  cursor: pointer;
}

`;
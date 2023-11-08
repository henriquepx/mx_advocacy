import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  scroll-behavior: smooth;
  vertical-align: baseline;
  list-style: none;
  text-decoration: none;
  line-height: 1.4;
  ::-webkit-scrollbar {
    width: 5px; 
}
::-webkit-scrollbar-thumb {
    background-color: #000000;
}
::-webkit-scrollbar-track {
    background-color: #ff0000; 
}
}

  /* 
  font-family: 'Belanosima', sans-serif;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-family: 'Roboto Mono', monospace;
  */
  
`;

export default GlobalStyle;
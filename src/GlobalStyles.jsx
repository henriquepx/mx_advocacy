import { createGlobalStyle } from 'styled-components';

export const primaryColor = "rgb(128, 1, 1)";
export const fontPrimary = 'Montserrat, sans-serif';

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
      background-color: #690202;
  }
  ::-webkit-scrollbar-track {
      background-color: #b3b3b3; 
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